var https require https;
const express = require express;

app = express();

app.get('/',(req,res){
    res.send('Hello World!')
})

app.listen(3000,()=>{
    console.log(Sample app listening on port 3000);
})
