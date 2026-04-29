import {
    isValidPhone,
    formatPhone,
    parsePhone,
    isValidMobilePhone,
    isValidLandlinePhone,
    generatePhone
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function telefoneValido(_: InterpretadorInterface, telefone: string): boolean {
    return isValidPhone(telefone);
}

export function formatarTelefone(_: InterpretadorInterface, telefone: string, opcoes?: { mascara?: string }): string {
    return formatPhone(telefone, { mask: opcoes?.mascara });
}

export function limparTelefone(_: InterpretadorInterface, telefone: string): string {
    return parsePhone(telefone);
}

export function celularValido(_: InterpretadorInterface, telefone: string): boolean {
    return isValidMobilePhone(telefone);
}

export function telefoneFixoValido(_: InterpretadorInterface, telefone: string): boolean {
    return isValidLandlinePhone(telefone);
}

export function gerarTelefone(_: InterpretadorInterface, tipo?: 'celular' | 'fixo'): string {
    const tipoIngles = tipo === 'celular' ? 'mobile' : tipo === 'fixo' ? 'landline' : undefined;
    return generatePhone(tipoIngles);
}
