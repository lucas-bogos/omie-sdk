[Omie SDK](../README.md) / [types](../modules/types.md) / IDepartamento

# Interface: IDepartamento

[types](../modules/types.md).IDepartamento

## Hierarchy

- [`IDepartamentoChave`](types.IDepartamentoChave.md)

  ↳ **`IDepartamento`**

## Table of contents

### Properties

- [codigo](types.IDepartamento.md#codigo)
- [descricao](types.IDepartamento.md#descricao)
- [estrutura](types.IDepartamento.md#estrutura)
- [inativo](types.IDepartamento.md#inativo)
- [nivel\_totalizador](types.IDepartamento.md#nivel_totalizador)

## Properties

### codigo

• **codigo**: `string`

Código do Departamento / Centro de Custo

#### Inherited from

[IDepartamentoChave](types.IDepartamentoChave.md).[codigo](types.IDepartamentoChave.md#codigo)

#### Defined in

[types/departamentos.ts:7](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/departamentos.ts#L7)

___

### descricao

• **descricao**: `string`

Nome do Departamento / Centro de Custo

#### Inherited from

[IDepartamentoChave](types.IDepartamentoChave.md).[descricao](types.IDepartamentoChave.md#descricao)

#### Defined in

[types/departamentos.ts:11](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/departamentos.ts#L11)

___

### estrutura

• **estrutura**: `string`

Utilizado para estruturação dos Departamentos no modo "diagrama"

#### Defined in

[types/departamentos.ts:18](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/departamentos.ts#L18)

___

### inativo

• **inativo**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que o Departamento / Centro de Custo está inativo

#### Defined in

[types/departamentos.ts:22](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/departamentos.ts#L22)

___

### nivel\_totalizador

• **nivel\_totalizador**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que o Departamento / Centro de Custo é um nível totalizador

#### Defined in

[types/departamentos.ts:26](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/departamentos.ts#L26)
