self.addEventListener('message', (event) => {
    const number = event.data

    let result = 0
    for (let i = 0; i <= number; i++) {
        result += 1
    }

    self.postMessage(result)
})