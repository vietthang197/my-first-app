import { Component } from "@angular/core";

@Component({
    selector: '#app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    private _status: string = '';

    allowDisabled: boolean = false;

    constructor() {
        setTimeout(() => {
            this.allowDisabled = true;
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
}