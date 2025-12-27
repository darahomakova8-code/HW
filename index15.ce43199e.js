// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7aTE7":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "46f1b2c7ce43199e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"7O6cW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadCurrentWeather", ()=>loadCurrentWeather);
parcelHelpers.export(exports, "updateWeatherForCity", ()=>updateWeatherForCity);
parcelHelpers.export(exports, "generateForecastCards", ()=>generateForecastCards);
parcelHelpers.export(exports, "initWeatherSection", ()=>initWeatherSection);
var _data3Js = require("./moduls/data3.js");
var _domUtils3Js = require("./moduls/domUtils3.js");
var _utils3Js = require("./moduls/utils3.js");
var _weatherAPIJs = require("./moduls/weatherAPI.js");
const weatherAPI = new (0, _weatherAPIJs.WeatherAPI)();
async function initWeatherSection() {
    console.log('Initializing weather section...');
    loadCurrentWeather('Warsaw');
    generateForecastCards('Warsaw', 3);
    const cityButtons = document.querySelectorAll('.city-btn');
    if (cityButtons.length > 0) cityButtons.forEach((button)=>{
        button.addEventListener('click', function() {
            cityButtons.forEach((btn)=>btn.classList.remove('active'));
            this.classList.add('active');
            const city = this.dataset.city;
            updateWeatherForCity(city);
            const activeDurationBtn = document.querySelector('.duration-btn.active');
            if (activeDurationBtn) {
                const days = parseInt(activeDurationBtn.dataset.days);
                generateForecastCards(city, days);
            }
        });
    });
    const durationButtons = document.querySelectorAll('.duration-btn');
    if (durationButtons.length > 0) durationButtons.forEach((button)=>{
        button.addEventListener('click', function() {
            const days = parseInt(this.dataset.days);
            durationButtons.forEach((btn)=>btn.classList.remove('active'));
            this.classList.add('active');
            const forecastTitle = document.querySelector('.multi-day-forecast h4');
            if (forecastTitle) forecastTitle.innerHTML = `<i class="fas fa-chart-line"></i> ${days}-Day Forecast`;
            const multiDayForecast = document.getElementById('multiDayForecast');
            if (multiDayForecast) {
                if (days > 1) {
                    multiDayForecast.style.display = 'block';
                    const activeCityBtn = document.querySelector('.city-btn.active');
                    if (activeCityBtn) {
                        const city = activeCityBtn.dataset.city;
                        generateForecastCards(city, days);
                    }
                } else multiDayForecast.style.display = 'none';
            }
        });
    });
    const weatherForm = document.getElementById('weatherForm');
    if (weatherForm) weatherForm.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const dateInput = document.getElementById('dateInput');
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 7);
        if (selectedDate < today || selectedDate > maxDate) {
            showWeatherError('Please select a date within the next 7 days.');
            return;
        }
        const currentWeather = document.getElementById('currentWeather');
        if (currentWeather) currentWeather.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <div class="weather-spinner"></div>
                        <p>Loading weather for ${selectedDate.toLocaleDateString()}...</p>
                    </div>
                `;
        try {
            setTimeout(()=>{
                const activeCityBtn = document.querySelector('.city-btn.active');
                const city = activeCityBtn ? activeCityBtn.dataset.city : 'Warsaw';
                simulateWeatherForDate(city, selectedDate);
                (0, _utils3Js.showNotification)(`Weather for ${selectedDate.toLocaleDateString()} loaded!`, 'success');
            }, 1000);
        } catch (error) {
            console.error('Weather fetch error:', error);
            showWeatherError('Failed to load weather data. Please try again.');
        }
    });
    const dateInput = document.getElementById('dateInput');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 7);
        dateInput.min = today;
        dateInput.max = maxDate.toISOString().split('T')[0];
        dateInput.value = today;
    }
}
async function loadCurrentWeather(city = 'Warsaw') {
    console.log(`\u{1F324}\u{FE0F} Loading current weather for ${city}...`);
    try {
        let weatherData;
        try {
            weatherData = await weatherAPI.getCurrentWeather(city);
            console.log(`Real weather data loaded for ${city}`);
        } catch (apiError) {
            console.log(`Using simulated data for ${city}:`, apiError.message);
            weatherData = getSimulatedWeatherData(city);
        }
        updateWeatherForCity(city);
    } catch (error) {
        console.error('Weather load error:', error);
        updateWeatherForCity(city);
    }
}
function updateWeatherForCity(city) {
    console.log(`Updating weather display for ${city}...`);
    const currentWeather = document.getElementById('currentWeather');
    if (!currentWeather) return;
    const weatherData = getSimulatedWeatherData(city);
    currentWeather.innerHTML = `
        <div class="weather-header">
            <div class="location-time">
                <h3 class="location">
                    <i class="fas fa-map-marker-alt"></i> ${city}
                    <span class="live-badge">LIVE</span>
                </h3>
                <p class="date-time">${getCurrentDateTime()}</p>
            </div>
            <div class="weather-main">
                <div class="temperature">${weatherData.temp}\xb0C</div>
                <div class="condition-icon">
                    <i class="${weatherData.icon}"></i>
                    <span class="condition">${weatherData.condition}</span>
                </div>
            </div>
        </div>
        
        <div class="weather-details">
            <div class="detail">
                <span class="label"><i class="fas fa-temperature-high"></i> Feels like:</span>
                <span class="value">${weatherData.feelsLike}\xb0C</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-wind"></i> Wind:</span>
                <span class="value">${weatherData.wind}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-tachometer-alt"></i> Pressure:</span>
                <span class="value">${weatherData.pressure}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-eye"></i> Observed:</span>
                <span class="value">${weatherData.observed}</span>
            </div>
        </div>
    `;
}
function generateForecastCards(city, days) {
    console.log(`\u{1F4C5} Generating ${days}-day forecast for ${city}...`);
    const forecastCardsContainer = document.querySelector('.forecast-cards');
    if (!forecastCardsContainer) return;
    const forecastData = getSimulatedForecastData(city, days);
    forecastCardsContainer.innerHTML = '';
    forecastData.forEach((day)=>{
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-date">${day.date}</div>
            <div class="forecast-icon"><i class="${day.icon}"></i></div>
            <div class="forecast-temp">${day.temp}\xb0C</div>
            <div class="forecast-condition">${day.condition}</div>
        `;
        forecastCardsContainer.appendChild(card);
    });
}
function simulateWeatherForDate(city, date) {
    const currentWeather = document.getElementById('currentWeather');
    if (!currentWeather) return;
    const weatherData = getSimulatedWeatherData(city);
    const dateStr = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const tempAdjustment = Math.floor(Math.random() * 6) - 3;
    const adjustedTemp = weatherData.temp + tempAdjustment;
    currentWeather.innerHTML = `
        <div class="weather-header">
            <div class="location-time">
                <h3 class="location">
                    <i class="fas fa-map-marker-alt"></i> ${city}
                    <span class="data-type forecast">FORECAST</span>
                </h3>
                <p class="date-time">${dateStr} at 12:00 PM</p>
            </div>
            <div class="weather-main">
                <div class="temperature">${adjustedTemp}\xb0C</div>
                <div class="condition-icon">
                    <i class="${weatherData.icon}"></i>
                    <span class="condition">${weatherData.condition}</span>
                </div>
            </div>
        </div>
        
        <div class="weather-details">
            <div class="detail">
                <span class="label"><i class="fas fa-temperature-high"></i> Feels like:</span>
                <span class="value">${adjustedTemp}\xb0C</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-wind"></i> Wind:</span>
                <span class="value">${weatherData.wind}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-tachometer-alt"></i> Pressure:</span>
                <span class="value">${weatherData.pressure}</span>
            </div>
            <div class="detail">
                <span class="label"><i class="fas fa-info-circle"></i> Forecast for:</span>
                <span class="value">${dateStr}</span>
            </div>
        </div>
    `;
}
function getSimulatedWeatherData(city) {
    const weatherData = {
        'Warsaw': {
            temp: 20,
            condition: 'Clear',
            icon: 'fas fa-sun',
            feelsLike: 20,
            wind: '14 km/h',
            pressure: '1014 hPa',
            observed: '12:14 AM'
        },
        'Dubai': {
            temp: 28,
            condition: 'Sunny',
            icon: 'fas fa-sun',
            feelsLike: 30,
            wind: '8 km/h',
            pressure: '1010 hPa',
            observed: '12:00 PM'
        },
        'London': {
            temp: 12,
            condition: 'Cloudy',
            icon: 'fas fa-cloud',
            feelsLike: 10,
            wind: '18 km/h',
            pressure: '1018 hPa',
            observed: '11:30 AM'
        },
        'New York': {
            temp: 8,
            condition: 'Snow',
            icon: 'fas fa-snowflake',
            feelsLike: 5,
            wind: '22 km/h',
            pressure: '1022 hPa',
            observed: '1:00 PM'
        }
    };
    return weatherData[city] || weatherData['Warsaw'];
}
function getSimulatedForecastData(city, days) {
    const baseData = getSimulatedWeatherData(city);
    const forecast = [];
    const dayNames = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    const startDate = new Date();
    const conditions = [
        'Clear',
        'Partly Cloudy',
        'Cloudy',
        'Light Rain',
        'Sunny',
        'Rain',
        'Snow'
    ];
    const icons = [
        'fa-sun',
        'fa-cloud-sun',
        'fa-cloud',
        'fa-cloud-rain',
        'fa-sun',
        'fa-cloud-showers-heavy',
        'fa-snowflake'
    ];
    for(let i = 0; i < days; i++){
        const forecastDate = new Date(startDate);
        forecastDate.setDate(startDate.getDate() + i);
        const dateStr = `${dayNames[forecastDate.getDay()]}, ${monthNames[forecastDate.getMonth()]} ${forecastDate.getDate()}`;
        const tempVariation = Math.floor(Math.random() * 6) - 3;
        const forecastTemp = baseData.temp + tempVariation;
        const conditionIndex = i % conditions.length;
        const condition = conditions[conditionIndex];
        const icon = `fas ${icons[conditionIndex]}`;
        forecast.push({
            date: dateStr,
            temp: forecastTemp,
            condition: condition,
            icon: icon
        });
    }
    return forecast;
}
function getCurrentDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return now.toLocaleDateString('en-US', options);
}
function showWeatherError(message) {
    const weatherError = document.getElementById('weatherError');
    if (!weatherError) return;
    weatherError.innerHTML = `<i class="fas fa-exclamation-triangle"></i><span>${message}</span>`;
    weatherError.style.display = 'flex';
    setTimeout(()=>{
        weatherError.style.display = 'none';
    }, 5000);
}
function renderHotels() {
    const container = document.querySelector('.catalog-cards');
    if (!container) return;
    const existingCards = container.innerHTML;
    if (!existingCards.includes('card-btn')) {
        container.innerHTML = '';
        (0, _data3Js.hotels).forEach((hotel)=>{
            const card = document.createElement('article');
            card.className = 'catalog-card';
            card.innerHTML = `
                <div class="img-placeholder" style="background-color: ${hotel.color};"></div>
                <div class="catalog-card-content">
                    <div>
                        <div class="card-hotel-title">${hotel.name}</div>
                        <div class="card-rating">
                            <span class="stars">${"\u2605".repeat(Math.floor(hotel.rating))}</span> 
                            ${hotel.rating} (${hotel.reviews} reviews)
                        </div>
                    </div>
                    <div class="card-price-row">
                        <div>
                            <span class="card-price">$${hotel.price}</span>
                            <span class="card-price-per">/Person</span>
                        </div>
                        <button class="card-btn" data-id="${hotel.id}">Book Trip</button>
                    </div>
                </div>`;
            container.appendChild(card);
        });
    }
}
function bookHotel(hotelId, buttonElement) {
    const hotel = (0, _data3Js.hotels).find((h)=>h.id === hotelId);
    if (!hotel) {
        (0, _utils3Js.showNotification)('Hotel not found', 'error');
        return;
    }
    const originalText = buttonElement.textContent;
    const originalBg = buttonElement.style.backgroundColor;
    const originalColor = buttonElement.style.color;
    buttonElement.textContent = 'Booking...';
    buttonElement.style.backgroundColor = '#4CAF50';
    buttonElement.style.color = 'white';
    setTimeout(()=>{
        (0, _utils3Js.showNotification)(`Successfully booked ${hotel.name} for $${hotel.price}`, 'success');
        buttonElement.textContent = originalText;
        buttonElement.style.backgroundColor = originalBg;
        buttonElement.style.color = originalColor;
        (0, _data3Js.bookings).push({
            id: Date.now(),
            hotelId: hotelId,
            hotelName: hotel.name,
            price: hotel.price,
            date: new Date().toLocaleDateString()
        });
    }, 500);
}
function updateTotalPrice() {
    const totalElement = document.querySelector('.total-payment span:last-child');
    const breakdownContainer = document.querySelector('.price-breakdown');
    if (!totalElement || !breakdownContainer) return;
    const basePrice = 500;
    const discount = 100;
    const breakfastPrice = 10;
    const serviceFee = 5;
    let extrasTotal = 0;
    const checkboxes = document.querySelectorAll('.extra-features input[type="checkbox"]');
    checkboxes.forEach((checkbox)=>{
        if (checkbox.checked) {
            const priceText = checkbox.parentElement.querySelector('span').textContent;
            const price = parseInt(priceText.replace('$', '')) || 0;
            extrasTotal += price;
        }
    });
    const total = basePrice - discount + breakfastPrice + extrasTotal + serviceFee;
    totalElement.textContent = `$${total}`;
    breakdownContainer.innerHTML = `
        <div class="breakdown-item">
            <span>1 Nights</span>
            <span>$${basePrice}</span>
        </div>
        <div class="breakdown-item">
            <span>Discount 20%</span>
            <span>-$${discount}</span>
        </div>
        <div class="breakdown-item">
            <span>Breakfast per person</span>
            <span>$${breakfastPrice}</span>
        </div>
        ${extrasTotal > 0 ? `
        <div class="breakdown-item">
            <span>Extra features</span>
            <span>$${extrasTotal}</span>
        </div>
        ` : ''}
        <div class="breakdown-item">
            <span>Service fee</span>
            <span>$${serviceFee}</span>
        </div>`;
}
function initEventListeners() {
    document.addEventListener('click', (e)=>{
        if (e.target.classList.contains('card-btn')) {
            const hotelId = parseInt(e.target.dataset.id);
            bookHotel(hotelId, e.target);
        }
        if (e.target.classList.contains('book-now-btn')) {
            e.preventDefault();
            const originalText = e.target.textContent;
            const originalBg = e.target.style.backgroundColor;
            e.target.textContent = 'Processing...';
            e.target.style.backgroundColor = '#FF9800';
            setTimeout(()=>{
                (0, _utils3Js.showNotification)('Booking submitted! Thank you for your reservation.', 'success');
                e.target.textContent = originalText;
                e.target.style.backgroundColor = originalBg;
            }, 1000);
        }
        if (e.target.classList.contains('book-trip-btn')) {
            const bookingForm = document.querySelector('.sidebar-card');
            if (bookingForm) {
                bookingForm.scrollIntoView({
                    behavior: 'smooth'
                });
                bookingForm.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.3)';
                setTimeout(()=>{
                    bookingForm.style.boxShadow = '';
                }, 2000);
            }
        }
    });
    const descriptionTabs = document.querySelectorAll('.description-tabs > div');
    const hotelDesc = document.querySelector('.hotel-desc');
    const featuresList = document.querySelector('.features-list');
    const amenitiesBlock = document.querySelector('.amenities-block');
    if (descriptionTabs.length > 0 && hotelDesc) {
        if (featuresList) featuresList.style.display = 'none';
        if (amenitiesBlock) amenitiesBlock.style.display = 'none';
        descriptionTabs.forEach((tab, index)=>{
            tab.addEventListener('click', ()=>{
                descriptionTabs.forEach((t)=>t.classList.remove('active'));
                tab.classList.add('active');
                if (hotelDesc) hotelDesc.style.display = index === 0 ? 'block' : 'none';
                if (featuresList) featuresList.style.display = index === 1 ? 'flex' : 'none';
                if (amenitiesBlock) amenitiesBlock.style.display = index === 2 ? 'flex' : 'none';
                if (index === 3) {
                    if (hotelDesc) {
                        hotelDesc.style.display = 'block';
                        hotelDesc.textContent = 'Price history shows fluctuations over seasons. Current price is at its lowest for this month.';
                    }
                }
            });
        });
    }
    const moreDetailsBtn = document.querySelector('.more-details-btn');
    if (moreDetailsBtn) moreDetailsBtn.addEventListener('click', ()=>{
        const amenitiesBlock = document.querySelector('.amenities-block');
        if (amenitiesBlock) {
            const isHidden = amenitiesBlock.style.display === 'none';
            amenitiesBlock.style.display = isHidden ? 'flex' : 'none';
            moreDetailsBtn.textContent = isHidden ? 'Hide Amenities' : 'Show More Amenities';
        }
    });
    const checkboxes = document.querySelectorAll('.extra-features input[type="checkbox"]');
    checkboxes.forEach((checkbox)=>{
        checkbox.addEventListener('change', function() {
            updateTotalPrice();
            const label = this.parentElement;
            if (this.checked) {
                label.style.backgroundColor = '#f0f9ff';
                label.style.padding = '5px';
                label.style.borderRadius = '3px';
            } else {
                label.style.backgroundColor = '';
                label.style.padding = '';
            }
        });
    });
}
function restoreHotelFeatures() {
    const hotelDesc = document.querySelector('.hotel-desc');
    if (hotelDesc) hotelDesc.innerHTML = 'Located just steps from the sandy beach, our hotel offers breathtaking ocean views from every room. Enjoy luxury amenities including spa, fine dining restaurants, and infinity pool. Perfect for romantic getaways and family vacations alike.';
}
function initApp() {
    console.log('Triptopia App Initializing with Enhanced Weather Features...');
    initWeatherSection();
    (0, _domUtils3Js.enableForm)();
    renderHotels();
    (0, _utils3Js.setupFaqDropdown)();
    restoreHotelFeatures();
    initEventListeners();
    (0, _utils3Js.initSubscription)();
    (0, _domUtils3Js.restoreFooter)();
    (0, _utils3Js.setupGallery)();
    updateTotalPrice();
    console.log('App initialized with enhanced weather features');
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();

},{"./moduls/data3.js":"1F0oI","./moduls/domUtils3.js":"heZM6","./moduls/utils3.js":"9JCm9","./moduls/weatherAPI.js":"fHBVE","@parcel/transformer-js/src/esmodule-helpers.js":"2iRUY"}],"1F0oI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hotels", ()=>hotels);
parcelHelpers.export(exports, "checkoutData", ()=>checkoutData);
parcelHelpers.export(exports, "bookingData", ()=>bookingData);
parcelHelpers.export(exports, "favorites", ()=>favorites);
parcelHelpers.export(exports, "bookings", ()=>bookings);
parcelHelpers.export(exports, "userBookings", ()=>userBookings);
parcelHelpers.export(exports, "orderHistory", ()=>orderHistory);
parcelHelpers.export(exports, "IMAGE_GREY_COLOR", ()=>IMAGE_GREY_COLOR);
const hotels = [
    {
        id: 1,
        name: "Hotel Sea Crown",
        rating: 4.8,
        reviews: 122,
        price: 150,
        features: [
            "Beach View",
            "All Inclusive",
            "Spa"
        ],
        color: "#4ECDC4"
    },
    {
        id: 2,
        name: "Long Beach Hotel",
        rating: 4.8,
        reviews: 122,
        price: 150,
        features: [
            "Beach Access",
            "Breakfast",
            "Parking"
        ],
        color: "#FFD166"
    },
    {
        id: 3,
        name: "Majestic Maldives",
        rating: 4.8,
        reviews: 122,
        price: 150,
        features: [
            "Private Beach",
            "Luxury Villa",
            "Butler Service"
        ],
        color: "#06D6A0"
    },
    {
        id: 4,
        name: "Breathtaking Bali",
        rating: 4.8,
        reviews: 122,
        price: 150,
        features: [
            "Yoga Classes",
            "Spa",
            "Cultural Tours"
        ],
        color: "#118AB2"
    }
];
const checkoutData = {
    cart: [
        {
            id: 1,
            name: "Warsaw Day Tour",
            price: 20.00,
            quantity: 1,
            rating: 5.0,
            reviews: 234
        }
    ],
    shippingInfo: {
        firstName: "",
        lastName: "",
        address: "",
        address2: ""
    },
    paymentMethod: "paypal"
};
const bookingData = {
    bookingId: "KU_H85DM",
    tourName: "Warsaw Day Tour",
    rating: 5.0,
    reviews: 234,
    departureDate: "June 21, 2024",
    guests: 2,
    bookingDate: new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }),
    total: 357.00,
    paymentMethod: "PayPal",
    status: "confirmed",
    itinerary: [
        {
            time: "09:00",
            activity: "Hotel Pickup"
        },
        {
            time: "10:00",
            activity: "City Tour Start"
        },
        {
            time: "13:00",
            activity: "Lunch Break"
        },
        {
            time: "15:00",
            activity: "Museum Visit"
        },
        {
            time: "18:00",
            activity: "Return to Hotel"
        }
    ],
    contact: {
        email: "customer@example.com",
        phone: "+1 (234) 567-8900"
    }
};
let favorites = [];
let bookings = [];
let userBookings = [];
let orderHistory = [];
const IMAGE_GREY_COLOR = '#D3D3D3';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2iRUY"}],"2iRUY":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"heZM6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enableForm", ()=>enableForm);
// футеры
parcelHelpers.export(exports, "restoreFooter", ()=>restoreFooter);
function enableForm() {
    const disabledElements = document.querySelectorAll('[disabled]');
    disabledElements.forEach((el)=>{
        el.disabled = false;
        if (el.classList.contains('book-now-btn')) {
            el.textContent = 'Book Now - Available!';
            el.style.backgroundColor = '';
            el.style.opacity = '1';
        }
    });
}
function restoreFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) {
        console.warn('Footer element not found');
        return;
    }
    const originalFooterHTML = `
    <div class="footer">
    <div class="footer-content">
        <div class="footer-col">
        <h3>Triptopia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="social-icons">
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">\u{25CB}</span>
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">\u{25CB}</span>
            <span style="font-size:21px;cursor:pointer;margin-right:10px;color:#1b374e;">\u{25CB}</span>
            <span style="font-size:21px;cursor:pointer;color:#1b374e;">\u{25CB}</span>
        </div>
        </div>
        <div class="footer-col">
        <h4>Destinations</h4>
        <ul>
            <li><a href="#" style="color:#666;text-decoration:none;">Europe</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Asia</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">North America</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Africa</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">South America</a></li>
        </ul>
        </div>
        <div class="footer-col">
        <h4>Company</h4>
        <ul>
            <li><a href="#" style="color:#666;text-decoration:none;">About us</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Careers</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Blog</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Press</a></li>
            <li><a href="#" style="color:#666;text-decoration:none;">Contact</a></li>
        </ul>
        </div>
        <div class="footer-col">
        <h4>Gallery</h4>
        <div class="footer-gallery">
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
            <div style="background:#D3D3D3;"></div>
        </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>\xa9 2024 Triptopia. All rights reserved.</p>
        <div class="footer-links">
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Privacy Policy</a>
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Terms of Service</a>
        <a href="#" style="color:#666;text-decoration:none;margin-left:15px;">Cookies Settings</a>
        </div>
    </div>
    </div>
`;
    footer.outerHTML = originalFooterHTML;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2iRUY"}],"9JCm9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateEmail", ()=>validateEmail);
