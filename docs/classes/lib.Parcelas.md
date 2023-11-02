[Omie SDK](../README.md) / [lib](../modules/lib.md) / Parcelas

# Class: Parcelas

[lib](../modules/lib.md).Parcelas

**`See`**

[https://app.omie.com.br/api/v1/geral/parcelas/](https://app.omie.com.br/api/v1/geral/parcelas/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`Parcelas`**

## Table of contents

### Constructors

- [constructor](lib.Parcelas.md#constructor)

### Methods

- [listar](lib.Parcelas.md#listar)

## Constructors

### constructor

• **new Parcelas**(`credentials?`)

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

▸ **listar**(`data`): `Promise`<[`IParcelaListarResponse`](../interfaces/types.IParcelaListarResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IParcelaListarRequest`](../interfaces/types.IParcelaListarRequest.md) |

#### Returns

`Promise`<[`IParcelaListarResponse`](../interfaces/types.IParcelaListarResponse.md)\>

#### Defined in

lib/parcelas.ts:16
