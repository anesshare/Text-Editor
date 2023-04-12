const ispis = document.getElementById("tekst");


function povecaj(){
    ispis.style.textTransform="uppercase"
}

function boldiraj(){
    ispis.style.fontWeight='bold';
}
function italic(){
ispis.style.fontStyle = "italic";
}

function umanji(){
    ispis.style.textTransform="lowercase"
}
function clearText(){
    ispis.value="";
}
function capitalize() {
    ispis.style.textTransform="capitalize"
    // let currentText = ispis.value;
    // console.log(currentText);
    // ispis.value = currentText.charAt(0).toUpperCase() + currentText.slice(1);
  }
  function alignCenter(){
    ispis.style.textAlign="center";
  }
  function alignLeft(){
    ispis.style.textAlign="left";
  }
  function alignRight(){
    ispis.style.textAlign="right";
  }
  function saveAsWord() {
    const text = document.getElementById("tekst").value;
    const blob = new Blob([text], { type: "application/msword" });
    saveAs(blob, "myDocument.doc");
}
