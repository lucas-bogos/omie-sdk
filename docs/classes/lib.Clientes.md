[Omie SDK](../README.md) / [lib](../modules/lib.md) / Clientes

# Class: Clientes

[lib](../modules/lib.md).Clientes

Gerenciamento do cadastro de clientes e fornecedores

**`See`**

[https://app.omie.com.br/api/v1/geral/clientes/](https://app.omie.com.br/api/v1/geral/clientes/)

## Hierarchy

- [`Api`](index.Api.md)

  ↳ **`Clientes`**

## Table of contents

### Constructors

- [constructor](lib.Clientes.md#constructor)

### Methods

- [alterar](lib.Clientes.md#alterar)
- [associarCodigoIntegracao](lib.Clientes.md#associarcodigointegracao)
- [consultar](lib.Clientes.md#consultar)
- [excluir](lib.Clientes.md#excluir)
- [incluir](lib.Clientes.md#incluir)
- [listar](lib.Clientes.md#listar)
- [listarResumido](lib.Clientes.md#listarresumido)
- [upsert](lib.Clientes.md#upsert)
- [upsertPorCpfCnpj](lib.Clientes.md#upsertporcpfcnpj)

## Constructors

### constructor

• **new Clientes**(`credentials?`)

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

▸ **alterar**(`data`): `Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesCadastro`](../interfaces/types.IClientesCadastro.md) |

#### Returns

`Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Defined in

[lib/clientes.ts:64](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L64)

___

### associarCodigoIntegracao

▸ **associarCodigoIntegracao**(`data`): `Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesCadastroChave`](../interfaces/types.IClientesCadastroChave.md) |

#### Returns

`Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Defined in

[lib/clientes.ts:58](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L58)

___

### consultar

▸ **consultar**(`data`): `Promise`<[`IClientesCadastro`](../interfaces/types.IClientesCadastro.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesCadastroChave`](../interfaces/types.IClientesCadastroChave.md) |

#### Returns

`Promise`<[`IClientesCadastro`](../interfaces/types.IClientesCadastro.md)\>

#### Defined in

[lib/clientes.ts:34](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L34)

___

### excluir

▸ **excluir**(`data`): `Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesCadastroChave`](../interfaces/types.IClientesCadastroChave.md) |

#### Returns

`Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Defined in

[lib/clientes.ts:54](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L54)

___

### incluir

▸ **incluir**(`data`): `Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesCadastro`](../interfaces/types.IClientesCadastro.md) |

#### Returns

`Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Defined in

[lib/clientes.ts:40](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L40)

___

### listar

▸ **listar**(`data`): `Promise`<[`IClientesListFullResponse`](../interfaces/types.IClientesListFullResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesListRequest`](../interfaces/types.IClientesListRequest.md) |

#### Returns

`Promise`<[`IClientesListFullResponse`](../interfaces/types.IClientesListFullResponse.md)\>

#### Defined in

[lib/clientes.ts:22](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L22)

___

### listarResumido

▸ **listarResumido**(`data`): `Promise`<[`IClientesListResponse`](../modules/types.md#iclienteslistresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesListRequest`](../interfaces/types.IClientesListRequest.md) |

#### Returns

`Promise`<[`IClientesListResponse`](../modules/types.md#iclienteslistresponse)\>

#### Defined in

[lib/clientes.ts:28](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L28)

___

### upsert

▸ **upsert**(`data`): `Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesCadastro`](../interfaces/types.IClientesCadastro.md) |

#### Returns

`Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Defined in

[lib/clientes.ts:44](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L44)

___

### upsertPorCpfCnpj

▸ **upsertPorCpfCnpj**(`data`): `Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientesCadastro`](../interfaces/types.IClientesCadastro.md) |

#### Returns

`Promise`<[`IClientesStatus`](../interfaces/types.IClientesStatus.md)\>

#### Defined in

[lib/clientes.ts:48](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/lib/clientes.ts#L48)
