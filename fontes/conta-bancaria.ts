import { isValidBankAccount } from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';
import { ContaBancaria } from './interfaces';

export { ContaBancaria };

export function contaBancariaValida(_: InterpretadorInterface, conta: ContaBancaria): boolean {
    return isValidBankAccount({
        bankCode: conta.banco ?? '',
        agency: conta.agencia ?? '',
        account: conta.conta ?? '',
        digit: conta.digito ?? ''
    });
}
