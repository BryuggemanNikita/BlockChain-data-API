import { Logger, Module } from '@nestjs/common';
import LoggerProvider from './provider/logger.provider';

@Module({
    providers: [LoggerProvider],
    exports: [Logger],
})
export class LoggerModule {}
