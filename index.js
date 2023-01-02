const express = require("express");
const path = require("path")
const app = express();

app.use(express.urlencoded({
  extended: false
}))
app.use(express.static(path.join(__dirname, "public")))

// app.get("/", function (request, response) {
//   // console.log(request);
//   response.send("トップページ!!");
// })
app.post("/api/v1/quiz", function (request, response) {
  const answer = request.body.answer
  if (Number(answer) === 2) {
    response.redirect("/correct.html")
  } else {
    response.redirect("/wrong.html")
  }
})

app.listen(3000, () => {
  console.log("サーバー起動");
})

