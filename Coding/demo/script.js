function displayResult() {
    let name = document.getElementById("name").value;
    let university = document.getElementById("university").value;
    let course = document.getElementById("course").value;
    let position = document.querySelector('input[name="position"]:checked').value;
    if (name && university){
        if(position === "Data Engineer"){
            document.getElementById("resultDisplay").innerHTML = `<img src="gNHbqod07bC4o.gif">`;
    }
    else {
        let resultMessage = `
        <strong>Entered Information:</strong><br>
        Name: ${name}<br>
        University Name: ${university}<br>
        Course: ${course}<br>
        Interested Position: ${position}
    `;
    document.getElementById("resultDisplay").innerHTML = resultMessage;
    } 
}
    else{alert("Baaki information tera baap daalega, kya??")}
}
