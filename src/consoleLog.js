export default function logThis(logThis) {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Logging...');
        console.log(logThis);
    }
}