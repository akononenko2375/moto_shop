export default class MotorcycleView {
    dom = {
        cartBox: document.querySelector('.cart-box'),
        dropdownItem: document.querySelectorAll('.dropdown-item')
    };

    constructor(filterSort) {
        this.getFilterByCategory(this.dom.dropdownItem, filterSort, this.dom.cartBox);
    }

    getFilterByCategory = (collection, handler, selector) => {
        collection.forEach((element) => {
            element.addEventListener('click', (e) => {
                selector.innerHTML = '';
                handler(e.target.textContent);
            });
        });
    };
    render(data) {
        const listHTML = data.map((el) => {
            return `
                    <div class="card ${el['Type of moto']}" style="width: 15rem;">
                    <div class="card-img">
                        <img src=${el.Image} class="card-img-top" alt="...">
                        <p class="card-price">$${el.Price}</p>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">${el.Brand} ${el.Model}</h5>
                      <p class="type">${el['Type of moto']}</p>
                      <p class="card-text">${this.shortDescription(el.Description)}</p>
                      <a href="#" class="btn btn-primary">Open</a>
                    </div>
                  </div>
                    `;
        });

        this.insertHTML(listHTML, this.dom.cartBox);
    }

    shortDescription = (str) => `${str.slice(0, 100)}...`;

    insertHTML = (list) => list.forEach((element) => this.dom.cartBox.insertAdjacentHTML('beforeend', element));
}
