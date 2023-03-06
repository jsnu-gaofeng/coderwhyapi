const http = require("http");
const serve = http.createServer((req, res) => {
  console.log(req);
  res.end("hello");
  //相当于干了两件事
  // res.write('hello');
  // res.close;
});

serve.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
