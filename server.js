const express = require("express");
const cors = require("cors");
const app = express();
const models = require('./models')
const port = "8080";

app.use(express.json());
app.use(cors()); // 브라우저의 cors 이슈를 막기 위해 사용하는 코드.
app.get("/products", (req, res) => {
  models.Product.findAll(
    {
      order:[
        ['createdAt', 'DESC'] //오름차순 : ASC 내림차 순 : DESC 
      ],
      attributes:['id','name','price','seller','imageUrl','createdAt']
    }
  )
  .then((result)=>{
    console.log("PRODUCT:",result)
    res.send({
      product:result,
    })
  }).catch((error)=>{
    console.error(error)
    res.send('문제발생')
  })
});

app.post("/products", (req, res) => {
  const body = req.body;
  const { name, price, seller, imageUrl, description } = body;
  
  models.Product.create({
    name,
    price,
    seller,
    imageUrl,
    description
  }).then( (result) =>{

    console.log('상품생성 결과:', result);
    res.send({result, })
  
  }).catch((err)=>{
  
    console.error(err);
    res.send('문제발생');
  
  });
  
})

app.get("/products/:id",(req,res)=>{
    const params = req.params;
    const {id} = params;
    models.Product.findOne({
      where:{
        id:id,
      }
    })
    .then((result)=>{
      
      console.log('product:',result);
      res.send({
        product:result
      })

    }).catch((err)=>{

      console.error(err);
      res.send('상품조회가 에러 발생');

    })
})

app.listen(port, () => {
  models.sequelize.sync()
  .then(()=>{
    console.log('DB 연결 성공');
  })
  .catch((error)=>{
    console.error(error);
    console.log("DB연결 에러");
    process.exit();
  })
});
