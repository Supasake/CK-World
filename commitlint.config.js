export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [0, "always", 72],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test"],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
  },
};
