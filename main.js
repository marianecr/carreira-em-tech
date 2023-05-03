function getName() {
  let name = document.querySelector("#name").value;

  document.querySelector("#user-name").innerHTML = "Bom te ter aqui, " + name + "!";
}

function clearFields() {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");

  name.value = " ";
  email.value = " ";

}
