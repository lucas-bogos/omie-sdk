import type { StringBoolean } from ".";

export interface IParcela {
  /**
   * Código da parcela
   */
  nCodigo: string;
  /**
   * Descrição da parcela
   */
  cDescricao: string;
  /**
   * Número de parcelas
   */
  nParcelas: number;
}

export interface IParcelaListarRequest {
  pagina: number;
  registros_por_pagina: number;
  apenas_importado_api?: StringBoolean;
  ordenar_por?: string;
  ordem_decrescente?: StringBoolean;
}

export interface IParcelaListarResponse {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
  cadastros: IParcela[];
}
