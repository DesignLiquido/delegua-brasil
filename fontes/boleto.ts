import {
    isValidBoleto,
    formatBoleto,
    parseBoleto,
    generateBoleto,
    getBoletoInfo
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';
import { InfoBoleto } from './interfaces';

export function boletoValido(_: InterpretadorInterface, boleto: string): boolean {
    return isValidBoleto(boleto);
}

export function formatarBoleto(_: InterpretadorInterface, boleto: string, opcoes?: { completar?: boolean }): string {
    return formatBoleto(boleto, { pad: opcoes?.completar });
}

export function limparBoleto(_: InterpretadorInterface, boleto: string): string {
    return parseBoleto(boleto);
}

export function gerarBoleto(_: InterpretadorInterface): string {
    return generateBoleto();
}

export function obterInfoBoleto(_: InterpretadorInterface, boleto: string): InfoBoleto {
    const info = getBoletoInfo(boleto);
    return {
        valorBoleto: info.amount,
        dataVencimento: info.expirationDate,
        codigoBanco: info.bankCode
    };
}
