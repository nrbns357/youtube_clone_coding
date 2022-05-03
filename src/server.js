import express from "express";

const PORT = 4000;

const app = express(); //express function & express application 생성

// 잠깐 멈추고 서버란?
// 서버는 항상 켜져있는 컴퓨터 같은 것이다. 보통은 키보드나 화면도 없지만 항상 켜져 있는 컴퓨터이다.
// 서버는 항상 켜져 있고, 인터넷에 연결되어있는 컴퓨터라 할 수 있다.

// request란?
// 서버에 필요한 것들을 요청.

const handleHome = (req, res) => {
  return res.send("<h1>I still love you.</h1>");
  //   res.end();
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

const handleAbout = (req, res) => {
  return res.send("About Here!");
};

const handleContact = (req, res) => {
  return res.send("contact Here!");
};

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/about", handleAbout);
app.get("/contact", handleContact);

const handleListening = () =>
  console.log(`Server listenting on port localhost${PORT}`);
app.listen(PORT, handleListening);
