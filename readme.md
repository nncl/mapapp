# Exemplo de Mapa com Ionic

## Ao clonar

Ao clonar o projeto, vá até seu diretório via terminal e digite:

```sh
ionic state reset
```

## Configuração

Passos:

- instalar o plugin `cordova-plugin-geolocation` via cordova
- instalar o `ngCordova` via bower
- adicionar o plugin ngmap
- adicionar o arquivo js do ngCordova em `index.html`
- injetar módulo ngCordova em `app.js`
- injetar módulo ngMap em `app.js`

CLI:

```sh
cordova plugin add cordova-plugin-geolocation
bower install ngCordova --save-dev
bower install ngmap --save-dev
```

**index.html**:

```html
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="lib/ngmap/build/scripts/ng-map.js"></script>
```

**app.js**:

```js
angular.module('starter', [
    'ionic',
    'ngCordova',
    'ngmap'
])
```
