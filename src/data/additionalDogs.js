// 10 Additional Dog Breeds with Complete Profiles and Multi-Image Galleries

export const ADDITIONAL_DOGS = [
  {
    id: 'dog-labrador',
    name: 'Labrador Retriever',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1579213838056-bf5d554a9a0d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Gentle, outgoing, and spirited water retriever',
    lifespan: '10 - 12 years',
    temperament: 'Friendly, Active, Outgoing, Even-tempered',
    careLevel: 'Moderate',
    activityLevel: 'High (60-90 mins/day)',
    dietType: 'High-protein omnivore',
    description: 'The Labrador Retriever is the quintessential family dog and versatile service breed. Renowned for their athletic build, webbed paws for swimming, and warm personality.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1579213838056-bf5d554a9a0d?auto=format&fit=crop&w=800&q=80',
        title: 'Yellow Lab Portrait',
        tag: 'Adult Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=800&q=80',
        title: 'Black Lab Outdoor Retrieve',
        tag: 'Outdoor'
      },
      {
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
        title: 'Playful Lab Pup in Grass',
        tag: 'Puppy'
      }
    ],
    careGuide: {
      housing: 'Suburban home with yard or active urban living with daily park access.',
      exercise: 'Daily swimming, retrieving games, and long brisk walks.',
      mentalStimulation: 'Puzzle feeders, scent work, and obedience drills.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'Large-breed puppy formula with calcium control.', portion: '2 - 3 cups daily' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Weight-conscious adult kibble to prevent obesity.', portion: '2.5 - 3.5 cups daily' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Glucosamine-enriched senior joint diet.', portion: '2 - 2.5 cups daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Leptospirosis', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Heartworm Check', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush twice weekly with slicker brush; daily during seasonal coat blows.',
      bathing: 'Every 4-6 weeks with hydrating dog shampoo.',
      nailTrimming: 'Trim every 3 weeks.'
    },
    commonHealthTips: [
      'Labs love to overeat; monitor food intake strictly.',
      'Dry floppy ears thoroughly after swimming to avoid yeast infections.'
    ]
  },
  {
    id: 'dog-husky',
    name: 'Siberian Husky',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=800&q=80',
    tagline: 'Stunning, vocal, and tireless arctic endurance runner',
    lifespan: '12 - 14 years',
    temperament: 'Loyal, Mischievous, Playful, Outgoing',
    careLevel: 'High (Activity & Coat)',
    activityLevel: 'Very High (90+ mins/day)',
    dietType: 'High-protein omnivore',
    description: 'Bred in Northeast Asia by the Chukchi people, Siberian Huskies are renowned for their striking almond eyes, dramatic masks, and incredible endurance.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=800&q=80',
        title: 'Husky Snow Stance',
        tag: 'Winter Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1590419690008-905895e8fe0d?auto=format&fit=crop&w=800&q=80',
        title: 'Blue-Eyed Husky Gaze',
        tag: 'Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&w=800&q=80',
        title: 'Husky Running Outdoors',
        tag: 'Active'
      }
    ],
    careGuide: {
      housing: 'Cool climate, secure 6-foot fence (skilled escape artists).',
      exercise: 'Daily trail running, bikejoring, or hiking.',
      mentalStimulation: 'Working tasks, pulling exercises, interactive toys.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'High-protein puppy kibble.', portion: '1.5 - 2.5 cups daily' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Performance athletic diet with salmon oils.', portion: '2 - 3 cups daily' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Lean protein senior mix with joint support.', portion: '1.5 - 2 cups daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Lyme Disease', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'Rabies + DHPP 3rd Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Deworming', mandatory: true }
    ],
    grooming: {
      brushing: 'Daily undercoat rake brushing; NEVER shave their double coat.',
      bathing: '3-4 times a year; coats stay naturally clean.',
      nailTrimming: 'Trim nails monthly.'
    },
    commonHealthTips: [
      'Double coat protects against heat and cold; shaving destroys temperature regulation.',
      'Always keep on leash or in enclosed areas due to high prey drive.'
    ]
  },
  {
    id: 'dog-french-bulldog',
    name: 'French Bulldog',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Charming, compact, and bat-eared city companion',
    lifespan: '10 - 12 years',
    temperament: 'Playful, Adaptable, Alert, Affectionate',
    careLevel: 'Moderate',
    activityLevel: 'Low to Moderate (30-45 mins/day)',
    dietType: 'Omnivore',
    description: 'French Bulldogs are compact miniature bulldogs with trademark bat ears and affectionate dispositions. They are one of the world’s top apartment breeds.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80',
        title: 'Frenchie Studio Portrait',
        tag: 'Studio Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80',
        title: 'Fawn French Bulldog Lounging',
        tag: 'Relaxed'
      },
      {
        url: 'https://images.unsplash.com/photo-1563889958769-a0dd06a2e212?auto=format&fit=crop&w=800&q=80',
        title: 'Playful Frenchie Indoors',
        tag: 'Play'
      }
    ],
    careGuide: {
      housing: 'Apartment friendly; air conditioning mandatory in summer.',
      exercise: 'Gentle morning and evening strolls (avoid midday heat).',
      mentalStimulation: 'Snuffle mats and puzzle chew toys.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'Small-breed puppy kibble with prebiotics.', portion: '1 - 1.5 cups daily' },
      { stage: 'Adult (1-8 yrs)', frequency: '2 meals/day', diet: 'Portion-controlled diet to prevent spinal stress.', portion: '1.25 - 1.75 cups daily' },
      { stage: 'Senior (8+ yrs)', frequency: '2 meals/day', diet: 'Low-calorie joint maintenance kibble.', portion: '1 cup daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP Booster + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Heartworm check', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with rubber curry mitt.',
      bathing: 'Bathe monthly; clean facial skin folds daily with antiseptic wipes.',
      nailTrimming: 'Trim nails every 2-3 weeks.'
    },
    commonHealthTips: [
      'Brachycephalic breed prone to overheating; keep cool during warm weather.',
      'Frenchies cannot swim due to dense bone mass and short legs; never leave near pools.'
    ]
  },
  {
    id: 'dog-poodle',
    name: 'Standard Poodle',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Exceptionally intelligent, athletic, and hypoallergenic canine',
    lifespan: '12 - 15 years',
    temperament: 'Intelligent, Active, Alert, Trainable',
    careLevel: 'High (Coat Grooming)',
    activityLevel: 'High (60 mins/day)',
    dietType: 'Omnivore',
    description: 'Standard Poodles are amongst the smartest dog breeds in existence. Behind their elegant curls lies a vigorous, athletic retriever that excels in agility.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
        title: 'Proud Standard Poodle Stance',
        tag: 'Show Coat'
      },
      {
        url: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800&q=80',
        title: 'Poodle Playing Outdoors',
        tag: 'Active'
      },
      {
        url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
        title: 'Poodle Puppy Close-up',
        tag: 'Puppy'
      }
    ],
    careGuide: {
      housing: 'Family homes with yard access or frequent park visits.',
      exercise: 'Daily fetching, swimming, obedience workouts.',
      mentalStimulation: 'Advanced trick training and agility courses.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'Nutrient-rich formula for lean muscle growth.', portion: '1.5 - 2.5 cups daily' },
      { stage: 'Adult (1-8 yrs)', frequency: '2 meals/day', diet: 'High-protein grain-free or ancient grain diet.', portion: '2.5 - 3 cups daily' },
      { stage: 'Senior (8+ yrs)', frequency: '2 meals/day', diet: 'Easily digestible senior blend.', portion: '2 cups daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Bordetella', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Wellness screen', mandatory: true }
    ],
    grooming: {
      brushing: 'Daily line brushing with slicker brush to prevent mats.',
      bathing: 'Professional grooming haircut and bath every 4-6 weeks.',
      nailTrimming: 'Trim nails monthly.'
    },
    commonHealthTips: [
      'Non-shedding coat continually grows; requires professional grooming commitment.',
      'Check ears weekly for ear hair accumulation and moisture.'
    ]
  },
  {
    id: 'dog-rottweiler',
    name: 'Rottweiler',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&w=800&q=80',
    tagline: 'Confident, powerful, and deeply devoted guardian dog',
    lifespan: '9 - 11 years',
    temperament: 'Confident, Good-natured, Fearless, Alert',
    careLevel: 'Moderate',
    activityLevel: 'Moderate to High (60 mins/day)',
    dietType: 'High-protein omnivore',
    description: 'A robust working breed descending from Roman drover dogs, Rottweilers are calm, confident protectors known for immense loyalty to their family unit.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&w=800&q=80',
        title: 'Rottweiler Portrait',
        tag: 'Guardian'
      },
      {
        url: 'https://images.unsplash.com/photo-1546255701-d72491516e87?auto=format&fit=crop&w=800&q=80',
        title: 'Rottweiler on Grass',
        tag: 'Outdoor'
      },
      {
        url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
        title: 'Rottweiler Alert Stance',
        tag: 'Alert'
      }
    ],
    careGuide: {
      housing: 'Spacious home with sturdy fenced yard.',
      exercise: 'Daily brisk walks, trotting, weight-pulling exercises.',
      mentalStimulation: 'Obedience training, tracking, and scent puzzles.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'Giant breed puppy kibble with controlled calcium.', portion: '2.5 - 3.5 cups daily' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Muscle-building adult formula with prebiotics.', portion: '3.5 - 4.5 cups daily' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Reduced-fat senior recipe with joint support.', portion: '2.5 - 3 cups daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Leptospirosis', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Cardiac check', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with firm bristle brush.',
      bathing: 'Bathe every 6 weeks or as needed.',
      nailTrimming: 'Trim thick nails every 2-3 weeks.'
    },
    commonHealthTips: [
      'Early socialization and positive obedience training are mandatory.',
      'Allow resting after eating to avoid gastric dilatation-volvulus (bloat).'
    ]
  },
  {
    id: 'dog-boxer',
    name: 'Boxer',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    tagline: 'Playful, muscular, and boundless clown of the canine world',
    lifespan: '10 - 12 years',
    temperament: 'Playful, Energetic, Devoted, Friendly',
    careLevel: 'Moderate',
    activityLevel: 'High (60-90 mins/day)',
    dietType: 'High-protein omnivore',
    description: 'Boxers are muscular, athletic dogs with distinctive squarish heads and an infectious sense of fun. They remain playful puppies well into their adulthood.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
        title: 'Boxer Cheerful Face',
        tag: 'Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
        title: 'Boxer Field Run',
        tag: 'High Energy'
      },
      {
        url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
        title: 'Boxer Standing Proudly',
        tag: 'Alert'
      }
    ],
    careGuide: {
      housing: 'Home with securely fenced yard; indoor sleep.',
      exercise: 'Fetch sessions, agility obstacle runs, brisk hiking.',
      mentalStimulation: 'Interactive play and structured commands.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'High-density growth kibble.', portion: '2 - 3 cups daily' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Lean protein formula with taurine for heart health.', portion: '3 - 4 cups daily' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Senior cardiac and joint formula.', portion: '2 - 2.5 cups daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Leptospirosis', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Heart screen', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with rubber hound glove.',
      bathing: 'Bathe every 4-6 weeks.',
      nailTrimming: 'Trim nails every 3 weeks.'
    },
    commonHealthTips: [
      'Prone to heat exhaustion; avoid strenuous exercise in midday humidity.',
      'Schedule annual heart evaluations due to breed predisposition to cardiomyopathy.'
    ]
  },
  {
    id: 'dog-dachshund',
    name: 'Dachshund',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=800&q=80',
    tagline: 'Spunky, elongated, and courageous badger hound',
    lifespan: '12 - 16 years',
    temperament: 'Clever, Stubborn, Playful, Courageous',
    careLevel: 'Easy to Moderate',
    activityLevel: 'Moderate (45 mins/day)',
    dietType: 'Omnivore',
    description: 'Instantly recognizable by their long silhouette and short legs, Dachshunds were originally bred in Germany to dig out burrow-dwelling badgers. Spunky and fiercely loyal.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=800&q=80',
        title: 'Smooth Coat Dachshund Portrait',
        tag: 'Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
        title: 'Dachshund Curious Sniff',
        tag: 'Trail'
      },
      {
        url: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80',
        title: 'Dachshund Cozy Nap',
        tag: 'Relaxed'
      }
    ],
    careGuide: {
      housing: 'Apartments and houses; ramps needed for couches/beds.',
      exercise: 'Daily moderate walking on flat ground; avoid stairs.',
      mentalStimulation: 'Scent games and tunneling cardboard tubes.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'Small breed puppy recipe.', portion: '0.75 - 1 cup daily' },
      { stage: 'Adult (1-8 yrs)', frequency: '2 meals/day', diet: 'Portion-controlled diet to prevent back strain.', portion: '1 - 1.25 cups daily' },
      { stage: 'Senior (8+ yrs)', frequency: '2 meals/day', diet: 'Light senior formula rich in fiber.', portion: '0.75 cup daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Spine check', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing for smooth coat; 2-3x for wirehaired/longhaired.',
      bathing: 'Bathe every 6 weeks.',
      nailTrimming: 'Trim nails every 2-3 weeks.'
    },
    commonHealthTips: [
      'Support both ends when picking up; never allow them to jump off high beds to avoid IVDD (disc disease).',
      'Maintain trim body weight to safeguard elongated spine.'
    ]
  },
  {
    id: 'dog-corgi',
    name: 'Pembroke Welsh Corgi',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&w=800&q=80',
    tagline: 'Affectionate, spirited, and sharp-witted royal herder',
    lifespan: '12 - 14 years',
    temperament: 'Friendly, Bold, Tenacious, Playful',
    careLevel: 'Moderate',
    activityLevel: 'High (60 mins/day)',
    dietType: 'Omnivore',
    description: 'Renowned as the beloved breed of Queen Elizabeth II, Corgis are alert herding dogs with low silhouettes, muscular thighs, and a famously cheerful disposition.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&w=800&q=80',
        title: 'Corgi Smiling Face',
        tag: 'Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5455?auto=format&fit=crop&w=800&q=80',
        title: 'Corgi Running in Park',
        tag: 'Outdoor'
      },
      {
        url: 'https://images.unsplash.com/photo-1546255701-d72491516e87?auto=format&fit=crop&w=800&q=80',
        title: 'Corgi Attentive Ears',
        tag: 'Alert'
      }
    ],
    careGuide: {
      housing: 'Adaptable to urban or farm settings; daily exercise essential.',
      exercise: 'Moderate walks, agility, herding ball games.',
      mentalStimulation: 'Learn commands rapidly; obedience courses.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'Medium-breed puppy diet.', portion: '1 - 1.5 cups daily' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'Calorie-regulated maintenance recipe.', portion: '1.5 - 2 cups daily' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Senior joint diet with chondroitin.', portion: '1.25 cups daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Leptospirosis', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Deworming', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush 2-3 times weekly with slicker brush; daily when shedding.',
      bathing: 'Bathe every 4-6 weeks.',
      nailTrimming: 'Trim nails every 3 weeks.'
    },
    commonHealthTips: [
      'Prone to rapid weight gain; strictly limit table treats.',
      'Check paw pads after rural hikes for stickers and debris.'
    ]
  },
  {
    id: 'dog-doberman',
    name: 'Doberman Pinscher',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    tagline: 'Sleek, fearless, and intensely loyal personal protector',
    lifespan: '10 - 12 years',
    temperament: 'Intelligent, Alert, Confident, Loyal',
    careLevel: 'Moderate',
    activityLevel: 'Very High (90 mins/day)',
    dietType: 'High-protein omnivore',
    description: 'Sleek, muscular, and quick on their feet, Doberman Pinschers are world-class guard and service dogs with intense loyalty toward their trusted handlers.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
        title: 'Doberman Regal Stance',
        tag: 'Regal'
      },
      {
        url: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80',
        title: 'Doberman Running Free',
        tag: 'Sprint'
      },
      {
        url: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
        title: 'Doberman Training Stance',
        tag: 'Training'
      }
    ],
    careGuide: {
      housing: 'Home with high fencing; sensitive to freezing outdoor cold.',
      exercise: 'Daily distance running, biking companion, tracking.',
      mentalStimulation: 'Advanced obedience drills, agility, nosework.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3 meals/day', diet: 'Large-breed athletic puppy kibble.', portion: '2.5 - 3 cups daily' },
      { stage: 'Adult (1-7 yrs)', frequency: '2 meals/day', diet: 'High-protein poultry and salmon diet.', portion: '3.5 - 4.5 cups daily' },
      { stage: 'Senior (7+ yrs)', frequency: '2 meals/day', diet: 'Lean senior formula with cardiac support.', portion: '2.5 - 3 cups daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Leptospirosis', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Cardiac evaluation', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with soft bristle brush.',
      bathing: 'Bathe every 6-8 weeks.',
      nailTrimming: 'Trim nails every 2-3 weeks.'
    },
    commonHealthTips: [
      'Provide warm winter coats in snowy climates due to thin single coat.',
      'Regular cardio screen recommended for dilated cardiomyopathy.'
    ]
  },
  {
    id: 'dog-shih-tzu',
    name: 'Shih Tzu',
    category: 'dog',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    tagline: 'Affectionate, regal, and sweet-tempered companion lion dog',
    lifespan: '10 - 16 years',
    temperament: 'Affectionate, Playful, Outgoing, Gentle',
    careLevel: 'Moderate to High (Coat)',
    activityLevel: 'Low to Moderate (30 mins/day)',
    dietType: 'Omnivore',
    description: 'Bred originally for Chinese emperors, Shih Tzus are delightful toy companions known for their flowing locks, sweet expressions, and playful lap-dog affection.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
        title: 'Shih Tzu Lap Dog Portrait',
        tag: 'Companion'
      },
      {
        url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
        title: 'Shih Tzu in Living Room',
        tag: 'Indoor'
      },
      {
        url: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=800&q=80',
        title: 'Shih Tzu Garden Trot',
        tag: 'Garden'
      }
    ],
    careGuide: {
      housing: 'Ideal for city apartments and quiet households.',
      exercise: 'Short pleasant strolls and indoor interactive play.',
      mentalStimulation: 'Gentle trick learning and cuddles.'
    },
    lifeStageNutrition: [
      { stage: 'Puppy (0-6 mo)', frequency: '3-4 meals/day', diet: 'Toy breed puppy micro-kibble.', portion: '0.5 - 0.75 cup daily' },
      { stage: 'Adult (1-9 yrs)', frequency: '2 meals/day', diet: 'Small breed formula with dental tartar support.', portion: '0.75 - 1 cup daily' },
      { stage: 'Senior (9+ yrs)', frequency: '2 meals/day', diet: 'Softened senior kibble or wet food.', portion: '0.5 - 0.75 cup daily' }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Dental exam', mandatory: true }
    ],
    grooming: {
      brushing: 'Daily combing or maintain in a clean short puppy cut.',
      bathing: 'Bathe every 3-4 weeks with conditioning shampoo.',
      nailTrimming: 'Trim nails every 3 weeks.'
    },
    commonHealthTips: [
      'Gently wipe eyes daily with sterile damp cloth to remove tear staining.',
      'Keep indoor temperature moderate as brachycephalic snout is sensitive to heat.'
    ]
  }
];
