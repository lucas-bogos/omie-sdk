[Omie SDK](../README.md) / [types](../modules/types.md) / IProjetosListarRequest

# Interface: IProjetosListarRequest

[types](../modules/types.md).IProjetosListarRequest

## Hierarchy

- [`ICadastroProjetos`](types.ICadastroProjetos.md)

  ↳ **`IProjetosListarRequest`**

## Table of contents

### Properties

- [apenas\_importado\_api](types.IProjetosListarRequest.md#apenas_importado_api)
- [codInt](types.IProjetosListarRequest.md#codint)
- [codigo](types.IProjetosListarRequest.md#codigo)
- [filtrar\_apenas\_alteracao](types.IProjetosListarRequest.md#filtrar_apenas_alteracao)
- [filtrar\_apenas\_inclusao](types.IProjetosListarRequest.md#filtrar_apenas_inclusao)
- [filtrar\_por\_data\_ate](types.IProjetosListarRequest.md#filtrar_por_data_ate)
- [filtrar\_por\_data\_de](types.IProjetosListarRequest.md#filtrar_por_data_de)
- [inativo](types.IProjetosListarRequest.md#inativo)
- [nome](types.IProjetosListarRequest.md#nome)
- [nome\_projeto](types.IProjetosListarRequest.md#nome_projeto)
- [ordem\_decrescente](types.IProjetosListarRequest.md#ordem_decrescente)
- [ordenar\_por](types.IProjetosListarRequest.md#ordenar_por)
- [pagina](types.IProjetosListarRequest.md#pagina)
- [registros\_por\_pagina](types.IProjetosListarRequest.md#registros_por_pagina)

## Properties

### apenas\_importado\_api

• `Optional` **apenas\_importado\_api**: [`StringBoolean`](../modules/types.md#stringboolean)

Exibir apenas os registros gerados pela API?

#### Defined in

types/projetos.ts:51

___

### codInt

• `Optional` **codInt**: `string`

#### Inherited from

[ICadastroProjetos](types.ICadastroProjetos.md).[codInt](types.ICadastroProjetos.md#codint)

#### Defined in

types/projetos.ts:10

___

### codigo

• `Optional` **codigo**: `number`

#### Inherited from

[ICadastroProjetos](types.ICadastroProjetos.md).[codigo](types.ICadastroProjetos.md#codigo)

#### Defined in

types/projetos.ts:9

___

### filtrar\_apenas\_alteracao

• `Optional` **filtrar\_apenas\_alteracao**: [`StringBoolean`](../modules/types.md#stringboolean)

Filtrar apenas os registros alterados?

#### Defined in

types/projetos.ts:77

___

### filtrar\_apenas\_inclusao

• `Optional` **filtrar\_apenas\_inclusao**: [`StringBoolean`](../modules/types.md#stringboolean)

Filtrar apenas os registros incluídos?

#### Defined in

types/projetos.ts:73

___

### filtrar\_por\_data\_ate

• `Optional` **filtrar\_por\_data\_ate**: `string`

Filtrar os registros até uma data

#### Defined in

types/projetos.ts:69

___

### filtrar\_por\_data\_de

• `Optional` **filtrar\_por\_data\_de**: `string`

Filtrar os registros a partir de uma data

#### Defined in

types/projetos.ts:65

___

### inativo

• **inativo**: [`StringBoolean`](../modules/types.md#stringboolean)

#### Inherited from

[ICadastroProjetos](types.ICadastroProjetos.md).[inativo](types.ICadastroProjetos.md#inativo)

#### Defined in

types/projetos.ts:15

___

### nome

• **nome**: `string`

#### Inherited from

[ICadastroProjetos](types.ICadastroProjetos.md).[nome](types.ICadastroProjetos.md#nome)

#### Defined in

types/projetos.ts:14

___

### nome\_projeto

• `Optional` **nome\_projeto**: `string`

Nome do projeto

#### Defined in

types/projetos.ts:81

___

### ordem\_decrescente

• `Optional` **ordem\_decrescente**: [`StringBoolean`](../modules/types.md#stringboolean)

A lista será apresentada em ordem decrescente?

#### Defined in

types/projetos.ts:61

___

### ordenar\_por

• `Optional` **ordenar\_por**: `string`

Ordem de exibição dos dados

**`Default`**

`Código`

#### Defined in

types/projetos.ts:57

___

### pagina

• **pagina**: `number`

Número da página listada

#### Defined in

types/projetos.ts:43

___

### registros\_por\_pagina

• **registros\_por\_pagina**: `number`

Número de registros retornados

#### Defined in

types/projetos.ts:47
