import { Logger } from "@aws-sdk/types";
import { InstanceMetadataCredentials } from "../types";
/**
 * @internal
 */
export declare const getExtendedInstanceMetadataCredentials: (credentials: InstanceMetadataCredentials, logger: Logger) => InstanceMetadataCredentials;
