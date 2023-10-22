import { Api } from "../api";

import type {
  IAlterarCaractClienteRequest,
  IAlterarCaractClienteResponse,
  IConsultarCaractClienteRequest,
  IConsultarCaractClienteResponse,
  IExcluirCaractClienteRequest,
  IExcluirCaractClienteResponse,
  IExcluirTodasCaractClienteRequest,
  IExcluirTodasCaractClienteResponse,
  IIncluirCaractClienteRequest,
  IIncluirCaractClienteResponse,
} from "../types";

/**
 * Gerenciamento de caracteristicas do cliente
 *
 * @public
 * @class Caracteristicas
 * @extends Api
 *
 * @see {@link https://app.omie.com.br/api/v1/geral/clientescaract/}
 */
export class Caracteristicas extends Api {
  public async incluir(
    data: IIncluirCaractClienteRequest
  ): Promise<IIncluirCaractClienteResponse> {
    return await this.call(
      "/geral/clientescaract/",
      "IncluirCaractCliente",
      data
    );
  }

  public async consultar(
    data: IConsultarCaractClienteRequest
  ): Promise<IConsultarCaractClienteResponse> {
    return await this.call(
      "/geral/clientescaract/",
      "ConsultarCaractCliente",
      data
    );
  }

  public async alterar(
    data: IAlterarCaractClienteRequest
  ): Promise<IAlterarCaractClienteResponse> {
    return await this.call(
      "/geral/clientescaract/",
      "AlterarCaractCliente",
      data
    );
  }

  public async excluirUma(
    data: IExcluirCaractClienteRequest
  ): Promise<IExcluirCaractClienteResponse> {
    return await this.call(
      "/geral/clientescaract/",
      "ExcluirCaractCliente",
      data
    );
  }

  public async excluirTodas(
    data: IExcluirTodasCaractClienteRequest
  ): Promise<IExcluirTodasCaractClienteResponse> {
    return await this.call(
      "/geral/clientescaract/",
      "ExcluirTodasCaractCliente",
      data
    );
  }
}
