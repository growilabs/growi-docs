sudo chown -R vscode:vscode /workspace;

# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install Claude Code
curl -fsSL https://claude.ai/install.sh | bash

# Setup pnpm
SHELL=bash pnpm setup
eval "$(cat /home/vscode/.bashrc)"

# Install dependencies
pnpm install
