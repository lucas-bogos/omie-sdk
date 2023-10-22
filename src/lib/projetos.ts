import { Api } from "../api";

import type {
  IProjetosConsultarRequest,
  IProjetosConsultarResponse,
  IProjetosExcluirRequest,
  IProjetosExcluirResponse,
  IProjetosIncluirRequest,
  IProjetosIncluirResponse,
  IProjetosListarRequest,
  IProjetosListarResponse,
  IProjetosUpsertRequest,
  IProjetosUpsertResponse,
} from "../types";

/**
 * Gerenciamento do cadastro de projetos
 *
 * @public
 * @class Projetos
 * @extends Api
 *
 * @see {@link https://app.omie.com.br/api/v1/geral/projetos/}
 */
export class Projetos extends Api {
  public async consultar(
    data: IProjetosConsultarRequest
  ): Promise<IProjetosConsultarResponse> {
    return await this.call("/geral/projetos/", "ConsultarProjeto", data);
  }

  public async excluir(
    data: IProjetosExcluirRequest
  ): Promise<IProjetosExcluirResponse> {
    return await this.call("/geral/projetos/", "ExcluirProjeto", data);
  }

  public async incluir(
    data: IProjetosIncluirRequest
  ): Promise<IProjetosIncluirResponse> {
    return await this.call("/geral/projetos/", "IncluirProjeto", data);
  }

  public async listar(
    data: IProjetosListarRequest
  ): Promise<IProjetosListarResponse> {
    return await this.call("/geral/projetos/", "ListarProjetos", data);
  }

  public async upsert(
    data: IProjetosUpsertRequest
  ): Promise<IProjetosUpsertResponse> {
    return await this.call("/geral/projetos/", "UpsertProjeto", data);
  }
}
