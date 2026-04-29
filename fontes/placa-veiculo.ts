import {
    isValidLicensePlate,
    formatLicensePlate,
    parseLicensePlate,
    generateLicensePlate,
    getFormatLicensePlate
} from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export function placaVeiculoValida(_: InterpretadorInterface, placa: string): boolean {
    return isValidLicensePlate(placa);
}

export function formatarPlacaVeiculo(_: InterpretadorInterface, placa: string): string {
    return formatLicensePlate(placa);
}

export function limparPlacaVeiculo(_: InterpretadorInterface, placa: string): string {
    return parseLicensePlate(placa);
}

export function gerarPlacaVeiculo(_: InterpretadorInterface, formato?: string): string {
    return generateLicensePlate(formato);
}

export function obterFormatoPlacaVeiculo(_: InterpretadorInterface, placa: string): string | null {
    return getFormatLicensePlate(placa);
}
