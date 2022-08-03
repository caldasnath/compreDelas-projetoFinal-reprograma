<h1 align="center">
<p align="center">Compre Delas 👩‍💻👩‍🏭👩‍🔧👩‍🍳 <p>
</h1> 

## Projeto final - {reprograma}

Sejam bem-vindos, esse projeto foi desenvolvido e entregue como etapa de conclusão da Turma On16 do Bootcamp de Desenvolvimento Back-End da Reprograma.


## Introdução

Além das perdas humanas, a pandemia trouxe também mais instabilidade econômica e aprofundamento da desigualdade social e de gênero no país. A ideia do 'Compre Delas' surgiu no momento da organização da festa de 2 anos do meu filho. Durante o processo, conheci muitas fornecedoras que - assim como eu - perderam seus empregos formais na pandemia e precisaram se reinventar, buscando alternativas pra sustentar suas famílias.



## Objetivo

**Compre Delas** é uma API com o objetivo de reunir e promover negócios, produtos ou serviços ofertados/prestados por mulheres que perderam sua fonte de renda devido a pandemia de covid-19.

Acesse a aplicação [aqui](https://compre-delas.herokuapp.com/) 

Acesse a documentação [aqui](https://compre-delas.herokuapp.com/compre-delas/)

## Linguagem e banco de dados utilizados

- JavaScript/NodeJS
- Mongo DB

## *Pacotes utilizados*

- express
- cors
- nodemon
- dotenv-safe
- mongoose
- bcrypt
- jsonwebtoken
- jest
- swagger

## Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/caldasnath/compreDelas-projetoFinal-reprograma

# Entrar na pasta do repositório
$ cd compreDelas-projetoFinal-reprograma

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start
```

## **Rotas/Endpoints**

## *Rotas de usuários*

| Rotas  | Descrição  |
| --- | --- |
| POST/user/ | Cadastro de usuário |
| POST/user/login | Login de usuário |

## *Rotas de empreendedoras*

| Rotas | Descrição |
| --- | --- |
| POST/cadastro | Cadastro de perfil da empreendedora |
| GET/empreendedoras | Lista todos perfis das empreendedoras |
| GET/categoria | Lista os perfis das empreendedoras filtrado por categoria |
| GET/localidade | Lista todos os perfis das empreendedoras filtrado por uma localidade específica  |
| PUT/:id | Altera o cadastro da empreendedora selecionada |
| PATCH/telefone/:id | Altera o campo de telefone da empreendedora |
| DELETE/:id | Deleta perfil da empreendedora |

<br>
<br>
<br>
<br>
<br>



<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/nathalia-caldas" target="_blank"><img src="https://img.shields.io/badge/-Nathalia_Caldas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nathalia-caldas"></a> </p>

