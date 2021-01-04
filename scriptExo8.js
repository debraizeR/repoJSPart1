function maFonction(){
    let age = Number(document.getElementById("age").value);

    if(age < 18){
        window.alert("Vous êtes mineur.");
    }
    else{
        window.alert("Vous êtes majeur.");
    }
}