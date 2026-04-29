import * as utils from '@brazilian-utils/brazilian-utils';
import { formatarMoeda, analisarMoeda } from '../fontes/moeda';

const mockFormatCurrency = utils.formatCurrency as jest.Mock;
const mockParseCurrency = utils.parseCurrency as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('formatarMoeda', () => {
    it('formata valor sem opções', () => {
        mockFormatCurrency.mockReturnValue('R$ 1.234,56');
        expect(formatarMoeda(undefined, 1234.56)).toBe('R$ 1.234,56');
        expect(mockFormatCurrency).toHaveBeenCalledWith(1234.56, { precision: undefined });
    });

    it('repassa opção precisao como precision', () => {
        mockFormatCurrency.mockReturnValue('R$ 1.234,5600');
        formatarMoeda(undefined, 1234.56, { precisao: 4 });
        expect(mockFormatCurrency).toHaveBeenCalledWith(1234.56, { precision: 4 });
    });
});

describe('analisarMoeda', () => {
    it('converte string BRL para número', () => {
        mockParseCurrency.mockReturnValue(1234.56);
        expect(analisarMoeda(undefined, 'R$ 1.234,56')).toBe(1234.56);
        expect(mockParseCurrency).toHaveBeenCalledWith('R$ 1.234,56');
    });
});
