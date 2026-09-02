export interface InfoBoleto {
    // Nota: não usar o nome "valor" aqui. O interpretador de Delégua trata
    // qualquer objeto nativo com uma propriedade própria chamada "valor" como
    // se fosse sua estrutura interna de variável e o desembrulha automaticamente
    // (ver `resolverValor` em @designliquido/delegua), quebrando o acesso aos
    // demais campos quando este objeto é indexado em um programa Delégua.
    valorBoleto: number;
    dataVencimento: Date;
    codigoBanco: string;
}
