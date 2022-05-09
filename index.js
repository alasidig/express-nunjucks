const templateEngin = require('nunjucks')
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}))
const tasks =[
  {id:1, title:"Study",done:false},
  {id:2, title:"Exercise",done:false},
  {id:3, title:"Sleep",done:true},
]
  

templateEngin.configure('views', {
    express: app
});
app.route("/")
  .get((req,res)=>res.render('list.html',{tasks}))
.post((req,res)=>{
  res.send(`will add ${req.body.title}`)
})
app.route("/:taskId")
.get((req,res)=>{
  res.render('item.html',{task:tasks[parseInt(req.params.taskId) -1]})})
.post((req,res)=>{
  res.send(`will make ${tasks[parseInt(req.params.taskId) -1].title} Done`)
})

app.listen(5000, () => {
    console.log('listening on http://127.0.0.1:5000')
})