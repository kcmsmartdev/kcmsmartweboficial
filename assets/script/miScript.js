        const btnMenu = document.getElementById("btnMenu");
        const mMenu = document.getElementById("mMenu");
        const btnClose = document.getElementById("btnClose");
        const btn = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        const btn3 = document.getElementById("btn3");
        const btn4 = document.getElementById("btn4");
        const btn5 = document.getElementById("btn5");


        btnMenu.addEventListener("click", function(){
            mMenu.classList.remove("hidden");
            btnMenu.classList.toggle("hidden");
            btnClose.classList.remove("hidden");
        });

        btnClose.addEventListener("click", function(){
            mMenu.classList.toggle("hidden");
            btnMenu.classList.remove("hidden");
            btnClose.classList.toggle("hidden");
        })


        btn.addEventListener("touchstart", () => {
        btn.classList.add("rounded-3xl");
        });

        btn.addEventListener("touchend", () => {
        btn.classList.remove("rounded-3xl");
        });

        btn2.addEventListener("touchstart", () => {
        btn.classList.add("rounded-3xl");
        });

        btn2.addEventListener("touchend", () => {
        btn2.classList.remove("rounded-3xl");
        });


        btn3.addEventListener("touchstart", () => {
        btn3.classList.add("rounded-3xl");
        });

        btn3.addEventListener("touchend", () => {
        btn3.classList.remove("rounded-3xl");
        });


        btn4.addEventListener("touchstart", () => {
        btn4.classList.add("rounded-3xl");
        });

        btn4.addEventListener("touchend", () => {
        btn4.classList.remove("rounded-3xl");
        });
        
        btn5.addEventListener("touchstart", () => {
        btn5.classList.add("rounded-3xl");
        });

        btn5.addEventListener("touchend", () => {
        btn5.classList.remove("rounded-3xl");
        });
        