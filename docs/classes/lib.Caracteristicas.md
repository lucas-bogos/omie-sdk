[Omie SDK](../README.md) / [lib](../modules/lib.md) / Caracteristicas

# Class: Caracteristicas

[lib](../modules/lib.md).Caracteristicas

Gerenciamento de caracteristicas do cliente

**`See`**

[https://app.omie.com.br/api/v1/geral/clientescaract/](https://app.omie.com.br/api/v1/geral/clientescaract/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`Caracteristicas`**

## Table of contents

### Constructors

- [constructor](lib.Caracteristicas.md#constructor)

### Methods

- [alterar](lib.Caracteristicas.md#alterar)
- [consultar](lib.Caracteristicas.md#consultar)
- [excluirTodas](lib.Caracteristicas.md#excluirtodas)
- [excluirUma](lib.Caracteristicas.md#excluiruma)
- [incluir](lib.Caracteristicas.md#incluir)

## Constructors

### constructor

• **new Caracteristicas**(`credentials?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`ApiCredentials`](../modules/index.md#apicredentials) | Credenciais para autenticação na API |

#### Inherited from

[Api](index.Api.md).[constructor](index.Api.md#constructor)

#### Defined in

[api.ts:32](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/api.ts#L32)

## Methods

### alterar

▸ **alterar**(`data`): `Promise`<[`IAlterarCaractClienteResponse`](../interfaces/types.IAlterarCaractClienteResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IAlterarCaractClienteRequest`](../interfaces/types.IAlterarCaractClienteRequest.md) |

#### Returns

`Promise`<[`IAlterarCaractClienteResponse`](../interfaces/types.IAlterarCaractClienteResponse.md)\>

#### Defined in

[lib/caracteristicas.ts:46](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/caracteristicas.ts#L46)

___

### consultar

▸ **consultar**(`data`): `Promise`<[`IConsultarCaractClienteResponse`](../interfaces/types.IConsultarCaractClienteResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IConsultarCaractClienteRequest`](../interfaces/types.IConsultarCaractClienteRequest.md) |

#### Returns

`Promise`<[`IConsultarCaractClienteResponse`](../interfaces/types.IConsultarCaractClienteResponse.md)\>

#### Defined in

[lib/caracteristicas.ts:36](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/caracteristicas.ts#L36)

___

### excluirTodas

▸ **excluirTodas**(`data`): `Promise`<[`IExcluirTodasCaractClienteResponse`](../interfaces/types.IExcluirTodasCaractClienteResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IExcluirTodasCaractClienteRequest`](../interfaces/types.IExcluirTodasCaractClienteRequest.md) |

#### Returns

`Promise`<[`IExcluirTodasCaractClienteResponse`](../interfaces/types.IExcluirTodasCaractClienteResponse.md)\>

#### Defined in

[lib/caracteristicas.ts:66](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/caracteristicas.ts#L66)

___

### excluirUma

▸ **excluirUma**(`data`): `Promise`<[`IExcluirCaractClienteResponse`](../interfaces/types.IExcluirCaractClienteResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IExcluirCaractClienteRequest`](../interfaces/types.IExcluirCaractClienteRequest.md) |

#### Returns

`Promise`<[`IExcluirCaractClienteResponse`](../interfaces/types.IExcluirCaractClienteResponse.md)\>

#### Defined in

[lib/caracteristicas.ts:56](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/caracteristicas.ts#L56)

___

### incluir

▸ **incluir**(`data`): `Promise`<[`IIncluirCaractClienteResponse`](../interfaces/types.IIncluirCaractClienteResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IIncluirCaractClienteRequest`](../interfaces/types.IIncluirCaractClienteRequest.md) |

#### Returns

`Promise`<[`IIncluirCaractClienteResponse`](../interfaces/types.IIncluirCaractClienteResponse.md)\>

#### Defined in

[lib/caracteristicas.ts:26](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/lib/caracteristicas.ts#L26)
