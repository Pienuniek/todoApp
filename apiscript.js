const baseUrl = "http://localhost:3000/"
//let id = todo._id;

const getData = async function() {
    const res = await fetch(baseUrl, {
        method: "GET",
        headers:{"Content-Type": "application/json"}
})
    const data = await res.json()
    data.forEach(generateTemplate)
}


const postData = async function(todo) {
    let data = {description: todo, done: "false"};
    await fetch(baseUrl, {
        method: "POST", 
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    
    })
}
//update todo in DB

const updateData = async function (todo, doneT) {
    let data = {description: todo, done: doneT};
    await fetch(baseUrl + id, {
        method: "PUT",
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}
//delete todo from DB

const deleteData = async function () {
    await fetch(baseUrl + id, {
        method: "DELETE"
    })
}


