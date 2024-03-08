<h1> Soluçao ao desafio by Luis Vilar</h1>
<p>
Olá, estou muito animado para apresentar minha solução ao desafio.
Neste Readme, você encontrará um guia passo a passo para configurar e executar localmente minha solução.
Gostaria de ficar à disposição para qualquer dúvida ou comentário que você possa ter. Por isso, vou deixar aqui o link do meu portfólio, onde você poderá encontrar meus dados de contato. Convido você, mesmo que não tenha dúvidas ou comentários, a visitá-lo e me conhecer um pouco mais!
</p>

<a href= "https://luisvilar.netlify.app/">
Meu Portafolio.
</a>

## Clonando o repositorio

<p>
Para poder clonar o repositório, você precisa ter uma chave SSH associada à sua conta do GitHub. Caso não tenha, convido você a visitar o seguinte link, onde encontrará o guia oficial do GitHub para fazer isso.
</p>
<a href = "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent">
Tutotial Claves SSH
</a><br/>

<p>
Caso você já esteja familiarizado com o GitHub, basta executar o seguinte comando no seu terminal para clonar este repositório.
</p>

```bash
git clone git@github.com:Luis-Vilar/FacilitaJuridico.git
```

<p>
Voce devera ver uma saida no terminal como a siguiente ...
</p>

```bash
Cloning into 'FacilitaJuridico'...
remote: Enumerating objects: 544, done.
remote: Counting objects: 100% (544/544), done.
remote: Compressing objects: 100% (283/283), done.
remote: Total 544 (delta 308), reused 461 (delta 225), pack-reused 0
Receiving objects: 100% (544/544), 1.26 MiB | 2.09 MiB/s, done.
Resolving deltas: 100% (308/308), done.
```

<p>
Foi criada uma pasta no seu computador contendo todos os arquivos do repositório. Dentro dessa pasta, existem duas subpastas, uma para o Backend e outra para o Frontend, além dos arquivos readme e um arquivo .gitignore.
</p>

```shell
[FacilitaJuridico]
----------------|[backend]
                |[frontend]
                |.gitignore
                |desafio.md
                |readme.md
```

## Configuraçao do Backend

<p>
Dentro da subpasta backend/src , você deverá criar um arquivo .env com as configurações do seu banco de dados, assim como também suas credenciais de usuário, URL e porta. Na mesma pasta, há um arquivo .env.example com um gabarito de como deverá ser sua string de conexão. Basicamente, você deverá mudar USERNAME, PASSWORD, HOST, PORT e DATABASE_NAME. É importante lembrar que no path /backend/src/database/migrations existe um arquivo com os comandos para a criação tanto da base de dados como da tabela clients, que são necessários para rodar toda a solução. Recomendo que você execute esses comandos com o PGADMIN ou, se for de sua preferência, o DBeaver.
</p>

```javascritp
DATABASE_URL=postgres://USERNAME:PASWWORD@HOST:PORT/DATABAS_ENAME
```

<p>
Caso você tenha criado a base de dados e a tabela clients, vamos nos aventurar na instalação das dependências do backend. Ele foi criado com Node.js e Express. Eu recomendo instalar com PNPM porque você poderá notar que eu estive commitando as mudanças do pnpm-lock.yaml, onde encontrará o histórico das instalações de dependências. Caso você escolha outro gerenciador de pacotes de sua preferência, recomendo apagar o pnpm-lock para não gerar conflitos na instalação das mesmas. Se você não conhece PNPM, convido você a utilizá-lo, é bem mais rápido que npm e nas documentações de bibliotecas e frameworks que não fornecem o comando pnpm para instalar, é só adicionar uma p na frente 🤓 . Vou deixar um link de como instalar também.
</p>
<a href="https://pnpm.io/installation">
Instalar pnpm 
</a>

<p>
Para instalar as dependencias basta rodar o siguiente comando dentro da pasta backend
</p>

```bash
pnpm i
```

<p>
Devera obter uma saida no terminal como a siguiente...
</p>

```bash
Lockfile is up to date, resolution step is skipped
Packages: +390
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 390, reused 390, downloaded 0, added 390, done

dependencies:
+ cors 2.8.5
+ dotenv 16.4.5
+ express 4.18.3
+ pg-promise 11.5.4

devDependencies:
+ @types/express 4.17.21
+ @types/jest 29.5.12
+ @types/pg-promise 5.4.3
+ jest 29.7.0
+ nodemon 3.1.0

Done in 2.7s
```

<p>
Neste ponto voce podera startar o servidor do backend, para isto rode o siguiente comando..
</p>

```bash
pnpm start
```

<p>
Debera ter uma saida do terminal como a siguiente..
</p>

```bash
> node  src/index.js

Server running on port 3000
Everything is fine, the database is online
```

<p>
Como poderá observar, é informado o port onde está sendo executado o servidor no seu computador. Isso significa que no endereço http://localhost:3000 está à escuta de requisições e nós conseguimos levantar o servidor e ele verificou que a base de dados está disponível 🎉🎉🎉🎉🎉🎉 lembrando que a base de dados ainda esta sem registros.. se voce quiser testar os endpoints vou deixar as rotas para que voce utilize um rest client, se não pode continuar desde a configuraçao do FrontEnd.
</p>

## Rotas do BackEnd

[POST] http://localhost:3000/clients

```javascript
//Debe se informar no body da req, todos são required.
{
  name: string,
  email: string,
  phone: string,
  latitud: number,
  longitud: number
}
```

<p>
Quando informar latitud e longitud considerar que aceita valores positivos e negativos em um plano cartesiano, podendo ser decimais. Para a latitude, podemos informar um número decimal de até 10 dígitos, onde 8 podem ser após a vírgula, e para a longitude, um número decimal de até 11 dígitos, onde 8 podem ser após a vírgula. Isso nos dá uma boa precisão caso queira trabalhar com APIs de geolocalização no futuro. 
</p>

[GET] http://localhost:3000/clients

```javascript
/* Este endpoint aceita os seguintes query params, 
que não são obrigatórios. No entanto, a lógica de negócio 
que eu apliquei considera apenas um query param. 
Se nenhum query param for informado, ele retornará 
todos os clientes cadastrados. Caso contrário, 
retornará os clientes que possuam correspondência 
com o nome, email ou telefone informados. */
{
  name: string;
  email: string;
  phone: string;
}
```

[GET] http://localhost:3000/addres
<p>
Este endpoint devolve um array de objetos ordenado com a rota para visitar todos os clientes cadastrados, saindo da empresa na latitude 0 e longitude 0. Foi solicitado trabalhar com X e Y, mas deixei preparado para poder escalar este projeto com alguma integração de mapas e roteamento.  
</p>

## Rotas extras que não foram pedidas mas necessárias para completar o CRUD de clientes.

[GET] http://localhost:3000/clients/:id

<p>
Informando um id de cliente válido no path param, retorna todas as informações deste cliente.
</p>

[PUT] http://localhost:3000/clients/:id

<p>
Informando un id de cliente valido no path param e no body como sugere o siguiente trecho
atualiza a informaçao do cliente
</p>

```javascript
//Debe se informar no body da req, todos são required.
{
  name: string,
  email: string,
  phone: string,
  latitud: number,
  longitud: number
}
```

[DELETE] http://localhost:3000/clients/:id

<p>
Informando um id de cliente válido no path param, deleta o cliente da base de dados
</p>
