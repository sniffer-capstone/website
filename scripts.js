//make retrieve data run on a timer to update when isRunning is true

//toggle start/stop button
function toggle_running(x) {
    var data, isRunning, html;
    isRunning = x.classList.toggle("fa-stop"); //true when running, false when idle
    if(isRunning){
        data = retrieve_data();
        html = fmt_data(data);
        document.getElementById("tabledata").innerHTML = html;
        //put data inside of tabledata id
    }
    //start main function (retrieve data)
}


function retrieve_data(){
    var data;
    //2d array data, col0=src ip, col1=dst ip, col2=username, col3=pass
    //query database
    
    data = [
      ["127.0.0.1", "127.0.0.1", "test1francesca", "123456"],
      ["127.0.0.1", "127.0.0.1", "test2francesca", "123456"],
      ["127.0.0.1", "127.0.0.1", "test3francesca", "123456"],
    ];
    return data;
}

function fmt_data(data){
    var html="";
    for(var i=0; i<data.length; i++) {
        html += "<tr>";
        for(var j=0; j<data[i].length; j++){
            html+= "<td>"+data[i][j]+"</td>";
        }
        html += "</tr>";
    }
    return html
}

function filter_search(){
    // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("usersearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabledata");
  tr = table.getElementsByTagName("tr");
    found = false;
 for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}

         