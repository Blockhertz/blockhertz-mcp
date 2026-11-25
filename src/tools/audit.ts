import { blockhertzFetch } from "../client";

export const auditTool = {
  name: "audit",
  description:
    "Audit a smart contract for security vulnerabilities. Supports Solidity, Rust, Vyper, and Move.",
  inputSchema: {
    type: "object",
    properties: {
      code: {
        type: "string",
        description: "The smart contract source code to audit",
      },
      language: {
        type: "string",
        enum: ["solidity", "rust", "vyper", "move"],
        description: "The programming language of the contract",
      },
    },
    required: ["code", "language"],
  },
} as const;

export async function runAudit(input: {
  code: string;
  language: string;
}): Promise<unknown> {
  return blockhertzFetch("/api/mcp/audit", input);
}
