var isRunning=false; //true when retrieving/updating data

//toggle start/stop button
function toggle_running(x) {
    var data, html;
    isRunning = x.classList.toggle("fa-stop"); //true when running, false when idle
    run();
}

//continuously runs
function run(){
    if(isRunning){
        data = retrieve_data(); 
        html = fmt_data(data); //populating table with data
        document.getElementById("tabledata").innerHTML = html; //sending generated html to main.html
        console.log("running");
        setTimeout(run,3000); //retrieves data every 3 seconds
    }
}

//get data from DB
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

//populating an html table with data
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

//filtering the table data through the search field
function filter_search(){
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("usersearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabledata");
  tr = table.getElementsByTagName("tr");
  found = false;
  for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++){
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found){
            tr[i].style.display = "";
            found = false;
        } else{
            tr[i].style.display = "none";
        }
    }
}

         