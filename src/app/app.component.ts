import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpeedService } from './speed.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'speed-ui';
  filenames: string[] = [];
  startTime=0;
  uploadstartTime=0;
  uploadstopTime=0;
  endTime=0;
  speedKbps:number=0;
  uploadSpeedKbps:number=0;
  speedBps:number =0;
  bitsLoaded:number=0;
  uploadSpeedMbps:string='';
  blob:Blob=new Blob();
  downloadspeedMbps:string ='';
  fileStatus = { status: '', requestType: '', percent: 0 };
  constructor(private speedService:SpeedService){}
  ngOnInit(){
    this.startTime = (new Date()).getTime();
    this.speedService.getDownloadapi().subscribe(event => {
      console.log(event);
      this.downLoadFile(event);
     // this.resportProgress(event);
     let downloadSize = event.byteLength;
      this.endTime = (new Date()).getTime();
      var duration = (this.endTime - this.startTime) / 1000;
      this.bitsLoaded = downloadSize ;
    let kbps = downloadSize/duration;
       this.speedKbps = (kbps/ 1024);
      console.log(this.speedKbps.toFixed(2))
       this.downloadspeedMbps = (this.speedKbps / 1024).toFixed(2);
       console.log(this.downloadspeedMbps)
       this.onUploadFiles(new File([this.blob],"50mb.zip"))
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
 
 
  }

  onUploadFiles(file: File): void {
    const formData = new FormData();
   // for (const file of files) { formData.append('files', file, file.name); }
    formData.append('file', file, file.name);
    this.uploadstartTime = (new Date()).getTime();
    this.speedService.getUploadTest(formData).subscribe(
      data => {
        console.log(data);
    this.uploadstopTime = (new Date()).getTime();
    var duration = (this.uploadstopTime - this.uploadstartTime) / 1000;
    let kbps = this.bitsLoaded/duration;
    this.uploadSpeedKbps = (kbps/ 1024);
    console.log(this.uploadSpeedKbps.toFixed(2))
     this.uploadSpeedMbps = (this.uploadSpeedKbps / 1024).toFixed(2);
       // this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  

  downLoadFile(data: any) {
    console.log('test')
    var uint8Array  = new Uint8Array(data);
var arrayBuffer = uint8Array.buffer;
var blob        = new Blob([arrayBuffer]);
  this.blob = blob;
  console.log('')

  }
}


