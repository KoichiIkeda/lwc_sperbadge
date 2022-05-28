import { LightningElement } from 'lwc';

export default class TEST extends LightningElement {
    ratingttt;

    handleChange(event) {
        this.ratingttt = event.detail.rating;
        alert('change!');
    }
}