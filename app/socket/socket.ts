import * as io from 'socket.io-client';

export class Socket{
    private static instance: Socket;
    private socket;

    constructor() {
        this.socket = io();
    }

    public static getInstance(): Socket {
        if (!Socket.instance) {
            Socket.instance = new Socket();
        }
        return Socket.instance;
    }

    getSocket(){
        return this.socket;
    }
}