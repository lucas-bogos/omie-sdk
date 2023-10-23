import { Api } from "..";

import type {
  IEmpresasCadastro,
  IEmpresasConsultar,
  IEmpresasListarRequest,
  IEmpresasListarResponse,
} from "../types";

/**
 * @public
 * @class Empresas
 * @extends Api
 *
 * @see {@link https://app.omie.com.br/api/v1/geral/empresas/}
 */
export class Empresas extends Api {
  public async consultar(data: IEmpresasConsultar): Promise<IEmpresasCadastro> {
    return await this.call("/geral/empresas/", "ConsultarEmpresa", data);
  }

  public async listar(
    data: IEmpresasListarRequest
  ): Promise<IEmpresasListarResponse> {
    return await this.call("/geral/empresas/", "ListarEmpresas", data);
  }
}
