import { CustomNotFoundException } from '~src/http/exception/common/base-exceptions.type';

/** Элемента с данным параметром не существует */
export class ElementNotFound extends CustomNotFoundException {
    static readonly DEV_EXCEPTION_CODE: string = '404-EL-NNN-FOUND';
    static readonly DESCRIPTION: string =
        '{element} with {param} ({value}) was not found';

    /**
     * Элемента с данным параметром не существует
     * @param entityName - Наименование сущности
     * @param emptyParam - искомый параметр
     * @param value - искомое значение
     * @param context - контекст выполнения
     */
    constructor(
        entityName: string,
        emptyParam: string,
        value: string,
        context?: string,
    ) {
        const exceptionText = `${entityName} with ${emptyParam} (${value}) was not found`;
        super(exceptionText, ElementNotFound.DEV_EXCEPTION_CODE, context);
    }
}
