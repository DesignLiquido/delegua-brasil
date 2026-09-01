import {
    isValidCnpj,
    formatCnpj,
    parseCnpj,
    generateCnpj
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function cnpjValido(_: InterpretadorInterface, cnpj: string): boolean {
    return isValidCnpj(cnpj);
}

export function formatarCnpj(_: InterpretadorInterface, cnpj: string, opcoes?: { completar?: boolean; versao?: 1 | 2 }): string {
    return formatCnpj(cnpj, { pad: opcoes?.completar, version: opcoes?.versao });
}

export function limparCnpj(_: InterpretadorInterface, cnpj: string, opcoes?: { versao?: 1 | 2 }): string {
    return parseCnpj(cnpj, { version: opcoes?.versao });
}

export function gerarCnpj(_: InterpretadorInterface): string {
    return generateCnpj();
}
