import { TypeOrmModule } from "@nestjs/typeorm";

// app.module.ts or typeorm.config.ts
TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST || 'db',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'gxrn4842',
    database: process.env.DB_NAME || 'zTarving',
    autoLoadEntities: true,
    synchronize: true, // disable in production
  })
  