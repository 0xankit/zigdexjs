//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as zigchainDexTxRegistry from "./dex/tx.registry";
import * as zigchainFactoryTxRegistry from "./factory/tx.registry";
import * as zigchainGammTxRegistry from "./gamm/tx.registry";
import * as zigchainPoolmanagerTxRegistry from "./poolmanager/tx.registry";
import * as zigchainTwapTxRegistry from "./twap/tx.registry";
import * as zigchainDexTxAmino from "./dex/tx.amino";
import * as zigchainFactoryTxAmino from "./factory/tx.amino";
import * as zigchainGammTxAmino from "./gamm/tx.amino";
import * as zigchainPoolmanagerTxAmino from "./poolmanager/tx.amino";
import * as zigchainTwapTxAmino from "./twap/tx.amino";
export const zigchainAminoConverters = {
  ...zigchainDexTxAmino.AminoConverter,
  ...zigchainFactoryTxAmino.AminoConverter,
  ...zigchainGammTxAmino.AminoConverter,
  ...zigchainPoolmanagerTxAmino.AminoConverter,
  ...zigchainTwapTxAmino.AminoConverter
};
export const zigchainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...zigchainDexTxRegistry.registry, ...zigchainFactoryTxRegistry.registry, ...zigchainGammTxRegistry.registry, ...zigchainPoolmanagerTxRegistry.registry, ...zigchainTwapTxRegistry.registry];
export const getSigningZigchainClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...zigchainProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...zigchainAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningZigchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningZigchainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};