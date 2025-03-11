document.getElementById("moreBtn").addEventListener("click", function () {
    let extraText = document.getElementById("extraText");
    if (extraText.classList.contains("hidden")) {
        extraText.classList.remove("hidden");
        this.textContent = "🔼";
    } else {
        extraText.classList.add("hidden");
        this.textContent = "🔽";
    }
});