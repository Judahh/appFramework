importJS('app/app');

function onLoad(){
    console.log("A");
    let app=new App();
    document.body.innerHTML=app.render();
}