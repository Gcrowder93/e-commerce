export function renderDiscs(discs){
    const discCard = document.createElement('div');
    discCard.classList.add('disc-card');
  
    const discHeader = document.createElement('h2');
    discHeader.textContent = discs.name;

    const discType = document.createElement('h3');
    discType.textContent = discs.type;

    const discPrice = document.createElement('h3');
    discPrice.textContent = discs.price;

    const discStats = document.createElement('h4');
    discStats.textContent = discs.stats;

    const discCatagory = document.createElement('h5');
    discCatagory.textContent = discs.catagory;
  
    const img = document.createElement('img');
    img.src = discs.img;
  
    discCard.append(discHeader, discType, discStats, discPrice, img);
    return discCard;
}
