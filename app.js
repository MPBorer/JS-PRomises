// console.log(fetch(`https://jsonplaceholder.typicode.com/users/1`))



// // .Then
// const emailRef = document.querySelector(`.email`);
// fetch(`https://jsonplaceholder.typicode.com/users/1`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     emailRef.innerHTML = data.email
//   });

// async/await
const emailRef = document.querySelector(`.email`);
async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); 
    const data = await response.json()
    emailRef.innerHTML = data.email
}
main()


const statusRef = document.querySelector(`.status`)
const videoRef = document.querySelector(`video`)

function getSubscriptionStatus() {
    return new Promise ((resolve, reject) => {
        resolve(``)
    })
}



function getVideo(subscriptionStatus){
    return new Promise ((resolve, reject)=> {
        if (subscriptionStatus === `vip`){
            resolve (`Show Video`)
        }
        else if (subscriptionStatus === `free`){
            resolve (`Show Trailer`)
        }
        else{
            reject (`No Video`)
        }
    })
    
}
//.THEN Method
// getSubscriptionStatus().then(response => console.log(response))

// ASYNC/ AWAIT method=============
async function main1(){
    const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e
    }
}
main1()


