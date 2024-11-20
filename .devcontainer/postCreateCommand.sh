sudo chown -R vscode:vscode /workspace;

# Setup pnpm
SHELL=bash pnpm setup
eval "$(cat /home/vscode/.bashrc)"

pnpm install
