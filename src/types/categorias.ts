import type { StringBoolean } from ".";

export interface ICategoriaCadastroChave {
  codigo: string;
  descricao: string;
}

export interface ICategoriaCadastro {
  /**
   * Descrição Padrão para a Categoria
   */
  descricao_padrao: string;
  /**
   * Indica que a conta está inativo
   */
  conta_inativa: StringBoolean;
  /**
   * Indica que a conta financeira é definida pelo usuário
   */
  definida_pelo_usuario: StringBoolean;
  /**
   * ID da Conta Contábil
   */
  id_conta_contabil: number;
  /**
   * Tag para Conta Contábil
   */
  tag_conta_contabil: string;
  /**
   * Indica que é conta de despesa
   */
  conta_despesa: StringBoolean;
  /**
   * Indica que a Categoria não deve ser exibida em ComboBox
   */
  nao_exibir: StringBoolean;
  /**
   * Descrição da Natureza da conta
   */
  natureza: string;
  /**
   * Indica que é conta de receita
   */
  conta_receita: StringBoolean;
  /**
   * Indica que é totalizadora de conta
   */
  totalizadora: StringBoolean;
  /**
   * Indica que é categoria de transferência
   */
  transferencia: StringBoolean;
  /**
   * Código no DRE
   */
  codigo_dre: string;
  /**
   * Código da Categoria de Nivel Superior
   */
  categoria_superior: string;
  /**
   * Detalhes da conta do DRE
   */
  dadosDRE: IDadosDRE;
}

export interface ICategoriaConsultar
  extends Pick<ICategoriaCadastroChave, "codigo"> {}

export interface ICategoriaListRequest {
  pagina: number;
  registros_por_pagina: number;
  filtrar_apenas_ativo: StringBoolean;
  filtrar_por_tipo: TipoCategoria;
}

export interface ICategoriaListFullResponse {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
  categoria_cadastro: ICategoriaCadastro[];
}

export interface IDadosDRE {
  /**
   * Código da Conta do DRE
   */
  codigoDRE: string;
  /**
   * Descrição da Conta do DRE
   */
  descricaoDRE: string;
  /**
   * Indica se a Conta está marcada para não exibir no DRE
   */
  naoExibirDRE: StringBoolean;
  /**
   * Nível da Conta da DRE
   */
  nivelDRE: number;
  /**
   * Sinal da Conta para o DRE
   */
  sinalDRE: StringBoolean;
  /**
   * Indica se a Conta do DRE é Totalizadora
   */
  totalizaDRE: StringBoolean;
}

/**
 * R - Receita
 * D - Despesa
 * T - Transferência
 *
 * Retorna apenas as categorias ativas, não totalizadoras e que estejam configuradas para serem exibidas.
 */
export type TipoCategoria = "R" | "D" | "T";
