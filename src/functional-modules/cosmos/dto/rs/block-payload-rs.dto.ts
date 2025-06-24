import { ApiProperty } from "@nestjs/swagger";

export class CosmosBlockPayloadRsDto {
  @ApiProperty({
    description: 'Высота блока (номер)',
    type: 'number',
    example: 153932148,
    required: true,
    nullable: false,
  })
  height: number;

  @ApiProperty({
    description: 'Время создания блока в ISO-формате',
    type: 'string',
    example: '2025-06-24T14:40:32.700724878Z',
    required: true,
    nullable: false,
  })
  time: string;

  @ApiProperty({
    description: 'Хэш блока',
    type: 'string',
    example: 'B36E3FFA48A33D442281F7DF90F8FB75763D16901C4A08F752AE4AD174A2196C',
    required: true,
    nullable: false,
  })
  hash: string;

  @ApiProperty({
    description: 'Адрес валидатора, предложившего блок',
    type: 'string',
    example: '399548FF09159AF3711DF1EF08CC243C505130B6',
    required: true,
    nullable: false,
  })
  proposerAddress: string;
}