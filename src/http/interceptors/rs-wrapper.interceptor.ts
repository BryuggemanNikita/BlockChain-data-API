import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { map, Observable } from 'rxjs';

interface IRsDataWrap {
    data: Response<any, any>;
}

@Injectable()
export class ResponseWrapperInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<IRsDataWrap> {
        return next.handle().pipe(
            map((res: Response) => {
                return { data: res };
            }),
        );
    }
}
