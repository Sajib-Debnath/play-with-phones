const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchTxt = searchField.value;


    const url = `https://openapi.programming-hero.com/api/phones?search=${searchTxt}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

const displaySearchResult = (phones) => {
    phoneCards = document.getElementById('phone-cards');

    phones.forEach(phone => {
        // console.log(phone);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top w-25" alt="...">
                <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                <h6>Slug:${phone.slug}</h6>
                </div>

                <button onclick="phoneDetails('${phone.slug}')">phone details</button>
            </div>
        `
        phoneCards.appendChild(div)
    });
}

const phoneDetails = (slugName) => {
    url = `https://openapi.programming-hero.com/api/phone/${slugName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetails(data.data))
}

const showPhoneDetails = (phoneDetails) => {
    console.log(phoneDetails);

    const phoneDetailsCard = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${phoneDetails.image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${phoneDetails.name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    `
    phoneDetailsCard.appendChild(div);

}

