import {
    isValidCnh,
    formatCnh,
    parseCnh,
    generateCnh
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function cnhValida(_: InterpretadorInterface, cnh: string): boolean {
    return isValidCnh(cnh);
}

export function formatarCnh(_: InterpretadorInterface, cnh: string, opcoes?: { completar?: boolean }): string {
    return formatCnh(cnh, { pad: opcoes?.completar });
}

export function limparCnh(_: InterpretadorInterface, cnh: string): string {
    return parseCnh(cnh);
}

export function gerarCnh(_: InterpretadorInterface): string {
    return generateCnh();
}
