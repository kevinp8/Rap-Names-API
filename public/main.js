document.querySelector('button').addEventListener('click', yeye)

async function yeye() {
    const rapper = document.querySelector('input').value
    const data = await fetch('/api' + `/${rapper}`)
    const result = await data.json()
    document.querySelector('h1').textContent = result.birthName
}