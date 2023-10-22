[Omie SDK](../README.md) / [lib](../modules/lib.md) / Tags

# Class: Tags

[lib](../modules/lib.md).Tags

**`See`**

[https://app.omie.com.br/api/v1/geral/clientetag/](https://app.omie.com.br/api/v1/geral/clientetag/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`Tags`**

## Table of contents

### Constructors

- [constructor](lib.Tags.md#constructor)

### Methods

- [excluir](lib.Tags.md#excluir)
- [excluirTodas](lib.Tags.md#excluirtodas)
- [incluir](lib.Tags.md#incluir)
- [listar](lib.Tags.md#listar)

## Constructors

### constructor

• **new Tags**(`credentials?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`ApiCredentials`](../modules/index.md#apicredentials) | Credenciais para autenticação na API |

#### Inherited from

[Api](index.Api.md).[constructor](index.Api.md#constructor)

#### Defined in

api.ts:32

## Methods

### excluir

▸ **excluir**(`data`): `Promise`<[`IClientesTagExcluirResponse`](../interfaces/types.IClientesTagExcluirResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesTagExcluirRequest`](../interfaces/types.IClientesTagExcluirRequest.md) |

#### Returns

`Promise`<[`IClientesTagExcluirResponse`](../interfaces/types.IClientesTagExcluirResponse.md)\>

#### Defined in

lib/tags.ts:33

___

### excluirTodas

▸ **excluirTodas**(`data`): `Promise`<[`IClientesTagExcluirTodasResponse`](../interfaces/types.IClientesTagExcluirTodasResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesTagExcluirTodasRequest`](../interfaces/types.IClientesTagExcluirTodasRequest.md) |

#### Returns

`Promise`<[`IClientesTagExcluirTodasResponse`](../interfaces/types.IClientesTagExcluirTodasResponse.md)\>

#### Defined in

lib/tags.ts:39

___

### incluir

▸ **incluir**(`data`): `Promise`<[`IClientesTagIncluirResponse`](../interfaces/types.IClientesTagIncluirResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesTagIncluirRequest`](../interfaces/types.IClientesTagIncluirRequest.md) |

#### Returns

`Promise`<[`IClientesTagIncluirResponse`](../interfaces/types.IClientesTagIncluirResponse.md)\>

#### Defined in

lib/tags.ts:21

___

### listar

▸ **listar**(`data`): `Promise`<[`IClientesTagListarResponse`](../interfaces/types.IClientesTagListarResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesTagListarRequest`](../interfaces/types.IClientesTagListarRequest.md) |

#### Returns

`Promise`<[`IClientesTagListarResponse`](../interfaces/types.IClientesTagListarResponse.md)\>

#### Defined in

lib/tags.ts:27
