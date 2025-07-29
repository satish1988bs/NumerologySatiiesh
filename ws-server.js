import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 3000 });
console.log('✅ WebSocket server is running on ws://localhost:3000');

server.on('connection', socket => {
    console.log('🔗 Client connected');

    socket.on('message', message => {
        console.log('📨 Received:', message.toString());
        socket.send(`Echo: ${message}`);
    });

    socket.on('close', () => {
        console.log('❌ Client disconnected');
    });
});
