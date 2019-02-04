function myFunction() {
    var x;
    x = document.getElementsByTagName("input");
    if (x[0].value.length == 0) {
        //var a = document.getElementById('fullName').parentElement
        var a = document.querySelectorAll('input')
        var s = Array.from(a)
        for (el of s) {
            el.classList.add('erreur')
        }
    }
}

document.querySelector("#button-function").addEventListener("click", myAll);

function myAll() {
    var title = document.querySelector(".input-title").value

    var description = document.querySelector(".input-description").value

    var calendrier = document.querySelector(".date").value


    var listContent = document.getElementById("task-list").innerHTML += "<li>" + "<h3>"+"Title :  " + title + "</h3>" + "<h5>"+"Date :" + calendrier + "</h5>" +  "<p>" +"Description : "+ description + "</p>"+"</li>";

    window.localStorage.setItem('listContent', JSON.stringify(listContent))

}

document.addEventListener("DOMContentLoaded", function (event) {

    //let lcoalItem
    if (window.localStorage.getItem('listContent')) {
        var lcoalStorage = JSON.parse(window.localStorage.getItem('listContent'))
        document.getElementById("task-list").innerHTML = lcoalStorage
    } else {
        lcoalStorage = []
        console.log(lcoalStorage)
    }


});