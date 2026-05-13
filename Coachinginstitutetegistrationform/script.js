const form = document.getElementById("formcontainer");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(document.getElementById("name").value);
  console.log(document.getElementById("email").value);
  console.log(document.getElementById("mobile").value);
  console.log(document.getElementById("dob").value);
  console.log(document.getElementById("qualification").value);
  console.log(document.getElementById("percentage").value);
  console.log(document.getElementById("course").value);
});