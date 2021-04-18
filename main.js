const express = require("express");
let app = express();
const port = 3070;

app.use(express.text());
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  //   res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.listen(port, () => {
  console.log(`--服务器已启动，正在监听${port}端口--`);
});
app.options("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "get,post");
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Access-Control-Max-Age", "1");
  res.end();
});
app.get("/", (req, res) => {
  res.send("<p>hello wwww</p>");
});
//app.get(path,function)
//path可以是字符串，可以是正则，可以是包含路径的字符串数组
//function接受的res对象
//res.send( string / array-liked object / boolean / buffer)
//string的类型会被解析为 text/html

app.post("/", (req, res) => {
  console.log(req.body);
  // res.send("post成功了");
  res.sendStatus(200);
});
