//  import express from "express";//ES Module Express
// const app = express()
// app.use (express.json())
//  const coupons=[
// {
//     name:'diwalicoupon',
//     startdate:"22-oct-2023",
//     enddate:'12-Nov-2023',
//     couponcode:"xvhydgsns",
//     offervalue:"100",
//     discount:"10",
//     status:true
// },
// {
//     name:'diwalicoupon',
//     startdate:"22-oct-2023",
//     enddate:'12-Nov-2023',
//     couponcode:"xvhydgsns",
//     offervalue:"100",
//     discount:"10",
//     status:true
// },
// ]
// app.get('/',(req,res)=>{
//     res.send(`<h1>Wellcome to Express<h1>`)


// })
// app.get('/coupons',(req,res)=>{
//     res.send({
//         message:"Data Fetch Successful",coupons
//     })
// })
// app.get('/coupons/:id',(req,res)=>{
//     const id= Number(req.params.id)
//         if(id !==NaN && id<coupons.length){
//             res.status(200).send({
//                 message:"Data fetch Successful",
//                 coupon:coupons[id]

//             })
//         }
//         else{
//             res.status(400).send({
//                 message:"invalid id"
//             })
//         }
    
// })




// app.listen(8000,()=>console.log("Server is listening 8000"))


const express = require('express') //commonJS Import older version
// import express from 'express'//ES Module Import add "type": "module" in package.json
const dotenv = require('dotenv')
const cors = require('cors')

const AppRoutes = require('./src/routes')
dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.use('/',AppRoutes)


app.listen(PORT,()=>console.log(`Server listening to port ${PORT}`))

// npm init
// npm i express
// "start": "node index.js",