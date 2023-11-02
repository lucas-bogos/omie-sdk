[Omie SDK](../README.md) / [types](../modules/types.md) / IClientesListRequest

# Interface: IClientesListRequest

[types](../modules/types.md).IClientesListRequest

## Table of contents

### Properties

- [apenas\_importado\_api](types.IClientesListRequest.md#apenas_importado_api)
- [clientesFiltro](types.IClientesListRequest.md#clientesfiltro)
- [clientesPorCodigo](types.IClientesListRequest.md#clientesporcodigo)
- [exibir\_caracteristicas](types.IClientesListRequest.md#exibir_caracteristicas)
- [exibir\_obs](types.IClientesListRequest.md#exibir_obs)
- [filtrar\_apenas\_alteracao](types.IClientesListRequest.md#filtrar_apenas_alteracao)
- [filtrar\_apenas\_inclusao](types.IClientesListRequest.md#filtrar_apenas_inclusao)
- [filtrar\_por\_data\_ate](types.IClientesListRequest.md#filtrar_por_data_ate)
- [filtrar\_por\_data\_de](types.IClientesListRequest.md#filtrar_por_data_de)
- [filtrar\_por\_hora\_ate](types.IClientesListRequest.md#filtrar_por_hora_ate)
- [filtrar\_por\_hora\_de](types.IClientesListRequest.md#filtrar_por_hora_de)
- [ordem\_decrescente](types.IClientesListRequest.md#ordem_decrescente)
- [ordenar\_por](types.IClientesListRequest.md#ordenar_por)
- [pagina](types.IClientesListRequest.md#pagina)
- [registros\_por\_pagina](types.IClientesListRequest.md#registros_por_pagina)

## Properties

### apenas\_importado\_api

• `Optional` **apenas\_importado\_api**: [`StringBoolean`](../modules/types.md#stringboolean)

Exibir apenas os registros gerados pela API?

#### Defined in

[types/clientes.ts:182](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L182)

___

### clientesFiltro

• `Optional` **clientesFiltro**: [`IClientesFiltro`](types.IClientesFiltro.md)

Filtrar cadastro de clientes

#### Defined in

[types/clientes.ts:220](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L220)

___

### clientesPorCodigo

• `Optional` **clientesPorCodigo**: [`IClientesPorCodigo`](types.IClientesPorCodigo.md)[]

Lista de Códigos para filtro de clientes

#### Defined in

[types/clientes.ts:224](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L224)

___

### exibir\_caracteristicas

• `Optional` **exibir\_caracteristicas**: [`StringBoolean`](../modules/types.md#stringboolean)

Exibir as caracteristicas do cliente?

#### Defined in

[types/clientes.ts:228](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L228)

___

### exibir\_obs

• `Optional` **exibir\_obs**: [`StringBoolean`](../modules/types.md#stringboolean)

Exibir as observações do cliente?

#### Defined in

[types/clientes.ts:232](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L232)

___

### filtrar\_apenas\_alteracao

• `Optional` **filtrar\_apenas\_alteracao**: [`StringBoolean`](../modules/types.md#stringboolean)

Filtrar apenas os registros alterados?

#### Defined in

[types/clientes.ts:216](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L216)

___

### filtrar\_apenas\_inclusao

• `Optional` **filtrar\_apenas\_inclusao**: [`StringBoolean`](../modules/types.md#stringboolean)

Filtrar apenas os registros incluídos?

#### Defined in

[types/clientes.ts:212](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L212)

___

### filtrar\_por\_data\_ate

• `Optional` **filtrar\_por\_data\_ate**: `string`

Filtrar os registros até uma data

#### Defined in

[types/clientes.ts:200](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L200)

___

### filtrar\_por\_data\_de

• `Optional` **filtrar\_por\_data\_de**: `string`

Filtrar os registros a partir de uma data

#### Defined in

[types/clientes.ts:196](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L196)

___

### filtrar\_por\_hora\_ate

• `Optional` **filtrar\_por\_hora\_ate**: `string`

Filtro por hora até

#### Defined in

[types/clientes.ts:208](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L208)

___

### filtrar\_por\_hora\_de

• `Optional` **filtrar\_por\_hora\_de**: `string`

Filtro por hora a apartir de

#### Defined in

[types/clientes.ts:204](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L204)

___

### ordem\_decrescente

• `Optional` **ordem\_decrescente**: [`StringBoolean`](../modules/types.md#stringboolean)

A lista será apresentada em ordem decrescente?

#### Defined in

[types/clientes.ts:192](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L192)

___

### ordenar\_por

• `Optional` **ordenar\_por**: `string`

Ordem de exibição dos dados

**`Default`**

`Código`

#### Defined in

[types/clientes.ts:188](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L188)

___

### pagina

• **pagina**: `number`

#### Defined in

[types/clientes.ts:177](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L177)

___

### registros\_por\_pagina

• **registros\_por\_pagina**: `number`

#### Defined in

[types/clientes.ts:178](https://github.com/lucas-bogos/omie-sdk/blob/fa631c8/src/types/clientes.ts#L178)
