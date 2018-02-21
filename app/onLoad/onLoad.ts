import { UniqueSocket } from './../socket/uniqueSocket';
import { App } from './../app';

export class OnLoad {
    constructor() {
        let uniqueSocket = UniqueSocket.getInstance();
        let socket = uniqueSocket.getBasicSocket();
        socket.setIdentification({ type: 'app' });
        let app;
        socket.on('getIdentification', (key) => {
            socket.setKey(key);
            socket.emit('identification', socket.getIdentification());
            if (app == undefined) {
                app = new App();
            }
        });
        socket.on('reconnect_attempt', () => {
            console.log('Reconnect Attempt');
            if (app == undefined) {
                app = new App();
            }
        });
    }
}