import * as utils from '@brazilian-utils/brazilian-utils';
import { obterEstados, obterCidades } from '../fontes/estados';

const mockGetStates = utils.getStates as jest.Mock;
const mockGetCities = utils.getCities as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('obterEstados', () => {
    it('retorna lista de estados com campos em português', () => {
        mockGetStates.mockReturnValue([
            { code: 'SP', name: 'São Paulo' },
            { code: 'RJ', name: 'Rio de Janeiro' }
        ]);
        const estados = obterEstados(undefined);
        expect(estados).toEqual([
            { codigo: 'SP', nome: 'São Paulo' },
            { codigo: 'RJ', nome: 'Rio de Janeiro' }
        ]);
    });
});

describe('obterCidades', () => {
    it('retorna cidades de um estado', () => {
        mockGetCities.mockReturnValue(['São Paulo', 'Campinas', 'Guarulhos']);
        const cidades = obterCidades(undefined, 'SP');
        expect(cidades).toEqual(['São Paulo', 'Campinas', 'Guarulhos']);
        expect(mockGetCities).toHaveBeenCalledWith('SP');
    });

    it('retorna todas as cidades sem filtro de estado', () => {
        mockGetCities.mockReturnValue(['São Paulo', 'Rio de Janeiro']);
        obterCidades(undefined);
        expect(mockGetCities).toHaveBeenCalledWith(undefined);
    });
});
