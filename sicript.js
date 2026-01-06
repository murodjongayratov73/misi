

const len = document.querySelector(".len"),
      leng = document.querySelector(".leng"),
      lenga = document.querySelector(".leng-1");


      len.addEventListener("click",()=>{
          leng.classList.toggle("leng")
          leng.classList.toggle("leng-1")
      });
      
  
const bulimlar = document.querySelector(".bulimlar"),
bulim = document.querySelector(".bulim"),
bul = document.querySelector(".bul")


bulimlar.addEventListener("click",()=>{
    bulim.classList.toggle("bulim")
    bulim.classList.toggle("bul")
});
  

      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
     

      document.addEventListener("DOMContentLoaded", () => {

        const xaridSpan = document.querySelector(".xarid");
        let count = Number(localStorage.getItem("xaridCount")) || 0;
    
        xaridSpan.textContent = count;
    
        document.addEventListener("click", (e) => {
            const btn = e.target.closest(".savat-2");
            if (!btn) return;
    
            count++;
            xaridSpan.textContent = count;
            localStorage.setItem("xaridCount", count);
        });
    
        xaridSpan.addEventListener("click", () => {
            if (count > 0) {
                count--;
                xaridSpan.textContent = count;
                localStorage.setItem("xaridCount", count);
            }
        });
    
    });

  const server = document.querySelector("#server"),
        btnf = document.querySelector(".btn-f");

console.log(server);

        btnf.addEventListener("klick",()=>{
           if (server.legith > 10 && server.legith < 30 ) {
            alert("tug'ri")
           }else{
            alert("xato")
           }

        });


     
