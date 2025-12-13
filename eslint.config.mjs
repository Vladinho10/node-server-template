import { fixupConfigRules } from "@eslint/compat";
import filenames from "eslint-plugin-filenames";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import node from "eslint-plugin-node";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: [
            "**/node_modules/", 
            ".git/",
            "guides/**/",
            "dist/**/",
            "**/*.js",
            "**/*.mjs",
            "views/**",
            "uploads/**"
        ],
    },
    ...fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
    )), 
    {
        plugins: {
            filenames,
            "simple-import-sort": simpleImportSort,
            node,
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.mocha,
                ...globals.mongo,
                io: "writable",
                logger: "writable",
                CustomError: "writable",
            },

            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    impliedStrict: true,
                },
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                { 
                  "argsIgnorePattern": "^_",  // Ignore variables prefixed with _
                  "varsIgnorePattern": "^_" 
                }
            ],
            "padding-line-between-statements": ["error", {
                blankLine: "always",
                prev: "*",
                next: "return",
            }, {
                blankLine: "always",
                prev: "if",
                next: "*",
            }, {
                blankLine: "always",
                prev: "*",
                next: "function",
            }, {
                blankLine: "always",
                prev: "block",
                next: "*",
            }],

            semi: "error",
            radix: ["error", "always"],
            quotes: ["error", "single"],
            "prefer-const": "error",
            "no-plusplus": "error",
            eqeqeq: "error",
            curly: "error",
            "quote-props": ["error", "as-needed"],
            "object-shorthand": "error",
            "array-callback-return": "error",

            "prefer-destructuring": ["error", {
                object: true,
                array: false,
            }],

            "prefer-template": "error",
            "template-curly-spacing": ["error", "never"],
            "no-loop-func": "error",
            "prefer-rest-params": "error",

            "space-before-function-paren": ["error", {
                anonymous: "always",
                named: "never",
                asyncArrow: "always",
            }],

            "space-before-blocks": "error",
            "no-param-reassign": "error",
            "prefer-arrow-callback": ["error"],
            "arrow-spacing": "error",
            "arrow-body-style": ["error", "as-needed"],
            "arrow-parens": ["error", "as-needed"],
            "implicit-arrow-linebreak": ["error", "beside"],
            "no-useless-constructor": "error",
            "no-dupe-class-members": "error",
            "class-methods-use-this": "error",
            "dot-notation": "error",
            "no-multi-assign": "error",

            "max-len": ["error", {
                code: 240,
                tabWidth: 2,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
            }],

            "max-params": ["error", 4],

            "operator-linebreak": ["error", "none", {
                overrides: {
                    "||": "before",
                    "&&": "before",
                    "?": "before",
                    ":": "before",
                },
            }],

            "no-unneeded-ternary": "error",
            "no-nested-ternary": "error",
            "no-mixed-operators": "error",
            "brace-style": "error",
            "no-else-return": "error",
            "spaced-comment": "error",
            indent: ["error", 4, {}],

            "keyword-spacing": ["error", {
                before: true,
                after: true,
            }],

            "space-infix-ops": "error",
            "eol-last": ["error", "always"],

            "newline-per-chained-call": ["error", {
                ignoreChainWithDepth: 3,
            }],

            "no-whitespace-before-property": "error",
            "padded-blocks": ["error", "never"],

            "no-multiple-empty-lines": ["error", {
                max: 1,
                maxEOF: 1,
            }],

            "space-in-parens": ["error", "never"],
            "array-bracket-spacing": ["error", "never"],
            "object-curly-spacing": ["error", "always"],
            "block-spacing": "error",

            "comma-spacing": ["error", {
                before: false,
                after: true,
            }],

            "computed-property-spacing": ["error", "never"],
            "func-call-spacing": ["error", "never"],
            "function-paren-newline": ["error", "multiline"],

            "key-spacing": ["error", {
                beforeColon: false,
            }],

            "no-trailing-spaces": "error",
            "comma-style": ["error", "last"],
            "comma-dangle": ["error", "always-multiline"],

            "new-cap": ["error", {
                capIsNew: false,
            }],

            "no-restricted-globals": ["error", {
                name: "isNaN",
                message: "Use Number.isNaN instead.",
            }, {
                name: "isFinite",
                message: "Use Number.isFinite instead.",
            }],

            "no-restricted-properties": [2, {
                object: "Math",
                property: "pow",
                message: "Use ** instead.",
            }],

            // "filenames/match-regex": ["error", "^[a-z][A-Za-z0-9.-]+$"],
            "import/first": "error",
            "import/newline-after-import": "error",

            "import/no-useless-path-segments": ["error", {
                noUselessIndex: true,
            }],
            "simple-import-sort/imports": ["error", {
                groups: [
                    // 1. Builtin modules (Node.js core)
                    [
                        "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib)$",
                        "^(node:)?(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib)$"
                    ],
                    
                    // 2. External packages (anything from node_modules)
                    // Matches: react, lodash, @angular/core, etc.
                    ["^@?\\w"],
                    
                    // 3. Absolute imports (if you use them like '@/components')
                    // Adjust this based on your alias configuration
                    // ["^@/"], // For @/ alias
                    // ["^~"],   // For ~/ alias
                    
                    // 4. Parent directory imports (../)
                    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                    
                    // 5. Same directory imports (./)
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    
                    // 6. Index imports (./index, ../index)
                    // This is tricky - simple-import-sort doesn't separate index files well
                    // You might need to adjust based on your needs
                    
                    // 7. Style/asset imports
                    ["^.+\\.(css|scss|less|sass|styl)$"],
                    ["^.+\\.(jpg|jpeg|png|gif|svg|ico)$"],
                    
                    // 8. Type imports (TypeScript - will be automatically sorted within groups)
                ]
            }],
            "simple-import-sort/exports": "error",

            "node/no-process-env": "error",
        },
    }, 
    {
        files: ["configs/**/*.ts"],
        rules: {
            "node/no-process-env": "off",
        },
    }, 
    {
        files: ["views/**/*.*"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
    }
];