import { cpfValido, formatarCpf, limparCpf, gerarCpf } from './cpf';
import { cnpjValido, formatarCnpj, limparCnpj, gerarCnpj } from './cnpj';
import { cnhValida, formatarCnh, limparCnh, gerarCnh } from './cnh';
import { pisValido, formatarPis, limparPis, gerarPis } from './pis';
import { passaporteValido, formatarPassaporte, limparPassaporte, gerarPassaporte } from './passaporte';
import { placaVeiculoValida, formatarPlacaVeiculo, limparPlacaVeiculo, gerarPlacaVeiculo, obterFormatoPlacaVeiculo } from './placa-veiculo';
import { renavamValido } from './renavam';
import { inscricaoEstadualValida } from './inscricao-estadual';
import { contaBancariaValida } from './conta-bancaria';
import { processoJuridicoValido, formatarProcessoJuridico, limparProcessoJuridico, gerarProcessoJuridico } from './processo-juridico';
import { naturezaJuridicaValida, formatarNaturezaJuridica, limparNaturezaJuridica, gerarNaturezaJuridica, obterNaturezasJuridicas } from './natureza-juridica';
import { cepValido, formatarCep, limparCep, gerarCep, obterEnderecoPorCep, obterCepPorEndereco } from './cep';
import { boletoValido, formatarBoleto, limparBoleto, gerarBoleto, obterInfoBoleto } from './boleto';
import { formatarMoeda, analisarMoeda } from './moeda';
import { telefoneValido, formatarTelefone, limparTelefone, celularValido, telefoneFixoValido, gerarTelefone } from './telefone';
import { emailValido } from './email';
import { tituloEleitorValido, formatarTituloEleitor, limparTituloEleitor, gerarTituloEleitor } from './titulo-eleitor';
import { obterEstados, obterCidades } from './estados';
import { obterMunicipioPorCodigo, obterMunicipioPorNome } from './municipios';
import { obterFeriados, ehFeriado } from './feriados';
import { capitalizar } from './texto';

