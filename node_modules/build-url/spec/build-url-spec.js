describe('buildUrl', function () {
  var buildUrl = require('../dist/build-url');

  it('should be defined', function () {
    expect(buildUrl).toBeDefined();
  });

  it('should return undefined if called with no arguments', function () {
    expect(buildUrl()).toBe(undefined);
  });

  it('should return a string if called with an argument', function () {
    expect(typeof(buildUrl('something'))).toEqual('string');
  });

  it('should append a path when passed as an option', function () {
    expect(buildUrl('http://example.com', {
      path: 'about/me'
    })).toEqual('http://example.com/about/me');
  });

  it('should append a path when passed an option with a leading "/"', function () {
    expect(buildUrl('http://example.com', {
      path: '/about/me'
    })).toEqual('http://example.com/about/me');
  });

  it('should append a query string when passed as an option', function () {
    expect(buildUrl('http://example.com', {
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('http://example.com?foo=bar&bar=baz');
  });

  it('should transform an array to a comma separated list if part of queryParams', function () {
    expect(buildUrl('http://example.com', {
      queryParams: {
        foo: 'bar',
        bar: ['one', 'two', 'three']
      }
    })).toEqual('http://example.com?foo=bar&bar=one%2Ctwo%2Cthree');
  });

  it('should append a fragment identifier when passed as an option', function () {
    expect(buildUrl('http://example.com', {
      hash: 'contact'
    })).toEqual('http://example.com#contact');
  });

  it('should append a path and a query string when passed as options', function () {
    expect(buildUrl('http://example.com', {
      path: 'about/me',
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('http://example.com/about/me?foo=bar&bar=baz');
  });

  it('should append a path and a fragment identifier when passed as options', function () {
    expect(buildUrl('http://example.com', {
      path: 'about/me',
      hash: 'contact'
    })).toEqual('http://example.com/about/me#contact');
  });

  it('should append a path, query string and a fragment identifier when passed as options', function () {
    expect(buildUrl('http://example.com', {
      path: 'about/me',
      hash: 'contact',
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('http://example.com/about/me?foo=bar&bar=baz#contact');
  });

  it('should append a query string and a fragment identifier when passed as options', function () {
    expect(buildUrl('http://example.com', {
      hash: 'contact',
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('http://example.com?foo=bar&bar=baz#contact');
  });

  it('should return only the query string when URL parameter is an empty string', function () {
    expect(buildUrl('', {
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('?foo=bar&bar=baz');
  });

  it('should return only the query string when URL parameter is null', function () {
    expect(buildUrl(null, {
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('?foo=bar&bar=baz');
  });

  it('should return only the query string when URL parameter is not present', function () {
    expect(buildUrl({
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('?foo=bar&bar=baz');
  });

  it('should return only the hash when URL parameter is an empty string', function () {
    expect(buildUrl('', {
      hash: 'about'
    })).toEqual('#about');
  });

  it('should return only the hash when URL parameter is null', function () {
    expect(buildUrl(null, {
      hash: 'about'
    })).toEqual('#about');
  });

  it('should return only the has when URL parameter is not present', function () {
    expect(buildUrl({
      hash: 'about'
    })).toEqual('#about');
  });

  it('should return only the path when URL parameter is an empty string', function () {
    expect(buildUrl('', {
      path: 'contact'
    })).toEqual('/contact');
  });

  it('should return only the path when URL parameter is null', function () {
    expect(buildUrl(null, {
      path: 'contact'
    })).toEqual('/contact');
  });

  it('should return only the path when URL parameter is not present', function () {
    expect(buildUrl({
      path: 'contact'
    })).toEqual('/contact');
  });

  it('should return only formatted options when URL parameter is an empty string', function () {
    expect(buildUrl('', {
      path: 'contact',
      hash: 'about',
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('/contact?foo=bar&bar=baz#about');
  });

  it('should return only formatted options when URL parameter is null', function () {
    expect(buildUrl(null, {
      path: 'contact',
      hash: 'about',
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('/contact?foo=bar&bar=baz#about');
  });

  it('should return only formatted options when URL parameter is not present', function () {
    expect(buildUrl({
      path: 'contact',
      hash: 'about',
      queryParams: {
        foo: 'bar',
        bar: 'baz'
      }
    })).toEqual('/contact?foo=bar&bar=baz#about');
  });

  it('should not append a queryParam if it\'s undefined', function () {
    expect(buildUrl('http://example.com', {
      queryParams: {
        foo: 'bar',
        bar: void 0
      }
    })).toEqual('http://example.com?foo=bar');
  });

  it('should not show a double slash with domain', function () {
    expect(buildUrl('http://example.com/', {
      path: '/contact'
    })).toEqual('http://example.com/contact');
  });

  it('should encode query parameters', () => {
    const queryParams = {
      param0: 'Sanford & Sons',
      param1: 'O\'Reilly',
      param2: 'Hawai`i',
      param3: '"Bull" Connor',
      param4: 'Lech Wałęsa',
      param5: 'Herr Müller',
    };
    const url = buildUrl('https://example.com', { queryParams  });
    const queryParamString =
      Object
        .values(queryParams)
        .map((param, i) => `param${i}=${encodeURIComponent(param)}`)
        .join('&');

    expect(url).toEqual(`https://example.com?${queryParamString}`);
  });

  it('should trim unwanted whitespace from path, query string and a fragment identifier which passed as options', function () {
    expect(buildUrl('http://example.com', {
      path: '  contact  ',
      hash: ' about ',
      queryParams: {
        foo: ' bar ',
        bar: ' baz '
      }
    })).toEqual('http://example.com/contact?foo=bar&bar=baz#about');
  });

  it('should append a path, query string and a fragment identifier when passed as options which is of number type', function () {
    expect(buildUrl('http://example.com', {
      path: 12345,
      hash: 75885,
      queryParams: {
        foo: 12454,
        bar: 123457
      }
    })).toEqual('http://example.com/12345?foo=12454&bar=123457#75885');
  });
  
  it("should change case of url path, query string and fragment identifier when lowerCase parameter passed as options with value 'true' ", function () {
    expect(buildUrl('http://example.com', {
      path: 'cOnTaCt',
      hash: 'aBOut12',
      lowerCase: true,
      queryParams: {
        foo: 'barRR',
        bar: 'baZXx                    '
      }
    })).toEqual('http://example.com/contact?foo=barrr&bar=bazxx#about12');
  });

  it("should not change case of url path, query string and fragment identifier when lowerCase parameter passed as options with  value 'false' ", function () {
    expect(buildUrl('http://example.com', {
      path: 'AbouT',
      hash: 'ConTacT',
      lowerCase: false,
      queryParams: {
        foo: 'bAr',
        bar: ['oNe', 'TWO', 'thrEE', 123]
      }
    })).toEqual('http://example.com/AbouT?foo=bAr&bar=oNe%2CTWO%2CthrEE%2C123#ConTacT');
  });

  it("should not change case of url path, query string and fragment identifier when when lowerCase parameter is not passed as argument", function () {
    expect(buildUrl('http://example.com', {
      path: 'AbouT',
      hash: 'ConTacT',
      queryParams: {
        foo: 'bAr',
        bar: ['oNe', 'TWO', 'thrEE', 123]
      }
    })).toEqual('http://example.com/AbouT?foo=bAr&bar=oNe%2CTWO%2CthrEE%2C123#ConTacT');
  });

  it("should make array based parameters appear as a separate param for each of the values in array", function() {
    expect(buildUrl('http://example.com', {
      disableCSV: true,
      queryParams: {
        foo: 'bar',
        bar: ['one', 'two', 'three']
      }
    })).toEqual('http://example.com?foo=bar&bar=one&bar=two&bar=three');
  });

  it("should keep array based parameters comma separated if disableCSV is not opted in", function() {
    expect(buildUrl('http://example.com', {
      disableCSV: false,
      queryParams: {
        foo: 'bar',
        bar: ['one', 'two', 'three']
      }
    })).toEqual('http://example.com?foo=bar&bar=one%2Ctwo%2Cthree');
  });

});
