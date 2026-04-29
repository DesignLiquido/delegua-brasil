import * as utils from '@brazilian-utils/brazilian-utils';
import {
    telefoneValido,
    formatarTelefone,
    limparTelefone,
    celularValido,
    telefoneFixoValido,
    gerarTelefone
} from '../fontes/telefone';

const mockIsValid = utils.isValidPhone as jest.Mock;
const mockFormat = utils.formatPhone as jest.Mock;
const mockParse = utils.parsePhone as jest.Mock;
const mockIsMobile = utils.isValidMobilePhone as jest.Mock;
const mockIsLandline = utils.isValidLandlinePhone as jest.Mock;
const mockGenerate = utils.generatePhone as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('telefoneValido', () => {
    it('retorna verdadeiro para telefone válido', () => {
        mockIsValid.mockReturnValue(true);
        expect(telefoneValido(undefined, '11987654321')).toBe(true);
        expect(mockIsValid).toHaveBeenCalledWith('11987654321');
    });
});

describe('formatarTelefone', () => {
    it('formata telefone sem máscara', () => {
        mockFormat.mockReturnValue('(11) 98765-4321');
        expect(formatarTelefone(undefined, '11987654321')).toBe('(11) 98765-4321');
        expect(mockFormat).toHaveBeenCalledWith('11987654321', { mask: undefined });
    });

    it('repassa opção mascara como mask', () => {
        formatarTelefone(undefined, '11987654321', { mascara: '(##) #####-####' });
        expect(mockFormat).toHaveBeenCalledWith('11987654321', { mask: '(##) #####-####' });
    });
});

describe('limparTelefone', () => {
    it('remove formatação', () => {
        mockParse.mockReturnValue('11987654321');
        expect(limparTelefone(undefined, '(11) 98765-4321')).toBe('11987654321');
    });
});

describe('celularValido', () => {
    it('valida número de celular', () => {
        mockIsMobile.mockReturnValue(true);
        expect(celularValido(undefined, '11987654321')).toBe(true);
        expect(mockIsMobile).toHaveBeenCalledWith('11987654321');
    });
});

describe('telefoneFixoValido', () => {
    it('valida telefone fixo', () => {
        mockIsLandline.mockReturnValue(true);
        expect(telefoneFixoValido(undefined, '1133334444')).toBe(true);
        expect(mockIsLandline).toHaveBeenCalledWith('1133334444');
    });
});

describe('gerarTelefone', () => {
    it('gera telefone sem tipo', () => {
        mockGenerate.mockReturnValue('11987654321');
        gerarTelefone(undefined);
        expect(mockGenerate).toHaveBeenCalledWith(undefined);
    });

    it('converte celular para mobile', () => {
        mockGenerate.mockReturnValue('11987654321');
        gerarTelefone(undefined, 'celular');
        expect(mockGenerate).toHaveBeenCalledWith('mobile');
    });

    it('converte fixo para landline', () => {
        mockGenerate.mockReturnValue('1133334444');
        gerarTelefone(undefined, 'fixo');
        expect(mockGenerate).toHaveBeenCalledWith('landline');
    });
});
