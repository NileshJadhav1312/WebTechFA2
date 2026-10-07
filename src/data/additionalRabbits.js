// 10 Additional Rabbit Breeds with Complete Profiles and Multi-Image Galleries

export const ADDITIONAL_RABBITS = [
  {
    id: 'rabbit-netherland-dwarf',
    name: 'Netherland Dwarf',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    tagline: 'Tiny, energetic round-faced dwarf bunny with erect ears',
    lifespan: '10 - 12 years',
    temperament: 'Energetic, Feisty, Inquisitive, Alert',
    careLevel: 'Moderate',
    activityLevel: 'High',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'Weighing just 1.5 to 2.5 pounds, the Netherland Dwarf is one of the smallest rabbit breeds in the world. They feature a baby-like round face, short upright ears, and vibrant curiosity.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Netherland Dwarf Tiny Stance',
        tag: 'Dwarf Bunny'
      },
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Netherland Dwarf Eating Timothy Hay',
        tag: 'Hay Diet'
      },
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Netherland Dwarf Hopping',
        tag: 'Playful Hop'
      }
    ],
    careGuide: {
      housing: 'Indoor puppy exercise pen with soft fleece blankets and hiding boxes.',
      exercise: 'Daily free-roam hop time in bunny-proofed room.',
      mentalStimulation: 'Willow chew balls, untreated apple twigs, cardboard castles.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'Unlimited Alfalfa hay and young rabbit alfalfa pellets.', portion: 'Unlimited hay + 1/4 cup pellets' },
      { stage: 'Adult (7 mo - 5 yrs)', frequency: 'Continuous', diet: '85% Timothy hay (unlimited), 1 cup dark leafy greens, measured timothy pellets.', portion: 'Body-sized hay pile + 1/8 cup pellets' },
      { stage: 'Senior (5+ yrs)', frequency: 'Continuous', diet: 'Orchard grass and Timothy hay, easily chewable soft herbs.', portion: 'Unlimited hay + 1/8 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster + Myxomatosis (regions where present)', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with soft slicker brush; daily during seasonal molt.',
      bathing: 'NEVER bathe in water (fatal hypothermia/shock risk); spot-clean only.',
      nailTrimming: 'Trim nails every 4-6 weeks.'
    },
    commonHealthTips: [
      'Gastrointestinal (GI) stasis is an emergency: seek urgent care if bunny stops eating for >8 hours.',
      'Protect all power cords with heavy split-tubing (natural chew instinct).'
    ]
  },
  {
    id: 'rabbit-flemish-giant',
    name: 'Flemish Giant',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
    tagline: 'Gentle giant of the bunny world with dog-like calm disposition',
    lifespan: '8 - 10 years',
    temperament: 'Docile, Calm, Gentle, Patient',
    careLevel: 'Moderate to High (Space & Food)',
    activityLevel: 'Moderate',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'Weighing up to 15-20 pounds, the Flemish Giant is an awe-inspiring breed known as the "Gentle Giant." They are remarkably docile, often coexisting peacefully with family pets.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Flemish Giant Stately Pose',
        tag: 'Giant Breed'
      },
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Flemish Giant Long Ears',
        tag: 'Noble Ears'
      },
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Flemish Giant Relaxing in Room',
        tag: 'Gentle Giant'
      }
    ],
    careGuide: {
      housing: 'Full free-roam bunny room or extra-large dog pen (standard cages far too small).',
      exercise: 'Daily spacious indoor hopping and gentle binkies.',
      mentalStimulation: 'Heavy cardboard boxes, tunnel labyrinths, hay foraging racks.'
    },
    lifeStageNutrition: [
      { stage: 'Young (0-8 mo)', frequency: 'Continuous', diet: 'Unlimited Alfalfa & Timothy hay, high-protein pellets for massive bone growth.', portion: 'Unlimited hay + 1 cup pellets' },
      { stage: 'Adult (8 mo - 5 yrs)', frequency: 'Continuous', diet: 'Unlimited Timothy hay, 2-3 cups fresh leafy greens (romaine, cilantro), measured pellets.', portion: 'Massive hay pile + 1/2 cup pellets' },
      { stage: 'Senior (5+ yrs)', frequency: 'Continuous', diet: 'Mixed meadow grass hay, senior joint support supplements.', portion: 'Unlimited hay + 1/3 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster + Heart check', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush twice weekly with wide slicker brush.',
      bathing: 'Do NOT immerse in water.',
      nailTrimming: 'Trim large nails every 4 weeks.'
    },
    commonHealthTips: [
      'Provide soft carpeted or fleece flooring to prevent pododermatitis (sore hocks) from heavy weight.',
      'Check heart and joint mobility annually due to giant body structure.'
    ]
  },
  {
    id: 'rabbit-mini-rex',
    name: 'Mini Rex',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Plush velvet coat, rounded compact body, and sweet temperament',
    lifespan: '8 - 10 years',
    temperament: 'Friendly, Calm, Sweet, Docile',
    careLevel: 'Easy to Moderate',
    activityLevel: 'Moderate',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'Mini Rex rabbits are famous for their unique fur mutation that feels identical to plush living velvet. They have short, upright guard hairs and sweet, companionable temperaments.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Mini Rex Velvet Coat Portrait',
        tag: 'Velvet Fur'
      },
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Mini Rex Curious Sniff',
        tag: 'Curious'
      },
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Mini Rex Nibbling Greens',
        tag: 'Fresh Greens'
      }
    ],
    careGuide: {
      housing: 'Indoor soft-padded enclosure with non-abrasive rug floor.',
      exercise: 'Daily indoor exploring, jumping onto low ramps.',
      mentalStimulation: 'Stacking cups, foraging treat mats, cardboard tubes.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'Alfalfa hay and timothy pellets.', portion: 'Unlimited hay + 1/3 cup pellets' },
      { stage: 'Adult (7 mo - 6 yrs)', frequency: 'Continuous', diet: 'Unlimited Timothy hay, 1 cup fresh leafy greens, 1/8 cup pellets.', portion: 'Body-sized hay + 1/8 cup pellets' },
      { stage: 'Senior (6+ yrs)', frequency: 'Continuous', diet: 'Soft orchard hay, timothy pellets, joint herbs.', portion: 'Unlimited hay + 1/8 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster', mandatory: true }
    ],
    grooming: {
      brushing: 'Gentle hand-rubbing or damp-cloth wipe; excessive wire brushing damages velvet coat.',
      bathing: 'Never water-bathe.',
      nailTrimming: 'Trim nails every 4 weeks.'
    },
    commonHealthTips: [
      'Rex fur lacks guard hair padding on hocks; ensure thick rugs to prevent sore hocks.',
      'Check molting fur to prevent hair ingestion and gut impaction.'
    ]
  },
  {
    id: 'rabbit-lionhead',
    name: 'Lionhead Rabbit',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    tagline: 'Miniature lion with magnificent wool mane and spirited personality',
    lifespan: '8 - 10 years',
    temperament: 'Friendly, Energetic, Playful, Affectionate',
    careLevel: 'Moderate (Mane Grooming)',
    activityLevel: 'Moderate to High',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'Lionhead rabbits boast a distinct wool mane encircling their head and neck, resembling a miniature lion. They are playful, affectionate, and enjoy gentle human company.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Lionhead Majestic Fluffy Mane',
        tag: 'Wool Mane'
      },
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Lionhead Playing With Willow Ball',
        tag: 'Toy Play'
      },
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Lionhead Grooming Mane',
        tag: 'Mane Care'
      }
    ],
    careGuide: {
      housing: 'Indoor enclosure with soft fleece and clean hay racks.',
      exercise: 'Daily hop and sprint time in bunny-proofed room.',
      mentalStimulation: 'Tunnels, willow branches, treat balls.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'Alfalfa hay, young rabbit pellets, fresh water.', portion: 'Unlimited hay + 1/3 cup pellets' },
      { stage: 'Adult (7 mo - 5 yrs)', frequency: 'Continuous', diet: 'Unlimited Timothy hay (essential to clear ingested wool), 1 cup greens, 1/8 cup pellets.', portion: 'Body-sized hay + 1/8 cup pellets' },
      { stage: 'Senior (5+ yrs)', frequency: 'Continuous', diet: 'Orchard grass, senior pellets, herbal forage.', portion: 'Unlimited hay + 1/8 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster', mandatory: true }
    ],
    grooming: {
      brushing: 'Gently comb wool mane 2-3 times weekly with wide-tooth comb to avoid knots.',
      bathing: 'Never water-bathe.',
      nailTrimming: 'Trim nails every 4-6 weeks.'
    },
    commonHealthTips: [
      'High risk of wool-block in stomach; massive amounts of coarse timothy hay are vital.',
      'Check facial mane around eyes to ensure clear vision.'
    ]
  },
  {
    id: 'rabbit-english-angora',
    name: 'English Angora',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
    tagline: 'Living ball of cloud-soft wool with tufted ears and serene grace',
    lifespan: '7 - 12 years',
    temperament: 'Docile, Calm, Sociable, Serene',
    careLevel: 'High (Daily Grooming)',
    activityLevel: 'Low to Moderate',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'English Angoras resemble floating clouds of silky wool, featuring facial furnishings that almost obscure their eyes and tufted ears. Incredibly docile and patient during grooming.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'English Angora Cloud Wool',
        tag: 'Cloud Wool'
      },
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'English Angora Ear Tassels',
        tag: 'Ear Tassels'
      },
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'English Angora Resting Softly',
        tag: 'Docile'
      }
    ],
    careGuide: {
      housing: 'Clean, spacious indoor enclosure; wood shavings forbidden (tangles wool).',
      exercise: 'Daily gentle hopping in clean, swept rooms.',
      mentalStimulation: 'Foraging puzzles, timothy hay mats.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'High-protein alfalfa hay and pellets to support wool growth.', portion: 'Unlimited hay + 1/2 cup pellets' },
      { stage: 'Adult (7 mo - 5 yrs)', frequency: 'Continuous', diet: 'Tremendous quantities of coarse Timothy hay (prevents fatal wool block), daily fresh greens.', portion: 'Unlimited coarse hay + 1/4 cup pellets' },
      { stage: 'Senior (5+ yrs)', frequency: 'Continuous', diet: 'High-fiber hay blends, digestive papaya enzyme treats, timothy pellets.', portion: 'Unlimited hay + 1/4 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster', mandatory: true }
    ],
    grooming: {
      brushing: 'Daily gentle grooming with slicker brush and blower; shear coat every 90 days.',
      bathing: 'Never water-bathe.',
      nailTrimming: 'Trim nails monthly.'
    },
    commonHealthTips: [
      'Wool block is the #1 medical danger; coarse fiber hay must be available 24/7 without fail.',
      'Keep wool trimmed around anal area to prevent flystrike.'
    ]
  },
  {
    id: 'rabbit-harlequin',
    name: 'Harlequin Rabbit',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Distinctive clown-patterned coat with split face and playful intelligence',
    lifespan: '8 - 11 years',
    temperament: 'Curious, Intelligent, Playful, Docile',
    careLevel: 'Easy to Moderate',
    activityLevel: 'Moderate to High',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'Originally bred in France, Harlequin rabbits are famous for their remarkable split-face and alternating banded coat colors (orange and black or fawn and blue). Highly trainable and curious.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Harlequin Split-Face Pattern',
        tag: 'Harlequin Pattern'
      },
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Harlequin Rabbit Inquisitive Stance',
        tag: 'Inquisitive'
      },
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Harlequin Binky Jump',
        tag: 'Binky'
      }
    ],
    careGuide: {
      housing: 'Spacious playpen or free-roam bunny room.',
      exercise: 'Daily active running, binkies, agility obstacle hopping.',
      mentalStimulation: 'Obstacle courses, stacking cups, cardboard forage.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'Alfalfa hay and young pellets.', portion: 'Unlimited hay + 1/2 cup pellets' },
      { stage: 'Adult (7 mo - 6 yrs)', frequency: 'Continuous', diet: 'Unlimited Timothy hay, 1.5 cups fresh herbs & leafy greens, 1/4 cup pellets.', portion: 'Unlimited hay + 1/4 cup pellets' },
      { stage: 'Senior (6+ yrs)', frequency: 'Continuous', diet: 'Timothy and meadow hay, digestive herbs.', portion: 'Unlimited hay + 1/4 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing; daily during seasonal spring molt.',
      bathing: 'Never water-bathe.',
      nailTrimming: 'Trim nails every 4 weeks.'
    },
    commonHealthTips: [
      'Quick learners; easily litter-box trained using positive reinforcement and hay placement in box.',
      'Check teeth alignment biannually.'
    ]
  },
  {
    id: 'rabbit-dutch',
    name: 'Dutch Rabbit',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    tagline: 'Iconic tuxedo-blaze markings, compact build, and calm temperament',
    lifespan: '8 - 12 years',
    temperament: 'Calm, Affectionate, Easygoing, Gentle',
    careLevel: 'Easy',
    activityLevel: 'Moderate',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'One of the oldest and most beloved domestic breeds, Dutch rabbits feature distinct white facial blazes, white saddle neck bands, and colored rear quarters. Ideal for first-time owners.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Dutch Rabbit Classic Blaze Markings',
        tag: 'Tuxedo Blaze'
      },
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Dutch Rabbit Calm Cuddle',
        tag: 'Gentle'
      },
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Dutch Rabbit Exploring Floor',
        tag: 'Explore'
      }
    ],
    careGuide: {
      housing: 'Indoor puppy playpen with soft rugs.',
      exercise: 'Daily room hopping and gentle human interaction.',
      mentalStimulation: 'Tunnel runs, hay balls, untreated apple twigs.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'Alfalfa hay and pellets.', portion: 'Unlimited hay + 1/3 cup pellets' },
      { stage: 'Adult (7 mo - 6 yrs)', frequency: 'Continuous', diet: 'Unlimited Timothy hay, 1 cup dark greens (cilantro, romaine, basil), 1/8 cup pellets.', portion: 'Body-sized hay + 1/8 cup pellets' },
      { stage: 'Senior (6+ yrs)', frequency: 'Continuous', diet: 'Orchard grass, senior pellets, chamomile blossoms.', portion: 'Unlimited hay + 1/8 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with slicker brush.',
      bathing: 'Never water-bathe.',
      nailTrimming: 'Trim nails every 4 weeks.'
    },
    commonHealthTips: [
      'Very calm and friendly, making them outstanding companion pets.',
      'Ensure constant access to heavy ceramic water bowls.'
    ]
  },
  {
    id: 'rabbit-mini-lop',
    name: 'Mini Lop',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
    tagline: 'Cuddly basketball-shaped body with plush fur and drooping ears',
    lifespan: '9 - 12 years',
    temperament: 'Playful, Affectionate, Docile, Cheerful',
    careLevel: 'Easy to Moderate',
    activityLevel: 'Moderate',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'Mini Lops are slightly larger and rounder than Holland Lops, known as the "basketball on legs" due to their compact muscular bodies, soft drooping ears, and playful disposition.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Mini Lop Floppy Ears Portrait',
        tag: 'Floppy Ears'
      },
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Mini Lop Sitting Like Basketball',
        tag: 'Round Body'
      },
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Mini Lop Snuggling Under Blanket',
        tag: 'Snuggle'
      }
    ],
    careGuide: {
      housing: 'Indoor exercise pen with non-slip flooring.',
      exercise: 'Daily free-roam hopping, tunnel exploration.',
      mentalStimulation: 'Untreated willow sticks, cardboard tubes with hay.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'Alfalfa hay and young pellets.', portion: 'Unlimited hay + 1/2 cup pellets' },
      { stage: 'Adult (7 mo - 6 yrs)', frequency: 'Continuous', diet: 'Unlimited Timothy hay, 1-2 cups fresh greens, 1/4 cup pellets.', portion: 'Unlimited hay + 1/4 cup pellets' },
      { stage: 'Senior (6+ yrs)', frequency: 'Continuous', diet: 'Soft meadow hay, joint care pellets.', portion: 'Unlimited hay + 1/4 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster + Ear check', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush 1-2 times weekly; daily during seasonal coat blow.',
      bathing: 'Never water-bathe.',
      earCleaning: 'Clean base of drooping ears monthly for wax accumulation.'
    },
    commonHealthTips: [
      'Drooping lop ears can trap moisture; check for ear mites and infection monthly.',
      'Keep nails trimmed to prevent posture strain on ankles.'
    ]
  },
  {
    id: 'rabbit-californian',
    name: 'Californian Rabbit',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Snow-white coat with Himalayan dark points and ruby eyes',
    lifespan: '8 - 10 years',
    temperament: 'Calm, Docile, Quiet, Easygoing',
    careLevel: 'Easy to Moderate',
    activityLevel: 'Moderate',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'Bred in Southern California, Californian rabbits have a pure white dense coat with contrasting chocolate-black markings on their nose, upright ears, feet, and tail, paired with ruby-pink eyes.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Californian Dark Point Markings',
        tag: 'Point Markings'
      },
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Californian Rabbit Foraging',
        tag: 'Foraging'
      },
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Californian Rabbit Resting',
        tag: 'Calm'
      }
    ],
    careGuide: {
      housing: 'Spacious indoor enclosure with soft carpeted floor.',
      exercise: 'Daily hopping, binkies, and stretching.',
      mentalStimulation: 'Willow chew mats, wooden tunnels, hay racks.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'Alfalfa hay and young rabbit pellets.', portion: 'Unlimited hay + 1/2 cup pellets' },
      { stage: 'Adult (7 mo - 5 yrs)', frequency: 'Continuous', diet: 'Unlimited Timothy hay, 2 cups fresh leafy greens, 1/4 cup pellets.', portion: 'Unlimited hay + 1/4 cup pellets' },
      { stage: 'Senior (5+ yrs)', frequency: 'Continuous', diet: 'Timothy and orchard grass, joint supplements.', portion: 'Unlimited hay + 1/4 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with slicker brush.',
      bathing: 'Never water-bathe.',
      nailTrimming: 'Trim nails every 4 weeks.'
    },
    commonHealthTips: [
      'Very calm and docile, making them gentle family companions.',
      'Ruby eyes have slightly reduced visual acuity; approach gently so as not to startle.'
    ]
  },
  {
    id: 'rabbit-rex',
    name: 'Standard Rex Rabbit',
    category: 'rabbit',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    tagline: 'Medium-large velvety hare with curly whiskers and friendly charm',
    lifespan: '8 - 11 years',
    temperament: 'Intelligent, Friendly, Playful, Maternal',
    careLevel: 'Moderate',
    activityLevel: 'Moderate to High',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'The Standard Rex is larger than the Mini Rex (weighing 7.5 to 10.5 lbs) and boasts the original luxurious plush velvet coat and delightfully crinkled whiskers that define the Rex mutation.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Standard Rex Plush Coat Portrait',
        tag: 'Plush Velvet'
      },
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Standard Rex Inquisitive Pose',
        tag: 'Inquisitive'
      },
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Standard Rex Munching Cilantro',
        tag: 'Fresh Greens'
      }
    ],
    careGuide: {
      housing: 'Extra-large playpen or free-roam bunny room with thick cushioned rugs.',
      exercise: 'Daily active running and binkies.',
      mentalStimulation: 'Complex cardboard tunnels, willow bridges, forage mats.'
    },
    lifeStageNutrition: [
      { stage: 'Kit (0-7 mo)', frequency: 'Continuous', diet: 'Alfalfa hay and young pellets.', portion: 'Unlimited hay + 1/2 cup pellets' },
      { stage: 'Adult (7 mo - 6 yrs)', frequency: 'Continuous', diet: 'Unlimited Timothy hay, 2 cups dark leafy greens, 1/4 cup pellets.', portion: 'Unlimited hay + 1/4 cup pellets' },
      { stage: 'Senior (6+ yrs)', frequency: 'Continuous', diet: 'Orchard grass, senior fiber pellets, digestive herbs.', portion: 'Unlimited hay + 1/4 cup pellets' }
    ],
    vaccinations: [
      { age: '6 Weeks', vaccine: 'RHDV2 Vaccine 1st Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster + Hock check', mandatory: true }
    ],
    grooming: {
      brushing: 'Gentle hand-rubbing and soft bristle brush once weekly.',
      bathing: 'Never water-bathe.',
      nailTrimming: 'Trim nails every 4 weeks.'
    },
    commonHealthTips: [
      'Heavier Rex body requires soft padded surfaces to protect against sore hocks.',
      'Known for outstanding maternal and affectionate instincts.'
    ]
  }
];
