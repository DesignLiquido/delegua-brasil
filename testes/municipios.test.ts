import * as utils from '@brazilian-utils/brazilian-utils';
import { obterMunicipioPorCodigo, obterMunicipioPorNome } from '../fontes/municipios';

const mockGetMunicipality = utils.getMunicipality as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('obterMunicipioPorCodigo', () => {
    it('busca município por código IBGE', async () => {
        mockGetMunicipality.mockResolvedValue('São Paulo');
        const resultado = await obterMunicipioPorCodigo(undefined, '3550308');
        expect(resultado).toBe('São Paulo');
        expect(mockGetMunicipality).toHaveBeenCalledWith({ code: '3550308' });
    });
});

describe('obterMunicipioPorNome', () => {
    it('busca município por nome e UF', async () => {
        mockGetMunicipality.mockResolvedValue(['São Paulo', '3550308']);
        const resultado = await obterMunicipioPorNome(undefined, 'São Paulo', 'SP');
        expect(resultado).toEqual(['São Paulo', '3550308']);
        expect(mockGetMunicipality).toHaveBeenCalledWith({ municipalityName: 'São Paulo', uf: 'SP' });
    });
});
