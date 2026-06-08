var n = document.getElementById("name")
var a = document.getElementById("age")
var g = document.getElementById("gender") 
var c = document.getElementById("course")
var e = document.getElementById("email")
var d = document.getElementById("task")
function save()
{
    
    var row = document.createElement("tr")
    row.innerHTML = "<td>"+n.value+"</td>"+"<td>"+a.value+"</td>"+"<td>"+g.value+"</td>"+"<td>"+c.value+"</td>"+"<td>"+e.value+"</td>"+"<td><button onclick=deleteitem(event)>Delete</button><button onclick=edititem(event)>Edit</button></td>"
    d.append(row)
}
function deleteitem(event)
{
    event.target.parentElement.parentElement.remove()
}
function edititem(event)
{
    var row = event.target.parentElement.parentElement
    n.value = row.children[0].textContent
    a.value = row.children[1].textContent
    g.value = row.children[2].textContent
    c.value = row.children[3].textContent
    e.value = row.children[4].textContent
    row.remove()
}
