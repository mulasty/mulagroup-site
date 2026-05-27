"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Agent =
  | { role: "system"; name: "SOC Monitor"; color: "text-rose-400"; bg: "bg-rose-400/10"; ring: "ring-rose-400/20" }
  | { role: "agent"; name: "Security Analyst"; color: "text-cyan-400"; bg: "bg-cyan-400/10"; ring: "ring-cyan-400/20" }
  | { role: "agent"; name: "DevOps Engineer"; color: "text-violet-400"; bg: "bg-violet-400/10"; ring: "ring-violet-400/20" }
  | { role: "agent"; name: "SRE Lead"; color: "text-amber-400"; bg: "bg-amber-400/10"; ring: "ring-amber-400/20" };

type Msg =
  | { type: "alert"; agent: Agent; content: string; delay: number }
  | { type: "thinking"; agent: Agent; steps: string[]; delay: number }
  | { type: "text"; agent: Agent; content: string; delay: number }
  | { type: "json"; agent: Agent; data: Record<string, string | number | boolean>; delay: number }
  | { type: "code"; agent: Agent; lang: string; code: string; delay: number }
  | { type: "table"; agent: Agent; headers: string[]; rows: (string | number)[][]; delay: number }
  | { type: "filetree"; agent: Agent; tree: string; delay: number }
  | { type: "divider"; label: string; delay: number };

/* ------------------------------------------------------------------ */
/*  Script                                                             */
/* ------------------------------------------------------------------ */

