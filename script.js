const task = document.getElementById("inputTask")
const button = document.getElementById("button")
const container = document.getElementById("container-card")

button.addEventListener("click", function(e){
    e.preventDefault()

    const cardNotes = document.createElement("div") 
    cardNotes.classList.add("card-notes")
    const inputIsi = task.value.trim()

    if(inputIsi !== ""){
         cardNotes.innerHTML = `
         
        <div class="content-notes">
                <input type="radio" name="" id="">
                <h3>${inputIsi}</h3>
        </div>
        <div>
            <button type="button" id="button" style="background-color: lightseagreen; border: none; border-radius: 2px; width: auto; padding: 10px 20px; font-weight: bold; color: white;">Edit</button>
            <button type="button" id="button" style="background-color: red; border: none; border-radius: 2px; width: auto; padding: 10px 20px; font-weight: bold; color: white;">Hapus</button>
        </div>
    `
    container.appendChild(cardNotes)
    task.value = ""
    }else{
        alert("silahkan isi todo terlebih dahulu")
    }

})