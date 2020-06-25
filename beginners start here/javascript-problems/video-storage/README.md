# Video Storage

A client-side storage for videos.

## Prerequisite

* How To Set Up Local Testing Server

1. Install Python 3 (see their website).

2. Open Git Bash (Linux) terminal in directory.

3. Type `python -m http.server 3000` and enter. Open `localhost:8000` in browser.

Note: To close, type `ctrl` + `c`.

## Keynotes

* What is a `Navigator`?

The `Navigator` interface represents the *state* and the *identity* of the **user agent**. It allows script to query it and to register themselves to carry on some activities.

The `Navigator` object can be retrieved using the read-only `window.navigator` property.

* `ServiceWorkerContainer.register()` method

An interface that creates or updates a `ServiceWorkerRegistration` for the given `scriptURL`.

If successful, a service worker registration ties the provided script URL to a *scope*, which is subsequently used for navigation matching. You can call this method unconditionally from the controlled page. i.e. you don't need to first check whether there's an active registration.

There is a frequent confusion surrounding the meaning and use of "scope". Since a service worker can't have a scope broader than its own location, only use the `scope` option when you need a scope that is narrower than the default.

* `ExtendableEvent.waitUntil()` method

The `ExtendableEvent.waitUntil()` method tells the event dispatcher that work is ongoing. It can also be used to detect whether that work was successful. In service workers, `waitUntil()` tells the browser that work is ongoing until the promise settles, and it shouldn't terminate the service worker if it wants that work to complete.

The `install` events in `service workers` use `waitUntil()` to hold the service workers in the `installing` phase until task complete. If the promise passed to `waitUntil()` rejects, the install is considered a failure, and the installing service worker is discarded. This is primarily used to ensure that a service worker is not considered installed until all the core caches it depends on are successfully populated.

The `activate` events in `service workers` use `waitUntil()` to buffer functional events such as `fetch` and `push` until the promise passed to `waitUntil()` settles. This gives the service worker time to update database schemas and deleted outdated `caches`, so other events can rely on a completely upgraded state.

The `waitUntil()` method must be initially called within the event callback, but after that it can be called multiple times, until all the promises passed to it settle.

**Syntax**

        extendableEvent.waitUntil(promise);

**Parameters**

A `Promise`.

**Return Value**

`undefined`.

Browser Compatibility: Not available in IE and Safari.

* `CacheStorage.open()` method

The `open()` method of the `CacheStorage` interface returns a `Promise` that resolves to the `Cache` object matching the `cacheName`.

You can access `CacheStorage` through the global `caches` property.

If the specified `Cache` does not exist, a new cache is created with that `cacheName` and a `Promise` that resolves to this new `Cache` object is returned.

**Syntax**

        caches.open(cacheName).then(function(cache) {
          // Do something with your cache
          });

**Parameters**

`cacheName`
The name of the cache you want to open.

**Return Value**

A `Promise` that resolves to the requested `Cache` object.

* `Cache`

The *Cache* interface provides a storage mechanism for `Request` / `Response` object pairs that are cached, for example as part of the `ServiceWorker` life cycle.

The Cache interface is exposed to the windowed scopes as well as workers. You don’t have to use it in conjunction with service workers even though it is defined in the service worker spec.

An origin can have multiple named Cache objects. You are responsible for implementing how your script (e.g. in a `ServiceWorker`) handles Cache updates. Items in a Cache do not get updated unless explicitly requested. They don’t expire unless deleted. Use `CacheStorage.open()` to open a specific named `Cache` object and then call any of the `Cache` methods to maintain the `Cache`.

**Make sure to version caches by name and use the caches only from the version of the script that they can safely operate on.**

* `WindowOrWorkerGlobalScope.caches` (Currently Under Experiment)

The `caches` realy-only property of the ` WindowOrWorkerGlobalScope` interface returns the `CacheStorage` object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.

* `Cache.addAll()` method

The `addAll()` method of the `Cache` interface takes an array of URLs, retrieves them, and adds the resoluting reponse objects to the given cache. The request objects created during retrival become keys to the stored response operations.

Warning: `addAll()` will overwrite any key / value pairs previously stored in the cache that match the request, but will fail if a resulting `put()` operation would overwrite a previous cache entrey stored by the same `addAll()` method.

**Syntax**

        cache.addAll(requests[])

**Parameters**

`requests`
An array of string URLs that you want to be fetched and added to the cache. You can specify the `Request` object instead of the URL.

**Return Value**

A `Promise` that resolves with `undefined`.

**Excpetions**

`TypeError`

Happens when:

- The URL scheme is not `http` or `https`.
- The Response status is not in the 200 range (i.e. not successful response). This occurs if the request does not return successfully, but also if the request is a _cross-origin no-cors_ request (in which case the reported status is always 0).

* `FetchEvent.respondWidth()` method

The `respondWidth()` method of `FetchEvent` prevents the browser's **default** fetch handling, and allows you to provide a promise for a `Response` yourself.

In most cases you can provide any response that the receiver understands.

e.g. if an <img> initiates the request, the response body needs to be image data.

For security reasons, there are a few global rules:

You CAN only return Response objects of type “opaque” if the fetchEvent.request object’s mode is “no-cors”. This prevents the leaking of private data.
You CAN only return Response objects of type “opaqueredirect” if the fetchEvent.request object’s mode is “manual”.
You CANNOT return Response objects of type “cors” if the fetchEvent.request object’s mode is “same-origin”.

* `CacheStorage.match()`

**Syntax**

        caches.match(request, options).then(function(response) {
          // Do something with the response
        });

* Service worker works ONLY on _HTTPS_ connection or _localhost_. Not `file://`.

* Different localhost, or ports.

## Credits

- _MDN_ - Client-Side Storage
