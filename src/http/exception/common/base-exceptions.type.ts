import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomHttpException extends HttpException {
    static DESCRIPTION: string;
    static DEV_EXCEPTION_CODE: string;
    static HTTP_STATUS: HttpStatus;

    constructor(
        message: string | string[],
        status: HttpStatus,
        private readonly devExceptionCode: string,
        private readonly context: string,
    ) {
        super(message, status);
    }

    getDevExceptionCode(): string {
        return this.devExceptionCode;
    }

    getExceptionContext(): string {
        return this.context;
    }
}

export class CustomInternalServerException extends CustomHttpException {
    static HTTP_STATUS: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

    constructor(
        message: string | string[],
        devExceptionCode: string,
        context: string = 'App',
    ) {
        super(
            message,
            CustomInternalServerException.HTTP_STATUS,
            devExceptionCode,
            context,
        );
    }
}

export class CustomNotFoundException extends CustomHttpException {
    static HTTP_STATUS: HttpStatus = HttpStatus.NOT_FOUND;

    constructor(
        message: string | string[],
        devExceptionCode: string,
        context: string = 'App',
    ) {
        super(
            message,
            CustomNotFoundException.HTTP_STATUS,
            devExceptionCode,
            context,
        );
    }
}

export class CustomBadRequestException extends CustomHttpException {
    static HTTP_STATUS: HttpStatus = HttpStatus.BAD_REQUEST;

    constructor(
        message: string | string[],
        devExceptionCode: string,
        context: string = 'App',
    ) {
        super(
            message,
            CustomBadRequestException.HTTP_STATUS,
            devExceptionCode,
            context,
        );
    }
}
