$('#saveBtn').click(function(){
    
    var id = $("#id").val();
    var name = $("#name").val();
    var address = $("#address").val();
    var salaray = $("#salary").val();

    console.log(id+name+address+salaray);

    fetch('http://localhost:8080/student', {
  Method: 'POST',
  Headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'http://127.0.0.1:5501/index.html#'
  },
  Body: {
    "id": id,
    "name": name,
    "address": address,
    "salary": salaray
},
  Cache: 'default'
}).then(response => {         
    console.log(response);
  })
    
  });


  $('#clearAll').click(function(){
    $("#id").val("");
    $("#name").val("");
    $("#address").val("");
    $("#salary").val("");
  });
  


  $('#loadAllView').click(function(){
$('#maintr').remove();
    $('#loadAllStudentPage').css('display','block');
    $('#addStudentPage').css('display','none');

    fetch('http://localhost:8080/student/getall', {
  Method: 'GET',
  Headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  },
 
  Cache: 'default'
})   .then(res => res.json())
        .then(dataset => {
          dataset.forEach(function(item) {
console.log(item)
$('#datatabale').append(`

<tr id="maintr">
          <th scope="row">`+item.id+`</th>
          <td>`+item.name+`</td>
          <td>`+item.address+`</td>
          <td>`+item.salary+`</td>
        </tr>`)

    
});


            })
        })
        .catch(err => console.log(err))
    

  $('#addStudentView').click(function(){
    $('#loadAllStudentPage').css('display','none');
    $('#addStudentPage').css('display','block');
  });