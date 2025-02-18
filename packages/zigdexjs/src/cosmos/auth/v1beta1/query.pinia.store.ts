//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryAccountsRequestSDKType, QueryAccountsResponseSDKType, QueryAccountRequestSDKType, QueryAccountResponseSDKType, QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponseSDKType, Bech32PrefixRequestSDKType, Bech32PrefixResponseSDKType, AddressBytesToStringRequestSDKType, AddressBytesToStringResponseSDKType, AddressStringToBytesRequestSDKType, AddressStringToBytesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/auth/v1beta1/query.proto', {
  state: () => {
    return {
      accounts: {} as QueryAccountsResponseSDKType,
      account: {} as QueryAccountResponseSDKType,
      params: {} as QueryParamsResponseSDKType,
      moduleAccounts: {} as QueryModuleAccountsResponseSDKType,
      bech32Prefix: {} as Bech32PrefixResponseSDKType,
      addressBytesToString: {} as AddressBytesToStringResponseSDKType,
      addressStringToBytes: {} as AddressStringToBytesResponseSDKType
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
    async fetchAccounts(param: QueryAccountsRequestSDKType) {
      this.accounts = await this.lcdClient.accounts(param);
      return this.accounts;
    },
    async fetchAccount(param: QueryAccountRequestSDKType) {
      this.account = await this.lcdClient.account(param);
      return this.account;
    },
    async fetchParams(param: QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },
    async fetchModuleAccounts(param: QueryModuleAccountsRequestSDKType) {
      this.moduleAccounts = await this.lcdClient.moduleAccounts(param);
      return this.moduleAccounts;
    },
    async fetchBech32Prefix(param: Bech32PrefixRequestSDKType) {
      this.bech32Prefix = await this.lcdClient.bech32Prefix(param);
      return this.bech32Prefix;
    },
    async fetchAddressBytesToString(param: AddressBytesToStringRequestSDKType) {
      this.addressBytesToString = await this.lcdClient.addressBytesToString(param);
      return this.addressBytesToString;
    },
    async fetchAddressStringToBytes(param: AddressStringToBytesRequestSDKType) {
      this.addressStringToBytes = await this.lcdClient.addressStringToBytes(param);
      return this.addressStringToBytes;
    }
  }
});