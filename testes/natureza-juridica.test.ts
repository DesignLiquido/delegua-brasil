import * as utils from '@brazilian-utils/brazilian-utils';
import {
    naturezaJuridicaValida,
    formatarNaturezaJuridica,
    limparNaturezaJuridica,
    gerarNaturezaJuridica,
    obterNaturezasJuridicas
} from '../fontes/natureza-juridica';

const mockIsValid = utils.isValidLegalNature as jest.Mock;
const mockFormat = utils.formatLegalNature as jest.Mock;
const mockParse = utils.parseLegalNature as jest.Mock;
const mockGenerate = utils.generateLegalNature as jest.Mock;
const mockGetAll = utils.getLegalNatures as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('naturezaJuridicaValida', () => {
    it('retorna verdadeiro para natureza válida', () => {
        mockIsValid.mockReturnValue(true);
        expect(naturezaJuridicaValida(undefined, '1015')).toBe(true);
        expect(mockIsValid).toHaveBeenCalledWith('1015');
    });
});

describe('formatarNaturezaJuridica', () => {
    it('formata natureza jurídica', () => {
        mockFormat.mockReturnValue('101-5');
        expect(formatarNaturezaJuridica(undefined, '1015')).toBe('101-5');
    });
});

describe('limparNaturezaJuridica', () => {
    it('remove formatação', () => {
        mockParse.mockReturnValue('1015');
        expect(limparNaturezaJuridica(undefined, '101-5')).toBe('1015');
    });
});

describe('gerarNaturezaJuridica', () => {
    it('gera natureza aleatória', () => {
        mockGenerate.mockReturnValue('1015');
        expect(gerarNaturezaJuridica(undefined)).toBe('1015');
    });
});

describe('obterNaturezasJuridicas', () => {
    it('retorna mapa de naturezas', () => {
        const mapa = { '1015': 'Órgão Público do Poder Executivo Federal' };
        mockGetAll.mockReturnValue(mapa);
        expect(obterNaturezasJuridicas(undefined)).toEqual(mapa);
    });
});
