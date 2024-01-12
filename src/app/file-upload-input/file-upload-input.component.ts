import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { UploadService } from "../upload-service.service";

@Component({
  selector: 'app-file-upload-input',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './file-upload-input.component.html',
  styleUrl: './file-upload-input.component.scss'
})
export class FileUploadInputComponent {
  file: File | null = null;

  constructor(private uploadService: UploadService) { }

  onFileSelected(event: any) {
    console.log('file selected', event.target.files[0]);
    this.file = event.target.files[0];
  }

  upload() {
    if (this.file) {
      this.uploadService.uploadFile(this.file).subscribe(
        res => {
          alert('Uploaded Successfully.');
        }
      );
    } else {
      alert('Please choose a file.');
    }
  }
}
