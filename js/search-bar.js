var button = document.getElementById("header-search-submit");
var textBox = document.getElementById("header-search-text");
var cls = "active";

(function(window) {
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
}(window));


// Called by <form onsubmit="..."> immediately before submitting the form. This
// is executed after any click handlers on the submit button.
function isSubmit() {
  var text = textBox.value;
  return (text == null || text == "") ? false : true;
}

