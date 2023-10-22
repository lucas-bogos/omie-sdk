/**
 * Tags do Cliente ou Fornecedor
 */
export interface ITag {
  nCodTag?: number;
  tag: string;
}

export interface IStatusTags {
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
    IStatusTags {}

export interface IClientesTagExcluirTodasRequest extends IClientesTagsChave {}

export interface IClientesTagExcluirTodasResponse
  extends IClientesTagsChave,
    IStatusTags {}

export interface IClientesTagIncluirRequest extends IClientesTagsChave {
  tags: ITag[];
}

export interface IClientesTagIncluirResponse
  extends IClientesTagsChave,
    IStatusTags {
  tags: ITag[];
}

export interface IClientesTagListarRequest extends IClientesTagsChave {}

export interface IClientesTagListarResponse extends IClientesTagsChave {
  tags: ITag[];
}
