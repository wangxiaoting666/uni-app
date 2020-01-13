const http = require("http");
const data = require("../data/json");
const data2 = require("../data/json1");
const data3 = require("../data/json3");
const list = require("../data/list");

const card = require("../data/card");
const goods = require("../data/goods");

const server = http.createServer((req, res) => {
	//解决跨域问题
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.writeHead(200, {
    'Content-Type': 'application/json'
	});
	if(req.url === '/'){
		res.end(JSON.stringify(data.data))
	}
	if(req.url === '/data'){
		res.end(JSON.stringify(data2.data))
	}
	
	if(req.url === '/data3'){
		res.end(JSON.stringify(data3.data))
	}
	if(req.url === '/list'){
		res.end(JSON.stringify(list.data))
	}
	
	if(req.url === '/card'){
		res.end(JSON.stringify(card.data))
	}
	if(req.url === '/goods'){
		res.end(JSON.stringify(goods.data))
	}
});

server.listen(3000, () => {
	console.log("server is running!")
})