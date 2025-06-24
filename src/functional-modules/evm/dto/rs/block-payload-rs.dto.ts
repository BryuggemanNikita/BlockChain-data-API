import { PickType } from '@nestjs/swagger';
import { BlockDataFromEvmNodeRs } from '../external-rs/block-data-node-rs.dto';

export class EvmBlockPayloadRsDto extends PickType(BlockDataFromEvmNodeRs, [
    'number',
    'hash',
    'parentHash',
    'gasLimit',
    'gasUsed',
    'size',
]) {}
