import express from "express";
import morgan from "morgan"; // 좀 더 정교한 미들웨어
// 잠깐 멈추고 서버란?
// 서버는 항상 켜져있는 컴퓨터 같은 것이다. 보통은 키보드나 화면도 없지만 항상 켜져 있는 컴퓨터이다.
// 서버는 항상 켜져 있고, 인터넷에 연결되어있는 컴퓨터라 할 수 있다.

// request란?
// 서버에 필요한 것들을 요청.

const PORT = 4000;

const app = express(); //express function & express application 생성
const logger = morgan("dev");

app.use(morgan("dev"));

const methodLogger = (req, res, next) => {
  next();
};

const routerLogger = (req, res, next) => {
  console.log(req.path);
  next();
};

const home = (req, res) => {
  console.log("Hello");
  return res.send("hello");
};

const login = (req, res, next) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

// const gossipMiddleware = (req, res, next) => {
//   next();
// };

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
// };

// const privateMiddleware = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Not Allowed</h1>");
//   }
//   console.log("Allowed, you may continue.");
//   next();
// };

// const handleHome = (req, res, next) => {
//   return res.send("<h1>I still love you.</h1>");
// };

// const handleLogin = (req, res) => {
//   return res.send({ message: "Login here." });
// };

// const handleAbout = (req, res) => {
//   return res.send("About Here!");
// };

// const handleContact = (req, res) => {
//   return res.send("contact Here!");
// };

// const handleProtected = (req, res) => {
//   return res.send("welcome");
// };

// app.use(logger);
// app.use(privateMiddleware);
// app.get("/", handleHome);
// app.get("/protected", handleProtected);
// app.get("/login", handleLogin);
// app.get("/about", handleAbout);
// app.get("/contact", handleContact);

const handleListening = () => {
  console.log(`Server listenting on port localhost${PORT}`);
};

app.listen(PORT, handleListening);
