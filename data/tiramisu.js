function Tiramisu(
    index,
    name, 
    time, 
    calories, 
    price, 
    description, 
    image, 
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6) {
    this.index=index;
    this.name=name;
    this.time=time;
    this.calories=calories;
    this.price=price;
    this.description=description;
    this.image=image;
    this.ingredient1=ingredient1;
    this.ingredient2=ingredient2;
    this.ingredient3=ingredient3;
    this.ingredient4=ingredient4;
    this.ingredient5=ingredient5;
    this.ingredient6=ingredient6;
    
}

const classic= new Tiramisu(
    "0",
    "Classico italiano",
    "20 minutes",
    "778 Kcal",
    "350 sek/kg",
    "Our beautyfull italian classic tiramisu! Bellissimo!",
    "images/classico.jpg",
    "mascarpone",
    "savoiardi biscuits",
    "eggs",
    "coffe",
    "chocolate"
)

const glutenFree= new Tiramisu(
    "1",
    "Gluten free",
    "2h",
    "650 Kcal",
    "550 sek/kg",
    "A Gourmet option for those who are gluten intollerant",
    "images/glutenfree.jpg",
    "mascarpone",
    "oat chocolate biscuits",
    "eggs",
    "coffe",
    "chocolate",
    "marsala wine"
)

const pistache= new Tiramisu(
    "2",
    "Pistache Tiramisu",
    "2h",
    "650 Kcal",
    "550 sek/kg",
    "Our favourite variation! Tiramisu al pistacchio!",
    "images/pistache.png",
    "mascarpone",
    "savoiardi biscuits",
    "eggs",
    "milk",
    "pistache cream",
    "Bronte ´s pistache"
)

const saffran= new Tiramisu(
    "3",
    "Saffran and orange",
    "1h",
    "650 Kcal",
    "450 sek/kg",
    "Fresh and juicy variation! Fits nicely with an aperol spritz on the side!",
    "images/saffran.jpg",
    "mascarpone",
    "savoiardi biscuits",
    "eggs",
    "milk",
    "saffran",
    "oranges"
)

const champagne= new Tiramisu(
    "4",
    "Champagne",
    "1h",
    "650 Kcal",
    "1000 sek/kg",
    "Salute! Cin cin! Skåll!",
    "images/champagne.jpg",
    "mascarpone",
    "savoiardi biscuits",
    "eggs",
    "heavy cream",
    "champagne",
    "vanilja"
)

const vegan= new Tiramisu(
    "5",
    "For the People",
    "10 min",
    "400 Kcal",
    "1000 sek/kg",
    "A Tiramisu for the people! No diaries, no alchool, no gluten but extra love!",
    "images/vegan.png",
    "vegan biscuits biscuits",
    "tofu cream",
    "cocos cream",
    "caffe",
    "cacao powder"
)
const tiramisuArray = [classic, glutenFree, pistache, champagne, saffran, vegan];
export {tiramisuArray};

const day= new Date().getDay();


export { day };
