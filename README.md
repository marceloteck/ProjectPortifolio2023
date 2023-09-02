# Portfólio Marcelo Henrique 2023 - branch installation

![GitHub repo size](https://img.shields.io/github/repo-size/marceloteck/ProjectPortifolio2023?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/marceloteck/ProjectPortifolio2023?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/marceloteck/ProjectPortifolio2023?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/marceloteck/ProjectPortifolio2023?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/marceloteck/ProjectPortifolio2023?style=for-the-badge)

<img src="/docs/image/model1.1.png" alt="Exemplo imagem">

> Projeto criado com Laravel Vue.js e Inertia.js

### Recursos Necessários

Instalações necessárias, frameworks e bibliotecas

- [x] php 8.1x
- [x] Laravel 10x
- [x] Vue.js 3x
- [x] Inertia.js 1.0x
- [x] Sass 1.64x
- [x] Bootstrap 5.2x
- [x] vite 4.4x
- [x] node 18.8x



## 💻 Ferramentas usadas nesse projeto

Antes de começar, pode usar as seguintes ferramentas:

* [Vs Code Desktop](https://code.visualstudio.com/) ou [VsCode Web](https://vscode.dev/)
* [Laragon](https://laragon.org/index.html) 
* [Github Desktop](https://desktop.github.com/)


## 🚀 Instalando Recursos

#### Instalando Laravel 

![laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
<br>

```sh
composer create-project laravel/laravel ProjectPortifolio2023
```
#### Instalando Vue.js e o plugin do vitejs

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) 
<br>

```sh
npm install vue@next @vitejs/plugin-vue
```
#### Instalando breeze do Laravel

```sh
composer require laravel/breeze --dev
```
#### Configurando breeze para o vue.js

```sh
php artisan breeze:install

php artisan migrate
npm install
npm run dev
```
> Nas configurações do breeze deve ser escolhida vue + inertia, e assim o Inertia será instalado Automaticamente.


#### Instalando o Sass
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
<br>

```sh
npm install -g sass

```
Para modo desenvolvimento
```sh
npm install -D sass
```

#### Instalando o Bootstrap

![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

```sh
npm install bootstrap
```

Instalando o popperjs
```sh
npm i @popperjs/core
```
#### Importando o bootstrap 5 no main.js

```javascript
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
```

## ☕ Como usar o projeto

Depois de baixar o repositorio execultar

```sh
npm install
```
e também
```sh
composer install
```
 E depois criar e editar o arquivo .env
