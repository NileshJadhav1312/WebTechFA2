// 10 Additional Cat Breeds with Complete Profiles and Multi-Image Galleries

export const ADDITIONAL_CATS = [
  {
    id: 'cat-maine-coon',
    name: 'Maine Coon',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
    tagline: 'Gentle giant, tufted ears, and affectionate wilderness demeanor',
    lifespan: '12 - 15 years',
    temperament: 'Gentle, Intelligent, Friendly, Playful',
    careLevel: 'Moderate to High',
    activityLevel: 'Moderate (Climber)',
    dietType: 'Obligate Carnivore',
    description: 'One of the largest domesticated cat breeds, the Maine Coon possesses a thick water-resistant shaggy coat, bushy ringed tail, and dog-like companionable personality.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
        title: 'Maine Coon Majestic Portrait',
        tag: 'Adult Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        title: 'Maine Coon Resting on Cat Tree',
        tag: 'Resting'
      },
      {
        url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
        title: 'Maine Coon Fluffy Tail Close-up',
        tag: 'Coat Care'
      }
    ],
    careGuide: {
      housing: 'Spacious indoor home with heavy-duty sturdy scratching posts and trees.',
      exercise: 'Interactive wand toys, laser chasing, and large ball tracks.',
      mentalStimulation: 'Puzzle feeders and bird-watching window perches.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-12 mo)', frequency: '4 meals/day', diet: 'High-protein large-breed kitten food (they grow for up to 4 years).', portion: '1 cup kibble + 1 can wet' },
      { stage: 'Adult (1-8 yrs)', frequency: '2 meals/day', diet: 'Protein-rich meat diet with joint and heart taurine support.', portion: '3/4 cup kibble + 1 can wet' },
      { stage: 'Senior (8+ yrs)', frequency: '2 meals/day', diet: 'Digestible senior formula with kidney hydration support.', portion: '1/2 cup + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP 2nd Dose + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (1-Year)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual FVRCP Booster + Deworming', mandatory: true }
    ],
    grooming: {
      brushing: 'Thorough brushing 2-3 times weekly to avoid undercoat mats.',
      bathing: 'Every 8-12 weeks with cat conditioning shampoo.',
      clawTrimming: 'Clip claw tips every 2-3 weeks.'
    },
    commonHealthTips: [
      'Screen annually for hypertrophic cardiomyopathy (HCM).',
      'Provide heavy non-tip water bowls as Maine Coons love pawing water.'
    ]
  },
  {
    id: 'cat-bengal',
    name: 'Bengal Cat',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    tagline: 'Athletic, leopard-spotted, and high-energy feline adventurer',
    lifespan: '12 - 16 years',
    temperament: 'Energetic, Curious, Highly Intelligent, Vocal',
    careLevel: 'Moderate to High',
    activityLevel: 'Very High (Active Runner)',
    dietType: 'Obligate Carnivore',
    description: 'Developed by breeding Asian leopard cats with domestic felines, Bengals have vivid rosette coats with glitter sheen, intense curiosity, and an unusual affinity for water.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
        title: 'Bengal Spotted Coat Portrait',
        tag: 'Exotic Coat'
      },
      {
        url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
        title: 'Bengal Cat Leaping',
        tag: 'Agile'
      },
      {
        url: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
        title: 'Bengal Inquisitive Gaze',
        tag: 'Alert'
      }
    ],
    careGuide: {
      housing: 'Indoor home with vertical climbing towers, cat exercise wheels, and wall perches.',
      exercise: 'Daily active play, harness outdoor walks, and feather lures.',
      mentalStimulation: 'Learn fetch tricks rapidly; provide food puzzles.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-6 mo)', frequency: '4 meals/day', diet: 'High-protein grain-free kitten recipe.', portion: '0.5 cup kibble + 1 can wet' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Lean animal protein (poultry/rabbit/tuna) with low carbs.', portion: '2/3 cup kibble + 1 can wet' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Senior feline formula rich in antioxidants.', portion: '1/2 cup kibble + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual FVRCP Booster + Deworming', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly gentle brushing with rubber grooming glove (low shedding).',
      bathing: 'Rarely needed; many Bengals enjoy playing in shallow water faucets.',
      clawTrimming: 'Clip claw tips every 2 weeks.'
    },
    commonHealthTips: [
      'Require significant mental stimulation to prevent boredom-induced mischief.',
      'Check eyes regularly for progressive retinal atrophy (PRA-b).'
    ]
  },
  {
    id: 'cat-british-shorthair',
    name: 'British Shorthair',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    tagline: 'Chubby-cheeked, calm, and plush teddy-bear companion',
    lifespan: '12 - 17 years',
    temperament: 'Calm, Easygoing, Patient, Affectionate',
    careLevel: 'Easy to Moderate',
    activityLevel: 'Low to Moderate',
    dietType: 'Obligate Carnivore',
    description: 'With their distinctive round face, dense plush coat, and copper-orange eyes, British Shorthairs are the quintessential calm, dignified indoor cats.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
        title: 'British Blue Shorthair Portrait',
        tag: 'Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        title: 'British Shorthair Relaxing',
        tag: 'Cozy'
      },
      {
        url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
        title: 'Plush Coat Close-up',
        tag: 'Coat Care'
      }
    ],
    careGuide: {
      housing: 'Indoor apartments or homes with calm sunlit spots.',
      exercise: 'Short 10-15 minute daily chase sessions with mice or strings.',
      mentalStimulation: 'Scratching pads, window views, and treat balls.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-6 mo)', frequency: '3-4 meals/day', diet: 'High-calorie kitten kibble and broth.', portion: '0.5 cup + 1 can wet' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Weight-controlled adult formula (tendency toward obesity).', portion: '1/2 cup kibble + 1 can wet' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'High-moisture senior pate with kidney care.', portion: '1/3 cup + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP 1st Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP 2nd Dose + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Dental check', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush twice weekly with slicker brush to remove loose undercoat.',
      bathing: 'Rarely needed.',
      clawTrimming: 'Clip claws every 3 weeks.'
    },
    commonHealthTips: [
      'Prone to sedentary weight gain; portion control is vital.',
      'Schedule routine dental exams for gingivitis prevention.'
    ]
  },
  {
    id: 'cat-ragdoll',
    name: 'Ragdoll',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
    tagline: 'Limp in your arms, sapphire eyes, and sweet puppy-cat personality',
    lifespan: '12 - 16 years',
    temperament: 'Gentle, Docile, Sweet, Trusting',
    careLevel: 'Moderate',
    activityLevel: 'Low to Moderate',
    dietType: 'Obligate Carnivore',
    description: 'Named for their endearing tendency to go completely limp when cuddled, Ragdolls have striking blue eyes, color point coats, and remarkably gentle, trusting natures.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
        title: 'Ragdoll Blue Eyes Portrait',
        tag: 'Blue Eyes'
      },
      {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
        title: 'Ragdoll Cuddling Indoors',
        tag: 'Gentle'
      },
      {
        url: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
        title: 'Ragdoll Fluffy Mane',
        tag: 'Coat Care'
      }
    ],
    careGuide: {
      housing: 'Strictly indoor pet (lacks aggressive defense instincts).',
      exercise: 'Gentle floor play with soft plush mice and wand toys.',
      mentalStimulation: 'Low cat trees, tunnel hideouts, and soft beds.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-12 mo)', frequency: '4 meals/day', diet: 'Large breed kitten diet for continuous steady growth.', portion: '1 cup kibble + 1 can wet' },
      { stage: 'Adult (1-8 yrs)', frequency: '2 meals/day', diet: 'Hairball-control indoor cat recipe.', portion: '2/3 cup kibble + 1 can wet' },
      { stage: 'Senior (8+ yrs)', frequency: '2 meals/day', diet: 'Joint and bladder health senior recipe.', portion: '1/2 cup + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Heart screen', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush twice weekly; semi-long silky coat rarely mats.',
      bathing: 'Bathe every 8-10 weeks.',
      clawTrimming: 'Clip claws every 2-3 weeks.'
    },
    commonHealthTips: [
      'Never allow outdoors unsupervised due to their trusting disposition.',
      'DNA screening recommended for hypertrophic cardiomyopathy (HCM).'
    ]
  },
  {
    id: 'cat-sphynx',
    name: 'Sphynx Cat',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=800&q=80',
    tagline: 'Hairless, warm-hearted, and affectionate velcro feline',
    lifespan: '12 - 15 years',
    temperament: 'Affectionate, Inquisitive, Cuddly, Energetic',
    careLevel: 'High (Skin Care)',
    activityLevel: 'High',
    dietType: 'High-calorie Obligate Carnivore',
    description: 'Famous for their hairless wrinkled skin, oversized ears, and lemon-shaped eyes, Sphynx cats have higher body temperatures and an intense desire for warm human cuddles.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=800&q=80',
        title: 'Sphynx Close Portrait',
        tag: 'Unique'
      },
      {
        url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
        title: 'Sphynx in Warm Blanket',
        tag: 'Cozy'
      },
      {
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        title: 'Sphynx Sunbathing',
        tag: 'Warmth'
      }
    ],
    careGuide: {
      housing: 'Warm indoor home; heated pet beds and sweaters in winter.',
      exercise: 'Active chasing, warm sunbeam naps, climbing cat perches.',
      mentalStimulation: 'Interactive cuddle sessions and puzzle toys.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-6 mo)', frequency: '4-5 meals/day', diet: 'High-calorie kitten formula to fuel high metabolism.', portion: '1 cup kibble + 1 can wet' },
      { stage: 'Adult (1-7 yrs)', frequency: '3 meals/day', diet: 'Energy-dense protein diet (burns more calories to stay warm).', portion: '3/4 cup kibble + 1 can wet' },
      { stage: 'Senior (7+ yrs)', frequency: '2-3 meals/day', diet: 'Easily digestible senior poultry wet food.', portion: '1/2 cup kibble + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Skin check', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable (Hairless).',
      bathing: 'Weekly warm sponge baths with gentle soap to remove natural body oils.',
      earCleaning: 'Clean large ears weekly to remove dark wax buildup.'
    },
    commonHealthTips: [
      'Skin burns easily in direct sun; apply pet-safe sunscreen or limit sun exposure.',
      'Protect from indoor drafts; maintain room temperature above 72°F (22°C).'
    ]
  },
  {
    id: 'cat-scottish-fold',
    name: 'Scottish Fold',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
    tagline: 'Owl-like round eyes, folded ears, and serene sweet disposition',
    lifespan: '11 - 14 years',
    temperament: 'Sweet, Calm, Adaptable, Quiet',
    careLevel: 'Moderate',
    activityLevel: 'Low to Moderate',
    dietType: 'Obligate Carnivore',
    description: 'Renowned for their natural mutation that folds their ears forward and down, Scottish Folds look like delightful little owls. They often sit in the upright Buddha pose.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
        title: 'Scottish Fold Owl Face',
        tag: 'Folded Ears'
      },
      {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
        title: 'Scottish Fold Buddha Pose',
        tag: 'Quirky'
      },
      {
        url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
        title: 'Scottish Fold In Sunbeam',
        tag: 'Serene'
      }
    ],
    careGuide: {
      housing: 'Indoor home with comfortable floor-level beds.',
      exercise: 'Gentle feather play and soft rolling balls.',
      mentalStimulation: 'Quiet window viewing and soft treat dispensers.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-6 mo)', frequency: '3-4 meals/day', diet: 'Kitten formula with glucosamine for cartilage health.', portion: '0.5 cup + 1 can wet' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Joint-support adult recipe with Omega-3 fatty acids.', portion: '1/2 cup kibble + 1 can wet' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Low-calorie senior pate.', portion: '1/3 cup + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Joint mobility check', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush 1-2 times weekly with slicker brush.',
      bathing: 'Bathe as needed (every 2-3 months).',
      earCleaning: 'Check folded ears weekly for wax and debris.'
    },
    commonHealthTips: [
      'Prone to osteochondrodysplasia (cartilage development abnormality); monitor tail and leg flexibility.',
      'Handle tail gently to check for stiffness or discomfort.'
    ]
  },
  {
    id: 'cat-abyssinian',
    name: 'Abyssinian',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
    tagline: 'Clown of the cat kingdom with ticked agouti coat and curious spirit',
    lifespan: '12 - 15 years',
    temperament: 'Inquisitive, Active, Playful, Agile',
    careLevel: 'Moderate',
    activityLevel: 'Very High (Active Climber)',
    dietType: 'Obligate Carnivore',
    description: 'Resembling ancient Egyptian temple paintings, Abyssinians have athletic lithe bodies, large alert ears, and lustrous ticked agouti fur that catches the sunlight.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
        title: 'Abyssinian Agouti Coat',
        tag: 'Agouti Fur'
      },
      {
        url: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
        title: 'Abyssinian High Perch',
        tag: 'Climber'
      },
      {
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        title: 'Abyssinian Alert Stare',
        tag: 'Alert'
      }
    ],
    careGuide: {
      housing: 'Indoor home with tall wall shelves and cat perches.',
      exercise: 'Daily sprint chases, jumping exercises, agility obstacles.',
      mentalStimulation: 'Puzzle mazes and interactive teaser toys.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-6 mo)', frequency: '4 meals/day', diet: 'High-energy kitten formula.', portion: '0.5 cup + 1 can wet' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Lean animal protein with Taurine and L-carnitine.', portion: '2/3 cup kibble + 1 can wet' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Easily chewable senior meat shreds.', portion: '1/2 cup + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Kidney evaluation', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly combing with fine-tooth comb (very low shedding).',
      bathing: 'Rarely required.',
      clawTrimming: 'Clip claws every 2 weeks.'
    },
    commonHealthTips: [
      'Screen for renal amyloidosis and pyruvate kinase deficiency (PKDef).',
      'Provide plenty of vertical space; they love high doors and shelves.'
    ]
  },
  {
    id: 'cat-russian-blue',
    name: 'Russian Blue',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    tagline: 'Emerald eyes, shimmering silver-blue coat, and quiet elegance',
    lifespan: '15 - 20 years',
    temperament: 'Gentle, Quiet, Shy with strangers, Loyal',
    careLevel: 'Easy',
    activityLevel: 'Moderate',
    dietType: 'Obligate Carnivore',
    description: 'Renowned for their shimmering double coat tipped with silver and luminous emerald-green eyes, Russian Blues are tranquil, elegant companions who form deep family bonds.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        title: 'Russian Blue Shimmering Coat',
        tag: 'Silver Coat'
      },
      {
        url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
        title: 'Russian Blue Emerald Eyes',
        tag: 'Emerald Eyes'
      },
      {
        url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
        title: 'Russian Blue Quiet Nap',
        tag: 'Cozy'
      }
    ],
    careGuide: {
      housing: 'Peaceful, stable household environment.',
      exercise: 'Chasing laser pointers and retrieving small felt mice.',
      mentalStimulation: 'Quiet window bird feeders and puzzle boxes.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-6 mo)', frequency: '3-4 meals/day', diet: 'Premium nutrient-dense kitten formula.', portion: '0.5 cup + 1 can wet' },
      { stage: 'Adult (1-8 yrs)', frequency: '2 meals/day', diet: 'Lean protein formula (manage appetite to prevent weight gain).', portion: '1/2 cup kibble + 1 can wet' },
      { stage: 'Senior (8+ yrs)', frequency: '2 meals/day', diet: 'High-moisture senior urinary care formula.', portion: '1/3 cup + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Wellness check', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with soft bristle brush.',
      bathing: 'Rarely needed; meticulous self-groomers.',
      clawTrimming: 'Clip claws every 3 weeks.'
    },
    commonHealthTips: [
      'Low levels of glycoprotein Fel d 1; often better tolerated by mild allergy sufferers.',
      'Thrives on predictable household routines.'
    ]
  },
  {
    id: 'cat-birman',
    name: 'Birman (Sacred Cat of Burma)',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
    tagline: 'Deep blue eyes, pure white gloved paws, and sweet whispering purr',
    lifespan: '12 - 16 years',
    temperament: 'Sweet, Gentle, Quiet, Social',
    careLevel: 'Moderate',
    activityLevel: 'Moderate',
    dietType: 'Obligate Carnivore',
    description: 'Birmans are distinguished by their silky semi-longhair coat, deep sapphire eyes, and distinctive pure-white "gloves" on all four paws. Known for soft, melodious voices.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
        title: 'Birman Blue Eyes & Gloves',
        tag: 'Gloved Paws'
      },
      {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
        title: 'Birman Lounging Silky Coat',
        tag: 'Silky Coat'
      },
      {
        url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
        title: 'Birman Gentle Cuddle',
        tag: 'Affection'
      }
    ],
    careGuide: {
      housing: 'Indoor home with gentle company; dislikes prolonged isolation.',
      exercise: 'Interactive wand games, string chasing.',
      mentalStimulation: 'Climbing trees and cozy tunnel hideaways.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-6 mo)', frequency: '4 meals/day', diet: 'High-protein growth kitten recipe.', portion: '0.5 cup + 1 can wet' },
      { stage: 'Adult (1-8 yrs)', frequency: '2 meals/day', diet: 'Balanced poultry and fish formula for silky coat.', portion: '2/3 cup kibble + 1 can wet' },
      { stage: 'Senior (8+ yrs)', frequency: '2 meals/day', diet: 'Senior pate with joint and kidney balance.', portion: '1/2 cup + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Blood panel', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush 1-2 times weekly; coat lacks undercoat and rarely tangles.',
      bathing: 'Bathe every 8 weeks.',
      clawTrimming: 'Clip claws every 2-3 weeks.'
    },
    commonHealthTips: [
      'Clean white paw gloves if soiled.',
      'Check hydration daily with fresh water fountain.'
    ]
  },
  {
    id: 'cat-norwegian-forest',
    name: 'Norwegian Forest Cat',
    category: 'cat',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
    tagline: 'Viking folklore cat with waterproof double coat and climbing claws',
    lifespan: '14 - 16 years',
    temperament: 'Friendly, Playful, Independent, Robust',
    careLevel: 'Moderate to High',
    activityLevel: 'Moderate to High',
    dietType: 'Obligate Carnivore',
    description: 'Known as the "Skogkatt" in Nordic mythology, Norwegian Forest Cats are large, muscular cats with waterproof overcoats, full ruffs, and exceptional tree-climbing prowess.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
        title: 'Norwegian Forest Cat Winter Coat',
        tag: 'Winter Coat'
      },
      {
        url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
        title: 'Norwegian Forest Climber Stance',
        tag: 'Climber'
      },
      {
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        title: 'Tufted Paws & Tail',
        tag: 'Tufted Paws'
      }
    ],
    careGuide: {
      housing: 'Indoor home with tall multi-level sturdy climbing trees.',
      exercise: 'Climbing, chasing lures, active outdoor catio sessions.',
      mentalStimulation: 'High vantage viewing perches and foraging toys.'
    },
    lifeStageNutrition: [
      { stage: 'Kitten (0-12 mo)', frequency: '4 meals/day', diet: 'High-protein large breed kitten formula.', portion: '1 cup kibble + 1 can wet' },
      { stage: 'Adult (1-8 yrs)', frequency: '2 meals/day', diet: 'Omega-rich salmon recipe for dense double coat.', portion: '3/4 cup kibble + 1 can wet' },
      { stage: 'Senior (8+ yrs)', frequency: '2 meals/day', diet: 'Joint and heart support senior formula.', portion: '1/2 cup + 1 can wet' }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Dose', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (Core)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Cardiac screen', mandatory: true }
    ],
    grooming: {
      brushing: 'Thorough weekly brushing; daily during heavy spring molt.',
      bathing: 'Bathe every 2-3 months.',
      clawTrimming: 'Clip claws every 2 weeks.'
    },
    commonHealthTips: [
      'Screen for Glycogen Storage Disease IV (GSD IV) and HCM.',
      'Provide sturdy wide scratching posts that support their large weight.'
    ]
  }
];
