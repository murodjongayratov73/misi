

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
     


      const swt = new Swiper("mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        navigation: {
          nextEl: "a2-next",
          prevEl: "a7-prev",
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


     
        let productImg = document.querySelectorAll(".img-product img"),
        title = document.querySelectorAll("#title"),
        desc = document.querySelectorAll("#desc"),
        Korinka = document.querySelector("#box-cart"),
        btn = document.querySelectorAll("#btn");
      
      
      btn.forEach((item, id) => {
        item.addEventListener("click", () => {
          let newImgProduct = productImg[id].src
          let newTitle = title[id].textContent
          let newDesc = desc[id].textContent
      
      
          let newProduct = document.createElement("div")
          newProduct.setAttribute("class", "item-prod")
      
          newProduct.innerHTML = `
            <div class="item-prod-img">
              <img src="${newImgProduct}" alt="">
            </div>
            <article class="item-prod-info">
              <p>${newTitle}</p>
              <span>${newDesc}</span>
            </article>
            <button>remove</button>
          `
      
          Korinka.append(newProduct)
      
        })
      });


      const cartBox = document.getElementById("cart");
      const cartItems = document.getElementById("cart-items");
      const cartBtn = document.querySelector(".savat");
      const cartClose = document.querySelector(".cart-close");
      const countEl = document.querySelector(".xarid");
      
      let count = 0;
      
      document.addEventListener("click", (e) => {
        const btn = e.target.closest(".add-to-cart");
        if (!btn) return;
      
        const id = btn.dataset.id + "-" + Date.now(); 
      
        cartBox.classList.remove("hidden");
      
        const item = document.createElement("div");
        item.className = "cart-item";
        item.dataset.id = id;
      
        item.innerHTML = `
          <img src="${btn.dataset.img}">
          <div class="cart-item-info">
            <div>${btn.dataset.name}</div>
            <b>$${btn.dataset.price}</b>
          </div>
          <button class="cart-item-remove">×</button>
        `;
      
        cartItems.appendChild(item);
      
        count++;
        countEl.textContent = count;
      });
      
      cartBtn.addEventListener("click", () => {
        if (count > 0) {
          cartBox.classList.toggle("hidden");
        }
      });
      
      cartClose.addEventListener("click", () => {
        cartBox.classList.add("hidden");
      });
      
      cartItems.addEventListener("click", (e) => {
        if (!e.target.classList.contains("cart-item-remove")) return;
      
        e.target.closest(".cart-item").remove();
        count--;
        countEl.textContent = count;
      
        if (count === 0) {
          cartBox.classList.add("hidden");
        }
      });

      document.addEventListener("DOMContentLoaded", () => {

        const input = document.querySelector(".ffff input");
        const btn = document.querySelector(".btn-f");
      
        btn.addEventListener("click", () => {
          const email = input.value.trim();
      
          const emailOk =
            email.includes("@") &&
            email.includes(".") &&
            email.length >= 10 &&
            email.length <= 30;
      
          if (emailOk) {
            input.style.border = "2px solid green";
      
            setTimeout(() => {
              input.value = "";
              input.style.border = "2px solid #ccc";
            }, 500);
      
          } else {
            input.style.border = "2px solid red";
          }
        });
      
      });
      

      document.addEventListener("DOMContentLoaded", () => {

        const openBtn = document.querySelector(".yoqdi");
        const wishlist = document.querySelector(".wishlist");
        const closeBtn = document.querySelector(".close");
        const list = document.querySelector(".wishlist-items");
      
        openBtn.addEventListener("click", () => {
          wishlist.classList.add("active");
        });
      
        closeBtn.addEventListener("click", () => {
          wishlist.classList.remove("active");
        });
      
        document.addEventListener("click", (e) => {
      
          if (e.target.closest(".yoqdi-2")) {
      
            const product = e.target.closest("article");
      
            const img = product.querySelector("img").src;
            const title = product.querySelector(".r3 span").innerText;
            const price = product.querySelector(".r3 h4").innerText;
      
            const item = document.createElement("div");
            item.className = "wishlist-item";
      
            item.innerHTML = `
              <img src="${img}">
              <div>
                <div>${title}</div>
                <div>${price}</div>
              </div>
              <span class="remove">✕</span>
            `;
      
            list.appendChild(item);
          }
      
          if (e.target.classList.contains("remove")) {
            e.target.parentElement.remove();
          }
      
        });
      
      });
      