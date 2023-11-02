import { Api } from "../api";

import type {
  ICategoriaCadastro,
  ICategoriaConsultar,
  ICategoriaListFullResponse,
  ICategoriaListRequest,
} from "../types";

/**
 * Gerenciamento de categorias
 *
 * @public
 * @class Categorias
 * @extends Api
 *
 * @see {@link https://app.omie.com.br/api/v1/geral/categorias/}
 */
export class Categorias extends Api {
  public async listar(
    data: ICategoriaListRequest
  ): Promise<ICategoriaListFullResponse> {
    return await this.call("/geral/categorias/", "ListarCategorias", data);
  }

  public async consultar(
    data: ICategoriaConsultar
  ): Promise<ICategoriaCadastro> {
    return await this.call("/geral/categorias/", "ConsultarCategoria", data);
  }
}
