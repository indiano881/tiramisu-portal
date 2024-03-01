function Tiramisu(
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
    ingredient6,
    ingredient7,
    ingredient8) {
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
    this.ingredient7=ingredient7;
    this.ingredient8=ingredient8;
}

const classic= new Tiramisu(
    "Classico italiano",
    "20 minutes",
    "778",
    "350 sek/kg",
    "Our beautyfull italian classic tiramisu! Bellissimo!",
    "images/classico.png",
    "mascarpone",
    "savoiardi biscuits",
    "eggs",
    "coffe",
    "chocolate"
)

const glutenFree= new Tiramisu(
    "Gluten free",
    "2h",
    "650",
    "550 sek/kg",
    "A Gourmet option for those who are gluten intollerant",
    "images/glutenfree.png",
    "mascarpone",
    "Oat chocolate biscuits",
    "eggs",
    "coffe",
    "chocolate",
    "marsala wine"
)

const pistache= new Tiramisu(
    "Pistache Tiramisu",
    "2h",
    "650",
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
    "Saffran and orange",
    "1h",
    "650",
    "450 sek/kg",
    "Fresh and juicy variation! Fits nicely with an aperol spritz on the side!",
    "images/saffran.png",
    "mascarpone",
    "savoiardi biscuits",
    "eggs",
    "milk",
    "saffran",
    "Oranges"
)

const champagne= new Tiramisu(
    "Saffran and orange",
    "1h",
    "650",
    "1000 sek/kg",
    "Salut! Cin cin! Skåll!",
    "images/champagne.png",
    "mascarpone",
    "savoiardi biscuits",
    "eggs",
    "heavy cream",
    "champagne",
    "Vanilja"
)

const vegan= new Tiramisu(
    "Saffran and orange",
    "10 min",
    "400",
    "1000 sek/kg",
    "A Tiramisu for the people! No diaries, no alchool, no gluten but extra love!",
    "images/champagne.png",
    "vegan biscuits biscuits",
    "tofu cream",
    "cocos cream",
    "caffe",
    "cacao powder"
)

const day= new Date().getDay();

export { day };
/*
Tiramisù è la quinta parola della cucina italiana più conosciuta all’estero, la prima per i dolci. Etimologia della parola Tiramisù: sollevami, rinforza il mio corpo. Deriva del dialetto trevigiano “Tireme su”, italianizzato in Tiramisù negli ultimi decenni del secolo scorso.
La memoria storica della “Gioiosa Marca” ricorda che il Tiramisù nasce a Treviso nella seconda metà del'Ottocento. Le prime testimonianze di questo dolce ci conducono nella tradizione contadina trevigiana: lo Sbatudin. Questo è il seme dal quale è nato e poi evoluto il Tiramisù. Tuorlo d’uovo sbattuto con lo zucchero fino a divenire una crema spumosa. Già nell’ottocento nella provincia di Treviso si preparava questa crema primordiale, base del Tiramisù. Ogni famiglia personalizzava la crema con aggiunta di altri ingredienti seguendo i gusti delle persone e del territorio: caffè, vino bianco, liquore, biscotti, burro, ricotta, panna, cacao

Piemonte i Savoiardi (biscotti tipici dei Savoia) e iniziato a diffondere questo ingrediente nel territorio trevigiano, ecco come si spiega la diffusione di questo ingrediente nell’ ottocento
Un’ altro ingrediente importante del Tiramisù è il mascarpone o mascherpone (probabilmente dal lombardo “mascherpa” che vuol dire ricotta, ma non è ricotta) zona di provenienza Lodi , Abbiategrasso, Como e Lecco. Il Mascarpone è una crema di latte acidificata ottenuta da panna o crema di latte.
*/