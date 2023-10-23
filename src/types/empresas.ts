import type { StringBoolean } from ".";

export interface IEmpresasCadastroChave {
  codigo_empresa: number;
  codigo_empresa_integracao?: string;
}

export interface IEmpresasCadastro extends IEmpresasCadastroChave {
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  logradouro: string;
  endereco: string;
  endereco_numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  codigo_pais: string;
  /**
   * Data de Adesão ao Simples Nacional
   */
  data_adesao_sn: string;
  telefone1_ddd: string;
  telefone1_numero: string;
  telefone2_ddd: string;
  telefone2_numero: string;
  fax_ddd: string;
  fax_numero: string;
  email: string;
  website: string;
  /**
   * Código do CNAE - Fiscal
   */
  cnae: string;
  /**
   * Código do CNAE - Municipal
   */
  cnae_municipal: string;
  inscricao_estadual: string;
  inscricao_municipal: string;
  inscricao_suframa: string;
  /**
   * Regime Tributário?
   */
  regime_tributario: StringBoolean;
  /**
   * Indica que a empresa está ativa
   */
  inativa: StringBoolean;
  /**
   * Gera Nota Fiscal de Serviço Eletrônica para o Município
   */
  gera_nfse: StringBoolean;
  /**
   * Indica que a empresa é optante pelo Simples Nacional
   */
  optante_simples_nacional: StringBoolean;
  /**
   * SPED PIS/COFINS - Código Indicador da Incidência Tributária no Período
   */
  sped_codigo_incidencia_tributaria: StringBoolean;
  /**
   * SPED PIS/COFINS - Código indicador do Tipo de Contribuição Apurada no Período
   */
  sped_codigo_tipo_contribuicao: StringBoolean;
  /**
   * SPED - CPF do Contador Responsável pela Empresa
   */
  sped_cpf_contador: string;
  /**
   * SPED - CRC do Contador Responsável pela Empresa
   */
  sped_crc_contador: string;
  /**
   * SPED - Indica se a Empresa utiliza Contabilidade Terceirizada
   */
  sped_usa_contabilidade_terceirizada: StringBoolean;
  /**
   * SPED - Email do Contador da Empresa
   */
  sped_email_contador: string;
  /**
   * SPED PIS/COFINS - Código Código Indicador de Método de Apropriação de Créditos Comuns
   */
  sped_codigo_indicador_apropriacao_credito: StringBoolean;
  /**
   * SPED PIS/COFINS - Código Indicador de Tipo de Atividade Preponderante
   */
  sped_codigo_tipo_atividade: StringBoolean;
  /**
   * SPED PIS/COFINS - Indicador da Natureza da Pessoa Jurídica
   */
  sped_natureza_pessoa_juridica: string;
  /**
   * SPED PIS/COFINS - Código Indicador do Critério de Escrituração e Apuração
   */
  sped_codigo_criterio_escrituracao: StringBoolean;
  /**
   * SPED - Indica se o Local do Registro é Junta Comercial
   */
  sped_junta_comercial: StringBoolean;
  /**
   * SPED - Indica se a empresa é Matriz
   */
  sped_matriz: StringBoolean;
  /**
   * SPED - Nome do Contador Responsável pela Empresa
   */
  sped_nome_contador: string;
  /**
   * 	SPED - Número do Registro da Empresa na Junta Comercial ou no Cartório
   */
  sped_registro_junta_comercial: string;
  /**
   * EFD - Indica se a atividade é industrial ou equiparado a indústria
   */
  efd_atividade_industrial: StringBoolean;
  /**
   * Perfil de Apresentação do Arquivo Fiscal - EFD
   */
  efd_perfil_arquivo_fiscal: StringBoolean;
  /**
   * SPED / ECD - Código cadastral na Instituição Responsável
   */
  ecd_codigo_cadastral: string;
  /**
   * 	SPED / ECD - Código da Instituição Responsável pela Administração do Cadastro
   */
  ecd_codigo_instituicao_responsavel: string;
  /**
   * Gera Nota Fiscal Eletrônica Âmbito Nacional (DANFE)?
   */
  gera_nfe: StringBoolean;
  /**
   * Data de inclusão
   */
  inclusao_data: string;
  /**
   * Hora de inclusão
   */
  inclusao_hora: string;
  /**
   * Data de alteração
   */
  alteracao_data: string;
  /**
   * Hora de alteração
   */
  alteracao_hora: string;
  /**
   * Registro bloqueado pela API?
   */
  bloqueado: StringBoolean;
  /**
   * Importado da API
   */
  importado_api: StringBoolean;
  /**
   * Sincronizar Estoque de Forma Análitica (Venda a Venda)
   */
  pdv_sincr_analitica: StringBoolean;
  /**
   * Data de Adesão do Simples Nacional
   */
  dt_adesao_simpnac: string;
  /**
   * Inscrição Estadual para ST
   */
  ie_st: string;
  /**
   * Identificação do Profissional (contador, advogado, etc) para o Recibo de Prestação de Serviço
   */
  recibo_ide: string;
  /**
   * Gerar Recibo de Prestação de Serviço?
   */
  gera_recibo: StringBoolean;
  /**
   * Tipo (modelo) do Recibo de Prestação de Serviço
   */
  recibo_tipo: string;
  /**
   * Indica se o Recibo de Prestação de Serviço será gerado em 2 vias
   */
  recibo_num_vias: StringBoolean;
  /**
   * Identificador do Código de Segurança do Contribuinte em ambiente homologação
   */
  csc_id_homologacao: string;
  /**
   * Código de Segurança do Contribuinte em ambiente de homologação
   */
  csc_homologacao: string;
  /**
   * Identificador do Código de Segurança do Contribuinte em ambiente produção
   */
  csc_id_producao: string;
  /**
   * Código de Segurança do Contribuinte em ambiente de produção
   */
  csc_producao: string;
}

export interface IEmpresasConsultar
  extends Pick<IEmpresasCadastroChave, "codigo_empresa"> {}

export interface IEmpresasListarRequest {
  pagina: number;
  registros_por_pagina: number;
}

export interface IEmpresasListarResponse {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
  empresas_cadastro: IEmpresasCadastro[];
}

export interface IEmpresasStatus extends IEmpresasCadastroChave {
  codigo_status: "0" | string;
  descricao_status: string;
}
