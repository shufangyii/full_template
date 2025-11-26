module.exports = {
  // 类型
  types: [
    { value: "feat", name: "✨ feat:     新功能" },
    { value: "fix", name: "🐛 fix:      修复Bug" },
    { value: "docs", name: "📚 docs:     文档更新" },
    { value: "style", name: "💎 style:    代码格式（不影响功能）" },
    { value: "refactor", name: "♻️  refactor: 代码重构" },
    { value: "perf", name: "🚀 perf:     性能优化" },
    { value: "test", name: "🚨 test:     添加/修改测试" },
    { value: "build", name: "📦 build:    构建相关" },
    { value: "ci", name: "👷 ci:       CI/CD相关" },
    { value: "chore", name: "🔧 chore:    其他修改" },
    { value: "revert", name: "⏪️ revert:   回滚提交" },
  ],

  // 范围，可以自定义
  scopes: [
    { name: "proto", description: "协议定义" },
    { name: "ts-sdk", description: "TypeScript SDK" },
    { name: "rust-sdk", description: "Rust SDK" },
    { name: "ci", description: "CI/CD 配置" },
    { name: "deps", description: "依赖更新" },
    { name: "release", description: "发布相关" },
  ],

  // 是否允许自定义范围
  allowCustomScopes: false,

  // 是否允许多选范围（使用逗号分隔）
  allowMultipleScopes: true,
  scopeEnumSeparator: ",",

  // 跳过询问的步骤，类型和说明是必填的
  skipQuestions: ["body", "footer"],

  // 设置最大长度
  subjectLimit: 100,

  // 提示信息配置
  messages: {
    type: "请选择提交类型:",
    scope: "选择修改的范围（可多选，使用逗号分隔）:",
    customScope: "请输入自定义的修改范围（可选）:",
    subject: "写一个简短的提交说明:\n",
    body: "提供更详细的提交说明（可选）:\n",
    breaking: "列出任何破坏性更改（可选）:\n",
    footer: "列出关闭的 issue（可选）。例如: #31, #34:\n",
    confirmCommit: "确认使用以上信息提交？（y/n/e/h）",
  },

  // 默认跳过 body 和 footer
  allowBreakingChanges: ["feat", "fix", "refactor"],

  // 自定义 scope 分隔符
  scopeOverrides: undefined,

  // 允许使用表情符号
  allowEmoji: true,
};
