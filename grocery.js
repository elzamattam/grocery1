function gro() {


    //creating a XHR object
    var xhttp = new XMLHttpRequest();
    //event listner
    xhttp.onreadystatechange = function() {
        //condition
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            var response = JSON.parse(this.responseText);
            console.log(response);
            var Jgrocery = response.Grocery;
            console.log(Jgrocery);
            var output = "";
            for (var i = 0; i < Jgrocery.length; i++) {
                output += "<tr>";
                output += "<td>" + Jgrocery[i].serial No; + "</td>";
                output += "<td>" + Jgrocery[i].Name; + "</td>";
                output += "<td>" + Jgrocery[i].Quantity; + "</td>";
                output += "<td>" + Jgrocery[i].Unit; + "</td>";
                output += "<td>" + Jgrocery[i].Department; + "</td>";
                output += "<td>" + Jgrocery[i].Notes; + "</td>";
                output += "</tr>";
            }

            //console.log(output);
            document.getElementById("Tablegrocery").innerHTML = output;
        }
    }
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}