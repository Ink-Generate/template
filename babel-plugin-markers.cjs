const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

module.exports = function markerPlugin() {
  const markersByFile = {};

  return {
    visitor: {
      JSXOpeningElement(pathNode, state) {
        const loc = pathNode.node.loc;
        const file = state.file.opts.filename;
        if (!loc || !file) return;

        const relativeFile = path
          .relative(process.cwd(), file)
          .split(path.sep)
          .join(path.posix.sep);

        const hash = crypto
          .createHash("md5")
          .update(`${relativeFile}:${loc.start.line}:${loc.start.column}`)
          .digest("hex")
          .slice(0, 8);

        const componentName =
          pathNode.node.name.name || pathNode.node.name?.object?.name || "Unknown";

        const markerId = `${componentName}-${hash}`;

        // --- NEW: Only inject if not already injected ---
        const alreadyHasMarker = pathNode.node.attributes.some(
          (attr) => attr.type === "JSXAttribute" && attr.name.name === "data-marker"
        );
        if (!alreadyHasMarker) {
          pathNode.node.attributes.push({
            type: "JSXAttribute",
            name: { type: "JSXIdentifier", name: "data-marker" },
            value: { type: "StringLiteral", value: markerId },
          });
        }

        // Store info
        const type =
          componentName[0] === componentName[0].toUpperCase() ? "component" : "html";

        if (!markersByFile[relativeFile]) {
          markersByFile[relativeFile] = [];
        }
        markersByFile[relativeFile].push({
          id: markerId,
          file: relativeFile,
          start: { line: loc.start.line, column: loc.start.column },
          end: { line: loc.end.line, column: loc.end.column },
          component: componentName,
          type,
          props: {},
        });
      },
    },

    post() {
      const out = path.resolve(process.cwd(), "markers.json");
      fs.writeFileSync(out, JSON.stringify(markersByFile, null, 2), "utf8");
      console.log(
        `[babel-plugin-markers] Wrote markers for ${Object.keys(markersByFile).length} files → ${out}`
      );
    },
  };
};