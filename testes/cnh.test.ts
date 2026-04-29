import * as utils from '@brazilian-utils/brazilian-utils';
import { cnhValida, formatarCnh, limparCnh, gerarCnh } from '../fontes/cnh';

const mockIsValidCnh = utils.isValidCnh as jest.Mock;
const mockFormatCnh = utils.formatCnh as jest.Mock;
const mockParseCnh = utils.parseCnh as jest.Mock;
const mockGenerateCnh = utils.generateCnh as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('cnhValida', () => {
    it('retorna verdadeiro para CNH válida', () => {
        mockIsValidCnh.mockReturnValue(true);
        expect(cnhValida(undefined, '12345678900')).toBe(true);
        expect(mockIsValidCnh).toHaveBeenCalledWith('12345678900');
    });

    it('retorna falso para CNH inválida', () => {
        mockIsValidCnh.mockReturnValue(false);
        expect(cnhValida(undefined, '00000000000')).toBe(false);
    });
});

describe('formatarCnh', () => {
    it('formata CNH sem opções', () => {
        mockFormatCnh.mockReturnValue('123456789 00');
        expect(formatarCnh(undefined, '12345678900')).toBe('123456789 00');
        expect(mockFormatCnh).toHaveBeenCalledWith('12345678900', { pad: undefined });
    });

    it('repassa opção completar como pad', () => {
        mockFormatCnh.mockReturnValue('000012345678900');
        formatarCnh(undefined, '12345678900', { completar: true });
        expect(mockFormatCnh).toHaveBeenCalledWith('12345678900', { pad: true });
    });
});

describe('limparCnh', () => {
    it('remove formatação', () => {
        mockParseCnh.mockReturnValue('12345678900');
        expect(limparCnh(undefined, '123456789 00')).toBe('12345678900');
    });
});

describe('gerarCnh', () => {
    it('gera CNH aleatória', () => {
        mockGenerateCnh.mockReturnValue('12345678900');
        expect(gerarCnh(undefined)).toBe('12345678900');
    });
});
