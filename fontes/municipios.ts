import { getMunicipality } from '@brazilian-utils/brazilian-utils';
import { InterpretadorInterface } from '@designliquido/delegua/interfaces/interpretador-interface';

export async function obterMunicipioPorCodigo(_: InterpretadorInterface, codigo: string): Promise<string> {
    return getMunicipality({ code: codigo }) as Promise<string>;
}

export async function obterMunicipioPorNome(_: InterpretadorInterface, nomeMunicipio: string, uf: string): Promise<[string, string]> {
    return getMunicipality({ municipalityName: nomeMunicipio, uf }) as Promise<[string, string]>;
}
