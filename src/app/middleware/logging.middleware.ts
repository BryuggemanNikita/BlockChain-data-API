import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingRequestMiddleware implements NestMiddleware {
    constructor(private readonly logger: Logger) {}

    use(req: Request, res: Response, next: NextFunction) {
        const { originalUrl, method } = req;
        const startTime = new Date();

        res.on('close', () => {
            const { statusCode } = res;
            const endTime = new Date();
            const processTime =
                endTime.getMilliseconds() - startTime.getMilliseconds();

            this.logger.log(
                `${method} - ${originalUrl} code: ${statusCode}, ${processTime}ms`,
            );
        });

        next();
    }
}
