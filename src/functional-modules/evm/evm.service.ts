import { Injectable } from '@nestjs/common';
import { RpcService } from '~src/rpc/rpc.service';
import { IBlockDataFromEvm } from './interfaces/rs-kies/block-data-node-rs.interface';
import { ElementNotFound } from '~src/http/exception/exceptions/element-away.exception';
import { ITransactionDataFromEvm } from './interfaces/rs-kies/transaction-data-node-rs.interface';
import { EvmTransactionPayloadRsDto } from './dto/rs/transaction-payload-rs.dto';
import { EvmBlockPayloadRsDto } from './dto/rs/block-payload-rs.dto';

@Injectable()
export class EvmService {
    constructor(private readonly rpcClient: RpcService) {}

    async getBlockByHeight(blockHeight: string): Promise<EvmBlockPayloadRsDto> {
        const blockFromRs =
            await this.rpcClient.invokeByMethod<IBlockDataFromEvm>(
                'eth_getBlockByNumber',
                [blockHeight, null],
            );

        if (!blockFromRs) {
            throw new ElementNotFound(
                'Eth block',
                'height',
                blockHeight,
                EvmService.name,
            );
        }

        const { hash, parentHash, gasLimit, gasUsed, size, number } =
            blockFromRs;

        return {
            hash,
            parentHash,
            gasLimit,
            gasUsed,
            size,
            number,
        };
    }

    async getTransactionByHash(
        transactionHash: string,
    ): Promise<EvmTransactionPayloadRsDto> {
        const transactionFromRs =
            await this.rpcClient.invokeByMethod<ITransactionDataFromEvm>(
                'eth_getTransactionByHash',
                [transactionHash],
            );

        if (!transactionFromRs) {
            throw new ElementNotFound(
                'Eth transaction',
                'hash',
                transactionHash,
                EvmService.name,
            );
        }

        const { from, gasPrice, hash, input, to, value } = transactionFromRs;

        return {
            from,
            gasPrice,
            hash,
            input,
            to,
            value,
        };
    }
}
