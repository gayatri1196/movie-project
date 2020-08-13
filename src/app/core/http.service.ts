import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    get(url: string, id?: any): Observable<any> {

        const reqUrl = id ? `${url}${id}` : url;
        return this.http.get(reqUrl);
    }

    post(url: string, body: any, isContentTypeForm?: boolean): Observable<any> {

        return this.http.post(url, body);
    }

    put(url: string, body: any) {

        return this.http.put(url, body);
    }

    delete(url: string, id?: any) {

        if (id) {
            return this.http.delete(`${url}${id}`);
        }
        return this.http.delete(`${url}`);
    }
}
