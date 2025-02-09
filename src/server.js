const app = require('./app');
const connection = require('./db/connection');

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`API Dataside está sendo executada na porta ${PORT}`);
});
