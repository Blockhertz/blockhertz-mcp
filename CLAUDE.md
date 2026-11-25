# CLAUDE.md — blockhertz-mcp

## What this repo is

A **public, MIT-licensed npm package** that exposes Blockhertz's AI blockchain
tools over the Model Context Protocol (MCP). It is a **thin adapter**: it
receives tool calls from an MCP client (VS Code, Cursor, Windsurf, Claude
Desktop) and forwards them to the private Blockhertz backend at
`https://blockhertz.com/api/mcp/*`.

## What it is NOT

- **No business logic** — all analysis happens on the backend.
- **No database** — no state is persisted here.
- **No AI prompts** — prompts live on the private backend and are never shipped
  to npm.
- **No proprietary code** — everything in this repo is safe to publish publicly.

## Tools

| Tool    | Backend route              | Purpose                                                    |
| ------- | -------------------------- | ---------------------------------------------------------- |
| `audit` | `POST /api/mcp/audit`      | Security audit for Solidity / Rust / Vyper / Move          |
| `gas`   | `POST /api/mcp/gas`        | Gas optimization for Solidity                              |

## Backend

- Base URL: `https://blockhertz.com`
- Auth: `Authorization: Bearer ${BLOCKHERTZ_API_KEY}`
- The API key is read from the `BLOCKHERTZ_API_KEY` environment variable.
- Errors (401 / 402 / 429 / 500) are surfaced with the backend's `message`
  field (and `upgrade_url` when present).

## Build & publish

```bash
npm install
npm run build        # tsc → dist/
npm publish          # requires npm login to the blockhertz org
```

`prepublishOnly` runs `npm run build` automatically.

## Future work (do not build yet)

- **`tokenomics`** and **`architect`** tools exist on the backend but are
  currently web-UI-only (rich HTML output). They are not yet exposed through
  this MCP adapter.
- **HTTP transport**: planned once MCP clients broadly support it. For now
  stdio only.

## §21 equivalent — operating rules

- **Do not commit** changes unless explicitly instructed.
- **Do not publish** to npm unless explicitly instructed.
- **Do not add business logic** here. If something feels like it belongs on the
  backend, it does.

## After publish — registries to submit to

- https://mcp.so
- https://glama.ai
- https://smithery.ai
- https://pulsemcp.com
