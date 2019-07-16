import { Component, OnInit } from '@angular/core';
import { FilesServiceService } from '../../files-service.service';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  constructor(private filesServiceService : FilesServiceService) { }
  private files = [];
  private url = 'http://localhost:3000/upload';
  private uploader: FileUploader;
  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});
    
  }

}
