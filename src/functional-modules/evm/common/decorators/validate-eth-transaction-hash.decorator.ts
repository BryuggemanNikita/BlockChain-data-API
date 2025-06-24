import { registerDecorator, ValidationOptions } from 'class-validator';

export const IsEthereumTransactionHash = (
    validationOptions?: ValidationOptions,
) => {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'IsEthereumTransactionHash',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return (
                        typeof value === 'string' &&
                        /^0x[0-9a-f]{64}$/i.test(value)
                    );
                },
                defaultMessage() {
                    return 'Ваш хэш транзакции Ethereum не валиден! паттерн реализации - {0x, за которым следуют 64 шестнадцатеричных символа}';
                },
            },
        });
    };
};
