export interface ITipoAtividade {
  /**
   * Código do Tipo de Atividade da Empresa
   */
  cCodigo: string;
  /**
   * Descrição do Tipo de Atividade da Empresa
   */
  cDescricao: string;
}

export interface ITipoAtividadeListarRequest {
  filtrar_por_codigo?: string;
  filtrar_por_descricao?: string;
}

export interface ITipoAtividadeListarResponse {
  /**
   * Lista de Tipo de Atividade da Empresa
   */
  lista_tipos_atividade: ITipoAtividade[];
}
