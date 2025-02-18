//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryParamsRequestSDKType, QueryParamsResponseSDKType, QuerySubspacesRequestSDKType, QuerySubspacesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/params/v1beta1/query.proto', {
  state: () => {
    return {
      params: {} as QueryParamsResponseSDKType,
      subspaces: {} as QuerySubspacesResponseSDKType
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
    async fetchParams(param: QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },
    async fetchSubspaces(param: QuerySubspacesRequestSDKType) {
      this.subspaces = await this.lcdClient.subspaces(param);
      return this.subspaces;
    }
  }
});