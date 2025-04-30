// src/google-drive-upload/google-drive-upload.module.ts

import { Module } from '@nestjs/common';

import { GoogleDriveConfig, GoogleDriveModule } from 'nestjs-googledrive-upload';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [
    GoogleDriveModule.register({

      type: 'service_account',
      project_id: 'ztarving',
      private_key_id: '0faca2e891e0ff4529642a4c92217f569dfa331d',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC1NH1L/JNki0jx\nYvfoIW+F3Ad96UeQjLwnByLgNPbeHqY8MBFY9nxr+MFlBNBiKS6xODYhIwGC3H5y\nZAtouHdQbAH05MuQTGbFmUE36cx6xJl4p95zsj42V6CpYKPP6dCtn3l4ULe0fOb4\nvzeNyJRaC9rKY0tWSkvvtrDcrxuUwOveAExoB6XGi5X2W9eb4TKjUbpVfYripMip\ny0OkumCd06nsV6beBQuyLhrzR7cGFLiaYZuysjdhZtUZJb9PzbOocvtyVidasg6n\nsqNlUUWfKTbcVRxVZrFYBYqMt3ooojBjPZ9Z6kpWUa5G8uaJiIiRQQDGHKUGaw4E\nCVQUlKydAgMBAAECggEAKs1txVuxkz/laINorK/tMHDjYiYO7gGYVh206sIICDq0\nKKZwCpQamsSFJjAHaxBwQ5NUEeq7aiZcRfgEy+U65cfFhIvg28J4SjejtKnoz50N\n5Xa9sJWLZXm4bRnzR+LilIiFgFqMsjkIs/wzCq41ALopIcJnosfk/Qgp6c8BFFdB\nrz2YWJfg0bS04u6ynxQzo6qHnYsrbs+4gRSnxhdo6OgL4nuQdTpeP/oUuA7VW1Qe\nZP+6tOf4aYdMW3okKnEyiJm2a5ACn6qUUKaFCCweh+tJJdLCwhLeNhMudFeExey7\n+OO3ghTwg2GOCiwBwYLSf5N9c7nQLGKTljbJj3A9jwKBgQDo9WylIgALL6VSpyou\nEVomrmDL/i4uqV4QhAciliVCCVZt0zxJEZosBvSiWSbNjqwWfqdEry4YHJuWKXCm\nk9YGHuXrI43uadsTRssVaZMVpvY+q4BwbeNfCvbL5FdBr5fatlS0xp8RFNA19QMO\n/A9gdFhgpOhOuGR2VCtyQGcsmwKBgQDHIKYdjyLCSxGlYzoi9X/mLiwz9/YrLwut\nYILNaLjnxXsH0OpvQbVjtebh5hC3KI2BxLVgG1fIBzT35bxURA1bswnCln7lA07k\nPVP529+t+NjZseDTJjPQwoeL7AmD+zxLYQ9f6IJwXCMpQvIEjr7NRNqVzp1XDc8H\nZb3z+44zJwKBgQC6A04vRUjXpcHSj5xEkKJ1hIPSHzHtHFv5wBKacV1qr14N77+R\ncLa0NRGdmKY9OJD8nUEevOqHYkBx1MEYoa8h0AYyjX9FQc0mRT7f6B8ECP9S50p1\ne6k0OOL7x2ZNEtKkVzan6nkVAJOIog1BJ893ay8ubD76rI27VlYisn4vxQKBgQCt\nAmvx8MQlha2+QbloWF8YsfNL79wdZxHBQMJFEADftxAPGXAm3DNqf8gra4YIbR6N\nqkhgSUF6lPBrllqL6Fim3KbVP4bfGYG5AqPsyiHM+RIICumo619HuUylwJ3/4xBe\n+eSu0shKMXOHTRgT56ZVmMZGNK81zNScu8RPsLe7LwKBgQCtRCWYm2ZRSWOnHkGp\npn/ZR6GtO6fewQpF0XgNCbxbgqkPAYLJeCbOGrD2fgTTi58QOjZ01bPQooZ582PX\nV+AYuzGZ3lT9Ca89TX5crqpHAfKf7gLghlpGHogLqzOVM824iCA6NxbeJwo/UIxq\n5ZQ7AJfhsgEx/Ploj2J/3iNeFQ==\n-----END PRIVATE KEY-----\n',
      client_email: 'ztarving@ztarving.iam.gserviceaccount.com',
      client_id: '103211909582382965430',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/ztarving%40ztarving.iam.gserviceaccount.com',
      universe_domain: 'googleapis.com',
    
    }as GoogleDriveConfig,
    '1eqnGoUAezOSkE_LTmcoxkCsmXmtZy2aS',),
  ],
  controllers:[UploadController],
  providers:[UploadService]

})
export class UploadModule {}
