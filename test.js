const toggle = document.querySelector('#toggle')
const toggleBtn = document.querySelector('#toggleBtn')
const toggleIcon = document.querySelector('#toggleIcon')

toggleBtn.addEventListener("click", () => {
    toggle.classList.toggle("bg-green-700")
    toggle.classList.toggle("bg-gray-600")
    toggleBtn.classList.toggle("right-1")
    toggleBtn.classList.toggle("left-1")
    if(toggle.classList.contains("bg-gray-600")){
        toggleIcon.classList.add("fa-user-group")
        toggleIcon.classList.remove("fa-building")
        toggleIcon.classList.remove("text-green-700")
    }else {
        toggleIcon.classList.add("fa-building")
        toggleIcon.classList.add("text-green-700")
        toggleIcon.classList.remove("fa-user-group")
    }
})