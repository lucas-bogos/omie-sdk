[Omie SDK](../README.md) / [types](../modules/types.md) / IEmpresasCadastro

# Interface: IEmpresasCadastro

[types](../modules/types.md).IEmpresasCadastro

## Hierarchy

- [`IEmpresasCadastroChave`](types.IEmpresasCadastroChave.md)

  ↳ **`IEmpresasCadastro`**

## Table of contents

### Properties

- [alteracao\_data](types.IEmpresasCadastro.md#alteracao_data)
- [alteracao\_hora](types.IEmpresasCadastro.md#alteracao_hora)
- [bairro](types.IEmpresasCadastro.md#bairro)
- [bloqueado](types.IEmpresasCadastro.md#bloqueado)
- [cep](types.IEmpresasCadastro.md#cep)
- [cidade](types.IEmpresasCadastro.md#cidade)
- [cnae](types.IEmpresasCadastro.md#cnae)
- [cnae\_municipal](types.IEmpresasCadastro.md#cnae_municipal)
- [cnpj](types.IEmpresasCadastro.md#cnpj)
- [codigo\_empresa](types.IEmpresasCadastro.md#codigo_empresa)
- [codigo\_empresa\_integracao](types.IEmpresasCadastro.md#codigo_empresa_integracao)
- [codigo\_pais](types.IEmpresasCadastro.md#codigo_pais)
- [complemento](types.IEmpresasCadastro.md#complemento)
- [csc\_homologacao](types.IEmpresasCadastro.md#csc_homologacao)
- [csc\_id\_homologacao](types.IEmpresasCadastro.md#csc_id_homologacao)
- [csc\_id\_producao](types.IEmpresasCadastro.md#csc_id_producao)
- [csc\_producao](types.IEmpresasCadastro.md#csc_producao)
- [data\_adesao\_sn](types.IEmpresasCadastro.md#data_adesao_sn)
- [dt\_adesao\_simpnac](types.IEmpresasCadastro.md#dt_adesao_simpnac)
- [ecd\_codigo\_cadastral](types.IEmpresasCadastro.md#ecd_codigo_cadastral)
- [ecd\_codigo\_instituicao\_responsavel](types.IEmpresasCadastro.md#ecd_codigo_instituicao_responsavel)
- [efd\_atividade\_industrial](types.IEmpresasCadastro.md#efd_atividade_industrial)
- [efd\_perfil\_arquivo\_fiscal](types.IEmpresasCadastro.md#efd_perfil_arquivo_fiscal)
- [email](types.IEmpresasCadastro.md#email)
- [endereco](types.IEmpresasCadastro.md#endereco)
- [endereco\_numero](types.IEmpresasCadastro.md#endereco_numero)
- [estado](types.IEmpresasCadastro.md#estado)
- [fax\_ddd](types.IEmpresasCadastro.md#fax_ddd)
- [fax\_numero](types.IEmpresasCadastro.md#fax_numero)
- [gera\_nfe](types.IEmpresasCadastro.md#gera_nfe)
- [gera\_nfse](types.IEmpresasCadastro.md#gera_nfse)
- [gera\_recibo](types.IEmpresasCadastro.md#gera_recibo)
- [ie\_st](types.IEmpresasCadastro.md#ie_st)
- [importado\_api](types.IEmpresasCadastro.md#importado_api)
- [inativa](types.IEmpresasCadastro.md#inativa)
- [inclusao\_data](types.IEmpresasCadastro.md#inclusao_data)
- [inclusao\_hora](types.IEmpresasCadastro.md#inclusao_hora)
- [inscricao\_estadual](types.IEmpresasCadastro.md#inscricao_estadual)
- [inscricao\_municipal](types.IEmpresasCadastro.md#inscricao_municipal)
- [inscricao\_suframa](types.IEmpresasCadastro.md#inscricao_suframa)
- [logradouro](types.IEmpresasCadastro.md#logradouro)
- [nome\_fantasia](types.IEmpresasCadastro.md#nome_fantasia)
- [optante\_simples\_nacional](types.IEmpresasCadastro.md#optante_simples_nacional)
- [pdv\_sincr\_analitica](types.IEmpresasCadastro.md#pdv_sincr_analitica)
- [razao\_social](types.IEmpresasCadastro.md#razao_social)
- [recibo\_ide](types.IEmpresasCadastro.md#recibo_ide)
- [recibo\_num\_vias](types.IEmpresasCadastro.md#recibo_num_vias)
- [recibo\_tipo](types.IEmpresasCadastro.md#recibo_tipo)
- [regime\_tributario](types.IEmpresasCadastro.md#regime_tributario)
- [sped\_codigo\_criterio\_escrituracao](types.IEmpresasCadastro.md#sped_codigo_criterio_escrituracao)
- [sped\_codigo\_incidencia\_tributaria](types.IEmpresasCadastro.md#sped_codigo_incidencia_tributaria)
- [sped\_codigo\_indicador\_apropriacao\_credito](types.IEmpresasCadastro.md#sped_codigo_indicador_apropriacao_credito)
- [sped\_codigo\_tipo\_atividade](types.IEmpresasCadastro.md#sped_codigo_tipo_atividade)
- [sped\_codigo\_tipo\_contribuicao](types.IEmpresasCadastro.md#sped_codigo_tipo_contribuicao)
- [sped\_cpf\_contador](types.IEmpresasCadastro.md#sped_cpf_contador)
- [sped\_crc\_contador](types.IEmpresasCadastro.md#sped_crc_contador)
- [sped\_email\_contador](types.IEmpresasCadastro.md#sped_email_contador)
- [sped\_junta\_comercial](types.IEmpresasCadastro.md#sped_junta_comercial)
- [sped\_matriz](types.IEmpresasCadastro.md#sped_matriz)
- [sped\_natureza\_pessoa\_juridica](types.IEmpresasCadastro.md#sped_natureza_pessoa_juridica)
- [sped\_nome\_contador](types.IEmpresasCadastro.md#sped_nome_contador)
- [sped\_registro\_junta\_comercial](types.IEmpresasCadastro.md#sped_registro_junta_comercial)
- [sped\_usa\_contabilidade\_terceirizada](types.IEmpresasCadastro.md#sped_usa_contabilidade_terceirizada)
- [telefone1\_ddd](types.IEmpresasCadastro.md#telefone1_ddd)
- [telefone1\_numero](types.IEmpresasCadastro.md#telefone1_numero)
- [telefone2\_ddd](types.IEmpresasCadastro.md#telefone2_ddd)
- [telefone2\_numero](types.IEmpresasCadastro.md#telefone2_numero)
- [website](types.IEmpresasCadastro.md#website)

## Properties

### alteracao\_data

• **alteracao\_data**: `string`

Data de alteração

#### Defined in

[types/empresas.ts:147](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L147)

___

### alteracao\_hora

• **alteracao\_hora**: `string`

Hora de alteração

#### Defined in

[types/empresas.ts:151](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L151)

___

### bairro

• **bairro**: `string`

#### Defined in

[types/empresas.ts:16](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L16)

___

### bloqueado

• **bloqueado**: [`StringBoolean`](../modules/types.md#stringboolean)

Registro bloqueado pela API?

#### Defined in

[types/empresas.ts:155](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L155)

___

### cep

• **cep**: `string`

#### Defined in

[types/empresas.ts:19](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L19)

___

### cidade

• **cidade**: `string`

#### Defined in

[types/empresas.ts:17](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L17)

___

### cnae

• **cnae**: `string`

Código do CNAE - Fiscal

#### Defined in

[types/empresas.ts:36](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L36)

___

### cnae\_municipal

• **cnae\_municipal**: `string`

Código do CNAE - Municipal

#### Defined in

[types/empresas.ts:40](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L40)

___

### cnpj

• **cnpj**: `string`

#### Defined in

[types/empresas.ts:9](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L9)

___

### codigo\_empresa

• **codigo\_empresa**: `number`

#### Inherited from

[IEmpresasCadastroChave](types.IEmpresasCadastroChave.md).[codigo_empresa](types.IEmpresasCadastroChave.md#codigo_empresa)

#### Defined in

[types/empresas.ts:4](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L4)

___

### codigo\_empresa\_integracao

• `Optional` **codigo\_empresa\_integracao**: `string`

#### Inherited from

[IEmpresasCadastroChave](types.IEmpresasCadastroChave.md).[codigo_empresa_integracao](types.IEmpresasCadastroChave.md#codigo_empresa_integracao)

#### Defined in

[types/empresas.ts:5](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L5)

___

### codigo\_pais

• **codigo\_pais**: `string`

#### Defined in

[types/empresas.ts:20](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L20)

___

### complemento

• **complemento**: `string`

#### Defined in

[types/empresas.ts:15](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L15)

___

### csc\_homologacao

• **csc\_homologacao**: `string`

Código de Segurança do Contribuinte em ambiente de homologação

#### Defined in

[types/empresas.ts:195](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L195)

___

### csc\_id\_homologacao

• **csc\_id\_homologacao**: `string`

Identificador do Código de Segurança do Contribuinte em ambiente homologação

#### Defined in

[types/empresas.ts:191](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L191)

___

### csc\_id\_producao

• **csc\_id\_producao**: `string`

Identificador do Código de Segurança do Contribuinte em ambiente produção

#### Defined in

[types/empresas.ts:199](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L199)

___

### csc\_producao

• **csc\_producao**: `string`

Código de Segurança do Contribuinte em ambiente de produção

#### Defined in

[types/empresas.ts:203](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L203)

___

### data\_adesao\_sn

• **data\_adesao\_sn**: `string`

Data de Adesão ao Simples Nacional

#### Defined in

[types/empresas.ts:24](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L24)

___

### dt\_adesao\_simpnac

• **dt\_adesao\_simpnac**: `string`

Data de Adesão do Simples Nacional

#### Defined in

[types/empresas.ts:167](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L167)

___

### ecd\_codigo\_cadastral

• **ecd\_codigo\_cadastral**: `string`

SPED / ECD - Código cadastral na Instituição Responsável

#### Defined in

[types/empresas.ts:127](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L127)

___

### ecd\_codigo\_instituicao\_responsavel

• **ecd\_codigo\_instituicao\_responsavel**: `string`

SPED / ECD - Código da Instituição Responsável pela Administração do Cadastro

#### Defined in

[types/empresas.ts:131](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L131)

___

### efd\_atividade\_industrial

• **efd\_atividade\_industrial**: [`StringBoolean`](../modules/types.md#stringboolean)

EFD - Indica se a atividade é industrial ou equiparado a indústria

#### Defined in

[types/empresas.ts:119](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L119)

___

### efd\_perfil\_arquivo\_fiscal

• **efd\_perfil\_arquivo\_fiscal**: [`StringBoolean`](../modules/types.md#stringboolean)

Perfil de Apresentação do Arquivo Fiscal - EFD

#### Defined in

[types/empresas.ts:123](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L123)

___

### email

• **email**: `string`

#### Defined in

[types/empresas.ts:31](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L31)

___

### endereco

• **endereco**: `string`

#### Defined in

[types/empresas.ts:13](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L13)

___

### endereco\_numero

• **endereco\_numero**: `string`

#### Defined in

[types/empresas.ts:14](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L14)

___

### estado

• **estado**: `string`

#### Defined in

[types/empresas.ts:18](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L18)

___

### fax\_ddd

• **fax\_ddd**: `string`

#### Defined in

[types/empresas.ts:29](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L29)

___

### fax\_numero

• **fax\_numero**: `string`

#### Defined in

[types/empresas.ts:30](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L30)

___

### gera\_nfe

• **gera\_nfe**: [`StringBoolean`](../modules/types.md#stringboolean)

Gera Nota Fiscal Eletrônica Âmbito Nacional (DANFE)?

#### Defined in

[types/empresas.ts:135](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L135)

___

### gera\_nfse

• **gera\_nfse**: [`StringBoolean`](../modules/types.md#stringboolean)

Gera Nota Fiscal de Serviço Eletrônica para o Município

#### Defined in

[types/empresas.ts:55](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L55)

___

### gera\_recibo

• **gera\_recibo**: [`StringBoolean`](../modules/types.md#stringboolean)

Gerar Recibo de Prestação de Serviço?

#### Defined in

[types/empresas.ts:179](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L179)

___

### ie\_st

• **ie\_st**: `string`

Inscrição Estadual para ST

#### Defined in

[types/empresas.ts:171](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L171)

___

### importado\_api

• **importado\_api**: [`StringBoolean`](../modules/types.md#stringboolean)

Importado da API

#### Defined in

[types/empresas.ts:159](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L159)

___

### inativa

• **inativa**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que a empresa está ativa

#### Defined in

[types/empresas.ts:51](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L51)

___

### inclusao\_data

• **inclusao\_data**: `string`

Data de inclusão

#### Defined in

[types/empresas.ts:139](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L139)

___

### inclusao\_hora

• **inclusao\_hora**: `string`

Hora de inclusão

#### Defined in

[types/empresas.ts:143](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L143)

___

### inscricao\_estadual

• **inscricao\_estadual**: `string`

#### Defined in

[types/empresas.ts:41](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L41)

___

### inscricao\_municipal

• **inscricao\_municipal**: `string`

#### Defined in

[types/empresas.ts:42](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L42)

___

### inscricao\_suframa

• **inscricao\_suframa**: `string`

#### Defined in

[types/empresas.ts:43](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L43)

___

### logradouro

• **logradouro**: `string`

#### Defined in

[types/empresas.ts:12](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L12)

___

### nome\_fantasia

• **nome\_fantasia**: `string`

#### Defined in

[types/empresas.ts:11](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L11)

___

### optante\_simples\_nacional

• **optante\_simples\_nacional**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica que a empresa é optante pelo Simples Nacional

#### Defined in

[types/empresas.ts:59](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L59)

___

### pdv\_sincr\_analitica

• **pdv\_sincr\_analitica**: [`StringBoolean`](../modules/types.md#stringboolean)

Sincronizar Estoque de Forma Análitica (Venda a Venda)

#### Defined in

[types/empresas.ts:163](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L163)

___

### razao\_social

• **razao\_social**: `string`

#### Defined in

[types/empresas.ts:10](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L10)

___

### recibo\_ide

• **recibo\_ide**: `string`

Identificação do Profissional (contador, advogado, etc) para o Recibo de Prestação de Serviço

#### Defined in

[types/empresas.ts:175](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L175)

___

### recibo\_num\_vias

• **recibo\_num\_vias**: [`StringBoolean`](../modules/types.md#stringboolean)

Indica se o Recibo de Prestação de Serviço será gerado em 2 vias

#### Defined in

[types/empresas.ts:187](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L187)

___

### recibo\_tipo

• **recibo\_tipo**: `string`

Tipo (modelo) do Recibo de Prestação de Serviço

#### Defined in

[types/empresas.ts:183](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L183)

___

### regime\_tributario

• **regime\_tributario**: [`StringBoolean`](../modules/types.md#stringboolean)

Regime Tributário?

#### Defined in

[types/empresas.ts:47](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L47)

___

### sped\_codigo\_criterio\_escrituracao

• **sped\_codigo\_criterio\_escrituracao**: [`StringBoolean`](../modules/types.md#stringboolean)

SPED PIS/COFINS - Código Indicador do Critério de Escrituração e Apuração

#### Defined in

[types/empresas.ts:99](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L99)

___

### sped\_codigo\_incidencia\_tributaria

• **sped\_codigo\_incidencia\_tributaria**: [`StringBoolean`](../modules/types.md#stringboolean)

SPED PIS/COFINS - Código Indicador da Incidência Tributária no Período

#### Defined in

[types/empresas.ts:63](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L63)

___

### sped\_codigo\_indicador\_apropriacao\_credito

• **sped\_codigo\_indicador\_apropriacao\_credito**: [`StringBoolean`](../modules/types.md#stringboolean)

SPED PIS/COFINS - Código Código Indicador de Método de Apropriação de Créditos Comuns

#### Defined in

[types/empresas.ts:87](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L87)

___

### sped\_codigo\_tipo\_atividade

• **sped\_codigo\_tipo\_atividade**: [`StringBoolean`](../modules/types.md#stringboolean)

SPED PIS/COFINS - Código Indicador de Tipo de Atividade Preponderante

#### Defined in

[types/empresas.ts:91](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L91)

___

### sped\_codigo\_tipo\_contribuicao

• **sped\_codigo\_tipo\_contribuicao**: [`StringBoolean`](../modules/types.md#stringboolean)

SPED PIS/COFINS - Código indicador do Tipo de Contribuição Apurada no Período

#### Defined in

[types/empresas.ts:67](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L67)

___

### sped\_cpf\_contador

• **sped\_cpf\_contador**: `string`

SPED - CPF do Contador Responsável pela Empresa

#### Defined in

[types/empresas.ts:71](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L71)

___

### sped\_crc\_contador

• **sped\_crc\_contador**: `string`

SPED - CRC do Contador Responsável pela Empresa

#### Defined in

[types/empresas.ts:75](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L75)

___

### sped\_email\_contador

• **sped\_email\_contador**: `string`

SPED - Email do Contador da Empresa

#### Defined in

[types/empresas.ts:83](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L83)

___

### sped\_junta\_comercial

• **sped\_junta\_comercial**: [`StringBoolean`](../modules/types.md#stringboolean)

SPED - Indica se o Local do Registro é Junta Comercial

#### Defined in

[types/empresas.ts:103](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L103)

___

### sped\_matriz

• **sped\_matriz**: [`StringBoolean`](../modules/types.md#stringboolean)

SPED - Indica se a empresa é Matriz

#### Defined in

[types/empresas.ts:107](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L107)

___

### sped\_natureza\_pessoa\_juridica

• **sped\_natureza\_pessoa\_juridica**: `string`

SPED PIS/COFINS - Indicador da Natureza da Pessoa Jurídica

#### Defined in

[types/empresas.ts:95](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L95)

___

### sped\_nome\_contador

• **sped\_nome\_contador**: `string`

SPED - Nome do Contador Responsável pela Empresa

#### Defined in

[types/empresas.ts:111](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L111)

___

### sped\_registro\_junta\_comercial

• **sped\_registro\_junta\_comercial**: `string`

SPED - Número do Registro da Empresa na Junta Comercial ou no Cartório

#### Defined in

[types/empresas.ts:115](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L115)

___

### sped\_usa\_contabilidade\_terceirizada

• **sped\_usa\_contabilidade\_terceirizada**: [`StringBoolean`](../modules/types.md#stringboolean)

SPED - Indica se a Empresa utiliza Contabilidade Terceirizada

#### Defined in

[types/empresas.ts:79](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L79)

___

### telefone1\_ddd

• **telefone1\_ddd**: `string`

#### Defined in

[types/empresas.ts:25](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L25)

___

### telefone1\_numero

• **telefone1\_numero**: `string`

#### Defined in

[types/empresas.ts:26](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L26)

___

### telefone2\_ddd

• **telefone2\_ddd**: `string`

#### Defined in

[types/empresas.ts:27](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L27)

___

### telefone2\_numero

• **telefone2\_numero**: `string`

#### Defined in

[types/empresas.ts:28](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L28)

___

### website

• **website**: `string`

#### Defined in

[types/empresas.ts:32](https://github.com/lucas-bogos/omie-sdk/blob/f0ca102/src/types/empresas.ts#L32)
