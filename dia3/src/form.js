const form = document.querySelector('[data-form]')
const inputName = document.querySelector('[data-name]')
const fixName = (name) => {
  const fixWordsCase = (str) => {
    const cases = ["de", "da", "do", "dos"]
    return cases.includes(str.toLowerCase()) ?
    str.toLowerCase() :
    str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()}
  const result = name.split(" ").map(e => fixWordsCase(e)).join(" ")
  return result
}
const setName = (e)=>{
e.target.value = fixName(e.target.value)
}
inputName.addEventListener("input", setName);

const colors = ['black', 'blue', 'red', 'green', 'brown']
const select = document.createElement('select')

const container = document.createElement('div')
document.body.appendChild(container)
select.setAttribute('multiple', '')
form.appendChild(select)

container.style.display = 'flex'

const newDiv = (color) => {
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.backgroundColor = color
  return div
}

colors.forEach(col => {
  const option = document.createElement('option')

  option.value = col
  option.textContent = col
  select.appendChild(option)
})
select.addEventListener('change', (e) => {

  Array.from(e.target.selectedOptions).forEach(option => {
    const div = newDiv(option.value)
    container.appendChild(div)
  })
})











