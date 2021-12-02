# ESLINT confgiguration in Angular

## Setup
- `ng add @angular-eslint/schematics`

## Config
- `.eslintrc.json`
- [Documentation](https://github.com/angular-eslint/angular-eslint#functionality)

## Using native ESLint directives
- [ESLint docs](https://eslint.org/docs/rules/)
- Place these lines to the root object:
```json
"plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "no-console": "error"
  },
```
