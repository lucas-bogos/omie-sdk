import { Api } from "../api";

import type {
  IClientesTagExcluirRequest,
  IClientesTagExcluirResponse,
  IClientesTagExcluirTodasRequest,
  IClientesTagExcluirTodasResponse,
  IClientesTagIncluirRequest,
  IClientesTagIncluirResponse,
  IClientesTagListarRequest,
  IClientesTagListarResponse,
} from "../types";

/**
 * @public
 * @class Tags
 * @extends Api
 * @see {@link https://app.omie.com.br/api/v1/geral/clientetag/}
 */
export class Tags extends Api {
  public async incluir(
    data: IClientesTagIncluirRequest
  ): Promise<IClientesTagIncluirResponse> {
    return await this.call("/geral/clientetag/", "IncluirTags", data);
  }

  public async listar(
    data: IClientesTagListarRequest
  ): Promise<IClientesTagListarResponse> {
    return await this.call("/geral/clientetag/", "ExcluirTodas", data);
  }

  public async excluir(
    data: IClientesTagExcluirRequest
  ): Promise<IClientesTagExcluirResponse> {
    return await this.call("/geral/clientetag/", "ExcluirTags", data);
  }

  public async excluirTodas(
    data: IClientesTagExcluirTodasRequest
  ): Promise<IClientesTagExcluirTodasResponse> {
    return await this.call("/geral/clientetag/", "ExcluirTodas", data);
  }
}
