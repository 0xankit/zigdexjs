//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryInflationRequestSDKType, QueryInflationResponseSDKType, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/mint/v1beta1/query.proto', {
  state: () => {
    return {
      params: {} as QueryParamsResponseSDKType,
      inflation: {} as QueryInflationResponseSDKType,
      annualProvisions: {} as QueryAnnualProvisionsResponseSDKType
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
    async fetchInflation(param: QueryInflationRequestSDKType) {
      this.inflation = await this.lcdClient.inflation(param);
      return this.inflation;
    },
    async fetchAnnualProvisions(param: QueryAnnualProvisionsRequestSDKType) {
      this.annualProvisions = await this.lcdClient.annualProvisions(param);
      return this.annualProvisions;
    }
  }
});