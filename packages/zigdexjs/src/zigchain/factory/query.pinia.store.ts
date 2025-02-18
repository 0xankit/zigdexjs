//@ts-nocheck
import { useEndpoint } from "../../pinia-endpoint";
import { QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryGetDenomRequestSDKType, QueryDenomResponseSDKType, QueryAllDenomRequestSDKType, QueryAllDenomResponseSDKType, QueryDenomByAdminRequestSDKType, QueryDenomByAdminResponseSDKType, QueryGetDenomAuthRequestSDKType, QueryDenomAuthResponseSDKType, QueryAllDenomAuthRequestSDKType, QueryAllDenomAuthResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('zigchain/factory/query.proto', {
  state: () => {
    return {
      params: {} as QueryParamsResponseSDKType,
      denom: {} as QueryDenomResponseSDKType,
      denomAll: {} as QueryAllDenomResponseSDKType,
      denomsByAdmin: {} as QueryDenomByAdminResponseSDKType,
      denomAuth: {} as QueryDenomAuthResponseSDKType,
      listDenomAuth: {} as QueryAllDenomAuthResponseSDKType
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
    async fetchDenom(param: QueryGetDenomRequestSDKType) {
      this.denom = await this.lcdClient.denom(param);
      return this.denom;
    },
    async fetchDenomAll(param: QueryAllDenomRequestSDKType) {
      this.denomAll = await this.lcdClient.denomAll(param);
      return this.denomAll;
    },
    async fetchDenomsByAdmin(param: QueryDenomByAdminRequestSDKType) {
      this.denomsByAdmin = await this.lcdClient.denomsByAdmin(param);
      return this.denomsByAdmin;
    },
    async fetchDenomAuth(param: QueryGetDenomAuthRequestSDKType) {
      this.denomAuth = await this.lcdClient.denomAuth(param);
      return this.denomAuth;
    },
    async fetchListDenomAuth(param: QueryAllDenomAuthRequestSDKType) {
      this.listDenomAuth = await this.lcdClient.listDenomAuth(param);
      return this.listDenomAuth;
    }
  }
});