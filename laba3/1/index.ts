class State {
    private readonly _capital: City;
    constructor(private _name: string, capital: City) {
        this._capital = capital;
        this.regions[capital.regionName] = capital.districts;
        this.regions[capital.regionName].center = capital.cityName;
        this.regions[capital.regionName][capital.districtName] = capital.cities;
        this.regions[capital.regionName][capital.districtName].center = capital.cityName;
        this.regions[capital.regionName][capital.districtName][capital.cityName] = capital.population;
    }
    private regions: {} = {

    };
    addRegion(region: Region) {
        this.regions[region.regionName] = region.districts;
    }

    addDistrict(district: District): void {
        if (this.regions[district.regionName]) {
            this.regions[district.regionName][district.districtName] = district.cities;
        }
         else {
            console.error(`Такої області не існує в цій державі`);
        }
    }

    addCity(city: City) {
        if (this.regions[city.regionName][city.districtName]) {
            this.regions[city.regionName][city.districtName][city.cityName] = city.population;
            if(this.regions[city.regionName].center == ``){
                this.regions[city.regionName].center = city.cityName;
                if( this.regions[city.regionName][city.districtName].center == ``){
                    this.regions[city.regionName][city.districtName].center = city.cityName;
                }
            }
            else{
                if( this.regions[city.regionName][city.districtName].center == ``){
                    this.regions[city.regionName][city.districtName].center = city.cityName;
                }
            }
        }
        else console.error(`Такої області або району не існує в цій державі`);
    }
    get capital(){
        return this._capital.cityName;
    }
    toString(){
        return `
Держава: ${this._name},
Столиця: ${this._capital},
Обасті: ${Object.keys(this.regions)}        
        `
    }
    getCenters(){
        for (let region in this.regions) {

        }
    }
}
class Region{
    private readonly _regionName: string;
    get regionName(){
        return this._regionName;
    }
    constructor(name: string) {
        this._regionName = name;
    }
    toString(){
    }
    private _districts = {
        center: ``,

    };
    get districts(){
        return this._districts;
    }
}
class District extends Region{
    constructor(private readonly _districtName: string,regionName: string) {
        super(regionName);
    }
    get districtName(){
        return this._districtName;
    }
    private _cities = {
        center: ``,

    };
    get cities(){
        return this._cities;
    }
}
class City extends District{
    constructor(private readonly _cityName: string,private _population: number ,districtName: string, regionName: string) {
        super(districtName,regionName);
    }
    get cityName(){
        return this._cityName;
    }
    get population(){
        return this._population;
    }
}
let ukr = new State(`Ukraine`,new City(`Kyiv`, 2000000, `Kyivskiy`,`Kyivska`));
console.log(ukr.capital);
ukr.addRegion(new Region(`Mykolaivskaya`));
ukr.addDistrict(new District(`Mykolaivskiy`,`Mykolaivskaya`))
ukr.addCity(new City(`Mykovaiv`,500000,`Mykolaivskiy`,`Mykolaivskaya`));