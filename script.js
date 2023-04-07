var addform= document.getElementById('addform');
var list = document.getElementById('list');

function savetolocal(event){
    event.preventDefault();
    var expense = document.getElementById('task').value;
    var desc = document.getElementById("desc").value;
    var category = document.getElementById('category').value;
    const myobj={
        expense,
        desc,
        category
    };
    let myobjserializeed= JSON.stringify(myobj);
    localStorage.setItem(myobj.category, myobjserializeed);
    console.log(myobjserializeed);
    show(myobj);
    
}
function show(myobj){
    var li = document.createElement('li');
    li.textContent=myobj.expense+' '+myobj.desc+' '+myobj.category+' ';
    const deleteButton = document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='Delete';
    deleteButton.className='btn btn-danger';
    deleteButton.onclick= () => {
        localStorage.removeItem(myobj.category);
        list.removeChild(li);
    }
    const editButton = document.createElement('input');
    editButton.type='button';
    editButton.value='Edit';
    editButton.className='btn btn-primary';
    editButton.onclick= () => {
        localStorage.removeItem(myobj.category);
        list.removeChild(li);
        document.getElementById('task').value= myobj.expense;
        document.getElementById("desc").value=myobj.desc;
        document.getElementById('category').value=myobj.category;
    }
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
}
function displayitem(){
    keys = (Object.values(localStorage));
    console.log(keys);
    for (var i = 0; i < localStorage.length; i++ ) {
        res=JSON.parse( localStorage.getItem( localStorage.key( i ) ) );
        {
        show(res)
        }
        // console.log(res)
    }
}
displayitem();