import * as utils from '@brazilian-utils/brazilian-utils';
import {
    tituloEleitorValido,
    formatarTituloEleitor,
    limparTituloEleitor,
    gerarTituloEleitor
} from '../fontes/titulo-eleitor';

const mockIsValid = utils.isValidVoterId as jest.Mock;
const mockFormat = utils.formatVoterId as jest.Mock;
const mockParse = utils.parseVoterId as jest.Mock;
const mockGenerate = utils.generateVoterId as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('tituloEleitorValido', () => {
    it('retorna verdadeiro para título válido', () => {
        mockIsValid.mockReturnValue(true);
        expect(tituloEleitorValido(undefined, '123456789011')).toBe(true);
        expect(mockIsValid).toHaveBeenCalledWith('123456789011');
    });

    it('retorna falso para título inválido', () => {
        mockIsValid.mockReturnValue(false);
        expect(tituloEleitorValido(undefined, '000000000000')).toBe(false);
    });
});

describe('formatarTituloEleitor', () => {
    it('formata título de eleitor', () => {
        mockFormat.mockReturnValue('1234 5678 90 11');
        expect(formatarTituloEleitor(undefined, '123456789011')).toBe('1234 5678 90 11');
    });
});

describe('limparTituloEleitor', () => {
    it('remove formatação', () => {
        mockParse.mockReturnValue('123456789011');
        expect(limparTituloEleitor(undefined, '1234 5678 90 11')).toBe('123456789011');
    });
});

describe('gerarTituloEleitor', () => {
    it('gera título aleatório sem estado', () => {
        mockGenerate.mockReturnValue('123456789011');
        gerarTituloEleitor(undefined);
        expect(mockGenerate).toHaveBeenCalledWith(undefined);
    });

    it('gera título com código de estado', () => {
        mockGenerate.mockReturnValue('123456789011');
        gerarTituloEleitor(undefined, 'SP');
        expect(mockGenerate).toHaveBeenCalledWith('SP');
    });
});
