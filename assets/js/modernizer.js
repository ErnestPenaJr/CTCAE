/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-canvas-csscalc-cssgradients-csstransitions-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-localstorage-rgba-strictmode-svg-xhrresponsetypejson-setclasses !*/
 !(function (window, document, undefined) {
    function is(e, t) {
      return typeof e === t;
    }
    function testRunner() {
      var e, t, r, n, o, s, i;
      for (var a in tests)
        if (tests.hasOwnProperty(a)) {
          if (
            ((e = []),
            (t = tests[a]),
            t.name &&
              (e.push(t.name.toLowerCase()),
              t.options && t.options.aliases && t.options.aliases.length))
          )
            for (r = 0; r < t.options.aliases.length; r++)
              e.push(t.options.aliases[r].toLowerCase());
          for (n = is(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
            (s = e[o]),
              (i = s.split(".")),
              1 === i.length
                ? (Modernizr[i[0]] = n)
                : (!Modernizr[i[0]] ||
                    Modernizr[i[0]] instanceof Boolean ||
                    (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                  (Modernizr[i[0]][i[1]] = n)),
              classes.push((n ? "" : "no-") + i.join("-"));
        }
    }
    function setClasses(e) {
      var t = docElement.className,
        r = Modernizr._config.classPrefix || "";
      if ((isSVG && (t = t.baseVal), Modernizr._config.enableJSClass)) {
        var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");
        t = t.replace(n, "$1" + r + "js$2");
      }
      Modernizr._config.enableClasses &&
        ((t += " " + r + e.join(" " + r)),
        isSVG ? (docElement.className.baseVal = t) : (docElement.className = t));
    }
    function createElement() {
      return "function" != typeof document.createElement
        ? document.createElement(arguments[0])
        : isSVG
        ? document.createElementNS.call(
            document,
            "http://www.w3.org/2000/svg",
            arguments[0]
          )
        : document.createElement.apply(document, arguments);
    }
    function contains(e, t) {
      return !!~("" + e).indexOf(t);
    }
    function cssToDOM(e) {
      return e
        .replace(/([a-z])-([a-z])/g, function (e, t, r) {
          return t + r.toUpperCase();
        })
        .replace(/^-/, "");
    }
    function fnBind(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    function testDOMProps(e, t, r) {
      var n;
      for (var o in e)
        if (e[o] in t)
          return r === !1
            ? e[o]
            : ((n = t[e[o]]), is(n, "function") ? fnBind(n, r || t) : n);
      return !1;
    }
    function domToCSS(e) {
      return e
        .replace(/([A-Z])/g, function (e, t) {
          return "-" + t.toLowerCase();
        })
        .replace(/^ms-/, "-ms-");
    }
    function computedStyle(e, t, r) {
      var n;
      if ("getComputedStyle" in window) {
        n = getComputedStyle.call(window, e, t);
        var o = window.console;
        if (null !== n) r && (n = n.getPropertyValue(r));
        else if (o) {
          var s = o.error ? "error" : "log";
          o[s].call(
            o,
            "getComputedStyle returning null, its possible modernizr test results are inaccurate"
          );
        }
      } else n = !t && e.currentStyle && e.currentStyle[r];
      return n;
    }
    function getBody() {
      var e = document.body;
      return e || ((e = createElement(isSVG ? "svg" : "body")), (e.fake = !0)), e;
    }
    function injectElementWithStyles(e, t, r, n) {
      var o,
        s,
        i,
        a,
        d = "modernizr",
        c = createElement("div"),
        l = getBody();
      if (parseInt(r, 10))
        for (; r--; )
          (i = createElement("div")),
            (i.id = n ? n[r] : d + (r + 1)),
            c.appendChild(i);
      return (
        (o = createElement("style")),
        (o.type = "text/css"),
        (o.id = "s" + d),
        (l.fake ? l : c).appendChild(o),
        l.appendChild(c),
        o.styleSheet
          ? (o.styleSheet.cssText = e)
          : o.appendChild(document.createTextNode(e)),
        (c.id = d),
        l.fake &&
          ((l.style.background = ""),
          (l.style.overflow = "hidden"),
          (a = docElement.style.overflow),
          (docElement.style.overflow = "hidden"),
          docElement.appendChild(l)),
        (s = t(c, e)),
        l.fake
          ? (l.parentNode.removeChild(l),
            (docElement.style.overflow = a),
            docElement.offsetHeight)
          : c.parentNode.removeChild(c),
        !!s
      );
    }
    function nativeTestProps(e, t) {
      var r = e.length;
      if ("CSS" in window && "supports" in window.CSS) {
        for (; r--; ) if (window.CSS.supports(domToCSS(e[r]), t)) return !0;
        return !1;
      }
      if ("CSSSupportsRule" in window) {
        for (var n = []; r--; ) n.push("(" + domToCSS(e[r]) + ":" + t + ")");
        return (
          (n = n.join(" or ")),
          injectElementWithStyles(
            "@supports (" + n + ") { #modernizr { position: absolute; } }",
            function (e) {
              return "absolute" == computedStyle(e, null, "position");
            }
          )
        );
      }
      return undefined;
    }
    function testProps(e, t, r, n) {
      function o() {
        i && (delete mStyle.style, delete mStyle.modElem);
      }
      if (((n = is(n, "undefined") ? !1 : n), !is(r, "undefined"))) {
        var s = nativeTestProps(e, r);
        if (!is(s, "undefined")) return s;
      }
      for (
        var i, a, d, c, l, u = ["modernizr", "tspan", "samp"];
        !mStyle.style && u.length;
  
      )
        (i = !0),
          (mStyle.modElem = createElement(u.shift())),
          (mStyle.style = mStyle.modElem.style);
      for (d = e.length, a = 0; d > a; a++)
        if (
          ((c = e[a]),
          (l = mStyle.style[c]),
          contains(c, "-") && (c = cssToDOM(c)),
          mStyle.style[c] !== undefined)
        ) {
          if (n || is(r, "undefined")) return o(), "pfx" == t ? c : !0;
          try {
            mStyle.style[c] = r;
          } catch (f) {}
          if (mStyle.style[c] != l) return o(), "pfx" == t ? c : !0;
        }
      return o(), !1;
    }
    function testPropsAll(e, t, r, n, o) {
      var s = e.charAt(0).toUpperCase() + e.slice(1),
        i = (e + " " + cssomPrefixes.join(s + " ") + s).split(" ");
      return is(t, "string") || is(t, "undefined")
        ? testProps(i, t, n, o)
        : ((i = (e + " " + domPrefixes.join(s + " ") + s).split(" ")),
          testDOMProps(i, t, r));
    }
    function testAllProps(e, t, r) {
      return testPropsAll(e, undefined, undefined, t, r);
    }
    var classes = [],
      tests = [],
      ModernizrProto = {
        _version: "3.6.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0
        },
        _q: [],
        on: function (e, t) {
          var r = this;
          setTimeout(function () {
            t(r[e]);
          }, 0);
        },
        addTest: function (e, t, r) {
          tests.push({ name: e, fn: t, options: r });
        },
        addAsyncTest: function (e) {
          tests.push({ name: null, fn: e });
        }
      },
      Modernizr = function () {};
    (Modernizr.prototype = ModernizrProto),
      (Modernizr = new Modernizr()),
      Modernizr.addTest("es5date", function () {
        var e = "2013-04-12T06:06:37.307Z",
          t = !1;
        try {
          t = !!Date.parse(e);
        } catch (r) {}
        return !!(
          Date.now &&
          Date.prototype &&
          Date.prototype.toISOString &&
          Date.prototype.toJSON &&
          t
        );
      }),
      Modernizr.addTest("es5function", function () {
        return !(!Function.prototype || !Function.prototype.bind);
      }),
      Modernizr.addTest("es5object", function () {
        return !!(
          Object.keys &&
          Object.create &&
          Object.getPrototypeOf &&
          Object.getOwnPropertyNames &&
          Object.isSealed &&
          Object.isFrozen &&
          Object.isExtensible &&
          Object.getOwnPropertyDescriptor &&
          Object.defineProperty &&
          Object.defineProperties &&
          Object.seal &&
          Object.freeze &&
          Object.preventExtensions
        );
      }),
      Modernizr.addTest(
        "svg",
        !!document.createElementNS &&
          !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
            .createSVGRect
      ),
      Modernizr.addTest(
        "strictmode",
        (function () {
          "use strict";
          return !this;
        })()
      ),
      Modernizr.addTest("es5array", function () {
        return !!(
          Array.prototype &&
          Array.prototype.every &&
          Array.prototype.filter &&
          Array.prototype.forEach &&
          Array.prototype.indexOf &&
          Array.prototype.lastIndexOf &&
          Array.prototype.map &&
          Array.prototype.some &&
          Array.prototype.reduce &&
          Array.prototype.reduceRight &&
          Array.isArray
        );
      }),
      Modernizr.addTest("es5string", function () {
        return !(!String.prototype || !String.prototype.trim);
      }),
      Modernizr.addTest("es5syntax", function () {
        var value,
          obj,
          stringAccess,
          getter,
          setter,
          reservedWords,
          zeroWidthChars;
        try {
          return (
            (stringAccess = eval('"foobar"[3] === "b"')),
            (getter = eval("({ get x(){ return 1 } }).x === 1")),
            eval("({ set x(v){ value = v; } }).x = 1"),
            (setter = 1 === value),
            eval("obj = ({ if: 1 })"),
            (reservedWords = 1 === obj["if"]),
            (zeroWidthChars = eval("_‌‍ = true")),
            stringAccess && getter && setter && reservedWords && zeroWidthChars
          );
        } catch (ignore) {
          return !1;
        }
      }),
      Modernizr.addTest("es5undefined", function () {
        var e, t;
        try {
          (t = window.undefined),
            (window.undefined = 12345),
            (e = "undefined" == typeof window.undefined),
            (window.undefined = t);
        } catch (r) {
          return !1;
        }
        return e;
      }),
      Modernizr.addTest("localstorage", function () {
        var e = "modernizr";
        try {
          return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
        } catch (t) {
          return !1;
        }
      });
    var docElement = document.documentElement,
      isSVG = "svg" === docElement.nodeName.toLowerCase();
    Modernizr.addTest("canvas", function () {
      var e = createElement("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
      Modernizr.addTest("rgba", function () {
        var e = createElement("a").style;
        return (
          (e.cssText = "background-color:rgba(150,255,150,.5)"),
          ("" + e.backgroundColor).indexOf("rgba") > -1
        );
      });
    var testXhrType = function (e) {
      if ("undefined" == typeof XMLHttpRequest) return !1;
      var t = new XMLHttpRequest();
      t.open("get", "/", !0);
      try {
        t.responseType = e;
      } catch (r) {
        return !1;
      }
      return "response" in t && t.responseType == e;
    };
    Modernizr.addTest("xhrresponsetypejson", testXhrType("json")),
      Modernizr.addTest(
        "json",
        "JSON" in window && "parse" in JSON && "stringify" in JSON
      ),
      Modernizr.addTest("es5", function () {
        return !!(
          Modernizr.es5array &&
          Modernizr.es5date &&
          Modernizr.es5function &&
          Modernizr.es5object &&
          Modernizr.strictmode &&
          Modernizr.es5string &&
          Modernizr.json &&
          Modernizr.es5syntax &&
          Modernizr.es5undefined
        );
      });
    var prefixes = ModernizrProto._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
    (ModernizrProto._prefixes = prefixes),
      Modernizr.addTest("csscalc", function () {
        var e = "width:",
          t = "calc(10px);",
          r = createElement("a");
        return (r.style.cssText = e + prefixes.join(t + e)), !!r.style.length;
      }),
      Modernizr.addTest("cssgradients", function () {
        for (
          var e,
            t = "background-image:",
            r = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "",
            o = 0,
            s = prefixes.length - 1;
          s > o;
          o++
        )
          (e = 0 === o ? "to " : ""),
            (n +=
              t +
              prefixes[o] +
              "linear-gradient(" +
              e +
              "left top, #9f9, white);");
        Modernizr._config.usePrefixes && (n += t + "-webkit-" + r);
        var i = createElement("a"),
          a = i.style;
        return (a.cssText = n), ("" + a.backgroundImage).indexOf("gradient") > -1;
      }),
      Modernizr.addTest("audio", function () {
        var e = createElement("audio"),
          t = !1;
        try {
          (t = !!e.canPlayType),
            t &&
              ((t = new Boolean(t)),
              (t.ogg = e
                .canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, "")),
              (t.mp3 = e
                .canPlayType('audio/mpeg; codecs="mp3"')
                .replace(/^no$/, "")),
              (t.opus =
                e.canPlayType('audio/ogg; codecs="opus"') ||
                e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
              (t.wav = e
                .canPlayType('audio/wav; codecs="1"')
                .replace(/^no$/, "")),
              (t.m4a = (
                e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
              ).replace(/^no$/, "")));
        } catch (r) {}
        return t;
      });
    var omPrefixes = "Moz O ms Webkit",
      cssomPrefixes = ModernizrProto._config.usePrefixes
        ? omPrefixes.split(" ")
        : [];
    ModernizrProto._cssomPrefixes = cssomPrefixes;
    var domPrefixes = ModernizrProto._config.usePrefixes
      ? omPrefixes.toLowerCase().split(" ")
      : [];
    ModernizrProto._domPrefixes = domPrefixes;
    var modElem = { elem: createElement("modernizr") };
    Modernizr._q.push(function () {
      delete modElem.elem;
    });
    var mStyle = { style: modElem.elem.style };
    Modernizr._q.unshift(function () {
      delete mStyle.style;
    }),
      (ModernizrProto.testAllProps = testPropsAll),
      (ModernizrProto.testAllProps = testAllProps),
      Modernizr.addTest("csstransitions", testAllProps("transition", "all", !0)),
      testRunner(),
      setClasses(classes),
      delete ModernizrProto.addTest,
      delete ModernizrProto.addAsyncTest;
    for (var i = 0; i < Modernizr._q.length; i++) Modernizr._q[i]();
    window.Modernizr = Modernizr;
  })(window, document);
  