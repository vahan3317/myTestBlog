const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require("./models/articles")
const methodOverride = require('method-override')
const app = express()


mongoose.connect('mongodb+srv://myblog:myblog123@cluster0.t04cl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
 useNewUrlParser:true,
 // useCreateIndex:true
 useUnifiedTopology:true,

})

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))






app.get('/',async (req,res) =>{
const articles = await Article.find().sort({cratedAt:'desc'})
 res.render('articles/index',{ articles: articles});

})


app.use('/articles',articleRouter);

app.listen(process.env.PORT);