import { Socket } from './../socket/socket';
import { App } from './../app';

export class OnLoad {
    constructor() {
        let socket = Socket.getInstance().getSocket();
        let app;
        socket.on('getIdentification', () => {
            socket.emit('identification', { type: 'app' });
            if (app == undefined) {
                app = new App();
            }
        });
        socket.on('reconnect_attempt', () => {
            console.log('reconnect_attempt');
            if (app == undefined) {
                app = new App();
            }
        });
    }
}