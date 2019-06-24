$('button[type="submit"]').on("click", function(event) {
  event.preventDefault();

  const burgerName = $('input[name="burger_name"]').val();
  $.ajax({
    url: "/add",
    method: "POST",
    data: {
      burger_name: burgerName
    }
  })
    .then(function() {
      alert("Burger added");
    })
    .catch(function() {
      alert("Cannot add this burger");
    });
});
