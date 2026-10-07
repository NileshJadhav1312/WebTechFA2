// Comprehensive static pet care data categorized by age in days
// Used by the Pet Care Plan Calculator to project dynamic schedules, nutrition, and grooming.

import { PET_DATA } from './petData';

export const PET_CARE_PLANS = {
  'dog-golden-retriever': {
    petId: 'dog-golden-retriever',
    petName: 'Golden Retriever',
    category: 'dog',
    speciesLabel: 'Canine (Large Breed)',
    lifeStages: [
      {
        minDays: 0,
        maxDays: 60,
        stage: 'Early Puppyhood (0-2 Months)',
        description: 'Critical nursing and weaning phase. Rapid maternal antibody transition.',
        diet: 'Mother milk transition to moistened large-breed puppy starter kibble.',
        mealsPerDay: '4 meals daily',
        portion: '1.0 - 1.5 cups divided',
        grooming: 'Gentle handling, soft-brush acclimation, no full baths unless soiled.',
        exercise: 'Short indoor play sessions (5-10 mins). Gentle bonding.'
      },
      {
        minDays: 61,
        maxDays: 180,
        stage: 'Primary Growth & Socialization (2-6 Months)',
        description: 'Teething phase, high bone growth rate, core socialization window.',
        diet: 'Large-breed puppy formula with strictly balanced calcium (1.1-1.3%) & DHA.',
        mealsPerDay: '3 meals daily',
        portion: '2.0 - 2.5 cups daily',
        grooming: 'Brush 3 times a week with undercoat rake; introduce nail trimmer & toothbrush.',
        exercise: '15-25 minutes structured walking twice daily; puppy socialization classes.'
      },
      {
        minDays: 181,
        maxDays: 540,
        stage: 'Adolescent & Young Adult (6-18 Months)',
        description: 'Hormonal maturation, permanent teeth set, high energy levels.',
        diet: 'Transition to young adult high-protein formula rich in Glucosamine and Chondroitin.',
        mealsPerDay: '2 meals daily',
        portion: '3.0 - 3.5 cups daily',
        grooming: 'Daily brushing during spring/fall shedding; bathe every 4-6 weeks with oatmeal shampoo.',
        exercise: '45-60 minutes daily: retrieve games, agility, swimming.'
      },
      {
        minDays: 541,
        maxDays: 2555,
        stage: 'Prime Adult (1.5 - 7 Years)',
        description: 'Peak muscular condition and emotional stability. Joint maintenance vital.',
        diet: 'Balanced adult maintenance diet with lean poultry/salmon, Omega-3 fatty acids.',
        mealsPerDay: '2 meals daily',
        portion: '3.0 - 3.75 cups daily',
        grooming: 'Undercoat raking 3-4 times weekly; monthly nail trims; weekly ear cleaning after swims.',
        exercise: '60-90 minutes daily: brisk walks, off-leash fetch in secure areas, dock diving.'
      },
      {
        minDays: 2556,
        maxDays: 6000,
        stage: 'Senior Companion (7+ Years)',
        description: 'Lower metabolic rate, arthritis monitoring, cognitive wellness.',
        diet: 'Lower-calorie senior kibble enriched with EPA/DHA, joint protectors, and L-carnitine.',
        mealsPerDay: '2 smaller meals daily',
        portion: '2.0 - 2.5 cups daily',
        grooming: 'Gentle daily brushing to stimulate blood flow; warm baths; orthopedic bedding.',
        exercise: 'Low-impact gentle 20-30 min walks; swimming; cognitive puzzle games.'
      }
    ],
    vaccinations: [
      {
        id: 'dhpp-1',
        name: 'DHPP Core 1st Dose',
        targetDays: 45,
        category: 'Core Vaccine',
        description: 'Protects against Distemper, Hepatitis, Parvovirus, and Parainfluenza.'
      },
      {
        id: 'dhpp-2',
        name: 'DHPP Core 2nd Dose + Bordetella',
        targetDays: 75,
        category: 'Core Vaccine',
        description: 'Booster for Parvo immunity plus kennel cough respiratory defense.'
      },
      {
        id: 'dhpp-3-rabies',
        name: 'DHPP 3rd Booster + Rabies (1st Dose)',
        targetDays: 110,
        category: 'Mandatory Vaccine',
        description: 'Complete puppy series booster + legal core rabies vaccination.'
      },
      {
        id: 'annual-booster-1',
        name: 'Annual DHPP & Rabies Booster (Year 1)',
        targetDays: 365,
        category: 'Annual Booster',
        description: 'First annual adult immunity confirmation and physical wellness exam.'
      },
      {
        id: 'annual-booster-2',
        name: 'Annual Rabies & Triennial DHPP Booster',
        targetDays: 730,
        category: 'Annual Booster',
        description: 'Scheduled adult preventative cycle and comprehensive blood panel.'
      }
    ],
    groomingSchedule: [
      { task: 'Undercoat De-shedding Rake', intervalDays: 3, duration: '15 mins' },
      { task: 'Hypoallergenic Oatmeal Bath', intervalDays: 30, duration: '40 mins' },
      { task: 'Nail Trim & Paw Pad Balm', intervalDays: 21, duration: '15 mins' },
      { task: 'Enzymatic Tooth Brushing', intervalDays: 2, duration: '5 mins' },
      { task: 'Ear Canal Drying & Cleaning', intervalDays: 7, duration: '10 mins' }
    ],
    dewormingSchedule: [
      { task: 'Puppy Deworming Course (Pyrantel)', targetDays: 42 },
      { task: 'Follow-up Broad Spectrum Deworming', targetDays: 84 },
      { task: 'Monthly Heartworm & Tick Spot-on', targetDays: 120, recurringIntervalDays: 30 }
    ]
  },

  'cat-persian': {
    petId: 'cat-persian',
    petName: 'Persian Cat',
    category: 'cat',
    speciesLabel: 'Feline (Long-Haired)',
    lifeStages: [
      {
        minDays: 0,
        maxDays: 60,
        stage: 'Kitten Weaning (0-2 Months)',
        description: 'Mother milk to starter kitten mousse; facial fold cleaning introduction.',
        diet: 'Kitten milk replacer transitioning to high-protein kitten pate.',
        mealsPerDay: '4-5 small meals daily',
        portion: '1 can pate + 1/4 cup kitten kibble',
        grooming: 'Soft facial wipes daily; introduce baby slicker brush gently.',
        exercise: 'Warm indoor exploratory play (10 mins).'
      },
      {
        minDays: 61,
        maxDays: 365,
        stage: 'Growing Kitten (2-12 Months)',
        description: 'Luxurious double-coat emergence. Flat face tear-duct management.',
        diet: 'Kitten wet food rich in Taurine, DHA, and Omega-6 for skin barrier.',
        mealsPerDay: '3 meals daily',
        portion: '1/2 cup kibble + 1 can wet food',
        grooming: 'Daily stainless steel comb detangling; daily tear stain wiping.',
        exercise: 'Feather wands, low scratching posts, laser games (20 mins/day).'
      },
      {
        minDays: 366,
        maxDays: 2555,
        stage: 'Adult Persian (1-7 Years)',
        description: 'Sedentary, regal lifestyle. High risk of hairballs and kidney stones.',
        diet: 'Moisture-rich wet diet (anti-hairball formula), fountain water.',
        mealsPerDay: '2 meals daily',
        portion: '1/2 cup kibble + 1 pouch wet food',
        grooming: 'Daily mandatory 15-min combing from roots; sanitary trim every 6 weeks.',
        exercise: 'Gentle climbing perches and interactive puzzle toys (15-20 mins/day).'
      },
      {
        minDays: 2556,
        maxDays: 6000,
        stage: 'Mature Senior Feline (7+ Years)',
        description: 'PKD and renal health surveillance. Reduced coat grooming ability.',
        diet: 'Low-phosphorus senior renal formula with digestive enzymes.',
        mealsPerDay: '3 small warm meals daily',
        portion: '1/3 cup kibble + 2 pouches wet food',
        grooming: 'Careful gentle grooming to protect fragile skin; heated cat bed.',
        exercise: 'Low-level ramps to favorites perches; gentle lap cuddles.'
      }
    ],
    vaccinations: [
      {
        id: 'fvrcp-1',
        name: 'FVRCP Core 1st Dose',
        targetDays: 50,
        category: 'Core Vaccine',
        description: 'Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia initial dose.'
      },
      {
        id: 'fvrcp-2',
        name: 'FVRCP 2nd Dose + FeLV Screening',
        targetDays: 80,
        category: 'Core Vaccine',
        description: 'Booster for upper respiratory & panleukopenia resistance.'
      },
      {
        id: 'fvrcp-3-rabies',
        name: 'FVRCP 3rd Booster + Rabies Vaccine',
        targetDays: 115,
        category: 'Mandatory Vaccine',
        description: 'Final kitten series booster and core rabies protection.'
      },
      {
        id: 'annual-fvrcp-1',
        name: 'Annual FVRCP & Rabies Booster',
        targetDays: 365,
        category: 'Annual Booster',
        description: 'First annual immunity booster and dental tartar check.'
      }
    ],
    groomingSchedule: [
      { task: 'Stainless Steel Full Body Combing', intervalDays: 1, duration: '15 mins' },
      { task: 'Facial Fold & Tear Stain Wiping', intervalDays: 1, duration: '5 mins' },
      { task: 'Sanitary Area Hygiene Trim', intervalDays: 30, duration: '20 mins' },
      { task: 'Claw Tip Clipping', intervalDays: 14, duration: '10 mins' },
      { task: 'Degreasing Conditioning Bath', intervalDays: 45, duration: '35 mins' }
    ],
    dewormingSchedule: [
      { task: 'Kitten Deworming Paste', targetDays: 45 },
      { task: 'Roundworm & Tapeworm Follow-up', targetDays: 90 },
      { task: 'Broad Spectrum Parasite Spot-on', targetDays: 120, recurringIntervalDays: 30 }
    ]
  },

  'dog-german-shepherd': {
    petId: 'dog-german-shepherd',
    petName: 'German Shepherd',
    category: 'dog',
    speciesLabel: 'Canine (Working / Athletic)',
    lifeStages: [
      {
        minDays: 0,
        maxDays: 60,
        stage: 'Puppy Weaning & Imprinting (0-2 Months)',
        description: 'Early scent exposure and bite inhibition foundation.',
        diet: 'Puppy mush moving to premium large-breed puppy formula.',
        mealsPerDay: '4 meals daily',
        portion: '1.5 cups divided',
        grooming: 'Gentle paw and ear touching; introduction to slicker brush.',
        exercise: 'Indoor supervised exploration; sleep 18 hours/day.'
      },
      {
        minDays: 61,
        maxDays: 180,
        stage: 'Rapid Skeletal Growth (2-6 Months)',
        description: 'Critical obedience window; cartilage ear standing phase.',
        diet: 'Large-breed puppy kibble with strict protein-to-energy ratio to protect joints.',
        mealsPerDay: '3 meals daily',
        portion: '2.5 - 3.5 cups daily',
        grooming: 'Brush 2 times weekly; nail trimming every 2-3 weeks.',
        exercise: 'Controlled 20-30 min leash walks (avoid repetitive jump impacts).'
      },
      {
        minDays: 181,
        maxDays: 730,
        stage: 'Working Young Adult (6-24 Months)',
        description: 'Muscle building, high drive, protective instinct emergence.',
        diet: 'Active working dog diet rich in L-carnitine, chondroitin, and prebiotics.',
        mealsPerDay: '2 meals daily',
        portion: '3.5 - 4.5 cups daily',
        grooming: 'Undercoat raking 3 times weekly; daily during blowing coat season.',
        exercise: '75-90 minutes daily: agility, tracking, structured fetch, obedience.'
      },
      {
        minDays: 731,
        maxDays: 2555,
        stage: 'Peak Working Adult (2-7 Years)',
        description: 'Peak physical condition. Gastric bloat preventative care essential.',
        diet: 'High-performance adult kibble with EPA/DHA; feed strictly in slow feeder.',
        mealsPerDay: '2 meals daily (never exercise 1h before/after meals)',
        portion: '3.5 - 4.5 cups daily',
        grooming: 'Regular coat raking; periodic deshedding baths; dental chew hygiene.',
        exercise: '90 minutes daily vigorous mental & physical tasks.'
      },
      {
        minDays: 2556,
        maxDays: 5000,
        stage: 'Senior Working Partner (7+ Years)',
        description: 'Hip/elbow joint monitoring and degenerative myelopathy prevention.',
        diet: 'Senior joint care diet with green-lipped mussel extract and antioxidants.',
        mealsPerDay: '2 measured meals daily',
        portion: '2.5 - 3.0 cups daily',
        grooming: 'Warm brush sessions; orthopedic support beds; non-slip floor rugs.',
        exercise: 'Gentle scent walks (30-40 mins); low-impact swimming.'
      }
    ],
    vaccinations: [
      { id: 'gsd-dhpp-1', name: 'DHPP Core 1st Dose', targetDays: 45, category: 'Core Vaccine', description: 'Initial parvovirus and distemper resistance.' },
      { id: 'gsd-dhpp-2', name: 'DHPP 2nd Dose + Leptospirosis', targetDays: 75, category: 'Core Vaccine', description: 'Essential protection for outdoor active working breeds.' },
      { id: 'gsd-dhpp-3', name: 'DHPP 3rd Dose + Rabies + Bordetella', targetDays: 110, category: 'Mandatory Vaccine', description: 'Full core protection and kennel cough immunity.' },
      { id: 'gsd-annual-1', name: 'Annual DHPP & Rabies Booster', targetDays: 365, category: 'Annual Booster', description: 'First yearly booster and hip evaluation checkup.' }
    ],
    groomingSchedule: [
      { task: 'Double-Coat Undercoat Rake', intervalDays: 3, duration: '20 mins' },
      { task: 'De-shedding Bath & High-Velocity Blow Dry', intervalDays: 45, duration: '45 mins' },
      { task: 'Nail Trim with Grinder', intervalDays: 21, duration: '15 mins' },
      { task: 'Enzymatic Tooth Care', intervalDays: 3, duration: '5 mins' }
    ],
    dewormingSchedule: [
      { task: 'Puppy Deworming Treatment', targetDays: 42 },
      { task: 'Heartworm & Tick Preventative Chew', targetDays: 90, recurringIntervalDays: 30 }
    ]
  },

  'cat-siamese': {
    petId: 'cat-siamese',
    petName: 'Siamese Cat',
    category: 'cat',
    speciesLabel: 'Feline (Short-Haired / Vocal)',
    lifeStages: [
      {
        minDays: 0,
        maxDays: 60,
        stage: 'Kitten Weaning (0-2 Months)',
        description: 'Vocal bonding, transition from queen milk to warm kitten pate.',
        diet: 'Kitten milk replacer and grain-free starter wet food.',
        mealsPerDay: '4 meals daily',
        portion: '1/2 can pate divided',
        grooming: 'Gentle rubber brush strokes; warm ear checks.',
        exercise: 'Interactive playtime with soft toys.'
      },
      {
        minDays: 61,
        maxDays: 365,
        stage: 'Energetic Kitten (2-12 Months)',
        description: 'High climbing drive, color point darkening, dental development.',
        diet: 'Protein-dense kitten food (min 38% crude protein), rich in Taurine.',
        mealsPerDay: '3 meals daily',
        portion: '1/2 cup kibble + 1 can wet food',
        grooming: 'Weekly rubber curry brush; weekly claw clipping; enzyme dental gel.',
        exercise: 'Vertical cat towers, interactive spring toys, fetch (30 mins/day).'
      },
      {
        minDays: 366,
        maxDays: 2920,
        stage: 'Agile Adult Siamese (1-8 Years)',
        description: 'Social, inquisitive, sleek muscular silhouette.',
        diet: 'Lean poultry and salmon wet meals; controlled portions to prevent obesity.',
        mealsPerDay: '2 meals daily',
        portion: '1/2 cup kibble + 1 pouch wet food',
        grooming: 'Weekly brushing (very low shedding); dental plaque prevention.',
        exercise: 'Climbing trees, puzzle treat feeders, vocal companionship.'
      },
      {
        minDays: 2921,
        maxDays: 7300,
        stage: 'Venerable Senior (8-20 Years)',
        description: 'Long-lived breed; monitor kidneys, eyes, and arthritis.',
        diet: 'Easily digestible senior wet formula with joint antioxidants.',
        mealsPerDay: '2-3 warm meals daily',
        portion: '1/3 cup kibble + 2 wet pouches',
        grooming: 'Gentle coat stroking; heated resting perches; eye cleaning.',
        exercise: 'Low climbing steps to sunny windows; interactive cuddling.'
      }
    ],
    vaccinations: [
      { id: 'siam-fvrcp-1', name: 'FVRCP Initial Vaccine', targetDays: 56, category: 'Core Vaccine', description: 'Feline respiratory protection.' },
      { id: 'siam-fvrcp-2', name: 'FVRCP Booster + FeLV', targetDays: 84, category: 'Core Vaccine', description: 'Leukemia and panleukopenia defense.' },
      { id: 'siam-rabies', name: 'Rabies (1st Year Dose)', targetDays: 112, category: 'Mandatory Vaccine', description: 'Core rabies immunization.' },
      { id: 'siam-annual', name: 'Annual FVRCP Booster & Dental Exam', targetDays: 365, category: 'Annual Booster', description: 'Yearly checkup and dental cleaning evaluation.' }
    ],
    groomingSchedule: [
      { task: 'Rubber Curry Brush Massage', intervalDays: 7, duration: '10 mins' },
      { task: 'Claw Clipping', intervalDays: 14, duration: '10 mins' },
      { task: 'Enzyme Tooth Gel Application', intervalDays: 3, duration: '5 mins' }
    ],
    dewormingSchedule: [
      { task: 'Kitten Deworming Gel', targetDays: 45 },
      { task: 'Routine Monthly Spot-On Parasite Care', targetDays: 90, recurringIntervalDays: 30 }
    ]
  },

  'bird-cockatiel': {
    petId: 'bird-cockatiel',
    petName: 'Cockatiel',
    category: 'bird',
    speciesLabel: 'Avian (Cockatiel / Psittacine)',
    lifeStages: [
      {
        minDays: 0,
        maxDays: 60,
        stage: 'Hand-Feeding & Weaning (0-2 Months)',
        description: 'Syringe feeding transition to seed cracking and pellet tasting.',
        diet: 'Avian hand-rearing formula transitioning to soaked starter pellets.',
        mealsPerDay: '3-4 feedings daily',
        portion: '10-12 ml formula gradually replaced with pellets',
        grooming: 'Keep warm (85-90°F initially); gentle feather preening.',
        exercise: 'Perch climbing practice inside shallow weaning tub.'
      },
      {
        minDays: 61,
        maxDays: 365,
        stage: 'Juvenile & First Molt (2-12 Months)',
        description: 'First plumage molt; whistling mastery and bonding period.',
        diet: '65% formulated avian pellets, 25% fresh chop (broccoli, carrots), 10% seed.',
        mealsPerDay: 'Continuous bowl availability',
        portion: '1.5 - 2 tablespoons daily + fresh veggies',
        grooming: 'Warm water misting bath 3 times weekly; cuttlebone for beak conditioning.',
        exercise: '1-2 hours supervised out-of-cage flight and foraging playtime.'
      },
      {
        minDays: 366,
        maxDays: 4380,
        stage: 'Adult Cockatiel (1-12 Years)',
        description: 'Vibrant crest expressive adult; stable dietary routine.',
        diet: 'High-potency adult organic pellets, leafy greens, calcium mineral block.',
        mealsPerDay: 'Fresh bowl daily',
        portion: '2 tablespoons daily',
        grooming: 'Shallow bird bath dish; nail trim every 2 months; beak check.',
        exercise: 'Daily flight, shredding toys, bell toys, foraging puzzles.'
      },
      {
        minDays: 4381,
        maxDays: 7300,
        stage: 'Senior Avian Companion (12-20 Years)',
        description: 'Lower flight endurance; arthritis and cataract observation.',
        diet: 'Soft soaked pellets, warm mashed sweet potato, calcium supplementation.',
        mealsPerDay: 'Fresh twice daily',
        portion: '2 tablespoons easily reachable food',
        grooming: 'Gentle warm mist baths; wide flat perches wrapped in vet tape.',
        exercise: 'Low perches; lap sitting; gentle head scratches.'
      }
    ],
    vaccinations: [
      { id: 'bird-polyoma', name: 'Avian Polyomavirus (Optional)', targetDays: 60, category: 'Avian Health', description: 'Avian viral defense (vet consultation).' },
      { id: 'bird-annual-exam', name: 'Annual Avian Physical & Fecal Screen', targetDays: 365, category: 'Wellness Exam', description: 'Gram stain, beak and feather evaluation.' }
    ],
    groomingSchedule: [
      { task: 'Warm Water Mist Shower', intervalDays: 3, duration: '10 mins' },
      { task: 'Nail Inspection & Tip Trim', intervalDays: 60, duration: '10 mins' },
      { task: 'Cuttlebone & Mineral Perch Rotation', intervalDays: 30, duration: '5 mins' }
    ],
    dewormingSchedule: [
      { task: 'Avian Vet Parasite Fecal Screen', targetDays: 90, recurringIntervalDays: 180 }
    ]
  },

  'rabbit-holland-lop': {
    petId: 'rabbit-holland-lop',
    petName: 'Holland Lop Rabbit',
    category: 'rabbit',
    speciesLabel: 'Lagomorph (Dwarf Lop-Eared)',
    lifeStages: [
      {
        minDays: 0,
        maxDays: 56,
        stage: 'Kits & Weaning (0-8 Weeks)',
        description: 'Nursing kit transitioning to solid alfalfa hay and pellets.',
        diet: 'Mother milk transitioning to unlimited fresh Alfalfa hay.',
        mealsPerDay: 'Unlimited access',
        portion: 'Unlimited alfalfa hay + 1/2 cup junior pellets',
        grooming: 'Handle gently; never expose to water baths (can cause shock).',
        exercise: 'Gentle hop play on soft fleece blankets.'
      },
      {
        minDays: 57,
        maxDays: 210,
        stage: 'Growing Junior Rabbit (2-7 Months)',
        description: 'Ears droop down fully; rapid growth and litter box training.',
        diet: 'Transition from Alfalfa to Timothy hay; measured junior pellets.',
        mealsPerDay: 'Continuous hay + daily pellets',
        portion: 'Body-sized pile of hay + 1/3 cup pellets',
        grooming: 'Weekly slicker brushing; monthly nail trims.',
        exercise: 'Daily free-roam bunny binky time in bunny-proofed room (2 hours).'
      },
      {
        minDays: 211,
        maxDays: 1825,
        stage: 'Adult Holland Lop (7 Months - 5 Years)',
        description: 'Affectionate, docile; digestive GI stasis prevention vital.',
        diet: '80% Timothy/Orchard grass hay (unlimited), 1 cup leafy greens (cilantro/romaine), 1/8 cup timothy pellets.',
        mealsPerDay: 'Unlimited hay + 1 evening fresh salad',
        portion: 'Unlimited hay + 1 cup fresh greens + 1/8 cup pellets',
        grooming: 'Brush 1-2 times weekly; daily during heavy seasonal molting.',
        exercise: 'Cardboard tunnels, willow chew balls, free-roam exercise.'
      },
      {
        minDays: 1826,
        maxDays: 4380,
        stage: 'Senior Bunny (5-12 Years)',
        description: 'Slower hopping pace; monitor dental spurs and sore hocks.',
        diet: 'Soft botanical & orchard hay, joint support herbs, easily chewable greens.',
        mealsPerDay: 'Unlimited soft hay + morning/evening greens',
        portion: 'Unlimited soft hay + 1/4 cup senior pellets',
        grooming: 'Gentle combing; soft memory foam rugs to prevent hock pressure.',
        exercise: 'Gentle hopping; low-entry litter boxes.'
      }
    ],
    vaccinations: [
      { id: 'rhdv2-1', name: 'RHDV2 Vaccine (1st Dose)', targetDays: 45, category: 'Core Lagomorph Vaccine', description: 'Rabbit Hemorrhagic Disease Virus protection.' },
      { id: 'rhdv2-booster', name: 'RHDV2 Annual Booster', targetDays: 365, category: 'Annual Vaccine', description: 'Yearly RHDV2 immunity maintenance.' }
    ],
    groomingSchedule: [
      { task: 'Gentle Slicker Brush & Lint Roll', intervalDays: 4, duration: '15 mins' },
      { task: 'Nail Clipping & Hock Check', intervalDays: 30, duration: '15 mins' },
      { task: 'Scent Gland Inspection & Clean', intervalDays: 60, duration: '10 mins' }
    ],
    dewormingSchedule: [
      { task: 'Fecal Parasite & Coccidia Screening', targetDays: 60, recurringIntervalDays: 180 }
    ]
  },

  'dog-beagle': {
    petId: 'dog-beagle',
    petName: 'Beagle',
    category: 'dog',
    speciesLabel: 'Canine (Hound / Scent Tracker)',
    lifeStages: [
      {
        minDays: 0,
        maxDays: 60,
        stage: 'Puppy Weaning (0-2 Months)',
        description: 'Scent instinct awakening; maternal milk to puppy mush.',
        diet: 'Puppy kibble softened with warm water or broth.',
        mealsPerDay: '4 meals daily',
        portion: '1 cup divided',
        grooming: 'Gentle hound glove strokes; ear flap checks.',
        exercise: 'Indoor interactive play.'
      },
      {
        minDays: 61,
        maxDays: 365,
        stage: 'Curious Puppy (2-12 Months)',
        description: 'High scent tracking drive; tendency to swallow non-food objects.',
        diet: 'Medium-breed puppy formula with brain DHA and balanced calories.',
        mealsPerDay: '3 meals daily',
        portion: '1.5 cups daily',
        grooming: 'Weekly brushing; weekly ear cleaning solution for long floppy ears.',
        exercise: '45 mins daily scent walks on leash; snuffle mat treat hunting.'
      },
      {
        minDays: 366,
        maxDays: 2555,
        stage: 'Adult Scent Hound (1-7 Years)',
        description: 'Prone to rapid weight gain; strictly measured portions required.',
        diet: 'Portion-controlled adult diet with dietary fiber and lean protein.',
        mealsPerDay: '2 measured meals daily in puzzle slow-feeder',
        portion: '1.5 - 2.0 cups daily',
        grooming: 'Hound glove brushing twice weekly; monthly bath; weekly ear cleaning.',
        exercise: '60 minutes structured walks with designated sniffing stops.'
      },
      {
        minDays: 2556,
        maxDays: 5475,
        stage: 'Senior Beagle (7-15 Years)',
        description: 'Weight management, intervertebral disk and eye wellness.',
        diet: 'Low-calorie high-fiber senior food with joint mobility supplements.',
        mealsPerDay: '2 small meals daily',
        portion: '1.25 cups daily',
        grooming: 'Gentle coat brushing; nail trims every 3 weeks; ear mite checks.',
        exercise: 'Gentle scent strolls (30 mins daily); mental puzzle games.'
      }
    ],
    vaccinations: [
      { id: 'beagle-dhpp-1', name: 'DHPP 1st Dose', targetDays: 45, category: 'Core Vaccine', description: 'Core puppy protection.' },
      { id: 'beagle-dhpp-2', name: 'DHPP 2nd Dose + Leptospirosis', targetDays: 75, category: 'Core Vaccine', description: 'Lepto vaccine crucial for outdoor trailing hounds.' },
      { id: 'beagle-dhpp-3', name: 'DHPP 3rd Booster + Rabies', targetDays: 110, category: 'Mandatory Vaccine', description: 'Full core immunizations.' },
      { id: 'beagle-annual-1', name: 'Annual DHPP & Rabies Booster', targetDays: 365, category: 'Annual Booster', description: 'Yearly checkup and weight evaluation.' }
    ],
    groomingSchedule: [
      { task: 'Rubber Hound Glove Brushing', intervalDays: 4, duration: '15 mins' },
      { task: 'Floppy Ear Cleansing (Vet Solution)', intervalDays: 7, duration: '10 mins' },
      { task: 'Bath after trail excursions', intervalDays: 30, duration: '30 mins' },
      { task: 'Nail Trim & Pad Inspection', intervalDays: 21, duration: '15 mins' }
    ],
    dewormingSchedule: [
      { task: 'Puppy Deworming Treatment', targetDays: 42 },
      { task: 'Monthly Heartworm & Scent Trail Parasite Chew', targetDays: 90, recurringIntervalDays: 30 }
    ]
  },

  'fish-betta': {
    petId: 'fish-betta',
    petName: 'Betta Fish (Siamese Fighting Fish)',
    category: 'fish',
    speciesLabel: 'Aquatic (Labyrinth Anabantoid)',
    lifeStages: [
      {
        minDays: 0,
        maxDays: 90,
        stage: 'Fry to Juvenile (0-3 Months)',
        description: 'Labyrinth organ development; fin membrane formation.',
        diet: 'Live baby brine shrimp, microworms, and micro-pellets.',
        mealsPerDay: '2-3 small pinches daily',
        portion: 'Amount consumed in 2 minutes',
        grooming: 'Not applicable. Daily 15% gentle water change; water temp 80°F.',
        exercise: 'Gentle current; floating Indian almond leaves for water tannins.'
      },
      {
        minDays: 91,
        maxDays: 730,
        stage: 'Prime Adult Betta (3 Months - 2 Years)',
        description: 'Full magnificent fin display; territorial curiosity.',
        diet: 'High-protein Betta micro-pellets (40%+ crude protein), freeze-dried daphnia.',
        mealsPerDay: '1-2 times daily (fast 1 day per week)',
        portion: '3-4 pellets per feeding',
        grooming: 'Weekly 25% water change with siphon vacuum; wipe tank algae.',
        exercise: 'Live plants (Anubias) to rest on; 2-min mirror flare exercise twice weekly.'
      },
      {
        minDays: 731,
        maxDays: 1825,
        stage: 'Senior Betta (2-5 Years)',
        description: 'Slower swimming; rest near surface on broad leaf hammocks.',
        diet: 'Soft soaked pellets and daphnia to prevent constipation and swim bladder issues.',
        mealsPerDay: 'Once daily',
        portion: '2-3 soaked pellets',
        grooming: 'Keep warm consistent 79°F water; very gentle filter flow.',
        exercise: 'Suction-cup leaf hammock 2 inches below surface for easy breathing.'
      }
    ],
    vaccinations: [
      { id: 'water-param-check', name: 'Aquarium Water Chemistry Screen', targetDays: 7, category: 'Water Quality', description: 'Test Ammonia (0), Nitrite (0), Nitrate (<20 ppm).' },
      { id: 'filter-media-rinse', name: 'Aquarium Filter Media Rinse (in tank water)', targetDays: 30, category: 'Equipment Maintenance', description: 'Clean sponge without killing beneficial bacteria.' }
    ],
    groomingSchedule: [
      { task: 'Partial Water Change (25% with water conditioner)', intervalDays: 7, duration: '20 mins' },
      { task: 'Algae Glass Wipe & Plant Trim', intervalDays: 14, duration: '15 mins' },
      { task: 'Water Heater & Thermometer Check', intervalDays: 3, duration: '5 mins' }
    ],
    dewormingSchedule: [
      { task: 'Preventative Indian Almond Leaf Tannin Soak', targetDays: 14, recurringIntervalDays: 30 }
    ]
  }
};

