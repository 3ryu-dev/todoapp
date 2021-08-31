const express = require ('express')
const app = express()
const port = 3030

const Mongoose = require ('mongoose')
const db = Mongoose.connect

 const todos = require ('./models/todos')
 const todoCtrl = require ('./controllers/todoCtrl.js')

 const cors = require ('cors')


//조가튼 바디파서

app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.use(cors());



//몽고디비연결과 포트 열기

db('mongodb+srv://a:q1w2e3r4t5@cluster0.jx7be.mongodb.net/todoapp?retryWrites=true&w=majority', {UseNewUrlParser:true})
.catch(error => console.log(error))
.then(() => console.log('MongoDB connected...'))
.then(app.listen(port, () => console.log(` app listening on port ${port}!`)))



// 이하 라우터

app.get('/',todoCtrl.getTodo)

app.post('/new', todoCtrl.saveTodo)

app.delete('/del/:_id',todoCtrl.deleteTodo)
