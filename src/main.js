

var listItems = [];

function addElement() {
  var newListItem = $('#new-list-item').val();
  $('#new-list-item').val('');
  listItems.push(newListItem);

  $(document).ready(function(){
    $("ol#list").empty();
    for (var i = 0; i < listItems.length; i++) {
      $("ol#list").append(`<li onclick="removeElement(${i})">${listItems[i]}</li>`);
    }
  });
}

function removeElement(pos) {
  if(pos > listItems.length) {
    console.log("Error!");
    return;
  }

  listItems.splice(pos, 1);

  $(document).ready(function(){
    $("ol#list").empty();
    for (var i = 0; i < listItems.length; i++) {
      $("ol#list").append(`<li onclick="removeElement(${i})">${listItems[i]}</li>`);
    }
  });
}
