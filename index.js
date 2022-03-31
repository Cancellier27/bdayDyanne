const bdPassword = "filipe"

window.onload = function () {
  document.querySelector("input").focus()
}

let button = document.querySelector("button")
button.addEventListener("click", () => {
  let password = document.querySelector("input").value
  console.log(password.value)
  if (password === bdPassword) {
    document.querySelector(".errorMessage").style.color = 'yellow'
    document.querySelector(".errorMessage").innerHTML = "Right Password! Loading..."
    let a = () => {
        document.querySelector(".hidedDiv").style.display = "flex"
      }
      setInterval(a, 3000)
    
  } else {
    document.querySelector(".errorMessage").style.color = 'red'
    document.querySelector(".errorMessage").innerHTML =
      "Wrong Password! Try again"
    let a = () => {
      document.querySelector(".errorMessage").innerHTML = ""
    }
    setInterval(a, 3000)
  }
  document.querySelector("input").innerHTML = ""
})
