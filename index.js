let health = prompt('Введите число параметра "здоровье" для персонажа').trim()
// debugger
console.log(Number(health))

if (Number(health) < 0) {
  // health < 0 || health
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  console.log(health)
  alert(`Параметр "здоровье" равен ${Number(health)}`)
  console.log(health)
}
