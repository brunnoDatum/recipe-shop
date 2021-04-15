import { HttpHeaders, HttpParams } from '@angular/common/http';

const headerJSON = {
    'Content-Type': 'application/json',
    // tslint:disable-next-line: object-literal-key-quotes
    'Accept': 'application/json'
};

export const contentHeaders = new HttpHeaders(headerJSON);

export class CustomHttpParams {

    public params: HttpParams;

    constructor() {
        this.params = new HttpParams();
    }

    public setParam(param: string, value: string): void {
        this.params = this.params.set(param, value);
    }

    public getParams(): HttpParams {
        return this.params;
    }
}
