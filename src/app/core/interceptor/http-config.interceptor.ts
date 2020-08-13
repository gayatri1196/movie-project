import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = this.getModifiedRequest(req);
        return next.handle(modifiedReq).pipe(
            tap(
                (event) => {
                },
                ((error: HttpErrorResponse) => {
                })
            )
        );
    }

    getModifiedRequest(req: HttpRequest<any>): HttpRequest<any> {
        let modifiedReq;
        modifiedReq = req.clone({
            params: req.params.append('api_key', environment.API_KEY)
        });

        return modifiedReq;
    }
}
