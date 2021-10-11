export function renderDiscs(discs){
    const discCard = document.createElement('div');
    discCard.classList.add('disc-card');
  
    const discHeader = document.createElement('h2');
    discHeader.textContent = discs.name;
  
    const img = document.createElement('img');
    img.src = discs.img;
  
    discCard.append(discHeader, img);
    return discCard;
}
console.log(renderDiscs);
