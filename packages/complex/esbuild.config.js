const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    format: "cjs",
    platform: "node",
    target: "node22",
    minify: true,
    bundle: true,
    outfile: "index.js",
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
