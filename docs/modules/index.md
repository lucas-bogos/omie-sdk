[Omie SDK](../README.md) / index

# Module: index

## Table of contents

### Classes

- [Api](../classes/index.Api.md)
- [OmieSdk](../classes/index.OmieSdk.md)

### Type Aliases

- [ApiCredentials](index.md#apicredentials)
- [ApiRequestPayload](index.md#apirequestpayload)

### Variables

- [API\_VERSION](index.md#api_version)
- [HOST](index.md#host)
- [HOSTNAME](index.md#hostname)

## Type Aliases

### ApiCredentials

Ƭ **ApiCredentials**: `Object`

Chave e segredo da aplicação Omie

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `secret` | `string` |

#### Defined in

[api.ts:99](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/api.ts#L99)

___

### ApiRequestPayload

Ƭ **ApiRequestPayload**: `Object`

Corpo da requisição base para chamadas API

#### Type declaration

| Name | Type |
| :------ | :------ |
| `app_key?` | `string` |
| `app_secret?` | `string` |
| `call` | `string` |
| `param?` | `Record`<`string`, `unknown`\>[] |

#### Defined in

[api.ts:107](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/api.ts#L107)

## Variables

### API\_VERSION

• `Const` **API\_VERSION**: ``"v1"``

#### Defined in

[constants.ts:1](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/constants.ts#L1)

___

### HOST

• `Const` **HOST**: ``"https://app.omie.com.br/api/v1"``

#### Defined in

[constants.ts:3](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/constants.ts#L3)

___

### HOSTNAME

• `Const` **HOSTNAME**: ``"app.omie.com.br"``

#### Defined in

[constants.ts:2](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/constants.ts#L2)
