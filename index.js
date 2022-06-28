let countries = [];
const container = document.querySelector("body > div.countries-container");

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));

  console.log(countries);
}

const countryDisplay = async () => {
  await fetchCountries();

  container.innerHTML = countries
    .map(
      (country) =>
        `
        <div class="card"> 
        <img src=${country.flags.png} alt=${country.translations.fra.common}>
        <h3>${country.translations.fra.common}</h3>
        <h4>${country.capital}</h4>
        <h5>Population : ${country.population}
        </div>
        `
    )
    .join("");
};

countryDisplay();

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
