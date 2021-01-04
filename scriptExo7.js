function maFonction(){
    let pointure = Number(document.getElementById("shoeSize").value);
    let dateNaissance = Number(document.getElementById("yearofBirth").value);
    let resultat = (5+ pointure*2 ) * 50 - dateNaissance + 1766;

    window.alert(resultat);
}  