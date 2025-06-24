import { PickType } from '@nestjs/swagger';
import { TransactionDataFromEvmNodeRs } from '../external-rs/transaction-data-node-rs.dto';

export class EvmTransactionPayloadRsDto extends PickType(
    TransactionDataFromEvmNodeRs,
    ['hash', 'to', 'from', 'value', 'input', 'gasPrice'],
) {}
