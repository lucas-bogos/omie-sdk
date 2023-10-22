[Omie SDK](../README.md) / [types](../modules/types.md) / IIncluirCaractClienteResponse

# Interface: IIncluirCaractClienteResponse

[types](../modules/types.md).IIncluirCaractClienteResponse

## Hierarchy

- [`IClientesCadastroChave`](types.IClientesCadastroChave.md)

- [`IStatusProcessamento`](types.IStatusProcessamento.md)

  ↳ **`IIncluirCaractClienteResponse`**

## Table of contents

### Properties

- [codigo\_cliente\_integracao](types.IIncluirCaractClienteResponse.md#codigo_cliente_integracao)
- [codigo\_cliente\_omie](types.IIncluirCaractClienteResponse.md#codigo_cliente_omie)
- [codigo\_status](types.IIncluirCaractClienteResponse.md#codigo_status)
- [descricao\_status](types.IIncluirCaractClienteResponse.md#descricao_status)

## Properties

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

___

### codigo\_status

• **codigo\_status**: `string`

#### Inherited from

[IStatusProcessamento](types.IStatusProcessamento.md).[codigo_status](types.IStatusProcessamento.md#codigo_status)

#### Defined in

types/caracteristicas.ts:4

___

### descricao\_status

• **descricao\_status**: `string`

#### Inherited from

[IStatusProcessamento](types.IStatusProcessamento.md).[descricao_status](types.IStatusProcessamento.md#descricao_status)

#### Defined in

types/caracteristicas.ts:5