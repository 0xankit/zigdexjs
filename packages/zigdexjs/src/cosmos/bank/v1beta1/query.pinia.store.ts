//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryBalanceRequestSDKType, QueryBalanceResponseSDKType, QueryAllBalancesRequestSDKType, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequestSDKType, QuerySupplyOfResponseSDKType, QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/bank/v1beta1/query.proto', {
  state: () => {
    return {
      balance: {} as QueryBalanceResponseSDKType,
      allBalances: {} as QueryAllBalancesResponseSDKType,
      spendableBalances: {} as QuerySpendableBalancesResponseSDKType,
      totalSupply: {} as QueryTotalSupplyResponseSDKType,
      supplyOf: {} as QuerySupplyOfResponseSDKType,
      params: {} as QueryParamsResponseSDKType,
      denomMetadata: {} as QueryDenomMetadataResponseSDKType,
      denomsMetadata: {} as QueryDenomsMetadataResponseSDKType,
      denomOwners: {} as QueryDenomOwnersResponseSDKType
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
    async fetchBalance(param: QueryBalanceRequestSDKType) {
      this.balance = await this.lcdClient.balance(param);
      return this.balance;
    },
    async fetchAllBalances(param: QueryAllBalancesRequestSDKType) {
      this.allBalances = await this.lcdClient.allBalances(param);
      return this.allBalances;
    },
    async fetchSpendableBalances(param: QuerySpendableBalancesRequestSDKType) {
      this.spendableBalances = await this.lcdClient.spendableBalances(param);
      return this.spendableBalances;
    },
    async fetchTotalSupply(param: QueryTotalSupplyRequestSDKType) {
      this.totalSupply = await this.lcdClient.totalSupply(param);
      return this.totalSupply;
    },
    async fetchSupplyOf(param: QuerySupplyOfRequestSDKType) {
      this.supplyOf = await this.lcdClient.supplyOf(param);
      return this.supplyOf;
    },
    async fetchParams(param: QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },
    async fetchDenomMetadata(param: QueryDenomMetadataRequestSDKType) {
      this.denomMetadata = await this.lcdClient.denomMetadata(param);
      return this.denomMetadata;
    },
    async fetchDenomsMetadata(param: QueryDenomsMetadataRequestSDKType) {
      this.denomsMetadata = await this.lcdClient.denomsMetadata(param);
      return this.denomsMetadata;
    },
    async fetchDenomOwners(param: QueryDenomOwnersRequestSDKType) {
      this.denomOwners = await this.lcdClient.denomOwners(param);
      return this.denomOwners;
    }
  }
});