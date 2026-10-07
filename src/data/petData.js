// Pet Care Data Repository for PetCare Hub
// Includes multiple pet categories with comprehensive care guides, vaccination schedules, and nutrition plans.

import { ADDITIONAL_DOGS } from './additionalDogs';
import { ADDITIONAL_CATS } from './additionalCats';
import { ADDITIONAL_BIRDS } from './additionalBirds';
import { ADDITIONAL_RABBITS } from './additionalRabbits';
import { ADDITIONAL_FISH } from './additionalFish';

export const PET_CATEGORIES = [
  { id: 'all', label: 'All Pets', icon: '🐾' },
  { id: 'dog', label: 'Dogs', icon: '🐶' },
  { id: 'cat', label: 'Cats', icon: '🐱' },
  { id: 'bird', label: 'Birds', icon: '🐦' },
  { id: 'rabbit', label: 'Rabbits', icon: '🐰' },
  { id: 'fish', label: 'Fish & Aquatics', icon: '🐟' }
];

const CORE_PET_DATA = [
  {
    id: 'dog-golden-retriever',
    name: 'Golden Retriever',
    category: 'dog',
    image: '/images/hero-pets-wellness.jpg',
    tagline: 'Friendly, intelligent, and devoted companion',
    lifespan: '10 - 12 years',
    temperament: 'Friendly, Intelligent, Gentle, Playful',
    careLevel: 'Moderate',
    activityLevel: 'High (60-90 mins/day)',
    dietType: 'High-protein omnivore',
    description: 'Golden Retrievers are one of the most popular dog breeds worldwide. Known for their kind eyes, loyalty, and enthusiasm for life, they make fantastic family pets and service animals.',
    gallery: [
      {
        url: '/images/hero-pets-wellness.jpg',
        title: 'Golden Retriever Outdoor Field Portrait',
        tag: 'Adult Portrait'
      },
      {
        url: '/images/about-pets-duo.jpg',
        title: 'Golden Retriever & Cat Household Companions',
        tag: 'Companions'
      },
      {
        url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
        title: 'Alert Golden Retriever in Sunlit Park',
        tag: 'Outdoor Lawn'
      },
      {
        url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
        title: 'Playful Golden Puppyhood Stage',
        tag: 'Puppy'
      }
    ],
    careGuide: {
      housing: 'Requires a secure yard or daily outdoor exercise; thrives in moderate indoor climates.',
      exercise: 'Daily walks, fetch games, and swimming to prevent obesity and boredom.',
      mentalStimulation: 'Puzzle toys, obedience training, and agility drills.'
    },
    lifeStageNutrition: [
      {
        stage: 'Puppy (0 - 6 months)',
        frequency: '3 - 4 meals/day',
        diet: 'Specially formulated large-breed puppy kibble rich in DHA, calcium, and phosphorus for bone growth.',
        portion: '1.5 - 2.5 cups daily'
      },
      {
        stage: 'Young Adult (6 months - 2 years)',
        frequency: '2 meals/day',
        diet: 'High-protein transition kibble with balanced fatty acids for muscle development.',
        portion: '3 - 3.5 cups daily'
      },
      {
        stage: 'Adult (2 - 7 years)',
        frequency: '2 meals/day',
        diet: 'Balanced adult dog food with lean protein, omega-3, and joint support supplements (Glucosamine).',
        portion: '3 - 4 cups daily'
      },
      {
        stage: 'Senior (7+ years)',
        frequency: '2 small meals/day',
        diet: 'Lower calorie, high-fiber senior formula to protect aging joints and kidneys.',
        portion: '2 - 2.5 cups daily'
      }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza) 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Leptospirosis + Bordetella', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP Booster + Rabies Vaccine (1-Year)', mandatory: true },
      { age: '1 Year onwards', vaccine: 'Annual Rabies Booster + DHPP 3-Year Booster + Deworming', mandatory: true }
    ],
    grooming: {
      brushing: 'Daily brushing with an undercoat rake to reduce seasonal shedding.',
      bathing: 'Every 4 to 6 weeks using a hypoallergenic oatmeal pet shampoo.',
      nailTrimming: 'Every 3 to 4 weeks or when clicking is audible on hard floors.',
      dentalCare: 'Brush teeth 3 times a week with enzyme dog toothpaste.'
    },
    commonHealthTips: [
      'Monitor for hip dysplasia and maintain optimal weight.',
      'Check ears weekly after swimming to prevent bacterial infections.',
      'Always provide fresh, clean water.'
    ]
  },
  {
    id: 'cat-persian',
    name: 'Persian Cat',
    category: 'cat',
    image: '/images/persian-cat.jpg',
    tagline: 'Quiet, affectionate, and luxurious long-haired feline',
    lifespan: '12 - 17 years',
    temperament: 'Calm, Quiet, Affectionate, Sweet',
    careLevel: 'High (Coat Grooming)',
    activityLevel: 'Low to Moderate',
    dietType: 'Obligate Carnivore',
    description: 'Persian cats are known for their gentle and sweet personalities, beautiful flowing coats, and expressive round eyes. They prefer serene household environments.',
    gallery: [
      {
        url: '/images/persian-cat.jpg',
        title: 'Pure White Persian Cat Studio Portrait',
        tag: 'Studio Portrait'
      },
      {
        url: '/images/about-pets-duo.jpg',
        title: 'Calm Household Companion Scene',
        tag: 'Companions'
      },
      {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
        title: 'Graceful Long-Haired Persian Gaze',
        tag: 'Coat Care'
      },
      {
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        title: 'Peaceful Resting Kitten Pose',
        tag: 'Kitten'
      }
    ],
    careGuide: {
      housing: 'Strictly indoor pet to protect their lavish coat and prevent infections.',
      exercise: 'Short daily play sessions with feather wands and laser pointers.',
      mentalStimulation: 'Scratching posts, climbing perches, and quiet window views.'
    },
    lifeStageNutrition: [
      {
        stage: 'Kitten (0 - 6 months)',
        frequency: '4 meals/day',
        diet: 'Kitten wet food and nutrient-dense kibble enriched with Taurine and DHA.',
        portion: '1/2 cup kibble + 1 can wet food'
      },
      {
        stage: 'Young Adult (6 months - 2 years)',
        frequency: '2 - 3 meals/day',
        diet: 'High-meat protein adult cat food with anti-hairball formulation.',
        portion: '1/2 - 3/4 cup daily'
      },
      {
        stage: 'Adult (2 - 7 years)',
        frequency: '2 meals/day',
        diet: 'Moisture-rich wet food and premium kibble to maintain urinary tract health.',
        portion: '1/2 cup kibble + 1 pouch wet food'
      },
      {
        stage: 'Senior (7+ years)',
        frequency: '2 - 3 small meals/day',
        diet: 'Kidney-friendly, easy-to-chew wet diet with reduced phosphorus.',
        portion: '1/3 cup kibble + 2 small pouches wet food'
      }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'FVRCP 2nd Dose + Feline Leukemia (FeLV)', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'FVRCP Booster + Rabies Vaccine', mandatory: true },
      { age: 'Annual', vaccine: 'Annual FVRCP & Rabies Booster + Deworming', mandatory: true }
    ],
    grooming: {
      brushing: 'Daily thorough combing with metal comb to prevent painful matting.',
      bathing: 'Once every 4 to 8 weeks with cat-safe conditioning shampoo.',
      eyeCleaning: 'Wipe face and tear stains daily with a damp cotton pad.',
      nailTrimming: 'Clip claw tips every 2 to 3 weeks.'
    },
    commonHealthTips: [
      'Persian cats are prone to polycystic kidney disease (PKD); schedule annual bloodwork.',
      'Keep flat facial folds dry and clean.',
      'Ensure constant access to clean water fountains to prevent kidney stones.'
    ]
  },
  {
    id: 'dog-german-shepherd',
    name: 'German Shepherd',
    category: 'dog',
    image: '/images/german-shepherd.jpg',
    tagline: 'Courageous, highly trainable, and protective work dog',
    lifespan: '9 - 13 years',
    temperament: 'Confident, Courageous, Alert, Highly Intelligent',
    careLevel: 'Moderate to High',
    activityLevel: 'Very High (90+ mins/day)',
    dietType: 'High-protein omnivore',
    description: 'The German Shepherd is a versatile working breed admired for its loyalty, protective instincts, and exceptional problem-solving intelligence.',
    gallery: [
      {
        url: '/images/german-shepherd.jpg',
        title: 'German Shepherd Noble Working Stance',
        tag: 'Working Breed'
      },
      {
        url: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5455?auto=format&fit=crop&w=800&q=80',
        title: 'Attentive Sentry Headshot',
        tag: 'Alert'
      },
      {
        url: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80',
        title: 'Devoted Family Companion in Green Grass',
        tag: 'Outdoor'
      },
      {
        url: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
        title: 'Young German Shepherd Agility Drill',
        tag: 'Training'
      }
    ],
    careGuide: {
      housing: 'Best suited for houses with spacious yards and secure perimeter fencing.',
      exercise: 'Running, fetch, tracking exercises, and structured obedience drills.',
      mentalStimulation: 'Interactive scent work, task learning, and agility puzzles.'
    },
    lifeStageNutrition: [
      {
        stage: 'Puppy (0 - 6 months)',
        frequency: '3 meals/day',
        diet: 'Large-breed puppy formula with strictly controlled calcium-to-phosphorus ratio.',
        portion: '2 - 3 cups daily'
      },
      {
        stage: 'Young Adult (6 months - 2 years)',
        frequency: '2 meals/day',
        diet: 'Energy-dense diet rich in amino acids for muscular development.',
        portion: '3.5 - 4 cups daily'
      },
      {
        stage: 'Adult (2 - 7 years)',
        frequency: '2 meals/day',
        diet: 'Premium protein (chicken/beef/salmon) kibble with digestive prebiotics.',
        portion: '3.5 - 4.5 cups daily'
      },
      {
        stage: 'Senior (7+ years)',
        frequency: '2 meals/day',
        diet: 'Joint-protection formula with EPA/DHA and controlled calorie density.',
        portion: '2.5 - 3 cups daily'
      }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Leptospirosis', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'DHPP 3rd Dose + Rabies + Kennel Cough', mandatory: true },
      { age: 'Annual', vaccine: 'Yearly Rabies & DHPP Booster + Tick/Flea Prevention', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush 2 to 3 times weekly; daily during heavy spring/fall shedding.',
      bathing: 'Bathe every 6 to 8 weeks (avoid over-bathing to protect natural skin oils).',
      nailTrimming: 'Trim nails every 3 weeks.',
      dentalCare: 'Chew toys and weekly enzyme tooth brushing.'
    },
    commonHealthTips: [
      'Avoid intense exercise 1 hour before and after meals to prevent gastric torsion (bloat).',
      'Provide orthopedic dog beds to protect hip and elbow joints.',
      'Early socialization from 8 weeks is vital for friendly behavior.'
    ]
  },
  {
    id: 'cat-siamese',
    name: 'Siamese Cat',
    category: 'cat',
    image: '/images/siamese-cat.jpg',
    tagline: 'Vocal, affectionate, and striking blue-eyed socialite',
    lifespan: '15 - 20 years',
    temperament: 'Vocal, Social, Intelligent, Inquisitive',
    careLevel: 'Easy to Moderate',
    activityLevel: 'High (active climber)',
    dietType: 'Obligate Carnivore',
    description: 'Siamese cats are famous for their striking color points, sapphire blue eyes, and talkative nature. They form deep emotional bonds with their families.',
    gallery: [
      {
        url: '/images/siamese-cat.jpg',
        title: 'Striking Blue-Eyed Siamese Studio Portrait',
        tag: 'Studio Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
        title: 'Seal Point Elegance & Attentive Ears',
        tag: 'Attentive'
      },
      {
        url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
        title: 'Inquisitive Curious Stare',
        tag: 'Curious'
      },
      {
        url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
        title: 'Sunlit Window Sill Lounging',
        tag: 'Indoor Perch'
      }
    ],
    careGuide: {
      housing: 'Indoor home with plenty of vertical spaces, cat trees, and sunny window perches.',
      exercise: 'Interactive fetch, string toys, and climbing towers.',
      mentalStimulation: 'Learn tricks quickly; provide puzzle feeders.'
    },
    lifeStageNutrition: [
      {
        stage: 'Kitten (0 - 6 months)',
        frequency: '3 - 4 meals/day',
        diet: 'High-protein grain-free kitten pate and kibble.',
        portion: '1/2 cup kibble + 1 can wet food'
      },
      {
        stage: 'Adult (1 - 7 years)',
        frequency: '2 meals/day',
        diet: 'Lean poultry and fish recipes with antioxidants to preserve lean body mass.',
        portion: '1/2 to 2/3 cup daily'
      },
      {
        stage: 'Senior (7+ years)',
        frequency: '2 meals/day',
        diet: 'Easily digestible senior cat wet diet rich in Omega-3.',
        portion: '1/3 cup kibble + 1 can wet food'
      }
    ],
    vaccinations: [
      { age: '8 Weeks', vaccine: 'FVRCP Initial Vaccine', mandatory: true },
      { age: '12 Weeks', vaccine: 'FVRCP Booster + FeLV', mandatory: true },
      { age: '16 Weeks', vaccine: 'Rabies (1-year duration)', mandatory: true },
      { age: 'Annual', vaccine: 'FVRCP Booster & Annual Health Checkup', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with a fine rubber brush (very low maintenance coat).',
      bathing: 'Only when necessary; Siamese cats groom themselves cleanly.',
      nailTrimming: 'Clip every 2 to 3 weeks and provide vertical sisal scratching posts.'
    },
    commonHealthTips: [
      'Do not leave alone for extended periods; they thrive on companionship.',
      'Schedule routine dental cleanings as Siamese are prone to gingivitis.'
    ]
  },
  {
    id: 'bird-cockatiel',
    name: 'Cockatiel',
    category: 'bird',
    image: '/images/cockatiel.jpg',
    tagline: 'Whistling, cheerful, and crest-expressive companion bird',
    lifespan: '14 - 20 years',
    temperament: 'Gentle, Musical, Playful, Social',
    careLevel: 'Moderate',
    activityLevel: 'Moderate (Needs daily out-of-cage flight)',
    dietType: 'Granivore / Herbivore',
    description: 'Cockatiels are charming Australian parrots known for their prominent head crests, orange cheek patches, and sweet whistling melodies.',
    gallery: [
      {
        url: '/images/cockatiel.jpg',
        title: 'Crested Australian Cockatiel Portrait',
        tag: 'Avian Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        title: 'Cheerful Perched Cockatiel on Natural Branch',
        tag: 'Perched'
      },
      {
        url: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80',
        title: 'Feather Preening & Wing Grooming',
        tag: 'Preening'
      },
      {
        url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
        title: 'Singing & Whistling Crest Flare',
        tag: 'Social Song'
      }
    ],
    careGuide: {
      housing: 'Minimum cage size 24" x 24" x 30" with horizontal bars for climbing. Place in draft-free area.',
      exercise: '1 to 2 hours of supervised flying/perching time outside the cage daily.',
      mentalStimulation: 'Foraging toys, natural wood perches, and bells.'
    },
    lifeStageNutrition: [
      {
        stage: 'Juvenile (0 - 6 months)',
        frequency: 'Continuous access',
        diet: 'High-grade starter pellets (60-70%), sprouted seeds, warm mashed veggies (sweet potato, broccoli).',
        portion: '1.5 - 2 tablespoons daily'
      },
      {
        stage: 'Adult (6 months - 10 years)',
        frequency: 'Daily fresh bowl',
        diet: '70% avian formulated pellets, 20% fresh dark leafy greens & veggies, 10% quality seed mix.',
        portion: '2 tablespoons daily + fresh chop'
      },
      {
        stage: 'Senior (10+ years)',
        frequency: 'Daily',
        diet: 'Easily digestible soaked pellets, calcium-rich greens, cuttlebone access.',
        portion: '2 tablespoons daily'
      }
    ],
    vaccinations: [
      { age: 'Annual Checkup', vaccine: 'Polyomavirus Vaccine (consult avian vet)', mandatory: false },
      { age: 'Yearly', vaccine: 'Fecal gram stain, beak & feather disease screening', mandatory: true }
    ],
    grooming: {
      brushing: 'Provide shallow bird bath bowl or gentle warm water mist spray 3 times a week.',
      nailTrimming: 'Trim nails every 2-3 months using styptic powder on hand.',
      beakCare: 'Provide cuttlebone and mineral blocks for natural beak conditioning.'
    },
    commonHealthTips: [
      'NEVER expose birds to non-stick Teflon cookware fumes or aerosol sprays (toxic).',
      'Provide 10-12 hours of quiet, dark sleep each night to prevent hormone issues.'
    ]
  },
  {
    id: 'rabbit-holland-lop',
    name: 'Holland Lop Rabbit',
    category: 'rabbit',
    image: '/images/holland-lop.jpg',
    tagline: 'Adorable, floppy-eared, and curious small companion',
    lifespan: '8 - 12 years',
    temperament: 'Friendly, Docile, Curious, Sweet',
    careLevel: 'Moderate',
    activityLevel: 'Moderate (Crepuscular: active morning & evening)',
    dietType: 'Strict Herbivore (High Fiber)',
    description: 'Holland Lops are dwarf lop-eared rabbits known for their compact size, expressive drooping ears, and sociable, calm temperament.',
    gallery: [
      {
        url: '/images/holland-lop.jpg',
        title: 'Gentle Floppy-Eared Holland Lop Studio Portrait',
        tag: 'Studio Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
        title: 'Sweet Furry Bunny Inquisitive Close-Up',
        tag: 'Curious'
      },
      {
        url: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=800&q=80',
        title: 'Fresh Timothy Hay Foraging & Nibbling',
        tag: 'Diet & Hay'
      },
      {
        url: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
        title: 'Indoor Soft Carpet Free-Roam Hop',
        tag: 'Free Roam'
      }
    ],
    careGuide: {
      housing: 'Indoor puppy playpen or bunny-proofed room with soft non-slip rug flooring.',
      exercise: 'Daily free-roam hop and binky time in a safe bunny-proofed room.',
      mentalStimulation: 'Cardboard tunnels, hay foraging balls, and untreated willow toys.'
    },
    lifeStageNutrition: [
      {
        stage: 'Young Rabbit (0 - 7 months)',
        frequency: 'Unlimited hay & pellets',
        diet: 'Unlimited Alfalfa hay and young rabbit alfalfa pellets + fresh clean water.',
        portion: 'Unlimited hay + 1/2 cup pellets'
      },
      {
        stage: 'Adult (7 months - 5 years)',
        frequency: 'Unlimited hay + measured pellets',
        diet: '80% Timothy hay (unlimited), 1 cup fresh leafy greens (Romaine, cilantro), 1/8 cup timothy pellets.',
        portion: 'Body-sized pile of hay + 1/8 cup pellets'
      },
      {
        stage: 'Senior (5+ years)',
        frequency: 'Hay + gentle greens',
        diet: 'Timothy and Orchard grass hay, joint support herbs, easily chewable fresh greens.',
        portion: 'Unlimited hay + 1/4 cup pellets'
      }
    ],
    vaccinations: [
      { age: '5 - 6 Weeks', vaccine: 'RHDV2 (Rabbit Hemorrhagic Disease Virus 2)', mandatory: true },
      { age: 'Annual', vaccine: 'Annual RHDV2 Booster + Myxomatosis (in relevant regions)', mandatory: true }
    ],
    grooming: {
      brushing: 'Brush 1-2 times weekly with a gentle slicker brush; daily during molting seasons.',
      bathing: 'NEVER submerge a rabbit in water (can cause fatal shock); spot-clean only.',
      nailTrimming: 'Trim nails every 4-6 weeks.'
    },
    commonHealthTips: [
      'Gastrointestinal (GI) Stasis is an emergency: seek immediate vet care if bunny stops eating/pooping.',
      'Protect all exposed electrical cables and furniture from chewing.'
    ]
  },
  {
    id: 'dog-beagle',
    name: 'Beagle',
    category: 'dog',
    image: '/images/beagle.jpg',
    tagline: 'Curious, merry, and scent-driven gentle hound',
    lifespan: '12 - 15 years',
    temperament: 'Friendly, Curious, Merry, Determined',
    careLevel: 'Easy to Moderate',
    activityLevel: 'High (Needs regular scent walks)',
    dietType: 'Omnivore',
    description: 'Beagles are compact, hardy hound dogs with extraordinary senses of smell and warm, affectionate temperaments that make them wonderful family additions.',
    gallery: [
      {
        url: '/images/beagle.jpg',
        title: 'Tri-Color Scent Hound Beagle Studio Portrait',
        tag: 'Studio Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
        title: 'Eager & Gentle Scent Expression',
        tag: 'Alert'
      },
      {
        url: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=80',
        title: 'Outdoor Nature Trail Sniffing & Tracking',
        tag: 'Scent Walk'
      },
      {
        url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
        title: 'Playful Beagle Pup Running Outdoors',
        tag: 'Puppy & Play'
      }
    ],
    careGuide: {
      housing: 'Requires secure fencing as they tend to follow scent trails.',
      exercise: 'At least 45-60 minutes daily walks with sniff exploration time.',
      mentalStimulation: 'Snuffle mats, hide-and-seek treat games.'
    },
    lifeStageNutrition: [
      {
        stage: 'Puppy (0 - 6 months)',
        frequency: '3 meals/day',
        diet: 'Nutrient-rich small/medium breed puppy kibble.',
        portion: '1 - 1.5 cups daily'
      },
      {
        stage: 'Adult (1 - 7 years)',
        frequency: '2 meals/day',
        diet: 'Portion-controlled adult diet to prevent their natural tendency to overeat.',
        portion: '1.5 - 2 cups daily'
      },
      {
        stage: 'Senior (7+ years)',
        frequency: '2 meals/day',
        diet: 'High fiber, low-calorie weight management formula.',
        portion: '1.25 cups daily'
      }
    ],
    vaccinations: [
      { age: '6 - 8 Weeks', vaccine: 'DHPP 1st Dose', mandatory: true },
      { age: '10 - 12 Weeks', vaccine: 'DHPP 2nd Dose + Leptospirosis', mandatory: true },
      { age: '14 - 16 Weeks', vaccine: 'Rabies + DHPP 3rd Dose', mandatory: true },
      { age: 'Annual', vaccine: 'Annual Booster + Heartworm prevention', mandatory: true }
    ],
    grooming: {
      brushing: 'Weekly brushing with a rubber hound glove to remove loose hair.',
      bathing: 'Bathe every 4 weeks or after muddy outdoor trail walks.',
      earCleaning: 'Clean floppy ears weekly with vet ear solution to avoid ear mites.'
    },
    commonHealthTips: [
      'Beagles easily gain weight; strictly avoid table scraps.',
      'Always keep on leash during walks due to strong scent tracking instinct.'
    ]
  },
  {
    id: 'fish-betta',
    name: 'Betta Fish (Siamese Fighting Fish)',
    category: 'fish',
    image: '/images/betta-fish.jpg',
    tagline: 'Vibrant, majestic, and solitary aquatic beauty',
    lifespan: '3 - 5 years',
    temperament: 'Territorial, Solitary, Inquisitive',
    careLevel: 'Easy (with proper tank setup)',
    activityLevel: 'Moderate swimming',
    dietType: 'Carnivore',
    description: 'Betta fish are famous for their magnificent flowing fins and vibrant coloration. They require proper heated and filtered aquatic habitats to thrive.',
    gallery: [
      {
        url: '/images/betta-fish.jpg',
        title: 'Iridescent Halfmoon Betta Macro Portrait',
        tag: 'Macro Portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Flowing Crimson & Blue Fins in Motion',
        tag: 'Flowing Fins'
      },
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Planted Aquarium Biotope Environment',
        tag: 'Planted Habitat'
      },
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Vibrant Solitary Crown-Tail Display',
        tag: 'Fins Display'
      }
    ],
    careGuide: {
      housing: 'Minimum 5-gallon tank (never tiny bowls!) with gentle filter and heater (78-80°F / 25-27°C).',
      exercise: 'Live plants (Anubias, Java fern) and smooth silk caves to explore.',
      mentalStimulation: 'Occasional mirror flare exercise for 2 minutes, floating ping pong ball.'
    },
    lifeStageNutrition: [
      {
        stage: 'Fry / Juvenile',
        frequency: '2 - 3 times/day',
        diet: 'Baby brine shrimp, microworms, and crushed high-protein fry flakes.',
        portion: 'Very small pinch'
      },
      {
        stage: 'Adult',
        frequency: '1 - 2 times/day (1 fast day per week)',
        diet: 'High-protein Betta micro-pellets (40%+ crude protein), freeze-dried bloodworms and daphnia.',
        portion: '3 - 4 small pellets per feeding'
      },
      {
        stage: 'Senior',
        frequency: 'Once daily',
        diet: 'Soft soaked pellets and daphnia to prevent constipation and swim bladder issues.',
        portion: '2 - 3 pellets'
      }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'No vaccines; weekly 25% water change + water conditioner required', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable. Maintain crystal clean water parameters (0 ammonia, 0 nitrite, <20 nitrate).',
      bathing: 'Weekly 20-25% partial water change using gravel vacuum siphon.',
      tankCare: 'Gently wipe algae off glass with safe aquarium sponge.'
    },
    commonHealthTips: [
      'Never place two male Bettas in the same tank.',
      'Keep water temperature consistently warm (78°F-80°F); cold water weakens immune system.',
      'Use gentle water flow filters so delicate fins do not get torn.'
    ]
  }
];

