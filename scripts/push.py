#!/usr/bin/env python3
"""Push local Next.js project to empty GitHub repo via Git Data API."""

import base64
import json
import os
import subprocess
import sys

REPO = "mulasty/mulagroup-site"
BRANCH = "new-app-mula-group"
BASE = r"C:\Users\uwpar\mulagroup-site"
EXCLUDE = {".git", ".next", "node_modules", "scripts", ".vercel", "out",
           "deploy.cmd", "push-to-github.bat", "opencode.json", "CLAUDE.md",
           ".gitignore", ".eslint*", ".vscode", "*.log", "1000x1000-white.png"}

def gh_api(method, path, data=None):
    cmd = ["C:\\Program Files\\GitHub CLI\\gh.exe", "api", "-X", method, f"/repos/{REPO}{path}"]
    if data:
        cmd += ["--input", "-"]
        inp = json.dumps(data)
    else:
        inp = None
    result = subprocess.run(cmd, input=inp, capture_output=True, text=True, encoding="utf-8")
    if result.returncode != 0:
        print(f"  API ERROR: {result.stderr[:300]}")
        return None
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return result.stdout

def collect_files():
    files = []
    for root, dirs, names in os.walk(BASE):
        dirs[:] = [d for d in dirs if d not in EXCLUDE and not d.startswith(".")]
        for n in names:
            if any(n.endswith(e.lstrip("*")) for e in EXCLUDE if e.startswith("*")):
                continue
            if n in EXCLUDE or n.startswith("."):
                continue
            full = os.path.join(root, n)
            rel = os.path.relpath(full, BASE).replace("\\", "/")
            files.append((rel, full))
    return files

def main():
    print("=" * 50)
    print("  MULA GROUP - GITHUB PUSH")
    print("=" * 50)

    files = collect_files()
    print(f"\n[1/4] Znaleziono {len(files)} plikow")

    # Create blobs
    print("\n[2/4] Tworzenie blobow...")
    tree_items = []
    for rel, full in files:
        with open(full, "rb") as f:
            content = f.read()
        encoded = base64.b64encode(content).decode("ascii")
        blob = gh_api("POST", "/git/blobs", {"content": encoded, "encoding": "base64"})
        if not blob:
            print(f"  FAILED: {rel}")
            continue
        tree_items.append({"path": rel, "mode": "100644", "type": "blob", "sha": blob["sha"]})
        print(f"  OK: {rel}")

    print(f"\n  {len(tree_items)} blobs OK")

    # Create tree
    print("\n[3/4] Tworzenie commitu...")
    tree = gh_api("POST", "/git/trees", {"tree": tree_items})
    if not tree:
        print("  ERROR: tree")
        sys.exit(1)

    commit = gh_api("POST", "/git/commits", {
        "message": "feat: initial landing page",
        "tree": tree["sha"]
    })
    if not commit:
        print("  ERROR: commit")
        sys.exit(1)

    # Create or update ref
    print("\n[4/4] Ustawianie brancha main...")
    ref = gh_api("POST", "/git/refs", {
        "ref": f"refs/heads/{BRANCH}",
        "sha": commit["sha"]
    })
    if not ref:
        # If ref already exists, update it
        ref = gh_api("PATCH", f"/git/refs/heads/{BRANCH}", {
            "sha": commit["sha"],
            "force": True
        })

    if ref:
        print(f"\n  SUKCES!")
        print(f"  Commit: {commit['sha'][:8]}")
        print(f"  URL: https://github.com/{REPO}")
    else:
        print("  ERROR: ref")
        sys.exit(1)

if __name__ == "__main__":
    main()
