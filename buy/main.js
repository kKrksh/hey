function no_payment(){
  alert("Payment is not currently available")
}
function language(lang){
  if (lang === "en"){
    document.getElementById("english").style.backgroundColor = "rgb(225, 171, 47)";
    document.getElementById("german").style.backgroundColor = "rgb(254,196,58)"
    document.getElementById("first").placeholder = "First name";
    document.getElementById("last").placeholder = "Last name";
    document.getElementById("age").placeholder = "Date of Birth DD/MM/YYYY"
    document.getElementById("ZIP").placeholder = "ZIP code"
    document.getElementById("adress").placeholder = "Street + House number"
    document.getElementById("white").textContent = "White"
    document.getElementById("black").textContent = "Black"
    document.getElementById("red").textContent = "Red"
    document.getElementById("blue").textContent = "Blue"
    document.getElementById("select").textContent = "Please select"
    document.getElementById("texte").textContent = "or"
    document.getElementById("price").textContent = "Price: 2,99€ +"
    document.getElementById("shipping").textContent = "1,99€ shipping"
  }
  else if (lang === "de"){
    document.getElementById("english").style.backgroundColor = "rgb(254,196,58)";
    document.getElementById("german").style.backgroundColor = "rgb(225, 171, 47)"
    document.getElementById("first").placeholder = "Vorname";
    document.getElementById("last").placeholder = "Nachname";
    document.getElementById("age").placeholder = "Geburtsdatum DD/MM/YYYY"
    document.getElementById("ZIP").placeholder = "Postleitzahl"
    document.getElementById("adress").placeholder = "Straße + Hausnummer"
    document.getElementById("white").textContent = "Weiß"
    document.getElementById("black").textContent = "Schwarz"
    document.getElementById("red").textContent = "Rot"
    document.getElementById("blue").textContent = "Blau"
    document.getElementById("select").textContent = "Bitte auswählen"
    document.getElementById("texte").textContent = "oder";
    document.getElementById("price").textContent = "Preis: 2,99€ +"
    document.getElementById("shipping").textContent = "1,99€ Lieferung"
  }
}