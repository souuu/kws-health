import { Injectable } from '@angular/core' ;
import { Http, Headers,Response } from '@angular/http';

@Injectable()
export class BusinessService {

  private headers = new Headers({
    'Content-Type': 'application/json'
    });

  constructor(private http:Http) {
  }

  getPatients() {
    return this.http.get("https://immense-temple-80995.herokuapp.com/patients" , {headers: this.headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getResults() {
    return this.http.get("https://immense-temple-80995.herokuapp.com/enregistrements" , {headers: this.headers})
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
  }
  private extractData(res:Response) {
    let body = res.json();
    return body;
  }

  private handleError(error:Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg:string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
