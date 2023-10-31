import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
    selector: 'app-country-page',
    templateUrl: './country-page.component.html',
    styles: [
        `img{
            width: 256px;
        }`
    ]
})
export class CountryPageComponent implements OnInit {

    public country?: Country

    constructor(
        private activatedRoute: ActivatedRoute,
        private countriesService: CountriesService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(switchMap(params => this.countriesService.searchCountryByAlphaCode(params["id"])))
            .subscribe((country) => {
                if (country === null) {
                    this.router.navigateByUrl("");
                    return;
                }
                this.country = country;
            })
    }
}
