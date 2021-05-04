import { Component, EventEmitter, Output, ɵSWITCH_COMPILE_PIPE__POST_R3__ } from "@angular/core";

@Component({
    selector: '#app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    private _status: string = '';

    allowDisabled: boolean = true;

    onclickFunc: string = 'myOnclick';

    serverCreationStatus: boolean = false;

    serverName: string = 'Default ServerName';

    geoLocation: string = '';

    switch:boolean = true;

    condition: boolean = true;

    _color: string = 'yellow';

    stringClass: string = 'fuck';

    dataList: Array<string> = ['template', 'fuck', 'fuck2', 'ssss', 'utoiuw', '99872'];

    constructor() {
        setTimeout(() => {
            this.allowDisabled = false;
        }, 3000);
    }

    public get status() {
        return this._status;
    }

    public set status(status: string) {
        if (status == undefined || status  == null || status.trim() == '')
            throw new Error('status can not be undefine or null');
        this._status = status;
    }

    onCreate(event: any) {
        console.log(event)
        this.serverCreationStatus = true;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
        var seft = this;
        navigator.geolocation.getCurrentPosition((success) => {
            seft.geoLocation = "lat of server: " + success.coords.latitude + ", long of server: " + success.coords.longitude;
            console.log(success.coords.latitude)
            console.log(success.coords.longitude)
            // seft.geoLocation = success;
        }, (err) => {
            
        });
    }

    changeCondition() {
        this.condition = !this.condition;
    }

    public get color() {
        return this._color;
    }

    getDataClass() {
        return ['text-sm', 'bold'];
    }

    getStringClass() {
        return this.stringClass;
    }
}