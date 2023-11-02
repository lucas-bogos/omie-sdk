import { Api } from "..";

import type {
  IDepartamento,
  IDepartamentoAlterarRequest,
  IDepartamentoAlterarResponse,
  IDepartamentoConsultar,
  IDepartamentoExcluirRequest,
  IDepartamentoExcluirResponse,
  IDepartamentoIncluirRequest,
  IDepartamentoIncluirResponse,
  IDepartamentoListarRequest,
  IDepartamentoListarResponse,
} from "../types/departamentos";

/**
 * Gerenciamento do cadastro de departamentos
 *
 * @public
 * @class Clientes
 * @extends Api
 *
 * @see {@link https://app.omie.com.br/api/v1/geral/departamentos/}
 */
export class Departamentos extends Api {
  public async incluir(
    data: IDepartamentoIncluirRequest
  ): Promise<IDepartamentoIncluirResponse> {
    return await this.call(
      "/geral/departamentos/",
      "IncluirDepartamento",
      data
    );
  }

  public async alterar(
    data: IDepartamentoAlterarRequest
  ): Promise<IDepartamentoAlterarResponse> {
    return await this.call(
      "/geral/departamentos/",
      "AlterarDepartamento",
      data
    );
  }

  public async consultar(data: IDepartamentoConsultar): Promise<IDepartamento> {
    return await this.call(
      "/geral/departamentos/",
      "ConsultarDepartamento",
      data
    );
  }

  public async excluir(
    data: IDepartamentoExcluirRequest
  ): Promise<IDepartamentoExcluirResponse> {
    return await this.call(
      "/geral/departamentos/",
      "ExcluirDepartamento",
      data
    );
  }

  public async listar(
    data: IDepartamentoListarRequest
  ): Promise<IDepartamentoListarResponse> {
    return await this.call(
      "/geral/departamentos/",
      "ListarDepartamentos",
      data
    );
  }
}
