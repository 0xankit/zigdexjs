//@ts-nocheck
import { useEndpoint } from "../../pinia-endpoint";
import { QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryGetPoolRequestSDKType, QueryGetPoolResponseSDKType, QueryAllPoolRequestSDKType, QueryAllPoolResponseSDKType, QueryGetPoolsMetaRequestSDKType, QueryGetPoolsMetaResponseSDKType, QueryGetPoolUidRequestSDKType, QueryGetPoolUidResponseSDKType, QueryAllPoolUidsRequestSDKType, QueryAllPoolUidsResponseSDKType, QuerySwapInRequestSDKType, QuerySwapInResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('zigchain/dex/query.proto', {
  state: () => {
    return {
      params: {} as QueryParamsResponseSDKType,
      getPool: {} as QueryGetPoolResponseSDKType,
      listPool: {} as QueryAllPoolResponseSDKType,
      getPoolsMeta: {} as QueryGetPoolsMetaResponseSDKType,
      getPoolUid: {} as QueryGetPoolUidResponseSDKType,
      listPoolUids: {} as QueryAllPoolUidsResponseSDKType,
      swapIn: {} as QuerySwapInResponseSDKType
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
    async fetchGetPool(param: QueryGetPoolRequestSDKType) {
      this.getPool = await this.lcdClient.getPool(param);
      return this.getPool;
    },
    async fetchListPool(param: QueryAllPoolRequestSDKType) {
      this.listPool = await this.lcdClient.listPool(param);
      return this.listPool;
    },
    async fetchGetPoolsMeta(param: QueryGetPoolsMetaRequestSDKType) {
      this.getPoolsMeta = await this.lcdClient.getPoolsMeta(param);
      return this.getPoolsMeta;
    },
    async fetchGetPoolUid(param: QueryGetPoolUidRequestSDKType) {
      this.getPoolUid = await this.lcdClient.getPoolUid(param);
      return this.getPoolUid;
    },
    async fetchListPoolUids(param: QueryAllPoolUidsRequestSDKType) {
      this.listPoolUids = await this.lcdClient.listPoolUids(param);
      return this.listPoolUids;
    },
    async fetchSwapIn(param: QuerySwapInRequestSDKType) {
      this.swapIn = await this.lcdClient.swapIn(param);
      return this.swapIn;
    }
  }
});