/**
 * Calculates a detailed, chronological Care Plan for a selected pet based on their exact age in days.
 *
 * @param {string} petId - Target pet ID (e.g. 'dog-golden-retriever')
 * @param {number} ageDays - Current age in days (e.g. 75)
 * @param {Date} [referenceDate] - Starting reference date (defaults to today)
 * @returns {object} Formatted calculation results with status tags and projected calendar dates.
 */
export function calculatePetCarePlan(petId, ageDays = 60, referenceDate = new Date()) {
  const pet = Array.isArray(PET_DATA) ? PET_DATA.find((p) => p.id === petId) : null;
  const category = pet?.category || (petId && petId.split('-')[0]) || 'dog';

  const categoryDefaultKey = {
    dog: 'dog-golden-retriever',
    cat: 'cat-persian',
    bird: 'bird-cockatiel',
    rabbit: 'rabbit-holland-lop',
    fish: 'fish-betta'
  }[category] || 'dog-golden-retriever';

  const basePlan = PET_CARE_PLANS[petId] || PET_CARE_PLANS[categoryDefaultKey];
  const plan = {
    ...basePlan,
    petId: petId || basePlan.petId,
    petName: pet?.name || basePlan.petName,
    category: pet?.category || basePlan.category,
    speciesLabel: pet ? `${pet.category.toUpperCase()} (${pet.name})` : basePlan.speciesLabel
  };

  const safeAge = Math.max(1, parseInt(ageDays, 10) || 1);

  // Approximate birth date based on age in days:
  const birthDate = new Date(referenceDate);
  birthDate.setDate(birthDate.getDate() - safeAge);

  // 1. Determine Current Life Stage
  const currentStage =
    plan.lifeStages.find((s) => safeAge >= s.minDays && safeAge <= s.maxDays) ||
    plan.lifeStages[plan.lifeStages.length - 1];

  // 2. Calculate Vaccination Milestones with relative status and projected dates
  const calculatedVaccines = plan.vaccinations.map((vac) => {
    const daysDifference = vac.targetDays - safeAge;
    const projectedDate = new Date(birthDate);
    projectedDate.setDate(projectedDate.getDate() + vac.targetDays);
    const dateStr = projectedDate.toISOString().split('T')[0];

    let status = 'upcoming'; // 'completed' | 'due-now' | 'upcoming'
    let statusLabel = 'Upcoming';
    let badgeClass = 'badge-upcoming';

    if (daysDifference < -15) {
      status = 'completed';
      statusLabel = 'Past Milestone';
      badgeClass = 'badge-completed';
    } else if (Math.abs(daysDifference) <= 15) {
      status = 'due-now';
      statusLabel = daysDifference < 0 ? 'Due Now (Urgent)' : 'Due This Week';
      badgeClass = 'badge-due-now';
    } else {
      status = 'upcoming';
      statusLabel = `In ${daysDifference} days`;
      badgeClass = 'badge-upcoming';
    }

    return {
      ...vac,
      daysDifference,
      projectedDate: dateStr,
      status,
      statusLabel,
      badgeClass
    };
  });

  // 3. Calculate Scheduled Grooming Tasks with projected next dates
  const calculatedGrooming = plan.groomingSchedule.map((task, idx) => {
    // Next due in (intervalDays - (safeAge % intervalDays)) days
    const daysUntilNext = task.intervalDays - (safeAge % task.intervalDays);
    const nextDate = new Date(referenceDate);
    nextDate.setDate(nextDate.getDate() + daysUntilNext);

    return {
      ...task,
      id: `groom-${idx}-${petId}`,
      daysUntilNext,
      nextDueDate: nextDate.toISOString().split('T')[0]
    };
  });

  // 4. Calculate Parasite / Deworming Milestones
  const calculatedDeworming = plan.dewormingSchedule.map((item, idx) => {
    let daysDiff = 0;
    let projDate = new Date(referenceDate);

    if (item.targetDays) {
      daysDiff = item.targetDays - safeAge;
      const bDate = new Date(birthDate);
      bDate.setDate(bDate.getDate() + item.targetDays);
      projDate = bDate;
    } else if (item.recurringIntervalDays) {
      const remainder = safeAge % item.recurringIntervalDays;
      daysDiff = item.recurringIntervalDays - remainder;
      projDate.setDate(projDate.getDate() + daysDiff);
    }

    const dateStr = projDate.toISOString().split('T')[0];
    const isDue = Math.abs(daysDiff) <= 10;

    return {
      ...item,
      id: `deworm-${idx}-${petId}`,
      daysDiff,
      projectedDate: dateStr,
      isDue
    };
  });

  return {
    petId: plan.petId,
    petName: plan.petName,
    category: plan.category,
    speciesLabel: plan.speciesLabel,
    currentAgeDays: safeAge,
    equivalentAgeText: formatEquivalentAge(safeAge),
    birthDateString: birthDate.toISOString().split('T')[0],
    currentStage,
    vaccinations: calculatedVaccines,
    grooming: calculatedGrooming,
    deworming: calculatedDeworming
  };
}

/**
 * Converts days into human friendly age string (e.g., "75 days (~2.5 months / 10 weeks)")
 */
export function formatEquivalentAge(days) {
  if (days < 30) {
    const weeks = Math.max(1, Math.round(days / 7));
    return `${days} Days (~${weeks} ${weeks === 1 ? 'Week' : 'Weeks'})`;
  }
  if (days < 365) {
    const months = (days / 30.4).toFixed(1);
    const weeks = Math.round(days / 7);
    return `${days} Days (~${months} Months / ${weeks} Weeks)`;
  }
  const years = (days / 365.25).toFixed(1);
  return `${days} Days (~${years} Years)`;
}
