# Angular Starter Kit

Este proyecto se basa en el CLI de angular en su version 6. Al cual se le nuevas opciones a las herramientas actualmente disponibles.


- [x] Pre Compilador [SASS](https://sass-lang.com/)
- [x] Modulo Router Incluido  

## Como Ocupar AngularStarterKit

Instalar lo siguente:

- [Typescript](http://www.typescriptlang.org/) Por las dudas.

- [AngularCLI](https://cli.angular.io/) para ocupar los comandos del CLI y facilitar el desarrollo.

 se debe clonar el repositorio con el sigueinte comando.

> git clone https://github.com/MscottB/AngularStarter

A continuación, Installar las dependencias.

> Yarn Install

## Cambios Realizados

Las herramientas que tiene angular se mantiene, y se han agregado nuevas opciones las cuales son:

| función | herramienta angular | Nueva opcion | Nuevo comando(Anteponer Yarn/NPM)   |
| :---: | :---: | :---: | :---: |
| **Test Unit** | Karma/Jasmine | [Jest](https://facebook.github.io/jest/) | `test:j`,`test:watch`,`test:ci`, `test:coverage` |
| **Test End-to-End** | Protactor/Selenium  | [TestCafe](https://devexpress.github.io/testcafe/) | `e2e:tc`,`e2e:ci` |
| **Formatting** | TSLint | TSLint+Prettier | `format`   |

## Posibles Problemas

En caso de presentar problemas Prettier con TSList por un tema de reglas, se debe ocupar el siguente comando:

> yarn tslint-config-prettier-check ./tslint.json

# Datos Extras

### Comparacion prueba unitaria Karma vs Jest

![Click para ver comparacion](https://cdn-images-1.medium.com/max/800/0*s9xWHdUAHYgIeS7X.png)
