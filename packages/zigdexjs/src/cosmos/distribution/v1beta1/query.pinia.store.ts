//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/distribution/v1beta1/query.proto', {
  state: () => {
    return {
      params: {} as QueryParamsResponseSDKType,
      validatorOutstandingRewards: {} as QueryValidatorOutstandingRewardsResponseSDKType,
      validatorCommission: {} as QueryValidatorCommissionResponseSDKType,
      validatorSlashes: {} as QueryValidatorSlashesResponseSDKType,
      delegationRewards: {} as QueryDelegationRewardsResponseSDKType,
      delegationTotalRewards: {} as QueryDelegationTotalRewardsResponseSDKType,
      delegatorValidators: {} as QueryDelegatorValidatorsResponseSDKType,
      delegatorWithdrawAddress: {} as QueryDelegatorWithdrawAddressResponseSDKType,
      communityPool: {} as QueryCommunityPoolResponseSDKType
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
    async fetchValidatorOutstandingRewards(param: QueryValidatorOutstandingRewardsRequestSDKType) {
      this.validatorOutstandingRewards = await this.lcdClient.validatorOutstandingRewards(param);
      return this.validatorOutstandingRewards;
    },
    async fetchValidatorCommission(param: QueryValidatorCommissionRequestSDKType) {
      this.validatorCommission = await this.lcdClient.validatorCommission(param);
      return this.validatorCommission;
    },
    async fetchValidatorSlashes(param: QueryValidatorSlashesRequestSDKType) {
      this.validatorSlashes = await this.lcdClient.validatorSlashes(param);
      return this.validatorSlashes;
    },
    async fetchDelegationRewards(param: QueryDelegationRewardsRequestSDKType) {
      this.delegationRewards = await this.lcdClient.delegationRewards(param);
      return this.delegationRewards;
    },
    async fetchDelegationTotalRewards(param: QueryDelegationTotalRewardsRequestSDKType) {
      this.delegationTotalRewards = await this.lcdClient.delegationTotalRewards(param);
      return this.delegationTotalRewards;
    },
    async fetchDelegatorValidators(param: QueryDelegatorValidatorsRequestSDKType) {
      this.delegatorValidators = await this.lcdClient.delegatorValidators(param);
      return this.delegatorValidators;
    },
    async fetchDelegatorWithdrawAddress(param: QueryDelegatorWithdrawAddressRequestSDKType) {
      this.delegatorWithdrawAddress = await this.lcdClient.delegatorWithdrawAddress(param);
      return this.delegatorWithdrawAddress;
    },
    async fetchCommunityPool(param: QueryCommunityPoolRequestSDKType) {
      this.communityPool = await this.lcdClient.communityPool(param);
      return this.communityPool;
    }
  }
});