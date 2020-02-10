// przyciski sidebar menu

const btn1 = document.getElementById("nav-button1");
const btn2 = document.getElementById("nav-button2");
const btn3 = document.getElementById("nav-button3");

btn1.classList.add("border");
btn1.querySelector("i").classList.add("arrow");

btn1.addEventListener("click", function () {

    btn1.classList.toggle("border");
    btn1.querySelector("i").classList.toggle("arrow");
    btn2.classList.remove("border");
    btn2.querySelector("i").classList.remove("arrow");
    btn3.classList.remove("border");
    btn3.querySelector("i").classList.remove("arrow");

    document.querySelector(".task3-content").classList.remove("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".recipe-list").classList.add("display-none");
    document.querySelector(".plans-showing-list").classList.add("display-none");
<<<<<<< HEAD

    if (btn1.classList = "border") {
        btn1.classList.add("border");
        btn1.querySelector("i").classList.add("arrow");
    }
=======
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
})

btn2.addEventListener("click", function () {
    btn2.classList.toggle("border");
    btn2.querySelector("i").classList.toggle("arrow");
    btn1.classList.remove("border");
    btn1.querySelector("i").classList.remove("arrow");
    btn3.classList.remove("border");
    btn3.querySelector("i").classList.remove("arrow");

    document.querySelector(".task3-content").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".recipe-list").classList.remove("display-none");
    document.querySelector(".plans-showing-list").classList.add("display-none");
<<<<<<< HEAD

    if (btn2.classList = "border") {
        btn2.classList.add("border");
        btn2.querySelector("i").classList.add("arrow");
    }
=======
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
})

btn3.addEventListener("click", function () {
    btn3.classList.toggle("border");
    btn3.querySelector("i").classList.toggle("arrow");
    btn2.classList.remove("border");
    btn2.querySelector("i").classList.remove("arrow");
    btn1.classList.remove("border");
    btn1.querySelector("i").classList.remove("arrow");

    document.querySelector(".task3-content").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".recipe-list").classList.add("display-none");
    document.querySelector(".plans-showing-list").classList.remove("display-none");

<<<<<<< HEAD
    if (btn3.classList = "border") {
        btn3.classList.add("border");
        btn3.querySelector("i").classList.add("arrow");
    }

=======
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
})

//dodawanie name do localstore

const newName = document.querySelector(".guest-name-input");
const addName = document.querySelector(".guest-name-add");


if (localStorage.getItem("savedName") !== null) {
    document.querySelector(".new-guest-content").classList.toggle("display-none");
    document.querySelector(".header-right-name").innerText = localStorage.getItem("savedName");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".add-plan").classList.add("display-none")
} else {
    document.querySelector(".task3-content").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".add-plan").classList.add("display-none")
}


addName.addEventListener("click", function () {
    let userName = newName.value;
    localStorage.setItem('savedName', userName);


})


// dodawanie przepisu

//przycisk dodający elementy do listy  instrukcji

const instructionButton = document.querySelector(".add-instruction-btn");

const instructionPlace = document.querySelector(".instruction-list");



instructionButton.addEventListener("click", function () {
    const newInstruction = document.createElement("li");
    const newInstructionText = document.createElement("span");
    const removeButton = document.createElement("i");
    const editButton = document.createElement("i");

    instructionPlace.appendChild(newInstruction);
    newInstruction.appendChild(newInstructionText);
    newInstruction.appendChild(removeButton);
    newInstruction.appendChild(editButton);

    newInstructionText.innerText = document.querySelector(".add-instruction").value;
    document.querySelector(".add-instruction").value = "";
    editButton.classList.add("far");
    editButton.classList.add("fa-edit");
    editButton.classList.add("edit-icon");
    removeButton.classList.add("far");
    removeButton.classList.add("fa-trash-alt");
    removeButton.classList.add("bin-icon");

    removeButton.addEventListener("click", function () {
        removeButton.parentElement.parentElement.removeChild(newInstruction);
    })

    editButton.addEventListener("click", function () {
        newInstructionText.innerText = "";
        const editing = prompt("podaj nową instrukcję");
        newInstructionText.innerText = editing;
    })
})

//przycisk dodający elementy do listy


const componentsButton = document.querySelector(".add-components-btn");

const componentsPlace = document.querySelector(".components-list");



componentsButton.addEventListener("click", function () {
    const newComponent = document.createElement("li");
    const newComponentText = document.createElement("span");
    const removeButton = document.createElement("i");
    const editButton = document.createElement("i");

    componentsPlace.appendChild(newComponent);
    newComponent.appendChild(newComponentText);
    newComponent.appendChild(removeButton);
    newComponent.appendChild(editButton);

    newComponentText.innerText = document.querySelector(".add-components").value;
    document.querySelector(".add-components").value = "";
    editButton.classList.add("far");
    editButton.classList.add("fa-edit");
    editButton.classList.add("edit-icon");
    removeButton.classList.add("far");
    removeButton.classList.add("fa-trash-alt");
    removeButton.classList.add("bin-icon");

    removeButton.addEventListener("click", function () {
        removeButton.parentElement.parentElement.removeChild(newComponent);
    })

    editButton.addEventListener("click", function () {
        newComponentText.innerText = "";
        const editing = prompt("podaj nowy składnik");
        newComponentText.innerText = editing;
    })
})




// przycisk zapisz i zamknij


const closeSaveBtn = document.querySelector(".recipe-button");
//const instructionButton = document.querySelector(".add-instruction-btn");
// const componentsButton = document.querySelector(".add-components-btn");

