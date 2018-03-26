import { action, observable } from 'mobx';

class Modals {
    @observable name = "";
    @action setName = (name) => {
        this.name = name;
    }
    @action getName = () => {
        return this.name;
    }
}

export default new Modals();