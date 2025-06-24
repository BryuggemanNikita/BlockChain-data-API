import { ApiProperty } from '@nestjs/swagger';
import { IBlockDataFromEvm } from '../../interfaces/rs-kies/block-data-node-rs.interface';

export class BlockDataFromEvmNodeRs implements IBlockDataFromEvm {
    @ApiProperty({
        description: 'Размер блока в байтах',
        type: 'string',
        example: '0x1f5',
        required: true,
        nullable: false,
    })
    size: string;

    @ApiProperty({
        description: 'Максимальный лимит газа для блока',
        type: 'string',
        example: '0x1c9c380',
        required: true,
        nullable: false,
    })
    gasLimit: string;

    @ApiProperty({
        description: 'Хэш блока в HEX-формате',
        type: 'string',
        example:
            '0x9b2b5e4e3d1a8f7c6b5a9d2e4f7c8a3b1d5e6f2c9a8b7e3d4f1c6a9e2b5d8',
        required: true,
        nullable: false,
    })
    hash: string;

    @ApiProperty({
        description: 'Номер блока в HEX-формате',
        type: 'string',
        example: '0xe73ac',
        required: true,
        nullable: false,
    })
    number: string;

    @ApiProperty({
        description: 'Количество использованного газа в блоке',
        type: 'string',
        example: '0x5208',
        required: true,
        nullable: false,
    })
    gasUsed: string;

    @ApiProperty({
        description: 'Хэш родительского блока в HEX-формате',
        type: 'string',
        example:
            '0x7d3a1c8f6b5e2d4a9c7b8e5f3d2a1c6b9e4f7d2a8c5b3e1d6f9a2c7b8e5',
        required: true,
        nullable: false,
    })
    parentHash: string;

    baseFeePerGas: string;
    difficulty: string;
    extraData: string;
    logsBloom: string;
    miner: string;
    mixHash: string;
    nonce: string;
    receiptsRoot: string;
    sha3Uncles: string;
    stateRoot: string;
    timestamp: string;
    transactions: string[];
    transactionsRoot: string[];
    uncles: string[];
}
