export function renderDisc(disc){
    const discCard = document.createElement('div');
    discCard.classList.add('disc-card');

    const discHeader = document.createElement('h2');
    discHeader.textContent = disc.name;

    const addButton = document.createElement('button');
    addButton.textContent = 'Buy';
    addButton.id = disc.id;
    addButton.classList.add('add-button');

    const img = document.createElement('img');
    img.src = disc.img;

    discCard.append(discHeader, addButton, img);

    return discCard;
}