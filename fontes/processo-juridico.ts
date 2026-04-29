import {
    isValidProcessoJuridico,
    formatProcessoJuridico,
    parseProcessoJuridico,
    generateProcessoJuridico
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function processoJuridicoValido(_: InterpretadorInterface, processo: string): boolean {
    return isValidProcessoJuridico(processo);
}

export function formatarProcessoJuridico(_: InterpretadorInterface, processo: string): string {
    return formatProcessoJuridico(processo);
}

export function limparProcessoJuridico(_: InterpretadorInterface, processo: string): string {
    return parseProcessoJuridico(processo);
}

export function gerarProcessoJuridico(_: InterpretadorInterface, opcoes?: { ano?: number; tribunal?: number }): string | null {
    return generateProcessoJuridico({ year: opcoes?.ano, court: opcoes?.tribunal });
}
