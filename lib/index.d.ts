/**
 * dsh-local-model — 让 DeepSeek Harness 直连本地模型。
 *
 * 通过 `ctx.llm.registerAdapter(["local"], adapter)` 注册一个 LLM 适配器，
 * 支持 OpenAI 兼容端点与 Ollama 原生 API，全程走本机、不登录、不消耗 token。
 *
 * @module dsh-local-model
 */

/** 插件名。 */
export declare const name: "dsh-local-model";

/** 硬依赖的 Host 服务。 */
export declare const inject: readonly ["llm"];

/** 配置 Schema（schemastery），由 Harness 的通用配置表单渲染。 */
export declare const Config: unknown;

/** 一个静态模型条目。 */
export interface LocalModelEntry {
  id: string;
  name?: string;
  contextWindow?: number;
  maxTokens?: number;
}

/** 解析并校验后的连接配置。 */
export interface LocalModelOptions {
  /** 传输协议。 */
  api: "openai" | "ollama";
  /** 本地端点根地址（已去除尾部斜杠）。 */
  baseURL: string;
  /** 可选的本地服务鉴权 key。 */
  apiKey: string;
  /** 端点不可枚举时的兜底模型名。 */
  defaultModel: string;
  /** 默认上下文窗口（token）。 */
  contextWindow: number;
  /** 默认单次最大输出 token 数。 */
  maxTokens: number;
  /** 默认采样温度。 */
  temperature: number;
  /** 流式读取的空闲超时（毫秒）。 */
  streamIdleTimeoutMs: number;
  /** 静态模型清单。 */
  models: LocalModelEntry[];
}

/**
 * 读取并校验一次配置快照（兼容原始配置与已解析的 volatile 配置）。
 * @param config - 插件配置对象。
 * @returns 规范化后的连接配置。
 */
export declare function resolveOptions(config: unknown): LocalModelOptions;

/**
 * 插件入口：注册 provider 目录、LLM 适配器与模型发现。
 * @param ctx - 已注入 `llm` 服务的 Cordis 上下文。
 * @param config - 插件配置。
 */
export declare function apply(ctx: unknown, config: unknown): void;
