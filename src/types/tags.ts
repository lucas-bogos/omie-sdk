/**
 * Tags do Cliente ou Fornecedor
 */
export interface ITag {
  nCodTag?: number;
  tag: string;
}

export interface IStatusTag {
  cCodStatus: string;
  cDesStatus: string;
}

export interface IClientesTagsChave {
  nCodCliente?: number;
  cCodIntCliente?: string;
}

export interface IClientesTagExcluirRequest extends IClientesTagsChave {
  tag: ITag[];
}

export interface IClientesTagExcluirResponse
  extends IClientesTagsChave,
    IStatusTag {}

export interface IClientesTagExcluirTodasRequest extends IClientesTagsChave {}

export interface IClientesTagExcluirTodasResponse
  extends IClientesTagsChave,
    IStatusTag {}

export interface IClientesTagIncluirRequest extends IClientesTagsChave {
  tags: ITag[];
}

export interface IClientesTagIncluirResponse
  extends IClientesTagsChave,
    IStatusTag {
  tags: ITag[];
}

export interface IClientesTagListarRequest extends IClientesTagsChave {}

export interface IClientesTagListarResponse extends IClientesTagsChave {
  tags: ITag[];
}
