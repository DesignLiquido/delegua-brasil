import * as utils from '@brazilian-utils/brazilian-utils';
import { pisValido, formatarPis, limparPis, gerarPis } from '../fontes/pis';

const mockIsValidPis = utils.isValidPis as jest.Mock;
const mockFormatPis = utils.formatPis as jest.Mock;
const mockParsePis = utils.parsePis as jest.Mock;
const mockGeneratePis = utils.generatePis as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('pisValido', () => {
    it('retorna verdadeiro para PIS válido', () => {
        mockIsValidPis.mockReturnValue(true);
        expect(pisValido(undefined, '12345678900')).toBe(true);
        expect(mockIsValidPis).toHaveBeenCalledWith('12345678900');
    });

    it('retorna falso para PIS inválido', () => {
        mockIsValidPis.mockReturnValue(false);
        expect(pisValido(undefined, '00000000000')).toBe(false);
    });
});

describe('formatarPis', () => {
    it('formata PIS sem opções', () => {
        mockFormatPis.mockReturnValue('123.45678.90-0');
        expect(formatarPis(undefined, '12345678900')).toBe('123.45678.90-0');
        expect(mockFormatPis).toHaveBeenCalledWith('12345678900', { pad: undefined });
    });

    it('repassa opção completar como pad', () => {
        formatarPis(undefined, '12345678900', { completar: true });
        expect(mockFormatPis).toHaveBeenCalledWith('12345678900', { pad: true });
    });
});

describe('limparPis', () => {
    it('remove formatação', () => {
        mockParsePis.mockReturnValue('12345678900');
        expect(limparPis(undefined, '123.45678.90-0')).toBe('12345678900');
    });
});

describe('gerarPis', () => {
    it('gera PIS aleatório', () => {
        mockGeneratePis.mockReturnValue('12345678900');
        expect(gerarPis(undefined)).toBe('12345678900');
    });
});
