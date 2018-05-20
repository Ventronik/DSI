// import data from './school-data.js'
(function () {

let data = [
    {
    "id":1,
    "name": "James Woods High School",
    "probability": 67,
    "outFor":"4 weeks",
    "stalledAt":"First Tutorial",
    "Analytics":"https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsparklines%2Fsparklines%2Fsparkline_1000_thumb.png",
    "heartRating":2,
  },
  {
    "id":2,
    "name": "John Adams High School",
    "probability":85,
    "outFor":"6 years, 1 month",
    "stalledAt":"Third Tutorial",
    "Analytics":"https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsparklines%2Fsparklines%2Fsparkline_1000_thumb.png",
    "heartRating":4,
  },
  {
    "id":3,
    "name": "John F. Kennedy High School",
    "probability":77,
    "outFor":"3 months",
    "stalledAt":"Second Tutorial",
    "Analytics":"https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsparklines%2Fsparklines%2Fsparkline_1000_thumb.png",
    "heartRating":3,
  },
  {
    "id":4,
    "name": "Xavier Institute",
    "probability":89,
    "outFor":"3 months",
    "stalledAt":"Eighth Tutorial",
    "Analytics":"https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsparklines%2Fsparklines%2Fsparkline_1000_thumb.png",
    "heartRating":1,
  },
  {
    "id":5,
    "name": "Hogwarts",
    "probability":99,
    "outFor":"2 months",
    "stalledAt":"Implementation",
    "Analytics":"https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsparklines%2Fsparklines%2Fsparkline_1000_thumb.png",
    "heartRating":5,
  },
]



console.log(data)

document.querySelector('.table')

function render(){

  data.forEach((item) => {
    let table = document.querySelector(".table");
    let row = document.createElement('tr')
    row.className = "clickable"
    row.setAttribute("data-toggle", "collapse")
    row.setAttribute("data-target", `row${data.indexOf(item)}`)
    let id = document.createElement('td')
    id.innerHTML = item.id
    let schoolName = document.createElement('td')
    schoolName.innerHTML = item.name
    let riskRating = document.createElement('td')
    riskRating.innerHTML = item.probability
    let inactivity = document.createElement('td')
    inactivity.innerHTML = item.outFor
    let progress = document.createElement('td')
    progress.innerHTML = item.stalledAt
    let buttonCell = document.createElement('td')
    let button = document.createElement('button')
    button.setAttribute("type",  "button")
    button.setAttribute("data-toggle",  "modal")
    button.setAttribute("data-target",  ".bd-example-modal-lg")
    button.className ="btn btn-primary"
    let imgAddress = document.createElement('img')
    imgAddress.setAttribute("src", `${item.Analytics}`)
    let heartCell = document.createElement('td')
    let heart = document.createElement('i')
    heart.className="fas fa-heart"

    table.appendChild(row)
      row.appendChild(id)
      row.appendChild(schoolName)
      row.appendChild(riskRating)
      row.appendChild(inactivity)
      row.appendChild(progress)
      row.appendChild(buttonCell)
        buttonCell.appendChild(button)
          button.appendChild(imgAddress)
      row.appendChild(heartCell)

       for(i=0; i < item.heartRating; i++){
         console.log("kitten", item.name)
         let newHeart = heart.cloneNode()
         heartCell.appendChild(newHeart)
       }
  }
)}

render()
})()


// {
// <tr data-toggle="collapse" data-target="#Row8" class="clickable">
//     <i class="fas fa-heart"></i>
//     <i class="fas fa-heart"></i>
//     <i class="fas fa-heart"></i>
//
//   </td>
// </tr>
// <tr>
//   <td colspan="3">
//     <div id="Row8" class="collapse">Hidden by default</div>
//   </td>
// </tr>
// };
