export function renderDiscs(discs){
    const discCard = document.createElement('div');
    discCard.classList.add('disc-card');
  
    const discHeader = document.createElement('h2');
    discHeader.textContent = disc.name;
  
    const img = document.createElement('img');
    img.src = disc.img;
  
    discCard.append(discHeader, img);
    return discCard;
}