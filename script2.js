//second class
var states = [
    { id: 22, title: "Tunis", image: "images/tunis.jpg",link:"hhttps://www.google.com/maps/place/Tunis/@36.794992,10.0608761,12z/data=!3m1!4b1!4m6!3m5!1s0x12fd337f5e7ef543:0xd671924e714a0275!8m2!3d36.8064948!4d10.1815316!16zL20vMGZ0bjg?entry=ttu" },
    { id: 10, title: "Le kef", image: "images/lkef.jpg",link:"https://www.google.com/maps/place/El+Kef/@36.1724784,8.6798721,13.62z/data=!4m6!3m5!1s0x12fba448bbb60817:0xd20dcc094b5debbf!8m2!3d36.1679648!4d8.7095789!16zL20vMGIxcXJm?entry=ttu" },
    { id: 4, title: "Gabes", image: "images/gabes.jpg",link:"https://www.google.com/maps/place/Gabes/@33.8875317,10.0934741,14z/data=!4m6!3m5!1s0x12556fc5487bd237:0x4980e09bdb547a86!8m2!3d33.888077!4d10.0975221!16zL20vMDQwMzV2?entry=ttu" },
    { id: 19, title: "Sousse", image: "images/sousse.jpg",link:"hhttps://www.google.com/maps/place/Sousse/@35.8283971,10.5768546,13z/data=!3m1!4b1!4m6!3m5!1s0x130275759ac9d10d:0x698e3915682cef7d!8m2!3d35.8245029!4d10.634584!16zL20vMDN5djZy?entry=ttu" },
    { id: 20, title: "Tataouine", image: "images/tataouine.jpg",link:"https://www.google.com/maps/place/Tataouine/@32.9246483,10.4013052,13z/data=!3m1!4b1!4m6!3m5!1s0x1254b7596be92873:0xd94cf811d4ad762d!8m2!3d32.9210902!4d10.4508956!16zL20vMDVnMGxu?entry=ttu" },
    { id: 21, title: "Tozeur", image: "images/tozeur.jpg",link:"https://www.google.com/maps/place/Tozeur/@33.9187449,8.0786408,13z/data=!3m1!4b1!4m6!3m5!1s0x1257c028313d134d:0xc48c27f26a58203!8m2!3d33.918534!4d8.1229329!16zL20vMDM2d3My?entry=ttu" },
    { id: 1, title: "Beja", image: "images/beja.jpg",link:"https://www.google.com/maps/place/Beja/@36.7311673,9.1704901,14.32z/data=!4m6!3m5!1s0x12fb588073d15b35:0x67e6f1f9d0f178b2!8m2!3d36.7333193!4d9.1843676!16zL20vMDR6dDY3?entry=ttu" },
    { id: 9, title: "Klebia", image: "images/klebia.jpg",link:"https://www.google.com/maps/place/Kelibia/@36.8389332,11.0790402,13.5z/data=!4m6!3m5!1s0x131d338ce17b9879:0x351ce2ee2df67ff3!8m2!3d36.8461602!4d11.0994667!16zL20vMGIzbTQ2?entry=ttu" },
    { id: 3, title: "Bizert", image: "images/bizerte.jpg",link:"https://www.google.com/maps/place/Bizerte/@37.2824041,9.8400354,13.6z/data=!4m6!3m5!1s0x12e31e4db2105f13:0xf44361a00609c69e!8m2!3d37.2767579!4d9.8641609!16zL20vMDJsNHpm?entry=ttu" },
    { id: 0, title: "Ariana", image: "images/ariana.png",link:"https://www.google.com/maps/place/Ariana/@36.8683507,10.1434105,13.28z/data=!4m6!3m5!1s0x12e2cb4e31471bf3:0x65bc5efbce842198!8m2!3d36.8665367!4d10.1647233!16zL20vMGI0Znh0?entry=ttu" },
    { id: 2, title: "Ben Arous", image: "images/ben.jpg",link:"https://www.google.com/maps/place/Ben+Arous/@36.7465164,10.2140473,14z/data=!3m1!4b1!4m6!3m5!1s0x12fd496f233f4109:0x3bfd822b0ccc697b!8m2!3d36.7435003!4d10.2319757!16zL20vMGN5OWxw?entry=ttu" },
    { id: 5, title: "Gafsa", image: "images/gafsa.jpg",link:"https://www.google.com/maps/place/Gafsa/@34.4325079,8.7474647,13.58z/data=!4m6!3m5!1s0x12f896fa5476901f:0x873608732b8975d5!8m2!3d34.4311398!4d8.7756556!16zL20vMDZoMW04?entry=ttu" },
    { id: 6, title: "Jendouba", image: "images/jendouba.jpg",link:"https://www.google.com/maps/place/Jendouba/@36.5047335,8.7631671,14.4z/data=!4m6!3m5!1s0x12fb124ea3099bff:0x6bef4f37f93342da!8m2!3d36.5072263!4d8.7756556!16zL20vMDhfcTY4?entry=ttu" },
    {id: 7, title: "kairaoun", image: "images/kairaouin.jpg",link:"https://www.google.com/maps/place/Kairouan/@35.674696,10.0789107,13.2z/data=!4m6!3m5!1s0x12fdc54531303f79:0xbba4cacca78e555e!8m2!3d35.6711663!4d10.1005469!16zL20vMDI3eTQw?entry=ttu" },
    { id: 8, title: "kasserine", image: "images/kasserine.jpg",link:"https://www.google.com/maps/place/Kasserine/@35.1719138,8.8056934,13.38z/data=!4m6!3m5!1s0x12f93e03277f3b3d:0x9165782c2e6df471!8m2!3d35.1722716!4d8.8307626!16zL20vMDkxeXgx?entry=ttu" },
    { id: 11, title: "Mahdia", image: "images/mahdia.jpg",link:"https://www.google.com/maps/place/Mahdia/@35.5047655,11.0314574,14z/data=!3m1!4b1!4m6!3m5!1s0x130223f5186c6cf9:0x675f7b734dffa5bb!8m2!3d35.5024461!4d11.045721!16zL20vMDQ0cnBo?entry=ttu" },
    { id: 12, title: "Manouba", image: "images/manouba.jpg",link:"https://www.google.com/maps/place/Manouba/@36.8099171,10.0570605,14z/data=!3m1!4b1!4m6!3m5!1s0x12fd326a6997b651:0xae1949b938bf5487!8m2!3d36.8093284!4d10.0863269!16zL20vMGI0ZmI3?entry=ttu" },
    { id: 13, title: "Mednine", image: "images/mednine.jpg",link:"https://www.google.com/maps/place/Medinine/@33.3470406,10.4672474,13.53z/data=!4m6!3m5!1s0x1254d62866735147:0xf085df215e783c40!8m2!3d33.3399221!4d10.4958678!16zL20vMDZfN3l5?entry=ttu" },
    { id: 14, title: "Monastir", image: "images/monastir.jpg",link:"https://www.google.com/maps/place/Monastir/@35.7543345,10.7692398,13z/data=!3m1!4b1!4m6!3m5!1s0x130212b61d744f59:0xf284743e1d3e40ef!8m2!3d35.7642515!4d10.8112885!16zL20vMDJfcHds?entry=ttu" },
    { id: 15, title: "Nabeul", image: "images/nabeul.jpg",link:"https://www.google.com/maps/place/Nabeul%E2%80%8E/@36.4524572,10.6741419,13z/data=!3m1!4b1!4m6!3m5!1s0x13029895efbdd3d3:0x2e5d60d1569ce4fe!8m2!3d36.4512893!4d10.7356634!16zL20vMGIxcWpo?entry=ttu" },
    { id: 16, title: "Sfax", image: "images/sfax.jpg",link:"https://www.google.com/maps/place/Sfax/@34.7615078,10.6506969,12z/data=!3m1!4b1!4m6!3m5!1s0x13002cda1486c695:0x22dfe0a62c50ce6f!8m2!3d34.739822!4d10.7600196!16zL20vMDZ0MWt4?entry=ttu" },
    { id: 17, title: "Sidi Bouzid", image: "images/sidi.jpg",link:"https://www.google.com/maps/place/Sidi+Bouzid/@35.0364229,9.4564381,14z/data=!3m1!4b1!4m6!3m5!1s0x12fec340b61767fd:0xcc600169ded4578c!8m2!3d35.0354386!4d9.4839392!16s%2Fm%2F02vkdnz?entry=ttu" },
    { id: 18, title: "Siliana", image: "images/siliana.jpg",link:"https://www.google.com/maps/place/Siliana/@36.0877746,9.3550141,14.31z/data=!4m6!3m5!1s0x12fc654a8737e17f:0xdd533dfbcc5e23ef!8m2!3d36.0887208!4d9.3645335!16zL20vMGI0MXd4?entry=ttu" },
    { id: 23, title: "Zaghouen", image: "images/zaghouen.jpg",link:"https://www.google.com/maps/place/Zaghouan/@36.408909,10.1156525,14z/data=!3m1!4b1!4m6!3m5!1s0x12fd110c5ea382cd:0x16f187f18150bf27!8m2!3d36.4091188!4d10.1423172!16zL20vMDZuaHp4?entry=ttu" },
  ];

var container=document.getElementById('container')


function showCities(arr){

    var container=document.getElementById('container')

for(var i=0;i<arr.length;i++){

    let  item=arr[i]
    var div=document.createElement("div")
    div.classList.add("item")
    var imageInstance=new Image()
    imageInstance.src=item.image
    div.appendChild(imageInstance)

    var button=document.createElement('button')
    button.classList.add('button')
    button.innerText=item.title
    button.addEventListener("click",function(){
            location.href=item.link
    })
    div.appendChild(button)

    container.appendChild(div)
 
}

}

showCities(states)

//search
var searchBtn=document.getElementById('searchBtnID')
var searchInput=document.getElementById('SearchInputID')

  function search(){
    var x=searchInput.value.toUpperCase()
    var arr=[]
    for(var i=0;i<states.length;i++){
        if(states[i].title.toUpperCase().includes(x)){
            arr.push(states[i])
        }
    }
    var contenair=document.getElementById('container')
    contenair.innerHTML=""
    showCities(arr)
  }
 
  searchBtn.addEventListener('click',search)




