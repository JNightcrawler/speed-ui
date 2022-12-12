import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment}from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {

  constructor(private httpClient:HttpClient) { }

  public getDownloadapi():Observable<any>{
    console.log('test');
return this.httpClient.get(environment.speedApiDownload,{
  responseType: 'arraybuffer'});
  }
  public getUploadTest(formData: FormData):Observable<any>{
    return this.httpClient.post(environment.speedApiUpload,formData)
  }
}
