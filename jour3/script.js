function FirstJob() {
    let num1 = document.querySelectorAll('#job1-num')[0].value;
    let num2 = document.querySelectorAll('#job1-num')[1].value;

    if(!isNaN(num1) && !isNaN(num2)) {
        let addition = parseInt(num1) + parseInt(num2);
        let difference = num1 - num2;
        let multiply = num1 * num2;
        let division = num1 / num2;

        document.write("Resultat Job1:" + "<br>" + 
            "addition(" + addition + ")" + "<br>" + 
            "difference(" + difference + ")" + "<br>" + 
            "multiply(" + multiply + ")" + "<br>" + 
            "division(" + division + ")");
    }
    else {
        document.write("Input invalide");
    }
}



function SecondJob() {
    let array = ["Keqing", "Fischl", "Nahida", "Zhongli"];
    document.write("Verifier la console (ctrl+maj+i sur mozilla)");

    console.log("Tableau original: " + array);
    array.unshift("Itto")
    array.push("Hu Tao");
    console.log("Tableau apres ajout au debut et a la fin: " + array);
    console.log(array[array.length - 1]);
}



function ThirdJob() {
    let array = ["Nintendo", "Sony", "Microsoft"];
    document.write("Verifier la console (ctrl+maj+i sur mozilla)");

    console.log("Affichage du tableau via for loop");
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

function ThirdJobAlt() {
    let array = ["Nintendo", "Sony", "Microsoft"];
    document.write("Verifier la console (ctrl+maj+i sur mozilla)");

    console.log("Affichage du tableau via foreach");
    array.forEach(element => {
        console.log(element);
    });
}



function FourthJob() {
    let input = document.getElementById("#job4-entry").value;
    let len = (input) => {
        if (!(input === null)) {
            document.write("Longueur de chaine rentrer" + len);
        }
    }
}



function FifthJob() {

}



function SixthJob() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = bgColor;
}



function SeventhJob() {
    let result = document.getElementById("#job7-result");
    let entry = document.getElementById("#job7-entry");

    if (localStorage.getItem("job7-input")) {
        result.innerHTML = result
    }
    else {
        localStorage.setItem("job7-input", entry.value)
    }
}