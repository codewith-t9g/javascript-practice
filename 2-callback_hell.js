function LoadingData(callback){
    setTimeout(()=>{
        console.log("1) Loading Data...");
        callback();
    },4000)
}

function CollectingData(callback){
    setTimeout(()=>{
        console.log("2) Collecting Data...");
        callback();
    },5000)
   
}

function ApprovingData(callback){
    setTimeout(()=>{
        console.log("3) Approving Data...");
        callback();

    },6000)
}

function Approved(){
    console.log("4) Approved!");
}



LoadingData(function(){
    CollectingData(function(){
        ApprovingData(function(){
            Approved();
        });
        
    });
   
});
