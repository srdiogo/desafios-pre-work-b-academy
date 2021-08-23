const form = document.querySelector('[data-form-car]')
const table = document.querySelector('[data-table]')


const newTr = () => {
  const tr = document.createElement('tr')
  return tr
}
const newTd = (value) => {
  const td = document.createElement('td')
  td.textContent = value
  return td
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const tr = newTr()
  table.appendChild(tr)
  Array.from(e.target.elements).forEach(e => {
    const td = newTd(e.value)
    e.value != false ? tr.appendChild(td) : ''
  });
e.target.reset()
document.getElementById("image").focus()
})
