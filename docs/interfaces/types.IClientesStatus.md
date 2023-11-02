[Omie SDK](../README.md) / [types](../modules/types.md) / IClientesStatus

# Interface: IClientesStatus

[types](../modules/types.md).IClientesStatus

Status de retorno do cadastro de clientes

## Hierarchy

- [`IClientesCadastroChave`](types.IClientesCadastroChave.md)

- [`IStatusProcessamento`](types.IStatusProcessamento.md)

  ↳ **`IClientesStatus`**

## Table of contents

### Properties

- [codigo\_cliente\_integracao](types.IClientesStatus.md#codigo_cliente_integracao)
- [codigo\_cliente\_omie](types.IClientesStatus.md#codigo_cliente_omie)
- [codigo\_status](types.IClientesStatus.md#codigo_status)
- [descricao\_status](types.IClientesStatus.md#descricao_status)

## Properties

### codigo\_cliente\_integracao

• `Optional` **codigo\_cliente\_integracao**: `string`

Código de integração com sistemas legados

#### Inherited from

[IClientesCadastroChave](types.IClientesCadastroChave.md).[codigo_cliente_integracao](types.IClientesCadastroChave.md#codigo_cliente_integracao)

#### Defined in

[types/clientes.ts:86](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/clientes.ts#L86)

___

### codigo\_cliente\_omie

• `Optional` **codigo\_cliente\_omie**: `number`

Código de Cliente / Fornecedor

#### Inherited from

[IClientesCadastroChave](types.IClientesCadastroChave.md).[codigo_cliente_omie](types.IClientesCadastroChave.md#codigo_cliente_omie)

#### Defined in

[types/clientes.ts:82](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/clientes.ts#L82)

___

### codigo\_status

• **codigo\_status**: `string`

#### Inherited from

[IStatusProcessamento](types.IStatusProcessamento.md).[codigo_status](types.IStatusProcessamento.md#codigo_status)

#### Defined in

[types/caracteristicas.ts:4](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/caracteristicas.ts#L4)

___

### descricao\_status

• **descricao\_status**: `string`

#### Inherited from

[IStatusProcessamento](types.IStatusProcessamento.md).[descricao_status](types.IStatusProcessamento.md#descricao_status)

#### Defined in

[types/caracteristicas.ts:5](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/caracteristicas.ts#L5)
