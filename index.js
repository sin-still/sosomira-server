const express = require("express");
const cors = require("cors");
const app = express();
const port = "8080";

app.use(express.json());
app.use(cors()); // 브라우저의 cors 이슈를 막기 위해 사용하는 코드.
app.get("/products", (req, res) => {
  const query = req.query;
  console.log("queryString:", query);
  res.send({
    products: [
      {
        id: 1,
        name: "플럼 티세트",
        price: 892000,
        seller: "르쿠루제",
        imageUrl: "img/products/product06.jpg",
      },
      {
        id: 2,
        name: "옐로우로즈 티세트",
        price: 743000,
        seller: "웨지우드",
        imageUrl: "img/products/product17.jpg",
      },
      {
        id: 3,
        name: "골드라인 티세트",
        price: 754000,
        seller: "리에리제",
        imageUrl: "img/products/product11.jpg",
      },
      {
        id: 4,
        name: "카투스",
        price: 344000,
        seller: "르엘리어",
        imageUrl: "img/products/product13.jpg",
      },
      {
        id: 5,
        name: "옐로우우드 체어",
        price: 110000,
        seller: "우드데이",
        imageUrl: "img/products/product02.jpg",
      },
      {
        id: 6,
        name: "잘록거울",
        price: 180000,
        seller: "더부엌",
        imageUrl: "img/products/product03.jpg",
      },
      {
        id: 7,
        name: "글로리 티타임",
        price: 952000,
        seller: "르쿠루제",
        imageUrl: "img/products/product04.jpg",
      },
      {
        id: 8,
        name: "잘록거울",
        price: 180000,
        seller: "더부엌",
        imageUrl: "img/products/product05.jpg",
      },
      {
        id: 9,
        name: "잘록거울",
        price: 180000,
        seller: "더부엌",
        imageUrl: "img/products/product08.jpg",
      },
      {
        id: 10,
        name: "잘록거울",
        price: 180000,
        seller: "더부엌",
        imageUrl: "img/products/product06.jpg",
      },
      {
        id: 11,
        name: "잘록거울",
        price: 180000,
        seller: "더부엌",
        imageUrl: "img/products/product07.jpg",
      },
      {
        id: 12,
        name: "잘록거울",
        price: 180000,
        seller: "더부엌",
        imageUrl: "img/products/product20.jpg",
      },
    ],
  });
});

app.post("/products", (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
  
});

app.get("/products/:id",(req,res)=>{
    const params = req.params;
    const {id} = params;
    res.send(`id는 ${id} 입니다.`)
})

app.listen(port, () => {
  console.log("server on");
});
