---
title:  Google Fonts
author: Daniel Weibel
date:   21 September 2017
last_updated: 21 September 2017
---

# Introduction

[Google Fonts](https://developers.google.com/fonts/) (formerly called Google Web Fonts) is a provider of [web fonts](https://de.wikipedia.org/wiki/Webtypografie). 

[Web fonts](https://de.wikipedia.org/wiki/Webtypografie) means that the web browser can download any desired font from an external location at the time of rendering the website, rather than being restricted to use one of the fonts which are preinstalled on the user's system. This works internally with the [`@font-face`](https://www.w3.org/TR/css-fonts-3/#font-resources) rule of CSS3.

# Google Fonts API

Google Fonts is used via the [Google Fonts API](https://developers.google.com/fonts/docs/getting_started). This is a simple HTTP API that, given a query for a specific font, returns a chunk of CSS3, including a set of `@font-face` rules that contain all the information for the browser how to download a specific font. This chunk of CSS is then included in a web page that requires this font, and when the browser reads the `@font-face` rules, it downloads this font and renders the text of the page with it.

All the CSS `@font-face` stuff happens completely under the hood, and users of the Google Fonts API don't need to bother with it. However, knowing these internal concepts helps to better understand the behaviour of the Google Fonts API.

## Under the Hood

Here is an example query to the Google Fonts API for the font *Source Sans Pro*:

<https://fonts.googleapis.com/css?family=Source+Sans+Pro>

This might return something like this:

~~~css
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local('Source Sans Pro Regular'),
       local('SourceSansPro-Regular'),
       url(https://fonts.gstatic.com/s/sourcesanspro/v10/
            ODelI1aHBYDBqgeIAH2zlNHq-FFgoDNV3GTKpHwuvtI.woff) format('woff');
}
~~~

> Note that in a recent browser the return value consists actually of multiple `@font-face` rules, one for each character subset that the font supports, e.g. *latin*, *cyrillic*, *greek*, etc. In addition these `@font-face` rules contain the additional descriptor [`unicode-range`](https://www.w3.org/TR/css-fonts-3/#unicode-range-desc) with a list of Unicode code point ranges. The above output actually occurs only in browsers that do not support the `unicode-range` descriptor of the `@font-face` rule. However, we use this deprecated return value here, because it allows to describe the basic concepts with less clutter.

This chunk must be injected to the page's CSS. This can be done for example from within the page's external CSS file (or in the `<style>` tag of the page's HTML header):

~~~css
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
/* Other CSS declarations */
~~~

Or it can be linked to as an external CSS file in the HTML header:

~~~html
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro">
    <!-- Other linked CSS files, or internal CSS in <style> tag -->
</head>
~~~

In any case, when the browser parses the injected `@font-face` rule, it is instructed to download the font *Source Sans Pro* (regular style, 400 weight) from <https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlNHq-FFgoDNV3GTKpHwuvtI.woff>. The target in this exampel is a font file in [WOFF](https://en.wikipedia.org/wiki/Web_Open_Font_Format) format, and it is really just a normal font file like an OTF or TTF file. If the browser has this file, it has this font basically "installed" and ready to use.

Now, at any point in the CSS after the injected `@font-face` rule, we can use the *Source Sans Pro* font (regular style, 400 weight). For example:

~~~css
body {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
}
~~~

> Actually, as can be seen in the `src` descriptor of above `@font-face` rule, before downloading the file, the web browser checks if a font called *Source Sans Pro Regular* or *SourceSansPro-Regular* is installed on the local system or in the browser's cache. If so, the browser uses this local font file instead of downloading the remote one. The items in the `src` descriptor are possible sources for the given font, and the browser stops processing them as soon as it encounters the first match.

It is important to note that the response of the Google Fonts API is **tailored to the client that makes the request** (i.e. the web browser). Making the same query from different web browsers results in different responses. For example, if the above query is made from a browser that supports the newer WOFF2 font file format, then the Google API would include an URL to a `.woff2` file, rather than a `.woff` file. Thus, when using the Google Font API, we should never write the `@font-face` rules directly into the page's CSS, but use the URL as shown above, and let the browser do the request at the time of rendering.

In addition, the URLs of the font files that the Google Fonts API returns (in the `src` descriptor of `@font-face`) are probably not guaranteed to be stable, and they shouldn't be used independently from the Google API.

## Basic API Usage

    

## Query Composition

# Google Font Catalog

<https://fonts.google.com/>


# References

- [Getting Started with the Google Fonts API](https://developers.google.com/fonts/docs/getting_started)
- [Web Font Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)
