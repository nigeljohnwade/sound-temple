export function logThis(thingToLog) {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Logging -');
        console.log(thingToLog);
    }
}

export function dirThis(thingToDir) {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Node to dir - ');
        console.dir(thingToDir);
    }
}