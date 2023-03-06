// Body——form-data 最多就是用来作文件上传、
const http = require("http");

const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });
  res.end("wanbi");
});

server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
