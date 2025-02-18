//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryAllowanceRequestSDKType, QueryAllowanceResponseSDKType, QueryAllowancesRequestSDKType, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequestSDKType, QueryAllowancesByGranterResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/feegrant/v1beta1/query.proto', {
  state: () => {
    return {
      allowance: {} as QueryAllowanceResponseSDKType,
      allowances: {} as QueryAllowancesResponseSDKType,
      allowancesByGranter: {} as QueryAllowancesByGranterResponseSDKType
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
    async fetchAllowance(param: QueryAllowanceRequestSDKType) {
      this.allowance = await this.lcdClient.allowance(param);
      return this.allowance;
    },
    async fetchAllowances(param: QueryAllowancesRequestSDKType) {
      this.allowances = await this.lcdClient.allowances(param);
      return this.allowances;
    },
    async fetchAllowancesByGranter(param: QueryAllowancesByGranterRequestSDKType) {
      this.allowancesByGranter = await this.lcdClient.allowancesByGranter(param);
      return this.allowancesByGranter;
    }
  }
});