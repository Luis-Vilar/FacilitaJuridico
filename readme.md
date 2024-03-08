<h1> Soluçao ao desafio by Luis Vilar</h1>
<p>
Olá, estou muito animado para apresentar minha solução ao desafio.
Neste Readme, você encontrará um guia passo a passo para configurar e executar localmente minha solução.
Gostaria de ficar à disposição para qualquer dúvida ou comentário que você possa ter. Por isso, vou deixar aqui o link do meu portfólio, onde você poderá encontrar meus dados de contato. Convido você, mesmo que não tenha dúvidas ou comentários, a visitá-lo e me conhecer um pouco mais!
</p>

<a href= "https://luisvilar.netlify.app/">
Meu Portafolio.
</a>

## Consideraçoes y dicas Previas .

<p>
Precisamos ter instaladas as seguintes ferramentas e frameworks previamente a começar com a clonagem e posta em marcha deste repositório: `Node.js v20 ou superior`, `PostgreSQL v16.2 ou superior`, um terminal shell (como o zsh com os plugins do ohmyzsh instalados, por exemplo). Dependendo do seu sistema operativo, você pode precisar de privilégios de usuário mais elevados para instalar o Node.js. Caso você não queira instalar o PostgreSQL em sua máquina, considere criar um contêiner Docker com este banco de dados. Se preferir, entre em contato comigo para obter um arquivo docker-compose que criará automaticamente uma instância configurada previamente. Outra opção é criar um banco de dados no serviço de hospedagem de banco de dados ElephantSQL (https://www.elephantsql.com/), que fornece uma string de conexão. Para fins de teste, eles oferecem um plano gratuito com uma base de dados de 10 MB, o que é mais do que suficiente. Essas outras abordagens de banco de dados não serão abordadas nesta documentação para manter o foco no objetivo principal. Seja bem-vindo! Prepare seu café e vamos começar juntos...
</p>

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
Dentro da subpasta backend/src , você deverá criar um arquivo .env com as configurações do seu banco de dados, assim como também suas credenciais de usuáriodo, URL e porta. Na mesma pasta, há um arquivo .env.example com um gabarito de como deverá ser sua string de conexão. Basicamente, você deverá mudar USERNAME, PASSWORD, HOST, PORT e DATABASE_NAME. É importante lembrar que no path /backend/src/database/migrations existe um arquivo com os comandos para a criação tanto da base de dados como da tabela clients, que são necessários para rodar toda a solução. Recomendo que você execute esses comandos com o PGADMIN ou, se for de sua preferência, o DBeaver.
Por padrão o servidor roda no portoa 3000 caso voce ja teha alguma outra aplicaçao rodando na mesma porta podera
adiccionar outra variavel de entorno no arquivo .env com a chave PORT=XXXX onde as X corresponem a porta onde o
servidor ficara a escuta tenha a consideraçao que esta documentaçao quando se refere as rotas do backend esta com a porta default que e a 3000 si voce mudar de porta devera bater na porta que você coloco no arquivo .env .
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

## Configurando o FrontEnd

<p>
Dentro da pasta frontend, abra um terminal e execute o comando
<code> pnpm i</code> lembrando uma vez mais que se voce optar por instalar as dependencias com outro gerenciador de pacotes recomendo apagar os arquivos pnpm-lock.yaml para não gerar confitos entre ferramentas e realizar uma instalaçao limpa.. apos rodado o comando anteriormente mencionado debera ter uma saida no terminal como a siguiente...
</p>

```bash
Lockfile is up to date, resolution step is skipped
Packages: +309
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 309, reused 309, downloaded 0, added 309, done

dependencies:
+ axios 1.6.7
+ bootstrap 5.3.3
+ react 18.2.0
+ react-bootstrap 2.10.1
+ react-dom 18.2.0
+ react-router-dom 6.22.3

devDependencies:
+ @types/react 18.2.64
+ @types/react-dom 18.2.21
+ @vitejs/plugin-react 4.2.1
+ eslint 8.57.0
+ eslint-plugin-react 7.34.0
+ eslint-plugin-react-hooks 4.6.0
+ eslint-plugin-react-refresh 0.4.5
+ vite 5.1.5

Done in 3.8s
```
 <p>

Uma vez instaladas as dependências, dentro da pasta frontend/src/utils há um arquivo onde estão declaradas as rotas do backend, seguindo o padrão do backend. Caso você tenha modificado a porta do backend, deverá modificar apenas a variável chamada BASE_URL neste arquivo. Por exemplo, se você configurou o backend com a porta 1234, a variável BASE_URL deverá ser redefinida da seguinte forma: `const BASE_URL = "http://localhost:1234";`. Esta é a única configuração a ser considerada no frontend, o que permite, caso seja feito um deploy tanto do frontend como do backend, mudar rapidamente do ambiente de desenvolvimento para um de produção.

Após instalar as dependências e verificar se a URL base do backend está correta, você pode iniciar a aplicação em um ambiente de desenvolvimento com o comando `pnpm dev` ou fazer o build da aplicação e visualizá-la em um ambiente quase idêntico ao de produção. Se optar pela preview local, você precisará executar dois comandos no terminal: primeiro `pnpm build` e, uma vez concluído o build, executar o comando para iniciar a aplicaçao recentemente buildada `pnpm preview`.

Tenha a consideraçao que dependendo da sua escolha a porta onde sera executada a aplicaçao sera diferente, para um ambiente de desenvolvimento o FronEnd estara disponivel no endereço http://localhost:5173/ e para o preview em http://localhost:4173/, neste ponto, deveriamos ter tanto o front como o back rodando, se visitar desde seu navegador de preferencia as URL anteriormente mensionadas dependendo de sua escolha, podera observar a rendericaçao da rota inicial que vai  por padrão para a busca de clientes na aplicaçao,  e caso voce não tenha cadastrados ainda neum cliente por meio de um cliente Rest como Thundeclient ou Insomia devera visualizar a siguiente tela...
</p>

## DESKTOP

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/15dbc547-c11a-47be-ba74-cdf15c25b659)

