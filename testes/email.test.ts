import * as utils from '@brazilian-utils/brazilian-utils';
import { emailValido } from '../fontes/email';

const mockIsValidEmail = utils.isValidEmail as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('emailValido', () => {
    it('retorna verdadeiro para e-mail válido', () => {
        mockIsValidEmail.mockReturnValue(true);
        expect(emailValido(undefined, 'usuario@exemplo.com.br')).toBe(true);
        expect(mockIsValidEmail).toHaveBeenCalledWith('usuario@exemplo.com.br');
    });

    it('retorna falso para e-mail inválido', () => {
        mockIsValidEmail.mockReturnValue(false);
        expect(emailValido(undefined, 'nao-e-email')).toBe(false);
    });
});
