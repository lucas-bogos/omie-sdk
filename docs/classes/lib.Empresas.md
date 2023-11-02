[Omie SDK](../README.md) / [lib](../modules/lib.md) / Empresas

# Class: Empresas

[lib](../modules/lib.md).Empresas

**`See`**

[https://app.omie.com.br/api/v1/geral/empresas/](https://app.omie.com.br/api/v1/geral/empresas/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`Empresas`**

## Table of contents

### Constructors

- [constructor](lib.Empresas.md#constructor)

### Methods

- [consultar](lib.Empresas.md#consultar)
- [listar](lib.Empresas.md#listar)

## Constructors

### constructor

• **new Empresas**(`credentials?`)

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

▸ **consultar**(`data`): `Promise`<[`IEmpresasCadastro`](../interfaces/types.IEmpresasCadastro.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IEmpresasConsultar`](../interfaces/types.IEmpresasConsultar.md) |

#### Returns

`Promise`<[`IEmpresasCadastro`](../interfaces/types.IEmpresasCadastro.md)\>

#### Defined in

[lib/empresas.ts:18](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/empresas.ts#L18)

___

### listar

▸ **listar**(`data`): `Promise`<[`IEmpresasListarResponse`](../interfaces/types.IEmpresasListarResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IEmpresasListarRequest`](../interfaces/types.IEmpresasListarRequest.md) |

#### Returns

`Promise`<[`IEmpresasListarResponse`](../interfaces/types.IEmpresasListarResponse.md)\>

#### Defined in

[lib/empresas.ts:22](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/empresas.ts#L22)
