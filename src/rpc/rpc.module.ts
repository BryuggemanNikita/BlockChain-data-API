import { DynamicModule, Module, Provider } from '@nestjs/common';
import { IRpcConfig } from './interfaces/rpc-config.interface';
import RPC_CONFIG_PROVIDER from '~src/rpc/provider/rpc-config.provider';
import { HttpModule } from '@nestjs/axios';
import { RpcService } from './rpc.service';

@Module({})
export class RpcModule {
    static forRoot(rpcConfig: IRpcConfig): DynamicModule {
        const RpcConfigProvider: Provider = {
            provide: RPC_CONFIG_PROVIDER,
            useValue: rpcConfig,
        };

        return {
            module: RpcModule,
            imports: [HttpModule],
            providers: [RpcConfigProvider, RpcService],
            exports: [RpcService],
        };
    }
}
