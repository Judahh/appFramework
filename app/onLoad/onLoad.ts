import { Socket } from './../socket/socket';
import { App } from './../app';

export class OnLoad {
    constructor() {
        let socket = Socket.getInstance();
        let app;
        socket.on('getIdentification', (key) => {
            socket.setKey(key);
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