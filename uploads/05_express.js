import express from "express";
import multer from "multer";
const app = express();

//其实也是一个中间件
app.get("/", (req, res, next) => {
  res.send("1111");
});

//最普通的中间件(本质上里面就是个回调函数)
//如果有多个中间件，如果不写next()那么其他的不做相应
app.use((req, res, next) => {});

//路径匹配中间件
app.use("/home", (req, res, next) => {});

//路径和方法匹配的中间件
app.get("/home", (req, res, next) => {});

//一个get注册好几个中间件
app.get(
  "/home",
  (req, res, next) => {},
  (req, res, next) => {},
  (req, res, next) => {}
);

//中间件应用，json解析
app.use(express.json());
app.get("/home", (req, res, next) => {});

//解析formdata数据
const upload = multer({
  dest: "./uploads/",
});

//永远不要将multer作为全局中间件使用
app.use(upload.any());

app.listen(8888, () => {
  console.log("服务器启动成功！！！！");
});
