// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newdevoured");
  
      var myBelly = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/devour/" + id, {
        type: "PUT",
        data: myBelly
      }).then(
        function() {
          console.log("changed devoured to", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: "0" //$("[name=devoured]:checked").val().trim()
      };
  console.log(newBurger.devoured);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  