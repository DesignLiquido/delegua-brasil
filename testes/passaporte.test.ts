import * as utils from '@brazilian-utils/brazilian-utils';
import { passaporteValido, formatarPassaporte, limparPassaporte, gerarPassaporte } from '../fontes/passaporte';

const mockIsValidPassport = utils.isValidPassport as jest.Mock;
const mockFormatPassport = utils.formatPassport as jest.Mock;
const mockParsePassport = utils.parsePassport as jest.Mock;
const mockGeneratePassport = utils.generatePassport as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('passaporteValido', () => {
    it('retorna verdadeiro para passaporte válido', () => {
        mockIsValidPassport.mockReturnValue(true);
        expect(passaporteValido(undefined, 'AB123456')).toBe(true);
        expect(mockIsValidPassport).toHaveBeenCalledWith('AB123456');
    });

    it('retorna falso para passaporte inválido', () => {
        mockIsValidPassport.mockReturnValue(false);
        expect(passaporteValido(undefined, 'invalido')).toBe(false);
    });
});

describe('formatarPassaporte', () => {
    it('formata passaporte', () => {
        mockFormatPassport.mockReturnValue('AB123456');
        expect(formatarPassaporte(undefined, 'ab123456')).toBe('AB123456');
        expect(mockFormatPassport).toHaveBeenCalledWith('ab123456');
    });
});

describe('limparPassaporte', () => {
    it('limpa passaporte', () => {
        mockParsePassport.mockReturnValue('AB123456');
        expect(limparPassaporte(undefined, 'AB-123456')).toBe('AB123456');
    });
});

describe('gerarPassaporte', () => {
    it('gera passaporte aleatório', () => {
        mockGeneratePassport.mockReturnValue('AB123456');
        expect(gerarPassaporte(undefined)).toBe('AB123456');
    });
});
