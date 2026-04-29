import * as utils from '@brazilian-utils/brazilian-utils';
import { cpfValido, formatarCpf, limparCpf, gerarCpf } from '../fontes/cpf';

const mockIsValidCpf = utils.isValidCpf as jest.Mock;
const mockFormatCpf = utils.formatCpf as jest.Mock;
const mockParseCpf = utils.parseCpf as jest.Mock;
const mockGenerateCpf = utils.generateCpf as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('cpfValido', () => {
    it('retorna verdadeiro para CPF válido', () => {
        mockIsValidCpf.mockReturnValue(true);
        expect(cpfValido(undefined, '12345678909')).toBe(true);
        expect(mockIsValidCpf).toHaveBeenCalledWith('12345678909');
    });

    it('retorna falso para CPF inválido', () => {
        mockIsValidCpf.mockReturnValue(false);
        expect(cpfValido(undefined, '00000000000')).toBe(false);
    });
});

describe('formatarCpf', () => {
    it('formata CPF sem opções', () => {
        mockFormatCpf.mockReturnValue('123.456.789-09');
        expect(formatarCpf(undefined, '12345678909')).toBe('123.456.789-09');
        expect(mockFormatCpf).toHaveBeenCalledWith('12345678909', { pad: undefined });
    });

    it('repassa opção completar como pad', () => {
        mockFormatCpf.mockReturnValue('000.123.456-78');
        formatarCpf(undefined, '12345678', { completar: true });
        expect(mockFormatCpf).toHaveBeenCalledWith('12345678', { pad: true });
    });
});

describe('limparCpf', () => {
    it('remove formatação', () => {
        mockParseCpf.mockReturnValue('12345678909');
        expect(limparCpf(undefined, '123.456.789-09')).toBe('12345678909');
        expect(mockParseCpf).toHaveBeenCalledWith('123.456.789-09');
    });
});

describe('gerarCpf', () => {
    it('gera CPF aleatório', () => {
        mockGenerateCpf.mockReturnValue('98765432100');
        expect(gerarCpf(undefined)).toBe('98765432100');
        expect(mockGenerateCpf).toHaveBeenCalled();
    });
});
