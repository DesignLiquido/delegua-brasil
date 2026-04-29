import * as utils from '@brazilian-utils/brazilian-utils';
import { capitalizar } from '../fontes/texto';

const mockCapitalize = utils.capitalize as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('capitalizar', () => {
    it('capitaliza texto sem opções', () => {
        mockCapitalize.mockReturnValue('Rua Das Flores');
        expect(capitalizar(undefined, 'rua das flores')).toBe('Rua Das Flores');
        expect(mockCapitalize).toHaveBeenCalledWith('rua das flores', {
            lowerCaseWords: undefined,
            upperCaseWords: undefined
        });
    });

    it('repassa palavrasMinusculas como lowerCaseWords', () => {
        mockCapitalize.mockReturnValue('Rua das Flores');
        capitalizar(undefined, 'rua das flores', { palavrasMinusculas: ['das'] });
        expect(mockCapitalize).toHaveBeenCalledWith('rua das flores', {
            lowerCaseWords: ['das'],
            upperCaseWords: undefined
        });
    });

    it('repassa palavrasMaiusculas como upperCaseWords', () => {
        mockCapitalize.mockReturnValue('CEP Postal');
        capitalizar(undefined, 'cep postal', { palavrasMaiusculas: ['cep'] });
        expect(mockCapitalize).toHaveBeenCalledWith('cep postal', {
            lowerCaseWords: undefined,
            upperCaseWords: ['cep']
        });
    });
});
