export function logThis(thingToLog) {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Logging -');
        console.log(thingToLog);
    }
}