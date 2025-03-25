document.addEventListener("DOMContentLoaded", () => {
    const carsUrl="https://www.pinterest.com/pin/60728294969794497/"
    const searchInput = document.querySelector(".hero input");
    const searchButton = document.querySelector(".hero button");
    const carItems = document.querySelectorAll(".car-item");
    fetch(carsUrl)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    })
    .catch(error=>console.log(error))

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        carItems.forEach(car => {
            const carName = car.querySelector("h3").textContent.toLowerCase();
            if (carName.includes(query)) {
                car.style.display = "block";
            } else {
                car.style.display = "none";
            }
        });
    });

    // Allow search on Enter key press
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
});
