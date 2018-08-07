Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

```
function* test() {
    let i = 0
    while(i++ < 10) {
        console.log(i)
        yield i
    }
}

const gen = test()
let res
do {
    res = gen.next()
    console.log('res', res.value)
} while(!res.done)
```