#projectTwoAssignment




  <h4> Description:
            <h6>
                <%= coffee.description %>
            </h6>
        </h4>
        <h5> Process:
            <h6>
                <%= coffee.process %>
            </h6>
        </h5>
        <h4> Origin:
               <small> <%= coffee.origin %></small>
        </h4>
    </div>





    'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('coffees',  [
      { "name": "Turkish Coffee",
      "description": "Turkish coffee starts distinguishing itself as soon as you grind your coffee. Turkish coffee is ground very finely, most finely of all coffee types. It has a particle size of the coffee particles of roughly less than 1 mm. As a result, there is a lot of available surface area of the coffee particles.The Turkish preparation method though relies on this finely ground coffee and works well with it.",
      "process": "Place your ibrik (or cezve) on a stove-top, on medium heat, for four to six minutes until foam rises to the top. Turkish coffee requires at least 1 cm of foam. Turkish coffee can be brewed for a longer period if desired.",
      "origin": "Yemen",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "name": "Ethiopian Coffee",
      "description": "The southern Gedeo zone of Ethiopia, known for its wet processed (washed) coffees, produces the spicy, fragrant Yirgacheffes with their delicate body, sweet flavor and floral aroma including shimmering notes of citrus.These coffee beans are consistently some of the highest rated in the world, and while often pricey, are much more affordable than most Konas or Jamaican Blue Mountain.",
      "process": "First wash green coffee beans before roasting—some would say burning—them over hot coals. The charcoal black beans are then coarsely ground by hand in a mortar and pestle. The coffee and water are then mixed together in the earthen black jar called a jebena, which is placed directly in the hot coals until steam pours from the jebena's spout.",
      "origin": "Ethiopia",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "name": "Kaffeost",
      "description": "A northern Scandinavian tradition, kaffeost is a drink/meal in which cubes of cheese are released into a cup of coffee.",
      "process": "A traditional cup of kaffeost begins with a cube of cheese placed at the bottom of a wooden mug carved out of a birch burl (a bulbous tree growth). After pouring the boiling coffee inside, drinkers can spoon the softened chunks out as they sip, or enjoy the little cheesy dregs left at the bottom of the wide-mouthed mug. ",
      "origin": "Finland",
      createdAt: new Date(),
      updatedAt: new Date()
  }
  ,{
      "name": "Yuanyang",
      "description": "The Yuanyang is a coffee-tea hybrid merges the two hot drink disciplines into one mega concoction to satiate your need for theanine and caffeine. Known as Kopi Cham in Malaysia, the drink was originally served at dai pai dongs (open-air food vendors) and tengs (cafes).The actual name of this coffee concoction refers to mandarin ducks, a symbol of conjugal love in Chinese culture.",
      "process": "Bring water to a boil. Add tea leaves or a tea bag and simmer for around three minutes. Stir in coffee or add one-shot of espresso. Add a little sugar if you like a little bit of sweetness in your coffee if you plan on using normal milk. Strain and serve with sweetened condensed milk (or normal milk if you prefer). You can drink a Yuanyang hot or cold served over ice.",
      "origin": "Malaysia",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "name": "Flat White",
      "description": "A flat white is a coffee drink consisting of espresso with microfoam (steamed milk with small, fine bubbles and a glossy or velvety consistency). It is comparable to a latte, but smaller in volume and with less microfoam, therefore having a higher proportion of coffee to milk, and milk that is more velvety in consistency – allowing the espresso to dominate the flavour, while being supported by the milk.",
      "process": "A flat white requires impeccably created microfoam with the tiniest bubbles you can create.  The froth should be so silky and smooth that it is actually shiny.  And when you pour that microfoam into the cup, be sure you don't miss it all and just put in the milk that might remain at the bottom of your pan/cup.  The microfoam is important!",
      "origin": "Australia",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "name": "Espresso Romano",
      "description": "The espresso romano is a simple yet intriguing beverage. In its purest form, it is an espresso served with a slice of lemon, even though its preparation may differ from café to café.",
      "process": "The espresso romano is made by combining an espresso shot with a lemon slice or lemon juice and a teaspoon of sugar. The slice can be squeezed or dropped into the coffee, and is sometimes candied.",
      "origin": "Italy",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "name": "Café Touba ",
      "description": "Touba coffee is a typical Senegalese coffee drink, which is prepared using a mix of Arabica coffee, with a strong and specific taste. The beans are left to infuse together with cloves and a pepper: Guinean pepper, called Djar, in the local language, Wolof.",
      "process": "First, you roast the coffee beans together with the pods of pepper and cloves. When they have turned a dark, even color, you leave them to cool. Once cool, the pods, coffee beans and cloves are ground in a mortar by hand or using a coffee grinder. In the meantime, boil the water. Using gauze, you create a filter with the ground up mix inside and, when the water comes to a boil, you pour it over the mixture. This procedure should be repeated a couple of times, so that the coffee flavor will be more intense.  At that point, you  add the sugar to the drink and serve hot.",
      "origin": "Sengal",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "name": "CÀ PHÊ ĐÁ",
      "description": "Vietnamese iced coffee, also known as cà phê đá or cafe da is a traditional beverage from the Land of the Blue Dragon. Cà phê đá is made with medium to coarse ground Robusta dark roast coffee from Vietnam. It is thicker and more intense than traditional Arabica coffee.",
      "process": "It is prepared with a small traditional metal Vietnamese drip filter called phin cà phê. With this drip filter method, hot coffee slowly drops into a cup after hot water is added.The resulting cup, albeit small, bursts with intense flavors. It is either consumed black (cà phê nau), or with a splash of sweetened condensed milk (cà phê sữa đá).",
      "origin": "Vietnam",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      "name": "Café de Olla",
      "description": "This Mexican spiced coffee, better known as Cafe de Olla, is made with Mexican ground coffee, cinnamon, and raw dark sugar that we call 'Piloncillo'. This is a traditional Mexican drink recipe that has been enjoyed by many generations!",
      "process": "Traditionally, this drink is made in a clay pot known as a olla de barro, which imparts a distinctive, earthy flavor. Add water, piloncillo, cinnamon sticks, cloves, and star anise to an olla de barro or medium pot. Place over med-high heat and bring to a boil, stirring occasionally so that the piloncillo fully dissolves. Remove the olla or pot from the heat and add the coffee. Give it a stir, cover, and let it steep for 6-8 minutes. Pour the coffee through a fine mesh strainer or cheesecloth and serve!",
      "origin": "Mexico",
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('coffees', null, {})
  }
};
