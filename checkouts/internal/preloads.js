
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.95fa3beeaaf50385529b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9407.baseline.en.1a8e4259f21b8f2eed78.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3157.baseline.en.562ece0120ed63117cab.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.baseline.en.1bc59c356c867cc155a0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.fda2363c6de7e01a7bdc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.baseline.en.2d4becc4565e87d9a9a1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4979.baseline.en.9a24b25d05e562ae5e80.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.baseline.en.604aeedc84b0b02109fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4653.baseline.en.780e125b8e45d6f745d1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2990.baseline.en.ee9b14333bf3820c3017.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8546.baseline.en.88f99fbcccac9b5ddb09.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8610.baseline.en.66d31e96b9adf2a8608b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6589.baseline.en.c5c30f76a31f07df28a9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.4457d14088d4b101a330.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/9407.baseline.en.a7b04a788a0c923f7eb8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.9e3b4b7160d4c8b8f05b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.e1590efe384d128dd06f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0650/2190/3084/files/TFG_logo_mono_x320.png?v=1655618638"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  