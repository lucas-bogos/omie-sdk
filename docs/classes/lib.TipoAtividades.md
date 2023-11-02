[Omie SDK](../README.md) / [lib](../modules/lib.md) / TipoAtividades

# Class: TipoAtividades

[lib](../modules/lib.md).TipoAtividades

**`See`**

[https://app.omie.com.br/api/v1/geral/tpativ/](https://app.omie.com.br/api/v1/geral/tpativ/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`TipoAtividades`**

## Table of contents

### Constructors

- [constructor](lib.TipoAtividades.md#constructor)

### Methods

- [listar](lib.TipoAtividades.md#listar)

## Constructors

### constructor

• **new TipoAtividades**(`credentials?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`ApiCredentials`](../modules/index.md#apicredentials) | Credenciais para autenticação na API |

#### Inherited from

[Api](index.Api.md).[constructor](index.Api.md#constructor)

#### Defined in

[api.ts:32](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/api.ts#L32)

## Methods

### listar

▸ **listar**(`data`): `Promise`<[`ITipoAtividadeListarResponse`](../interfaces/types.ITipoAtividadeListarResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ITipoAtividadeListarRequest`](../interfaces/types.ITipoAtividadeListarRequest.md) |

#### Returns

`Promise`<[`ITipoAtividadeListarResponse`](../interfaces/types.ITipoAtividadeListarResponse.md)\>

#### Defined in

lib/tipo-atividades.ts:16
