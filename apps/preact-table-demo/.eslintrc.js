module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["preact", "@typescript-eslint"],
  extends: ["../../.eslintrc.json"],
  ignorePatterns: ["!**/*"],
  overrides: [
    {
      files: ["*.ts", "*.js", "*.tsx"],
      parserOptions: {
        project: ["apps/preact-table-demo/tsconfig.*?.json"]
      },
      rules: {}
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {}
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {}
    }
  ]
};
