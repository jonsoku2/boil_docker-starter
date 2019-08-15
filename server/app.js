const express = require("express");
const cors = require("cors");
const app = express();
//Cors 설정
app.use(cors());
//Json 설정
app.use(express.json({ extends: false }));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(201).json({ test: `server를 client로 읽어오는것 성공!` });
  res.send("API RUNNING!");
});

app.listen(PORT, () => {
  console.log(`Serve is up on PORT ${PORT}`);
});
