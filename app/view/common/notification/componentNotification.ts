import { Util } from './../../util/util';
import { Component } from './../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentNotification.css'); } catch (e) { };

export class ComponentNotification extends Component {
    currentNotificationName: string;
    nextNotificationName: string;

    constructor(father?: Component, notificationName?: string) {
        super('notification', father);
        this.className = 'ComponentNotification';
        this.goToNotification(notificationName);
    }

    public goToNotification(notificationName?: string) {
        if (notificationName !== undefined &&
            (notificationName.indexOf('Notification') === -1)) {
            notificationName = notificationName + 'Notification';
        }
        // console.log('goToNotification:' + notificationName);
        let cookie = Util.getInstance().getCookie('notification');
        if (this.currentNotificationName === undefined ||
            this.currentNotificationName !== notificationName) {
            this.nextNotificationName = notificationName;
            // console.log('goToNotification2:' + notificationName);
            if (notificationName) {
                this.getJSONPromise(notificationName);
            } else if (cookie !== '') {
                this.goToNotification(cookie);
            } else {
                this.goToNotification('none');
            }
        }
    }

    public refreshNotification() {
        // console.log('refreshNotification:');
        let notification = this.currentNotificationName;
        this.currentNotificationName = undefined;
        this.goToNotification(notification);
    }

    protected updateFailed(data) {
        // console.log('updateFailed:', data);
        this.goToNotification('unknown');
    }

    public renderAfterUpdateJSON() {
        super.renderAfterUpdateJSON();
        this.currentNotificationName = this.nextNotificationName;
        Util.getInstance().clearCookie('notification');
        // console.log('renderAfterUpdateJSON:');
    }
}
ComponentNotification.addConstructor('ComponentNotification', ComponentNotification);
