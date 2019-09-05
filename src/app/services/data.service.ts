import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatatService {
  private apiUrl = environment.apiUrl;
  private fetchUri = '/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

  constructor(private http: HttpClient) { }

  public getDataList() {
    return this.http.get(this.apiUrl + this.fetchUri);
  }
}
