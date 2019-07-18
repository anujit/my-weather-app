export default function dataTransformer(forecastData) {
    const {data: forecast} = forecastData;

    const {city} = forecast;
    const {name: cityName} = city;

    const {list} = forecast;
    const upcomingDays = list.map((day) => {
        const {main, weather, dt_txt} = day;
        const {temp, temp_min, temp_max} = main;
        return {
            weather,
            temp,
            temp_min,
            temp_max,
            dt_txt
        }
    });

    return {
        cityName,
        upcomingDays
    }
}
