import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  /** GET single response from the server */
  get<T>(url: string): Observable<any> {
    return this.http.get(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>())
      );
  }

  /** GET list response from the server */
  getList<T>(url: string): Observable<any> {
    return this.http.get(url, this.httpOptions)
      .pipe(
        // tap(_ => console.log('fetched')),
        catchError(this.handleError<T>())
      );
  }

  /** POST the server */
  post<T>(url: string, data: any): Observable<any> {
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>())
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>() {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      
      // Let the app keep running by returning an empty result.
      return throwError(error);
    };
  }
}
