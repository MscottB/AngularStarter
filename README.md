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
- [x] Agregado i18n Pipes, trabajando en la configuracion regional **es-CL**

## Como Ocupar AngularStarterKit

Instalar lo siguente:

* [Typescript](http://www.typescriptlang.org/) Por las dudas.

* [AngularCLI](https://cli.angular.io/) para ocupar los comandos del CLI y facilitar el desarrollo.

* [Yarn](https://yarnpkg.com/) Opcion a NPM, no es obligatorio, pero no esta demas probar.

se debe clonar el repositorio con el sigueinte comando.

`git clone https://github.com/MscottB/AngularStarter`

A continuación, Installar las dependencias.

`Yarn Install`

Y por ultimo iniciar angular.

`Yarn start`

## Cambios Realizados

Las herramientas que tiene angular se mantiene, y se han agregado nuevas opciones las cuales son:

|       función       | herramienta angular |                    Nueva opcion                    |        Nuevo comando(Anteponer Yarn/NPM)         |
| :---: | :---: | :---: | :---: |
|    **Test Unit**    |    Karma/Jasmine    |      [Jest](https://facebook.github.io/jest/)      | `test-j`,`test-watch`,`test-ci`, `test-coverage` |
| **Test End-to-End** | Protactor/Selenium  | [TestCafe](https://devexpress.github.io/testcafe/) |                `e2e-tc`,`e2e-ci`                 |
|   **Formatting**    |       TSLint        |      TSLint+[Prettier](https://prettier.io/)       |                     `format`                     |
|**compress images** | No Posee | Gulp + Plugins | `img`,`tiny` |

## Posibles Problemas

En caso de presentar problemas Prettier con TSList por un tema de reglas, se debe ocupar el siguente comando:

`yarn tslint-config-prettier-check ./tslint.json`

Al realizar test con jest, para disminuir los codigos de error que puede devolver zone, habilitar la siguiente linea en el archivo **src/setupJest.ts**:

`Error.stackTraceLimit = 1;`

# Datos Extras

### i18n Pipes

Se ha agregado esta caracteristica, para trabajar los siguientes pipes, dependiendo de la configuracion regional aplicada, en este caso es **es-CL**(Por defecto angular trabaja en **en-US**).

Para saber las opciones disponibles ver el siguiente [enlace](https://github.com/angular/angular/tree/master/packages/common/locales).

#### Pipes:
- [DatePipe](https://angular.io/api/common/DatePipe)
- [CurrencyPipe](https://angular.io/api/common/CurrencyPipe)(para saber el codigo de divisa de un pais ver el siguiente [enlace](https://es.wikipedia.org/wiki/ISO_4217))
- [DecimalPipe](https://angular.io/api/common/DecimalPipe)
- [PercentPipe](https://angular.io/api/common/PercentPipe)

### Opciones para comprimir imagenes

La configuracion de origen/destino de las imagenes se encuentra en **gulp-config/path-gulpfile.json**, actualmente se poseen dos opciones:

- [tiny](https://tinypng.com/): el cual no ocupa la API, y es capaz de trabajar con 20 imagenes(PNG/JPG) al mismo tiempo.(Necesita conexion a internet) - **Mayor poder de Compresión** 

- img: Comprime las imagenes(JPG,PNG,GIF,SVG) sin la necesidad de conexion a internet.- **Menor poder de Compresión**

--------------------------------------
#### Author

Michael Scott Bravo.

- [Github/MscottB](https://github.com/MscottB)
#### License

Copyright © 2018, Michael Scott Bravo. Released under the [MIT License](https://github.com/MscottB/AngularStarter/blob/master/LICENSE).