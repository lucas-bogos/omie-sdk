import { Api } from "../api";

import type {
  IClientesCadastro,
  IClientesCadastroChave,
  IClientesListRequest,
  IClientesListResponse,
  IClientesListFullResponse,
  IClientesStatus,
} from "../types";

/**
 * Gerenciamento do cadastro de clientes e fornecedores
 *
 * @public
 * @class Clientes
 * @extends Api
 *
 * @see {@link https://app.omie.com.br/api/v1/geral/clientes/}
 */
export class Clientes extends Api {
  public async listar(
    data: IClientesListRequest
  ): Promise<IClientesListFullResponse> {
    return await this.call("/geral/clientes/", "ListarClientes", data);
  }

  public async listarResumido(
    data: IClientesListRequest
  ): Promise<IClientesListResponse> {
    return await this.call("/geral/clientes/", "ListarClientesResumido", data);
  }

  public async consultar(
    data: IClientesCadastroChave
  ): Promise<IClientesCadastro> {
    return await this.call("/geral/clientes/", "ConsultarCliente", data);
  }

  public async incluir(data: IClientesCadastro): Promise<IClientesStatus> {
    return await this.call("/geral/clientes/", "IncluirCliente", data);
  }

  public async upsert(data: IClientesCadastro): Promise<IClientesStatus> {
    return await this.call("/geral/clientes/", "UpsertCliente", data);
  }

  public async upsertPorCpfCnpj(
    data: IClientesCadastro
  ): Promise<IClientesStatus> {
    return await this.call("/geral/clientes/", "UpsertClienteCpfCnpj", data);
  }

  public async excluir(data: IClientesCadastroChave): Promise<IClientesStatus> {
    return await this.call("/geral/clientes/", "ExcluirCliente", data);
  }

  public async associarCodigoIntegracao(
    data: IClientesCadastroChave
  ): Promise<IClientesStatus> {
    return await this.call("/geral/clientes/", "AssociarCodIntCliente", data);
  }

  public async alterar(data: IClientesCadastro): Promise<IClientesStatus> {
    return await this.call("/geral/clientes/", "AlterarCliente", data);
  }
}
