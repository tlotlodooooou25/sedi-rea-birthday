/* =========================
   GOLD SPARKS
========================= */

const sparkContainers = document.querySelectorAll(".sparks");

sparkContainers.forEach((container) => {

    for (let i = 0; i < 70; i++) {

        const spark = document.createElement("span");

        spark.classList.add("spark");

        spark.style.setProperty(
            "--size",
            Math.random() * 6 + 3 + "px"
        );

        spark.style.setProperty(
            "--left",
            Math.random() * 100 + "%"
        );

        spark.style.setProperty(
            "--duration",
            Math.random() * 8 + 8 + "s"
        );

        spark.style.setProperty(
            "--delay",
            -(Math.random() * 15) + "s"
        );

        spark.style.setProperty(
            "--drift",
            (Math.random() - 0.5) * 200 + "px"
        );

        spark.style.setProperty(
            "--opacity",
            Math.random() * 0.7 + 0.3
        );

        container.appendChild(spark);
    }

});


/* =========================
   MORE INFO BUTTON
========================= */

const moreInfo = document.getElementById("moreInfo");

moreInfo.addEventListener("click", function () {

    document.getElementById("page2").scrollIntoView({
        behavior: "smooth"
    });

});
