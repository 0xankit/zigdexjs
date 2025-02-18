//@ts-nocheck
import { useEndpoint } from "../../../../pinia-endpoint";
import { QueryDenomTraceRequestSDKType, QueryDenomTraceResponseSDKType, QueryDenomTracesRequestSDKType, QueryDenomTracesResponseSDKType, QueryParamsRequestSDKType, QueryParamsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/applications/transfer/v1/query.proto', {
  state: () => {
    return {
      denomTrace: {} as QueryDenomTraceResponseSDKType,
      denomTraces: {} as QueryDenomTracesResponseSDKType,
      params: {} as QueryParamsResponseSDKType
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
    async fetchDenomTrace(param: QueryDenomTraceRequestSDKType) {
      this.denomTrace = await this.lcdClient.denomTrace(param);
      return this.denomTrace;
    },
    async fetchDenomTraces(param: QueryDenomTracesRequestSDKType) {
      this.denomTraces = await this.lcdClient.denomTraces(param);
      return this.denomTraces;
    },
    async fetchParams(param: QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    }
  }
});