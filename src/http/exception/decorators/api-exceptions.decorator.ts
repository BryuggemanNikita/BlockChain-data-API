import { ExceptionApiRsDto } from '../dto/base-response.exception';
import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

export interface IApiExceptionClass {
    DESCRIPTION: string;
    HTTP_STATUS: number;
}

export const ApiApplyExceptionsResponse = (
    ...exceptions: IApiExceptionClass[]
) => {
    const apiResponseDecorators: (ClassDecorator | MethodDecorator)[] =
        exceptions.map<ClassDecorator | MethodDecorator>((exception) => {
            return ApiResponse({
                description: exception.DESCRIPTION,
                status: exception.HTTP_STATUS,
                type: ExceptionApiRsDto,
            });
        });
    return applyDecorators(...apiResponseDecorators);
};
