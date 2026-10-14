# Changelog

本项目遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/) 与
[语义化版本](https://semver.org/lang/zh-CN/)。

## [1.0.0] - 2026-10-14

首个版本。

### 新增

- **双传输协议**：OpenAI 兼容 `/chat/completions`（llama.cpp / LM Studio / vLLM /
  Ollama 的 `/v1` 等）与 Ollama 原生 `/api/chat`（NDJSON，支持 `thinking`/reasoning）。
- **完整工具调用**：DSH 工具调用/工具结果历史与目标协议的双向转换。
- **文本工具调用兜底**：自动识别模型以纯文本写出的工具调用
  （`{...}` JSON、`<tool_call>...</tool_call>`、` ```json {...} ``` `），
  校验工具名后转成真正的工具调用。
- **模型自动发现**：`GET /models`（OpenAI）与 `GET /api/tags`（Ollama），
  并注册 `registerModelDiscovery` 供设置页使用。
- **可视化配置**：注册可配置 provider，插件页与「设置 → 模型」页均有图形配置界面。
- **热更新**：配置字段全部 volatile，修改后无需重启。

[1.0.0]: https://github.com/your-github-username/dsh-local-model/releases/tag/v1.0.0
