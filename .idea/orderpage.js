//radio buttons for size
function fn1() {
    var rad1 = document.getElementById("rd1");
    var rad2 = document.getElementById("rd2");
    var rad3 = document.getElementById("rd3");

    if(rad1.checked==false && rad2.checked==false && rad3.checked==false) {
        alert("please choose a size");
        return false;
    }
    else {
        return true;
    }

}

// input boxes for first and lastname
function fn2() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    alert(firstname +"  "+lastname);
}

//check boxes for toppings
function fn3(){
    var checks = document.getElementsByClassName("checks");
    var str1 = '';

    for (i=0; i<5; i++) {
        if(checks.checked==true) {
            str1 += checks[i].value;
        }
    }
    alert(str1);


}