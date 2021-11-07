export default class MotocycleView {
    dom = {
        cartBox: document.querySelector('.cart-box'),
        dropdownItem: document.querySelectorAll('.dropdown-item')
    };

    cart = (data) => {
        return (this.listHTML = data.map((el) => {
            return `
        <div class="card" style="width: 25rem;">
        <div class="card-img">
            <img src=${el.Image} class="card-img-top" alt="img">
            <p class="card-price">$${el.Price}</p>
        </div>
        <div class="card-body">
          <h5 class="card-title">${el.Brand} ${el.Model}</h5>
          <p class="card-text">${this.shortDescription(el.Description)}</p>
          <a href="#" class="btn btn-outline-primary">Open</a>
        </div>
      </div>
        `;
        }));
    };

    test(data) {
        for (const elem of this.dom.) {
            elem.addEventListener('click', function () {
                const arr = [];
                for (let i = 0; i < data.length; i++) {
                    if (elem.innerHTML.toLowerCase() == data[i]['Type of moto']) {
                        console.log(data[i]['Type of moto']);
                        arr.push(data[i]);
                    }
                }
                const HTML = arr.map((el) => {
                    return `
                    <div class="card" style="width: 15rem;">
                    <div class="card-img">
                        <img src=${el.Image} class="card-img-top" alt="...">
                        <p class="card-price">$${el.Price}</p>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">${el.Brand} ${el.Model}</h5>
                      <p class="card-text">${shortDescription(el.Description)}</p>
                      <a href="#" class="btn btn-primary">Open</a>
                    </div>
                  </div>
                    `;
                });

                cartBox.innerHTML = '';
                for (const item of HTML) {
                    cartBox.insertAdjacentHTML('beforeend', item);
                }
            });
        }
    }

    render = (data) => {
        this.cart(data);
        this.insertHTML(this.cart(data));
    };

    shortDescription = (str) => {
        return `${str.slice(0, 100)}...`;
    };

    insertHTML = (list) => {
        for (const item of list) {
            this.dom.cartBox.insertAdjacentHTML('beforeend', item);
        }
    };
}
