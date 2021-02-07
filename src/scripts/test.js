export const greeting = () => {
    const test = document.createElement('h1')
    test.innerText = 'test'
    test.className = 'test'
    document.body.append(test)
  }