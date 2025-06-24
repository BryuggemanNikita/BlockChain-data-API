import { Module } from '@nestjs/common';
import { RpcModule } from '~src/rpc/rpc.module';
import { CosmosController } from './cosmos.controller';
import { CosmosService } from './cosmos.service';

@Module({
    imports: [RpcModule.forRoot({ baseUrl: 'https://sei-m.rpc.n0ok.net:443' })],
    providers: [CosmosService],
    controllers: [CosmosController],
})
export class CosmosModule {}
