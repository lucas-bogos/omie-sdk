[Omie SDK](../README.md) / [lib](../modules/lib.md) / Departamentos

# Class: Departamentos

[lib](../modules/lib.md).Departamentos

Gerenciamento do cadastro de departamentos

**`See`**

[https://app.omie.com.br/api/v1/geral/departamentos/](https://app.omie.com.br/api/v1/geral/departamentos/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`Departamentos`**

## Table of contents

### Constructors

- [constructor](lib.Departamentos.md#constructor)

### Methods

- [alterar](lib.Departamentos.md#alterar)
- [consultar](lib.Departamentos.md#consultar)
- [excluir](lib.Departamentos.md#excluir)
- [incluir](lib.Departamentos.md#incluir)
- [listar](lib.Departamentos.md#listar)

## Constructors

### constructor

• **new Departamentos**(`credentials?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials?` | [`ApiCredentials`](../modules/index.md#apicredentials) | Credenciais para autenticação na API |

#### Inherited from

[Api](index.Api.md).[constructor](index.Api.md#constructor)

#### Defined in

[api.ts:32](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/api.ts#L32)

## Methods

### alterar

▸ **alterar**(`data`): `Promise`<[`IDepartamentoAlterarResponse`](../interfaces/types.IDepartamentoAlterarResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IDepartamentoAlterarRequest`](../interfaces/types.IDepartamentoAlterarRequest.md) |

#### Returns

`Promise`<[`IDepartamentoAlterarResponse`](../interfaces/types.IDepartamentoAlterarResponse.md)\>

#### Defined in

[lib/departamentos.ts:36](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/departamentos.ts#L36)

___

### consultar

▸ **consultar**(`data`): `Promise`<[`IDepartamento`](../interfaces/types.IDepartamento.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IDepartamentoConsultar`](../interfaces/types.IDepartamentoConsultar.md) |

#### Returns

`Promise`<[`IDepartamento`](../interfaces/types.IDepartamento.md)\>

#### Defined in

[lib/departamentos.ts:46](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/departamentos.ts#L46)

___

### excluir

▸ **excluir**(`data`): `Promise`<[`IDepartamentoExcluirResponse`](../interfaces/types.IDepartamentoExcluirResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IDepartamentoExcluirRequest`](../interfaces/types.IDepartamentoExcluirRequest.md) |

#### Returns

`Promise`<[`IDepartamentoExcluirResponse`](../interfaces/types.IDepartamentoExcluirResponse.md)\>

#### Defined in

[lib/departamentos.ts:54](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/departamentos.ts#L54)

___

### incluir

▸ **incluir**(`data`): `Promise`<[`IDepartamentoIncluirResponse`](../interfaces/types.IDepartamentoIncluirResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IDepartamentoIncluirRequest`](../interfaces/types.IDepartamentoIncluirRequest.md) |

#### Returns

`Promise`<[`IDepartamentoIncluirResponse`](../interfaces/types.IDepartamentoIncluirResponse.md)\>

#### Defined in

[lib/departamentos.ts:26](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/departamentos.ts#L26)

___

### listar

▸ **listar**(`data`): `Promise`<[`IDepartamentoListarResponse`](../interfaces/types.IDepartamentoListarResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IDepartamentoListarRequest`](../interfaces/types.IDepartamentoListarRequest.md) |

#### Returns

`Promise`<[`IDepartamentoListarResponse`](../interfaces/types.IDepartamentoListarResponse.md)\>

#### Defined in

[lib/departamentos.ts:64](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/departamentos.ts#L64)
