import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy"; // Import copy plugin

const pkg = JSON.parse(
  fs
    .readFileSync(
      path.join(path.dirname(fileURLToPath(import.meta.url)), "package.json")
    )
    .toString()
);

const banner = `/*!
  ${pkg.name} v${pkg.version}
  ${pkg.homepage}
  Released under the ${pkg.license} License.
*/`;

const dateFnsPackageJson = JSON.parse(
  fs
    .readFileSync(
      path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        "node_modules/date-fns/package.json"
      )
    )
    .toString()
);
const dateFnsSubpackages = Object.keys(dateFnsPackageJson.exports)
  .map((key) => key.replace("./", ""))
  .filter((key) => key !== "." && key !== "package.json")
  .map((key) => `date-fns/${key}`);

const globals = {
  react: "React",
  "prop-types": "PropTypes",
  "react-onclickoutside": "onClickOutside",
};

/** @type {import('rollup').OutputOptions} */
const migrateRollup2to3OutputOptions = {
  interop: "compat",
};

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: "inline",
      name: "DatePicker",
      banner,
      ...migrateRollup2to3OutputOptions,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: "inline",
      banner,
      ...migrateRollup2to3OutputOptions,
    },
  ],
  plugins: [
    resolve({
      mainFields: ["module", "main", "browser"],
      extensions: [".js", ".jsx"],
    }),
    babel(),
    commonjs({
      //transformMixedEsModules: true, // Ensures proper handling of mixed modules
    }),
    filesize(),
    scss({
      sourceMap: true, // Enable sourcemap for SCSS
      output: false, // Disable default CSS output
      insert: true, // Allows SCSS to be inserted into JavaScript if necessary
      watch: true, // Optional: watch for changes to SCSS
      processor: (scssContent, cssContent, sourcemap) => {
        // Write the SCSS content to style.scss
        fs.writeFileSync(path.resolve("dist", "style.scss"), scssContent);

        // Write the compiled CSS to style.css
        fs.writeFileSync(path.resolve("dist", "style.css"), cssContent);

        // Write the sourcemap to style.css.map
        fs.writeFileSync(
          path.resolve("dist", "style.css.map"),
          JSON.stringify(sourcemap)
        );

        // Prevent the default CSS output (as we've handled it manually)
        return "";
      },
    }),
    copy({
      targets: [
        {
          src: "src/style/**/*", // Path to the style folder
          dest: "dist/style", // Destination in the dist folder
        },
      ],
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...dateFnsSubpackages,
    "classnames", // Mark classnames as external
    "nookies",
    "next/router",
    "./loadable.shared-runtime", // Add the loadable shared runtime path
    "next/dist/shared/lib/loadable.shared-runtime", // Also add the full path version
    "next/dist/shared/lib/loadable", // Add parent path as well
  ],
};

export default config;
