import * as utils from '@brazilian-utils/brazilian-utils';
import { cnpjValido, formatarCnpj, limparCnpj, gerarCnpj } from '../fontes/cnpj';

const mockIsValidCnpj = utils.isValidCnpj as jest.Mock;
const mockFormatCnpj = utils.formatCnpj as jest.Mock;
const mockParseCnpj = utils.parseCnpj as jest.Mock;
const mockGenerateCnpj = utils.generateCnpj as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('cnpjValido', () => {
    it('retorna verdadeiro para CNPJ válido', () => {
        mockIsValidCnpj.mockReturnValue(true);
        expect(cnpjValido(undefined, '11222333000181')).toBe(true);
        expect(mockIsValidCnpj).toHaveBeenCalledWith('11222333000181');
    });

    it('retorna falso para CNPJ inválido', () => {
        mockIsValidCnpj.mockReturnValue(false);
        expect(cnpjValido(undefined, '00000000000000')).toBe(false);
    });
});

describe('formatarCnpj', () => {
    it('formata CNPJ sem opções', () => {
        mockFormatCnpj.mockReturnValue('11.222.333/0001-81');
        expect(formatarCnpj(undefined, '11222333000181')).toBe('11.222.333/0001-81');
        expect(mockFormatCnpj).toHaveBeenCalledWith('11222333000181', { pad: undefined, version: undefined });
    });

    it('repassa opção completar como pad e versao como version', () => {
        mockFormatCnpj.mockReturnValue('11.222.333/0001-81');
        formatarCnpj(undefined, '11222333000181', { completar: true, versao: 2 });
        expect(mockFormatCnpj).toHaveBeenCalledWith('11222333000181', { pad: true, version: 2 });
    });
});

describe('limparCnpj', () => {
    it('remove formatação', () => {
        mockParseCnpj.mockReturnValue('11222333000181');
        expect(limparCnpj(undefined, '11.222.333/0001-81')).toBe('11222333000181');
        expect(mockParseCnpj).toHaveBeenCalledWith('11.222.333/0001-81', { version: undefined });
    });
});

describe('gerarCnpj', () => {
    it('gera CNPJ aleatório', () => {
        mockGenerateCnpj.mockReturnValue('11222333000181');
        expect(gerarCnpj(undefined)).toBe('11222333000181');
    });
});
