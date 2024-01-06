document.addEventListener('DOMContentLoaded', function () {

    const cars = [
        {
            title: '1. ROLLS-ROYCE BOAT TAIL',
            description: 'The Rolls-Royce Boat Tail is by far the most expensive new car of all time. This 18.7-foot-long convertible with its vintage and modern design is powered by a twin-turbo V12 (6.75 liters for 563 horsepower) and 8-speed automatic transmission. This “rolling yacht” was produced only three times, and reserved for billionaires given its astronomical price.',
            price: '$26.2 MILLION',
            link: 'https://youtu.be/qcEmHLKX2_w',
            image: 'rr.jpg'
        },
        {
            title: '2. BUGATTI LA VOITURE NOIRE',
            description: 'This road-legal one-off takes the French brand to the top of the podium. Inspired by the Bugatti 57 SC Atlantic, everything about this hypercar is exceptional: An 8-liter, 16-cylinder engine with 1,500 horsepower, assembled by hand. It is the work of a goldsmith, so it is not surprising that this unique example was acquired by a Swiss buyer.',
            price: '$18.1 MILLION',
            link: 'https://youtu.be/QIlOZFmHfVs',
            image: 'bugatti.webp'
        },
        {
            title: '3. PAGANI ZONDA HP BARCHETTA',
            description: 'Horacio Pagani – from the eponymous firm – had this concept car built for him and two other lucky unknown owners. If this roadster made a lot of noise when it was presented, it remains an enigma: Its technical information is, at least at the moment, a mystery.',
            price: '$17.9 MILLION',
            link: 'https://youtu.be/7_fsh3jJyxw',
            image: 'pagani.jpg'
        },
        {
            title: '4. ROLLS-ROYCE SWEPTAIL',
            description: 'Rolls-Royce, the luxury car brand par excellence, is on the list again with this one-off, built on demand: the Sweptail. This is another concept car that calls itself the “automotive equivalent of haute couture”. And besides looking good, it has power under the hood to the rhythm of a V12 engine with 453 horsepower.',
            price: '$13.2 MILLION',
            link: 'https://youtu.be/3OoCQCgpBnI',
            image: 'sweptail.jpg'
        },
        {
            title: '5. BUGATTI CENTODIECI',
            description: 'We’re back in France and finally under the $10 million mark with the Bugatti Centodieci. Inspired by a tribute to the Bugatti EB110 and built on a Bugatti Chiron base, the “110” has a lot going for it. You get 1,600 horsepower and an 8-liter W16 with a top speed of 236 miles per hour. Boom!',
            price: '$9.1 MILLION',
            link: 'https://youtu.be/QsAF0rTA7ec',
            image: 'Bugati.jpg'
        },
        {
            title: '6. LAMBORGHINI VENENO',
            description: 'Let’s go back to the future of the automobile with the Lamborghini Veneno, a roadster that defies the law of gravity with its cosmic curves inspired by aeronautics. This hypercar, produced only nine times, cannot fly but can reach 221 miles per hour with its 6.5-liter V12. In short, it’s a car that puts stars in your eyes.',
            price: '$8.3 MILLION',
            link: 'https://youtu.be/O2dgfvXVZ48',
            image: 'lamborghini_veneno.jpg'
        },
        {
            title: '7. MAYBACH EXELERO',
            description: 'Here’s one more unique model, the Maybach Exelero. This coupe was ordered by a tire brand, Fulda, to test and promote a new series of tires. The exercise was a success: its performance on the track was stellar because of its 5.9-liter engine and 700 horsepower. It was definitely a good deal from Fulda.',
            price: '$8 MILLION',
            link: 'https://youtu.be/D3GK7R00-Ik',
            image: 'benz.jpg'
        },
        {
            title: '8. BUGATTI DIVO',
            description: 'What do the 40 owners of the Bugatti Divo have in common? They all own a Bugatti Chiron as well. While the two luxury cars are similar (the same 8-liter W16 engine with 1,500 hp and a similar interior), the Divo stands out for its exceptional design.',
            price: ' $5.7 MILLION',
            link: 'https://youtu.be/hqDT5_4z_YI',
            image: 'DIVO1.webp'
        },
        {
            title: '9. KOENIGSEGG CCXR TREVITA',
            description: 'The limited-edition CCXR was only produced twice, and the Koenigsegg CCXR Trevita is less known than its “sisters” but is no less powerful and fast: It goes from 0 to 124 mph in 8.75 seconds. This Swedish car weighs 1.4 tons, a featherweight compared to Ferrari, Aston Martin or Lamborghini.',
            price: '$4.8 MILLION',
            link: 'https://youtu.be/FEmG0gSUBhQ',
            image: 'koenigsegg.webp'
        },
        {
            title: '10. ASPARK OWL',
            description: 'This Japanese supercar is not technically the 10th most expensive car in the world, but it is the most expensive electric car in the world. It is also the fastest electric car! Made only 50 times, it has four super-powerful electric motors that make it go from 0 to 60 mph in 1.69 seconds, a record. Another exceptional fact is that it is one of the lowest electric cars with a height of 39 inches. The Aspark Owl is, therefore, No. 1 for electric cars on many points.',
            price: '$3.3 MILLION',
            link: 'https://youtu.be/s-8jUlWn9S0',
            image: 'owl01.webp'
        },

    ];

    const bikes = [
        {
            title: '1. Neiman Marcus Limited Edition Fighter',
            description: 'Whoever saw it coming that Neiman Marcus Limited Edition Fighter would later claim pole position at any top ten list of big bikes is probably a seer of the highest order, especially when one considers how it began the market at a “humble” $110,000. And mind you, Neiman Marcus is a name you would rightly connect with department store rather than a superbike.',
            price: '$11 MILLION',
            link: 'https://youtu.be/ir-LFplb_Mc',
            image: 'bike1.avif'
        },
        {
            title: '2. 1949 E90 AJS Porcupine ',
            description: 'A bike manufacturer with a rich history and winning racetrack heritage marred by several financial turbulence early on, AJS could only manage to produce 4 Porcupine units in 1949. As it turned out, one of these under the very able hands of Les Graham won the 1949 World Championship.',
            price: '$7 million',
            link: 'https://youtu.be/NIIEEQV5hU0',
            image: 'bike2.jpg'
        },
        {
            title: '3. Ecosse ES1 Spirit',
            description: 'When a bike manufacturer requires even a professional driver to first take a two-week training before trying to ride one of its models, you just know something is up with this bike.And why not, indeed. This is not two-wheel machine as traditionally defined: first, there is no chassis framework to speak of. Swingarm and rear suspension attach to the gearbox, and front suspension to the engine. ',
            price: '$3.6 million',
            link: 'https://youtu.be/NIIEEQV5hU0',
            image: 'bike3.jpg'
        },
        {
            title: '4. Hildebrand & Wolfmuller',
            description: 'History is expensive, and at $3.5 million your purchase would send you back 124 years ago to 1894 when this first production motorcycle appeared on the scene.Heinrich and Wilhelm Hidebrand were steam-engine engineers before they teamed up with Alois Wolfmüller to produce their internal combustion Motorrad in Munich in 1894. ',
            price: '$3.5 million',
            link: 'https://youtu.be/1X68mpGYKuE',
            image: 'bike4.jpg'
        },
        {
            title: '5. BMS Nehmesis ',
            description: 'The first thing you would notice about the BMS Nehmesis is the yellow glitter and absence of side stand, making it look like it’s lying flat on its underbelly like a marooned whale.“Would it even run?” you ask yourself.In fact it would: fully functional, it incorporates an air-ride system that, along with the single-sided swingarm rear suspension, can lift the motorcycle 10 inches or lower it right onto the ground. This renders a side stand unnecessary, as Nehmesis softly lands on its frame rails when it’s time to park.',
            price: '$3 million',
            link: 'https://youtu.be/kDNtHQ1Ob68',
            image: 'bike5.jpg'
        },
        {
            title: '6. Harley Davidson Cosmic Starship',
            description: 'When a bike manufacturer requires even a professional driver to first take a two-week training before trying to ride one of its models, you just know something is up with this bike.And why not, indeed. This is not two-wheel machine as traditionally defined: first, there is no chassis framework to speak of. Swingarm and rear suspension attach to the gearbox, and front suspension to the engine. ',
            price: '$3.6 million',
            link: 'https://www.youtube.com/watch?v=VSwWpgqSqnU',
            image: 'bike6.webp'
        },
        {
            title: '7. Dodge Tomahawk V10 Superbike',
            description: 'If you think the Dodge Tomahawk V10 Superbike suspiciously looks like a 4-wheel Dodge squeezed on both sides, you won’t be alone. This Tomahawk V10 Superbike is a strange beast indeed, and not just because it uses a V10 four-stroke Dodge Viper engine that could easily power up any chassis with more than two wheels attached to it to give you the feeling of being dragged by a fleet of 500 supercharged ponies looking forward to storm the Bastille. Now talk about the soul of two-wheel steeds!',
            price: '$550,000',
            link: 'https://youtu.be/uuDDi9o5qPk',
            image: 'bike7.webp'
        },
        {
            title: '8. Ecosse FE Ti XX Titanium Series ',
            description: 'When a bike manufacturer requires even a professional driver to first take a two-week training before trying to ride one of its models, you just know something is up with this bike.And why not, indeed. This is not two-wheel machine as traditionally defined: first, there is no chassis framework to speak of. Swingarm and rear suspension attach to the gearbox, and front suspension to the engine.',
            price: '$300,000',
            link: 'https://youtu.be/B2pWRlNN1ts',
            image: 'bike8.jpg'
        },
        {
            title: '9. Ducati Desmosedici D16RR NCR M16',
            description: 'NCR starts with a $72,500 Desmosedici D16RR and reworks it to make it lighter and more powerful. The result: the $232,500 road missile NCR Millona 16.Where does the money go? Carbon fiber everywhere on the M16, check, including load-bearing parts such as the frame, swingarm and wheels. The fuel tank, fairing, tail and fenders are carbon too. Mechanical parts are either titanium, right down to the bolts, or avionic-grade aluminum. ',
            price: '$232,500',
            link: 'https://youtu.be/LkzycrzJxTM',
            image: 'bike9.jpg'
        },
        {
            title: '10. Ducati Testa Stretta NCR Macchia Nera Concept ',
            description: 'Ducati Macchia Nera may not compete with the other big bikes in this list in terms of pure speed—notwithstanding that Macchia Nera or Block Spot humorously suggests you could create a charred pavement behind while driving it—but titanium and carbon fiber materials to render it impressively lightweight at 297 pounds, artistic contribution by visionary designer Aldo Drudi, and only a number of them made available convinced most aficionados the price is justified to ensure the model makes it to their collection.When a bike manufacturer requires even a professional driver to first take a two-week training before trying to ride one of its models, you just know something is up with this bike.And why not, indeed.',
            price: '$225,000',
            link: 'https://youtu.be/mAFqG-Tn3nM',
            image: 'bike10.jpg'
        },

    ];
    const carList = document.getElementById('carList');

    const bikesButton = document.createElement('div');
    bikesButton.classList.add('tags', 'bikes-tag');
    bikesButton.textContent = 'Bikes';
    document.querySelector('header').appendChild(bikesButton);


    const backButton = document.createElement('div');
    backButton.classList.add('tags', 'back-tag');
    backButton.textContent = 'Back';
    backButton.style.display = 'none';
    document.querySelector('header').appendChild(backButton);

    function displayList(vehicleList) {
        carList.innerHTML = '';

        vehicleList.forEach(vehicle => {
            const vehicleCard = createCard(vehicle);
            carList.appendChild(vehicleCard);
        });
    }

    function createCard(vehicle) {
        const vehicleCard = document.createElement('div');
        vehicleCard.classList.add('car-card');

        const vehicleTitle = document.createElement('div');
        vehicleTitle.classList.add('car-title');
        vehicleTitle.textContent = vehicle.title;

        const vehiclePrice = document.createElement('div');
        vehiclePrice.classList.add('car-price');
        vehiclePrice.textContent = `Price: ${vehicle.price}`;

        const vehicleDescription = document.createElement('div');
        vehicleDescription.classList.add('car-description');
        vehicleDescription.textContent = vehicle.description;

        const vehicleImageLink = document.createElement('a');
        vehicleImageLink.href = vehicle.link;
        vehicleImageLink.target = '_blank';

        const vehicleImage = document.createElement('img');
        vehicleImage.classList.add('car-image');
        vehicleImage.src = vehicle.image;
        vehicleImage.alt = vehicle.title;

        vehicleImageLink.appendChild(vehicleImage);
        vehicleCard.appendChild(vehicleTitle);
        vehicleCard.appendChild(vehiclePrice);
        vehicleCard.appendChild(vehicleDescription);
        vehicleCard.appendChild(vehicleImageLink);

        return vehicleCard;
    }

    bikesButton.addEventListener('click', function () {
        displayList(bikes);
        bikesButton.style.display = 'none';
        backButton.style.display = 'block';
    });

    backButton.addEventListener('click', function () {
        displayList(cars);
        backButton.style.display = 'none';
        bikesButton.style.display = 'block';
    });

    displayList(cars);
    const createdByText = document.createElement('div');
    createdByText.classList.add('created-by');
    createdByText.textContent = '@Created by Manoj';

    document.body.appendChild(createdByText);
});