import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  const PORT = parseInt(process.env.PORT);
  await app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
  });
}
bootstrap();
