// src/google-drive-upload/google-drive-upload.controller.ts

import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const uploadResponse = await this.uploadService.uploadImage(file)
    return {
      message: 'File uploaded successfully',
      filePath: uploadResponse
    };
  }
}
