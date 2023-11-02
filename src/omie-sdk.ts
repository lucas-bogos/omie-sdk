import "dotenv/config";
import {
  Clientes,
  Caracteristicas,
  Tags,
  Projetos,
  Empresas,
  Departamentos,
  Categorias,
  Parcelas,
  TipoAtividades,
} from "./lib";

import type { ApiCredentials } from "./api";

export class OmieSdk {
  private _credentials?: ApiCredentials;

  public constructor(credentials?: ApiCredentials) {
    this._credentials = credentials;
  }

  public readonly clientes = new Clientes(this._credentials);

  public readonly caracteristicas = new Caracteristicas(this._credentials);

  public readonly tags = new Tags(this._credentials);

  public readonly projetos = new Projetos(this._credentials);

  public readonly empresas = new Empresas(this._credentials);

  public readonly departamentos = new Departamentos(this._credentials);

  public readonly categorias = new Categorias(this._credentials);

  public readonly parcelas = new Parcelas(this._credentials);

  public readonly tipoAtividades = new TipoAtividades(this._credentials);
}

export default OmieSdk;
