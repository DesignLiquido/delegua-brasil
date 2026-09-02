import * as utils from '@brazilian-utils/brazilian-utils';
import {
    boletoValido,
    formatarBoleto,
    limparBoleto,
    gerarBoleto,
    obterInfoBoleto
} from '../fontes/boleto';

const mockIsValid = utils.isValidBoleto as jest.Mock;
const mockFormat = utils.formatBoleto as jest.Mock;
const mockParse = utils.parseBoleto as jest.Mock;
const mockGenerate = utils.generateBoleto as jest.Mock;
const mockGetInfo = utils.getBoletoInfo as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('boletoValido', () => {
    it('retorna verdadeiro para boleto válido', () => {
        mockIsValid.mockReturnValue(true);
        expect(boletoValido(undefined, '34191790010104351004791020150008285480000029900')).toBe(true);
    });

    it('retorna falso para boleto inválido', () => {
        mockIsValid.mockReturnValue(false);
        expect(boletoValido(undefined, 'invalido')).toBe(false);
    });
});

describe('formatarBoleto', () => {
    it('formata boleto sem opções', () => {
        mockFormat.mockReturnValue('34191.79001 01043.510047 91020.150008 2 85480000029900');
        expect(formatarBoleto(undefined, '34191790010104351004791020150008285480000029900')).toBeDefined();
        expect(mockFormat).toHaveBeenCalledWith('34191790010104351004791020150008285480000029900', { pad: undefined });
    });
});

describe('limparBoleto', () => {
    it('remove formatação do boleto', () => {
        mockParse.mockReturnValue('34191790010104351004791020150008285480000029900');
        expect(limparBoleto(undefined, '34191.79001 01043.510047 91020.150008 2 85480000029900')).toBeDefined();
    });
});

describe('gerarBoleto', () => {
    it('gera boleto aleatório', () => {
        mockGenerate.mockReturnValue('34191790010104351004791020150008285480000029900');
        expect(gerarBoleto(undefined)).toBeDefined();
    });
});

describe('obterInfoBoleto', () => {
    it('traduz campos para português', () => {
        const vencimento = new Date('2024-01-31');
        mockGetInfo.mockReturnValue({ amount: 299, expirationDate: vencimento, bankCode: '341' });
        const info = obterInfoBoleto(undefined, '34191790010104351004791020150008285480000029900');
        expect(info.valorBoleto).toBe(299);
        expect(info.dataVencimento).toBe(vencimento);
        expect(info.codigoBanco).toBe('341');
    });
});
