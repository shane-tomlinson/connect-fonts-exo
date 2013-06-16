const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-exo",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-exo",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-exo",
    "bugsurl": false
  },
  
  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson,https://github.com/stomlinson",
    "twitter": "@shane_tomlinson"
  },
  

  // Common font information
  "font_common": {
    "names": "exo-black-italic,exo-black,exo-bold-italic,exo-bold,exo-demibold-italic,exo-demibold,exo-extrabold-italic,exo-extrabold,exo-extralight-italic,exo-extralight,exo-light-italic,exo-light,exo-medium-italic,exo-medium,exo-regular-italic,exo-regular,exo-thin-italic,exo-thin",
    "family": "Exo",
    "copyright": "Copyright (c) 2011 Natanael Gama (exo@ndiscovered.com), with Reserved Font Name \"Exo\""
  },


  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "exo-black-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "800",
        "local": [ "Exo Black Italic", "Exo-Black-Italic" ]
      },
      "exo-black": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "900",
        "local": [ "Exo Black", "Exo-Black" ]
      },
      "exo-bold-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Exo Bold Italic", "Exo-Bold-Italic" ]
      },
      "exo-bold": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Exo Bold", "Exo-Bold" ]
      },
      "exo-demibold-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "600",
        "local": [ "Exo Demi Bold Italic", "Exo-DemiBold-Italic" ]
      },
      "exo-demibold": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "600",
        "local": [ "Exo Demi Bold", "Exo-DemiBold" ]
      },
      "exo-extrabold-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "800",
        "local": [ "Exo Extra Bold Italic", "Exo-ExtraBold-Italic" ]
      },
      "exo-extrabold": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "800",
        "local": [ "Exo Extra Bold", "Exo-ExtraBold" ]
      },
      "exo-extralight-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "200",
        "local": [ "Exo Extra Light Italic", "Exo-ExtraLight-Italic" ]
      },
      "exo-extralight": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "200",
        "local": [ "Exo Extra Light", "Exo-ExtraLight" ]
      },
      "exo-light-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "200",
        "local": [ "Exo Light Italic", "Exo-Light-Italic" ]
      },
      "exo-light": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Exo Light", "Exo-Light" ]
      },
      "exo-medium-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "500",
        "local": [ "Exo Medium Italic", "Exo-Medium-Italic" ]
      },
      "exo-medium": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "500",
        "local": [ "Exo Medium", "Exo-Medium" ]
      },
      "exo-regular-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Exo Regular Italic", "Exo-Regular-Italic" ]
      },
      "exo-regular": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Exo Regular", "Exo-Regular" ]
      },
      "exo-thin-italic": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "100",
        "local": [ "Exo Thin Italic", "Exo-Thin-Italic" ]
      },
      "exo-thin": {
        "fontFamily": "Exo",
        "fontStyle": "normal",
        "fontWeight": "100",
        "local": [ "Exo Thin", "Exo-Thin" ]
      }
  }
};
