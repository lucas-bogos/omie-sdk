# Omie SDK

## Introdução

A biblioteca Omie SDK é uma ferramenta poderosa que facilita a integração com a [plataforma Omie](https://www.omie.com.br/), permitindo que desenvolvedores criem aplicativos personalizados e automatizem processos de negócios. Esta documentação descreve como usar o Omie SDK em um ambiente TypeScript para interagir com a API do Omie.

## Requisitos

Antes de começar a usar o Omie SDK, você precisará atender a alguns requisitos:

- Node.js: Certifique-se de ter o Node.js instalado em sua máquina.
- Conta no Omie: Você precisará de uma conta no Omie para obter as credenciais necessárias para autenticação na API.
- Chave de Integração: É necessário criar uma chave de integração em sua conta Omie e conceder as permissões apropriadas para acessar os recursos desejados.

## Instalação

Você pode instalar o Omie SDK via npm (Node Package Manager) em seu projeto TypeScript:

```bash
npm install omie-sdk
```

## Uso

### Configuração

Para configurar, você pode definir as variáveis de ambiente `OMIE_APP_KEY` e `OMIE_APP_SECRET` antes de executar seu aplicativo. O Omie SDK irá ler essas variáveis automaticamente. Outra forma, seria seguindo adicionar as credenciais pelo construtor da classe:

```typescript
const credentials: ApiCredentials = {
  key: "CHAVE_API_OMIE",
  secret: "SEGREDO_API_OMIE",
};

const omieSdk = new OmieSdk(credentials);
```

Substitua "CHAVE_API_OMIE" e "SEGREDO_API_OMIE" pelas informações fornecidas pela Omie.

### Demo

Essa é uma demonstração, para mais recursos do SDK acesse nossa [documentação](./docs/README.md)!

```ts
import { OmieSdk } from "omie-sdk";

(async () => {
  const omieSdk = new OmieSdk();

  // Lista os 10 primeiros clientes
  await omieSdk.clientes.listar({
    pagina: 1,
    registros_por_pagina: 10,
  });

  // ...
})();
```

## Contribuição

Se você encontrou esta biblioteca útil e gostaria de expressar sua gratidão, você pode "pagar um café" para o mantenedor. Cada doação é uma maneira de apoiar o desenvolvimento contínuo e a manutenção desta biblioteca.

<a href="https://www.buymeacoffee.com/lucasbogos" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee"></a>

Sua contribuição é muito apreciada e ajuda a manter este projeto ativo e em constante melhoria.

Além de doações, também incentivamos a contribuição ativa para o projeto. Se você deseja colaborar com código, correções ou melhorias, sinta-se à vontade para enviar pull requests.
