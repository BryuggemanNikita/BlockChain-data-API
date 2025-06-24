import { IsBlockHeightHash } from '../../common/decorators/validate-eth-height-hash.decorator';

export class GetBlockByHeightRqParamDto {
    @IsBlockHeightHash()
    height: string;
}
