//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryGroupInfoRequestSDKType, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequestSDKType, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequestSDKType, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequestSDKType, QueryTallyResultResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/group/v1/query.proto', {
  state: () => {
    return {
      groupInfo: {} as QueryGroupInfoResponseSDKType,
      groupPolicyInfo: {} as QueryGroupPolicyInfoResponseSDKType,
      groupMembers: {} as QueryGroupMembersResponseSDKType,
      groupsByAdmin: {} as QueryGroupsByAdminResponseSDKType,
      groupPoliciesByGroup: {} as QueryGroupPoliciesByGroupResponseSDKType,
      groupPoliciesByAdmin: {} as QueryGroupPoliciesByAdminResponseSDKType,
      proposal: {} as QueryProposalResponseSDKType,
      proposalsByGroupPolicy: {} as QueryProposalsByGroupPolicyResponseSDKType,
      voteByProposalVoter: {} as QueryVoteByProposalVoterResponseSDKType,
      votesByProposal: {} as QueryVotesByProposalResponseSDKType,
      votesByVoter: {} as QueryVotesByVoterResponseSDKType,
      groupsByMember: {} as QueryGroupsByMemberResponseSDKType,
      tallyResult: {} as QueryTallyResultResponseSDKType
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
    async fetchGroupInfo(param: QueryGroupInfoRequestSDKType) {
      this.groupInfo = await this.lcdClient.groupInfo(param);
      return this.groupInfo;
    },
    async fetchGroupPolicyInfo(param: QueryGroupPolicyInfoRequestSDKType) {
      this.groupPolicyInfo = await this.lcdClient.groupPolicyInfo(param);
      return this.groupPolicyInfo;
    },
    async fetchGroupMembers(param: QueryGroupMembersRequestSDKType) {
      this.groupMembers = await this.lcdClient.groupMembers(param);
      return this.groupMembers;
    },
    async fetchGroupsByAdmin(param: QueryGroupsByAdminRequestSDKType) {
      this.groupsByAdmin = await this.lcdClient.groupsByAdmin(param);
      return this.groupsByAdmin;
    },
    async fetchGroupPoliciesByGroup(param: QueryGroupPoliciesByGroupRequestSDKType) {
      this.groupPoliciesByGroup = await this.lcdClient.groupPoliciesByGroup(param);
      return this.groupPoliciesByGroup;
    },
    async fetchGroupPoliciesByAdmin(param: QueryGroupPoliciesByAdminRequestSDKType) {
      this.groupPoliciesByAdmin = await this.lcdClient.groupPoliciesByAdmin(param);
      return this.groupPoliciesByAdmin;
    },
    async fetchProposal(param: QueryProposalRequestSDKType) {
      this.proposal = await this.lcdClient.proposal(param);
      return this.proposal;
    },
    async fetchProposalsByGroupPolicy(param: QueryProposalsByGroupPolicyRequestSDKType) {
      this.proposalsByGroupPolicy = await this.lcdClient.proposalsByGroupPolicy(param);
      return this.proposalsByGroupPolicy;
    },
    async fetchVoteByProposalVoter(param: QueryVoteByProposalVoterRequestSDKType) {
      this.voteByProposalVoter = await this.lcdClient.voteByProposalVoter(param);
      return this.voteByProposalVoter;
    },
    async fetchVotesByProposal(param: QueryVotesByProposalRequestSDKType) {
      this.votesByProposal = await this.lcdClient.votesByProposal(param);
      return this.votesByProposal;
    },
    async fetchVotesByVoter(param: QueryVotesByVoterRequestSDKType) {
      this.votesByVoter = await this.lcdClient.votesByVoter(param);
      return this.votesByVoter;
    },
    async fetchGroupsByMember(param: QueryGroupsByMemberRequestSDKType) {
      this.groupsByMember = await this.lcdClient.groupsByMember(param);
      return this.groupsByMember;
    },
    async fetchTallyResult(param: QueryTallyResultRequestSDKType) {
      this.tallyResult = await this.lcdClient.tallyResult(param);
      return this.tallyResult;
    }
  }
});