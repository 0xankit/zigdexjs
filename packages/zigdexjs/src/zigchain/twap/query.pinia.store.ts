//@ts-nocheck
import { useEndpoint } from "../../pinia-endpoint";
import { QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryArithmeticTwapRequestSDKType, QueryArithmeticTwapResponseSDKType, QueryArithmeticTwapToNowRequestSDKType, QueryArithmeticTwapToNowResponseSDKType, QueryGeometricTwapRequestSDKType, QueryGeometricTwapResponseSDKType, QueryGeometricTwapToNowRequestSDKType, QueryGeometricTwapToNowResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('zigchain/twap/query.proto', {
  state: () => {
    return {
      params: {} as QueryParamsResponseSDKType,
      arithmeticTwap: {} as QueryArithmeticTwapResponseSDKType,
      arithmeticTwapToNow: {} as QueryArithmeticTwapToNowResponseSDKType,
      geometricTwap: {} as QueryGeometricTwapResponseSDKType,
      geometricTwapToNow: {} as QueryGeometricTwapToNowResponseSDKType
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
    async fetchArithmeticTwap(param: QueryArithmeticTwapRequestSDKType) {
      this.arithmeticTwap = await this.lcdClient.arithmeticTwap(param);
      return this.arithmeticTwap;
    },
    async fetchArithmeticTwapToNow(param: QueryArithmeticTwapToNowRequestSDKType) {
      this.arithmeticTwapToNow = await this.lcdClient.arithmeticTwapToNow(param);
      return this.arithmeticTwapToNow;
    },
    async fetchGeometricTwap(param: QueryGeometricTwapRequestSDKType) {
      this.geometricTwap = await this.lcdClient.geometricTwap(param);
      return this.geometricTwap;
    },
    async fetchGeometricTwapToNow(param: QueryGeometricTwapToNowRequestSDKType) {
      this.geometricTwapToNow = await this.lcdClient.geometricTwapToNow(param);
      return this.geometricTwapToNow;
    }
  }
});