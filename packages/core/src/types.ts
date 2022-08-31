import type { KernelSpecAPI } from '@jupyterlab/services';
import type { ServerStatus } from './messaging';

export type JsonObject = Record<string, any>;

export interface ServerInfo {
  id: string;
  url: string;
  status: ServerStatus;
  message: string;
  settings: ServerSettings | null;
  specs: KernelSpecAPI.ISpecModels;
}

export interface CoreOptions {
  mathjaxUrl?: string;
  mathjaxConfig?: string;
  useBinder?: boolean;
  useJupyterLite?: boolean;
  requestKernel?: boolean;
  binderOptions?: BinderOptions;
  savedSessionOptions?: SavedSessionOptions;
  kernelOptions?: KernelOptions;
  serverSettings?: ServerSettings;
}

export enum RepoProvider {
  'git' = 'git',
  'github' = 'github',
  'gitlab' = 'gitlab',
  'gist' = 'gist',
}

export interface MathjaxOptions {
  url?: string;
  config?: string;
}

export interface SavedSessionOptions {
  enabled?: boolean;
  maxAge?: number;
  storagePrefix?: string;
}

export interface BinderOptions {
  repo?: string;
  ref?: string;
  binderUrl?: string;
  repoProvider?: RepoProvider;
}

export interface ServerSettings {
  baseUrl?: string;
  token?: string;
  appendToken?: boolean;
  wsUrl?: string;
}

export interface KernelOptions {
  name?: string;
  kernelName?: string;
  path?: string;
}
