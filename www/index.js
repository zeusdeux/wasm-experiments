async function main() {
  const loader = document.getElementById('loader')
  const app = document.getElementById('app')
  const num1 = document.getElementById('num1')
  const num2 = document.getElementById('num2')

  const { greet, add } = await import('../pkg/wasm_experiments.js')

  app.addEventListener('click', e => {
    if (e.target.id === 'sum-btn') {
      e.preventDefault()
      greet(
        add(
          Number.parseFloat(num1.value, 10),
          Number.parseFloat(num2.value, 10)
        )
      )
    }
  })

  loader.classList.toggle('hide')
  app.classList.toggle('hide')
}

main().then(
  v => console.log('Done!', v),
  e => console.error('Error!', e)
)
