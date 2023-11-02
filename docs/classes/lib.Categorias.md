[Omie SDK](../README.md) / [lib](../modules/lib.md) / Categorias

# Class: Categorias

[lib](../modules/lib.md).Categorias

Gerenciamento de categorias

**`See`**

[https://app.omie.com.br/api/v1/geral/categorias/](https://app.omie.com.br/api/v1/geral/categorias/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`Categorias`**

## Table of contents

### Constructors

- [constructor](lib.Categorias.md#constructor)

### Methods

- [consultar](lib.Categorias.md#consultar)
- [listar](lib.Categorias.md#listar)

## Constructors

### constructor

• **new Categorias**(`credentials?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`ApiCredentials`](../modules/index.md#apicredentials) | Credenciais para autenticação na API |

#### Inherited from

[Api](index.Api.md).[constructor](index.Api.md#constructor)

#### Defined in

[api.ts:32](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/api.ts#L32)

## Methods

### consultar

▸ **consultar**(`data`): `Promise`<[`ICategoriaCadastro`](../interfaces/types.ICategoriaCadastro.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ICategoriaConsultar`](../interfaces/types.ICategoriaConsultar.md) |

#### Returns

`Promise`<[`ICategoriaCadastro`](../interfaces/types.ICategoriaCadastro.md)\>

#### Defined in

[lib/categorias.ts:26](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/categorias.ts#L26)

___

### listar

▸ **listar**(`data`): `Promise`<[`ICategoriaListFullResponse`](../interfaces/types.ICategoriaListFullResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ICategoriaListRequest`](../interfaces/types.ICategoriaListRequest.md) |

#### Returns

`Promise`<[`ICategoriaListFullResponse`](../interfaces/types.ICategoriaListFullResponse.md)\>

#### Defined in

[lib/categorias.ts:20](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/categorias.ts#L20)
