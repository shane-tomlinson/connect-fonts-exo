# connect-fonts-exo

Exo fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-exo");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/exo-black-italic/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/exo-black-italic,exo-black,exo-bold-italic,exo-bold,exo-demibold-italic,exo-demibold,exo-extrabold-italic,exo-extrabold,exo-extralight-italic,exo-extralight,exo-light-italic,exo-light,exo-medium-italic,exo-medium,exo-regular-italic,exo-regular,exo-thin-italic,exo-thin/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* exo-black-italic
* exo-black
* exo-bold-italic
* exo-bold
* exo-demibold-italic
* exo-demibold
* exo-extrabold-italic
* exo-extrabold
* exo-extralight-italic
* exo-extralight
* exo-light-italic
* exo-light
* exo-medium-italic
* exo-medium
* exo-regular-italic
* exo-regular
* exo-thin-italic
* exo-thin

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/exo-black-italic/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin
* en

5. Set your CSS up to use the new font by using the "Exo" font-family.
```
    body {
      font-family: 'Exo', 'sans-serif', 'serif';
    }
```

## Font Info
Exo

* Copyright: Copyright (c) 2011 Natanael Gama (exo@ndiscovered.com), with Reserved Font Name "Exo"

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-exo
* Repo: https://github.com/shane-tomlinson/connect-fonts-exo

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* https://github.com/stomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/


  