const SCRIPT: Msg[] = [
  {
    type: "alert",
    agent: { role: "system", name: "SOC Monitor", color: "text-rose-400", bg: "bg-rose-400/10", ring: "ring-rose-400/20" },
    content: "CRITICAL: Anomalous login detected — IP 185.220.101.44 geolocated to Tor exit node. 47 failed SSH attempts in 90s.",
    delay: 600,
  },
  { type: "divider", label: "INCIDENT-2025-0847 OPENED", delay: 400 },
  {
    type: "thinking",
    agent: { role: "agent", name: "Security Analyst", color: "text-cyan-400", bg: "bg-cyan-400/10", ring: "ring-cyan-400/20" },
    steps: [
      "Correlating auth logs with threat intel feeds...",
      "Matching IP against AbuseIPDB / VirusTotal...",
      "Calculating risk score...",
      "Cross-referencing with active user sessions...",
    ],
    delay: 800,
  },
  {
    type: "json",
    agent: { role: "agent", name: "Security Analyst", color: "text-cyan-400", bg: "bg-cyan-400/10", ring: "ring-cyan-400/20" },
    data: {
      incident_id: "INC-2025-0847",
      severity: "HIGH",
      confidence: 0.97,
      source_ip: "185.220.101.44",
      tor_exit: true,
      known_malicious: true,
      targeted_account: "admin@prod-db-01",
      lateral_movement_risk: "CRITICAL",
    },
    delay: 600,
  },
  {
    type: "text",
    agent: { role: "agent", name: "Security Analyst", color: "text-cyan-400", bg: "bg-cyan-400/10", ring: "ring-cyan-400/20" },
    content: "IP is a known Tor exit node with 1,400+ abuse reports. Target account has direct access to production RDS. Recommend immediate containment.",
    delay: 700,
  },
  {
    type: "thinking",
    agent: { role: "agent", name: "DevOps Engineer", color: "text-violet-400", bg: "bg-violet-400/10", ring: "ring-violet-400/20" },
    steps: [
      "Generating AWS WAF rule set...",
      "Building Terraform state diff...",
      "Preparing IAM lockdown policy...",
    ],
    delay: 700,
  },
  {
    type: "code",
    agent: { role: "agent", name: "DevOps Engineer", color: "text-violet-400", bg: "bg-violet-400/10", ring: "ring-violet-400/20" },
    lang: "hcl",
    code: `resource "aws_wafv2_ip_set" "threat_blocklist" {
  name               = "tor-exit-blocklist"
  scope              = "REGIONAL"
  ip_address_version = "IPV4"

  addresses = [
    "185.220.101.44/32",
    "185.220.101.0/24",
  ]
}

resource "aws_wafv2_web_acl_rule" "block_threats" {
  name     = "BlockHighRiskIPs"
  priority = 1

  action {
    block {}
  }

  statement {
    ip_set_reference_statement {
      arn = aws_wafv2_ip_set.threat_blocklist.arn
    }
  }
}`,
    delay: 800,
  },
  {
    type: "text",
    agent: { role: "agent", name: "DevOps Engineer", color: "text-violet-400", bg: "bg-violet-400/10", ring: "ring-violet-400/20" },
    content: "WAF rule deployed. Session tokens revoked. Network ACL updated across all 3 AZs.",
    delay: 500,
  },
  {
    type: "table",
    agent: { role: "agent", name: "SRE Lead", color: "text-amber-400", bg: "bg-amber-400/10", ring: "ring-amber-400/20" },
    headers: ["Resource", "Region", "Status", "Latency"],
    rows: [
      ["WAF ACL", "us-east-1", "ACTIVE", "28ms"],
      ["IAM Policy", "global", "APPLIED", "120ms"],
      ["Session Revoke", "us-east-1", "DONE", "45ms"],
      ["RDS Audit Log", "us-east-1", "FLUSHED", "12ms"],
    ],
    delay: 700,
  },
  {
    type: "filetree",
    agent: { role: "agent", name: "SRE Lead", color: "text-amber-400", bg: "bg-amber-400/10", ring: "ring-amber-400/20" },
    tree: `incidents/
└── INC-2025-0847/
    ├── timeline.json
    ├── forensics/
    │   ├── auth.log.gz
    │   ├── netflow.cap
    │   └── ioc-list.yaml
    ├── playbooks/
    │   └── containment.yml
    └── post-mortem.md`,
    delay: 600,
  },
  {
    type: "text",
    agent: { role: "agent", name: "SRE Lead", color: "text-amber-400", bg: "bg-amber-400/10", ring: "ring-amber-400/20" },
    content: "All systems nominal. Incident auto-documented. Post-mortem draft generated with recommended hardening steps.",
    delay: 600,
  },
  { type: "divider", label: "INCIDENT-2025-0847 RESOLVED — TTR 4m 12s", delay: 400 },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AIChatTerminal() {
  const [lines, setLines] = useState<
    { type: Msg["type"]; content?: React.ReactNode; agent?: Agent }[]
  >([]);
  const [showCursor, setShowCursor] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function runScript() {
    for (const msg of SCRIPT) {
      await sleep(msg.delay);
      setLines((prev) => {
        const next = [...prev];
        if (msg.type === "alert") {
          next.push({
            type: "alert",
            agent: msg.agent,
            content: <span className="font-semibold">{msg.content}</span>,
          });
        } else if (msg.type === "thinking") {
          next.push({
            type: "thinking",
            agent: msg.agent,
            content: (
              <div className="space-y-1">
                {msg.steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-500">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-current"
                      style={{ animation: `pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite` }}
                    />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            ),
          });
        } else if (msg.type === "text") {
          next.push({
            type: "text",
            agent: msg.agent,
            content: <span>{msg.content}</span>,
          });
        } else if (msg.type === "json") {
          next.push({
            type: "json",
            agent: msg.agent,
            content: <JsonBlock data={msg.data} />,
          });
        } else if (msg.type === "code") {
          next.push({
            type: "code",
            agent: msg.agent,
            content: <CodeBlock lang={msg.lang} code={msg.code} />,
          });
        } else if (msg.type === "table") {
          next.push({
            type: "table",
            agent: msg.agent,
            content: <SimpleTable headers={msg.headers} rows={msg.rows} />,
          });
        } else if (msg.type === "filetree") {
          next.push({
            type: "filetree",
            agent: msg.agent,
            content: <FileTree tree={msg.tree} />,
          });
        } else if (msg.type === "divider") {
          next.push({ type: "divider", content: <span>{msg.label}</span> });
        }
        return next;
      });
    }
    setIsDone(true);
  }

  /* Intersection trigger */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          setHasStarted(true);
          runScript();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Cursor blink */
  useEffect(() => {
    const id = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-slate-600 bg-slate-800/80 shadow-xl shadow-slate-300/30 backdrop-blur-2xl dark:border-white/[0.06] dark:bg-black/50 dark:shadow-black/60"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-300 bg-slate-200/40 px-5 py-3 dark:border-white/[0.06] dark:bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-[11px] text-slate-500 font-mono">mula-ai — multi-agent ops</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-cyan-400/8 px-3 py-1.5 text-[10px] font-medium text-cyan-400/80 ring-1 ring-cyan-400/15">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.5)]" />
          Na żywo
        </div>
      </div>

      {/* Chat body */}
      <div className="max-h-[520px] overflow-y-auto p-5 sm:p-7 space-y-5 font-mono text-[12px] leading-relaxed scroll-smooth">
        {lines.map((line, i) => {
          if (line.type === "divider") {
            return (
              <div key={i} className="flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-slate-300 dark:bg-white/[0.06]" />
                <span className="shrink-0 text-[10px] uppercase tracking-widest text-slate-500">
                  {line.content}
                </span>
                <div className="h-px flex-1 bg-slate-300 dark:bg-white/[0.06]" />
              </div>
            );
          }

          const agent = line.agent!;
          return (
            <div key={i} className="flex gap-3">
              {/* Avatar */}
              <div className="mt-0.5 shrink-0">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-bold ${agent.bg} ${agent.color} ring-1 ${agent.ring}`}
                >
                  {agent.name.charAt(0)}
                </span>
              </div>

              {/* Bubble */}
              <div className="min-w-0 flex-1">
                <div className={`mb-1 text-[10px] font-semibold ${agent.color}`}>
                  {agent.name}
                </div>
                <div
                  className={`rounded-lg border border-slate-200 bg-slate-100/40 px-4 py-3 dark:border-white/[0.05] dark:bg-white/[0.03] ${
                    line.type === "code" ? "overflow-x-auto" : ""
                  }`}
                >
                  {line.content}
                </div>
              </div>
            </div>
          );
        })}

        {/* Cursor */}
        {!isDone && hasStarted && (
          <span
            className={`inline-block h-[1.1em] w-2 bg-cyan-400 ${showCursor ? "opacity-100" : "opacity-0"}`}
          />
        )}

        {isDone && (
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/8 px-3 py-1.5 text-[10px] font-medium text-emerald-400/80 ring-1 ring-emerald-400/15">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
              Wszystkie systemy nominalne — incydent zamknięty
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function JsonBlock({ data }: { data: Record<string, string | number | boolean> }) {
  const entries = Object.entries(data);
  return (
    <pre className="text-[11px]">
      <span className="text-slate-500">&#123;</span>
      {entries.map(([k, v], i) => (
        <div key={k} className="pl-4">
          <span className="text-violet-400">&quot;{k}&quot;</span>
          <span className="text-slate-500">: </span>
          {typeof v === "boolean" ? (
            <span className="text-amber-400">{String(v)}</span>
          ) : typeof v === "number" ? (
            <span className="text-cyan-400">{v}</span>
          ) : (
            <span className="text-emerald-400">&quot;{v}&quot;</span>
          )}
          {i < entries.length - 1 && <span className="text-slate-500">,</span>}
        </div>
      ))}
      <span className="text-slate-500">&#125;</span>
    </pre>
  );
}

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const highlighted = highlightTerraform(code);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[10px] text-slate-600">
        <span>{lang}</span>
        <span className="text-slate-700">HCL</span>
      </div>
      <pre className="text-[11px] leading-relaxed whitespace-pre">{highlighted}</pre>
    </div>
  );
}

function highlightTerraform(code: string) {
  const lines = code.split("\n");
  return lines.map((line, i) => {
    let content: React.ReactNode = line;

    // Comments
    if (line.trim().startsWith("//")) {
      content = <span className="text-slate-600">{line}</span>;
    } else {
      // Strings
      const parts: React.ReactNode[] = [];
      const stringRegex = /"([^"]*)"/g;
      let lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = stringRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(
            <span key={lastIndex}>{line.slice(lastIndex, match.index)}</span>
          );
        }
        parts.push(
          <span key={match.index} className="text-emerald-400">
            &quot;{match[1]}&quot;
          </span>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(<span key={lastIndex}>{line.slice(lastIndex)}</span>);
      }

      if (parts.length > 0) {
        content = parts;
      }

      // Keywords
      if (line.includes("resource ") || line.includes("variable ")) {
        content = (
          <>
            <span className="text-violet-400">resource</span>
            {line.replace("resource", "")}
          </>
        );
      }
    }

    return (
      <div key={i} className="flex">
        <span className="mr-3 w-5 shrink-0 select-none text-right text-slate-700">
          {i + 1}
        </span>
        <span>{content}</span>
      </div>
    );
  });
}

function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/[0.06]">
            {headers.map((h) => (
              <th key={h} className="pb-2 pr-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/[0.03] last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className="py-2 pr-4 text-slate-400">
                  {cell === "ACTIVE" || cell === "APPLIED" || cell === "DONE" || cell === "FLUSHED" ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {cell}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FileTree({ tree }: { tree: string }) {
  return (
    <pre className="text-[11px] leading-relaxed text-slate-400">
      {tree.split("\n").map((line, i) => {
        const isDir = line.includes("/");
        return (
          <div key={i}>
            {isDir ? (
              <span className="text-cyan-400">{line}</span>
            ) : line.includes(".md") || line.includes(".txt") ? (
              <span className="text-slate-300">{line}</span>
            ) : (
              <span className="text-slate-500">{line}</span>
            )}
          </div>
        );
      })}
    </pre>
  );
}
