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

    // this create a link which contains all the input data which we will extract in the result page
    const resultPageUrl = `result.html?name=${encodeURIComponent(name)}&university=${encodeURIComponent(university)}&course=${encodeURIComponent(course)}&position=${encodeURIComponent(position)}`;
    // this takes us to the new page with link we created above
    window.location.href = resultPageUrl;



    
    // document.getElementById("resultDisplay").innerHTML = resultMessage;
    // document.write(resultMessage); // print the result in the same page by removing everything
    } 
}
    else{alert("Baaki information tera baap daalega, kya??")}
}