//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { SimulateRequestSDKType, SimulateResponseSDKType, GetTxRequestSDKType, GetTxResponseSDKType, BroadcastTxRequestSDKType, BroadcastTxResponseSDKType, GetTxsEventRequestSDKType, GetTxsEventResponseSDKType, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponseSDKType } from "./service";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/tx/v1beta1/service.proto', {
  state: () => {
    return {
      simulate: {} as SimulateResponseSDKType,
      getTx: {} as GetTxResponseSDKType,
      broadcastTx: {} as BroadcastTxResponseSDKType,
      getTxsEvent: {} as GetTxsEventResponseSDKType,
      getBlockWithTxs: {} as GetBlockWithTxsResponseSDKType
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
    async fetchSimulate(param: SimulateRequestSDKType) {
      this.simulate = await this.lcdClient.simulate(param);
      return this.simulate;
    },
    async fetchGetTx(param: GetTxRequestSDKType) {
      this.getTx = await this.lcdClient.getTx(param);
      return this.getTx;
    },
    async fetchBroadcastTx(param: BroadcastTxRequestSDKType) {
      this.broadcastTx = await this.lcdClient.broadcastTx(param);
      return this.broadcastTx;
    },
    async fetchGetTxsEvent(param: GetTxsEventRequestSDKType) {
      this.getTxsEvent = await this.lcdClient.getTxsEvent(param);
      return this.getTxsEvent;
    },
    async fetchGetBlockWithTxs(param: GetBlockWithTxsRequestSDKType) {
      this.getBlockWithTxs = await this.lcdClient.getBlockWithTxs(param);
      return this.getBlockWithTxs;
    }
  }
});