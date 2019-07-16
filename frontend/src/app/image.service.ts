import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  uri ='http://localhost:3000';
  constructor(private http: HttpClient) { }

  getImages(){
    return this.http.get(`${this.uri}/images`);
  }

  addFiles(filename){
    const upload={
     
      filename: filename
     
    };
    return this.http.post(`${this.uri}/images`,upload);
  }
}
