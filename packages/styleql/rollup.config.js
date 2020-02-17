import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from "@wessberg/rollup-plugin-ts";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import builtinModules from "builtin-modules";
import pkg from './package.json';

const extensions = ['.mjs', '.js', '.json', '.node', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.module,
    format: 'cjs',
    sourcemap: true
  },
  external: [
    ...builtinModules,
    'graphql',
    'graphql-tools'
  ],
  plugins: [
    ts({
      transpiler: "babel",
      exclude: [
        "node_modules/**/*.*",
        "../../node_modules/**/*.*",
      ],
    }),
    resolve({
      extensions,
    }),
    commonjs(),
    sizeSnapshot()
  ]
};
