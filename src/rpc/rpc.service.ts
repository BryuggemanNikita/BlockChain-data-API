import { Inject, Injectable } from '@nestjs/common';
import RPC_CONFIG_PROVIDER from '~src/rpc/provider/rpc-config.provider';
import { IRpcConfig } from './interfaces/rpc-config.interface';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { RpcRequestIsFallException } from './exceptions/rpc.exception';

@Injectable()
export class RpcService {
    constructor(
        @Inject(RPC_CONFIG_PROVIDER)
        private readonly rpcConfig: IRpcConfig,
        private readonly httpClient: HttpService,
    ) {}

    async invokeByMethod<KIn = any>(
        method: string,
        params: (string | boolean)[],
    ): Promise<KIn> {
        try {
            const response = await firstValueFrom(
                this.httpClient.post(this.rpcConfig.baseUrl, {
                    jsonrpc: '2.0',
                    id: 1,
                    method,
                    params,
                }),
            );
            console.log(response.data);
            
            return response.data.result;
        } catch (error) {
            throw new RpcRequestIsFallException(error.message, RpcService.name);
        }
    }

    async getByPath<KIn = any>(
        path: string,
        params: Record<string, any>,
    ): Promise<KIn> {
        try {
            const response = await firstValueFrom(
                this.httpClient.get(this.rpcConfig.baseUrl + path, {
                    params,
                }),
            );
            console.log(response);
            
            return response.data;
        } catch (error) {
            throw new RpcRequestIsFallException(error.message, RpcService.name);
        }
    }
}
