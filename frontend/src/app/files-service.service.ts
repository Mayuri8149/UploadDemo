import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilesServiceService {

  constructor(private http: HttpClient) { }
  downloadPDF(filename, filetype): any {
    return this.http.get('http://127.0.0.1:3000/file/' + filename,
   { responseType: 'blob' as 'json' });
  }

  showFileNames() {
    return this.http.get('http://localhost:3000/file');
  }
}
