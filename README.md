# 🪤 bind-mousetrap-global

A [mousetrap-global-bind](https://github.com/Elvynia/mousetrap-global-bind/blob/master/mousetrap-global-bind.js) module that doesn't assume the presence of a global object.

Perfect for use in a module environment like create-react-app as opposed to a `<script />` tag approach.


```bash
npm i bind-mousetrap-global
```

## Usage

**Setup**

```js
import mousetrap from 'mousetrap'
import addGlobalBinds from 'bind-mousetrap-global'

addGlobalBinds(mousetrap)
```

**Use**

```js
// This shortcut will fire even if the user has an input focused
mousetrap.bindGlobal('mod+s', saveDocument)
// This one won't
mousetrap.bind('n', newDocumet)
```

## License note

This is a rewrite inspired by similar packages from  @ccampbell and @Elvynia. It does not contain any of their code.
