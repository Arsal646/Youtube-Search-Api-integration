import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeApiServiceService } from '../youtube-api-service.service';

@Component({
  selector: 'app-youtube-home',
  templateUrl: './youtube-home.component.html',
  styleUrls: ['./youtube-home.component.scss']
})
export class YoutubeHomeComponent implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private apiService: YoutubeApiServiceService) { }

  videodata: any = {}
  dataload: boolean = true
  spinner: boolean = false
  ngOnInit(): void {
    this.getData('Aristostar')

  }
  getData(searchQuery: any) {
    this.spinner = true
    console.log(searchQuery)
    this.apiService.getYoutubeSearchData(searchQuery).subscribe(res => {
      console.log(res)
      this.videodata = res
      this.spinner = false
    })
    setTimeout(() => {
      this.dataload = false
    }, 4000);

  }
  getVideo(id: string): SafeResourceUrl {
    if (id != '') {
      const url = "https://www.youtube.com/embed/" + id

      return this.sanitizer.bypassSecurityTrustResourceUrl(url)

    } else {
      return ''
    }

  }




}
