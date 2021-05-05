export class Server {
    private _serverName: string;
    private _type: string;
    private _content: string;


    constructor(serverName: string, type: string, content: string) {
        this._serverName = serverName;
        this._type = type;
        this._content = content;
    }


    get serverName(): string {
        return this._serverName;
    }

    set serverName(value: string) {
        this._serverName = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }
}
