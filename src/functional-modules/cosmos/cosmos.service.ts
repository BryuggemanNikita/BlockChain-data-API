import { Injectable } from '@nestjs/common';
import { RpcService } from '~src/rpc/rpc.service';
import { ElementNotFound } from '~src/http/exception/exceptions/element-away.exception';
import { IBlockDataFromCosmos } from './interfaces/rs-kies/block-data-node-rs.interface';
import { CosmosBlockPayloadRsDto } from './dto/rs/block-payload-rs.dto';

@Injectable()
export class CosmosService {
    constructor(private readonly rpcClient: RpcService) { }

    async getByHeight(blockHeight: string) {
        const blockFromRs = await this.rpcClient.getByPath<IBlockDataFromCosmos>(
            '/block',
            {
                height: blockHeight,
            },
        )

        if (!blockFromRs || blockFromRs.message) {
            throw new ElementNotFound(
                'Cosmos block',
                'height',
                blockHeight,
                CosmosService.name,
            );
        }

        return this.mapBlockResponseToDto(blockFromRs)
    }

    private mapBlockResponseToDto(response: IBlockDataFromCosmos): CosmosBlockPayloadRsDto {
        return {
            height: Number(response.block.header.height),
            time: response.block.header.time,
            hash: response.block_id.hash,
            proposerAddress: response.block.header.proposer_address,
        };
    }

    async getTransactionByHash(
        transactionHash: string,
    ) {
        const transactionFromRs = await this.rpcClient.getByPath(
            '/tx',
            {
                hash: transactionHash,
            },
        )

        if (!transactionFromRs || transactionFromRs.message) {
            throw new ElementNotFound(
                'Cosmos transaction',
                'hash',
                transactionHash,
                CosmosService.name,
            );
        }

        console.log(transactionFromRs);

        const { hash, height, time, gasUsed, gasWanted, fee, sender } = transactionFromRs;

        return {
            hash, height, time, gasUsed, gasWanted, fee, sender
        };
    }
}

