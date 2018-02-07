

var numListItems = 0;

function addElement() {
  var newListItem = $('#new-list-item').val();
  numListItems = numListItems + 1;
  $(document).ready(function(){
    $("ol#list").append(`<li id="element-${numListItems}"><button id="remove-${numListItems}">-</button>${newListItem}</li>`);
    $(`button#remove-${numListItems}`).click(function(){
      $('#list').remove(`li#element-${numListItems}`);
      numListItems--;
    })
  });
}
