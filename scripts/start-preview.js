import { spawn } from "child_process";

const port = process.env.PORT || "4173";

const server = spawn("npx", ["vite", "preview", "--host", "--port", port], {
  stdio: "inherit",
  shell: true,
});

server.on("exit", (code) => process.exit(code));
server.on("error", (err) => {
  console.error("Failed to start preview:", err);
  process.exit(1);
});
