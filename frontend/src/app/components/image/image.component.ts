import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../../image.service';
import { Uploads } from '../../Uploads.files.model';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
images:Uploads[];
createForm: FormGroup;
  constructor(private imageService:ImageService,private router:Router,private fb:FormBuilder) { 
   
  }

  ngOnInit() {
    //this.getImageData();
   

  }
  getImageData(){
    this.imageService
    .getImages()
    .subscribe((data:Uploads[])=>{
      this.images=data;
     // console.log(data);
      console.log("Data Submitted Sucessfully!!!");
     
    });
  }

  addImagesData(filename){
    this.imageService.addFiles(filename).subscribe(()=>{
     this.router.navigate(['/list']);
    });
  }
}
