$("#but").click(function(){
    let username = [
    "jeo",
    "kobe",
    "lily",
    "mary"
    ],
    password = [
      "jeo123",
      "mamba123",
      "collins123",
      "mary123"
    ],
    uName = $("#username").val(),
    uPassword = $("#password").val(),
    index = username.indexOf(uName),
    success = $("#success"),
    danger = $("#danger");

    if(password[index] == uPassword){
      success.show();
      success.text(`Welcome ${uName}`)
      danger.hide();
    }else{
      success.hide();
      danger.show();
      danger.text("You're doing something wrong")
    }
  })