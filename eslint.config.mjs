// 引入官方 JS 插件配置
import js from "@eslint/js"

// 引入浏览器和 Node 的全局变量
import globals from "globals"

// 引入 TypeScript 的 ESLint 插件及推荐配置
import tseslint from "typescript-eslint"

// 引入 Vue 的 ESLint 插件及推荐配置
import pluginVue from "eslint-plugin-vue"

// 使用 Flat Config 的 defineConfig 工具
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    // 应用于 src 目录下的所有 JS/TS/Vue 文件，使用 JS 推荐规则
    files: ["src/**/*.{js,mjs,cjs,ts,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    // 设置全局变量为 browser 和 node，仅应用于 src 目录下的文件
    files: ["src/**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // TypeScript 推荐配置（适用于 src 目录下的 .ts/.tsx/.vue 中的 TS）
  tseslint.configs.recommended,

  // Vue 推荐基础配置（仅启用 essential 规则）
  pluginVue.configs["flat/essential"],

  {
    // 指定 Vue 文件使用 TypeScript 作为模板解析器，仅应用于 src 目录下的 Vue 文件
    files: ["src/**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  {
    // 自定义风格规则，仅应用于 src 目录下的文件
    files: ["src/**/*.{js,mjs,cjs,ts,vue}"],
    rules: {
      // 不使用分号 对 JS 和 TS 都生效
      semi: ["error", "never"],

      // 使用单引号
      quotes: ["error", "single"],

      // 使用两个空格缩进
      indent: ["error", 2],

      // 不检查 vue 组件名
      "vue/multi-word-component-names": "off",

      // Vue 文件内 HTML 模板缩进也使用两个空格
      "vue/html-indent": ["error", 2],
    },
  },

  // 排除 dist 目录中的文件
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    excludedFiles: ["dist/**/*"],
    rules: {
      // 可以在这里配置任何全局规则
    },
  },
])
