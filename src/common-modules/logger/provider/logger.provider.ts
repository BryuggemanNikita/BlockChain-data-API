import { ConsoleLogger, Logger, Provider } from '@nestjs/common';

export default {
    provide: Logger,
    useClass: ConsoleLogger,
} as Provider;
