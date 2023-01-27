document.querySelectorAll("#option a").forEach((a) => {
    // jika nanti di klik maka akan  menjalankan fungsi computerChoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})

function computerChoice(element){
    // pilihan user 
    let pilihanUser = element.target.innerText;

    // menangkap elemen result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML; 

    // jika pilihan user == komputer (draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(() => alert("DRAWWW"), 300);
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(() => alert("USER WIN"), 300)
    }
    else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(() => alert("USER WINN"), 300)
    }
    else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(() => alert("USER WINNN"), 300)
    }

    // jika pilihan komputer menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        setTimeout(() => alert("KOMPUTER WIN"), 300)
    }
    else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        setTimeout(() => alert("KOMPUTER WINN"), 300)
    }
    else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        setTimeout(() => alert("KOMPUTER WINNN"), 300)
    }
}