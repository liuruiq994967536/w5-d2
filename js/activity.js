$(document).ready(function() {
  $("td").click(function() {
    $(this).toggleClass("selected");
    $(this).css("cursor", "pointer");

  });

    $("#not").not(".available").click(function() {
        $(this).removeClass("selected");
        $(this).css("cursor", "default");
        });

    $("#not-available").not(".available").click(function() {
        $(this).removeClass("selected");
        $(this).css("cursor", "default");
        }
    );


});