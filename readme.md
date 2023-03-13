
# React Icon Extractor

This script extracts all used icons in a React project and saves them as SVG files in a specified directory.

## Installation

To use this script, you need to install the required packages:

```shell
npm install react-icon-extractor or yarn add react-icon-extractor
```

## Usage


Create a script in your project's package.json file and define this script to run react-icons-localizer:
```json
{  
"scripts":  { 
 "react-icon-extractor":  "react-icon-extractor"  
 }
}
```
#### Run command for npm
```shell
npm react-icon-extractor
```

#### Run command for yarn
```shell
yarn react-icon-extractor
```


## Icons
This script only supports icons from the following icon families:

Icon Library|License|Version|Count
---|---|---|---
[Font Awesome](https://fontawesome.com/)|[CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)|5.15.4 7d3d774145ac38663f6d1effc6def0334b68ab7e|1612
[Ionicons 4](https://ionicons.com/)|[MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)|4.6.3|696
[Ionicons 5](https://ionicons.com/)|[MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)|5.5.0|1332
[Material Design icons](http://google.github.io/material-design-icons/)|[Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)|4.0.0-12-g63c5cb3060 63c5cb306073a9ecdfd3579f0f696746ab6305f6|3650
[Typicons](http://s-ings.com/typicons/)|[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)|2.1.2|336
[Github Octicons icons](https://octicons.github.com/)|[MIT](https://github.com/primer/octicons/blob/master/LICENSE)|8.5.0|184
[Feather](https://feathericons.com/)|[MIT](https://github.com/feathericons/feather/blob/master/LICENSE)|4.28.0|286
[Game Icons](https://game-icons.net/)|[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)|12920d6565588f0512542a3cb0cdfd36a497f910|4040
[Weather Icons](https://erikflowers.github.io/weather-icons/)|[SIL OFL 1.1](http://scripts.sil.org/OFL)|2.0.12|219
[Devicons](https://vorillaz.github.io/devicons/)|[MIT](https://opensource.org/licenses/MIT)|1.8.0|192
[Ant Design Icons](https://github.com/ant-design/ant-design-icons)|[MIT](https://opensource.org/licenses/MIT)|4.2.1|789
[Bootstrap Icons](https://github.com/twbs/icons)|[MIT](https://opensource.org/licenses/MIT)|1.5.0|1846
[Remix Icon](https://github.com/Remix-Design/RemixIcon)|[Apache License Version 2.0](http://www.apache.org/licenses/)|2.5.0|2271
[Flat Color Icons](https://github.com/icons8/flat-color-icons)|[MIT](https://opensource.org/licenses/MIT)|1.0.2|329
[Grommet-Icons](https://github.com/grommet/grommet-icons)|[Apache License Version 2.0](http://www.apache.org/licenses/)|4.6.2|615
[Heroicons](https://github.com/tailwindlabs/heroicons)|[MIT](https://opensource.org/licenses/MIT)|1.0.4|460
[Heroicons 2](https://github.com/tailwindlabs/heroicons)|[MIT](https://opensource.org/licenses/MIT)|2.0.8|530
[Simple Icons](https://simpleicons.org/)|[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)|5.16.0|2024
[IcoMoon Free](https://github.com/Keyamoon/IcoMoon-Free)|[CC BY 4.0 License](undefined)|d006795ede82361e1bac1ee76f215cf1dc51e4ca|491
[BoxIcons](https://github.com/atisawd/boxicons)|[CC BY 4.0 License](undefined)|2.0.9|757
[css.gg](https://github.com/astrit/css.gg)|[MIT](https://opensource.org/licenses/MIT)|2.0.0|704
[VS Code Icons](https://github.com/microsoft/vscode-codicons)|[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)|0.0.23|383
[Tabler Icons](https://github.com/tabler/tabler-icons)|[MIT](https://opensource.org/licenses/MIT)|1.68.0|1978


## License

This script is licensed under the MIT License.

## Library Used

This script uses the [React Icons](https://www.npmjs.com/package/react-icons) library.