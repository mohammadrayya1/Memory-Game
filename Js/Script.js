document.querySelector('.controls-button').onclick=function()
{

let yourname=prompt("Whats your name");

if(yourname == null || yourname == "")
{

document.querySelector('.info-container .name span ').innerHTML="Unknow";

}
else
{

    document.querySelector('.info-container .name span').innerHTML=yourname; 
}
document.querySelector('.controls-button').remove();


}

let duration=1000;

let blockscontainar=document.querySelector('.memory-game-block');
let blocklist=Array.from(blockscontainar.children);

let orderrabge=[Array(blocklist.length).keys()];

console.log(orderrabge);
