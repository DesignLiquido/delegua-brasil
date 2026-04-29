import * as utils from '@brazilian-utils/brazilian-utils';
import {
    processoJuridicoValido,
    formatarProcessoJuridico,
    limparProcessoJuridico,
    gerarProcessoJuridico
} from '../fontes/processo-juridico';

const mockIsValid = utils.isValidProcessoJuridico as jest.Mock;
const mockFormat = utils.formatProcessoJuridico as jest.Mock;
const mockParse = utils.parseProcessoJuridico as jest.Mock;
const mockGenerate = utils.generateProcessoJuridico as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('processoJuridicoValido', () => {
    it('retorna verdadeiro para processo válido', () => {
        mockIsValid.mockReturnValue(true);
        expect(processoJuridicoValido(undefined, '0000001-11.2021.8.26.0001')).toBe(true);
    });

    it('retorna falso para processo inválido', () => {
        mockIsValid.mockReturnValue(false);
        expect(processoJuridicoValido(undefined, 'invalido')).toBe(false);
    });
});

describe('formatarProcessoJuridico', () => {
    it('formata processo', () => {
        mockFormat.mockReturnValue('0000001-11.2021.8.26.0001');
        expect(formatarProcessoJuridico(undefined, '00000011120218260001')).toBe('0000001-11.2021.8.26.0001');
    });
});

describe('limparProcessoJuridico', () => {
    it('remove formatação do processo', () => {
        mockParse.mockReturnValue('00000011120218260001');
        expect(limparProcessoJuridico(undefined, '0000001-11.2021.8.26.0001')).toBe('00000011120218260001');
    });
});

describe('gerarProcessoJuridico', () => {
    it('gera processo sem opções', () => {
        mockGenerate.mockReturnValue('0000001-11.2021.8.26.0001');
        expect(gerarProcessoJuridico(undefined)).toBe('0000001-11.2021.8.26.0001');
        expect(mockGenerate).toHaveBeenCalledWith({ year: undefined, court: undefined });
    });

    it('repassa ano e tribunal como year e court', () => {
        mockGenerate.mockReturnValue('0000001-11.2023.8.26.0002');
        gerarProcessoJuridico(undefined, { ano: 2023, tribunal: 2 });
        expect(mockGenerate).toHaveBeenCalledWith({ year: 2023, court: 2 });
    });
});
