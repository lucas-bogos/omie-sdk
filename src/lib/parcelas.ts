import { Api } from "..";

import type {
  IParcelaListarRequest,
  IParcelaListarResponse,
} from "../types/parcelas";

/**
 * @public
 * @class Parcelas
 * @extends Api
 *
 * @see {@link https://app.omie.com.br/api/v1/geral/parcelas/}
 */
export class Parcelas extends Api {
  public async listar(
    data: IParcelaListarRequest
  ): Promise<IParcelaListarResponse> {
    return await this.call("/geral/parcelas/", "ListarParcelas", data);
  }
}
