import * as utils from '@brazilian-utils/brazilian-utils';
import { obterFeriados, ehFeriado } from '../fontes/feriados';

const mockGetHolidays = utils.getHolidays as jest.Mock;
const mockIsHoliday = utils.isHoliday as jest.Mock;

beforeEach(() => jest.clearAllMocks());

describe('obterFeriados', () => {
    it('retorna feriados com campos em português', () => {
        const natal = new Date('2024-12-25');
        mockGetHolidays.mockReturnValue([{ name: 'Natal', date: natal }]);
        const feriados = obterFeriados(undefined, 2024);
        expect(feriados).toEqual([{ nome: 'Natal', data: natal }]);
        expect(mockGetHolidays).toHaveBeenCalledWith(2024);
    });

    it('filtra por estado quando informado', () => {
        mockGetHolidays.mockReturnValue([]);
        obterFeriados(undefined, 2024, 'SP');
        expect(mockGetHolidays).toHaveBeenCalledWith({ year: 2024, stateCode: 'SP' });
    });
});

describe('ehFeriado', () => {
    it('retorna verdadeiro para data de feriado', () => {
        mockIsHoliday.mockReturnValue(true);
        const natal = new Date('2024-12-25');
        expect(ehFeriado(undefined, natal)).toBe(true);
        expect(mockIsHoliday).toHaveBeenCalledWith({ targetDate: natal, stateCode: undefined });
    });

    it('verifica feriado estadual', () => {
        mockIsHoliday.mockReturnValue(true);
        const data = new Date('2024-07-09');
        ehFeriado(undefined, data, 'SP');
        expect(mockIsHoliday).toHaveBeenCalledWith({ targetDate: data, stateCode: 'SP' });
    });

    it('retorna falso para dia comum', () => {
        mockIsHoliday.mockReturnValue(false);
        expect(ehFeriado(undefined, new Date('2024-03-15'))).toBe(false);
    });
});
