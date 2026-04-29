import * as utils from '@brazilian-utils/brazilian-utils';
import { inscricaoEstadualValida } from '../fontes/inscricao-estadual';

const mockIsValidIe = utils.isValidIe as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('inscricaoEstadualValida', () => {
    it('retorna verdadeiro para IE válida', () => {
        mockIsValidIe.mockReturnValue(true);
        expect(inscricaoEstadualValida(undefined, 'SP', '111.042.929.114')).toBe(true);
        expect(mockIsValidIe).toHaveBeenCalledWith('SP', '111.042.929.114');
    });

    it('retorna falso para IE inválida', () => {
        mockIsValidIe.mockReturnValue(false);
        expect(inscricaoEstadualValida(undefined, 'SP', '000000000000')).toBe(false);
    });
});
