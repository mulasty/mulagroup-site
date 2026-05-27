#!/usr/bin/env python3
"""Push local project to GitHub using Contents API."""

import base64
import json
import os
import urllib.request
import urllib.error

TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO = "mulasty/mulagroup-site-"
BRANCH = "main"
BASE_DIR = r"C:\Users\uwpar\mulagroup-site"
EXCLUDE = {
    ".git", ".next", "node_modules", "scripts", "1000x1000-white.png",
    "deploy.cmd", "push-to-github.bat", "opencode.json", "CLAUDE.md",
    ".gitignore", ".eslintrc.json", ".eslint.config.mjs", ".vscode"
}

def api_request(method, path, data=None):
    url = f"https://api.github.com/repos/{REPO}{path}"
    req = urllib.request.Request(url, method=method)
    req.add_header("Authorization", f"token {TOKEN}")
    req.add_header("Accept", "application/vnd.github.v3+json")
    req.add_header("User-Agent", "mulagroup-deploy")
    if data:
        req.add_header("Content-Type", "application/json")
        req.data = json.dumps(data).encode("utf-8")
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"  HTTP {e.code}: {body[:200]}")
        return None

def get_local_files():
    files = []
    for root, dirs, filenames in os.walk(BASE_DIR):
        # Prune excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE and not d.startswith(".")]
        for name in filenames:
            if name in EXCLUDE or name.startswith("."):
                continue
            full = os.path.join(root, name)
            rel = os.path.relpath(full, BASE_DIR).replace("\\", "/")
            files.append((rel, full))
    return files

def main():
    print("=" * 50)
    print("  MULA GROUP - GITHUB PUSH")
    print("=" * 50)

    # Get current branch SHA
    print("\n[1/5] Fetching branch info...")
    branch_info = api_request("GET", f"/git/ref/heads/{BRANCH}")
    base_sha = None
    base_tree_sha = None

    if not branch_info:
        print("  Repository is empty, creating initial commit...")
    else:
        base_sha = branch_info["object"]["sha"]
        print(f"  Base commit: {base_sha[:8]}")
        commit_info = api_request("GET", f"/git/commits/{base_sha}")
        base_tree_sha = commit_info["tree"]["sha"]

    # Collect local files
    print("\n[3/5] Collecting local files...")
    local_files = get_local_files()
    print(f"  Found {len(local_files)} files")

    # Create blobs
    print("\n[4/5] Creating blobs...")
    tree_items = []
    for rel, full in local_files:
        with open(full, "rb") as f:
            content = f.read()
        encoded = base64.b64encode(content).decode("utf-8")
        blob = api_request("POST", "/git/blobs", {"content": encoded, "encoding": "base64"})
        if blob:
            tree_items.append({"path": rel, "mode": "100644", "type": "blob", "sha": blob["sha"]})
        else:
            print(f"  FAILED: {rel}")

    print(f"  Created {len(tree_items)} blobs")

    # Create new tree
    print("\n[5/5] Creating commit and pushing...")
    tree = api_request("POST", "/git/trees", {"base_tree": base_tree_sha, "tree": tree_items})
    if not tree:
        print("  ERROR: Failed to create tree")
        return

    commit_payload = {
        "message": "feat: initial landing page",
        "tree": tree["sha"],
    }
    if base_sha:
        commit_payload["parents"] = [base_sha]
    new_commit = api_request("POST", "/git/commits", commit_payload)
    if not new_commit:
        print("  ERROR: Failed to create commit")
        return

    # Update branch reference
    updated = api_request("PATCH", f"/git/refs/heads/{BRANCH}", {"sha": new_commit["sha"], "force": True})
    if updated:
        print(f"\n  SUCCESS! Pushed {len(tree_items)} files.")
        print(f"  Commit: {new_commit['sha'][:8]}")
        print(f"  URL: https://github.com/{REPO}")
    else:
        print("  ERROR: Failed to update branch")

if __name__ == "__main__":
    main()
