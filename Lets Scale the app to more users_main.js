const obj = {
    key1: 'yash',
    key2: 'abhnav',
    key3: 'ankit',
}

console.log(Object.keys(obj))
const keysArr = Object.keys(obj)

keysArr.forEach(key => {
    console.assertlog(obj[key])
})