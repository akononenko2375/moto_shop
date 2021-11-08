import MotorcycleModel from './motorcycleModel.js';
import MotorcycleView from './motorcycleView.js';

export default class MotocycleController {
    constructor() {
        this.model = new MotorcycleModel();
        this.view = new MotorcycleView(this.filterSort);
    }

    async init() {
        const data = await this.model.sheetData();
        this.view.render(data);
    }

    filterSort = async (e) => {
        const filtered = this.model.filterBy(await this.model.sheetData(), e);
        this.view.render(filtered);
    };
}
