const app = require("./api/server");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Quantent infrastructure running on port ${PORT}`);
});
