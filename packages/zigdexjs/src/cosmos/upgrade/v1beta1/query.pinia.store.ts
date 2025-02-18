//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponseSDKType, QueryAuthorityRequestSDKType, QueryAuthorityResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/upgrade/v1beta1/query.proto', {
  state: () => {
    return {
      currentPlan: {} as QueryCurrentPlanResponseSDKType,
      appliedPlan: {} as QueryAppliedPlanResponseSDKType,
      upgradedConsensusState: {} as QueryUpgradedConsensusStateResponseSDKType,
      moduleVersions: {} as QueryModuleVersionsResponseSDKType,
      authority: {} as QueryAuthorityResponseSDKType
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
    async fetchCurrentPlan(param: QueryCurrentPlanRequestSDKType) {
      this.currentPlan = await this.lcdClient.currentPlan(param);
      return this.currentPlan;
    },
    async fetchAppliedPlan(param: QueryAppliedPlanRequestSDKType) {
      this.appliedPlan = await this.lcdClient.appliedPlan(param);
      return this.appliedPlan;
    },
    async fetchUpgradedConsensusState(param: QueryUpgradedConsensusStateRequestSDKType) {
      this.upgradedConsensusState = await this.lcdClient.upgradedConsensusState(param);
      return this.upgradedConsensusState;
    },
    async fetchModuleVersions(param: QueryModuleVersionsRequestSDKType) {
      this.moduleVersions = await this.lcdClient.moduleVersions(param);
      return this.moduleVersions;
    },
    async fetchAuthority(param: QueryAuthorityRequestSDKType) {
      this.authority = await this.lcdClient.authority(param);
      return this.authority;
    }
  }
});