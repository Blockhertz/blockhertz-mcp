# blockhertz-mcp

> AI-powered smart contract tools for your code editor

An MCP (Model Context Protocol) server that brings Blockhertz's AI blockchain tools directly into your editor.

## Tools

- **audit** — security audit (Solidity, Rust, Vyper, Move)
- **gas** — gas optimization (Solidity)

## Quick Start

### VS Code (GitHub Copilot)

Add to `.vscode/mcp.json`:

```json
{
  "mcpServers": {
    "blockhertz": {
      "command": "npx",
      "args": ["-y", "blockhertz-mcp"],
      "env": { "BLOCKHERTZ_API_KEY": "your_key_here" }
    }
  }
}
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "blockhertz": {
      "command": "npx",
      "args": ["-y", "blockhertz-mcp"],
      "env": { "BLOCKHERTZ_API_KEY": "your_key_here" }
    }
  }
}
```

### Cursor / Windsurf

Same config pattern — add to MCP settings.

## Get API Key

https://blockhertz.com/dashboard

## Credits

Each tool call uses 1 credit from your Blockhertz plan.

https://blockhertz.com/pricing

## License

MIT
