//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryContractInfoRequestSDKType, QueryContractInfoResponseSDKType, QueryContractHistoryRequestSDKType, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequestSDKType, QueryAllContractStateResponseSDKType, QueryRawContractStateRequestSDKType, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponseSDKType, QueryCodeRequestSDKType, QueryCodeResponseSDKType, QueryCodesRequestSDKType, QueryCodesResponseSDKType, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponseSDKType, QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryContractsByCreatorRequestSDKType, QueryContractsByCreatorResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmwasm/wasm/v1/query.proto', {
  state: () => {
    return {
      contractInfo: {} as QueryContractInfoResponseSDKType,
      contractHistory: {} as QueryContractHistoryResponseSDKType,
      contractsByCode: {} as QueryContractsByCodeResponseSDKType,
      allContractState: {} as QueryAllContractStateResponseSDKType,
      rawContractState: {} as QueryRawContractStateResponseSDKType,
      smartContractState: {} as QuerySmartContractStateResponseSDKType,
      code: {} as QueryCodeResponseSDKType,
      codes: {} as QueryCodesResponseSDKType,
      pinnedCodes: {} as QueryPinnedCodesResponseSDKType,
      params: {} as QueryParamsResponseSDKType,
      contractsByCreator: {} as QueryContractsByCreatorResponseSDKType
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
    async fetchContractInfo(param: QueryContractInfoRequestSDKType) {
      this.contractInfo = await this.lcdClient.contractInfo(param);
      return this.contractInfo;
    },
    async fetchContractHistory(param: QueryContractHistoryRequestSDKType) {
      this.contractHistory = await this.lcdClient.contractHistory(param);
      return this.contractHistory;
    },
    async fetchContractsByCode(param: QueryContractsByCodeRequestSDKType) {
      this.contractsByCode = await this.lcdClient.contractsByCode(param);
      return this.contractsByCode;
    },
    async fetchAllContractState(param: QueryAllContractStateRequestSDKType) {
      this.allContractState = await this.lcdClient.allContractState(param);
      return this.allContractState;
    },
    async fetchRawContractState(param: QueryRawContractStateRequestSDKType) {
      this.rawContractState = await this.lcdClient.rawContractState(param);
      return this.rawContractState;
    },
    async fetchSmartContractState(param: QuerySmartContractStateRequestSDKType) {
      this.smartContractState = await this.lcdClient.smartContractState(param);
      return this.smartContractState;
    },
    async fetchCode(param: QueryCodeRequestSDKType) {
      this.code = await this.lcdClient.code(param);
      return this.code;
    },
    async fetchCodes(param: QueryCodesRequestSDKType) {
      this.codes = await this.lcdClient.codes(param);
      return this.codes;
    },
    async fetchPinnedCodes(param: QueryPinnedCodesRequestSDKType) {
      this.pinnedCodes = await this.lcdClient.pinnedCodes(param);
      return this.pinnedCodes;
    },
    async fetchParams(param: QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },
    async fetchContractsByCreator(param: QueryContractsByCreatorRequestSDKType) {
      this.contractsByCreator = await this.lcdClient.contractsByCreator(param);
      return this.contractsByCreator;
    }
  }
});