export const PET_DATA = [
  ...CORE_PET_DATA,
  ...ADDITIONAL_DOGS,
  ...ADDITIONAL_CATS,
  ...ADDITIONAL_BIRDS,
  ...ADDITIONAL_RABBITS,
  ...ADDITIONAL_FISH
];

export const GENERAL_CARE_TIPS = [
  {
    id: 1,
    category: 'Nutrition',
    icon: '🥣',
    title: 'Balanced Fresh Water & Hydration',
    description: 'Ensure clean, fresh water is available 24/7. Wash water bowls daily to avoid bacterial growth and dehydration.'
  },
  {
    id: 2,
    category: 'Preventative Care',
    icon: '💉',
    title: 'Stick to Vaccination Milestones',
    description: 'Core vaccines protect pets against fatal viral diseases. Maintain updated digital records for vet visits.'
  },
  {
    id: 3,
    category: 'Grooming & Hygiene',
    icon: '✨',
    title: 'Regular Coat & Ear Checks',
    description: 'Weekly brushing removes dead hair and stimulates skin oils. Inspect ears regularly for signs of redness or mites.'
  },
  {
    id: 4,
    category: 'Physical & Mental Exercise',
    icon: '🎾',
    title: 'Daily Enrichment & Exercise',
    description: 'Provide stimulating toys, daily walks, and interactive games to prevent anxiety and destructive behavior.'
  }
];

export const INITIAL_REMINDERS = [
  { id: 1, petName: 'Golden Retriever', task: 'DHPP Vaccination Booster Dose', dueDate: '2026-09-10', completed: false, tag: 'Vaccine' },
  { id: 2, petName: 'Persian Cat', task: 'Monthly Flea & Tick Spot-On Treatment', dueDate: '2026-09-15', completed: false, tag: 'Grooming' },
  { id: 3, petName: 'Holland Lop', task: 'Fresh Timothy Hay Stock Refill', dueDate: '2026-09-08', completed: true, tag: 'Diet' }
];
