// Media query
var mediaQueryList = window.matchMedia("(min-width: 700px)");
// Add listener that fires each time the state of the media query changes
mediaQueryList.addListener(handleMediaQueryChange);
// Execute the handler on page load
handleMediaQueryChange(mediaQueryList);

// Function called by <form onsubmit=""> immediately before submitting the form.
var isSubmit;

// Media query change handleer
function handleMediaQueryChange(mediaQueryList) {
  var button = document.getElementById("header-search-submit");
  var textBox = document.getElementById("header-search-text");

  // If width >= 700px, don't set up expanding search bar
  if (mediaQueryList.matches) {
    isSubmit = function() {
      var text = textBox.value;
      if (text == null || text == "") {
        textBox.focus();
        return false;
      }
      else {
        return true;
      }
    }
  }

  // If width < 700px, set up the expanding search bar
  else {
    textBox.value = null;
    var cls = "active";

    // Add click listener to search button (called before the onsubmit function)
    button.addEventListener("click", function(event) {
      event.stopPropagation();
      // Function 1: submit search query (don't do anything here)
      if (isSubmit()) return;
      // Function 2: open and close the search bar
      classie.toggleClass(textBox, cls);
      if (classie.has(textBox, cls)) setTimeout((textBox.focus()), 300);
    });

    // Add click listener to rest of document
    document.addEventListener("click", function(event) {
      // Close the search bar if it is open 
      var id = event.target.id
      if (id != button.id && id != textBox.id) {
        if (classie.has(textBox, cls)) {
          classie.remove(textBox, cls);
          textBox.value = null;
        }
      }
    });

    // Called by <form onsubmit="..."> immediately before submitting the form.
    // This is executed after any click handlers on the submit button.
    isSubmit = function() {
      var text = textBox.value;
      return (text == null || text == "") ? false : true;
    }
  }
}
