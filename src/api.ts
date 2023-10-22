import { HOST } from ".";

/**
 * Api Client para comunicação com a Omie
 *
 * @abstract
 * @class Api
 * @see {@link https://developer.omie.com.br/service-list/}
 */
export abstract class Api {
  /**
   * URL base da API
   *
   * @private
   */
  private _baseURL!: string;

  /**
   * Credenciais para autenticação na API
   *
   * @private
   */
  private _credentials?: ApiCredentials;

  /**
   * @public
   *
   * @param credentials Credenciais para autenticação na API
   *
   * @return `Api`
   */
  public constructor(credentials?: ApiCredentials) {
    this._baseURL = HOST;
    this._credentials = credentials ?? {
      key: process.env?.OMIE_APP_KEY as string,
      secret: process.env?.OMIE_APP_SECRET as string,
    };
  }

  /**
   * Faz uma requisição na API da Omie
   *
   * @protected
   *
   * @param endpoint Recurso em que deseja fazer a requisição
   * @param action Nome da ação para a chamada na Omie
   * @param data O que deseja enviar de dados
   *
   * @return `Promise<AxiosResponse<T>>`
   */
  protected async call(
    endpoint: string,
    action: string,
    data?: unknown
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const _payload: ApiRequestPayload = this.makePayload(action, data);

    try {
      const request = await fetch(`${this._baseURL}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(_payload),
      });

      return await request.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error?.message);

        throw new Error("Não foi possível completar a requisição");
      }
    }
  }

  /**
   * @private
   *
   * @param action Nome da ação para a chamada na Omie
   * @param data O que deseja enviar de dados
   *
   * @return `ApiRequestPayload`
   */
  private makePayload(action: string, data = {}): ApiRequestPayload {
    return {
      call: action,
      app_key: this._credentials?.key,
      app_secret: this._credentials?.secret,
      param: [{ ...data }],
    };
  }
}

/**
 * Chave e segredo da aplicação Omie
 */
export type ApiCredentials = {
  key: string;
  secret: string;
};

/**
 * Corpo da requisição base para chamadas API
 */
export type ApiRequestPayload = {
  call: string;
  app_key?: string;
  app_secret?: string;
  param?: Record<string, unknown>[];
};
