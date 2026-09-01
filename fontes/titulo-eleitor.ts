import {
    isValidVoterId,
    formatVoterId,
    parseVoterId,
    generateVoterId
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function tituloEleitorValido(_: InterpretadorInterface, titulo: string): boolean {
    return isValidVoterId(titulo);
}

export function formatarTituloEleitor(_: InterpretadorInterface, titulo: string): string {
    return formatVoterId(titulo);
}

export function limparTituloEleitor(_: InterpretadorInterface, titulo: string): string {
    return parseVoterId(titulo);
}

export function gerarTituloEleitor(_: InterpretadorInterface, codigoEstado?: string): string {
    return generateVoterId(codigoEstado as Parameters<typeof generateVoterId>[0]);
}
