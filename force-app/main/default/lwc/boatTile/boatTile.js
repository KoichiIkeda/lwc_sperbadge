import { api, LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';


const FIELDS = [
    'Boat__c.Name',
    'Boat__c.Contact__r.Name',
    'Boat__c.Price__c',
    'Boat__c.Length__c',
    'Boat__c.BoatType__r.Name',
    'Boat__c.Picture__c'
];

// imports
export default class BoatTile extends LightningElement {
//    @api recordId;
//    @wire(getRecord, { recordId: '$recordId', fields: FIELDS})
    @api boat;

    @api selectedBoatId;

    // Getter for dynamically setting the background image for the picture
    get backgroundStyle() {
        return 'background-image:url(' + this.boat.Picture__c + ')';
    }
    
    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    get tileClass() {
        const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
        const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';
        if( this.boat.Id == this.selectedBoatId ) {
            return TILE_WRAPPER_SELECTED_CLASS
        } else {
            return TILE_WRAPPER_UNSELECTED_CLASS
        }
    }
    
    // Fires event with the Id of the boat that has been selected.
    selectBoat() {
        this.selectedBoatId = this.boat.Id;
        const event = new CustomEvent('boatselect', {detail: {boatId: this.boat.Id}});
        this.dispatchEvent(event); 
    }
  }
  