import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html',
    styles: [
    ]
})
export class ByCountryPageComponent {
    public countries: Country[] = [];

    constructor(private countriesService: CountriesService) { }

    searchByCountry(term: string) {
        console.log(term);

        this.countriesService.searchCountry(term).subscribe(v => {
            console.log(v);

            this.countries = v
        })

    }
}
