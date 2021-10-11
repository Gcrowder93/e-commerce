export function renderDiscs(disc){
    const discCard = document.createElement('div');
    discCard.classList.add('disc-card');
    discCard.id = disc.id;
    const discHeader = document.createElement('h1');
    discHeader.textContent = disc.name;
    discCard.id = disc.id;
    const discType = document.createElement('h3');
    discType.textContent = disc.type;
    discCard.id = disc.id;
    const discPrice = document.createElement('h3');
    discPrice.textContent = disc.price;
    discCard.id = disc.id;
    const discStats = document.createElement('h3');
    discStats.textContent = disc.stats;
    discCard.id = disc.id;
    const discCatagory = document.createElement('h5');
    discCatagory.textContent = disc.catagory;
    discCard.id = disc.id;
    const img = document.createElement('img');
    img.src = disc.img;
    discCard.id = disc.id;
    const hr = document.createElement('hr');
   
  
    discCard.append(discHeader, img, discType, discStats, discPrice, hr);
    return discCard;
}
