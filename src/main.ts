import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const PORT = process.env.PORT ?? 3000;

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        }),
    );

    app.setGlobalPrefix(process.env.BASE_PREFIX ?? 'api');

    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: process.env.DEFAULT_VERSION ?? '1',
    });

    const config = new DocumentBuilder()
        .setTitle('API by owle')
        .setDescription('Промежуточное api по взаимодействию с evm и cosmos')
        .setVersion('1.0.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    const appLogger = app.get(Logger);

    await app.listen(PORT, () => {
        appLogger.log(`Service is listen on http://127.0.0.1:${PORT}`);
    });
}
bootstrap();
