function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr
    if(views<1000){
        viewStr = views
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M"
    }
    else{
        viewStr=views/1000 + "K"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML += html     
}

createCard("Introduction to Back end | Sigma Web Dev video #2", "CodeWithHarry", 73000000, 7, "20:04", "https://i.ytimg.com/vi/J5By-Q4ZhZs/hqdefault.jpg")
createCard("Introduction to Node Js | Sigma Web Dev video #3", "CodeWithHarry", 6500000, 7, "22:33", "https://i.ytimg.com/vi/J5By-Q4ZhZs/hqdefault.jpg")
createCard("Introduction to PHP | Sigma Web Dev video #4", "CodeWithHarry", 69, 7, "37:12", "https://i.ytimg.com/vi/J5By-Q4ZhZs/hqdefault.jpg")
createCard("Introduction to MySQL | Sigma Web Dev video #5", "CodeWithHarry", 100000, 7, "30:02", "https://i.ytimg.com/vi/J5By-Q4ZhZs/hqdefault.jpg")
