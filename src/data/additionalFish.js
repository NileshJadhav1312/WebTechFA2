// 10 Additional Fish and Aquatic Species with Complete Profiles and Multi-Image Galleries

export const ADDITIONAL_FISH = [
  {
    id: 'fish-goldfish',
    name: 'Fancy Oranda Goldfish',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Majestic raspberry-capped wen head with graceful flowing twin fins',
    lifespan: '10 - 15 years',
    temperament: 'Peaceful, Sociable, Inquisitive, Slow-swimming',
    careLevel: 'Moderate',
    activityLevel: 'Moderate swimming',
    dietType: 'Omnivore',
    description: 'The Oranda is one of the most celebrated fancy goldfish varieties, distinguished by its prominent fleshy raspberry-like hood (wen) covering its head and voluminous double caudal fins.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Red Cap Oranda Head Growth',
        tag: 'Wen Head'
      },
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Oranda Twin Tails Gliding',
        tag: 'Flowing Tails'
      },
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Calico Oranda in Planted Tank',
        tag: 'Planted Biotope'
      }
    ],
    careGuide: {
      housing: 'Minimum 20-30 gallons for first Oranda (+10 gallons per additional fish). Never bowls.',
      exercise: 'Smooth rounded décor (sharp rocks injure delicate wen).',
      mentalStimulation: 'Foraging sand substrate for sinking food morsels.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile (0-1 yr)', frequency: '2-3 small pinches/day', diet: 'High-protein sinking micro-pellets (40% protein) to promote wen growth.', portion: 'Amount eaten in 2 minutes' },
      { stage: 'Adult (1-8 yrs)', frequency: '1-2 times/day', diet: 'Sinking goldfish pellets, blanched deshelled peas (prevents swim bladder bloat), bloodworms.', portion: '3-4 pellets per fish' },
      { stage: 'Senior (8+ yrs)', frequency: 'Once daily', diet: 'Soft soaked vegetable pellets, spirulina, steamed zucchini.', portion: '2-3 pellets' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Weekly 25-30% water change + water conditioner required', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable (Aquatic).',
      tankCare: 'Weekly substrate gravel siphon; replace filter mechanical floss monthly.',
      waterQuality: 'Maintain 68-74°F (20-23°C), pH 7.2-7.8, Ammonia 0, Nitrite 0, Nitrate <20 ppm.'
    },
    commonHealthTips: [
      'Always feed sinking pellets; floating flakes cause goldfish to gulp air and trigger swim bladder disorders.',
      'Feed blanched, deshelled peas once weekly as a natural digestive fiber cleanser.'
    ]
  },
  {
    id: 'fish-neon-tetra',
    name: 'Neon Tetra',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    tagline: 'Iridescent neon-blue and crimson shoaling gems of the Amazon',
    lifespan: '5 - 8 years',
    temperament: 'Peaceful, Shoaling, Timid, Active',
    careLevel: 'Easy',
    activityLevel: 'High (Continuous shoaling)',
    dietType: 'Omnivore / Micro-carnivore',
    description: 'Hailing from blackwater streams of the Amazon basin, Neon Tetras are iconic community aquarium fish famous for their intense iridescent horizontal blue stripe and vivid scarlet red belly.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Neon Tetra Schooling in Planted Aquarium',
        tag: 'Schooling Gems'
      },
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Iridescent Blue & Red Stripes',
        tag: 'Neon Stripes'
      },
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Tetras Darting Between Amazon Swords',
        tag: 'Amazon Biotope'
      }
    ],
    careGuide: {
      housing: 'Minimum 10-15 gallon tank with dim lighting, driftwood, and live plants (Amazon swords, Java fern).',
      exercise: 'Must be kept in schools of at least 6-10 fish to feel safe.',
      mentalStimulation: 'Gentle water current to swim against.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile', frequency: '2-3 times daily', diet: 'Baby brine shrimp, powdered micro-bites, infusoria.', portion: 'Very fine pinch' },
      { stage: 'Adult', frequency: '1-2 times daily', diet: 'High-quality micro-flakes, crushed freeze-dried daphnia, cyclops, spirulina.', portion: 'Small pinch consumed in 2 mins' },
      { stage: 'Senior', frequency: 'Once daily', diet: 'Fine soft flakes and live daphnia.', portion: 'Small pinch' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Bi-weekly 20% water change + dechlorinator', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Gentle sponge filter or canister with intake sponge so tiny tetras are not sucked in.',
      waterQuality: 'Temp 72-76°F (22-25°C), soft acidic water (pH 6.0-7.0).'
    },
    commonHealthTips: [
      'Quarantine new fish to prevent Neon Tetra Disease (Pleistophora hyphessobryconis).',
      'Never keep in groups under 6; solitary tetras experience severe stress and faded coloration.'
    ]
  },
  {
    id: 'fish-guppy',
    name: 'Fancy Guppy',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
    tagline: 'Kaleidoscopic rainbow colors, flowing delta tails, and prolific livebearers',
    lifespan: '2 - 3 years',
    temperament: 'Peaceful, Active, Curious, Hardy',
    careLevel: 'Easy',
    activityLevel: 'High (Continuous top-water swimming)',
    dietType: 'Omnivore',
    description: 'Affectionately called the "Millionfish" due to their breeding ease, Fancy Guppies are dazzling livebearers known for an endless array of tail patterns, delta fins, and kaleidoscopic colors.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Fancy Guppy Delta Tail Display',
        tag: 'Rainbow Delta'
      },
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Guppies Swimming at Water Surface',
        tag: 'Active Surface'
      },
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Guppy Community Tank With Moss',
        tag: 'Livebearer Tank'
      }
    ],
    careGuide: {
      housing: 'Minimum 5-10 gallons; live plants like Guppy grass, Java moss, and hornwort.',
      exercise: 'Open top swimming lanes and gentle filter aeration.',
      mentalStimulation: 'Live floating plants to explore.'
    },
    lifeStageNutrition: [
      { stage: 'Fry (0-1 mo)', frequency: '3-4 times daily', diet: 'Liquid fry food, micro-worms, crushed flakes.', portion: 'Tiny pinch' },
      { stage: 'Juvenile (1-3 mo)', frequency: '2 times daily', diet: 'Baby brine shrimp, high-protein livebearer flakes.', portion: 'Small pinch' },
      { stage: 'Adult', frequency: '1-2 times daily', diet: 'Spirulina flakes, bloodworms, daphnia.', portion: 'Amount eaten in 90 seconds' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Weekly 20% water change + minerals (prefer moderately hard water)', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Gentle sponge filtration to protect baby fry and flowing tails.',
      waterQuality: 'Temp 72-82°F (22-28°C), pH 7.0-8.2, hard water (GH 8-12).'
    },
    commonHealthTips: [
      'Maintain ratio of 1 male to 2-3 females to avoid female harassment.',
      'Provide thick clumps of Java moss if you wish for newborn fry to survive.'
    ]
  },
  {
    id: 'fish-angelfish',
    name: 'Freshwater Angelfish',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Regal diamond-shaped silhouette, elongated dorsal sails, and Amazon majesty',
    lifespan: '10 - 12 years',
    temperament: 'Semi-aggressive, Territorial, Intelligent, Majestic',
    careLevel: 'Moderate',
    activityLevel: 'Moderate to High',
    dietType: 'Carnivore / Omnivore',
    description: 'With their distinctive triangular disc bodies, elongated thread-like ventral fins, and elegant gliding motion, Freshwater Angelfish are the undisputed royalty of South American cichlids.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Silver Striped Angelfish Majesty',
        tag: 'Amazon Queen'
      },
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Angelfish Gliding Past Amazon Swords',
        tag: 'Planted Biotope'
      },
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Koi Angelfish Pair Stance',
        tag: 'Breeding Pair'
      }
    ],
    careGuide: {
      housing: 'Tall aquarium (minimum 20-30 gallons, at least 18-24" high to accommodate long fins).',
      exercise: 'Vertical slate rocks, tall Amazon sword plants (Echinodorus).',
      mentalStimulation: 'Interactive hand-feeding recognition; recognizes owner face.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile', frequency: '2-3 times daily', diet: 'High-protein baby cichlid granules, live brine shrimp.', portion: 'Pinch eaten in 2 mins' },
      { stage: 'Adult', frequency: '1-2 times daily', diet: 'Cichlid pellets, frozen bloodworms, mysis shrimp, spirulina flakes.', portion: '4-5 granules per fish' },
      { stage: 'Senior', frequency: 'Once daily', diet: 'High-fiber cichlid crisps and bloodworms.', portion: 'Moderate pinch' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Weekly 25% water change + water conditioner', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Efficient canister or hang-on-back filter with moderate flow.',
      waterQuality: 'Temp 78-84°F (25-29°C), pH 6.5-7.5.'
    },
    commonHealthTips: [
      'Adult Angelfish will eat tiny fish like neon tetras; keep only with medium-sized peaceful tankmates (corydoras, rasboras).',
      'Pairs become territorial when laying eggs on vertical leaves or slate.'
    ]
  },
  {
    id: 'fish-corydoras',
    name: 'Corydoras Catfish (Panda Cory)',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    tagline: 'Whiskered bottom-cleaning cutie with adorable panda eye masks',
    lifespan: '5 - 8 years',
    temperament: 'Peaceful, Sociable, Bottom-dwelling, Playful',
    careLevel: 'Easy',
    activityLevel: 'High (Continuous bottom foraging)',
    dietType: 'Omnivore / Bottom feeder',
    description: 'Armored with bony plates and possessing sensory barbels, Panda Corydoras are essential community aquarium helpers that tirelessly sift through sand for leftover food.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Panda Corydoras Foraging in Soft Sand',
        tag: 'Bottom Feeder'
      },
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'School of Cory Cats Resting Together',
        tag: 'Schooling'
      },
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Cory Barbels Close-Up',
        tag: 'Sensory Barbels'
      }
    ],
    careGuide: {
      housing: 'Minimum 10-20 gallons; soft sand substrate MANDATORY (sharp gravel erodes barbels).',
      exercise: 'Keep in groups of 6 or more for natural schooling security.',
      mentalStimulation: 'Sifting through soft sand for sinking wafers.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile', frequency: '2 times daily', diet: 'Micro sinking pellets, baby brine shrimp.', portion: 'Fine pinch' },
      { stage: 'Adult', frequency: 'Once daily (evening)', diet: 'Sinking catfish wafers, bloodworms, tubifex, spirulina discs.', portion: '1 wafer per 2-3 catfish' },
      { stage: 'Senior', frequency: 'Once daily', diet: 'Soft sinking algae discs and frozen daphnia.', portion: '1/2 wafer' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Weekly 20% water change + gravel sand siphon', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Keep bottom substrate clean to avoid bacterial barbel erosion.',
      waterQuality: 'Temp 72-78°F (22-26°C), pH 6.5-7.5, excellent oxygenation.'
    },
    commonHealthTips: [
      'Never use sharp gravel; rough stones wear down delicate sensory barbels and lead to mouth rot.',
      'Occasionally dash to the surface for a quick gulp of air; normal intestinal respiration.'
    ]
  },
  {
    id: 'fish-discus',
    name: 'Discus Fish',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
    tagline: 'King of the aquarium with dazzling turquoise and ruby striated discs',
    lifespan: '10 - 15 years',
    temperament: 'Peaceful, Shy, Graceful, Regal',
    careLevel: 'High (Pristine Water Quality)',
    activityLevel: 'Moderate gliding',
    dietType: 'Carnivore / Omnivore',
    description: 'Widely crowned the "King of the Freshwater Aquarium," Discus fish boast a round, pancake-like disc shape adorned with electric blue, turquoise, and fire-red striations.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Blue Diamond Discus Majesty',
        tag: 'King of Aquarium'
      },
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Pair of Pigeon Blood Discus Gliding',
        tag: 'Discus Pair'
      },
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Discus in Warm Amazon River Biotope',
        tag: 'Warm Biotope'
      }
    ],
    careGuide: {
      housing: 'Minimum 55-75 gallons for a group of 5-6 discus. Tall tank required.',
      exercise: 'Calm, gentle water flow; driftwood and smooth rounded river stones.',
      mentalStimulation: 'Peaceful companions (Rummy-nose tetras, sterbai corydoras).'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile', frequency: '3-4 times daily', diet: 'High-protein beefheart mix, live blackworms, discus micro-pellets.', portion: 'Amount eaten in 3 mins' },
      { stage: 'Adult', frequency: '2 times daily', diet: 'Beefheart recipe, frozen bloodworms, color-enhancing discus granules, mysis shrimp.', portion: 'Moderate pinch' },
      { stage: 'Senior', frequency: 'Once daily', diet: 'High-grade discus crisps, vitamin-soaked bloodworms.', portion: 'Small portion' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Twice-weekly 25-50% water change with aged, warm RO water (critical for health)', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Heavy filtration with very gentle water return flow.',
      waterQuality: 'Temp must be exceptionally warm: 82-86°F (28-30°C), soft acidic water pH 6.0-6.8.'
    },
    commonHealthTips: [
      'Extremely sensitive to nitrates; keep nitrate levels strictly below 10-15 ppm through frequent water changes.',
      'Require warm temperatures; standard 75°F community water will weaken their immune system.'
    ]
  },
  {
    id: 'fish-molly',
    name: 'Black Molly Fish',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Velvety midnight-black sailfin livebearer with natural algae-eating appetite',
    lifespan: '3 - 5 years',
    temperament: 'Peaceful, Active, Hardy, Social',
    careLevel: 'Easy',
    activityLevel: 'High',
    dietType: 'Omnivore / Herbivore (Grazer)',
    description: 'Black Mollies are striking livebearing fish featuring an intense uniform velvety-black body. They are fantastic aquarium cleaners that actively pick at nuisance hair algae.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Velvety Midnight Black Molly',
        tag: 'Midnight Velvet'
      },
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Black Molly Grazing on Plant Leaves',
        tag: 'Algae Grazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Sailfin Molly Flaring Fins',
        tag: 'Sailfin Display'
      }
    ],
    careGuide: {
      housing: 'Minimum 20-30 gallons (mollies grow larger than guppies, up to 3-4 inches).',
      exercise: 'Open swimming lanes and moderate filter flow.',
      mentalStimulation: 'Live plants with surfaces for algae picking.'
    },
    lifeStageNutrition: [
      { stage: 'Fry (0-1 mo)', frequency: '3 times daily', diet: 'Crushed spirulina flakes, microworms.', portion: 'Tiny pinch' },
      { stage: 'Juvenile', frequency: '2 times daily', diet: 'Vegetable flakes, blanched spinach puree.', portion: 'Small pinch' },
      { stage: 'Adult', frequency: '1-2 times daily', diet: 'Spirulina flakes (high plant matter), algae wafers, daphnia, bloodworms.', portion: 'Amount eaten in 2 minutes' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Bi-weekly 25% water change; benefits from slight aquarium salt', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Sponge or power filter with good surface agitation.',
      waterQuality: 'Temp 75-80°F (24-27°C), hard alkaline water pH 7.5-8.2 (thrive in brackish water too).'
    },
    commonHealthTips: [
      'Prone to "shimmies" (rocking motion) in soft acidic water; ensure adequate water hardness and minerals.',
      'Diet must contain high plant matter/spirulina to prevent gut blockage.'
    ]
  },
  {
    id: 'fish-clownfish',
    name: 'Ocellaris Clownfish',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    tagline: 'Iconic orange & white banded marine swimmer with sea anemone symbiosis',
    lifespan: '10 - 15 years',
    temperament: 'Peaceful to Semi-aggressive, Inquisitive, Territorial',
    careLevel: 'Moderate (Saltwater / Marine)',
    activityLevel: 'Moderate swimming (waddling gait)',
    dietType: 'Omnivore',
    description: 'Immortalized in popular culture, the Ocellaris Clownfish is the most popular saltwater aquarium fish. Famous for their charming waddling swim and natural symbiotic hosting in sea anemones.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Ocellaris Clownfish in Anemone',
        tag: 'Anemone Symbiosis'
      },
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Clownfish Pair Swimming in Reef Tank',
        tag: 'Marine Reef'
      },
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Bright Orange Scales & White Bands',
        tag: 'Vibrant Marine'
      }
    ],
    careGuide: {
      housing: 'Minimum 20-30 gallons saltwater marine setup with live rock and protein skimmer.',
      exercise: 'Exploring live rock caves, coral perches, and anemones.',
      mentalStimulation: 'Hosting in sea anemones (Bubble tip) or soft corals.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile', frequency: '2-3 times daily', diet: 'Marine copepods, baby brine shrimp, micro marine pellets.', portion: 'Fine pinch' },
      { stage: 'Adult', frequency: '1-2 times daily', diet: 'Mysis shrimp, chopped clam, marine omnivore pellets with astaxanthin.', portion: 'Amount eaten in 2 minutes' },
      { stage: 'Senior', frequency: 'Once daily', diet: 'Enriched mysis shrimp, spirulina marine crisps.', portion: 'Moderate portion' }
    ],
    vaccinations: [
      { age: 'Marine Aquatic Care', vaccine: 'Bi-weekly 15-20% saltwater mix change with marine salt + RO/DI water', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Protein skimmer maintenance, test salinity with refractometer.',
      waterQuality: 'Salinity: Specific gravity 1.024-1.026, Temp 76-80°F (24-27°C), pH 8.1-8.4.'
    },
    commonHealthTips: [
      'Clownfish are sequential hermaphrodites: in a pair, the larger fish always becomes the dominant female.',
      'Anemone is not strictly required in home aquariums; they happily host in soft corals or ceramic pots.'
    ]
  },
  {
    id: 'fish-platy',
    name: 'Mickey Mouse Platy',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
    tagline: 'Chubby bright red body with famous three-circle tail pattern',
    lifespan: '3 - 5 years',
    temperament: 'Peaceful, Friendly, Active, Hardy',
    careLevel: 'Easy',
    activityLevel: 'High',
    dietType: 'Omnivore',
    description: 'One of the hardiest, most cheerful beginner fish, the Mickey Mouse Platy has a vibrant red or gold body with three distinctive black pigment circles on its tail forming a familiar silhouette.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Mickey Mouse Platy Tail Markings',
        tag: 'Mickey Tail'
      },
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Platy Fish Schooling in Planted Tank',
        tag: 'Community School'
      },
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Red Platy Exploring Aquatic Moss',
        tag: 'Vibrant Red'
      }
    ],
    careGuide: {
      housing: 'Minimum 10-15 gallons with live aquatic plants.',
      exercise: 'Active swimming throughout all levels of the tank.',
      mentalStimulation: 'Picking at biofilm on driftwood and leaves.'
    },
    lifeStageNutrition: [
      { stage: 'Fry (0-1 mo)', frequency: '3 times daily', diet: 'Powdered livebearer flake, micro-worms.', portion: 'Tiny pinch' },
      { stage: 'Juvenile', frequency: '2 times daily', diet: 'High-protein flakes, daphnia.', portion: 'Small pinch' },
      { stage: 'Adult', frequency: '1-2 times daily', diet: 'Tropical flakes, spirulina crisps, frozen bloodworms.', portion: 'Amount eaten in 2 minutes' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Bi-weekly 20% water change + water conditioner', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Gentle sponge or hang-on-back filtration.',
      waterQuality: 'Temp 70-77°F (21-25°C), pH 7.0-8.0, moderately hard water.'
    },
    commonHealthTips: [
      'Extremely peaceful and adaptable to community tanks.',
      'Proactive livebearer; separate fry into a breeding box if you wish to raise them.'
    ]
  },
  {
    id: 'fish-zebra-danio',
    name: 'Zebra Danio',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    tagline: 'Bullet-fast horizontal blue stripes, bulletproof hardiness, and energetic schooling',
    lifespan: '4 - 5 years',
    temperament: 'Peaceful, Boisterous, Schooling, Ultra-Hardy',
    careLevel: 'Easy',
    activityLevel: 'Very High (Lightning fast surface swimmer)',
    dietType: 'Omnivore',
    description: 'Zebra Danios are virtually bulletproof aquarium fish featuring striking horizontal zebra stripes extending from gills to tail. They are constantly darting across the water surface with boundless energy.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
        title: 'Zebra Danio Horizontal Stripes',
        tag: 'Zebra Stripes'
      },
      {
        url: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        title: 'Fast-Moving Danio School',
        tag: 'Speedy School'
      },
      {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
        title: 'Longfin Zebra Danio in Motion',
        tag: 'Longfin Variant'
      }
    ],
    careGuide: {
      housing: 'Minimum 10-20 gallon long tank (needs length to sprint). Secure tank lid mandatory (champion jumpers).',
      exercise: 'Strong water current from powerheads or filter outputs.',
      mentalStimulation: 'Schooling in groups of 6 or more.'
    },
    lifeStageNutrition: [
      { stage: 'Juvenile', frequency: '2-3 times daily', diet: 'Micro-bites, crushed flakes.', portion: 'Fine pinch' },
      { stage: 'Adult', frequency: '1-2 times daily', diet: 'Tropical crisps, freeze-dried daphnia, tubifex worms, brine shrimp.', portion: 'Amount eaten in 1 minute' },
      { stage: 'Senior', frequency: 'Once daily', diet: 'High-quality surface flakes.', portion: 'Small pinch' }
    ],
    vaccinations: [
      { age: 'Aquatic Care', vaccine: 'Bi-weekly 25% water change + water conditioner', mandatory: true }
    ],
    grooming: {
      brushing: 'Not applicable.',
      tankCare: 'Brisk filter aeration with strong surface current.',
      waterQuality: 'Temp 64-75°F (18-24°C; tolerates unheated tanks), pH 6.5-7.5.'
    },
    commonHealthTips: [
      'Top-surface jumpers; a tightly sealed aquarium lid is strictly required to prevent leaping out.',
      'One of the hardiest freshwater fish in the world, ideal for beginners.'
    ]
  }
];
