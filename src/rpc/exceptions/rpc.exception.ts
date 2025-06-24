import {
    CustomBadRequestException,
    CustomInternalServerException,
} from '~src/http/exception/common/base-exceptions.type';

/** поломался запрос */
export class RpcRequestIsFallException extends CustomInternalServerException {
    static readonly DEV_EXCEPTION_CODE: string = '500-RPC-HELP-ME';
    static readonly DESCRIPTION: string = 'Somthink went wrong on rpc request';

    /**
     * поломался запрос
     * @param context - Место ошибки
     */
    constructor(text: string, context?: string) {
        const errMessage = RpcRequestIsFallException.DESCRIPTION + text;
        super(
            errMessage,
            RpcRequestIsFallException.DEV_EXCEPTION_CODE,
            context,
        );
    }
}

/** Некорректный запрос */
export class RpcBadRequestException extends CustomBadRequestException {
    static readonly DEV_EXCEPTION_CODE: string = '400-SMTH-WW';
    static readonly DESCRIPTION: string = 'Bad request on rpc - ';

    /**
     * Некорректный запрос
     * @param context - Место ошибки
     */
    constructor(text: string, context?: string) {
        const errMessage = RpcBadRequestException.DESCRIPTION + text;

        super(errMessage, RpcBadRequestException.DEV_EXCEPTION_CODE, context);
    }
}
