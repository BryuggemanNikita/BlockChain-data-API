import {
    ExceptionFilter,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Catch,
    Logger,
} from '@nestjs/common';
import { CustomHttpException } from '~src/http/exception/common/base-exceptions.type';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    constructor(
        private readonly httpAdapterHost: HttpAdapterHost,
        private readonly logger: Logger,
    ) {}

    public catch(exception, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        const statusCode =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const path = httpAdapter.getRequestUrl(ctx.getRequest());

        let context: string = 'app';
        let devExceptionCode: string = `${statusCode}_RIP`;

        if (exception instanceof CustomHttpException) {
            context = exception.getExceptionContext();
            devExceptionCode = exception.getDevExceptionCode();
        }

        const stack = exception['stack'];
        const exceptionResponse = { ...exception['response'] };
        let { message, error } = exceptionResponse;
        message = !message ? exception['message'] : message;
        error = !error ? exception['name'] : error;

        const responseBody = {
            statusCode,
            data: null,
            error,
            _error: {
                path,
                devExceptionCode,
                message,
                stack,
            },
        };

        this.logger.error(
            `status: ${statusCode}, path: ${path}, error: ${error}`,
            context,
            stack,
        );

        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }
}
