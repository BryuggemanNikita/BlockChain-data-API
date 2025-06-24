import { Controller, Get, Param } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { ECosmosBaseRouts } from './common/path/cosmos.routs';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ApiApplyExceptionsResponse } from '~src/http/exception/decorators/api-exceptions.decorator';
import { ElementNotFound } from '~src/http/exception/exceptions/element-away.exception';
import { RpcRequestIsFallException } from '~src/rpc/exceptions/rpc.exception';
import { BaseApiOkResponse } from '~src/http/decorators/response.dto';
import { CosmosBlockPayloadRsDto } from './dto/rs/block-payload-rs.dto';
import { CustomBadRequestException } from '~src/http/exception/common/base-exceptions.type';

@ApiApplyExceptionsResponse(ElementNotFound, RpcRequestIsFallException, CustomBadRequestException)
@ApiTags(ECosmosBaseRouts.API_NAME)
@Controller(ECosmosBaseRouts.CONTROLLER_NAME)
export class CosmosController {
    constructor(private readonly cosmosService: CosmosService) { }

    @ApiOperation({
        summary: 'Получить информацию о блоке по его номеру',
    })
    @ApiParam({
        name: 'height',
        example: '153932148',
        required: true,
    })
    @BaseApiOkResponse(CosmosBlockPayloadRsDto, 'Данные о блоке по его номеру')
    @Get(ECosmosBaseRouts.GET_BLOCK_BY_HEIGHT)
    getByHeight(@Param() blockHeight: string) {
        return this.cosmosService.getByHeight(blockHeight);
    }

    @ApiOperation({
        summary: 'Получить информацию о блоке по его хэшу',
    })
    @ApiParam({
        name: 'hash',
        example: '',
        required: true,
    })
    @Get(ECosmosBaseRouts.GET_TRANSACTION_BY_HASH)
    getByHash(@Param('hash') transactionHash: string) {
        return this.cosmosService.getTransactionByHash(transactionHash);
    }
}
