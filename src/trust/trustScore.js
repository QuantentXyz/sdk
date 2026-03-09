class TrustScore {
  constructor() {
    this.scores = {};
  }

  update(agentId, score) {
    if (!this.scores[agentId]) {
      this.scores[agentId] = 0;
    }

    this.scores[agentId] += score;
  }

  get(agentId) {
    return this.scores[agentId] || 0;
  }
}

module.exports = TrustScore;
