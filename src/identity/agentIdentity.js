class AgentIdentity {
  constructor(agentId, wallet) {
    this.agentId = agentId;
    this.wallet = wallet;
    this.createdAt = Date.now();
  }

  verify() {
    return {
      agentId: this.agentId,
      wallet: this.wallet,
      verified: true
    };
  }
}

module.exports = AgentIdentity;
