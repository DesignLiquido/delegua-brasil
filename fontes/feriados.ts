import {
    getHolidays,
    isHoliday
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';
import { Feriado } from './interfaces';

export { Feriado };

export function obterFeriados(_: InterpretadorInterface, ano: number, codigoEstado?: string): Feriado[] {
    const feriados = getHolidays(codigoEstado ? { year: ano, stateCode: codigoEstado } : ano);
    return feriados.map(feriado => ({
        nome: feriado.name,
        data: feriado.date
    }));
}

export function ehFeriado(_: InterpretadorInterface, data: Date, codigoEstado?: string): boolean {
    return isHoliday({ targetDate: data, stateCode: codigoEstado });
}
