"use client";
import { useState } from "react";

export default function CodePreview({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="flex items-center gap-2 bg-secondary rounded px-3 py-2 my-4 w-fit mx-auto">
      <code className="text-primary text-sm">{code}</code>
      <button onClick={handleCopy} className="text-foreground hover:bg-primary/10  text-xs px-2 py-1 rounded border border-destructive/80 ml-2 transition" aria-label="Copy code">
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}