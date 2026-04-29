import * as utils from '@brazilian-utils/brazilian-utils';
import { contaBancariaValida } from '../fontes/conta-bancaria';

const mockIsValidBankAccount = utils.isValidBankAccount as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('contaBancariaValida', () => {
    it('retorna verdadeiro para conta válida', () => {
        mockIsValidBankAccount.mockReturnValue(true);
        const conta = { banco: '001', agencia: '1234', conta: '12345', digito: '6' };
        expect(contaBancariaValida(undefined, conta)).toBe(true);
        expect(mockIsValidBankAccount).toHaveBeenCalledWith(conta);
    });

    it('retorna falso para conta inválida', () => {
        mockIsValidBankAccount.mockReturnValue(false);
        expect(contaBancariaValida(undefined, { banco: '000' })).toBe(false);
    });
});
