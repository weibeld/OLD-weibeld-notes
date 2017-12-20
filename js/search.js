(function() {


  // Step 3: display the results
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-result-list');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a class="search-result" href="' + item.url + '"><span>' + item.title + '</span></a>';
        //appendString += '<p>' + item.content.substring(0, 50) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }


  // Step 1: get the search term
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');


  // Step 2: perform the search (with lunr)
  if (searchTerm) {
    var textBox = document.getElementById('body-search-text');
    // On mobile: don't focus to avoid the soft-keyboard of popping up
    if (window.matchMedia("(pointer: fine)").matches) textBox.focus();
    textBox.value = searchTerm;

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      //this.field('author');
      //this.field('category');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        //'author': window.store[key].author,
        //'category': window.store[key].category,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }

})();
