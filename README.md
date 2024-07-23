# Microsserviços
Dev Welison Nunes Belo.


Este projeto é uma implementação de um sistema de microsserviços usando Node.js e Express. O sistema consiste em vários microsserviços, incluindo serviços de autenticação, registro de serviços, e gerenciamento de usuários e posts.

## Estrutura do Projeto

- **gateway**: Serviço de gateway que roteia as requisições para os serviços apropriados.
- **post-ms**: Microsserviço responsável pela gestão de posts.
- **service-registry**: Registro de serviços que mantém o controle dos serviços disponíveis.
- **users-ms**: Microsserviço responsável pela gestão de usuários.
- **auth-ms**: Microsserviço de autenticação que fornece endpoints para login e geração de tokens JWT.

## Configuração

### Variáveis de Ambiente

Cada microsserviço possui um arquivo `.env` onde são configuradas as variáveis de ambiente necessárias. Por exemplo, as configurações de conexão com o banco de dados e URLs de serviços.

### Inicialização

Para inicializar cada microsserviço, navegue até a pasta correspondente e execute:

```bash
npm install
npm start
