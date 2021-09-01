const express = require ('express')
const app = express()
const cors = require ('cors')
require('dotenv').config();
const port =  process.env.PORT || 3030
const path = require('path');


const Mongoose = require ('mongoose')
 

 const todos = require ('./models/todos')
 const todoCtrl = require ('./controllers/todoCtrl.js')



//조가튼 바디파서
app.use(express.static('build'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/build')));

app.use(express.urlencoded({extended:false}));
app.use(cors());



//몽고디비연결과 포트 열기

Mongoose.connect('mongodb+srv://a:q1w2e3r4t5@cluster0.jx7be.mongodb.net/todoapp?retryWrites=true&w=majority', {UseNewUrlParser:true})
.catch(error => console.log(error))
.then(() => console.log('MongoDB connected...'))
.then(app.listen(port, () => console.log(` app listening on port ${port}!`)))



// 이하 라우터


app.get('/',(req,res)=>{res.sendFile(path.join(__dirname, '/build/index.html'))})
app.get('/home',(req,res)=>{res.sendFile(path.join(__dirname, '/build/index.html'))})


app.get('/data', todoCtrl.getTodo)

app.post('/new', todoCtrl.saveTodo)

app.delete('/del/:_id',todoCtrl.deleteTodo)
