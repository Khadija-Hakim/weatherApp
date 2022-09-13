   
   const express=require('express');
   var exphbs  = require('express-handlebars');

    const app=express();
    app.engine('.hbs', exphbs.engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    const path=require('path');
    const port=process.env.PORT || 3000;
    const static_path=path.join(__dirname,"../public");
    console.log(static_path);

    // app.set('view engine','handlebars');
    app.set('views', './views');

    app.use(express.static("public"));
    
    app.get("/",(req,res)=>
    {
        res.render('index');
    })
    app.get("/about",(req,res)=>
    {
        res.render('about');
    })
    app.get("/weather",(req,res)=>
    {
        res.render('weather');
    })
    app.get("*",(req,res)=>
    {
        res.render('404Error');
    })
    app.listen(port,()=>
    {
        console.log(`Listening to the port ${port}`);
    })