/* librarySystem */

(function() {

  var libraryStorage = {};

  function librarySystem(libraryName, dependencies, callback) {
    if (arguments.length > 1) {
      deps = librarySystem(dependencies);
      libraryStorage[libraryName] = callback.apply(this, deps);
    } else {
      if (Array.isArray(libraryName)) {
        return libraryName.map(function(el) {
          return librarySystem(el);
        });
      } else {
        return libraryStorage[libraryName];
      }
    }
  }

  window.librarySystem = librarySystem;
})();


librarySystem('dependency', [], function() {
  return 'loaded dependency';
});

librarySystem('app', ['dependency'], function(dependency) {
  return 'app with ' + dependency;
});

librarySystem('app'); // 'app with loaded dependency'



librarySystem('name', [], function() {
  return 'Gordon';
});

librarySystem('company', [], function() {
  return 'Watch and Code';
});

librarySystem('workBlurb', ['name', 'company'], function(name, company) {
  return name + ' works at ' + company;
});

librarySystem('workBlurb'); // 'Gordon works at Watch and Code'