export const DeleguaModuloBrasil = {
    // CPF
    cpfValido: {
        tipoRetorno: 'lógico',
        funcao: cpfValido,
        argumentos: [{ nome: 'cpf', tipo: 'texto' }]
    },
    formatarCpf: {
        tipoRetorno: 'texto',
        funcao: formatarCpf,
        argumentos: [
            { nome: 'cpf', tipo: 'texto' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    },
    limparCpf: {
        tipoRetorno: 'texto',
        funcao: limparCpf,
        argumentos: [{ nome: 'cpf', tipo: 'texto' }]
    },
    gerarCpf: {
        tipoRetorno: 'texto',
        funcao: gerarCpf,
        argumentos: []
    },

    // CNPJ
    cnpjValido: {
        tipoRetorno: 'lógico',
        funcao: cnpjValido,
        argumentos: [{ nome: 'cnpj', tipo: 'texto' }]
    },
    formatarCnpj: {
        tipoRetorno: 'texto',
        funcao: formatarCnpj,
        argumentos: [
            { nome: 'cnpj', tipo: 'texto' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    },
    limparCnpj: {
        tipoRetorno: 'texto',
        funcao: limparCnpj,
        argumentos: [
            { nome: 'cnpj', tipo: 'texto' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    },
    gerarCnpj: {
        tipoRetorno: 'texto',
        funcao: gerarCnpj,
        argumentos: []
    },

    // CNH
    cnhValida: {
        tipoRetorno: 'lógico',
        funcao: cnhValida,
        argumentos: [{ nome: 'cnh', tipo: 'texto' }]
    },
    formatarCnh: {
        tipoRetorno: 'texto',
        funcao: formatarCnh,
        argumentos: [
            { nome: 'cnh', tipo: 'texto' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    },
    limparCnh: {
        tipoRetorno: 'texto',
        funcao: limparCnh,
        argumentos: [{ nome: 'cnh', tipo: 'texto' }]
    },
    gerarCnh: {
        tipoRetorno: 'texto',
        funcao: gerarCnh,
        argumentos: []
    },

    // PIS
    pisValido: {
        tipoRetorno: 'lógico',
        funcao: pisValido,
        argumentos: [{ nome: 'pis', tipo: 'texto' }]
    },
    formatarPis: {
        tipoRetorno: 'texto',
        funcao: formatarPis,
        argumentos: [
            { nome: 'pis', tipo: 'texto' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    },
    limparPis: {
        tipoRetorno: 'texto',
        funcao: limparPis,
        argumentos: [{ nome: 'pis', tipo: 'texto' }]
    },
    gerarPis: {
        tipoRetorno: 'texto',
        funcao: gerarPis,
        argumentos: []
    },

    // Passaporte
    passaporteValido: {
        tipoRetorno: 'lógico',
        funcao: passaporteValido,
        argumentos: [{ nome: 'passaporte', tipo: 'texto' }]
    },
    formatarPassaporte: {
        tipoRetorno: 'texto',
        funcao: formatarPassaporte,
        argumentos: [{ nome: 'passaporte', tipo: 'texto' }]
    },
    limparPassaporte: {
        tipoRetorno: 'texto',
        funcao: limparPassaporte,
        argumentos: [{ nome: 'passaporte', tipo: 'texto' }]
    },
    gerarPassaporte: {
        tipoRetorno: 'texto',
        funcao: gerarPassaporte,
        argumentos: []
    },

    // Placa de Veículo
    placaVeiculoValida: {
        tipoRetorno: 'lógico',
        funcao: placaVeiculoValida,
        argumentos: [{ nome: 'placa', tipo: 'texto' }]
    },
    formatarPlacaVeiculo: {
        tipoRetorno: 'texto',
        funcao: formatarPlacaVeiculo,
        argumentos: [{ nome: 'placa', tipo: 'texto' }]
    },
    limparPlacaVeiculo: {
        tipoRetorno: 'texto',
        funcao: limparPlacaVeiculo,
        argumentos: [{ nome: 'placa', tipo: 'texto' }]
    },
    gerarPlacaVeiculo: {
        tipoRetorno: 'texto',
        funcao: gerarPlacaVeiculo,
        argumentos: [{ nome: 'formato', tipo: 'texto', opcional: true }]
    },
    obterFormatoPlacaVeiculo: {
        tipoRetorno: 'qualquer',
        funcao: obterFormatoPlacaVeiculo,
        argumentos: [{ nome: 'placa', tipo: 'texto' }]
    },

    // RENAVAM
    renavamValido: {
        tipoRetorno: 'lógico',
        funcao: renavamValido,
        argumentos: [{ nome: 'renavam', tipo: 'texto' }]
    },

    // Inscrição Estadual
    inscricaoEstadualValida: {
        tipoRetorno: 'lógico',
        funcao: inscricaoEstadualValida,
        argumentos: [
            { nome: 'uf', tipo: 'texto' },
            { nome: 'inscricao', tipo: 'texto' }
        ]
    },

    // Conta Bancária
    contaBancariaValida: {
        tipoRetorno: 'lógico',
        funcao: contaBancariaValida,
        argumentos: [{ nome: 'conta', tipo: 'dicionário' }]
    },

    // Processo Jurídico
    processoJuridicoValido: {
        tipoRetorno: 'lógico',
        funcao: processoJuridicoValido,
        argumentos: [{ nome: 'processo', tipo: 'texto' }]
    },
    formatarProcessoJuridico: {
        tipoRetorno: 'texto',
        funcao: formatarProcessoJuridico,
        argumentos: [{ nome: 'processo', tipo: 'texto' }]
    },
    limparProcessoJuridico: {
        tipoRetorno: 'texto',
        funcao: limparProcessoJuridico,
        argumentos: [{ nome: 'processo', tipo: 'texto' }]
    },
    gerarProcessoJuridico: {
        tipoRetorno: 'qualquer',
        funcao: gerarProcessoJuridico,
        argumentos: [{ nome: 'opcoes', tipo: 'dicionário', opcional: true }]
    },

    // Natureza Jurídica
    naturezaJuridicaValida: {
        tipoRetorno: 'lógico',
        funcao: naturezaJuridicaValida,
        argumentos: [{ nome: 'codigo', tipo: 'texto' }]
    },
    formatarNaturezaJuridica: {
        tipoRetorno: 'texto',
        funcao: formatarNaturezaJuridica,
        argumentos: [{ nome: 'codigo', tipo: 'texto' }]
    },
    limparNaturezaJuridica: {
        tipoRetorno: 'texto',
        funcao: limparNaturezaJuridica,
        argumentos: [{ nome: 'codigo', tipo: 'texto' }]
    },
    gerarNaturezaJuridica: {
        tipoRetorno: 'texto',
        funcao: gerarNaturezaJuridica,
        argumentos: []
    },
    obterNaturezasJuridicas: {
        tipoRetorno: 'dicionário',
        funcao: obterNaturezasJuridicas,
        argumentos: []
    },

    // CEP
    cepValido: {
        tipoRetorno: 'lógico',
        funcao: cepValido,
        argumentos: [{ nome: 'cep', tipo: 'texto' }]
    },
    formatarCep: {
        tipoRetorno: 'texto',
        funcao: formatarCep,
        argumentos: [{ nome: 'cep', tipo: 'texto' }]
    },
    limparCep: {
        tipoRetorno: 'texto',
        funcao: limparCep,
        argumentos: [{ nome: 'cep', tipo: 'texto' }]
    },
    gerarCep: {
        tipoRetorno: 'texto',
        funcao: gerarCep,
        argumentos: []
    },
    obterEnderecoPorCep: {
        tipoRetorno: 'qualquer',
        funcao: obterEnderecoPorCep,
        argumentos: [{ nome: 'cep', tipo: 'texto' }]
    },
    obterCepPorEndereco: {
        tipoRetorno: 'vetor',
        funcao: obterCepPorEndereco,
        argumentos: [
            { nome: 'unidadeFederativa', tipo: 'texto' },
            { nome: 'cidade', tipo: 'texto' },
            { nome: 'logradouro', tipo: 'texto' }
        ]
    },

    // Boleto
    boletoValido: {
        tipoRetorno: 'lógico',
        funcao: boletoValido,
        argumentos: [{ nome: 'boleto', tipo: 'texto' }]
    },
    formatarBoleto: {
        tipoRetorno: 'texto',
        funcao: formatarBoleto,
        argumentos: [
            { nome: 'boleto', tipo: 'texto' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    },
    limparBoleto: {
        tipoRetorno: 'texto',
        funcao: limparBoleto,
        argumentos: [{ nome: 'boleto', tipo: 'texto' }]
    },
    gerarBoleto: {
        tipoRetorno: 'texto',
        funcao: gerarBoleto,
        argumentos: []
    },
    obterInfoBoleto: {
        tipoRetorno: 'dicionário',
        funcao: obterInfoBoleto,
        argumentos: [{ nome: 'boleto', tipo: 'texto' }]
    },

    // Moeda
    formatarMoeda: {
        tipoRetorno: 'texto',
        funcao: formatarMoeda,
        argumentos: [
            { nome: 'valor', tipo: 'número' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    },
    analisarMoeda: {
        tipoRetorno: 'número',
        funcao: analisarMoeda,
        argumentos: [{ nome: 'moeda', tipo: 'texto' }]
    },

    // Telefone
    telefoneValido: {
        tipoRetorno: 'lógico',
        funcao: telefoneValido,
        argumentos: [{ nome: 'telefone', tipo: 'texto' }]
    },
    formatarTelefone: {
        tipoRetorno: 'texto',
        funcao: formatarTelefone,
        argumentos: [
            { nome: 'telefone', tipo: 'texto' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    },
    limparTelefone: {
        tipoRetorno: 'texto',
        funcao: limparTelefone,
        argumentos: [{ nome: 'telefone', tipo: 'texto' }]
    },
    celularValido: {
        tipoRetorno: 'lógico',
        funcao: celularValido,
        argumentos: [{ nome: 'telefone', tipo: 'texto' }]
    },
    telefoneFixoValido: {
        tipoRetorno: 'lógico',
        funcao: telefoneFixoValido,
        argumentos: [{ nome: 'telefone', tipo: 'texto' }]
    },
    gerarTelefone: {
        tipoRetorno: 'texto',
        funcao: gerarTelefone,
        argumentos: [{ nome: 'tipo', tipo: 'texto', opcional: true }]
    },

    // E-mail
    emailValido: {
        tipoRetorno: 'lógico',
        funcao: emailValido,
        argumentos: [{ nome: 'email', tipo: 'texto' }]
    },

    // Título de Eleitor
    tituloEleitorValido: {
        tipoRetorno: 'lógico',
        funcao: tituloEleitorValido,
        argumentos: [{ nome: 'titulo', tipo: 'texto' }]
    },
    formatarTituloEleitor: {
        tipoRetorno: 'texto',
        funcao: formatarTituloEleitor,
        argumentos: [{ nome: 'titulo', tipo: 'texto' }]
    },
    limparTituloEleitor: {
        tipoRetorno: 'texto',
        funcao: limparTituloEleitor,
        argumentos: [{ nome: 'titulo', tipo: 'texto' }]
    },
    gerarTituloEleitor: {
        tipoRetorno: 'texto',
        funcao: gerarTituloEleitor,
        argumentos: [{ nome: 'codigoEstado', tipo: 'texto', opcional: true }]
    },

    // Estados e Cidades
    obterEstados: {
        tipoRetorno: 'vetor',
        funcao: obterEstados,
        argumentos: []
    },
    obterCidades: {
        tipoRetorno: 'vetor',
        funcao: obterCidades,
        argumentos: [{ nome: 'codigoEstado', tipo: 'texto', opcional: true }]
    },

    // Municípios
    obterMunicipioPorCodigo: {
        tipoRetorno: 'texto',
        funcao: obterMunicipioPorCodigo,
        argumentos: [{ nome: 'codigo', tipo: 'texto' }]
    },
    obterMunicipioPorNome: {
        tipoRetorno: 'vetor',
        funcao: obterMunicipioPorNome,
        argumentos: [
            { nome: 'nomeMunicipio', tipo: 'texto' },
            { nome: 'uf', tipo: 'texto' }
        ]
    },

    // Feriados
    obterFeriados: {
        tipoRetorno: 'vetor',
        funcao: obterFeriados,
        argumentos: [
            { nome: 'ano', tipo: 'número' },
            { nome: 'codigoEstado', tipo: 'texto', opcional: true }
        ]
    },
    ehFeriado: {
        tipoRetorno: 'lógico',
        funcao: ehFeriado,
        argumentos: [
            { nome: 'data', tipo: 'qualquer' },
            { nome: 'codigoEstado', tipo: 'texto', opcional: true }
        ]
    },

    // Texto
    capitalizar: {
        tipoRetorno: 'texto',
        funcao: capitalizar,
        argumentos: [
            { nome: 'texto', tipo: 'texto' },
            { nome: 'opcoes', tipo: 'dicionário', opcional: true }
        ]
    }
};
