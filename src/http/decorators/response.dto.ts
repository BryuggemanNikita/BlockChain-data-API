import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { HttpStatus, Type } from '@nestjs/common';

/**
 * Декоратор.
 * Оборачивает классический ApiResponse в
 * структуру ответа:
 * {
 *     data: T
 * }
 * @param rsDto - Предполагаемый dto
 * @param description - Описание возвращаемого поля
 * @returns Преобразованный ApiResponse
 */
export const BaseApiOkResponse = (
    rsDto: Type | Type[],
    description: string,
) => {
    let type: Type;

    if (Array.isArray(rsDto)) {
        type = rsDto[0] as Type;
    } else {
        type = rsDto;
    }

    class RsWrapperDto {
        static name = `RsWrapperDto<${type.name}>`;

        @ApiProperty({
            description: 'Поле ответа',
            type: Array.isArray(rsDto) ? [type] : type,
            required: true,
            nullable: false,
        })
        data: Type;
    }

    return ApiResponse({
        description,
        type: RsWrapperDto,
        status: HttpStatus.OK,
    });
};
