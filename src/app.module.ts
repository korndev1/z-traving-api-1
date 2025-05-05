import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { RecipeService } from './recipe/recipe.service';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeModule } from './recipe/recipe.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UploadModule,
    AuthModule,
    PrismaModule,
    UserModule,
    RecipeModule,
    IngredientsModule,
  ],
  controllers: [UserController, RecipeController],
  providers: [RecipeService],
})
export class AppModule {}
