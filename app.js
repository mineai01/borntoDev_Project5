let round = prompt("จำนวนรอบที่เล่น");
let total = 0

for ( let i = 0; i < round; i++) {
  var answer = prompt("หัว หรือ ก้อย");
  let randomAns = "";

  if (answer == "หัว" || answer == "ก้อย") {
    if (Math.floor(Math.random()*10 <= 4)) {
      randomAns = "หัว";
    } else {
      randomAns = "ก้อย";
    }

    if (answer == randomAns) {
      alert("ยินดีด้วย คุณทายถูก");
      total++
    } else {
      alert("เสียใจด้วย คุณทายผิด");
    }


    console.log(randomAns+":"+answer )
  } else {
    alert("คุณกรอกข้อความผิด กรุณากรอกใหม่อีกครั้ง");
  }
}

document.getElementById("gameList").innerHTML += "จำนวนรอบที่เล่น"+round+"รอบ"+"</br>"+"จำนวนครั้งที่ตอบถูก"+total+"ข้อ"
