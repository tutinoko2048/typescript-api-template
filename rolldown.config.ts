import { defineConfig } from 'rolldown';
import { dts } from "rolldown-plugin-dts";

const ENTRY = 'src/index.ts';
const OUTDIR = 'dist'; 

export default defineConfig({
  input: ENTRY,
  output: {
    dir: OUTDIR,
    target: 'es2023',
    sourcemap: 'inline',
  },
  plugins: [
    dts()
  ],
  external: [
    /^@minecraft\/(?!vanilla-data|math)/,
  ]
})