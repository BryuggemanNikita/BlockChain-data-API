import { Module } from '@nestjs/common';
import { EvmController } from './evm.controller';
import { EvmService } from './evm.service';
import { RpcModule } from '~src/rpc/rpc.module';

@Module({
    imports: [
        RpcModule.forRoot({
            baseUrl: 'https://sei-evm-rpc.publicnode.com',
        }),
    ],
    controllers: [EvmController],
    providers: [EvmService],
})
export class EvmModule {}
