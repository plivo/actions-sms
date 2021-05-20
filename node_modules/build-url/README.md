# build-url

[![Build Status](https://travis-ci.org/steverydz/build-url.svg?branch=master)](https://travis-ci.org/steverydz/build-url)

A library that builds a URL, including it's path, query parameters and fragment identifier. Works in node and in the browser.

## Installation

To install with npm:

```
npm install build-url --save
```

## Usage

Usage in the browser:

```
<script src="../path/to/lib/build-url.js"></script>
<script>
buildUrl('http://example.com', {
  path: 'about',
  hash: 'contact',
  queryParams: {
    foo: bar,
    bar: ['foo', 'bar']
  }
});
</script>
```

Usage with ES6 modules:
```
import buildUrl from '../path/to/lib/build-url';

buildUrl('http://example.com', {
  path: 'about',
  hash: 'contact',
  queryParams: {
    foo: bar,
    bar: ['foo', 'bar']
  }
});
```

Usage with node:

```
var buildUrl = require('build-url');

buildUrl('http://example.com', {
  path: 'about',
  hash: 'contact',
  queryParams: {
    foo: bar,
    bar: ['foo', 'bar']
  }
});
```

## Options

The `buildUrl` function accepts two arguments. The first is a URL e.g. `http://example.com`. The second is an object where you can specify the `path`, `hash`, `lowerCase`, and an object of `queryParams`:

```
buildUrl('http://example.com', {
  path: 'about',
  hash: 'contact',
  queryParams: {
    foo: 'bar',
    bar: 'baz'
  }
});

// returns http://example.com/about?foo=bar&bar=baz#contact
```

If you pass an array to the `queryParams` object, it will be transformed to a comma separated list:

```
buildUrl('http://example.com', {
  queryParams: {
    foo: 'bar',
    bar: ['one', 'two', 'three']
  }
});

// returns http://example.com?foo=bar&bar=one,two,three
```

If you want to change the `path`, `hash` and `queryParams` case to all lowercase  then pass `lowerCase` as true in arguments, default value of this will be `false`:

```
buildUrl('http://example.com', {
  path: 'AbouT',
  hash: 'ConTacT',
  lowerCase: true,
  queryParams: {
    foo: 'bAr',
    bar: ['oNe', 'TWO', 'thrEE', 123]
  }
});

// returns http://example.com/about?foo=bar&bar=one,two,three,123#contact
```

If you pass an array to the `queryParams` object, and want that they should not be comma separated use `disableCSV`:

```
buildUrl('http://example.com', {
  disableCSV: true,
  queryParams: {
    foo: 'bar',
    bar: ['one', 'two', 'three']
  }
});

// returns http://example.com?foo=bar&bar=one&bar=two&bar=three
```


If you only want the query string, path, hash, or any combination of the three you can skip the URL parameter or pass in an empty string or null:

```
buildUrl('', {
  queryParams: {
    foo: 'bar',
    bar: 'baz'
  }
});

// returns ?foo=bar&bar=baz

buildUrl(null, {
  queryParams: {
    foo: 'bar',
    bar: 'baz'
  }
});

// returns ?foo=bar&bar=baz

buildUrl({
  queryParams: {
    foo: 'bar',
    bar: 'baz'
  }
});
```

## License

This is licensed under an MIT License. [See details](LICENSE)
