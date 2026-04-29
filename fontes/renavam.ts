import { isValidRenavam } from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function renavamValido(_: InterpretadorInterface, renavam: string): boolean {
    return isValidRenavam(renavam);
}
