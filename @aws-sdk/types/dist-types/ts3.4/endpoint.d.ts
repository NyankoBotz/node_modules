import { AuthScheme } from "./auth";
export interface EndpointPartition {
  name: string;
  dnsSuffix: string;
  dualStackDnsSuffix: string;
  supportsFIPS: boolean;
  supportsDualStack: boolean;
}
export interface EndpointARN {
  partition: string;
  service: string;
  region: string;
  accountId: string;
  resourceId: Array<string>;
}
export declare enum EndpointURLScheme {
  HTTP = "http",
  HTTPS = "https",
}
export interface EndpointURL {
  scheme: EndpointURLScheme;
  authority: string;
  path: string;
  normalizedPath: string;
  isIp: boolean;
}
export type EndpointObjectProperty =
  | string
  | boolean
  | {
      [key: string]: EndpointObjectProperty;
    }
  | EndpointObjectProperty[];
export interface EndpointV2 {
  url: URL;
  properties?: {
    authSchemes?: AuthScheme[];
  } & Record<string, EndpointObjectProperty>;
  headers?: Record<string, string[]>;
}
export type EndpointParameters = {
  [name: string]: undefined | string | boolean;
};
