//@ts-nocheck
import { useEndpoint } from "../../../../pinia-endpoint";
import { QueryConnectionRequestSDKType, QueryConnectionResponseSDKType, QueryConnectionsRequestSDKType, QueryConnectionsResponseSDKType, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/core/connection/v1/query.proto', {
  state: () => {
    return {
      connection: {} as QueryConnectionResponseSDKType,
      connections: {} as QueryConnectionsResponseSDKType,
      clientConnections: {} as QueryClientConnectionsResponseSDKType,
      connectionClientState: {} as QueryConnectionClientStateResponseSDKType,
      connectionConsensusState: {} as QueryConnectionConsensusStateResponseSDKType
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
    async fetchConnection(param: QueryConnectionRequestSDKType) {
      this.connection = await this.lcdClient.connection(param);
      return this.connection;
    },
    async fetchConnections(param: QueryConnectionsRequestSDKType) {
      this.connections = await this.lcdClient.connections(param);
      return this.connections;
    },
    async fetchClientConnections(param: QueryClientConnectionsRequestSDKType) {
      this.clientConnections = await this.lcdClient.clientConnections(param);
      return this.clientConnections;
    },
    async fetchConnectionClientState(param: QueryConnectionClientStateRequestSDKType) {
      this.connectionClientState = await this.lcdClient.connectionClientState(param);
      return this.connectionClientState;
    },
    async fetchConnectionConsensusState(param: QueryConnectionConsensusStateRequestSDKType) {
      this.connectionConsensusState = await this.lcdClient.connectionConsensusState(param);
      return this.connectionConsensusState;
    }
  }
});