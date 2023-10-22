import type { StringBoolean } from "../types";

export interface IStatusProjetos {
  status: string;
  descricao: string;
}

export interface IProjetosCadastroChave {
  codigo?: number;
  codInt?: string;
}

export interface ICadastroProjetos extends IProjetosCadastroChave {
  nome: string;
  inativo: StringBoolean;
}

export interface IProjetosAlterarRequest extends ICadastroProjetos {}

export interface IProjetosAlterarResponse
  extends IProjetosCadastroChave,
    IStatusProjetos {}

export interface IProjetosConsultarRequest extends IProjetosCadastroChave {}

export interface IProjetosConsultarResponse extends ICadastroProjetos {}

export interface IProjetosExcluirRequest extends IProjetosCadastroChave {}

export interface IProjetosExcluirResponse extends IProjetosAlterarResponse {}

export interface IProjetosIncluirRequest
  extends Omit<ICadastroProjetos, "codigo"> {}

export interface IProjetosIncluirResponse
  extends IProjetosCadastroChave,
    IStatusProjetos {}

export interface IProjetosListarRequest extends ICadastroProjetos {
  /**
   * Número da página listada
   */
  pagina: number;
  /**
   * Número de registros retornados
   */
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
   * Filtrar apenas os registros incluídos?
   */
  filtrar_apenas_inclusao?: StringBoolean;
  /**
   * Filtrar apenas os registros alterados?
   */
  filtrar_apenas_alteracao?: StringBoolean;
  /**
   * Nome do projeto
   */
  nome_projeto?: string;
}

export interface IProjetosListarResponse {
  /**
   * Número da página listada
   */
  pagina: number;
  /**
   * Total de páginas encontradas
   */
  total_de_paginas: number;
  /**
   * Número de registros retornados
   */
  registros: number;
  /**
   * Total de registros encontrados
   */
  total_de_registros?: number;
  /**
   * Projetos cadastrados
   */
  cadastro?: ICadastroProjetos[];
}

export interface IProjetosUpsertRequest extends ICadastroProjetos {}

export interface IProjetosUpsertResponse
  extends IProjetosCadastroChave,
    IStatusProjetos {}
