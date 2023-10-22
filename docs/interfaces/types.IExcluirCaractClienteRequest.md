[Omie SDK](../README.md) / [types](../modules/types.md) / IExcluirCaractClienteRequest

# Interface: IExcluirCaractClienteRequest

[types](../modules/types.md).IExcluirCaractClienteRequest

## Hierarchy

- [`IClientesCadastroChave`](types.IClientesCadastroChave.md)

- `Pick`<[`ICaracteristicas`](types.ICaracteristicas.md), ``"campo"``\>

  ↳ **`IExcluirCaractClienteRequest`**

## Table of contents

### Properties

- [campo](types.IExcluirCaractClienteRequest.md#campo)
- [codigo\_cliente\_integracao](types.IExcluirCaractClienteRequest.md#codigo_cliente_integracao)
- [codigo\_cliente\_omie](types.IExcluirCaractClienteRequest.md#codigo_cliente_omie)

## Properties

### campo

• **campo**: `string`

#### Inherited from

Pick.campo

#### Defined in

types/caracteristicas.ts:9

___

### codigo\_cliente\_integracao

• `Optional` **codigo\_cliente\_integracao**: `string`

Código de integração com sistemas legados

#### Inherited from

[IClientesCadastroChave](types.IClientesCadastroChave.md).[codigo_cliente_integracao](types.IClientesCadastroChave.md#codigo_cliente_integracao)

#### Defined in

types/clientes.ts:86

___

### codigo\_cliente\_omie

• `Optional` **codigo\_cliente\_omie**: `number`

Código de Cliente / Fornecedor

#### Inherited from

[IClientesCadastroChave](types.IClientesCadastroChave.md).[codigo_cliente_omie](types.IClientesCadastroChave.md#codigo_cliente_omie)

#### Defined in

types/clientes.ts:82
