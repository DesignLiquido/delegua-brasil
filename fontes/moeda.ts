import {
    formatCurrency,
    parseCurrency
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function formatarMoeda(_: InterpretadorInterface, valor: number, opcoes?: { precisao?: number }): string {
    return formatCurrency(valor, { precision: opcoes?.precisao });
}

export function analisarMoeda(_: InterpretadorInterface, moeda: string): number {
    return parseCurrency(moeda);
}
