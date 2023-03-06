import http from 'http'

import { URL } from 'url'

//const qs = require('URLSearchParams')
const serve = http.createServer((req, res) => {
    // 
    console.log(req.path);
    const url = new URL('http://127.0.0.1/user?name=za');
    // console.log(req.method);
    // console.log(req.headers);

    //console.log(req.url.pathname); //url.parse负责解析出请求地址得各项内容
    //const { pathname, query } = url.parse(req.url)

    //const { ab } = qs.parse(query)
    console.log(url.search);
    res.end('hello');
});

serve.listen(8080, '0.0.0.0', () => {
    console.log('服务器启动成功')
})