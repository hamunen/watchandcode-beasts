/* librarySystem */

(function() {

  var libraryStorage = {};

  function librarySystem(libraryName, dependencies, callback) {
    if (arguments.length > 1) {
      //deps = librarySystem(dependencies);
      libraryStorage[libraryName]= {libraryName : libraryName, callback : callback, deps : dependencies, cached : false, cachedResult : null};
    } else {
      if (Array.isArray(libraryName)) {
        return libraryName.map(function(el) {
          return librarySystem(el);
        });
      } else {
        var lib = libraryStorage[libraryName];
        if (!lib.cached) {
          deps = librarySystem(lib.deps);
          lib.cachedResult = lib.callback.apply(null, deps);
          lib.cached = true;
        }
        return lib.cachedResult;
      }
    }
  }

  window.librarySystem = librarySystem;
})();