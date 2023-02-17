let express=require("express")
let app=express();
app.use(express.json())
app.use(function(req,res,next){

  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET,POST,OPRIONS,PUT,PATCH,DELETE,HEAD");
  res.header("Access-Control-Allow-Headers,Origin,X-Requested-With,Content-Type,Accept");
  next();
})
const port= process.env.PORT || 2410;
app.listen(port,()=>console.log(`Listening on port ${port}`))

let {mobileData}=require("./MobilesData");

app.get("/mobile",function(req,res){
  let brand=req.query.brand
  let RAM=req.query.RAM;
  let ROM=req.query.ROM;
  let arr1=mobileData;
  if(brand)
  {
     arr1=arr1.filter((pr)=>pr.brand==brand)
  }
  if(RAM)
  {
     arr1=arr1.filter((pr)=>pr.RAM==RAM)
  }
  if(ROM)
  {
     arr1=arr1.filter((pr)=>pr.ROM==ROM)
  }
   res.send(arr1)
})
app.get("/mobile/:name",function(req,res){
   let name=req.params.name
   let data=mobileData.find((pr)=>pr.name==name)
   res.send(data)
})
app.post("/mobiles",function(req,res){
   let body=req.body;
   mobileData.push(body)
   res.send(body)
})
  app.delete("/mo/:name",function(req,res)
  {
    let name=req.params.name
    let data=mobileData.find((pr)=>pr.name==name)
    mobileData.splice(data,1)
    res.send(data)

  })