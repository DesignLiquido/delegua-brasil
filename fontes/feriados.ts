import {
    getHolidays,
    isHoliday,
    GetHolidaysOptions,
    IsHolidayOptions
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';
import { Feriado } from './interfaces';

export { Feriado };

export function obterFeriados(_: InterpretadorInterface, ano: number, codigoEstado?: string): Feriado[] {
    const feriados = codigoEstado
        ? getHolidays({ year: ano, stateCode: codigoEstado as GetHolidaysOptions['stateCode'] })
        : getHolidays(ano);
    return feriados.map(feriado => ({
        nome: feriado.name,
        data: feriado.date
    }));
}

export function ehFeriado(_: InterpretadorInterface, data: Date, codigoEstado?: string): boolean {
    return isHoliday({ targetDate: data, stateCode: codigoEstado as IsHolidayOptions['stateCode'] });
}
