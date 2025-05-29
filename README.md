# typescript-api-template
The template for ScriptAPI sources with TypeScript

## Main Features
- Fast build and watch script by [rolldown](https://rolldown.rs/)
- Bundle all files into single `js`, `dts`
- Automatic release creation on push to the `release` branch
  - Auto-incrementing version numbers
  - Automatic upload of bundled `js`, `dts` and ZIP archive containing both files
