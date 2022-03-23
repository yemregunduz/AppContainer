export class WeatherModel{
    id:number
    name:string
    coord:{lon:number,lat:number}
    weather:[{description:string,icon:string}]
    base:string
    main:{temp:number,humidity:number}
    wind:{speed:number}
    sys:{country:string,sunrise:number}
    

}