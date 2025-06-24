import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'src/common-modules/logger/logger.module';
import { EvmModule } from 'src/functional-modules/evm/evm.module';
import { CosmosModule } from '~src/functional-modules/cosmos/cosmos.module';
import { GlobalExceptionFilter } from '~src/http/filter/global.filter';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseWrapperInterceptor } from '~src/http/interceptors/rs-wrapper.interceptor';
import { LoggingRequestMiddleware } from './middleware/logging.middleware';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`,
            isGlobal: true,
        }),
        LoggerModule,
        EvmModule,
        CosmosModule,
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: GlobalExceptionFilter,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: ResponseWrapperInterceptor,
        },
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggingRequestMiddleware).forRoutes('*');
    }
}
