import { IsEthereumTransactionHash } from '~src/functional-modules/evm/common/decorators/validate-eth-transaction-hash.decorator';

export class EthGetByHashRqDto {
    @IsEthereumTransactionHash()
    hash: string;
}
