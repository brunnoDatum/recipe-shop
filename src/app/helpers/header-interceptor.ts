import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const customRequest = httpRequest.clone({
            headers: httpRequest.headers.set('x-rapidapi-key', environment.apiKey)
                .set('x-rapidapi-host', environment.nutritionApiHost)
                .set('useQueryString', 'true')
        });

        return next.handle(customRequest);
    }

}
