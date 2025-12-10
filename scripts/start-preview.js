const { spawn } = require("child_process");

const port = process.env.PORT || "4173";

const server = spawn("npx", ["vite", "preview", "--host", "--port", port], {
  stdio: "inherit",
  shell: true,
});

server.on("exit", (code) => process.exit(code));
