mostrarMenu();
let addMenuInput = document.getElementById("addMenuInput");
let addMenuBtn = document.getElementById("addMenuBtn");

addMenuBtn.addEventListener("click",function(){

    const addMenuInputValue = addMenuInput.value;

    if(addMenuInputValue){

        let webMenu = localStorage.getItem("localMenu");

        if(webMenu==null){
            menuObject =[];

        }
        else{
            menuObject = JSON.parse(webMenu);
        }

        menuObject.push({
            
            'menu':addMenuInputValue
        });

        localStorage.setItem("localMenu",JSON.stringify(menuObject));
        addMenuInput.value ='';
    }
    mostrarMenu();

})

function mostrarMenu(){
    let webMenu = localStorage.getItem("localMenu");
    if(webMenu ==null){
        menuObject =[];
    }
    else{
        menuObject = JSON.parse(webMenu);
    }
    let html = '';
    let addedMenuList= document.getElementById("addedMenuList");
    menuObject.forEach((item, index) => {

        html += `<tr>
        <th scope="row">${index+1}</th>

        <td>${item.menu}</td>

        <td><button type="button" onclick="editMenu(${index})" class="btn btn-outline-primary"><i class="fa fa-edit"></i>Modificar</button></td>
        
        <td><button type="button" onclick="deleteMenu(${index})" class="btn btn-outline-danger"><i class="fa fa-trash"></i>Eliminar</button></td>
    </tr>`;
});


addedMenuList.innerHTML = html;
}


function editMenu(index){
    let saveIndex = document.getElementById("saveIndex");
    let addMenuBtn = document.getElementById("addMenuBtn");
    let saveMenuButton = document.getElementById("saveMenuButton");
    let webMenu = localStorage.getItem("localMenu");
    let menuObject = JSON.parse(webMenu);

  
    saveIndex.value = index;
    addMenuInput.value = menuObject[index]['menu'];

 
    addMenuBtn.style.display="none";
    saveMenuButton.style.display="inline-block";
}


let saveMenuButton = document.getElementById("saveMenuButton");
saveMenuButton.addEventListener("click", function(e){
    let addMenuBtn = document.getElementById("addMenuBtn");
    let webMenu = localStorage.getItem("localMenu");
    let menuObject = JSON.parse(webMenu); 
 
    let saveIndex = document.getElementById("saveIndex").value;
  
    
    for (keys in menuObject[saveIndex]) {
        if(keys == 'menu'){
            menuObject[saveIndex].menu = addMenuInput.value;
        }
      }
 
    saveMenuButton.style.display="none";
    addMenuBtn.style.display="inline-block";
   
    localStorage.setItem("localMenu", JSON.stringify(menuObject));

    addMenuInput.value = '';

    mostrarMenu();
})


function deleteMenu(index){
    let webMenu = localStorage.getItem("localMenu");
    let menuObject = JSON.parse(webMenu);

    menuObject.splice(index, 1);
 
    localStorage.setItem("localMenu", JSON.stringify(menuObject));
    mostrarMenu();
}


let deleteAllButton = document.getElementById("deleteAllButton");

deleteAllButton.addEventListener("click", function(e){

    let saveMenuButton = document.getElementById("saveMenuButton");
    let addMenuBtn = document.getElementById("addMenuBtn");
    let webMenu = localStorage.getItem("localMenu");
    let menuObject = JSON.parse(webMenu);

    if(webMenu == null){
        menuObject = [];
    }
    else{
        menuObject = JSON.parse(webMenu);
        menuObject = [];
    }

    saveMenuButton.style.display="none";
    addMenuBtn.style.display="inline-block";

    localStorage.setItem("localMenu", JSON.stringify(menuObject));
    mostrarMenu();

})
