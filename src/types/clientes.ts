import type {
  ICaracteristica,
  IStatusProcessamento,
  StringBoolean,
  ITag,
} from "../types";

export interface IEnderecoEntrega {
  entRazaoSocial?: string;
  entCnpjCpf?: string;
  entEndereco?: string;
  entNumero?: string;
  entComplemento?: string;
  entBairro?: string;
  entCEP?: string;
  entEstado?: string;
  entCidade?: string;
  entSepararEndereco?: StringBoolean;
  entTelefone?: string;
  entIE?: string;
}

export interface IDadosBancarios {
  codigo_banco?: string;
  agencia?: string;
  conta_corrente?: string;
  doc_titular?: string;
  nome_titular?: string;
  /**
   * Definir transferência como forma de pagamento padrão?
   */
  transf_padrao?: StringBoolean;
}

/**
 * Informações de rodapé
 */
export interface Info {
  /**
   * Data da inclusão
   */
  dInc?: string;
  /**
   * Hora da inclusão
   */
  hInc?: string;
  /**
   * Usuário da inclusão
   */
  uInc?: string;
  /**
   * Data da alteração
   */
  dAlt?: string;
  /**
   * Hora da alteração
   */
  hAlt?: string;
  /**
   * Usuário da alteração
   */
  uAlt?: string;
  /**
   * Importado pela API?
   */
  cImpAPI?: StringBoolean;
}

export interface IRecomendacoes {
  numero_parcelas?: string;
  codigo_vendedor?: number;
  email_fatura?: string;
  gerar_boletos?: StringBoolean;
  codigo_transportadora?: number;
  tipo_assinante?: string;
}

export interface IClientesCadastroChave {
  /**
   * Código de Cliente / Fornecedor
   */
  codigo_cliente_omie?: number;
  /**
   * Código de integração com sistemas legados
   */
  codigo_cliente_integracao?: string;
}

/**
 * Cadastro reduzido de clientes
 */
export interface IClientesCadastroResumido extends IClientesCadastroChave {
  razao_social: string;
  nome_fantasia: string;
  cnpj_cpf: string;
}

export interface IClientesCadastro {
  codigo_cliente_omie?: number;
  codigo_cliente_integracao: string;
  razao_social: string;
  cnpj_cpf?: string;
  nome_fantasia: string;
  telefone1_ddd?: string;
  telefone1_numero?: string;
  contato?: string;
  endereco?: string;
  endereco_numero?: string;
  bairro?: string;
  complemento?: string;
  estado?: string;
  cidade?: string;
  cep?: string;
  codigo_pais?: string;
  separar_endereco?: StringBoolean;
  pesquisar_cep?: StringBoolean;
  telefone2_ddd?: string;
  telefone2_numero?: string;
  fax_ddd?: string;
  fax_numero?: string;
  email?: string;
  homepage?: string;
  inscricao_estadual?: string;
  inscricao_municipal?: string;
  inscricao_suframa?: string;
  optante_simples_nacional?: StringBoolean;
  tipo_atividade?: string;
  cnae?: string;
  produtor_rural?: StringBoolean;
  contribuinte?: StringBoolean;
  observacao?: string;
  obs_detalhadas?: string;
  recomendacao_atraso?: string;
  tags?: ITag[];
  pessoa_fisica?: StringBoolean;
  exterior?: StringBoolean;
  logradouro?: string;
  importado_api?: StringBoolean;
  bloqueado?: StringBoolean;
  cidade_ibge?: string;
  valor_limite_credito?: number;
  bloquear_faturamento?: StringBoolean;
  recomendacoes?: IRecomendacoes;
  enderecoEntrega?: IEnderecoEntrega;
  nif?: string;
  documento_exterior?: string;
  inativo?: StringBoolean;
  dadosBancarios?: IDadosBancarios;
  caracteristicas?: ICaracteristica;
  enviar_anexos?: StringBoolean;
  info?: Info;
  bloquear_exclusao?: StringBoolean;
}

export interface IClientesFiltro extends IClientesCadastroChave {
  cnpj_cpf?: string;
  razao_social?: string;
  nome_fantasia?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  contato?: string;
  email?: string;
  homepage?: string;
  inscricao_municipal?: string;
  inscricao_estadual?: string;
  inscricao_suframa?: string;
  pessoa_fisica?: StringBoolean;
  optante_simples_nacional?: StringBoolean;
  inativo?: StringBoolean;
  tags?: ITag[];
}

export interface IClientesListRequest {
  pagina: number;
  registros_por_pagina: number;
  /**
   * Exibir apenas os registros gerados pela API?
   */
  apenas_importado_api?: StringBoolean;
  /**
   * Ordem de exibição dos dados
   *
   * @default `Código`
   */
  ordenar_por?: string;
  /**
   * A lista será apresentada em ordem decrescente?
   */
  ordem_decrescente?: StringBoolean;
  /**
   * Filtrar os registros a partir de uma data
   */
  filtrar_por_data_de?: string;
  /**
   * Filtrar os registros até uma data
   */
  filtrar_por_data_ate?: string;
  /**
   * Filtro por hora a apartir de
   */
  filtrar_por_hora_de?: string;
  /**
   * Filtro por hora até
   */
  filtrar_por_hora_ate?: string;
  /**
   * Filtrar apenas os registros incluídos?
   */
  filtrar_apenas_inclusao?: StringBoolean;
  /**
   * Filtrar apenas os registros alterados?
   */
  filtrar_apenas_alteracao?: StringBoolean;
  /**
   * Filtrar cadastro de clientes
   */
  clientesFiltro?: IClientesFiltro;
  /**
   * Lista de Códigos para filtro de clientes
   */
  clientesPorCodigo?: IClientesPorCodigo[];
  /**
   * Exibir as caracteristicas do cliente?
   */
  exibir_caracteristicas?: StringBoolean;
  /**
   * Exibir as observações do cliente?
   */
  exibir_obs?: StringBoolean;
}

export type IClientesListResponse = {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
  clientes_cadastro_resumido: IClientesCadastroResumido[];
};

export interface IClientesListFullResponse {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
  clientes_cadastro_resumido: IClientesCadastro[];
}

export interface IClientesPorCodigo extends IClientesCadastroChave {}

/**
 * Status de retorno do cadastro de clientes
 */
export interface IClientesStatus
  extends IClientesCadastroChave,
    IStatusProcessamento {}
