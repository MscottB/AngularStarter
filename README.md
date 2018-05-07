# Angular Starter Kit

Este proyecto se basa en el CLI de angular en su version 6. Al cual se le realizaron cambios en sus herramientas

## Como Ocupar AngularStarterKit

Primer se debe clonar el repositorio con el sigueinte comando.

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
