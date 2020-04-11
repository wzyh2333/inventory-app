import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-price',
    template: `
       \${{price}}
    `
})
export class ProductPriceComponent {
    @Input() price: number;

    constructor() {

    }
}