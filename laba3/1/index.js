class State {
    constructor(_name, capital) {
        this._name = _name;
        this.regions = {};
        this._capital = capital;
        this.regions[capital.regionName] = capital.districts;
        this.regions[capital.regionName].center = capital.cityName;
        this.regions[capital.regionName][capital.districtName] = capital.cities;
        this.regions[capital.regionName][capital.districtName].center = capital.cityName;
        this.regions[capital.regionName][capital.districtName][capital.cityName] = capital.population;
    }
    addRegion(region) {
        this.regions[region.regionName] = region.districts;
    }
    addDistrict(district) {
        if (this.regions[district.regionName]) {
            this.regions[district.regionName][district.districtName] = district.cities;
        }
        else {
            console.error(`Такої області не існує в цій державі`);
        }
    }
    addCity(city) {
        if (this.regions[city.regionName][city.districtName]) {
            this.regions[city.regionName][city.districtName][city.cityName] = city.population;
            if (this.regions[city.regionName].center == ``) {
                this.regions[city.regionName].center = city.cityName;
                if (this.regions[city.regionName][city.districtName].center == ``) {
                    this.regions[city.regionName][city.districtName].center = city.cityName;
                }
            }
            else {
                if (this.regions[city.regionName][city.districtName].center == ``) {
                    this.regions[city.regionName][city.districtName].center = city.cityName;
                }
            }
        }
        else
            console.error(`Такої області або району не існує в цій державі`);
    }
    get capital() {
        return this._capital.cityName;
    }
    toString() {
        return `
Держава: ${this._name},
Столиця: ${this._capital},
Обасті: ${Object.keys(this.regions)}        
        `;
    }
    getCenters() {
        for (let region in this.regions) {
        }
    }
}
class Region {
    constructor(name) {
        this._districts = {
            center: ``,
        };
        this._regionName = name;
    }
    get regionName() {
        return this._regionName;
    }
    toString() {
    }
    get districts() {
        return this._districts;
    }
}
class District extends Region {
    constructor(_districtName, regionName) {
        super(regionName);
        this._districtName = _districtName;
        this._cities = {
            center: ``,
        };
    }
    get districtName() {
        return this._districtName;
    }
    get cities() {
        return this._cities;
    }
}
class City extends District {
    constructor(_cityName, _population, districtName, regionName) {
        super(districtName, regionName);
        this._cityName = _cityName;
        this._population = _population;
    }
    get cityName() {
        return this._cityName;
    }
    get population() {
        return this._population;
    }
}
let ukr = new State(`Ukraine`, new City(`Kyiv`, 2000000, `Kyivskiy`, `Kyivska`));
console.log(ukr.capital);
ukr.addRegion(new Region(`Mykolaivskaya`));
ukr.addDistrict(new District(`Mykolaivskiy`, `Mykolaivskaya`));
ukr.addCity(new City(`Mykovaiv`, 500000, `Mykolaivskiy`, `Mykolaivskaya`));
