import * as utils from '@brazilian-utils/brazilian-utils';
import {
    placaVeiculoValida,
    formatarPlacaVeiculo,
    limparPlacaVeiculo,
    gerarPlacaVeiculo,
    obterFormatoPlacaVeiculo
} from '../fontes/placa-veiculo';

const mockIsValid = utils.isValidLicensePlate as jest.Mock;
const mockFormat = utils.formatLicensePlate as jest.Mock;
const mockParse = utils.parseLicensePlate as jest.Mock;
const mockGenerate = utils.generateLicensePlate as jest.Mock;
const mockGetFormat = utils.getFormatLicensePlate as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('placaVeiculoValida', () => {
    it('retorna verdadeiro para placa válida', () => {
        mockIsValid.mockReturnValue(true);
        expect(placaVeiculoValida(undefined, 'ABC1234')).toBe(true);
        expect(mockIsValid).toHaveBeenCalledWith('ABC1234');
    });

    it('retorna falso para placa inválida', () => {
        mockIsValid.mockReturnValue(false);
        expect(placaVeiculoValida(undefined, 'INVALIDA')).toBe(false);
    });
});

describe('formatarPlacaVeiculo', () => {
    it('formata placa', () => {
        mockFormat.mockReturnValue('ABC-1234');
        expect(formatarPlacaVeiculo(undefined, 'ABC1234')).toBe('ABC-1234');
        expect(mockFormat).toHaveBeenCalledWith('ABC1234');
    });
});

describe('limparPlacaVeiculo', () => {
    it('remove formatação da placa', () => {
        mockParse.mockReturnValue('ABC1234');
        expect(limparPlacaVeiculo(undefined, 'ABC-1234')).toBe('ABC1234');
    });
});

describe('gerarPlacaVeiculo', () => {
    it('gera placa aleatória sem formato', () => {
        mockGenerate.mockReturnValue('ABC1234');
        expect(gerarPlacaVeiculo(undefined)).toBe('ABC1234');
        expect(mockGenerate).toHaveBeenCalledWith(undefined);
    });

    it('gera placa com formato especificado', () => {
        mockGenerate.mockReturnValue('ABC1D23');
        expect(gerarPlacaVeiculo(undefined, 'mercosul')).toBe('ABC1D23');
        expect(mockGenerate).toHaveBeenCalledWith('mercosul');
    });
});

describe('obterFormatoPlacaVeiculo', () => {
    it('retorna o formato da placa', () => {
        mockGetFormat.mockReturnValue('old');
        expect(obterFormatoPlacaVeiculo(undefined, 'ABC1234')).toBe('old');
        expect(mockGetFormat).toHaveBeenCalledWith('ABC1234');
    });

    it('retorna null para placa desconhecida', () => {
        mockGetFormat.mockReturnValue(null);
        expect(obterFormatoPlacaVeiculo(undefined, 'INVALIDA')).toBeNull();
    });
});
