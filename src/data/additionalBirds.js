// 10 Additional Bird Species with Complete Profiles and Multi-Image Galleries

export const ADDITIONAL_BIRDS = [
  {
    id: 'bird-budgie',
    name: 'Budgerigar (Parakeet)',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    tagline: 'Cheerful, chattering, and colorful Australian parakeet',
    lifespan: '7 - 12 years',
    temperament: 'Social, Playful, Cheerful, Vocal',
    careLevel: 'Easy to Moderate',
    activityLevel: 'High (Active flyer & climber)',
    dietType: 'Granivore / Herbivore',
    description: 'The Budgerigar is the world’s most popular pet bird. Native to the Australian scrublands, Budgies are small parrots capable of extensive vocabularies and playful aerial acrobatics.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Bright Green & Blue Budgie Perched',
        tag: 'Adult Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Budgie Preening Feathers',
        tag: 'Preening'
      },
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Curious Pair of Budgies',
        tag: 'Social Pair'
      }
    ],
    careGuide: {
      housing: 'Minimum cage 18"x18"x24" with horizontal bars for climbing. Draft-free spot.',
      exercise: 'Daily supervised out-of-cage flying in a bird-safe room.',
      mentalStimulation: 'Swings, mirrors, bells, and shreddable paper foraging toys.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-6 mo)', frequency: 'Continuous bowl', diet: 'Fine starter pellets (60%), sprouted seeds, grated carrot & broccoli.', portion: '1.5 tablespoons daily' },
      { stage: 'Adult (6 mo - 8 yrs)', frequency: 'Daily fresh bowl', diet: '70% mini avian pellets, 20% fresh chop (kale, peppers, sprouts), 10% seed treat.', portion: '1.5 - 2 tablespoons daily' },
      { stage: 'Senior (8+ yrs)', frequency: 'Daily', diet: 'Easily digestible softened pellets, calcium cuttlebone, vitamin A greens.', portion: '1.5 tablespoons daily' }
    ],
    vaccinations: [
      { age: 'Annual Wellness', vaccine: 'Avian Gram stain, Polyomavirus screening', mandatory: true }
    ],
    grooming: {
      brushing: 'Provide shallow warm water bird bath bowl 3 times weekly.',
      nailTrimming: 'Trim claws every 2 months using styptic powder.',
      beakCare: 'Provide cuttlebone and lava mineral block.'
    },
    commonHealthTips: [
      'Strictly avoid cooking with non-stick Teflon pans (PTFE fumes fatal to avian lungs).',
      'Provide 10-12 hours of uninterrupted sleep in a darkened cage cover.'
    ]
  },
  {
    id: 'bird-african-grey',
    name: 'African Grey Parrot',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
    tagline: 'World-renowned cognitive genius with crimson tail feathers',
    lifespan: '40 - 60 years',
    temperament: 'Intelligent, Sensitive, Verbal, Observant',
    careLevel: 'High (Complex Cognition)',
    activityLevel: 'Moderate to High',
    dietType: 'Frugivore / Granivore',
    description: 'Renowned for cognitive abilities rivaling a 5-year-old human child, African Greys can comprehend language, solve complex puzzle boxes, and form profound bonds with handlers.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Congo African Grey Crimson Tail',
        tag: 'Adult Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'African Grey Perched Intently',
        tag: 'Alert'
      },
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'African Grey Foraging Play',
        tag: 'Foraging'
      }
    ],
    careGuide: {
      housing: 'Large cage (36"x24"x48") with stainless steel bars; room to flap wings.',
      exercise: '2-4 hours daily interactive out-of-cage time and flight training.',
      mentalStimulation: 'Mechanical puzzle toys, speech training, wood block destructible toys.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-1 yr)', frequency: '3 times daily', diet: 'High-calcium parrot pellets, warm soaked legumes, sweet potato mash.', portion: '1/3 cup pellets + 2 tbsp chop' },
      { stage: 'Adult (1-30 yrs)', frequency: 'Morning & evening', diet: '75% formulated organic pellets, 20% fresh dark veggies (kale, squash), 5% raw nuts (almonds/walnuts).', portion: '1/2 cup pellets + 1/4 cup chop' },
      { stage: 'Senior (30+ yrs)', frequency: 'Daily fresh', diet: 'Easily digestible soaked pellets, calcium drops, antioxidant berries.', portion: '1/3 cup + 1/4 cup chop' }
    ],
    vaccinations: [
      { age: 'Yearly Avian Exam', vaccine: 'PBFD & Psittacosis screening, blood biochem panel', mandatory: true }
    ],
    grooming: {
      brushing: 'Mist daily with warm water spray bottle to promote feather conditioning.',
      nailTrimming: 'Trim nails every 6-8 weeks.',
      beakCare: 'Provide natural varied wood perches (manzanita, dragonwood).'
    },
    commonHealthTips: [
      'Prone to hypocalcemia (low blood calcium); ensure adequate diet and full-spectrum avian UV lighting.',
      'Can develop feather-plucking habits if socially isolated or under-stimulated.'
    ]
  },
  {
    id: 'bird-canary',
    name: 'Canary',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
    tagline: 'Melodious opera singer with radiant yellow plumage',
    lifespan: '10 - 15 years',
    temperament: 'Solitary, Musical, Gentle, Cheerful',
    careLevel: 'Easy',
    activityLevel: 'Moderate (Continuous flier)',
    dietType: 'Granivore / Herbivore',
    description: 'Bred in the Canary Islands and Azores, male Canaries are world-famous for their elaborate, flute-like songs. They are low-maintenance, independent, and do not crave physical petting.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Golden Yellow Canary Singing',
        tag: 'Songbird'
      },
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Canary on Natural Twig',
        tag: 'Perched'
      },
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Canary Bathing Splash',
        tag: 'Bathing'
      }
    ],
    careGuide: {
      housing: 'Wide flight cage (at least 30" long) to permit horizontal wing flight.',
      exercise: 'Continuous cage flight from perch to perch; out-of-cage flying optional.',
      mentalStimulation: 'Singing radio/CD background, varied perch textures.'
    },
    lifeStageNutrition: [
      { stage: 'Young (0-6 mo)', frequency: 'Daily fresh', diet: 'Canary seed mix (canary seed + rape seed) + fine pellets + egg food.', portion: '1-2 teaspoons daily' },
      { stage: 'Adult (1-8 yrs)', frequency: 'Daily', diet: '60% canary pellets, 30% quality seed, 10% fresh dandelion greens, apple slices, broccoli.', portion: '2 teaspoons daily' },
      { stage: 'Senior (8+ yrs)', frequency: 'Daily', diet: 'High-fiber seed blend, crushed pellet, soft greens.', portion: '2 teaspoons daily' }
    ],
    vaccinations: [
      { age: 'Annual Check', vaccine: 'Avian pox virus & air sac mite screen', mandatory: false }
    ],
    grooming: {
      brushing: 'Provide shallow bird bath daily; Canaries love bathing.',
      nailTrimming: 'Trim needle-sharp claw tips every 2-3 months.',
      beakCare: 'Cuttlebone essential for beak conditioning.'
    },
    commonHealthTips: [
      'Male Canaries stop singing during annual molt; provide protein-rich egg food during this time.',
      'Protect strictly from drafts and sudden temperature drops.'
    ]
  },
  {
    id: 'bird-lovebird',
    name: 'Peach-Faced Lovebird',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    tagline: 'Feisty pocket parrot with vibrant peach cheeks and boundless love',
    lifespan: '12 - 15 years',
    temperament: 'Bold, Affectionate, Inquisitive, Feisty',
    careLevel: 'Moderate',
    activityLevel: 'High',
    dietType: 'Granivore / Frugivore',
    description: 'Native to southwest Africa, Lovebirds are small, stocky parrots celebrated for their intense monogamous bonding, vibrant peach-red facial feathers, and spirited personalities.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Peach-Faced Lovebird Portrait',
        tag: 'Pocket Parrot'
      },
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Lovebird Pair Preening',
        tag: 'Bonded Pair'
      },
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Lovebird Playing With Rope',
        tag: 'Play'
      }
    ],
    careGuide: {
      housing: 'Minimum cage 24"x24"x24" with narrow bar spacing (1/2 inch).',
      exercise: 'Daily out-of-cage exploration, shoulder perching, cardboard shredding.',
      mentalStimulation: 'Shredding palm leaves, foraging cups, swings, and climbing ropes.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-6 mo)', frequency: 'Daily fresh', diet: 'Small-hookbill pellets, sprouted millet, mashed sweet potatoes.', portion: '2 tablespoons daily' },
      { stage: 'Adult (1-10 yrs)', frequency: 'Daily fresh', diet: '70% avian pellets, 20% fresh chop (carrots, corn, spinach), 10% quality seed treat.', portion: '2 tablespoons daily' },
      { stage: 'Senior (10+ yrs)', frequency: 'Daily', diet: 'Softened pellets, vitamin-rich vegetables, soaked seeds.', portion: '2 tablespoons daily' }
    ],
    vaccinations: [
      { age: 'Annual Wellness', vaccine: 'Avian fecal exam & chlamydia screening', mandatory: true }
    ],
    grooming: {
      brushing: 'Warm mist spray 3-4 times a week; shallow bath dish.',
      nailTrimming: 'Trim nails every 6 weeks.',
      beakCare: 'Provide wood and mineral chew toys.'
    },
    commonHealthTips: [
      'Very territorial over their cage; introduce items gently.',
      'Lovebirds tuck shredded paper into rump feathers during breeding cycles; normal instinctive behavior.'
    ]
  },
  {
    id: 'bird-sun-conure',
    name: 'Sun Conure',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
    tagline: 'Radiant golden-orange sunset plumage with passionate vocal calls',
    lifespan: '20 - 30 years',
    temperament: 'Cuddly, Loud, Playful, Loyal',
    careLevel: 'Moderate to High',
    activityLevel: 'High',
    dietType: 'Frugivore / Granivore',
    description: 'Hailing from northeastern South America, Sun Conures boast a breathtaking plumage of brilliant yellow, orange, and red. They are deeply affectionate clowns with powerful voices.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Sun Conure Brilliant Sunset Colors',
        tag: 'Vibrant Colors'
      },
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Sun Conure Spreading Wings',
        tag: 'Flight'
      },
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Sun Conure Cuddle on Hand',
        tag: 'Bonding'
      }
    ],
    careGuide: {
      housing: 'Spacious cage 30"x30"x36"; sturdy non-chewable metal latches.',
      exercise: 'Daily flight time in bird-proof room; playpen perches.',
      mentalStimulation: 'Wood gnawing blocks, puzzle toys, foraging skewers.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-1 yr)', frequency: '3 times daily', diet: 'Conure pellets, warm sweet potato, sprouted grains.', portion: '3 tablespoons daily' },
      { stage: 'Adult (1-15 yrs)', frequency: 'Morning & afternoon', diet: '70% conure pellets, 25% fresh fruits & veggies (berries, peppers, kale), 5% raw seeds/nuts.', portion: '1/4 cup pellets + 2 tbsp chop' },
      { stage: 'Senior (15+ yrs)', frequency: 'Daily fresh', diet: 'Easily digestible soaked pellets, calcium greens.', portion: '1/4 cup daily' }
    ],
    vaccinations: [
      { age: 'Yearly Avian Exam', vaccine: 'Polyomavirus & PBFD screening', mandatory: true }
    ],
    grooming: {
      brushing: 'Daily shower with gentle lukewarm mist spray.',
      nailTrimming: 'Trim nails every 6 weeks.',
      beakCare: 'Heavy wood chew blocks to wear down strong beak.'
    },
    commonHealthTips: [
      'High-volume vocal screeching is normal flock-calling behavior (not suitable for quiet apartments).',
      'Provide 12 hours of dark, quiet sleep to prevent behavioral aggression.'
    ]
  },
  {
    id: 'bird-cockatoo',
    name: 'Sulphur-Crested Cockatoo',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
    tagline: 'Snow-white plumage, expressive yellow crest, and immense emotional depth',
    lifespan: '50 - 70 years',
    temperament: 'Affectionate, Dramatic, Demanding, Energetic',
    careLevel: 'Very High (Lifelong Commitment)',
    activityLevel: 'High',
    dietType: 'Granivore / Frugivore',
    description: 'Hailing from Australia and New Guinea, Cockatoos are known for their magnificent expressive head crests and deep need for physical affection, often acting like perpetual toddlers.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Cockatoo Crest Raised in Display',
        tag: 'Crest Display'
      },
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Cockatoo Perched Majestic Stance',
        tag: 'Majestic'
      },
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Cockatoo Curious Eye Contact',
        tag: 'Portrait'
      }
    ],
    careGuide: {
      housing: 'Extra large walk-in aviary or massive 40"x36"x60" cage with wrought-iron bars.',
      exercise: 'Minimum 3-4 hours daily interactive flight/play time out of cage.',
      mentalStimulation: 'Heavy untreated pine blocks, foraging puzzles, trick training.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-2 yrs)', frequency: '3 times daily', diet: 'Large parrot pellets, cooked legumes, steamed squash.', portion: '1/2 cup pellets + 1/4 cup chop' },
      { stage: 'Adult (2-40 yrs)', frequency: 'Morning & evening', diet: '70% low-fat formulated pellets, 25% fresh vegetables & green chop, 5% raw almonds/nuts.', portion: '1/2 cup pellets + 1/3 cup chop' },
      { stage: 'Senior (40+ yrs)', frequency: 'Daily', diet: 'Nutrient-rich senior blend with joint support.', portion: '1/2 cup daily' }
    ],
    vaccinations: [
      { age: 'Yearly Exam', vaccine: 'Psittacosis screen, bile acid blood test', mandatory: true }
    ],
    grooming: {
      brushing: 'Regular showers; Cockatoos produce natural powder down to clean feathers.',
      nailTrimming: 'Trim nails every 6 weeks.',
      beakCare: 'Heavy wood perches and gnawing branches.'
    },
    commonHealthTips: [
      'Powder down dust can trigger human asthma; HEPA air filtration is recommended in room.',
      'Can develop extreme separation anxiety and feather destructive behavior if ignored.'
    ]
  },
  {
    id: 'bird-zebra-finch',
    name: 'Zebra Finch',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    tagline: 'Tiny, beep-honking Australian finch with bold zebra stripes',
    lifespan: '5 - 9 years',
    temperament: 'Social, Busy, Active, Gregarious',
    careLevel: 'Easy',
    activityLevel: 'Very High (Continuous fluttering)',
    dietType: 'Granivore',
    description: 'Famous for their charming "meep-meep" trumpet calls and distinct black-and-white zebra chest stripes, Zebra Finches are cheerful flock birds best kept in bonded pairs.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Male Zebra Finch With Orange Cheeks',
        tag: 'Flock Bird'
      },
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Pair of Finches on Perch',
        tag: 'Bonded Pair'
      },
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Zebra Finch Bathing',
        tag: 'Bathing'
      }
    ],
    careGuide: {
      housing: 'Long horizontal flight cage (minimum 30" wide); keep in pairs or small flocks.',
      exercise: 'Continuous cage flight from end to end.',
      mentalStimulation: 'Fine nesting grasses, multiple perches at varying heights.'
    },
    lifeStageNutrition: [
      { stage: 'Young (0-6 mo)', frequency: 'Continuous bowl', diet: 'Finch seed blend (millet, canary seed), fine crumb pellets, egg food.', portion: '1-2 teaspoons daily' },
      { stage: 'Adult (1-5 yrs)', frequency: 'Daily fresh', diet: '50% fine finch pellets, 40% seed mix, 10% dark greens (cucumber, finely chopped kale).', portion: '2 teaspoons daily' },
      { stage: 'Senior (5+ yrs)', frequency: 'Daily', diet: 'High-protein seed mix, sprouted seeds, calcium grit.', portion: '2 teaspoons daily' }
    ],
    vaccinations: [
      { age: 'Annual Check', vaccine: 'Avian fecal exam for parasites', mandatory: false }
    ],
    grooming: {
      brushing: 'Provide fresh shallow bird bath daily.',
      nailTrimming: 'Trim claw tips every 2-3 months.',
      beakCare: 'Cuttlebone and mineral block access.'
    },
    commonHealthTips: [
      'Never keep a solitary Zebra Finch; they require a companion of their own species.',
      'Remove nesting boxes if you wish to prevent continuous egg laying.'
    ]
  },
  {
    id: 'bird-eclectus',
    name: 'Eclectus Parrot',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
    tagline: 'Striking sexual dimorphism: emerald males and ruby-red females',
    lifespan: '30 - 45 years',
    temperament: 'Gentle, Calm, Observant, Affectionate',
    careLevel: 'High (Specialized Diet)',
    activityLevel: 'Moderate',
    dietType: 'Specialized Frugivore',
    description: 'Native to the Solomon Islands and New Guinea, Eclectus parrots exhibit the most dramatic sexual dimorphism in birds: males are brilliant emerald green while females are rich scarlet red.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Male Emerald Eclectus Parrot',
        tag: 'Emerald Male'
      },
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Ruby Female Eclectus',
        tag: 'Ruby Female'
      },
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Eclectus Enjoying Fresh Papaya',
        tag: 'Fresh Diet'
      }
    ],
    careGuide: {
      housing: 'Spacious parrot cage (minimum 36"x28"x48") in draft-free area.',
      exercise: 'Daily flight practice, rope ladders, foraging stations.',
      mentalStimulation: 'Wood destructible toys, foraging parcels, interactive speech.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-1 yr)', frequency: '3 times daily', diet: 'Fresh papaya, mango, sweet potato, unfortified specialized pellets.', portion: '1/3 cup fresh + 2 tbsp pellet' },
      { stage: 'Adult (1-25 yrs)', frequency: 'Morning & evening', diet: '80% fresh organic fruits and vegetables (fiber-rich), 20% plain unfortified pellets (elongated digestive tract).', portion: '1/2 cup fresh chop + 2 tbsp pellet' },
      { stage: 'Senior (25+ yrs)', frequency: 'Daily fresh', diet: 'Soaked nutrient-rich produce, vitamin A beta-carotene foods.', portion: '1/2 cup fresh daily' }
    ],
    vaccinations: [
      { age: 'Yearly Exam', vaccine: 'Avian wellness panel, fecal gram stain', mandatory: true }
    ],
    grooming: {
      brushing: 'Mist with warm water 4-5 times a week; their feathers look like silk fur.',
      nailTrimming: 'Trim nails every 6 weeks.',
      beakCare: 'Natural eucalyptus or manzanita branches.'
    },
    commonHealthTips: [
      'NEVER feed artificial food dyes or heavily fortified vitamins (causes fatal toe-tapping / muscle spasms due to unique metabolism).',
      'Requires diet exceptionally high in natural beta-carotene (papaya, carrots, pumpkin).'
    ]
  },
  {
    id: 'bird-pionus',
    name: 'Blue-Headed Pionus',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
    tagline: 'Quiet, iridescent cobalt head, and sweet-tempered companion parrot',
    lifespan: '25 - 35 years',
    temperament: 'Gentle, Quiet, Independent, Even-tempered',
    careLevel: 'Moderate',
    activityLevel: 'Moderate',
    dietType: 'Frugivore / Granivore',
    description: 'Hailing from Central and South America, the Blue-Headed Pionus is revered for its calm, gentle disposition and gorgeous cobalt-blue hood, making it ideal for apartment dwellers.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Blue-Headed Pionus Hood Portrait',
        tag: 'Cobalt Hood'
      },
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Pionus Perched in Calm Stance',
        tag: 'Gentle'
      },
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Pionus Feathers in Sunlight',
        tag: 'Iridescent'
      }
    ],
    careGuide: {
      housing: 'Medium parrot cage (minimum 28"x24"x36").',
      exercise: 'Daily out-of-cage perching and wing flapping.',
      mentalStimulation: 'Preening toys, cardboard chews, and puzzle cups.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-1 yr)', frequency: '3 times daily', diet: 'Nutrient-rich pellets, cooked brown rice and veggies.', portion: '3 tablespoons daily' },
      { stage: 'Adult (1-20 yrs)', frequency: 'Morning & evening', diet: '70% organic pellets, 25% fresh vegetable chop, 5% nuts.', portion: '1/4 cup pellets + 2 tbsp chop' },
      { stage: 'Senior (20+ yrs)', frequency: 'Daily fresh', diet: 'Easily digestible soaked pellets, vitamin A squash.', portion: '1/4 cup daily' }
    ],
    vaccinations: [
      { age: 'Yearly Exam', vaccine: 'Avian health screen & lung auscultation', mandatory: true }
    ],
    grooming: {
      brushing: 'Mist with warm water 3 times a week.',
      nailTrimming: 'Trim nails every 6-8 weeks.',
      beakCare: 'Mineral block and varied diameter wood perches.'
    },
    commonHealthTips: [
      'Prone to aspergillosis (respiratory fungal infection); maintain pristine clean cage air.',
      'Emit a sweet, musk-like natural floral scent from their feathers.'
    ]
  },
  {
    id: 'bird-green-cheek-conure',
    name: 'Green-Cheeked Conure',
    category: 'bird',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    tagline: 'Quiet, cuddly pocket clown with maroon tail and mischievous charm',
    lifespan: '20 - 25 years',
    temperament: 'Playful, Cuddly, Curious, Quiet',
    careLevel: 'Moderate',
    activityLevel: 'High',
    dietType: 'Frugivore / Granivore',
    description: 'Unlike their louder conure cousins, Green-Cheeked Conures are notably quiet, affectionate, and playful. They love snuggling under your collar and performing acrobatic tricks.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Green-Cheeked Conure Close-Up',
        tag: 'Pocket Clown'
      },
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Green-Cheeked Conure Snuggling',
        tag: 'Affectionate'
      },
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Conure Hanging Upside Down',
        tag: 'Acrobatic'
      }
    ],
    careGuide: {
      housing: 'Minimum cage 24"x24"x30" with 1/2" bar spacing.',
      exercise: '1-2 hours daily out-of-cage play and shoulder perching.',
      mentalStimulation: 'Wood chews, bells, leather strips, and foraging cups.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-1 yr)', frequency: 'Daily fresh', diet: 'Small conure pellets, warm sweet potato, sprouted millet.', portion: '2-3 tablespoons daily' },
      { stage: 'Adult (1-15 yrs)', frequency: 'Daily fresh', diet: '70% conure pellets, 25% fresh vegetables (broccoli, peppers, kale), 5% raw seed treats.', portion: '3 tablespoons daily + chop' },
      { stage: 'Senior (15+ yrs)', frequency: 'Daily', diet: 'Softened pellets, antioxidant berries, steamed squash.', portion: '3 tablespoons daily' }
    ],
    vaccinations: [
      { age: 'Annual Check', vaccine: 'Avian fecal screen & general physical', mandatory: true }
    ],
    grooming: {
      brushing: 'Daily shallow water dish bath or warm mist spray.',
      nailTrimming: 'Trim nails every 6 weeks.',
      beakCare: 'Provide wood chews and calcium cuttlebone.'
    },
    commonHealthTips: [
      'Love sleeping in soft fabric huts; monitor for loose threads that could tangle toes.',
      'One of the quietest conure species, ideal for apartment living.'
    ]
  }
];
