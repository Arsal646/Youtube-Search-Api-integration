import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiServiceService {

  BASE_URL = ''
  constructor(private http: HttpClient) {

    this.BASE_URL = environment.serverUrl;

  }
  getYoutubeSearchData(searchQuery: any) {
    const param = new HttpParams()
      .set('q', searchQuery)
      .set('key', 'AIzaSyDrsU4lxdSRWmO053F7KinyzysDAwAMf4U')
      .set('part', 'snippet')
      .set('type', 'video')
      .set('maxResults', '10')

    return this.http.get(this.BASE_URL, { params: param })


  }
}
