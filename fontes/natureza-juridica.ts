import {
    isValidLegalNature,
    formatLegalNature,
    parseLegalNature,
    generateLegalNature,
    getLegalNatures
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function naturezaJuridicaValida(_: InterpretadorInterface, codigo: string): boolean {
    return isValidLegalNature(codigo);
}

export function formatarNaturezaJuridica(_: InterpretadorInterface, codigo: string): string {
    return formatLegalNature(codigo);
}

export function limparNaturezaJuridica(_: InterpretadorInterface, codigo: string): string {
    return parseLegalNature(codigo);
}

export function gerarNaturezaJuridica(_: InterpretadorInterface): string {
    return generateLegalNature();
}

export function obterNaturezasJuridicas(_: InterpretadorInterface): Record<string, string> {
    return getLegalNatures() as Record<string, string>;
}
