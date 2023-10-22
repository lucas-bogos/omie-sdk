import type { IClientesCadastroChave } from "./clientes";

export interface IStatusProcessamento {
  codigo_status: string;
  descricao_status: string;
}

export interface ICaracteristicas {
  campo: string;
  conteudo: string;
}

export interface IAlterarCaractClienteRequest
  extends IClientesCadastroChave,
    ICaracteristicas {}

export interface IAlterarCaractClienteResponse
  extends IClientesCadastroChave,
    IStatusProcessamento {}

export interface IConsultarCaractClienteRequest
  extends IClientesCadastroChave {}

export interface IConsultarCaractClienteResponse
  extends IClientesCadastroChave {
  caracteristicas: ICaracteristicas[];
}

export interface IExcluirCaractClienteRequest
  extends IClientesCadastroChave,
    Pick<ICaracteristicas, "campo"> {}

export interface IExcluirCaractClienteResponse
  extends IClientesCadastroChave,
    IStatusProcessamento {}

export interface IExcluirTodasCaractClienteRequest
  extends IClientesCadastroChave {}

export interface IExcluirTodasCaractClienteResponse
  extends IClientesCadastroChave,
    IStatusProcessamento {}

export interface IIncluirCaractClienteRequest
  extends IClientesCadastroChave,
    ICaracteristicas {}

export interface IIncluirCaractClienteResponse
  extends IClientesCadastroChave,
    IStatusProcessamento {}
