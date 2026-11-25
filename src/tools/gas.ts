import { blockhertzFetch } from "../client";

export const gasTool = {
  name: "gas",
  description:
    "Analyze a Solidity smart contract for gas inefficiencies and return an optimized version.",
  inputSchema: {
    type: "object",
    properties: {
      code: {
        type: "string",
        description: "The Solidity smart contract source code to optimize",
      },
    },
    required: ["code"],
  },
} as const;

export async function runGas(input: { code: string }): Promise<unknown> {
  return blockhertzFetch("/api/mcp/gas", input);
}
