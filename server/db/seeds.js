use endangered;
db.dropDatabase();

db.continents.insertMany([

  {
    name:"Africa",
    animals:[
      {
        name: "Waldrapp Ibis",
        continent: "Africa",
        fun_fact: "Thoth, the ancient Egyptian god of writing, magic and wisdom was drawn with the head of an Ibis and the body of a man.",
        image: "http://s3.amazonaws.com/mongabay-images/13/1202.baldibis.IMG_3381.600.jpg",
        conservation_status: "Endangered",
        number_remaining: 500,
        locations: ["Morocco", "Syria"],
        quiz_question: "What does the Waldrapp Ibis like to eat?",
        correct_answer: "Lizards and beetles",
        answers: ["Lizards and beetles", "Fruit", "Small mice and rats", "Fish"],
        answer_fact: "The Waldrapp Ibis lives on cliff ledges and hunts for food in fields. Pesticides sprayed by on fields by farmers to kill insects can also poison the Ibis.",
        further_details: "https://www.edinburghzoo.org.uk/animals-and-attractions/animals/waldrapp-ibis/",
        threats: ["farming"]
      },
      {
        name: "Okapi",
        continent: "Africa",
        fun_fact: "Okapi are related to giraffes. Their long black tongues are about 14 inches long, and they can use them to lick their own ears and eyelids.",
        image: "http://animalia.bio/uploads/animals/photos/full/1.25x1/okapi.jpg",
        conservation_status: "Endangered",
        number_remaining: 4500,
        locations: ["Democratic Republic of the Congo"],
        quiz_question: "Why does the Okapi have stripes?",
        correct_answer: "For camouflage",
        answers: ["For camouflage", "To blend in with zebras", "To warn predators it's dangerous", "To look pretty"],
        answer_fact: "Hunting and building in their territory affects the okapi population. About 100 okapi live in zoos accross the world.",
        further_details: "https://www.discoverwildlife.com/animal-facts/mammals/facts-about-okapi/",
        threats: ["deforestation", "poaching", "building"]
      },
      {
        name: "Mountain Gorilla",
        continent: "Africa",
        fun_fact: "Gorillas hate getting wet!",
        image: "https://ichef.bbci.co.uk/news/320/cpsprodpb/DF62/production/_101868175_hi018106787.jpg",
        conservation_status: "Endangered",
        number_remaining: 1000,
        locations: ["Uganda", "Rwanda"],
        quiz_question: "What kind of habitat do Mountain Gorillas live in?",
        correct_answer: "Cloud Forest",
        answers: ["Cloud Forest","Desert","Rainforest","Grassland"],
        answer_fact: "The forests the Mountain Gorillas live in are being cut down so that humans can build on the land. To protect the gorillas we need to make sure thay have enough suitable places to live",
        further_details: "https://www.wwf.org.uk/learn/wildlife/mountain-gorillas",
        threats: ["deforestation"]
      },
      {
        name: "African Penguin",
        continent: "Africa",
        fun_fact: "Afircan Penguins can hold their breath for up to 2 and a half minutes when diving",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/63/African_penguin_side_profile.jpg",
        conservation_status: "Endangered",
        number_remaining: 21000,
        locations: ["South Africa","Namibia"],
        quiz_question: "African penguins are clumsy on land but excellent at swinning. How fast do you think they can swim?",
        correct_answer: "20 km per hour",
        answers: ["20 km per hour","5 km per hour","10 km per hour","30 km per hour"],
        answer_fact: "The African Penguin population is declining rapidly, they suffer from pollution of their habitat by petrochemicals from spills, shipwrecks and cleaning of tankers while at sea",
        further_details: "https://www.britannica.com/animal/African-penguin",
        threats: ["fishing", "building"]
      },
      {
        name: "African Wild Dog",
        continent: "Africa",
        fun_fact: "These long-legged canines have only four toes per foot, unlike other dogs, which have five toes on their forefeet.",
        image: "https://images.immediate.co.uk/production/volatile/sites/23/2019/11/P6071681-de6c1f1.jpg?webp=true&quality=45&resize=1240%2C826",
        conservation_status: "Endangered",
        number_remaining: 6000,
        locations: ["Botswana", "Namibia", "Zimbabwe"],
        quiz_question: "What is another name for the African Wild Dog?",
        correct_answer: "Painted Wolf",
        answers: ["Painted Wolf","Stripey Wolf","Fierce Wolf","Short Haired Wolf"],
        answer_fact: "The biggest threat to wild dogs is destruction of their habitat as human populations expand, wild dogs are losing the spaces in which they were once able to roam freely. However organisations are working to create protected areas for these species so they have somewhere to live",
        further_details: "https://www.awf.org/wildlife-conservation/african-wild-dog",
        threats: ["disease", "farming", "climate change"]
      },
    ]
  },
  {
    name:"Europe",
    animals:[
      {
        name: "Iberian Lynx",
        continent: "Europe",
        fun_fact: "The word lynx comes from the greek word for bright, because of their shiny eyes.",
        image: "https://pictures-of-cats.org/wp-content/uploads/2019/05/Iberian-lynx-e1557914279644.jpg",
        conservation_status: "Endangered",
        number_remaining: 400,
        locations: ["Spain", "Portugal"],
        quiz_question: "About 90% of an Iberian Lynx's diet is made up of what animal?",
        correct_answer: "Rabbits",
        answers: ["Rabbits", "Mice", "Birds", "Fish"],
        answer_fact: "In the last 20 years the Iberian Lynx population has dropped by 80%, because disease killed a lot of their food source. Conservation efforts over the last 10 years have started to help lynx population numbers, going from 100 lynxes in 2005 to about 400 in 2019.",
        further_details: "https://www.worldwildlife.org/stories/bringing-back-the-iberian-lynx",
        threats: ["disease"]
      },
      {
        name: "Sandy Mole Rat",
        continent: "Europe",
        fun_fact: "Sandy Mole Rats are completely blind.",
        image: "https://i.imgur.com/uqBJuUq.jpg",
        conservation_status: "Endangered",
        number_remaining: 20000,
        locations: ["Ukraine"],
        quiz_question: "What senses does the mole rat use to find its way around?",
        correct_answer: "Hearing and touch",
        answers: ["Hearing and touch", "Smell and hearing", "Touch and smell", "Sight and touch"],
        answer_fact: "The Sandy Mole Rat's habitat is being turned into plantations.",
        further_details: "https://animaldiversity.org/accounts/Spalacinae/",
        threats: ["farming"]
      },
      {
        name: "Marsican Brown Bear",
        continent: "Europe",
        fun_fact: "Marsican brown bears typically give birth to twins.",
        image: "http://www.bearconservation.org.uk/wp-content/uploads/2017/08/1024x768-Marsican_Brown_Bear_jpg1.jpg",
        conservation_status: "Critically Endangered",
        number_remaining: 50,
        locations: ["Italy"],
        quiz_question: "Why has the Marsican brown bear evolved a really powerful lower jaw?",
        correct_answer: "To crunch nuts",
        answers: ["To crunch nuts", "Do defend against other bears", "To attack prey", "To look scarier"],
        answer_fact: "The bears live in Abruzzo National Park in Italy where they are protected, and hopefully can grow in numbers.",
        further_details: "https://theeuropeannaturetrust.com/animal-profile-marsican-brown-bear/",
        threats: ["poaching"]
      },
      {
        name: "European Mink",
        continent: "Europe",
        fun_fact: "Mink have webbed feet and fur covered with an oily substance which prevents water soaking through to their skin, making them very comfortable swimming in water.",
        image: "https://dingo.care2.com/pictures/petition_images/petition/282/151209-1556046018-wide.jpg",
        conservation_status: "Critically Endangered",
        number_remaining: 30000,
        locations: ["Russia", "Spain", "France"],
        quiz_question: "What is a baby mink called?",
        correct_answer: "A kit",
        answers: ["A kit","A hatchling","A pup","A chick"],
        answer_fact: "Converting wetlands into agricultural land has resulted in the disappearance of the resting, breeding and feeding areas for mink. They are now listed as a species to be strictly protected.",
        further_details: "http://animalia.bio/european-mink",
        threats: ["poaching", "building", "pollution"]
      },
      {
        name: "Montseny Brook Newt",
        continent: "Europe",
        fun_fact: "Montseny Newts are very small, they grow to no more than 11 centimetres in length",
        image: "https://www.zoobarcelona.cat/sites/default/files/styles/ps_main_img/public/2019-03/Trito_Montseny.JPG?itok=KqM8waEI",
        conservation_status: "Critically Endangered",
        number_remaining: 1500,
        locations: ["Catalonia"],
        quiz_question: "Where do Montseny Brook newts live?",
        correct_answer: "Streams and Rivers",
        answers: ["Streams and Rivers","Trees and Bushes","Underground Burrows","Sandy Beaches"],
        answer_fact: "The drying out of mountain streams, human alteration of its original habitat and global warming are all threats to this species, the newts now only survive in the wild in one very small area of Spain.",
        further_details: "https://ec.europa.eu/easme/en/news/montseny-newt-and-delicate-nature-local-ecosystems",
        threats: ["climate change", "building"]
      },
    ]
  },
  {
    name:"Asia",
    animals: [
    {
      name: "Visayan Warty Pig",
      continent: "Asia",
      fun_fact: "Males have 3 pairs warts on their face to protect their eyes and faces during fights.",
      image: "http://michaelnoonanphotography.com/wp-content/uploads/2016/04/Artiodactyla-Suidae-Sus-cebifrons-Visayan-Warty-Pig-1V5Z4045.jpg",
      conservation_status: "Critically Endangered",
      number_remaining: null,
      locations: ["Philippines"],
      quiz_question: "In the last 40 years, how much of the forests the Visayan Warty Pig lives in have been cut down?",
      correct_answer: "94%",
      answers: ["94%", "76%", "52%", "37%"],
      answer_fact: "Though it used to live in the rainforests of six of the Philippines' West Visayas islands, now the Visayan Warty Pig can be found on only two islands.",
      further_details: "https://www.nationalgeographic.com/animals/2019/04/endangered-warty-pigs-mohawks-philippines/",
      threats: ["deforestation"]
    },
    {
      name: "Javan Rhinoceros",
      continent: "Asia",
      fun_fact: "Rhinos like to wallow in mud, the activity allows them to maintain cool body temperatures and also helps prevent disease",
      image: "https://c402277.ssl.cf1.rackcdn.com/photos/9496/images/hero_full/_H9A0249.jpg?1436885827",
      conservation_status: "Critically Endangered",
      number_remaining: 67,
      locations: ["Indonesia"],
      quiz_question: "Can you guess where the Javan Rhinos live?",
      correct_answer: "Ujung Kulon National Park",
      answers: ["Ujung Kulon National Park","Cat Tien National Park","Bromo Tengger Semeru National Park","Komodo Island National Park"],
      answer_fact: "Javan rhinos are possibly the rarest large mammal on Earth. The only ones left live in the Ujung Kulon National Park, however the park is under threat from rising sea levels",
      further_details: "https://www.worldwildlife.org/species/javan-rhino",
      threats: ["climate change", "farming", "deforestation", "building"]
    },
    {
      name: "Amur Leopard",
      continent: "Asia",
      fun_fact: "Amur Leopards have huge furry tails they can wrap around themselves to keep warm",
      image: "https://www.marwell.org.uk/media/images/full/amur_leopard_close_up_(1).jpg",
      conservation_status: "Critically Endangered",
      number_remaining: 90,
      locations: ["China", "Russia"],
      quiz_question: "Where do you think Amur Leopards like to live?",
      correct_answer: "Forests",
      answers: ["Forests","Mountains","Rivers","Deserts"],
      answer_fact: "The natural forest habitat of the Amur Leopards is being threatened by forest fires and by the construction of new roads.",
      further_details: "https://www.wwf.org.uk/learn/wildlife/amur-leopards",
      threats: ["deforestation", "poaching", "building"]
    },
    {
      name: "Red Panda",
      continent: "Asia",
      fun_fact: "Red Pandas are only about 2 feet long, about the same size as a large domestic cat",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Red_Panda_%2825193861686%29.jpg",
      conservation_status: "Endangered",
      number_remaining: 10000,
      locations: ["China", "Eastern Himalayas"],
      quiz_question: "What time of day are red pandas most active?",
      correct_answer: "At night",
      answers: ["At night", "In the morning", "In the afternoon", "At lunchtime"],
      answer_fact: "The red panda population has declined by 50% over the last 20 years as deforestation removes their habitat.",
      further_details: "https://www.nationalgeographic.com/animals/mammals/r/red-panda/",
      threats: ["deforestation", "poaching"]
    },
    {
      name: "Sumatran Elephant",
      continent: "Asia",
      fun_fact: "Despite a common opinion, elephants are not afraid of mice. Instead, they usually avoid ants and bees.",
      image: "https://onekindplanet.org/wp-content/uploads/2016/09/az-sumatran-elephant-small-wpcf_518x300.jpg",
      conservation_status: "Critically Endangered",
      number_remaining: 2600,
      locations: ["Indonesia"],
      quiz_question: "How many muscles are there in the trunk of a Sumatran elephant?",
      correct_answer: "60,000",
      answers: ["60,000","100","20,000","10,000"],
      answer_fact: "Due to conversion of forests into human settlements, agricultural areas and plantations, many of the Sumatran elephant populations have lost their habitat to humans.",
      further_details: "https://www.worldwildlife.org/species/sumatran-elephant",
      threats: ["deforestation", "poaching"]
    },
  ]
},
{
  name:"Australia",
  animals: [
    {
      name: "Kakapo",
      continent: "Australia",
      fun_fact: "They are the only parrot in the world that can't fly.",
      image: "https://www.motherjones.com/wp-content/uploads/2019/08/20190818-fat-parrot-2000px-2.jpg?w=990",
      conservation_status: "Critically Endangered",
      number_remaining: 213,
      locations: ["New Zealand"],
      quiz_question: "How many years does the average Kakapo live for?",
      correct_answer: "60 years",
      answers: ["60 years", "30 years", "10 years", "100 years"],
      answer_fact: "When European settlers came to New Zealand, they brought with them animals like cats and weasles that hunted the Kakapo to near extinction. In the 1990s there were as little as 50 Kakapo left in the world, but thanks to conservation efforts that number has now gone up to 213 in 2019.",
      further_details: "https://www.doc.govt.nz/kakapo-recovery",
      threats: ["invasive species"]
    },
    {
      name: "Far Eastern Curlew",
      continent: "Australia",
      fun_fact: "In its liftime a Far Eastern Curlew flies about 400,000km. That's like flying from earth to the moon!",
      image: "https://download.ams.birds.cornell.edu/api/v1/asset/117375951/1800",
      conservation_status: "Endangered",
      number_remaining: 32000,
      locations: ["Australia", "China", "Japan", "Mongolia", "Philippines", "Russia"],
      quiz_question: "Why do curlews have such a long beak?",
      correct_answer: "To dig in the sand for crabs",
      answers: ["To dig in the sand for crabs", "As a weapon to protect themselves", "To help them catch fish", "So they can clean each other's feathers"],
      answer_fact: "Far Eastern Curlews fly from Australia to Northern Asia every year to lay their eggs. Climate change and increased building on the land they normally stop in on the journey mean that many of them can't find the food they need to survive.",
      further_details: "https://birdlife.org.au/bird-profile/eastern-curlew",
      threats: ["climate change", "building"]
    },
    {
      name: "Mary River Turtle",
      continent: "Australia",
      fun_fact: "Its green hair is actually made up of growning strands of algae.",
      image: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/04/elusor-macrurus_chris-van-wyk_10-1000x667-e1523524757991.jpg?quality=90&strip=all&zoom=1&resize=644%2C440&ssl=1",
      conservation_status: "Endangered",
      number_remaining: null,
      locations: ["Australia"],
      quiz_question: "How long can Mary River Turtles stay underwater without coming up for air?",
      correct_answer: "72 hours",
      answers: ["72 hours", "24 hours", "10 hours", "120 hours"],
      answer_fact: "These turtles used to be popular pets in Australia, with about 15000 sent to pet shops every year. This has led to a a decline in numbers in the wild. Today, it's protected by the Australian government.",
      further_details: "http://www.edgeofexistence.org/species/mary-river-turtle/",
      threats: ["poaching"]
    },
    {
      name: "Goodfellow's Tree Kangaroo",
      continent: "Australia",
      fun_fact: "It's very clumsy on the ground, but can jump up to 30 feet from one tree to another.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tree_kangaroo2.jpg",
      conservation_status: "Endangered",
      number_remaining: null,
      locations: ["Papua New Guinea"],
      quiz_question: "How do kangaroos carry their babies?",
      correct_answer: "In their pouch",
      answers: ["In their pouch", "On their back", "In their arms", "They don't. Baby kangaroos can walk from birth"],
      answer_fact: "Deforestation and hunting are leading to a drop in the number of Goodfellow's Tree Kangaroos. A charity called the Tenkile Conservation Alliance is teaching local communities to protect tree kangaroos, and trying to stop them being hunted.",
      further_details: "https://www.waza.org/priorities/conservation/conservation-breeding-programmes/global-species-management-plans/goodfellows-tree-kangaroo/",
      threats: ["deforestation", "poaching"]
    },
    {
      name: "New Zealand Sea Lion",
      continent: "Australia",
      fun_fact: "Sea Lions flick sand over themselves to keep cool in the sun.",
      image: "https://greenglobaltravel.com/wp-content/uploads/New-Zealand-Sea-Lion-adult-female-Shaun-T-e1450297112426.jpg",
      conservation_status: "Endangered",
      number_remaining: 10000,
      locations: ["New Zealand"],
      quiz_question: "What are baby sea lions called?",
      correct_answer: "Pups",
      answers: ["Pups", "Cubs", "Calfs", "Kittens"],
      answer_fact: "Fisheries are a major problem for sea lions. Sea lions can get trapped in fishing nets and drown. A lot of fishing near sea lions can also mean it's harder for sea lions to find good food.",
      further_details: "https://www.wwf.org.nz/what_we_do/species/sealions2/",
      threats: ["fishing", "disease"]
    },
  ]
},
{
  name:"SouthAmerica",
  animals: [
  {
    name: "Lehmann's Poison Frog",
    continent: "South America",
    fun_fact: "In the wild this frog is poisonous, however in captivity it stops being poisonous because of its change in diet.",
    image: "https://i.imgur.com/1fGRXiw.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: null,
    locations: ["Colombia"],
    quiz_question: "Why are some frogs so brightly coloured?",
    correct_answer: "To warn predators that they're poisonous",
    answers: ["To warn predators that they're poisonous", "Because they want to stand out from the crowd", "They get their colour from what they eat", "So they blend in with bright flowers in the rainforest"],
    answer_fact: "Rare frogs in Colombia are under risk from smugglers who want to capture them to sell as pets on the black market. To try and stop this a frog farm has been set up to breed and sell frogs at lower prices than the smuggler's charge.",
    further_details: "https://amphibiaweb.org/species/1637",
    threats: ["poaching"]
  },
  {
    name: "Lear's Macaw",
    continent: "South America",
    fun_fact: "These birds nest on sandstone cliffs. To make a nest, they use their spit to soften the sandstone and then scrape out the sandstone with their beaks.",
    image: "https://www.hbw.com/sites/default/files/styles/ibc_1k/public/ibc/p/lears_macaw_44.jpg?itok=1avaeFvg",
    conservation_status: "Endangered",
    number_remaining: 1000,
    locations: ["Brazil"],
    quiz_question: "Roughly how many nuts does a Lear's macaw eat in one day?",
    correct_answer: "350",
    answers: ["350", "100", "500", "750"],
    answer_fact: "These birds only eat nuts from the Licuri palm tree, which are getting destroyed by increasing numbers of cattle from nearby farms. They are also at risk of being smuggled and sold on the black market as pets.",
    further_details: "http://animalia.bio/lears-macaw",
    threats: ["farming", "poaching"]
  },
  {
    name: "Giant Otter",
    continent: "South America",
    fun_fact: "Otters can close their ears and nose while underwater",
    image: "https://images.earthtouchnews.com/media/734835/9676405878_cff1361be4_o.jpg",
    conservation_status: "Endangered",
    number_remaining: 5000,
    locations: ["Suriname", "Guyana", "French Guiana"],
    quiz_question: "What type of food do otters mainly eat?",
    correct_answer: "Fish",
    answers: ["Fish","Insects","Plants","Snakes"],
    answer_fact: "Water pollution from mining is a serious danger to otters as it leads to an increase of mercury in their main diet of fish",
    further_details: "https://ptes.org/grants/worldwide-projects/giant-otters-peru/",
    threats: ["fishing", "pollution"]
  },
  {
    name: "Golden Lion Tamarin",
    continent: "South America",
    fun_fact: "Lion tamarins take their name from their impressive golden, red and orange manes of hair.",
    image: "https://www.monkeyworlds.com/wp-content/uploads/golden_lion.jpg",
    conservation_status: "Endangered",
    number_remaining: 3200,
    locations: ["Brazil"],
    quiz_question: "What does the golden lion tamarin use to get insects out of small crevices to eat?",
    correct_answer: "Its long fingers",
    answers: ["Its long fingers", "Its long tongue","Its long nose","Its long tail"],
    answer_fact: "The tamarinds are under threat as the forest they live in is being cut down by humans for timber and to clear the land to build on. However efforts by conservationists means that numbers are slowly increasing again.",
    further_details: "https://nationalzoo.si.edu/animals/golden-lion-tamarin",
    threats: ["deforestation"]
  },
  {
    name: "Orinoco Crocodile",
    continent: "South America",
    fun_fact: "These crocodiles have a highly developed sense of smell, so they can smell their prey at a long distance.",
    image: "http://animalia.bio/uploads/animals/photos/full/1x1/orinoco-crocodile-cocodrilo-del-orinoco-crocodylus-intermedius.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: 1500,
    locations: ["Colombia", "Venezuela"],
    quiz_question: "How long are Orinoco Crocodiles?",
    correct_answer: "3 to 4 metres",
    answers: ["3 to 4 metres","10 to 11 metres","50 cm to 1 metre","5 to 6 metres"],
    answer_fact: "The Orinoco crocodile is highly endangered due to excessive hunting in the past, and more recently pollution and destruction of its natural habitat. Today it is a protected species and conservationists are working to increase population numbers.",
    further_details: "http://animalia.bio/orinoco-crocodile",
    threats: ["poaching", "building", "pollution"]
  },
]
},
{
  name:"NorthAmerica",
  animals: [
  {
    name: "Pygmy Raccoon",
    continent: "North America",
    fun_fact: "Pygmy Raccoons can rotate their back feet by 180 degrees, so that they can climb down trees head-first.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cozumel_Raccoon1.jpg/220px-Cozumel_Raccoon1.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: 300,
    locations: ["Mexico"],
    quiz_question: "What is the Pygmy Raccoon's favourite food?",
    correct_answer: "crabs",
    answers: ["crabs", "fruit", "frogs", "insects"],
    answer_fact: "The Pygmy Raccoon can only be found on Cozumel Island off the coast of Mexico. Now, because of the expanding tourism industry on the island, the raccoon's habitat is getting smaller and smaller.",
    further_details: "http://animalia.bio/cozumel-raccoon",
    threats: [""]
  },
  {
    name: "Vancouver Island Marmot",
    continent: "North America",
    fun_fact: "When surprised, the Vancouver Island Marmot makes a really loud whistling sound, which has earned them the nickname 'Whistle Pig'.",
    image: "https://images.glaciermedia.ca/polopoly_fs/1.15164927.1492149428!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/v-i-marmot-jpg.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: 200,
    locations: ["Canada"],
    quiz_question: "Marmots are part of what animal family?",
    correct_answer: "Squirrel",
    answers: ["Squirrel", "Cat", "Rat", "Pig"],
    answer_fact: "Marmots are being hunted by predators more than they used to be, because of a reduced number of prey on the island. With a lot of help, their population has grown in recent years, going from 30 wild marmots left in 2003, to over 200 now.",
    further_details: "https://marmots.org/",
    threats: ["deforestation", "disease", "invasive species"]
  },
  {
    name: "Axolotl",
    continent: "North America",
    fun_fact: "Even though it's often called the 'Mexican Walking Fish', it's actually a type of salamander.",
    image: "https://miro.medium.com/max/4000/0*iuIOwN_3ImJ3KLEK.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: null,
    locations: ["Mexico"],
    quiz_question: "Which of these facts about the Axolotl is NOT true?",
    correct_answer: "They can eat fish twice their size",
    answers: ["They can re-grow injured limbs and organs", "They are 1000 times more resistent to cancer than mammals", "Legend has it that the Aztec god of death and lightning disguised himself as one to avoid sacrifice", "They can eat fish twice their size"],
    answer_fact: "Water pollution and being caught to be sold as pets or food are some of the main reasons the number of axolotl are going down. Scientists have started making shelters for the axolotl with clean water pumped in, to help give them better living conditions.",
    further_details: "https://factanimal.com/axolotl/",
    threats: ["pollution", "climate change", "poaching", "building", "invasive species"]
  },
  {
    name: "Red Wolf",
    continent: "North America",
    fun_fact: "Red wolf cubs are raised by the entire pack.",
    image: "https://live.staticflickr.com/8641/16478011948_6a2eef40e3_b.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: 240,
    locations: ["USA"],
    quiz_question: "How fast can red wolves run?",
    correct_answer: "Up to 30mph",
    answers: ["Up to 30mph", "Up to 20mph", "Up to 15mph", "Up to 40mph"],
    answer_fact: "Red wolves became extinct in the wild in 1980. There were still some living in zoos, and since then red wolves have been reintroduced to protected areas in North Carolina.",
    further_details: "https://www.nwf.org/Educational-Resources/Wildlife-Guide/Mammals/Red-Wolf",
    threats: ["building", "poaching"]
  },
  {
    name: "Franklin's Bumblebee",
    continent: "North America",
    fun_fact: "Bumble bees are very social creatures and live in busy colonies with lots of other bees.",
    image: "https://media.proprofs.com/images/QM/user_images/2169923/1515649357.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: 100,
    locations: ["Southern Oregon", "California"],
    quiz_question: "You can recognise a Franklin's bumblebee from other bumblebees because it has a solid black ..... ?",
    correct_answer: "Abdomen",
    answers: ["Abdomen","Tail","Neck","Wing"],
    answer_fact: "Improper use of pesticides on crops, gardens, and lawns can poison bees, especially the ground-dwelling colonies of Franklin’s bumble bee.",
    further_details: "https://www.fs.fed.us/wildflowers/pollinators/pollinator-of-the-month/franklins-bumble-bee.shtml",
    threats: ["climate change", "pollution", "farming", "disease"]
  },
]
},
{
  name:"Oceans",
  animals: [
  {
    name: "Vaquita",
    continent: "Oceans",
    fun_fact: "Vaquita means little cow in Spanish.",
    image: "https://i0.wp.com/ladyfreethinker.org/wp-content/uploads/2018/04/vaquita.jpg?zoom=2.625&resize=382%2C228&ssl=1",
    conservation_status: "Critically Endangered",
    number_remaining: 19,
    locations: ["Mexico"],
    quiz_question: "What does a vaquita breathe?",
    correct_answer: "Air",
    answers: ["Air", "Water", "It can breathe air and water", "It doesn't need to breathe"],
    answer_fact: "The biggest problem for the vaquita are gill-nets. When they get caught in these fishing nets they can't get to the surface to breathe, and they drown.",
    further_details: "https://porpoise.org/save-the-vaquita/?gclid=CjwKCAiAuK3vBRBOEiwA1IMhutqTKF_Fek_vFJKQ1ZO2_BEU41RUAcSfvbRkA2EtT-fPJPoCfZHCKBoCtZ4QAvD_BwE",
    threats: ["fishing"]
  },
  {
    name: "Smalltooth Sawfish",
    continent: "Oceans",
    fun_fact: "Sawfish live by the coast and don't like swimming in water that's more than 8 metres deep.",
    image: "https://s2r.iucnredlist.org/sis2_images/797123022.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: null,
    locations: ["Atlantic"],
    quiz_question: "What do the sawfish NOT use their saws for?",
    correct_answer: "Cutting through seaweed and nets",
    answers: ["Cutting through seaweed and nets", "Sensing where fish are in murky water", "Injuring prey to make them easier to eat", "Digging for buried prey"],
    answer_fact: "Smalltoth sawfish are often accidentally caught by fishing nets, and are then killed instead of being released back into the ocean.",
    further_details: "https://oceana.org/marine-life/ocean-fishes/smalltooth-sawfish",
    threats: ["fishing", "climate change", "deforestation"]
  },
  {
    name: "Hawksbill Sea Turtle",
    continent: "Oceans",
    fun_fact: "Hawksbill sea turtle shells change colors depending on whether the turtle is in warm or cold water",
    image: "https://media.fromthegrapevine.com/assets/images/2015/2/hawksbill-sea-turtle-eilat-bay.jpg.1145x0_q71_crop-scale.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: 23000,
    locations: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean"],
    quiz_question: "Hawksbill Turtles main diet is sea sponges and by eating them they help protect the coral reefs. How many sponges do you think a turtle can eat in a year?",
    correct_answer: "1200",
    answers: ["1200","20","500","2000"],
    answer_fact: "It is estimated that there are more than 100 million tonnes of plastic in the ocean, responsible for killing millions of marine animals each year. It is believed that almost all sea turtles will ingest plastic in some form during their life.",
    further_details: "https://www.nationalgeographic.com/animals/reptiles/h/hawksbill-sea-turtle/",
    threats: ["fishing", "pollution"]
  },
  {
    name: "Polar Bear",
    continent: "Oceans",
    fun_fact: "Because they spend most of their lives on the sea ice of the Arctic Ocean and depend on the ocean for their food and habitat, polar bears are the only bear species to be considered marine mammals",
    image: "https://c402277.ssl.cf1.rackcdn.com/photos/2330/images/hero_full/polar-bear-hero.jpg?1345901694",
    conservation_status: "Vulnerable",
    number_remaining: 31000,
    locations: ["Arctic Ocean"],
    quiz_question: "How large are polar bear cubs when they are first born?",
    correct_answer: "The size of a guinea pig",
    answers: ["The size of a guinea pig", "The size of a thimble", "The size of a mouse", "The size of a fox"],
    answer_fact: "Temperatures in the Arctic are rising at least twice as fast as the global average and sea ice cover is shrinking. This loss of sea ice affects polar bears' ability to find food and safe places to build dens.",
    further_details: "https://www.worldwildlife.org/species/polar-bear",
    threats: ["climate change", "pollution"]
  },
  {
    name: "Balearic Shearwater",
    continent: "Oceans",
    fun_fact: "Shearwaters nest in burrows which are only visited at night to avoid predators like large gulls.",
    image: "http://www.marine-life.org.uk/media/49390/balearicshearwater4%20brereton%20edit_345x230.jpg",
    conservation_status: "Critically Endangered",
    number_remaining: 19000,
    locations: ["Balearic Islands"],
    quiz_question: "What is the wingspan of a Balearic Shearwater?",
    correct_answer: "85–90 cm",
    answers: ["85–90 cm", "45-50cm", "145-150cm", "10-15cm"],
    answer_fact: "The Balearic Shearwater is under severe threat from the development of holiday resorts near its breeding sites, which can destroy or alter their natural breeding habitat",
    further_details: "",
    threats: ["building"]
  }
]
},
{
  name:"Antarctica",
  animals: [
  {
    name: "Emperor Penguin",
    continent: "Antarctica",
    fun_fact: "Emperor penguins are the largest penguins on earth today, but they would be dwarfed by the ancient ‘mega-penguins’. Fossils reveal that a giant species of penguin which lived about 37 million years ago may have stood 2 metres tall!",
    image: "https://oceanwide-4579.kxcdn.com/uploads/media-dynamic/cache/widen_1100/uploads/media/default/0001/26/thumb_25671_default_900.jpeg",
    conservation_status: "Near Threatened",
    number_remaining: 595000,
    locations: ["Antarctica"],
    quiz_question: "Emperor penguins are the Olympic divers of the bird world! How deep do you think the deepest recorded penguin dive is?",
    correct_answer: "564 metres",
    answers: ["564 metres", "50 metres", "100 metres", "1000 metres"],
    answer_fact: "Emperor Penguins are at risk from global warming, which is melting the sea ice. However if climate targets can be met the risk to these penguins will be greatly reduced.",
    further_details: "https://www.natgeokids.com/uk/discover/animals/birds/emperor-penguins/",
    threats: ["climate change"]
  },
  {
    name: "Antarctic Blue Whale",
    continent: "Antarctica",
    fun_fact: "Blue whales are the largest mammal to have ever lived on the Earth, but their main diet is tiny krill, a small aquatic lifeform resembling a prawn",
    image: "https://cdn.britannica.com/90/150290-050-C96E4444/Illustration-blue-whale.jpg",
    conservation_status: "Endangered",
    number_remaining: 25000,
    locations: ["Southern Ocean"],
    quiz_question: "Which of these facts about the Blue Whale is NOT true?",
    correct_answer: "It can swim at 40 miles per hour",
    answers: ["It can swim at 40 miles per hour","It's calls can be heard underwater for hundreds of kilometres","It’s tongue weighs as much as an elephant","It is longer than three buses"],
    answer_fact: "The world's largest problem, global warming, could mean extinction in the Antarctic for the world's largest animal. Sea ice provides a habitat for algae, which are fed upon by krill, the main food supply for blue whales. As the temperature has increased in recent decades, sea ice has diminished rapidly and thus food supplies are getting scarcer.",
    further_details: "https://wwf.panda.org/knowledge_hub/endangered_species/cetaceans/about/blue_whale/",
    threats: ["poaching", "climate change", "fishing"]
  },
  {
    name: "Antarctic Krill",
    continent: "Antarctica",
    fun_fact: "Krill travel in swarms so dense they can be seen from space.",
    image: "http://www.antarctica.gov.au/__data/assets/image/0010/29098/varieties/antarctic.jpg",
    conservation_status: "Least Concern",
    number_remaining: 6000000000,
    locations: ["Southern Oceans"],
    quiz_question: "How big can krill grow?",
    correct_answer: "6cm",
    answers: ["6cm","2cm","10cm","20cm"],
    answer_fact: "Although krill are not currently endangered their numbers are declining, as global warming causes the ice caps which provide their food to melt. Without krill to eat, the majority of life forms in the Antarctic would vanish",
    further_details: "https://www.nationalgeographic.com/animals/invertebrates/group/krill/",
    threats: ["climate change"]
  }
]
}
])
