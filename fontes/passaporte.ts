import {
    isValidPassport,
    formatPassport,
    parsePassport,
    generatePassport
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function passaporteValido(_: InterpretadorInterface, passaporte: string): boolean {
    return isValidPassport(passaporte);
}

export function formatarPassaporte(_: InterpretadorInterface, passaporte: string): string {
    return formatPassport(passaporte);
}

export function limparPassaporte(_: InterpretadorInterface, passaporte: string): string {
    return parsePassport(passaporte);
}

export function gerarPassaporte(_: InterpretadorInterface): string {
    return generatePassport();
}
