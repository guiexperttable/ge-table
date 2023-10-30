module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["preact", "@typescript-eslint"],
  extends: ["../../.eslintrc.json"],
  ignorePatterns: ["!**/*"],
  overrides: [
    {
      files: ["*.ts", "*.js", "*.tsx"],
      parserOptions: {
        project: ["libs/preact-table/tsconfig.*?.json"]
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