## MOBILE

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/a916e81b-ad2e-4977-b929-0c909622a882)


<p>
No header no canto direito da sua tela temos os links para Cadastrar Clientes, Buscar Clientes e Gerar Rotas, este componente assim como toda a aplicaçao e responsivo caso esteja em um dispositivo movel ou nas ferramentas de desenvolvimento do seu navegador numa resolucão de tela movel este sera um botão de tipo hamburger devera clicar nele para os links aparecer, vamos agora cadastrar um cliente, seleccione Cadastrar Cliente no menu antes mensionado e complete o formulario com todos os dados , e importante que estes dados sejam validos por isto temos o formulario controlado e no backend verificamos que estos dados estejam sendo enviados corretamente, mas não se preocupe o front retornara informaçao caso algum destes dados não cumplpa os requisito e guiara você a realizar um cadastro satisfatorio, recomendo a criaçao de varios clientes com latitud e longi tud diferentes, podera utilizar coordenadas reais ou imagine um plano cartesiano e utilize numeros inteiros para depois testar o endpoint do backend que devolve a melhor rota para visitar todos os clientes , ja que na proposta a empresa estara nas cordenadas 0,0  um cliente <code> Mengano com latitud -1 , longitud -1</code> esta mais perto que um cliente <code>Fulano com latitud 2 , longitud 2</code> e a rota otima para visitas sera começar  pelo cliente mais proximo que neste caso e Mengano, minha vontade foi de esta ordem ser ao contrario visando em que acho mais ventajoso que o final das visitas fosse o local mais proximo da empressa para facilitar o retorno do funcionario ao finalizar o expediente isto poderia ser facilmente modificado invertendo o array que o endponint devolve, talvez na versão 2.0 que voce acha ?.. 
Voltando ao ponto, a tela de cadastro de clientes e como mostrado na siguiente imagem...
</p>

## DESKTOP

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/4a1a7669-4b7c-42a4-870f-cea7ceb6ed4c)

## MOBILE

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/785ad87c-b9d0-4d20-966c-2f4a00059fde)




<p>
Uma vez tenha cadastrado os clientes que ache nessesario, podemos voltar a tela de Buscar Clientes para testar as funcionalidades, aqui pode-se buscar clientes na Base de Dados , na primera aba que e a padrão mostra-se todos os clientes , e não tem parametros de busca que possam ser colocados, nas outras abas você pode fazer a filtragem dos clientes cadastrados por nome, email ou telefone nestes casos, apos de realizar uma filtragem que devolva clientes aparecera na tela um botão para limpar a busca, no caso de nomes o BackEnd devolvera os clientes que tenham nomes parecidos com o informado tanto em minuscula como capitalizado, por exemplo se realizar uma busca por luis ele devolvera todos os clientes que no seu nome tenha tanto a palabra luis como Luis, imagine que tem um cliente Luis e outro Mariluise ambos seram considerados como matches de busca validos, ja no caso do telefone e o email a busca e mais restrita , devera se informar exatamente igual a como esta cadastrado na base de dados por que na minha logica de negocios estes dados especificos de cada cliente, e o email ainda mais especifico por que geralmente este e um meio de comunicaçao pessoal e nao de uso comun como poderia ser o telefone de uma residencia e por isso nao quis devolver telefones ou email´s com as mesmas regras de negocio que como as do nome.
A continuaçao podera ver alguns exemplos de esta tela nas siguientes imagens
</p>

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/7378a0ce-6baa-4093-b550-8c92e700ccc5)

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/562d3627-8b0d-40ea-bd32-3632e5db9949)

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/24527b80-ca5a-49bb-8190-2ca6e9e73e52)

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/e8b124bf-b0fc-4e88-9de1-a8b4ddd24063)

![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/26ce3c4a-b961-4161-b4cf-002fca78f06d)


<p>
Por último, podemos conhecer a funcionalidade de Gerar rota, esta é a mais simples do FrontEnd e talvez a mais difícil do BackEnd. No Front, quando clicar no link de Gerar Rota, apenas faz uma requisição para a rota do BackEnd onde será devolvido um array de usuários ordenados desde o mais próximo à latitude/longitude 0,0 até o mais longe deste ponto, e no FrontEnd será renderizada uma tabela com esta ordem, desde a parte superior da tabela com os mais próximos e na parte inferior da tabela com os mais distantes, assim o usuário poderá visitar os clientes um a um seguindo esta ordem.
</p>


![image](https://github.com/Luis-Vilar/FacilitaJuridico/assets/124309725/793203aa-0647-4d54-8a2f-ff33937e53d8)



