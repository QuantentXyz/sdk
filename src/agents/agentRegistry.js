const agents = [];

function registerAgent(agent) {
  agents.push(agent);
}

function listAgents() {
  return agents;
}

module.exports = {
  registerAgent,
  listAgents
};
