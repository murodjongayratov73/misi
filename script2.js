const server = document.querySelector("#server"),
btnf = document.querySelector(".btn-f");

btnf.addEventListener("klick",()=>{
   if (server.legith > 10 && server.legith < 30 ) {
    alert("tug'ri")
   }else{
    alert("xato")
   }

});



document.addEventListener("DOMContentLoaded", () => {

    const emailInput = document.querySelector(".in-1");
    const passInput  = document.querySelector(".in-2");
    const checkBox   = document.querySelector(".in-3");
    const btn        = document.querySelector(".btn-pro");

    btn.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const pass  = passInput.value.trim();
        
        const checked = checkBox.checked;

        const emailOk = 
            email.includes("@") &&
            email.includes(".") &&
            email.length >= 10 &&
            email.length <= 20;

        const passOk = pass.length >= 8 && pass.length <= 12;
        const checkOk = checked;

        emailInput.style.border = emailOk ? "2px solid green" : "2px solid red";
        passInput.style.border  = passOk  ? "2px solid green" : "2px solid red";

        const label = checkBox.nextElementSibling;
        if(label){
            label.style.color = checkOk ? "green" : "red";
        }

        btn.style.background = (emailOk && passOk && checkOk) ? "green" : "red";

        if(emailOk && passOk && checkOk){
            setTimeout(() => {
                emailInput.value = "";
                passInput.value  = "";
                checkBox.checked = false;

                emailInput.style.border = "2px solid #ccc";
                passInput.style.border  = "2px solid #ccc";
                if(label){
                    label.style.color = "#000"; 
                }

                btn.style.background = "gray";
            }, 500);
        }
    });

});
