"use client";

import { useEffect, useRef, useState } from "react";

const COMMANDS = [
  { text: "$ terraform init", color: "text-cyan-400", delay: 400 },
  { text: "Initializing the backend...", color: "text-slate-500", delay: 800 },
  { text: "Initializing provider plugins...", color: "text-slate-500", delay: 600 },
  { text: "Terraform has been successfully initialized!", color: "text-emerald-400", delay: 600 },
  { text: "", color: "", delay: 300 },
  { text: "$ terraform apply -auto-approve", color: "text-cyan-400", delay: 500 },
  { text: "aws_vpc.main: Creating...", color: "text-slate-400", delay: 600 },
  { text: "aws_security_group.ingress: Creating...", color: "text-slate-400", delay: 500 },
  { text: "aws_instance.web[0]: Creating...", color: "text-slate-400", delay: 500 },
  { text: "aws_instance.web[1]: Creating...", color: "text-slate-400", delay: 400 },
  { text: "aws_lb.main: Creating...", color: "text-slate-400", delay: 500 },
  { text: "Apply complete! Resources: 12 added, 0 changed, 0 destroyed.", color: "text-emerald-400", delay: 700 },
  { text: "", color: "", delay: 300 },
  { text: "$ kubectl apply -f manifests/", color: "text-cyan-400", delay: 500 },
  { text: "namespace/production created", color: "text-slate-400", delay: 400 },
  { text: "deployment.apps/api created", color: "text-slate-400", delay: 400 },
  { text: "deployment.apps/worker created", color: "text-slate-400", delay: 400 },
  { text: "service/api-service created", color: "text-slate-400", delay: 400 },
  { text: "ingress.networking.k8s.io/main created", color: "text-slate-400", delay: 500 },
  { text: "", color: "", delay: 300 },
  { text: "$ docker build -t mulagroup/app:v1.2.0 .", color: "text-cyan-400", delay: 500 },
  { text: "Sending build context to Docker daemon  48.2MB", color: "text-slate-500", delay: 400 },
  { text: "Step 1/12 : FROM node:20-alpine", color: "text-slate-400", delay: 300 },
  { text: "Step 7/12 : RUN npm ci --only=production", color: "text-slate-400", delay: 500 },
  { text: "Successfully built 8f3a9c2d1e4b", color: "text-emerald-400", delay: 400 },
  { text: "Successfully tagged mulagroup/app:v1.2.0", color: "text-emerald-400", delay: 500 },
  { text: "", color: "", delay: 300 },
  { text: "$ ./health-check.sh", color: "text-cyan-400", delay: 400 },
  { text: "✓ API gateway      200 OK  23ms", color: "text-emerald-400", delay: 300 },
  { text: "✓ Database         200 OK  8ms", color: "text-emerald-400", delay: 300 },
  { text: "✓ Cache layer      200 OK  4ms", color: "text-emerald-400", delay: 300 },
  { text: "✓ Monitoring       200 OK  12ms", color: "text-emerald-400", delay: 300 },
  { text: "", color: "", delay: 200 },
  { text: "Infrastructure ready.", color: "text-emerald-400", delay: 600, isFinal: true },
];

export default function TerminalReveal() {
  const [lines, setLines] = useState<{ text: string; color: string }[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          runTyping();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(id);
  }, []);

  async function runTyping() {
    for (const cmd of COMMANDS) {
      await sleep(cmd.delay);
      setLines((prev) => [...prev, { text: cmd.text, color: cmd.color }]);
      if (cmd.isFinal) setIsComplete(true);
    }
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/50 shadow-2xl shadow-black/60 backdrop-blur-2xl"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
        <span className="ml-3 text-[11px] text-slate-500 font-mono">mulagroup — deployment</span>
      </div>

      {/* Terminal body */}
      <div className="relative p-6 sm:p-8 min-h-[360px]">
        <div className="font-mono text-[13px] leading-relaxed space-y-1">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`${line.color} ${line.text === "" ? "h-2" : ""}`}
            >
              {line.text}
            </div>
          ))}

          {/* Cursor */}
          {!isComplete && (
            <span
              className={`inline-block h-[1.1em] w-2 translate-y-[0.15em] bg-cyan-400 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Final status badge */}
          {isComplete && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/8 px-3 py-1.5 text-[10px] font-medium text-emerald-400/80 ring-1 ring-emerald-400/15">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
              Wszystkie systemy nominalne
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
