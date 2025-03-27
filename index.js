document.addEventListener("DOMContentLoaded", () => {
    const carsUrl="https://vercel.com/trevour-ambias-projects/car-wow";
    const searchInput = document.querySelector(".hero input");
    const searchButton = document.querySelector(".hero button");
    const carItems = document.querySelectorAll(".car-item");

    const fetchcars = () => {
        fetch(carsUrl)
    .then(response=>response.json())
    .then(data=>{
        displayCars(data, '');
    })
    .catch(error=>console.error("Error fetching cars", error));
    }

    const displayCars  = (cars, query) => {
        carList.innerHTML = ''; // Clear previous results

        const filteredCars = data.cars.filter(car => 
            car.name.toLowerCase().includes(query.toLowerCase())
        );

        filteredCars.forEach(car => {
            const carItem = document.createElement('div');
            carItem.classList.add('car-item');
            carItem.innerHTML = `<h3>${car.name}</h3>`;
            carList.appendChild(carItem);
            });
    
        }; 




    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase();
        fetch(carsUrl)
        .then(response=>response.json())
        .then(data=>{
            displayCars(data.car, query);
        })
        .catch(error=>console.error("Error fetching filtered cars:", error));
    });

    
    // Allow search on Enter key press
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
    // Fetch cars from the API
    fetchcars();
    
});
