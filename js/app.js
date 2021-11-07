const url = 'https://opensheet.vercel.app/1r52WWS8-y-hs0PPChtHj_XZgkSPconZCokamfzBS-rY/data';

const cartBox = document.querySelector('.cart-box');
const dropdownItem = document.querySelectorAll('.dropdown-item');

sheetData(url);
// model
async function sheetData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // рендер карточек
        function renderMoto(data) {
            return data.map((el) => {
                return `
                <div class="card ${el['Type of moto']}" style="width: 15rem;">
                <div class="card-img">
                    <img src=${el.Image} class="card-img-top" alt="...">
                    <p class="card-price">$${el.Price}</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${el.Brand} ${el.Model}</h5>
                  <p class="type">${el['Type of moto']}</p>
                  <p class="card-text">${shortDescription(el.Description)}</p>
                  <a href="#" class="btn btn-primary">Open</a>
                </div>
              </div>
                `;
            });
        }

        for (const item of renderMoto(data)) {
            cartBox.insertAdjacentHTML('beforeend', item);
        }


        // сортировка по категориям
        for (const elem of dropdownItem) {
            elem.addEventListener('click', function () {
                const arr = [];
                for (let i = 0; i < data.length; i++) {
                    if (elem.dataset.filter == data[i]['Type of moto']) {
                        arr.push(data[i]);
                    }
                }

                cartBox.innerHTML = '';
                for (const item of renderMoto(arr)) {
                    cartBox.insertAdjacentHTML('beforeend', item);
                }
            });
        }
    } catch (e) {
        console.log(e.message);
    }
}

function shortDescription(str) {
    return `${str.slice(0, 100)}...`;
}
