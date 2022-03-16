var express = require('express');
var cors = require('cors');
var app = express();
var port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products",(req,res) => {
  var query = req.query;
  console.log(query);
  res.send({
    "products" : [
        {
            id : 1,
            name : "오리지널 드립커피",
            description : "파스쿠찌 Single Origin Coffee를 추출한이탈리아 정통 드립식 커피",
            tag : "# 신선한 원두",
            imgUrl : "/img/manu/menu_img01.jpg",
            price : 4000
        }, {
            id : 2,
            name : "아메리카노",
            description : "뜨거운 물에 에스프레소를 희석, 부드럽고 깊은 아로마를 느낄 수 있는 커피",
            tag : "# 신선한 원두",
            imgUrl : "/img/manu/menu_img02.jpg",
            price : 4500
        }, {
            id : 3,
            name : "카페라떼",
            description : "에스프레소와 스팀우유를 혼합하여고소함과 부드러움을 느낄 수 있는 커피",
            tag : "# 원두, # 우유",
            imgUrl : "/img/manu/menu_img03.jpg",
            price : 5000
        }
    ]
});
})

app.post("/products",(req,res) => {
  var body = req.body;
  res.send({
    body: body, //body만 써도 가능 (값과 키가 같을때)
  });
})

app.get("/products/:id", (req,res) => {
  var params = req.params;
  var {id} = params;
  res.send(`id는 ${id}임다`)
})

app.listen(port, () => {
  console.log('서버 돌아감')
});