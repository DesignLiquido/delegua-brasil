import {
    getStates,
    getCities
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';
import { Estado } from './interfaces';

export { Estado };

export function obterEstados(_: InterpretadorInterface): Estado[] {
    return getStates().map(estado => ({
        codigo: estado.code,
        nome: estado.name
    }));
}

export function obterCidades(_: InterpretadorInterface, codigoEstado?: string): string[] {
    return getCities(codigoEstado as Parameters<typeof getCities>[0]);
}
