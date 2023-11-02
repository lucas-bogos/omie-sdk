[Omie SDK](../README.md) / [lib](../modules/lib.md) / Projetos

# Class: Projetos

[lib](../modules/lib.md).Projetos

Gerenciamento do cadastro de projetos

**`See`**

[https://app.omie.com.br/api/v1/geral/projetos/](https://app.omie.com.br/api/v1/geral/projetos/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`Projetos`**

## Table of contents

### Constructors

- [constructor](lib.Projetos.md#constructor)

### Methods

- [consultar](lib.Projetos.md#consultar)
- [excluir](lib.Projetos.md#excluir)
- [incluir](lib.Projetos.md#incluir)
- [listar](lib.Projetos.md#listar)
- [upsert](lib.Projetos.md#upsert)

## Constructors

### constructor

• **new Projetos**(`credentials?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`ApiCredentials`](../modules/index.md#apicredentials) | Credenciais para autenticação na API |

#### Inherited from

[Api](index.Api.md).[constructor](index.Api.md#constructor)

#### Defined in

[api.ts:32](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/api.ts#L32)

## Methods

### consultar

▸ **consultar**(`data`): `Promise`<[`IProjetosConsultarResponse`](../interfaces/types.IProjetosConsultarResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IProjetosConsultarRequest`](../interfaces/types.IProjetosConsultarRequest.md) |

#### Returns

`Promise`<[`IProjetosConsultarResponse`](../interfaces/types.IProjetosConsultarResponse.md)\>

#### Defined in

[lib/projetos.ts:26](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/projetos.ts#L26)

___

### excluir

▸ **excluir**(`data`): `Promise`<[`IProjetosExcluirResponse`](../interfaces/types.IProjetosExcluirResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IProjetosExcluirRequest`](../interfaces/types.IProjetosExcluirRequest.md) |

#### Returns

`Promise`<[`IProjetosExcluirResponse`](../interfaces/types.IProjetosExcluirResponse.md)\>

#### Defined in

[lib/projetos.ts:32](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/projetos.ts#L32)

___

### incluir

▸ **incluir**(`data`): `Promise`<[`IProjetosIncluirResponse`](../interfaces/types.IProjetosIncluirResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IProjetosIncluirRequest`](../interfaces/types.IProjetosIncluirRequest.md) |

#### Returns

`Promise`<[`IProjetosIncluirResponse`](../interfaces/types.IProjetosIncluirResponse.md)\>

#### Defined in

[lib/projetos.ts:38](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/projetos.ts#L38)

___

### listar

▸ **listar**(`data`): `Promise`<[`IProjetosListarResponse`](../interfaces/types.IProjetosListarResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IProjetosListarRequest`](../interfaces/types.IProjetosListarRequest.md) |

#### Returns

`Promise`<[`IProjetosListarResponse`](../interfaces/types.IProjetosListarResponse.md)\>

#### Defined in

[lib/projetos.ts:44](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/projetos.ts#L44)

___

### upsert

▸ **upsert**(`data`): `Promise`<[`IProjetosUpsertResponse`](../interfaces/types.IProjetosUpsertResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IProjetosUpsertRequest`](../interfaces/types.IProjetosUpsertRequest.md) |

#### Returns

`Promise`<[`IProjetosUpsertResponse`](../interfaces/types.IProjetosUpsertResponse.md)\>

#### Defined in

[lib/projetos.ts:50](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/projetos.ts#L50)
