import {
    isValidPis,
    formatPis,
    parsePis,
    generatePis
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function pisValido(_: InterpretadorInterface, pis: string): boolean {
    return isValidPis(pis);
}

export function formatarPis(_: InterpretadorInterface, pis: string, opcoes?: { completar?: boolean }): string {
    return formatPis(pis, { pad: opcoes?.completar });
}

export function limparPis(_: InterpretadorInterface, pis: string): string {
    return parsePis(pis);
}

export function gerarPis(_: InterpretadorInterface): string {
    return generatePis();
}
