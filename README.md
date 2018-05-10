![AngularStarterKit](https://github.com/MscottB/AngularStarter/blob/master/src/assets/img/AngularStarterKit.png)

# Angular Starter Kit

Este proyecto se basa en el CLI de angular en su version 6. Al cual se le agregan nuevas opciones a las herramientas actualmente disponibles.

- [x] Pre Compilador [SASS](https://sass-lang.com/)
- [x] Modulo Router Incluido
- [x] Integracion Jest
- [x] integracion Prettier
- [ ] Integracion TestCafe - EN PROCESO
- [x] Integracion Bootstrap 4
- [x] Reduccion en el tamaño de las imagenes con Gulp + Plugins

## Como Ocupar AngularStarterKit

Instalar lo siguente:

* [Typescript](http://www.typescriptlang.org/) Por las dudas.

* [AngularCLI](https://cli.angular.io/) para ocupar los comandos del CLI y facilitar el desarrollo.

* [Yarn](https://yarnpkg.com/) Opcion a NPM, no es obligatorio, pero no esta demas probar.

se debe clonar el repositorio con el sigueinte comando.

> git clone https://github.com/MscottB/AngularStarter

A continuación, Installar las dependencias.

> Yarn Install

## Cambios Realizados

Las herramientas que tiene angular se mantiene, y se han agregado nuevas opciones las cuales son:

|       función       | herramienta angular |                    Nueva opcion                    |        Nuevo comando(Anteponer Yarn/NPM)         |
| :---: | :---: | :---: | :---: |
|    **Test Unit**    |    Karma/Jasmine    |      [Jest](https://facebook.github.io/jest/)      | `test:j`,`test:watch`,`test:ci`, `test:coverage` |
| **Test End-to-End** | Protactor/Selenium  | [TestCafe](https://devexpress.github.io/testcafe/) |                `e2e:tc`,`e2e:ci`                 |
|   **Formatting**    |       TSLint        |      TSLint+[Prettier](https://prettier.io/)       |                     `format`                     |
|**compress images** | No Posee | Gulp + Plugins | `img`,`tiny` |

## Posibles Problemas

En caso de presentar problemas Prettier con TSList por un tema de reglas, se debe ocupar el siguente comando:

> yarn tslint-config-prettier-check ./tslint.json

# Datos Extras

### Opciones para comprimir imagenes

La configuracion de origen/destino de las imagenes se encuentra en **gulp-config/path-gulpfile.json**, actualmente se poseen dos opciones:

- [tiny](https://tinypng.com/): el cual no ocupa la API, y es capaz de trabajar con 20 imagenes(PNG/JPG) al mismo tiempo.(Necesita conexion a internet) - **Mayor poder de Compresión** 

- img: Comprime las imagenes(JPG,PNG,GIF,SVG) sin la necesidad de conexion a internet.- **Menor poder de Compresión**

--------------------------------------
<pre><code>&lt;div class="footer"&gt;
    &amp;copy; 2018 Michael Scott B.
&lt;/div&gt;
</code></pre>
