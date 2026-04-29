import {
    isValidCep,
    formatCep,
    parseCep,
    generateCep,
    getAddressInfoByCep,
    getCepInfoByAddress
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function cepValido(_: InterpretadorInterface, cep: string): boolean {
    return isValidCep(cep);
}

export function formatarCep(_: InterpretadorInterface, cep: string): string {
    return formatCep(cep);
}

export function limparCep(_: InterpretadorInterface, cep: string): string {
    return parseCep(cep);
}

export function gerarCep(_: InterpretadorInterface): string {
    return generateCep();
}

export async function obterEnderecoPorCep(_: InterpretadorInterface, cep: string | number): Promise<object> {
    return getAddressInfoByCep(cep);
}

export async function obterCepPorEndereco(
    _: InterpretadorInterface,
    unidadeFederativa: string,
    cidade: string,
    logradouro: string
): Promise<object[]> {
    return getCepInfoByAddress({
        federalUnit: unidadeFederativa,
        city: cidade,
        street: logradouro
    });
}
