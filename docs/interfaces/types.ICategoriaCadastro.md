[Omie SDK](../README.md) / [types](../modules/types.md) / ICategoriaCadastro

# Interface: ICategoriaCadastro

[types](../modules/types.md).ICategoriaCadastro

## Table of contents

### Properties

- [categoria\_superior](types.ICategoriaCadastro.md#categoria_superior)
- [codigo\_dre](types.ICategoriaCadastro.md#codigo_dre)
- [conta\_despesa](types.ICategoriaCadastro.md#conta_despesa)
- [conta\_inativa](types.ICategoriaCadastro.md#conta_inativa)
- [conta\_receita](types.ICategoriaCadastro.md#conta_receita)
- [dadosDRE](types.ICategoriaCadastro.md#dadosdre)
- [definida\_pelo\_usuario](types.ICategoriaCadastro.md#definida_pelo_usuario)
- [descricao\_padrao](types.ICategoriaCadastro.md#descricao_padrao)
- [id\_conta\_contabil](types.ICategoriaCadastro.md#id_conta_contabil)
- [nao\_exibir](types.ICategoriaCadastro.md#nao_exibir)
- [natureza](types.ICategoriaCadastro.md#natureza)
- [tag\_conta\_contabil](types.ICategoriaCadastro.md#tag_conta_contabil)
- [totalizadora](types.ICategoriaCadastro.md#totalizadora)
- [transferencia](types.ICategoriaCadastro.md#transferencia)

## Properties

### categoria\_superior

• **categoria\_superior**: `string`

Código da Categoria de Nivel Superior

#### Defined in

[types/categorias.ts:60](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L60)

___

### codigo\_dre

• **codigo\_dre**: `string`

Código no DRE

#### Defined in

[types/categorias.ts:56](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L56)

___

### conta\_despesa

• **conta\_despesa**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que é conta de despesa

#### Defined in

[types/categorias.ts:32](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L32)

___

### conta\_inativa

• **conta\_inativa**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que a conta está inativo

#### Defined in

[types/categorias.ts:16](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L16)

___

### conta\_receita

• **conta\_receita**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que é conta de receita

#### Defined in

[types/categorias.ts:44](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L44)

___

### dadosDRE

• **dadosDRE**: [`IDadosDRE`](types.IDadosDRE.md)

Detalhes da conta do DRE

#### Defined in

[types/categorias.ts:64](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L64)

___

### definida\_pelo\_usuario

• **definida\_pelo\_usuario**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que a conta financeira é definida pelo usuário

#### Defined in

[types/categorias.ts:20](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L20)

___

### descricao\_padrao

• **descricao\_padrao**: `string`

Descrição Padrão para a Categoria

#### Defined in

[types/categorias.ts:12](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L12)

___

### id\_conta\_contabil

• **id\_conta\_contabil**: `number`

ID da Conta Contábil

#### Defined in

[types/categorias.ts:24](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L24)

___

### nao\_exibir

• **nao\_exibir**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que a Categoria não deve ser exibida em ComboBox

#### Defined in

[types/categorias.ts:36](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L36)

___

### natureza

• **natureza**: `string`

Descrição da Natureza da conta

#### Defined in

[types/categorias.ts:40](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L40)

___

### tag\_conta\_contabil

• **tag\_conta\_contabil**: `string`

Tag para Conta Contábil

#### Defined in

[types/categorias.ts:28](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L28)

___

### totalizadora

• **totalizadora**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que é totalizadora de conta

#### Defined in

[types/categorias.ts:48](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L48)

___

### transferencia

• **transferencia**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que é categoria de transferência

#### Defined in

[types/categorias.ts:52](https://github.com/lucas-bogos/omie-sdk/blob/96c014c/src/types/categorias.ts#L52)
