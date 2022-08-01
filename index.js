// Write your code here!
document.body.removeChild(main)
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.className = 'victory'
newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.append(newHeader)
