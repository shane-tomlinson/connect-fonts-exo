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


  // package license info
  "license": {
    "name": "SIL Open Font License",
    "version": "1.1",
    "abbreviation": "OFL-1.1",
    "url": "http://scripts.sil.org/OFL",
    "text": "Copyright 2010, 2012 Adobe Systems Incorporated (http://www.adobe.com/), with Reserved Font Name 'Source'. Source is a trademark of Adobe Systems Incorporated in the United States and/or other countries.\n\nThis Font Software is licensed under the SIL Open Font License, Version 1.1.\n\nThis license is copied below, and is also available with a FAQ at: http://scripts.sil.org/OFL\n\n\n-----------------------------------------------------------\nSIL OPEN FONT LICENSE Version 1.1 - 26 February 2007\n-----------------------------------------------------------\n\nPREAMBLE\nThe goals of the Open Font License (OFL) are to stimulate worldwide\ndevelopment of collaborative font projects, to support the font creation\nefforts of academic and linguistic communities, and to provide a free and\nopen framework in which fonts may be shared and improved in partnership\nwith others.\n\nThe OFL allows the licensed fonts to be used, studied, modified and\nredistributed freely as long as they are not sold by themselves. The\nfonts, including any derivative works, can be bundled, embedded, \nredistributed and/or sold with any software provided that any reserved\nnames are not used by derivative works. The fonts and derivatives,\nhowever, cannot be released under any other type of license. The\nrequirement for fonts to remain under this license does not apply\nto any document created using the fonts or their derivatives.\n\nDEFINITIONS\n\"Font Software\" refers to the set of files released by the Copyright\nHolder(s) under this license and clearly marked as such. This may\ninclude source files, build scripts and documentation.\n\n\"Reserved Font Name\" refers to any names specified as such after the\ncopyright statement(s).\n\n\"Original Version\" refers to the collection of Font Software components as\ndistributed by the Copyright Holder(s).\n\n\"Modified Version\" refers to any derivative made by adding to, deleting,\nor substituting -- in part or in whole -- any of the components of the\nOriginal Version, by changing formats or by porting the Font Software to a\nnew environment.\n\n\"Author\" refers to any designer, engineer, programmer, technical\nwriter or other person who contributed to the Font Software.\n\nPERMISSION & CONDITIONS\nPermission is hereby granted, free of charge, to any person obtaining\na copy of the Font Software, to use, study, copy, merge, embed, modify,\nredistribute, and sell modified and unmodified copies of the Font\nSoftware, subject to the following conditions:\n\n1) Neither the Font Software nor any of its individual components,\nin Original or Modified Versions, may be sold by itself.\n\n2) Original or Modified Versions of the Font Software may be bundled,\nredistributed and/or sold with any software, provided that each copy\ncontains the above copyright notice and this license. These can be\nincluded either as stand-alone text files, human-readable headers or\nin the appropriate machine-readable metadata fields within text or\nbinary files as long as those fields can be easily viewed by the user.\n\n3) No Modified Version of the Font Software may use the Reserved Font\nName(s) unless explicit written permission is granted by the corresponding\nCopyright Holder. This restriction only applies to the primary font name as\npresented to the users.\n\n4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font\nSoftware shall not be used to promote, endorse or advertise any\nModified Version, except to acknowledge the contribution(s) of the\nCopyright Holder(s) and the Author(s) or with their explicit written\npermission.\n\n5) The Font Software, modified or unmodified, in part or in whole,\nmust be distributed entirely under this license, and must not be\ndistributed under any other license. The requirement for fonts to\nremain under this license does not apply to any document created\nusing the Font Software.\n\nTERMINATION\nThis license becomes null and void if any of the above conditions are\nnot met.\n\nDISCLAIMER\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT\nOF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE\nCOPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nINCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL\nDAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\nFROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM\nOTHER DEALINGS IN THE FONT SOFTWARE.\n"
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
