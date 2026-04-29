import { isValidEmail } from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function emailValido(_: InterpretadorInterface, email: string): boolean {
    return isValidEmail(email);
}
