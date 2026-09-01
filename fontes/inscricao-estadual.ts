import { isValidIe } from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function inscricaoEstadualValida(_: InterpretadorInterface, uf: string, inscricao: string): boolean {
    return isValidIe(uf as Parameters<typeof isValidIe>[0], inscricao);
}
