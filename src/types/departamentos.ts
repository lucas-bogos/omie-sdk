import type { StringBoolean } from ".";

export interface IDepartamentoChave {
  /**
   * Código do Departamento / Centro de Custo
   */
  codigo: string;
  /**
   * Nome do Departamento / Centro de Custo
   */
  descricao: string;
}

export interface IDepartamento extends IDepartamentoChave {
  /**
   * Utilizado para estruturação dos Departamentos no modo "diagrama"
   */
  estrutura: string;
  /**
   * Indica que o Departamento / Centro de Custo está inativo
   */
  inativo: StringBoolean;
  /**
   * Indica que o Departamento / Centro de Custo é um nível totalizador
   */
  nivel_totalizador: StringBoolean;
}

export interface IStatusDepartamento {
  /**
   * Código do status do processamento
   */
  cCodStatus: string;
  /**
   * Descrição do status do processamento
   */
  cDesStatus: string;
}

export interface IDepartamentoAlterarRequest extends IDepartamentoChave {}

export interface IDepartamentoAlterarResponse extends IStatusDepartamento {}

export interface IDepartamentoConsultar
  extends Pick<IDepartamentoChave, "codigo"> {}

export interface IDepartamentoExcluirRequest {
  codigo: string;
}

export interface IDepartamentoExcluirResponse
  extends IStatusDepartamento,
    IDepartamentoChave {}

export interface IDepartamentoIncluirRequest extends IDepartamentoChave {}

export interface IDepartamentoIncluirResponse
  extends IStatusDepartamento,
    IDepartamentoChave {}

export interface IDepartamentoListarRequest {
  pagina: number;
  registros_por_pagina: number;
}

export interface IDepartamentoListarResponse {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
  departamentos: IDepartamento[];
}
