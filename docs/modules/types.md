[Omie SDK](../README.md) / types

# Module: types

## Table of contents

### Interfaces

- [IAlterarCaractClienteRequest](../interfaces/types.IAlterarCaractClienteRequest.md)
- [IAlterarCaractClienteResponse](../interfaces/types.IAlterarCaractClienteResponse.md)
- [ICadastroProjetos](../interfaces/types.ICadastroProjetos.md)
- [ICaracteristicas](../interfaces/types.ICaracteristicas.md)
- [IClientesCadastro](../interfaces/types.IClientesCadastro.md)
- [IClientesCadastroChave](../interfaces/types.IClientesCadastroChave.md)
- [IClientesCadastroResumido](../interfaces/types.IClientesCadastroResumido.md)
- [IClientesFiltro](../interfaces/types.IClientesFiltro.md)
- [IClientesListFullResponse](../interfaces/types.IClientesListFullResponse.md)
- [IClientesListRequest](../interfaces/types.IClientesListRequest.md)
- [IClientesPorCodigo](../interfaces/types.IClientesPorCodigo.md)
- [IClientesStatus](../interfaces/types.IClientesStatus.md)
- [IClientesTagExcluirRequest](../interfaces/types.IClientesTagExcluirRequest.md)
- [IClientesTagExcluirResponse](../interfaces/types.IClientesTagExcluirResponse.md)
- [IClientesTagExcluirTodasRequest](../interfaces/types.IClientesTagExcluirTodasRequest.md)
- [IClientesTagExcluirTodasResponse](../interfaces/types.IClientesTagExcluirTodasResponse.md)
- [IClientesTagIncluirRequest](../interfaces/types.IClientesTagIncluirRequest.md)
- [IClientesTagIncluirResponse](../interfaces/types.IClientesTagIncluirResponse.md)
- [IClientesTagListarRequest](../interfaces/types.IClientesTagListarRequest.md)
- [IClientesTagListarResponse](../interfaces/types.IClientesTagListarResponse.md)
- [IClientesTagsChave](../interfaces/types.IClientesTagsChave.md)
- [IConsultarCaractClienteRequest](../interfaces/types.IConsultarCaractClienteRequest.md)
- [IConsultarCaractClienteResponse](../interfaces/types.IConsultarCaractClienteResponse.md)
- [IDadosBancarios](../interfaces/types.IDadosBancarios.md)
- [IEnderecoEntrega](../interfaces/types.IEnderecoEntrega.md)
- [IExcluirCaractClienteRequest](../interfaces/types.IExcluirCaractClienteRequest.md)
- [IExcluirCaractClienteResponse](../interfaces/types.IExcluirCaractClienteResponse.md)
- [IExcluirTodasCaractClienteRequest](../interfaces/types.IExcluirTodasCaractClienteRequest.md)
- [IExcluirTodasCaractClienteResponse](../interfaces/types.IExcluirTodasCaractClienteResponse.md)
- [IIncluirCaractClienteRequest](../interfaces/types.IIncluirCaractClienteRequest.md)
- [IIncluirCaractClienteResponse](../interfaces/types.IIncluirCaractClienteResponse.md)
- [IProjetosAlterarRequest](../interfaces/types.IProjetosAlterarRequest.md)
- [IProjetosAlterarResponse](../interfaces/types.IProjetosAlterarResponse.md)
- [IProjetosCadastroChave](../interfaces/types.IProjetosCadastroChave.md)
- [IProjetosConsultarRequest](../interfaces/types.IProjetosConsultarRequest.md)
- [IProjetosConsultarResponse](../interfaces/types.IProjetosConsultarResponse.md)
- [IProjetosExcluirRequest](../interfaces/types.IProjetosExcluirRequest.md)
- [IProjetosExcluirResponse](../interfaces/types.IProjetosExcluirResponse.md)
- [IProjetosIncluirRequest](../interfaces/types.IProjetosIncluirRequest.md)
- [IProjetosIncluirResponse](../interfaces/types.IProjetosIncluirResponse.md)
- [IProjetosListarRequest](../interfaces/types.IProjetosListarRequest.md)
- [IProjetosListarResponse](../interfaces/types.IProjetosListarResponse.md)
- [IProjetosUpsertRequest](../interfaces/types.IProjetosUpsertRequest.md)
- [IProjetosUpsertResponse](../interfaces/types.IProjetosUpsertResponse.md)
- [IRecomendacoes](../interfaces/types.IRecomendacoes.md)
- [IStatusProcessamento](../interfaces/types.IStatusProcessamento.md)
- [IStatusProjetos](../interfaces/types.IStatusProjetos.md)
- [IStatusTags](../interfaces/types.IStatusTags.md)
- [ITag](../interfaces/types.ITag.md)
- [Info](../interfaces/types.Info.md)

### Type Aliases

- [IClientesListResponse](types.md#iclienteslistresponse)
- [StringBoolean](types.md#stringboolean)

## Type Aliases

### IClientesListResponse

Ƭ **IClientesListResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientes_cadastro_resumido` | [`IClientesCadastroResumido`](../interfaces/types.IClientesCadastroResumido.md)[] |
| `pagina` | `number` |
| `registros` | `number` |
| `total_de_paginas` | `number` |
| `total_de_registros` | `number` |

#### Defined in

types/clientes.ts:235

___

### StringBoolean

Ƭ **StringBoolean**: ``"S"`` \| ``"N"``

"S" para Sim e "N" para Não

#### Defined in

types/string-boolean.ts:4
