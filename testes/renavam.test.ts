import * as utils from '@brazilian-utils/brazilian-utils';
import { renavamValido } from '../fontes/renavam';

const mockIsValidRenavam = utils.isValidRenavam as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('renavamValido', () => {
    it('retorna verdadeiro para RENAVAM válido', () => {
        mockIsValidRenavam.mockReturnValue(true);
        expect(renavamValido(undefined, '12345678900')).toBe(true);
        expect(mockIsValidRenavam).toHaveBeenCalledWith('12345678900');
    });

    it('retorna falso para RENAVAM inválido', () => {
        mockIsValidRenavam.mockReturnValue(false);
        expect(renavamValido(undefined, '00000000000')).toBe(false);
    });
});
