$(document).ready(function(){
$('.acc').click(function(){
    $('.options, .pointer').slideToggle();
});
    $('.burger > div').click(function(){
        $('.m').slideToggle();
    })
});

var table = document.getElementById('ajax');
var btn = document.getElementById('test');


    var clients = new XMLHttpRequest();
    clients.open('GET', 'http://localhost/uzduotis/data/contacts.txt');
    clients.onload = function() {
        var contacts = JSON.parse(clients.responseText);
        renderHTML(contacts);
};
clients.send();
    
function renderHTML(data) {
    var kontaktai = '';

    
    for (i = 0; i < data.length; i++) {
        
        kontaktai +='<tr><td>' + data[i].name +  '</td><td>' + data[i].surname + '</td><td>' + data[i].city + '</td><td>' + data[i].email + '</td><td>' + data[i].phone + '<a href="#" style="position: inline; padding: 0px 0px 0px 60px; text-decoration: underline; float: right"><span>Actions</span> <i class="fa fa-caret-down" aria-hidden="true"></i></a></td></tr>';     
    }
    
    table.insertAdjacentHTML('beforeend', kontaktai);

};

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("ajax");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function filtras() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filter-name");
  filter = input.value.toUpperCase();
  table = document.getElementById("ajax");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function miestas() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filter-city");
  filter = input.value;
  table = document.getElementById("ajax");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}