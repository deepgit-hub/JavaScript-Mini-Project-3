var n = document.getElementById("name")
var a = document.getElementById("age")
var g = document.getElementById("gender") 
var c = document.getElementById("course")
var e = document.getElementById("email")
var d = document.getElementById("task")
function save()
{
    
    var row = document.createElement("tr")
    row.innerHTML = "<td>"+n.value+"</td>"+"<td>"+a.value+"</td>"+"<td>"+g.value+"</td>"+"<td>"+c.value+"</td>"+"<td>"+e.value+"</td>"+"<td><button onclick=deleteitem(event)>Delete</button></td>"
    d.append(row)
}
function deleteitem(event)
{
    event.target.parentElement.parentElement.remove()
}
