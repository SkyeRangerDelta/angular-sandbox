import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

  public uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>('/api/upload', formData);
  }
}
