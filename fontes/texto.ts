import { capitalize } from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function capitalizar(
    _: InterpretadorInterface,
    texto: string,
    opcoes?: { palavrasMinusculas?: string[]; palavrasMaiusculas?: string[] }
): string {
    return capitalize(texto, {
        lowerCaseWords: opcoes?.palavrasMinusculas,
        upperCaseWords: opcoes?.palavrasMaiusculas
    });
}
