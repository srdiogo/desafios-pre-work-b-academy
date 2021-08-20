const inputName = document.querySelector('[data-js="name"]')
const fixName = (name) => {
  const fixWordsCase = (str) => {
    const cases = ["de", "da", "do", "dos"]
    return cases.includes(str.toLowerCase()) ?
    str.toLowerCase() :
    str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()}
  const result = name.split(" ").map(e => fixWordsCase(e)).join(" ")
    console.log(result)
  return result
}
const setName = (e)=>{
e.target.value = fixName(e.target.value)
}
inputName.addEventListener("input", setName);



