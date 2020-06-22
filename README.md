### Projeto PBX Chat
Faça o download do client (este projeto) + **https://github.com/IuriPires/PBX-server-test** para que seja possível testar a aplicação.

Navegue até a pasta do projeto e no seu terminal, digite os seguintes comandos:
*$ - yarn install*
*$ - yarn start* - Para iniciar o projeto

### Projeto PBX Chat server
Navegue até a pasta do projeto e no seu terminal, digite os seguintes comandos:
*$ - yarn install*
*$ - yarn server* - Para iniciar o projeto

Nesta altura, ambos os projetos já estão com um socket aberto entre si. Acesse **localhost:3001** para usar o client. (Por padrão , a porta que o react tenta iniciar a aplicação é a 3000, todavia o server usa a 3000. Simplesmente ao iniciar, o react tentará encontrar a próxima por disponivel que provavelmente será a 3001)

### Bugs não resolvidos
Por falta de tempo, infelizmente não consegui resolver alguns bugs e nem fazer os testes de unidade e integração que poderiam ter sido feitos. Enfatizo a importância dos mesmos para que se tenha uma aplicação robusta e confiável.

##### Lista
- Ao entrar com um usuário, está sendo duplicado os mesmo.
- Ao utilizar o REDUX, tive um problema quando tentava usar os hooks *useSelector* e *useStore*, que impedem o uso da aplicação causando um crash. Infelizmente pela falta de tempo, não consegui ir à fundo. 


