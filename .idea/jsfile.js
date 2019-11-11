function checkForm() {

    var firstname = document.forms["myform"]["firstname"].value;
    var lastname = document.forms["myform"]["lastname"].value;
    var fulladdress = document.forms["myform"]["fulladdress"].value;


    if (firstname == "" || lastname == "" || fulladdress == "") {
        alert("Please make your first, last name and full address have been entered!");
        return false;
    }}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("myslides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
