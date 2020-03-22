//Add button
$("#prayerSubmit").on("click", function(event) {
  event.preventDefault();

  //new prayer
  var newPrayer = {
    Name: $("#name")
      .val()
      .trim(),
    Location: $("#location")
      .val()
      .trim(),
    Thoughts: $("prayerBox")
      .val()
      .trim()
  };

  //   console.log(newPrayer);

  $.post("/api/new", newPrayer).then(function() {
    var row = $("<div>");
    row.addClass("prayer");

    row.append("<p>" + newPrayer.Name + "</p>");
    row.append("<p>" + newPrayer.Location + "</p>");
    row.append("<p>" + newPrayer.Thoughts + "</p>");

    $("#prayerArea").prepend(row);
  });
  //clear fields
  $("#name").val("");
  $("#location").val("");
  $("#prayerBox").val("");
});

$.get("/api/all", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("prayer");

      row.append("<p>" + data[i].author + "</p>");
      row.append("<p>" + data[i].Location + "</p>");
      row.append("<p>" + data[i].body + "</p>");

      $("#prayerArea").prepend(row);
    }
  }
});
