// meters per seconds ==> kilometers per hours
export function convertWindSpeed(speedInMetersPerSecond : number) : string
{
    const speedInKilometersPerHour = (speedInMetersPerSecond * 3.6).toFixed(1);
    return `${speedInKilometersPerHour}km/h`;
}
