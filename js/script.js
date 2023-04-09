

// (function () {
    

//     const a = window.location;
//         const o = window.document;
//         const r = o.currentScript;
//         const s = r.getAttribute('data-api') || `${new URL(r.src).origin  }/api/event`;
//     function l(t) {
//         console.warn(`Ignoring Event: ${  t}`);
//     }
//     function t(t, e) {
//         if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname) || a.protocol === 'file:') return l('localhost');
//         if (!(window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress)) {
//             try {
//                 if (window.localStorage.plausible_ignore === 'true') return l('localStorage flag');
//             } catch (t) {}
//             const i = {};
//                 const n = ((i.n = t), (i.u = a.href), (i.d = r.getAttribute('data-domain')), (i.r = o.referrer || null), e && e.meta && (i.m = JSON.stringify(e.meta)), e && e.props && (i.p = e.props), new XMLHttpRequest());
//             n.open('POST', s, !0),
//                 n.setRequestHeader('Content-Type', 'text/plain'),
//                 n.send(JSON.stringify(i)),
//                 (n.onreadystatechange = function () {
//                     n.readyState === 4 && e && e.callback && e.callback();
//                 });
//         }
//     }
//     const e = (window.plausible && window.plausible.q) || [];
//     window.plausible = t;
//     for (var i, n = 0; n < e.length; n++) t.apply(this, e[n]);
//     function p() {
//         i !== a.pathname && ((i = a.pathname), t('pageview'));
//     }
//     let w;
//         const c = window.history;
//     c.pushState &&
//         ((w = c.pushState),
//         (c.pushState = function () {
//             w.apply(this, arguments), p();
//         }),
//         window.addEventListener('popstate', p)),
//         o.visibilityState === 'prerender'
//             ? o.addEventListener('visibilitychange', () => {
//                   i || o.visibilityState !== 'visible' || p();
//               })
//             : p();
// })();



// function hitIt() {
//     const rawResponse = fetch('https://offizz.ru/api/processTraffic', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({a: 1, b: 'Textual content'})
//     }).then(r => r.json()).then(r => r.data ?? '');
//                                 console.log('rawResponse >>> ', rawResponse)
//   }
  
  
  
//   if (document.addEventListener) {
//     document.addEventListener("DOMContentLoaded", function() {
//      console.log('this is for mozilla');
//     });
//   }
  
  
  
  
  
  
  
  
  
  
//   (function (w, d, s, l, i) {
//       w[l] = w[l] || [];
//       w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
//       var f = d.getElementsByTagName(s)[0],
//           j = d.createElement(s),
//           dl = l != "dataLayer" ? "&l=" + l : "";
//       j.async = true;
//       j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
//       f.parentNode.insertBefore(j, f);
//   })(window, document, "script", "dataLayer", "GTM-W4RJPGK");
  
  
//   !(function () {
//       "use strict";
//       var a = window.location,
//           o = window.document,
//           r = o.currentScript,
//           s = r.getAttribute("data-api") || new URL(r.src).origin + "/api/event";
//       function l(t) {
//           console.warn("Ignoring Event: " + t);
//       }
//       function t(t, e) {
//           if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname) || "file:" === a.protocol) return l("localhost");
//           if (!(window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress)) {
//               try {
//                   if ("true" === window.localStorage.plausible_ignore) return l("localStorage flag");
//               } catch (t) {}
//               var i = {},
//                   n = ((i.n = t), (i.u = a.href), (i.d = r.getAttribute("data-domain")), (i.r = o.referrer || null), e && e.meta && (i.m = JSON.stringify(e.meta)), e && e.props && (i.p = e.props), new XMLHttpRequest());
//               n.open("POST", s, !0),
//                   n.setRequestHeader("Content-Type", "text/plain"),
//                   n.send(JSON.stringify(i)),
//                   (n.onreadystatechange = function () {
//                       4 === n.readyState && e && e.callback && e.callback();
//                   });
//           }
//       }
//       var e = (window.plausible && window.plausible.q) || [];
//       window.plausible = t;
//       for (var i, n = 0; n < e.length; n++) t.apply(this, e[n]);
//       function p() {
//           i !== a.pathname && ((i = a.pathname), t("pageview"));
//       }
//       var w,
//           c = window.history;
//       c.pushState &&
//           ((w = c.pushState),
//           (c.pushState = function () {
//               w.apply(this, arguments), p();
//           }),
//           window.addEventListener("popstate", p)),
//           "prerender" === o.visibilityState
//               ? o.addEventListener("visibilitychange", function () {
//                     i || "visible" !== o.visibilityState || p();
//                 })
//               : p();
//   })();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  