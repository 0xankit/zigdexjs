//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryGrantsRequestSDKType, QueryGrantsResponseSDKType, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/authz/v1beta1/query.proto', {
  state: () => {
    return {
      grants: {} as QueryGrantsResponseSDKType,
      granterGrants: {} as QueryGranterGrantsResponseSDKType,
      granteeGrants: {} as QueryGranteeGrantsResponseSDKType
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
    async fetchGrants(param: QueryGrantsRequestSDKType) {
      this.grants = await this.lcdClient.grants(param);
      return this.grants;
    },
    async fetchGranterGrants(param: QueryGranterGrantsRequestSDKType) {
      this.granterGrants = await this.lcdClient.granterGrants(param);
      return this.granterGrants;
    },
    async fetchGranteeGrants(param: QueryGranteeGrantsRequestSDKType) {
      this.granteeGrants = await this.lcdClient.granteeGrants(param);
      return this.granteeGrants;
    }
  }
});