// Показать уведомление
parcelHelpers.export(exports, "showNotification", ()=>showNotification);
// Инициализация подписки на рассылку
parcelHelpers.export(exports, "initSubscription", ()=>initSubscription);
// Настройка галереи
parcelHelpers.export(exports, "setupGallery", ()=>setupGallery);
// FAQ 
parcelHelpers.export(exports, "setupFaqDropdown", ()=>setupFaqDropdown);
// Форматирование номера карты
parcelHelpers.export(exports, "formatCardNumber", ()=>formatCardNumber);
// Форматирование даты истечения
parcelHelpers.export(exports, "formatExpDate", ()=>formatExpDate);
var _data3Js = require("./data3.js");
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function showNotification(message, type = 'info', duration = 3000) {
    const oldNotifications = document.querySelectorAll('.notification');
    oldNotifications.forEach((notification)=>notification.remove());
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    // Стили
    notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    animation: slideInRight 0.3s ease, fadeOut 0.3s ease ${duration - 300}ms;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);`;
    document.body.appendChild(notification);
    setTimeout(()=>{
        if (notification.parentNode) notification.parentNode.removeChild(notification);
    }, duration);
}
function initSubscription() {
    const subscribeForm = document.querySelector('.footer-offer form');
    if (subscribeForm) subscribeForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        if (validateEmail(email)) {
            showNotification(`Thank you for subscribing with ${email}!`, 'success');
            e.target.reset();
        } else showNotification('Please enter a valid email address', 'error');
    });
}
function setupGallery() {
    const galleryItems = document.querySelectorAll('.footer-gallery div');
    galleryItems.forEach((item)=>{
        item.style.backgroundColor = (0, _data3Js.IMAGE_GREY_COLOR);
        item.style.background = (0, _data3Js.IMAGE_GREY_COLOR);
        item.style.backgroundImage = 'none';
        item.style.cursor = 'default';
        item.style.transition = 'none';
        item.style.borderRadius = '4px';
        item.onmouseenter = null;
        item.onmouseleave = null;
        item.onclick = null;
    });
}
function setupFaqDropdown() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length === 0) return;
    faqQuestions.forEach((question)=>{
        question.addEventListener('click', ()=>{
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const toggleIcon = question.querySelector('.toggle-icon');
            const isActive = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach((item)=>{
                item.classList.remove('active');
                item.querySelector('.faq-answer').classList.remove('active');
                const icon = item.querySelector('.toggle-icon');
                if (icon) icon.textContent = '+';
            });
            if (!isActive) {
                faqItem.classList.add('active');
                answer.classList.add('active');
                if (toggleIcon) toggleIcon.textContent = "\xd7";
            }
        });
    });
    document.addEventListener('click', (event)=>{
        if (!event.target.closest('.faq-item')) document.querySelectorAll('.faq-item').forEach((item)=>{
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
            const icon = item.querySelector('.toggle-icon');
            if (icon) icon.textContent = '+';
        });
    });
}
function formatCardNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    e.target.value = value.substring(0, 19);
}
function formatExpDate(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) value = value.substring(0, 2) + '/' + value.substring(2, 4);
    e.target.value = value.substring(0, 5);
}

},{"./data3.js":"1F0oI","@parcel/transformer-js/src/esmodule-helpers.js":"2iRUY"}],"fHBVE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WeatherAPI", ()=>WeatherAPI);
class WeatherAPI {
    constructor(){
        this.apiKey = '9af50da83394dbd3afa618ee50ba7b5a';
        this.defaultCity = 'Dubai';
        this.baseUrl = 'http://api.weatherstack.com';
    }
    async getCurrentWeather() {
        try {
            const response = await fetch(`${this.baseUrl}/current?access_key=${this.apiKey}&query=${this.defaultCity}&units=m`);
            if (!response.ok) throw new Error(`Weather API error: ${response.status}`);
            const data = await response.json();
            if (data.error) throw new Error(`Weatherstack API error: ${data.error.info}`);
            console.log('Current weather data received:', data);
            return this._formatCurrentWeatherData(data);
        } catch (error) {
            console.error('Error fetching current weather:', error);
            throw error;
        }
    }
    async getWeatherForDate(targetDate) {
        try {
            const dateString = targetDate.toISOString().split('T')[0];
            const today = new Date().toISOString().split('T')[0];
            if (dateString === today) return await this.getCurrentWeather();
            const isFutureDate = targetDate > new Date();
            if (isFutureDate) return await this.getForecastForDate(targetDate);
            else // Для прошлых дат используем historical API
            return await this.getHistoricalWeather(dateString);
        } catch (error) {
            console.error('Error fetching weather for date:', error);
            throw error;
        }
    }
    async getForecastForDate(targetDate) {
        try {
            const response = await fetch(`${this.baseUrl}/forecast?access_key=${this.apiKey}&query=${this.defaultCity}&forecast_days=7&units=m`);
            if (!response.ok) throw new Error(`Forecast API error: ${response.status}`);
            const data = await response.json();
            if (data.error) throw new Error(`Weatherstack API error: ${data.error.info}`);
            const dateString = targetDate.toISOString().split('T')[0];
            const forecastForDate = data.forecast[dateString];
            if (!forecastForDate) throw new Error('No forecast available for selected date');
            console.log('Forecast data for date received:', forecastForDate);
            return {
                location: data.location.name,
                date: targetDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                temperature: Math.round(forecastForDate.avgtemp),
                feelsLike: Math.round(forecastForDate.avgtemp),
                description: forecastForDate.hourly[0].weather_descriptions[0],
                iconCode: this._mapWeatherCodeToIcon(forecastForDate.hourly[0].weather_code),
                humidity: forecastForDate.avghumidity,
                windSpeed: Math.round(forecastForDate.maxwind * 3.6),
                pressure: forecastForDate.hourly[0].pressure,
                isForecast: true
            };
        } catch (error) {
            console.error('Error fetching forecast:', error);
            throw error;
        }
    }
    async getHistoricalWeather(dateString) {
        try {
            const response = await fetch(`${this.baseUrl}/historical?access_key=${this.apiKey}&query=${this.defaultCity}&historical_date=${dateString}&units=m`);
            if (!response.ok) throw new Error(`Historical API error: ${response.status}`);
            const data = await response.json();
            if (data.error) throw new Error(`Weatherstack API error: ${data.error.info}`);
            console.log('Historical weather data received:', data);
            const historicalDate = data.historical[dateString];
            return {
                location: data.location.name,
                date: new Date(dateString).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                temperature: Math.round(historicalDate.avgtemp),
                feelsLike: Math.round(historicalDate.avgtemp),
                description: historicalDate.hourly[0].weather_descriptions[0],
                iconCode: this._mapWeatherCodeToIcon(historicalDate.hourly[0].weather_code),
                humidity: historicalDate.avghumidity,
                windSpeed: Math.round(historicalDate.maxwind * 3.6),
                pressure: historicalDate.hourly[0].pressure,
                isHistorical: true
            };
        } catch (error) {
            console.error('Error fetching historical weather:', error);
            throw error;
        }
    }
    _formatCurrentWeatherData(data) {
        return {
            location: data.location.name,
            date: new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            temperature: Math.round(data.current.temperature),
            feelsLike: Math.round(data.current.feelslike),
            description: data.current.weather_descriptions[0],
            iconCode: this._mapWeatherCodeToIcon(data.current.weather_code),
            humidity: data.current.humidity,
            windSpeed: Math.round(data.current.wind_speed * 3.6),
            pressure: data.current.pressure,
            isCurrent: true,
            observationTime: data.current.observation_time
        };
    }
    _mapWeatherCodeToIcon(weatherCode) {
        const codeMap = {
            // Ясно
            113: '01d',
            // Преимущественно ясно
            116: '02d',
            // Облачно
            119: '03d',
            122: '04d',
            // Туман
            143: '50d',
            248: '50d',
            260: '50d',
            // Морось
            263: '09d',
            266: '09d',
            281: '09d',
            284: '09d',
            // Дождь
            176: '10d',
            293: '10d',
            296: '10d',
            299: '10d',
            302: '10d',
            305: '10d',
            308: '10d',
            311: '13d',
            314: '13d',
            317: '13d',
            320: '13d',
            // Снег
            179: '13d',
            182: '13d',
            185: '13d',
            227: '13d',
            230: '13d',
            323: '13d',
            326: '13d',
            329: '13d',
            332: '13d',
            335: '13d',
            338: '13d',
            // Гроза
            200: '11d',
            386: '11d',
            389: '11d',
            392: '11d',
            395: '11d'
        };
        return codeMap[weatherCode] || '01d';
    }
    getWeatherIcon(iconCode) {
        const iconMap = {
            '01d': "\u2600\uFE0F",
            '01n': "\uD83C\uDF19",
            '02d': "\u26C5",
            '02n': "\u2601\uFE0F",
            '03d': "\u2601\uFE0F",
            '03n': "\u2601\uFE0F",
            '04d': "\u2601\uFE0F",
            '04n': "\u2601\uFE0F",
            '09d': "\uD83C\uDF27\uFE0F",
            '09n': "\uD83C\uDF27\uFE0F",
            '10d': "\uD83C\uDF26\uFE0F",
            '10n': "\uD83C\uDF26\uFE0F",
            '11d': "\u26C8\uFE0F",
            '11n': "\u26C8\uFE0F",
            '13d': "\u2744\uFE0F",
            '13n': "\u2744\uFE0F",
            '50d': "\uD83C\uDF2B\uFE0F",
            '50n': "\uD83C\uDF2B\uFE0F"
        };
        return iconMap[iconCode] || "\uD83C\uDF08";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2iRUY"}]},["7aTE7","7O6cW"], "7O6cW", "parcelRequireb5ae", {})

//# sourceMappingURL=index15.ce43199e.js.map
