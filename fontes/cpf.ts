import {
    isValidCpf,
    formatCpf,
    parseCpf,
    generateCpf
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function cpfValido(_: InterpretadorInterface, cpf: string): boolean {
    return isValidCpf(cpf);
}

export function formatarCpf(_: InterpretadorInterface, cpf: string, opcoes?: { completar?: boolean }): string {
    return formatCpf(cpf, { pad: opcoes?.completar });
}

export function limparCpf(_: InterpretadorInterface, cpf: string): string {
    return parseCpf(cpf);
}

export function gerarCpf(_: InterpretadorInterface): string {
    return generateCpf();
}
