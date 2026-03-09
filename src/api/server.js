const express = require("express");
const cors = require("cors");

const { registerAgent, listAgents } = require("../agents/agentRegistry");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/agents", (req, res) => {
  res.json(listAgents());
});

app.post("/agents", (req, res) => {
  const agent = req.body;
  registerAgent(agent);
  res.json({ status: "Agent Registered" });
});

module.exports = app;
