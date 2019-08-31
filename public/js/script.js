// ------------------------------- jQUERY -----------------------------

// This file handles the PUT event
// POST already handled in index.handlebars

// Upon clicking Devour button, burger from left column should re-appear as devoured
$(document).ready(function() {
  $(".devour-burger").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this)
      .children(".burger_id")
      .val();
    console.log(burger_id);

    // Execute AJAX
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function() {
      // Reload page for changes to take effect.
      location.reload();
    });
  });
});
