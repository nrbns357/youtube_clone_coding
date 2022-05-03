import express from "express";

const PORT = 4000;

const app = express(); //express function & express application 생성

// 잠깐 멈추고 서버란?
// 서버는 항상 켜져있는 컴퓨터 같은 것이다. 보통은 키보드나 화면도 없지만 항상 켜져 있는 컴퓨터이다.
// 서버는 항상 켜져 있고, 인터넷에 연결되어있는 컴퓨터라 할 수 있다.

// request란?
// 서버에 필요한 것들을 요청.

const handleHome = () => console.loog("Somebody is trying to go home.");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server listenting on port localhost${PORT}`);
app.listen(PORT, handleListening);
