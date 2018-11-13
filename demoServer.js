// 导入WebSocket模块:
const WebSocket = require('ws')

// 引用Server类:
const WebSocketServer = WebSocket.Server

// 实例化:
const wss = new WebSocketServer({
    port: 3000
})
//连接响应
wss.on('connection', function (ws) {
    ws.on('message', function (message) {   //接受数据
        console.log(`接受到客服端的数据: ${message}`);
        ws.send(`服务端发送数据: ${message}`, (err) => {  //发送数据
            if (err) {
                console.log(`发送数据错误: ${err}`);
            }
        });
    })
});