let title = document.querySelector(".recipe-name").querySelector("input");
let opis = document.querySelector(".recipe-text").querySelector("textarea");
let instructions = document.querySelector(".add-instruction");
let components = document.querySelector(".add-components");

let newRecipe = {
    id: null,
    recipeTitle: "",
    recipeText: "",
    recipeIngredients: [],
    recipeInstructions: []
};

let allRecipes = [];
closeSaveBtn.addEventListener("click", function (e) {
    e.preventDefault();


<<<<<<< HEAD
    const instList = document.querySelector(".instruction-list").getElementsByTagName("li");
    for (let i = 0; i < instList.length; i++) {
=======
    const instList=document.querySelector(".instruction-list").getElementsByTagName("li");
    for(let i=0; i<instList.length;i++){
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
        newRecipe.recipeInstructions.push(instList[i].innerText);
    }

    const compList = document.querySelector(".components-list").getElementsByTagName("li");
    for (let i = 0; i < compList.length; i++) {
        newRecipe.recipeIngredients.push(compList[i].innerText);
    }
    if (localStorage.getItem("recipes") != null) {
        let idRecipe = JSON.parse(localStorage.getItem("recipes"));
        newRecipe.id = idRecipe.length + 1;
    } else {
        newRecipe.id = 1;
    }

    newRecipe.recipeTitle = title.value;
    newRecipe.recipeText = opis.value;
    saveRecipeToLocalStorage(newRecipe);
    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".task3-content").classList.remove("display-none");
    location.reload();

});

function saveRecipeToLocalStorage(newObject) {
    let dataFromLocalStorage = [];
    if (localStorage.getItem("recipes") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }

}

// przycisk dodaj przepis
const addRecipe = document.querySelector(".addRecipe");
addRecipe.addEventListener("click", function () {
    document.querySelector(".add-recipe").classList.remove("display-none");
    document.querySelector(".task3-content").classList.add("display-none")
    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".recipe-button").classList.remove("display-none");
    document.querySelector(".recipe-button2").classList.add("display-none");




})

//przycisk dodaj plan
const addPlan = document.querySelector(".addPlan");
addPlan.addEventListener("click", function () {
    document.querySelector(".add-plan").classList.remove("display-none");
    document.querySelector(".task3-content").classList.add("display-none");
    document.querySelector(".plan-button").classList.remove("display-none");
    document.querySelector(".plan-button-edit").classList.add("display-none");
})

// pole wyboru przepisu w sekcji nowy plan

const planRecipePlace = document.getElementsByClassName("recipe-select");
let recipeObject = JSON.parse(localStorage.getItem("recipes"));

