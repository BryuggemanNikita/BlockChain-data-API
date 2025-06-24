import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

class VerboseTitleExceptionApiRsDto {
    @ApiProperty({
        description: 'url ошибки',
        type: 'string',
        example: 'like /v1/cosmos/transaction',
        required: true,
        nullable: false,
    })
    path: string;

    @ApiProperty({
        description: 'Локальный дев код ошибки',
        type: 'string',
        example: '400-LIKE_THIS',
        required: true,
        nullable: false,
    })
    devExceptionCode: string;

    @ApiProperty({
        description: 'Сообщение об ошибке',
        type: 'string',
        example: 'Example - param hash is not valid',
        required: true,
        nullable: false,
    })
    message: string;

    @ApiProperty({
        description: 'Стек вызовов внутри сервера',
        type: 'string',
        example: 'at RpcService.invoke (X:\\fnad\\fsoenfs\\) \n at...',
        required: true,
        nullable: false,
    })
    stack: string;
}

export class ExceptionApiRsDto {
    @ApiProperty({
        description: 'Http статус ошибки',
        type: 'integer',
        example: 400,
        required: true,
        nullable: false,
    })
    statusCode: HttpStatus;

    @ApiProperty({
        description: 'Поле возвращаемых данных',
        type: 'null',
        example: null,
        required: true,
        nullable: true,
    })
    data: null;

    @ApiProperty({
        description: 'Http наименование ошибки',
        type: 'string',
        example: 'Bad Request',
        required: true,
        nullable: false,
    })
    error: string;

    @ApiProperty({
        description: 'Подробности по ошибке',
        type: VerboseTitleExceptionApiRsDto,
        required: true,
        nullable: false,
    })
    _error: VerboseTitleExceptionApiRsDto;
}
