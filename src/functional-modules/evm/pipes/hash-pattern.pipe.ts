import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseHexPipe implements PipeTransform {
    transform(value: string): string {
        const hexValue = parseInt(value).toString(16);
        return `0x${hexValue}`;
    }
}
