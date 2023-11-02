import { Api } from "..";

import type {
  ITipoAtividadeListarRequest,
  ITipoAtividadeListarResponse,
} from "../types/tipo-atividades";

/**
 * @public
 * @class TipoAtividades
 * @extends Api
 *
 * @see {@link https://app.omie.com.br/api/v1/geral/tpativ/}
 */
export class TipoAtividades extends Api {
  public async listar(
    data: ITipoAtividadeListarRequest
  ): Promise<ITipoAtividadeListarResponse> {
    return await this.call("/geral/tpativ/", "ListarTipoAtiv", {
      filtrar_por_codigo: data.filtrar_por_codigo ?? "",
      filtrar_por_descricao: data.filtrar_por_descricao ?? "",
    });
  }
}
