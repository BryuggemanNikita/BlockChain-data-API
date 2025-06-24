import { Controller, Get, Param } from '@nestjs/common';
import { EvmService } from './evm.service';
import { EEvmBaseRouts } from './common/path/evm.routs';
import { BaseApiOkResponse } from '~src/http/decorators/response.dto';
import { EvmBlockPayloadRsDto } from './dto/rs/block-payload-rs.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { EthGetByHashRqDto } from './dto/rq/get-by-hash-rq.dto';
import { GetBlockByHeightRqParamDto } from './dto/rq/get-block-by-height-rq.dto';
import { EvmTransactionPayloadRsDto } from './dto/rs/transaction-payload-rs.dto';
import { ApiApplyExceptionsResponse } from '~src/http/exception/decorators/api-exceptions.decorator';
import { ElementNotFound } from '~src/http/exception/exceptions/element-away.exception';
import { RpcRequestIsFallException } from '~src/rpc/exceptions/rpc.exception';
import { CustomBadRequestException } from '~src/http/exception/common/base-exceptions.type';

@ApiApplyExceptionsResponse(ElementNotFound, RpcRequestIsFallException, CustomBadRequestException)
@ApiTags(EEvmBaseRouts.API_NAME)
@Controller(EEvmBaseRouts.CONTROLLER_NAME)
export class EvmController {
    constructor(private readonly evmService: EvmService) { }

    @ApiOperation({
        summary: 'Получить информацию о блоке по его номеру',
    })
    @BaseApiOkResponse(EvmBlockPayloadRsDto, 'Информация о блоке по его номеру')
    @ApiParam({
        name: 'height',
        example: '0x915707f',
        required: true,
    })
    @Get(EEvmBaseRouts.GET_BLOCK_BY_HEIGHT)
    getBlockByHeight(@Param() blockHeight: GetBlockByHeightRqParamDto) {
        return this.evmService.getBlockByHeight(blockHeight.height);
    }

    @ApiOperation({
        summary: 'Получить информацию о блоке по его хэшу',
    })
    @BaseApiOkResponse(
        EvmTransactionPayloadRsDto,
        'Информация о транзакции по его хэшу',
    )
    @ApiParam({
        name: 'hash',
        example:
            '0xfaab8362a0fd3ad864756041a077c1f5a221bdbe4a9c11a98dcc0df57e68ff23',
        required: true,
    })
    @Get(EEvmBaseRouts.GET_BLOCK_BY_HASH)
    getTransactionByHash(@Param() blockHash: EthGetByHashRqDto) {
        return this.evmService.getTransactionByHash(blockHash.hash);
    }
}
