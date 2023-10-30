document.addEventListener("DOMContentLoaded", () => {
  const fetchData = async (value, currency) => {
    const url =
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_iZcmXo9JTmGNUE8sY8IdKK4FIS2S9325joOjsYE2&base_currency=" +
      currency;
    const response = await fetch(url);
    const jsonData = await response.json();
    populate(jsonData, value);
  };

  const populate = async (jsonData, value) => {
    let str = "";
    for (let key of Object.keys(jsonData["data"])) {
      str += `
    <tr><td>${key}</td>
                 <td>${jsonData["data"][key]["code"]}</td>
            <td>${Math.round(jsonData["data"][key]["value"] * value)}</td> </tr>
                `;
    }
    let table = document.querySelector(".display");
    if (table.style.display === "none") {
      table.style.display = "block";
      document.querySelector(".footer").style.display = "none";
    } else {
      table.style.display = "none";
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = str;
  };

  const btn = document.querySelector(".convert-btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = parseInt(
      document.querySelector('input[name="quantity"]').value
    );

    const currency = document.querySelector('select[name="currency"]').value;
    const Ucurrency = currency.toUpperCase();
    // populate(value, Ucurrency);
    fetchData(value, Ucurrency);
  });

  // const select = document.querySelector(".toCurrency");
  // select.addEventListener("change", () => {
  //   console.log("clicked");
  //   const value = parseInt(
  //     document.querySelector('input[name="quantity"]').value
  //   );

  //   const currency = document.querySelector('select[name="currency"]').value;
  //   const Ucurrency = currency.toUpperCase();
  //   populate(value, Ucurrency);
  // });
});
