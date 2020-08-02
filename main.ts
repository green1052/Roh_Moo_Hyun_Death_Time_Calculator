import http = require("http");
import moment = require("moment");
import express = require("express");

moment.locale("ko");

const app = express();
const deathTime = moment("2009-5-23 6:40", "YYYY-MM-DD hh:mm");

app.set("views", "./views");
app.set("view engine", "ejs");

http.createServer(app).listen(80, function () {
    console.log("[http] 포트 80으로 열렸습니다.");
});

app.get("/", function (req: express.Request, res: express.Response) {
    let nowTime = moment();

    let diffTime = {
        years: moment.duration(nowTime.diff(deathTime)).years(),
        months: moment.duration(nowTime.diff(deathTime)).months(),
        day: moment.duration(nowTime.diff(deathTime)).days(),
        minute: moment.duration(nowTime.diff(deathTime)).minutes(),
        second: moment.duration(nowTime.diff(deathTime)).seconds()
    }

    res.render("main", {time: `${diffTime.years}년 ${diffTime.months}월 ${diffTime.day}일 ${diffTime.minute}분 ${diffTime.second}초`});
});