<<<<<<< HEAD
for (let i = 0; i < planRecipePlace.length; i++) {
    if (recipeObject) {
        for (let j = 0; j < recipeObject.length; j++) {
            const recipeItem = document.createElement("option");
            planRecipePlace[i].appendChild(recipeItem);
            recipeItem.innerText = recipeObject[j].recipeTitle;
        }
=======
for (let i=0; i<planRecipePlace.length;i++){
if(recipeObject){
    for (let j=0; j<recipeObject.length; j++)
    {
        const recipeItem = document.createElement("option");
        planRecipePlace[i].appendChild(recipeItem);
        recipeItem.innerText=recipeObject[j].recipeTitle;
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
    }
}
}

// guzik zapisz i zamknij plus dodawanie nowego obiektu plan do localstorage
const addPlanBtn = document.querySelector(".plan-button");

let planTitle = document.querySelector(".plan-name-input");
let planInfo = document.querySelector(".plan-text-input");
let planNumber = document.querySelector(".plan-number-input");
let planMonday = document.getElementsByClassName("recipe-pon");
let planTuesday = document.getElementsByClassName("recipe-wt");
let planWednesday = document.getElementsByClassName("recipe-sr");
let planThursday = document.getElementsByClassName("recipe-czw");
let planFriday = document.getElementsByClassName("recipe-pia");
let planSaturday = document.getElementsByClassName("recipe-so");
let planSunday = document.getElementsByClassName("recipe-nie");





let newPlan = {
    id: null,
    title: "",
    description: "",
    weekNumber: "",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
};

addPlanBtn.addEventListener("click", function (e) {
    e.preventDefault();
    newPlan.title = planTitle.value;
    newPlan.description = planInfo.value;
    newPlan.weekNumber = planNumber.value;

    for (let i = 0; i < planMonday.length; i++) {
        newPlan.monday.push(planMonday[i].value);
    }

    for (let i = 0; i < planTuesday.length; i++) {
        newPlan.tuesday.push(planTuesday[i].value);
    }

    for (let i = 0; i < planWednesday.length; i++) {
        newPlan.wednesday.push(planWednesday[i].value);
    }

    for (let i = 0; i < planThursday.length; i++) {
        newPlan.thursday.push(planThursday[i].value);
    }

    for (let i = 0; i < planFriday.length; i++) {
        newPlan.friday.push(planFriday[i].value);
    }

    for (let i = 0; i < planSaturday.length; i++) {
        newPlan.saturday.push(planSaturday[i].value);
    }

    for (let i = 0; i < planSunday.length; i++) {
        newPlan.sunday.push(planSunday[i].value);
    }

    if (localStorage.getItem("plans") != null) {
        let idPlan = JSON.parse(localStorage.getItem("plans"));
        newPlan.id = idPlan.length + 1;
    } else {
        newPlan.id = 1;
    }

    savePlanToLocalStorage(newPlan);

    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".task3-content").classList.remove("display-none");
    document.querySelector(".add-plan").classList.add("display-none");
    location.reload();

});

function savePlanToLocalStorage(newObject) {
    let dataFromLocalStorage = [];
    if (localStorage.getItem("plans") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("plans"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("plans", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("plans", JSON.stringify(dataFromLocalStorage));
    }

}





// zmiana na zakładkę - przepisy

const recipeObject2 = JSON.parse(localStorage.getItem("recipes"));
const recipeTable = document.querySelector(".recipe-table-body");
if (recipeObject2) {
    for (let i = 0; i < recipeObject2.length; i++) {

        const tableTr = document.createElement("tr");
        const tableId = document.createElement("td");
        const tableName = document.createElement("td");
        const tableText = document.createElement("td");
        const tableActions = document.createElement("td");
        const removeButton = document.createElement("i");
        const editButton = document.createElement("i");

        recipeTable.appendChild(tableTr);
        tableTr.appendChild(tableId);
        tableTr.appendChild(tableName);
        tableTr.appendChild(tableText);
        tableTr.appendChild(tableActions);
        tableActions.appendChild(removeButton);
        tableActions.appendChild(editButton);

        tableId.innerText = recipeObject2[i].id;
        tableName.innerText = recipeObject2[i].recipeTitle;
        tableText.innerText = recipeObject2[i].recipeText;

        tableId.classList.add("recipe-id");
        tableName.classList.add("recipe-name");
<<<<<<< HEAD
        tableText.classList.add("recipe-text");
=======
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d

        editButton.classList.add("far");
        editButton.classList.add("fa-edit");
        editButton.classList.add("edit-icon");
        removeButton.classList.add("far");
        removeButton.classList.add("fa-trash-alt");
        removeButton.classList.add("bin-icon");
    }
}



// dodawanie planu do ekranu głównego

Date.prototype.getWeekNumber = function () {
    let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    let dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
};

let actualWeekNumber = (new Date().getWeekNumber());


const planObject = dataFromLocalStorage = JSON.parse(localStorage.getItem("plans"));



let weekNumberArray = [];
let actualPlanNumber;
<<<<<<< HEAD
if (planObject) {
    for (let i = 0; i < planObject.length; i++) {
        weekNumberArray.push(parseFloat(planObject[i].weekNumber));
    }
}
if (weekNumberArray > 0) {
    let closest = weekNumberArray.reduce(function (prev, curr) {
        return (Math.abs(curr - actualWeekNumber) < Math.abs(prev - actualWeekNumber) ? curr : prev);
    })

    if (planObject) {
        for (let i = 0; i < planObject.length; i++) {
            if (parseFloat(planObject[i].weekNumber) === closest) {
                actualPlanNumber = planObject[i];
            }
        }
    }
=======
if(planObject){
for (let i=0;i<planObject.length;i++){
    weekNumberArray.push(parseFloat(planObject[i].weekNumber));
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
}
}
if(weekNumberArray>0) {
    let closest = weekNumberArray.reduce(function (prev, curr) {
        return (Math.abs(curr - actualWeekNumber) < Math.abs(prev - actualWeekNumber) ? curr : prev);
    })
}

<<<<<<< HEAD



if (actualPlanNumber) {
    document.querySelector(".table_title").innerHTML = "Twój plan na " + actualPlanNumber.weekNumber + " tydzień";
    for (let i = 0; i < actualPlanNumber.monday.length; i++) {
        document.querySelectorAll(".poniedzialek")[i].innerHTML = actualPlanNumber.monday[i];
        document.querySelectorAll(".wtorek")[i].innerHTML = actualPlanNumber.tuesday[i];
        document.querySelectorAll(".sroda")[i].innerHTML = actualPlanNumber.wednesday[i];
        document.querySelectorAll(".czwartek")[i].innerHTML = actualPlanNumber.thursday[i];
        document.querySelectorAll(".piatek")[i].innerHTML = actualPlanNumber.friday[i];
        document.querySelectorAll(".sobota")[i].innerHTML = actualPlanNumber.saturday[i];
        document.querySelectorAll(".niedziela")[i].innerHTML = actualPlanNumber.sunday[i];
=======
if(planObject) {
    for (let i = 0; i < planObject.length; i++) {
        if (parseFloat(planObject[i].weekNumber) === closest) {
            actualPlanNumber = planObject[i];
        }
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
    }
}
//przycisk pokazujący następny tydzień
const nextButton = document.querySelector(".under_table_bnt2");
let actualPlan = actualPlanNumber;

<<<<<<< HEAD
nextButton.addEventListener("click", function () {
    for (let i = 0; i < planObject.length; i++) {
        if (actualPlan.id === planObject[planObject.length - 1].id) {
            break;
        } else {
            if (planObject[i].id === actualPlan.id) {
                actualPlan = planObject[i + 1];
                document.querySelector(".table_title").innerHTML = "Twój plan na " + actualPlan.weekNumber + " tydzień";
                for (let i = 0; i < actualPlanNumber.monday.length; i++) {
                    document.querySelectorAll(".poniedzialek")[i].innerHTML = actualPlan.monday[i];
                    document.querySelectorAll(".wtorek")[i].innerHTML = actualPlan.tuesday[i];
                    document.querySelectorAll(".sroda")[i].innerHTML = actualPlan.wednesday[i];
                    document.querySelectorAll(".czwartek")[i].innerHTML = actualPlan.thursday[i];
                    document.querySelectorAll(".piatek")[i].innerHTML = actualPlan.friday[i];
                    document.querySelectorAll(".sobota")[i].innerHTML = actualPlan.saturday[i];
                    document.querySelectorAll(".niedziela")[i].innerHTML = actualPlan.sunday[i];
                }
                break;
            }
        }
    }
})
=======

if(actualPlanNumber) {
    document.querySelector(".table_title").innerHTML = "Twój plan na " + actualPlanNumber.weekNumber + " tydzień";
    for (let i = 0; i < actualPlanNumber.monday.length; i++) {
        document.querySelectorAll(".poniedzialek")[i].innerHTML = actualPlanNumber.monday[i];
        document.querySelectorAll(".wtorek")[i].innerHTML = actualPlanNumber.tuesday[i];
        document.querySelectorAll(".sroda")[i].innerHTML = actualPlanNumber.wednesday[i];
        document.querySelectorAll(".czwartek")[i].innerHTML = actualPlanNumber.thursday[i];
        document.querySelectorAll(".piatek")[i].innerHTML = actualPlanNumber.friday[i];
        document.querySelectorAll(".sobota")[i].innerHTML = actualPlanNumber.saturday[i];
        document.querySelectorAll(".niedziela")[i].innerHTML = actualPlanNumber.sunday[i];
    }
}
 //przycisk pokazujący następny tydzień
const nextButton =document.querySelector(".under_table_bnt2");
 let actualPlan=actualPlanNumber;
 
 nextButton.addEventListener("click", function () {
     for (let i=0;i<planObject.length;i++){
         if (actualPlan.id ===planObject[planObject.length-1].id) {
             break;
         } else {
         if (planObject[i].id === actualPlan.id){
             actualPlan=planObject[i+1];
             document.querySelector(".table_title").innerHTML="Twój plan na "+actualPlan.weekNumber+" tydzień";
             for (let i=0; i<actualPlanNumber.monday.length;i++){
                 document.querySelectorAll(".poniedzialek")[i].innerHTML=actualPlan.monday[i];
                 document.querySelectorAll(".wtorek")[i].innerHTML=actualPlan.tuesday[i];
                 document.querySelectorAll(".sroda")[i].innerHTML=actualPlan.wednesday[i];
                 document.querySelectorAll(".czwartek")[i].innerHTML=actualPlan.thursday[i];
                 document.querySelectorAll(".piatek")[i].innerHTML=actualPlan.friday[i];
                 document.querySelectorAll(".sobota")[i].innerHTML=actualPlan.saturday[i];
                 document.querySelectorAll(".niedziela")[i].innerHTML=actualPlan.sunday[i];
             }
             break;
         }
         }
     }
 })
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d

//przycisk pokazujący poprzedni tydzień
const prevButton = document.querySelector(".under_table_bnt1");

prevButton.addEventListener("click", function () {
    for (let i = 0; i < planObject.length; i++) {
        if (actualPlan.id === 1) {
            break;
        } else {
<<<<<<< HEAD
            if (planObject[i].id === actualPlan.id) {
                actualPlan = planObject[i - 1];
                document.querySelector(".table_title").innerHTML = "Twój plan na " + actualPlan.weekNumber + " tydzień";
                for (let i = 0; i < actualPlanNumber.monday.length; i++) {
                    document.querySelectorAll(".poniedzialek")[i].innerHTML = actualPlan.monday[i];
                    document.querySelectorAll(".wtorek")[i].innerHTML = actualPlan.tuesday[i];
                    document.querySelectorAll(".sroda")[i].innerHTML = actualPlan.wednesday[i];
                    document.querySelectorAll(".czwartek")[i].innerHTML = actualPlan.thursday[i];
                    document.querySelectorAll(".piatek")[i].innerHTML = actualPlan.friday[i];
                    document.querySelectorAll(".sobota")[i].innerHTML = actualPlan.saturday[i];
                    document.querySelectorAll(".niedziela")[i].innerHTML = actualPlan.sunday[i];
                }
                break;
=======
        if (planObject[i].id === actualPlan.id){
            actualPlan=planObject[i-1];
            document.querySelector(".table_title").innerHTML="Twój plan na "+actualPlan.weekNumber+" tydzień";
            for (let i=0; i<actualPlanNumber.monday.length;i++){
                document.querySelectorAll(".poniedzialek")[i].innerHTML=actualPlan.monday[i];
                document.querySelectorAll(".wtorek")[i].innerHTML=actualPlan.tuesday[i];
                document.querySelectorAll(".sroda")[i].innerHTML=actualPlan.wednesday[i];
                document.querySelectorAll(".czwartek")[i].innerHTML=actualPlan.thursday[i];
                document.querySelectorAll(".piatek")[i].innerHTML=actualPlan.friday[i];
                document.querySelectorAll(".sobota")[i].innerHTML=actualPlan.saturday[i];
                document.querySelectorAll(".niedziela")[i].innerHTML=actualPlan.sunday[i];
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
            }
        }
    }
})








// 8.1 Wyswietlanie listy planow

const plansShowingObjects = JSON.parse(localStorage.getItem("plans"));
const plansShowingTable = document.querySelector(".plans-showing-table-body");
<<<<<<< HEAD
if (plansShowingObjects) {
=======
if(plansShowingObjects) {
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
    for (let i = 0; i < plansShowingObjects.length; i++) {

        const tableTr = document.createElement("tr");
        const tableId = document.createElement("td");
        const tableName = document.createElement("td");
        const tableText = document.createElement("td");
        const tableWeekNumber = document.createElement("td");
        const tableActions = document.createElement("td");
        const removeButton = document.createElement("i");
        const editButton = document.createElement("i");

        plansShowingTable.appendChild(tableTr);
        tableTr.appendChild(tableId);
        tableTr.appendChild(tableName);
        tableTr.appendChild(tableText);
        tableTr.appendChild(tableWeekNumber);
        tableTr.appendChild(tableActions);
        tableActions.appendChild(removeButton);
        tableActions.appendChild(editButton);

        tableId.innerText = plansShowingObjects[i].id;
        tableName.innerText = plansShowingObjects[i].title;
        tableText.innerText = plansShowingObjects[i].description;
        tableWeekNumber.innerText = plansShowingObjects[i].weekNumber;

        tableId.classList.add("plans-showing-id");
        tableName.classList.add("plans-showing-name");

        editButton.classList.add("far");
        editButton.classList.add("fa-edit");
        editButton.classList.add("edit-icon");
        removeButton.classList.add("far");
        removeButton.classList.add("fa-trash-alt");
        removeButton.classList.add("bin-icon");
    }
}

<<<<<<< HEAD
const addPlanButton = document.querySelector(".add-plan-btn");
=======
const addPlanButton=document.querySelector(".add-plan-btn");
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d

addPlanButton.addEventListener("click", function () {
    document.querySelector(".plans-showing-list").classList.add("display-none");
    document.querySelector(".add-plan").classList.remove("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".task3-content").classList.add("display-none");

})


<<<<<<< HEAD
const addRecipeButton = document.querySelector(".add-recipe-btn");
=======
const addRecipeButton=document.querySelector(".add-recipe-btn");
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d

addRecipeButton.addEventListener("click", function () {
    document.querySelector(".plans-showing-list").classList.add("display-none");
    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".add-recipe").classList.remove("display-none");
    document.querySelector(".task3-content").classList.add("display-none");
    document.querySelector(".recipe-list").classList.add("display-none");

})


// przycisk kasujący przepis
<<<<<<< HEAD
const removeRecipeBtn = document.querySelectorAll(".recipe-table tbody tr td .bin-icon");
for (let i = 0; i < removeRecipeBtn.length; i++) {
    removeRecipeBtn[i].addEventListener("click", function () {

        const numberToDelete = removeRecipeBtn[i].parentElement.parentElement.querySelector(".recipe-id").innerHTML;
        const child = removeRecipeBtn[i].parentElement.parentElement
        child.parentElement.removeChild(child);
        for (let i = 0; i < recipeObject2.length; i++) {
            if (recipeObject2[i].id === parseFloat(numberToDelete)) {

                let x = JSON.parse(localStorage.getItem("recipes"));
                x.splice(i, 1);
                localStorage.setItem("recipes", JSON.stringify(x));


            }
        }
=======
const removeRecipeBtn=document.querySelectorAll(".recipe-table tbody tr td .bin-icon");
for (let i=0;i<removeRecipeBtn.length;i++){
    removeRecipeBtn[i].addEventListener("click", function () {

    const numberToDelete=removeRecipeBtn[i].parentElement.parentElement.querySelector(".recipe-id").innerHTML;
    const child=removeRecipeBtn[i].parentElement.parentElement
   child.parentElement.removeChild(child);
    for(let i=0;i<recipeObject2.length;i++){
        if(recipeObject2[i].id===parseFloat(numberToDelete)){

            let x = JSON.parse(localStorage.getItem("recipes"));
            x.splice(i,1);
            localStorage.setItem("recipes", JSON.stringify(x));


        }
    }
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
    })
}

//przycisk kasujący plan


<<<<<<< HEAD
const removePlanBtn = document.querySelectorAll(".plans-showing-table tbody tr td .bin-icon");
for (let i = 0; i < removePlanBtn.length; i++) {
    removePlanBtn[i].addEventListener("click", function () {

        const numberToDelete = removePlanBtn[i].parentElement.parentElement.querySelector(".plans-showing-id").innerHTML;
        const child = removePlanBtn[i].parentElement.parentElement
        child.parentElement.removeChild(child);
        for (let i = 0; i < plansShowingObjects.length; i++) {
            if (plansShowingObjects[i].id === parseFloat(numberToDelete)) {

                let x = JSON.parse(localStorage.getItem("plans"));
                x.splice(i, 1);
=======
const removePlanBtn=document.querySelectorAll(".plans-showing-table tbody tr td .bin-icon");
for (let i=0;i<removePlanBtn.length;i++){
    removePlanBtn[i].addEventListener("click", function () {

        const numberToDelete=removePlanBtn[i].parentElement.parentElement.querySelector(".plans-showing-id").innerHTML;
        const child=removePlanBtn[i].parentElement.parentElement
        child.parentElement.removeChild(child);
        for(let i=0;i<plansShowingObjects.length;i++){
            if(plansShowingObjects[i].id===parseFloat(numberToDelete)){

               let x = JSON.parse(localStorage.getItem("plans"));
                x.splice(i,1);
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                localStorage.setItem("plans", JSON.stringify(x));


            }
        }
    })
}


//edytowanie planu

<<<<<<< HEAD
const editPlanBtn = document.querySelectorAll(".plans-showing-table tbody tr td .edit-icon");
const saveEditButton = document.querySelector(".plan-button-edit");

for (let i = 0; i < editPlanBtn.length; i++) {
=======
const editPlanBtn=document.querySelectorAll(".plans-showing-table tbody tr td .edit-icon");
const saveEditButton=document.querySelector(".plan-button-edit");

for(let i=0;i<editPlanBtn.length;i++){
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
    editPlanBtn[i].addEventListener("click", function () {
        document.querySelector(".add-plan").classList.remove("display-none");
        document.querySelector(".plans-showing-list").classList.add("display-none");
        document.querySelector(".plan-button").classList.add("display-none");
        document.querySelector(".plan-button-edit").classList.remove("display-none");
<<<<<<< HEAD
        const numberToEdit = editPlanBtn[i].parentElement.parentElement.querySelector(".plans-showing-id").innerHTML;
        for (let i = 0; i < plansShowingObjects.length; i++) {
            if (plansShowingObjects[i].id === parseFloat(numberToEdit)) {

                let planTitle = document.querySelector(".plan-name-input");
                let planInfo = document.querySelector(".plan-text-input");
                let planNumber = document.querySelector(".plan-number-input");
                let planMonday = document.getElementsByClassName("recipe-pon");
                let planTuesday = document.getElementsByClassName("recipe-wt");
                let planWednesday = document.getElementsByClassName("recipe-sr");
                let planThursday = document.getElementsByClassName("recipe-czw");
                let planFriday = document.getElementsByClassName("recipe-pia");
                let planSaturday = document.getElementsByClassName("recipe-so");
                let planSunday = document.getElementsByClassName("recipe-nie");

                planTitle.value = plansShowingObjects[i].title;
                planInfo.value = plansShowingObjects[i].description;
                planNumber.value = plansShowingObjects[i].weekNumber;

                for (let j = 0; j < planMonday.length; j++) {
                    planMonday[j].value = plansShowingObjects[i].monday[j]
                }
                for (let j = 0; j < planThursday.length; j++) {
                    planTuesday[j].value = plansShowingObjects[i].tuesday[j]
                }

                for (let j = 0; j < planWednesday.length; j++) {
                    planWednesday[j].value = plansShowingObjects[i].wednesday[j]
                }
                for (let j = 0; j < planThursday.length; j++) {
                    planThursday[j].value = plansShowingObjects[i].thursday[j]
                }
                for (let j = 0; j < planFriday.length; j++) {
                    planFriday[j].value = plansShowingObjects[i].friday[j]
                }
                for (let j = 0; j < planSaturday.length; j++) {
                    planSaturday[j].value = plansShowingObjects[i].saturday[j]
                }
                for (let j = 0; j < planSunday.length; j++) {
=======
        const numberToEdit=editPlanBtn[i].parentElement.parentElement.querySelector(".plans-showing-id").innerHTML;
        for(let i=0;i<plansShowingObjects.length;i++){
            if(plansShowingObjects[i].id===parseFloat(numberToEdit)){

                let planTitle=document.querySelector(".plan-name-input");
                let planInfo=document.querySelector(".plan-text-input");
                let planNumber=document.querySelector(".plan-number-input");
                let planMonday=document.getElementsByClassName("recipe-pon");
                let planTuesday=document.getElementsByClassName("recipe-wt");
                let planWednesday=document.getElementsByClassName("recipe-sr");
                let planThursday=document.getElementsByClassName("recipe-czw");
                let planFriday=document.getElementsByClassName("recipe-pia");
                let planSaturday=document.getElementsByClassName("recipe-so");
                let planSunday=document.getElementsByClassName("recipe-nie");

               planTitle.value=plansShowingObjects[i].title;
                planInfo.value=plansShowingObjects[i].description;
                planNumber.value=plansShowingObjects[i].weekNumber;

                for (let j=0;j<planMonday.length;j++) {
                    planMonday[j].value=plansShowingObjects[i].monday[j]
                }
                for (let j=0;j<planThursday.length;j++) {
                    planTuesday[j].value = plansShowingObjects[i].tuesday[j]
                }

                for (let j=0;j<planWednesday.length;j++) {
                    planWednesday[j].value = plansShowingObjects[i].wednesday[j]
                }
                for (let j=0;j<planThursday.length;j++) {
                    planThursday[j].value = plansShowingObjects[i].thursday[j]
                }
                for (let j=0;j<planFriday.length;j++) {
                    planFriday[j].value = plansShowingObjects[i].friday[j]
                }
                for (let j=0;j<planSaturday.length;j++) {
                    planSaturday[j].value = plansShowingObjects[i].saturday[j]
                }
                for (let j=0;j<planSunday.length;j++) {
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                    planSunday[j].value = plansShowingObjects[i].sunday[j]
                }

                saveEditButton.addEventListener("click", function () {
                    let x = JSON.parse(localStorage.getItem("plans"));

                    x[i].title = planTitle.value;
<<<<<<< HEAD
                    x[i].description = planInfo.value;
                    x[i].weekNumber = planNumber.value;


                    x[i].monday = [];
                    for (let k = 0; k < planMonday.length; k++) {
                        x[i].monday.push(planMonday[k].value);
                    }

                    x[i].tuesday = [];
                    for (let k = 0; k < planTuesday.length; k++) {
                        x[i].tuesday.push(planTuesday[k].value);
                    }

                    x[i].wednesday = [];
                    for (let k = 0; k < planWednesday.length; k++) {
                        x[i].wednesday.push(planWednesday[k].value);
                    }

                    x[i].thursday = [];
                    for (let k = 0; k < planThursday.length; k++) {
                        x[i].thursday.push(planThursday[k].value);
                    }

                    x[i].friday = [];
                    for (let k = 0; k < planFriday.length; k++) {
                        x[i].friday.push(planFriday[k].value);
                    }

                    x[i].saturday = [];
                    for (let k = 0; k < planSaturday.length; k++) {
                        x[i].saturday.push(planSaturday[k].value);
                    }

                    x[i].sunday = [];
                    for (let k = 0; k < planSunday.length; k++) {
=======
                    x[i].description=planInfo.value;
                    x[i].weekNumber=planNumber.value;


                    x[i].monday=[];
                    for (let k=0;k<planMonday.length;k++) {
                        x[i].monday.push(planMonday[k].value);
                    }

                    x[i].tuesday=[];
                    for (let k=0;k<planTuesday.length;k++) {
                        x[i].tuesday.push(planTuesday[k].value);
                    }

                    x[i].wednesday=[];
                    for (let k=0;k<planWednesday.length;k++) {
                        x[i].wednesday.push(planWednesday[k].value);
                    }

                    x[i].thursday=[];
                    for (let k=0;k<planThursday.length;k++) {
                        x[i].thursday.push(planThursday[k].value);
                    }

                    x[i].friday=[];
                    for (let k=0;k<planFriday.length;k++) {
                        x[i].friday.push(planFriday[k].value);
                    }

                    x[i].saturday=[];
                    for (let k=0;k<planSaturday.length;k++) {
                        x[i].saturday.push(planSaturday[k].value);
                    }

                    x[i].sunday=[];
                    for (let k=0;k<planSunday.length;k++) {
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                        x[i].sunday.push(planSunday[k].value);
                    }

                    localStorage.setItem("plans", JSON.stringify(x));


                    document.querySelector(".add-plan").classList.add("display-none");
                    document.querySelector(".plans-showing-list").classList.remove("display-none");

<<<<<<< HEAD
                    editPlanBtn[i].parentElement.parentElement.querySelectorAll("td")[1].innerText = planTitle.value;
                    editPlanBtn[i].parentElement.parentElement.querySelectorAll("td")[2].innerText = planInfo.value;
                    editPlanBtn[i].parentElement.parentElement.querySelectorAll("td")[3].innerText = planNumber.value;
                    planTitle.value = "";
                    planInfo.value = "";
                    planNumber.value = "";
=======
                   editPlanBtn[i].parentElement.parentElement.querySelectorAll("td")[1].innerText=planTitle.value;
                    editPlanBtn[i].parentElement.parentElement.querySelectorAll("td")[2].innerText=planInfo.value;
                    editPlanBtn[i].parentElement.parentElement.querySelectorAll("td")[3].innerText=planNumber.value;
                    planTitle.value="";
                    planInfo.value="";
                    planNumber.value="";
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                })

            }
        }
    })
}

// edytowanie przepisu


<<<<<<< HEAD
const editRecipeBtn = document.querySelectorAll(".recipe-table tbody tr td .edit-icon");
const editRecipeButton = document.querySelector(".recipe-button2");

for (let i = 0; i < editRecipeBtn.length; i++) {
    editRecipeBtn[i].addEventListener("click", function () {
        let title = document.querySelector(".recipe-name").querySelector("input");
        let opis = document.querySelector(".recipe-text").querySelector("textarea");
=======
const editRecipeBtn=document.querySelectorAll(".recipe-table tbody tr td .edit-icon");
const editRecipeButton=document.querySelector(".recipe-button2");

for (let i=0; i<editRecipeBtn.length;i++){
    editRecipeBtn[i].addEventListener("click", function () {
        let title=document.querySelector(".recipe-name").querySelector("input");
        let opis=document.querySelector(".recipe-text").querySelector("textarea");
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d


        document.querySelector(".add-recipe").classList.remove("display-none");
        document.querySelector(".recipe-list").classList.add("display-none");
        document.querySelector(".recipe-button").classList.add("display-none");
        document.querySelector(".recipe-button2").classList.remove("display-none");
<<<<<<< HEAD
        const numberToEdit = editRecipeBtn[i].parentElement.parentElement.querySelector(".recipe-id").innerHTML;
        for (let i = 0; i < recipeObject2.length; i++) {
            if (recipeObject2[i].id === parseFloat(numberToEdit)) {


                title.value = recipeObject2[i].recipeTitle;
                opis.value = recipeObject2[i].recipeText;



                const instructionPlace = document.querySelector(".instruction-list");

                for (let j = 0; j < recipeObject2[i].recipeInstructions.length; j++) {
                    const newInstruction = document.createElement("li");
                    const newInstructionText = document.createElement("span");
=======
        const numberToEdit=editRecipeBtn[i].parentElement.parentElement.querySelector(".recipe-id").innerHTML;
        for(let i=0;i<recipeObject2.length;i++){
            if(recipeObject2[i].id===parseFloat(numberToEdit)){


                title.value=recipeObject2[i].recipeTitle;
                opis.value=recipeObject2[i].recipeText;



                const instructionPlace= document.querySelector(".instruction-list");

                for(let j =0;j<recipeObject2[i].recipeInstructions.length;j++){
                    const newInstruction= document.createElement("li");
                    const newInstructionText =document.createElement("span");
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                    const removeButton = document.createElement("i");
                    const editButton = document.createElement("i");

                    instructionPlace.appendChild(newInstruction);
                    newInstruction.appendChild(newInstructionText);
                    newInstruction.appendChild(removeButton);
                    newInstruction.appendChild(editButton);

<<<<<<< HEAD
                    newInstructionText.innerText = recipeObject2[i].recipeInstructions[j];
=======
                    newInstructionText.innerText=recipeObject2[i].recipeInstructions[j];
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                    editButton.classList.add("far");
                    editButton.classList.add("fa-edit");
                    editButton.classList.add("edit-icon");
                    removeButton.classList.add("far");
                    removeButton.classList.add("fa-trash-alt");
                    removeButton.classList.add("bin-icon");

                    removeButton.addEventListener("click", function () {
                        removeButton.parentElement.parentElement.removeChild(newInstruction);
                    })

                    editButton.addEventListener("click", function () {
<<<<<<< HEAD
                        newInstructionText.innerText = "";
                        const editing = prompt("podaj nową instrukcję");
                        newInstructionText.innerText = editing;
=======
                        newInstructionText.innerText="";
                        const editing=prompt("podaj nową instrukcję");
                        newInstructionText.innerText=editing;
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                    })
                }



<<<<<<< HEAD
                const componentsPlace = document.querySelector(".components-list");

                for (let k = 0; k < recipeObject2[i].recipeIngredients.length; k++) {
                    const newComponent = document.createElement("li");
                    const newComponentText = document.createElement("span");
=======
                const componentsPlace= document.querySelector(".components-list");

                for(let k=0;k<recipeObject2[i].recipeIngredients.length;k++) {
                    const newComponent= document.createElement("li");
                    const newComponentText =document.createElement("span");
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                    const removeButton = document.createElement("i");
                    const editButton = document.createElement("i");

                    componentsPlace.appendChild(newComponent);
                    newComponent.appendChild(newComponentText);
                    newComponent.appendChild(removeButton);
                    newComponent.appendChild(editButton);

<<<<<<< HEAD
                    newComponentText.innerText = recipeObject2[i].recipeIngredients[k];
=======
                    newComponentText.innerText=recipeObject2[i].recipeIngredients[k];
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d

                    editButton.classList.add("far");
                    editButton.classList.add("fa-edit");
                    editButton.classList.add("edit-icon");
                    removeButton.classList.add("far");
                    removeButton.classList.add("fa-trash-alt");
                    removeButton.classList.add("bin-icon");

                    removeButton.addEventListener("click", function () {
                        removeButton.parentElement.parentElement.removeChild(newComponent);
                    })

                    editButton.addEventListener("click", function () {
<<<<<<< HEAD
                        newComponentText.innerText = "";
                        const editing = prompt("podaj nowy składnik");
                        newComponentText.innerText = editing;
=======
                        newComponentText.innerText="";
                        const editing=prompt("podaj nowy składnik");
                        newComponentText.innerText=editing;
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                    })
                }



                editRecipeButton.addEventListener("click", function (e) {
                    e.preventDefault();
                    let x = JSON.parse(localStorage.getItem("recipes"));


<<<<<<< HEAD
                    const instList = document.querySelector(".instruction-list").getElementsByTagName("li");

                    x[i].recipeInstructions = [];
                    for (let l = 0; l < instList.length; l++) {
                        x[i].recipeInstructions.push(instList[l].innerText);
                    }

                    const compList = document.querySelector(".components-list").getElementsByTagName("li");
                    x[i].recipeIngredients = [];
                    for (let l = 0; l < compList.length; l++) {
=======
                    const instList=document.querySelector(".instruction-list").getElementsByTagName("li");

                    x[i].recipeInstructions=[];
                    for(let l=0; l<instList.length;l++){
                        x[i].recipeInstructions.push(instList[l].innerText);
                    }

                    const compList=document.querySelector(".components-list").getElementsByTagName("li");
                    x[i].recipeIngredients=[];
                    for(let l=0; l<compList.length;l++){
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
                        x[i].recipeIngredients.push(compList[l].innerText);
                    }


                    x[i].recipeTitle = title.value;
<<<<<<< HEAD
                    x[i].recipeText = opis.value;
=======
                    x[i].recipeText=opis.value;
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d

                    localStorage.setItem("recipes", JSON.stringify(x));

                    document.querySelector(".add-recipe").classList.add("display-none");
                    document.querySelector(".recipe-list").classList.remove("display-none");


<<<<<<< HEAD
                    editRecipeBtn[i].parentElement.parentElement.querySelectorAll("td")[1].innerText = title.value;
                    editRecipeBtn[i].parentElement.parentElement.querySelectorAll("td")[2].innerText = opis.value;
=======
                    editRecipeBtn[i].parentElement.parentElement.querySelectorAll("td")[1].innerText=title.value;
                    editRecipeBtn[i].parentElement.parentElement.querySelectorAll("td")[2].innerText=opis.value;
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d



                    location.reload();


                    document.querySelector(".add-recipe").classList.remove("display-none");
                    document.querySelector(".recipe-list").classList.add("display-none");
                    document.querySelector(".recipe-button").classList.add("display-none");
                    document.querySelector(".recipe-button2").classList.remove("display-none");
                    window.location = document.URL;

                })

            }
        }
<<<<<<< HEAD
    })
=======
})
>>>>>>> 5f997d6ac65319d32bfed355641764b8dee8966d
}







