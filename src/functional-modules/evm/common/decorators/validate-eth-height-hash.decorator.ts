import { registerDecorator, ValidationOptions } from 'class-validator';

export const IsBlockHeightHash = (validationOptions?: ValidationOptions) => {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'IsBlockHeightHash',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return (
                        typeof value === 'string' &&
                        /^0x(0|[1-9a-f][0-9a-f]*)$/i.test(value)
                    );
                },
                defaultMessage() {
                    return 'Ваш хэш номера блока Ethereum не валиден! паттерн реализации - {Строка должна начинаться с 0x, за которым следует либо 0, либо шестнадцатеричное число без ведущих нулей (цифры 1-9, a-f или A-F).}';
                },
            },
        });
    };
};
