'use client';
import React from 'react'
import {
  TerminalSquareIcon,
  ClipboardCopyIcon,
} from 'lucide-react';
import { useState } from 'react';


function Install() {
    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText('npm install love-simple-ui');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    };
  return (
    <div className="flex flex-row items-center sm:gap-2 gap-1 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
      <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
      <span>npm install love-simple-ui</span>
      <button
        onClick={handleCopyToClipboard}
        className="ml-2 p-1 rounded hover:bg-muted transition-colors"
        aria-label="Copy to clipboard"
      >
        <ClipboardCopyIcon className="w-5 h-5 text-muted-foreground" />
      </button>
      {copied && <span className="text-green-500 text-sm ml-2">Copied!</span>}
    </div>
  );
}

export default Install