/* librarySystem */

(function() {

  var libraryStorage = {};

  function librarySystem(libraryName, dependencies, callback) {
    if (arguments.length > 1) {
      //deps = librarySystem(dependencies);
      libraryStorage[libraryName]= {libraryName : libraryName, callback : callback, deps : dependencies};
    } else {
      if (Array.isArray(libraryName)) {
        return libraryName.map(function(el) {
          return librarySystem(el);
        });
      } else {
        deps = librarySystem(libraryStorage[libraryName].deps);
        return libraryStorage[libraryName].callback.apply(null, deps);
      }
    }
  }

  window.librarySystem = librarySystem;
})();