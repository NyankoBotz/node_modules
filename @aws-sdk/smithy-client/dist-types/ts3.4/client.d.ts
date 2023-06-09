import {
  Client as IClient,
  Command,
  MetadataBearer,
  MiddlewareStack,
  RequestHandler,
} from "@aws-sdk/types";
export interface SmithyConfiguration<HandlerOptions> {
  requestHandler: RequestHandler<any, any, HandlerOptions>;
  readonly apiVersion: string;
}
export type SmithyResolvedConfiguration<HandlerOptions> =
  SmithyConfiguration<HandlerOptions>;
export declare class Client<
  HandlerOptions,
  ClientInput extends object,
  ClientOutput extends MetadataBearer,
  ResolvedClientConfiguration extends SmithyResolvedConfiguration<HandlerOptions>
> implements IClient<ClientInput, ClientOutput, ResolvedClientConfiguration>
{
  middlewareStack: MiddlewareStack<ClientInput, ClientOutput>;
  readonly config: ResolvedClientConfiguration;
  constructor(config: ResolvedClientConfiguration);
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<
      ClientInput,
      InputType,
      ClientOutput,
      OutputType,
      SmithyResolvedConfiguration<HandlerOptions>
    >,
    options?: HandlerOptions
  ): Promise<OutputType>;
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<
      ClientInput,
      InputType,
      ClientOutput,
      OutputType,
      SmithyResolvedConfiguration<HandlerOptions>
    >,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<
      ClientInput,
      InputType,
      ClientOutput,
      OutputType,
      SmithyResolvedConfiguration<HandlerOptions>
    >,
    options: HandlerOptions,
    cb: (err: any, data?: OutputType) => void
  ): void;
  destroy(): void;
}
