// const express= require("express");
// const path= require("path");
// const app= express();
// app.use(express.json());
// const PORT=8080;
// app.set('view engine', 'ejs');
// filepath=path.join(__dirname,'/views/index.ejs')
// app.get('/',(req, res)=>{ 
//     let name="sam"
//     let place="hyderabad"
//     res.render(filepath,{name,destination:place});
//     // res.sendFile(filepath);
// })
// app.listen(PORT,(err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(`Listening to PORT ${PORT}`);
//     }
// })
const express= require("express");
const path= require("path");
const app= express();
app.use(express.json());
const PORT=8080;
app.set('view engine', 'ejs');
filepath=path.join(__dirname,'/views/index.ejs')
filepath1=path.join(__dirname,'/views/welcome.ejs')
app.get('/',(req, res)=>{ 
    let name="sam"
    let place="hyderabad"
    res.render(filepath,{name,destination:place});
    // res.sendFile(filepath);
})
app.get('/welcome',(req, res)=>{ 
    let name="Garima"
    let current = new Date().getHours();
    let greeting= current< 12 ? "Good Morning" : "Good Afternoon"
    res.render(filepath1,{name, greeting});
    // res.sendFile(filepath);
})
app.listen(PORT,(err)=> {
    if(err) {
        console.log(err);
    }
    else {
        console.log(`Listening to PORT ${PORT}`);
    }
})