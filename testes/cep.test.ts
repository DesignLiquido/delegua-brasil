import * as utils from '@brazilian-utils/brazilian-utils';
import {
    cepValido,
    formatarCep,
    limparCep,
    gerarCep,
    obterEnderecoPorCep,
    obterCepPorEndereco
} from '../fontes/cep';

const mockIsValid = utils.isValidCep as jest.Mock;
const mockFormat = utils.formatCep as jest.Mock;
const mockParse = utils.parseCep as jest.Mock;
const mockGenerate = utils.generateCep as jest.Mock;
const mockGetAddress = utils.getAddressInfoByCep as jest.Mock;
const mockGetCep = utils.getCepInfoByAddress as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('cepValido', () => {
    it('retorna verdadeiro para CEP válido', () => {
        mockIsValid.mockReturnValue(true);
        expect(cepValido(undefined, '01310100')).toBe(true);
        expect(mockIsValid).toHaveBeenCalledWith('01310100');
    });

    it('retorna falso para CEP inválido', () => {
        mockIsValid.mockReturnValue(false);
        expect(cepValido(undefined, '00000000')).toBe(false);
    });
});

describe('formatarCep', () => {
    it('formata CEP', () => {
        mockFormat.mockReturnValue('01310-100');
        expect(formatarCep(undefined, '01310100')).toBe('01310-100');
        expect(mockFormat).toHaveBeenCalledWith('01310100');
    });
});

describe('limparCep', () => {
    it('remove formatação do CEP', () => {
        mockParse.mockReturnValue('01310100');
        expect(limparCep(undefined, '01310-100')).toBe('01310100');
    });
});

describe('gerarCep', () => {
    it('gera CEP aleatório', () => {
        mockGenerate.mockReturnValue('01310100');
        expect(gerarCep(undefined)).toBe('01310100');
    });
});

describe('obterEnderecoPorCep', () => {
    it('retorna endereço pelo CEP', async () => {
        const endereco = { logradouro: 'Av. Paulista', cidade: 'São Paulo' };
        mockGetAddress.mockResolvedValue(endereco);
        const resultado = await obterEnderecoPorCep(undefined, '01310100');
        expect(resultado).toEqual(endereco);
        expect(mockGetAddress).toHaveBeenCalledWith('01310100');
    });
});

describe('obterCepPorEndereco', () => {
    it('busca CEP por endereço', async () => {
        const ceps = [{ cep: '01310-100' }];
        mockGetCep.mockResolvedValue(ceps);
        const resultado = await obterCepPorEndereco(undefined, 'SP', 'São Paulo', 'Av. Paulista');
        expect(resultado).toEqual(ceps);
        expect(mockGetCep).toHaveBeenCalledWith({
            federalUnit: 'SP',
            city: 'São Paulo',
            street: 'Av. Paulista'
        });
    });
});
