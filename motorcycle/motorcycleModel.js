import { openSheet } from '../common/config.js';

export default class NotorcycleModel {
    sheetData = async () => {
        const response = await fetch(openSheet);
        this.data = await response.json();
        return this.data;
    };

    filterBy = (data, value) =>  data.filter((obj) => obj['Type of moto'] === value.toLowerCase());
}
