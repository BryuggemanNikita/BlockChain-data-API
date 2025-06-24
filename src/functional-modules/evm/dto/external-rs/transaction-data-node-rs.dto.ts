import { ITransactionDataFromEvm } from '../../interfaces/rs-kies/transaction-data-node-rs.interface';
import { ApiProperty } from '@nestjs/swagger';

export class TransactionDataFromEvmNodeRs implements ITransactionDataFromEvm {
    @ApiProperty({
        description: 'Хэш блока, содержащего транзакцию',
        type: 'string',
        example:
            '0xd3ca9f0659473d93a00dc2076c2c9e8d7805243f3f8b7a6d847f32b03806e5f4',
        required: true,
        nullable: false,
    })
    blockHash: string;

    @ApiProperty({
        description: 'Номер блока, содержащего транзакцию (hex)',
        type: 'string',
        example: '0xe73ac',
        required: true,
        nullable: false,
    })
    blockNumber: string;

    @ApiProperty({
        description: 'Адрес отправителя транзакции',
        type: 'string',
        example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        required: true,
        nullable: false,
    })
    from: string;

    @ApiProperty({
        description: 'Газ, выделенный для выполнения транзакции (hex)',
        type: 'string',
        example: '0x5208',
        required: true,
        nullable: false,
    })
    gas: string;

    @ApiProperty({
        description: 'Цена газа в wei (hex)',
        type: 'string',
        example: '0x12a05f2000',
        required: true,
        nullable: false,
    })
    gasPrice: string;

    @ApiProperty({
        description: 'Хэш транзакции',
        type: 'string',
        example:
            '0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b',
        required: true,
        nullable: false,
    })
    hash: string;

    @ApiProperty({
        description: 'Данные, переданные с транзакцией (hex)',
        type: 'string',
        example: '0x',
        required: true,
        nullable: false,
    })
    input: string;

    @ApiProperty({
        description: 'Номер транзакции в аккаунте отправителя (hex)',
        type: 'string',
        example: '0x15',
        required: true,
        nullable: false,
    })
    nonce: string;

    @ApiProperty({
        description: 'Адрес получателя (null для создания контракта)',
        type: 'string',
        example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        required: false,
        nullable: true,
    })
    to: string | null;

    @ApiProperty({
        description: 'Позиция транзакции в блоке (hex)',
        type: 'string',
        example: '0x1',
        required: true,
        nullable: false,
    })
    transactionIndex: string;

    @ApiProperty({
        description: 'Передаваемая сумма в wei (hex)',
        type: 'string',
        example: '0x9184e72a000',
        required: true,
        nullable: false,
    })
    value: string;

    @ApiProperty({
        description: 'Тип транзакции (EIP-2718)',
        type: 'string',
        example: '0x0',
        required: true,
        nullable: false,
    })
    type: string;

    @ApiProperty({
        description: 'ID цепи (chain ID) для EIP-155',
        type: 'string',
        example: '0x1',
        required: true,
        nullable: false,
    })
    v: string;

    @ApiProperty({
        description: 'ECDSA подпись r-параметр',
        type: 'string',
        example:
            '0x926f26f1c109f8c7a8b944d8aac4b5b73555a0a3f8a7e7e9e8b5f1a0d9c8b7a',
        required: true,
        nullable: false,
    })
    r: string;

    @ApiProperty({
        description: 'ECDSA подпись s-параметр',
        type: 'string',
        example:
            '0x5f1a0d9c8b7a926f26f1c109f8c7a8b944d8aac4b5b73555a0a3f8a7e7e9e8b',
        required: true,
        nullable: false,
    })
    s: string;

    // Поля для EIP-1559 транзакций
    // @ApiProperty({
    //     description: 'Максимальная цена газа (EIP-1559) (hex)',
    //     type: 'string',
    //     example: '0x12a05f2000',
    //     required: false,
    //     nullable: true
    // })
    // maxFeePerGas?: string;

    // @ApiProperty({
    //     description: 'Максимальный приоритетный fee газа (EIP-1559) (hex)',
    //     type: 'string',
    //     example: '0x12a05f200',
    //     required: false,
    //     nullable: true
    // })
    // maxPriorityFeePerGas?: string;
}
