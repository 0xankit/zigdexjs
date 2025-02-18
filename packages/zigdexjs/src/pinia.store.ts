//@ts-nocheck
import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAuthV1beta1Querypinia from "./cosmos/auth/v1beta1/query.pinia.store";
import * as _CosmosAuthzV1beta1Querypinia from "./cosmos/authz/v1beta1/query.pinia.store";
import * as _CosmosBankV1beta1Querypinia from "./cosmos/bank/v1beta1/query.pinia.store";
import * as _CosmosDistributionV1beta1Querypinia from "./cosmos/distribution/v1beta1/query.pinia.store";
import * as _CosmosFeegrantV1beta1Querypinia from "./cosmos/feegrant/v1beta1/query.pinia.store";
import * as _CosmosGovV1Querypinia from "./cosmos/gov/v1/query.pinia.store";
import * as _CosmosGovV1beta1Querypinia from "./cosmos/gov/v1beta1/query.pinia.store";
import * as _CosmosGroupV1Querypinia from "./cosmos/group/v1/query.pinia.store";
import * as _CosmosMintV1beta1Querypinia from "./cosmos/mint/v1beta1/query.pinia.store";
import * as _CosmosParamsV1beta1Querypinia from "./cosmos/params/v1beta1/query.pinia.store";
import * as _CosmosStakingV1beta1Querypinia from "./cosmos/staking/v1beta1/query.pinia.store";
import * as _CosmosTxV1beta1Servicepinia from "./cosmos/tx/v1beta1/service.pinia.store";
import * as _CosmosUpgradeV1beta1Querypinia from "./cosmos/upgrade/v1beta1/query.pinia.store";
import * as _CosmwasmWasmV1Querypinia from "./cosmwasm/wasm/v1/query.pinia.store";
import * as _IbcApplicationsTransferV1Querypinia from "./ibc/applications/transfer/v1/query.pinia.store";
import * as _IbcCoreChannelV1Querypinia from "./ibc/core/channel/v1/query.pinia.store";
import * as _IbcCoreClientV1Querypinia from "./ibc/core/client/v1/query.pinia.store";
import * as _IbcCoreConnectionV1Querypinia from "./ibc/core/connection/v1/query.pinia.store";
import * as _ZigchainDexQuerypinia from "./zigchain/dex/query.pinia.store";
import * as _ZigchainFactoryQuerypinia from "./zigchain/factory/query.pinia.store";
import * as _ZigchainGammQuerypinia from "./zigchain/gamm/query.pinia.store";
import * as _ZigchainPoolmanagerQuerypinia from "./zigchain/poolmanager/query.pinia.store";
import * as _ZigchainTwapQuerypinia from "./zigchain/twap/query.pinia.store";
export const createPiniaStores = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    cosmos: {
      auth: {
        v1beta1: _CosmosAuthV1beta1Querypinia.usePiniaStore(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Querypinia.usePiniaStore(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Querypinia.usePiniaStore(rpc)
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Querypinia.usePiniaStore(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Querypinia.usePiniaStore(rpc)
      },
      gov: {
        v1: _CosmosGovV1Querypinia.usePiniaStore(rpc),
        v1beta1: _CosmosGovV1beta1Querypinia.usePiniaStore(rpc)
      },
      group: {
        v1: _CosmosGroupV1Querypinia.usePiniaStore(rpc)
      },
      mint: {
        v1beta1: _CosmosMintV1beta1Querypinia.usePiniaStore(rpc)
      },
      params: {
        v1beta1: _CosmosParamsV1beta1Querypinia.usePiniaStore(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Querypinia.usePiniaStore(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicepinia.usePiniaStore(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Querypinia.usePiniaStore(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Querypinia.usePiniaStore(rpc)
      }
    },
    ibc: {
      applications: {
        transfer: {
          v1: _IbcApplicationsTransferV1Querypinia.usePiniaStore(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Querypinia.usePiniaStore(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Querypinia.usePiniaStore(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Querypinia.usePiniaStore(rpc)
        }
      }
    },
    zigchain: {
      dex: _ZigchainDexQuerypinia.usePiniaStore(rpc),
      factory: _ZigchainFactoryQuerypinia.usePiniaStore(rpc),
      gamm: _ZigchainGammQuerypinia.usePiniaStore(rpc),
      poolmanager: _ZigchainPoolmanagerQuerypinia.usePiniaStore(rpc),
      twap: _ZigchainTwapQuerypinia.usePiniaStore(rpc)
    }
  };
};