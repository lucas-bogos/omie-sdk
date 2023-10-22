[Omie SDK](../README.md) / [types](../modules/types.md) / IClientesFiltro

# Interface: IClientesFiltro

[types](../modules/types.md).IClientesFiltro

## Hierarchy

- [`IClientesCadastroChave`](types.IClientesCadastroChave.md)

  ↳ **`IClientesFiltro`**

## Table of contents

### Properties

- [bairro](types.IClientesFiltro.md#bairro)
- [cep](types.IClientesFiltro.md#cep)
- [cidade](types.IClientesFiltro.md#cidade)
- [cnpj\_cpf](types.IClientesFiltro.md#cnpj_cpf)
- [codigo\_cliente\_integracao](types.IClientesFiltro.md#codigo_cliente_integracao)
- [codigo\_cliente\_omie](types.IClientesFiltro.md#codigo_cliente_omie)
- [contato](types.IClientesFiltro.md#contato)
- [email](types.IClientesFiltro.md#email)
- [endereco](types.IClientesFiltro.md#endereco)
- [estado](types.IClientesFiltro.md#estado)
- [homepage](types.IClientesFiltro.md#homepage)
- [inativo](types.IClientesFiltro.md#inativo)
- [inscricao\_estadual](types.IClientesFiltro.md#inscricao_estadual)
- [inscricao\_municipal](types.IClientesFiltro.md#inscricao_municipal)
- [inscricao\_suframa](types.IClientesFiltro.md#inscricao_suframa)
- [nome\_fantasia](types.IClientesFiltro.md#nome_fantasia)
- [optante\_simples\_nacional](types.IClientesFiltro.md#optante_simples_nacional)
- [pessoa\_fisica](types.IClientesFiltro.md#pessoa_fisica)
- [razao\_social](types.IClientesFiltro.md#razao_social)
- [tags](types.IClientesFiltro.md#tags)

## Properties

### bairro

• `Optional` **bairro**: `string`

#### Defined in

types/clientes.ts:160

___

### cep

• `Optional` **cep**: `string`

#### Defined in

types/clientes.ts:163

___

### cidade

• `Optional` **cidade**: `string`

#### Defined in

types/clientes.ts:161

___

### cnpj\_cpf

• `Optional` **cnpj\_cpf**: `string`

#### Defined in

types/clientes.ts:156

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

___

### contato

• `Optional` **contato**: `string`

#### Defined in

types/clientes.ts:164

___

### email

• `Optional` **email**: `string`

#### Defined in

types/clientes.ts:165

___

### endereco

• `Optional` **endereco**: `string`

#### Defined in

types/clientes.ts:159

___

### estado

• `Optional` **estado**: `string`

#### Defined in

types/clientes.ts:162

___

### homepage

• `Optional` **homepage**: `string`

#### Defined in

types/clientes.ts:166

___

### inativo

• `Optional` **inativo**: [`StringBoolean`](../modules/types.md#stringboolean)

#### Defined in

types/clientes.ts:172

___

### inscricao\_estadual

• `Optional` **inscricao\_estadual**: `string`

#### Defined in

types/clientes.ts:168

___

### inscricao\_municipal

• `Optional` **inscricao\_municipal**: `string`

#### Defined in

types/clientes.ts:167

___

### inscricao\_suframa

• `Optional` **inscricao\_suframa**: `string`

#### Defined in

types/clientes.ts:169

___

### nome\_fantasia

• `Optional` **nome\_fantasia**: `string`

#### Defined in

types/clientes.ts:158

___

### optante\_simples\_nacional

• `Optional` **optante\_simples\_nacional**: [`StringBoolean`](../modules/types.md#stringboolean)

#### Defined in

types/clientes.ts:171

___

### pessoa\_fisica

• `Optional` **pessoa\_fisica**: [`StringBoolean`](../modules/types.md#stringboolean)

#### Defined in

types/clientes.ts:170

___

### razao\_social

• `Optional` **razao\_social**: `string`

#### Defined in

types/clientes.ts:157

___

### tags

• `Optional` **tags**: [`ITag`](types.ITag.md)[]

#### Defined in

types/clientes.ts:173
