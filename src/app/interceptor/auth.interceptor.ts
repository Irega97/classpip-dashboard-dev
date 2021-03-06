import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = sessionStorage.getItem('ACCESS_TOKEN');

        if (!token) {
            return next.handle(req);
        }

        //SUSTITUIR ESTO POR EL SET ACCESS TOKEN EN LOOPBACK
        let newReq = req.clone({
            headers: req.headers.set('Authorization', token)
        });

        newReq.headers.append('Content-type','application/json');

        return next.handle(newReq);
    }
}