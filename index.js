const express = require("express")
const app = express()
app.use(express.urlencoded({extended: true}))
app.post("/update", async (req,res) => {
  console.log(req.body)
  res.json({status: "ok"}).status(200)
})
app.listen(4000)