const task = document.getElementById("inputTask")
const button = document.getElementById("button")
const container = document.getElementById("container-card")
let itemEdit = null

button.addEventListener("click", function(e){
    e.preventDefault()

    const cardNotes = document.createElement("div") 
    cardNotes.classList.add("card-notes")
    const inputIsi = task.value.trim()

    if(inputIsi !== ""){
        if(itemEdit){
            const isiTodo = itemEdit.querySelector(".isiTodo")
            isiTodo.textContent = task.value
            itemEdit = null
            button.textContent = "Tambah"
            button.style.backgroundColor = "burlywood"
            button.style.color = "black"
            task.value = ""
        }else{
            cardNotes.innerHTML = `
            
            <div class="content-notes">
                    <input type="radio" name="" id="">
                    <h3 class="isiTodo">${inputIsi}</h3>
            </div>
            <div>
                <button type="button" class="buttonEdit" style="background-color: lightseagreen; border: none; border-radius: 2px; width: auto; padding: 10px 20px; font-weight: bold; color: white;">Edit</button>
                <button type="button" class="buttonHapus" style="background-color: red; border: none; border-radius: 2px; width: auto; padding: 10px 20px; font-weight: bold; color: white;">Hapus</button>
            </div>
        `
            container.appendChild(cardNotes)

            const btnEdit = cardNotes.querySelector(".buttonEdit")
            const btnRemove = cardNotes.querySelector(".buttonHapus")
            const isiTodo = cardNotes.querySelector(".isiTodo")
            btnEdit.addEventListener("click", function(){
                task.value = isiTodo.textContent
                task.focus()
                button.textContent = "Update"
                button.style.backgroundColor = "lightseagreen"
                button.style.color = "white"
                itemEdit = cardNotes
            })

            btnRemove.addEventListener("click", function(){
                if(confirm("yakin ingin hapus tugas?")){
                     cardNotes.remove()
                }
            })



            task.value = ""
        }
    }else{
        alert("silahkan isi todo terlebih dahulu")
        task.value = ""
    }

})