function LoadingData(){
    return new Promise((resolve, reject)=>{
        console.log("Processing.....");
        setTimeout(()=>{
            console.log("1) Loading Data");
            resolve();
        },2000)
    })
}

function CollectingData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("2) Collecting Data");
            resolve();
        },3000)
    })
}

function ApprovingData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("3) Approving Data");
            reject()
        },4000)
    })
}

function Approved(){
    console.log("4) Approved");
    
}

async function EX(){
    await LoadingData();
    await CollectingData();
    await ApprovingData();
    await Approved();
}

EX().catch((err)=>{
    console.log(err);
})