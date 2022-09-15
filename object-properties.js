var iPhone = {
    color: 'Gray',
    display: '6inc',
    Storage: '6/128',
    price: '1000$'
}

// console.log(iPhone);

// console.log(iPhone.price);

//Change or Update property

iPhone.color = 'Black';
iPhone['Storage'] = '8/128';

var updatePrice = 'price';
iPhone[updatePrice] = '1500$';

console.log(iPhone);



