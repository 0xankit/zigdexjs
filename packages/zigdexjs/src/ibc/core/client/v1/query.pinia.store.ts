//@ts-nocheck
import { useEndpoint } from "../../../../pinia-endpoint";
import { QueryClientStateRequestSDKType, QueryClientStateResponseSDKType, QueryClientStatesRequestSDKType, QueryClientStatesResponseSDKType, QueryConsensusStateRequestSDKType, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponseSDKType, QueryClientStatusRequestSDKType, QueryClientStatusResponseSDKType, QueryClientParamsRequestSDKType, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/core/client/v1/query.proto', {
  state: () => {
    return {
      clientState: {} as QueryClientStateResponseSDKType,
      clientStates: {} as QueryClientStatesResponseSDKType,
      consensusState: {} as QueryConsensusStateResponseSDKType,
      consensusStates: {} as QueryConsensusStatesResponseSDKType,
      clientStatus: {} as QueryClientStatusResponseSDKType,
      clientParams: {} as QueryClientParamsResponseSDKType,
      upgradedClientState: {} as QueryUpgradedClientStateResponseSDKType,
      upgradedConsensusState: {} as QueryUpgradedConsensusStateResponseSDKType
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({
        requestClient
      });
    }
  },
  actions: {
    async fetchClientState(param: QueryClientStateRequestSDKType) {
      this.clientState = await this.lcdClient.clientState(param);
      return this.clientState;
    },
    async fetchClientStates(param: QueryClientStatesRequestSDKType) {
      this.clientStates = await this.lcdClient.clientStates(param);
      return this.clientStates;
    },
    async fetchConsensusState(param: QueryConsensusStateRequestSDKType) {
      this.consensusState = await this.lcdClient.consensusState(param);
      return this.consensusState;
    },
    async fetchConsensusStates(param: QueryConsensusStatesRequestSDKType) {
      this.consensusStates = await this.lcdClient.consensusStates(param);
      return this.consensusStates;
    },
    async fetchClientStatus(param: QueryClientStatusRequestSDKType) {
      this.clientStatus = await this.lcdClient.clientStatus(param);
      return this.clientStatus;
    },
    async fetchClientParams(param: QueryClientParamsRequestSDKType) {
      this.clientParams = await this.lcdClient.clientParams(param);
      return this.clientParams;
    },
    async fetchUpgradedClientState(param: QueryUpgradedClientStateRequestSDKType) {
      this.upgradedClientState = await this.lcdClient.upgradedClientState(param);
      return this.upgradedClientState;
    },
    async fetchUpgradedConsensusState(param: QueryUpgradedConsensusStateRequestSDKType) {
      this.upgradedConsensusState = await this.lcdClient.upgradedConsensusState(param);
      return this.upgradedConsensusState;
    }
  }
});