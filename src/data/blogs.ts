// ─── Types ───────────────────────────────────────────────────────────────────
export type BlogSection = {
  heading: string;
  body: string;
  tips?: string[];
};

export type BlogContent = {
  intro: string;
  sections: BlogSection[];
  conclusion: string;
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  author: string;
  content: BlogContent;
};

// ─── Categories ──────────────────────────────────────────────────────────────
export const BLOG_CATEGORIES = [
  "All",
  "Indoor Plants",
  "Outdoor Plants",
  "Succulents & Cacti",
  "Flowering Plants",
  "Soil & Composting",
  "Hanging Plants",
];

// ─── Blog Posts ──────────────────────────────────────────────────────────────
export const BLOGS: Blog[] = [
  // ── INDOOR PLANTS ────────────────────────────────────────────────────────
  {
    id: "1",
    slug: "monstera-deliciosa-care-guide",
    title: "How to Care for Monstera Deliciosa at Home",
    excerpt:
      "The Swiss cheese plant is a stunning tropical beauty with iconic split leaves. Discover everything you need to keep it thriving indoors.",
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&h=500&fit=crop",
    readTime: "5 min read",
    date: "April 10, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Monstera deliciosa — the Swiss cheese plant — is the world's favourite tropical houseplant. Its dramatic split leaves (fenestrations) make it a lush statement piece in any room. Native to Central American rainforests, Monstera adapts beautifully to indoor life and rewards patient growers with ever-larger, more ornate leaves.",
      sections: [
        {
          heading: "Light: Bright and Indirect",
          body: "Monstera loves bright, indirect light. A spot near an east or north-facing window works perfectly. Avoid harsh afternoon sun — leaves will scorch and yellow. If natural light is limited, a grow light placed 30–40 cm away for 10–12 hours mimics rainforest canopy conditions.",
          tips: [
            "East-facing windows are ideal",
            "Rotate the pot every 2–3 weeks for even growth",
            "Yellow leaves often signal too much direct sun",
          ],
        },
        {
          heading: "Watering: Less Is More",
          body: "Overwatering is the #1 killer of Monstera. Water only when the top 2–3 cm of soil feels dry. In summer, this is every 7–10 days; in winter, stretch to 2–3 weeks. Always use pots with drainage holes and never let the plant sit in standing water.",
          tips: [
            "Stick your finger 2 cm into soil — if dry, water thoroughly",
            "Empty the saucer after watering",
            "Use room-temperature water to avoid shocking roots",
          ],
        },
        {
          heading: "Soil & Fertiliser",
          body: "Use a well-draining, chunky mix — coconut coir, perlite, and garden compost works great. Feed once a month during the growing season (March–September) with a balanced liquid fertiliser (N-P-K 10-10-10) diluted to half-strength.",
        },
        {
          heading: "Humidity & Temperature",
          body: "Monstera loves humidity (50–60%). In dry months, mist the leaves every few days or place pebbles and water in a tray beneath the pot. Ideal temperature is 18–27°C. Keep away from cold drafts and air-conditioner vents.",
        },
        {
          heading: "Repotting & Support",
          body: "Repot every 1–2 years in spring when roots circle the pot base. Go up one pot size at a time. A moss pole or coir stick encourages its natural climbing growth and leads to larger, more fenestrated leaves over time.",
        },
      ],
      conclusion:
        "With bright indirect light, mindful watering, and a touch of humidity, your Monstera will reward you with dramatic tropical foliage for years. Once you succeed with one, you'll want to fill every corner of your home!",
    },
  },
  {
    id: "2",
    slug: "snake-plant-beginners-guide",
    title: "Snake Plant: The Indestructible Beginners' Houseplant",
    excerpt:
      "Sansevieria tolerates low light, irregular watering, and complete neglect — making it the perfect plant for busy people and absolute beginners.",
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=415&auto=format&fit=crop",
    readTime: "4 min read",
    date: "April 8, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "The Snake Plant (Sansevieria trifasciata) is celebrated for toughness above all else. It handles low humidity, irregular watering, and artificial lighting — making it ideal for offices, dark hallways, and anyone who tends to forget to water their plants.",
      sections: [
        {
          heading: "Light Tolerance",
          body: "Snake plants survive in dim corridors and offices yet grow fastest in bright indirect light. Avoid only very dark spots with zero natural light. A north or east window is perfect. Variegated varieties need slightly more light to retain their striking patterns.",
          tips: [
            "Tolerates fluorescent office lighting",
            "Grows faster in bright indirect light",
            "Variegated varieties need more light to keep their patterns",
          ],
        },
        {
          heading: "Watering: The Less, the Better",
          body: "Snake plants are succulents — their thick leaves store water. Water deeply but infrequently: every 2–3 weeks in summer, just once a month in winter. Let the soil dry out completely between waterings. Root rot from overwatering is the only real way to kill this plant.",
          tips: [
            "Water every 2–3 weeks in warm months",
            "Reduce to monthly in winter",
            "Insert finger 3 cm into soil — only water if fully dry",
          ],
        },
        {
          heading: "Soil & Pots",
          body: "Use a cactus or succulent mix, or add 50% perlite to regular potting soil. Terracotta pots are ideal because they wick away excess moisture. Avoid heavy clay-based mixes that retain water and suffocate roots.",
        },
        {
          heading: "Air Purification",
          body: "NASA's Clean Air Study found snake plants remove toxins like formaldehyde, benzene, and xylene from indoor air. They are among the few plants that release oxygen at night, making them a top choice for bedrooms.",
        },
        {
          heading: "Easy Propagation",
          body: "Propagate by division (splitting the root clump) or leaf cuttings (place a 10 cm leaf section in moist sand). Division is faster — simply split the root clump and pot each section separately. New plants appear within weeks.",
        },
      ],
      conclusion:
        "The snake plant is tough, architectural, air-purifying, and endlessly stylish. Whether you're a complete beginner or want a reliable low-maintenance accent, this plant simply delivers — every single time.",
    },
  },
  {
    id: "3",
    slug: "peace-lily-care-guide",
    title: "Peace Lily: How to Keep It Blooming All Year",
    excerpt:
      "Peace Lilies are one of the rare flowering plants that thrive in low light. Learn the simple steps to keep the elegant white blooms coming.",
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800&h=500&fit=crop",
    readTime: "4 min read",
    date: "April 6, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Peace Lily (Spathiphyllum) is a gem — one of the very few houseplants that flowers in low light. Its glossy green leaves and elegant white spathes bring calm to any room. Whether in an office or a bedroom, it asks for very little and gives a lot.",
      sections: [
        {
          heading: "Light Requirements",
          body: "Peace Lily thrives in low to moderate indirect light — one of the best plants for poorly lit spaces. To encourage blooming, however, give it a brighter (not direct sunlight) spot for a few weeks each year. North-facing rooms and hallways are otherwise perfect.",
          tips: [
            "Works in low light, blooms better with indirect brightness",
            "Keep away from direct sunlight — leaves bleach",
            "Fluorescent office lighting is fine",
          ],
        },
        {
          heading: "Watering",
          body: "Water when the top inch of soil feels dry. Peace Lilies will visibly droop when thirsty — a helpful cue. They perk back within an hour of watering. Use filtered or room-temperature water, as fluoride in tap water causes brown leaf tips.",
          tips: [
            "Drooping is a thirst signal — water promptly",
            "Brown tips = fluoride sensitivity; switch to filtered water",
            "Water less in winter",
          ],
        },
        {
          heading: "Humidity & Misting",
          body: "Tropical by nature, Peace Lilies love humidity. Mist leaves 2–3 times a week or use a pebble tray filled with water beneath the pot. Grouping several houseplants together also raises local humidity beneficially.",
        },
        {
          heading: "Encouraging Blooms",
          body: "If your Peace Lily isn't blooming, it likely needs more light. Move it to a brighter spot for 4–6 weeks. Applying a phosphorus-rich fertiliser (5-10-5 blend) once a month during spring also triggers flower spikes.",
        },
        {
          heading: "Toxicity Note",
          body: "Peace Lily is mildly toxic to cats, dogs, and young children if ingested — place it on a high shelf or in rooms inaccessible to pets and toddlers. Wash hands after handling the sap.",
        },
      ],
      conclusion:
        "The Peace Lily is a low-light champion and a natural mood booster. With weekly watering and a bright corner every now and then, it will reward you with gorgeous white blooms that last for weeks.",
    },
  },
  {
    id: "4",
    slug: "golden-pothos-care-guide",
    title: "Golden Pothos: Growing a Waterfall of Green",
    excerpt:
      "Pothos is the most forgiving vining plant on the planet. Learn how to grow it into a lush, cascading statement piece for any room.",
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1625321642799-694ec5bbbb85?q=80&w=387&auto=format&fit=crop",
    readTime: "4 min read",
    date: "April 4, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Golden Pothos (Epipremnum aureum) is often the first plant new plant parents bring home — and for good reason. It grows fast, tolerates neglect, vines beautifully, and is virtually impossible to kill. Train it to trail from shelves or climb a moss pole for dramatic effect.",
      sections: [
        {
          heading: "Light Adaptability",
          body: "Pothos adapts to a wide range of lighting. Its golden-green variegation shows best in moderate indirect light. In very low light, leaves revert to solid green — not harmful, just less ornamental. Avoid prolonged direct sun, which scorches the leaves.",
          tips: [
            "Bright indirect light keeps variegation vibrant",
            "Tolerates very low light areas",
            "A few feet from a window is ideal",
          ],
        },
        {
          heading: "Watering",
          body: "Water when the top 2 inches of soil are dry. Pothos is forgiving about irregular watering and can go 1–2 weeks without a drink. Consistent overwatering leads to root rot. Yellowing all over usually means too much water.",
          tips: [
            "Allow soil to dry 50% between waterings",
            "All-over yellowing = overwatering",
            "Wilting from underwatering recovers quickly after a good drink",
          ],
        },
        {
          heading: "Training and Pruning",
          body: "Pothos grows fast — pinch back long, leggy vines to encourage bushier growth. Cuttings root extremely easily in water: place a node-bearing stem in a jar and roots appear in 1–2 weeks, making it wonderful for gifting.",
        },
        {
          heading: "Climbing vs. Trailing",
          body: "Trained to climb a moss pole, Pothos produces leaves 3–4× larger than trailing leaves — the climbing triggers its mature growth form. For a trailing waterfall effect, hang it in a basket or let it cascade off a high shelf.",
        },
      ],
      conclusion:
        "Pothos is the plant world's most reliable companion. Whether trailing from a bookshelf or climbing your wall, it adds greenery with minimal effort. There's never been a better gateway plant.",
    },
  },

  // ── OUTDOOR PLANTS ───────────────────────────────────────────────────────
  {
    id: "5",
    slug: "hibiscus-growing-guide-india",
    title: "Hibiscus Growing Guide for Indian Gardens",
    excerpt:
      "Nothing says tropical like Hibiscus in full bloom. Learn how to grow these dramatic flowers in Indian conditions — in garden beds or pots.",
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1567990989224-6441e1483ac8?q=80&w=386&auto=format&fit=crop",
    readTime: "5 min read",
    date: "April 2, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Hibiscus rosa-sinensis is the flower of tropical India — beloved from roadside hedges to terrace pots. Large, colourful blooms appear nearly year-round in warm conditions when care is right. Here's everything you need to grow a spectacular Hibiscus.",
      sections: [
        {
          heading: "Sunlight and Location",
          body: "Hibiscus is a full-sun plant — minimum 6 hours of direct sunlight for good blooming. In North India's harsh summers, afternoon shade (after 2 PM) prevents leaf scorch. South and west-facing walls are ideal.",
          tips: [
            "At least 6 hours of direct sun daily",
            "Afternoon shade in extreme heat (May–June)",
            "Grows well in both ground beds and large pots",
          ],
        },
        {
          heading: "Watering Schedule",
          body: "Water deeply every day in summer, every 2 days in mild weather, and every 3–4 days in winter. Dry soil causes bud drop — the most common complaint. Mulch around the base to conserve moisture.",
          tips: [
            "Consistent watering prevents bud drop",
            "Mulch with dried leaves or coconut husk",
            "Early morning watering is best",
          ],
        },
        {
          heading: "Fertilising for Blooms",
          body: "Use a high-potassium fertiliser (K in N-P-K, e.g. 10-5-20) every 2 weeks during the growing season. Banana peel compost tea is a great organic alternative rich in potassium. Avoid high-nitrogen feeds — they grow leaves, not flowers.",
          tips: [
            "High potassium fertiliser promotes blooming",
            "Banana peel tea is an excellent organic option",
            "Avoid high-nitrogen fertilisers",
          ],
        },
        {
          heading: "Pruning",
          body: "Prune once a year in February–March before new growth begins. Cut back by one-third to one-half to encourage dense, bushy growth and more bloom sites. Remove dead or crossing branches throughout the year.",
        },
        {
          heading: "Pests & Disease",
          body: "Aphids, mealybugs, and spider mites are common. Spray with a neem oil solution (5 ml neem + 2 ml dish soap in 1 L water) every 2 weeks preventively. Yellowing leaves with green veins indicate iron deficiency — apply chelated iron.",
        },
      ],
      conclusion:
        "A well-cared-for Hibiscus is one of the showiest plants in an Indian garden. With consistent sun, water, and feeding, it will cover itself in blooms and attract butterflies and sunbirds all year.",
    },
  },
  {
    id: "6",
    slug: "tulsi-holy-basil-growing-guide",
    title: "How to Grow Tulsi (Holy Basil) at Home",
    excerpt:
      "India's most sacred plant is also a living pharmacy. Learn how to grow Tulsi easily — on a balcony, terrace, or courtyard.",
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?q=80&w=435&auto=format&fit=crop",
    readTime: "4 min read",
    date: "March 30, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Tulsi (Ocimum tenuiflorum) is India's most revered plant — found in virtually every Hindu household. It's not just culturally significant but an incredible medicinal herb that repels mosquitoes, purifies air, and thrives with basic care.",
      sections: [
        {
          heading: "The Best Spot for Tulsi",
          body: "Tulsi needs full sun — at least 4–6 hours of direct sunlight daily. Place outdoors on a balcony, terrace, or garden. Avoid keeping it permanently indoors — reduced light leads to poor, weak growth.",
          tips: [
            "Full sun (4–6 hours) is non-negotiable",
            "Great on south or east-facing balconies",
            "Rotate if on a balcony for even light exposure",
          ],
        },
        {
          heading: "Soil and Potting",
          body: "Use a well-draining sandy loam — 60% garden soil, 20% compost, 20% sand or perlite. Tulsi does not like waterlogged roots. A medium-sized 8–10 inch pot is ideal for a single healthy plant.",
        },
        {
          heading: "Watering",
          body: "Water Tulsi when the top 1 cm of soil feels dry — daily in summer, every 2–3 days in monsoon and winter. Avoid water on the leaves in humid weather (promotes fungal spots). Always water at the base.",
          tips: [
            "Water daily in summer",
            "Allow surface to dry before rewatering",
            "Never let water pool at the stem base",
          ],
        },
        {
          heading: "Pinching and Harvesting",
          body: "Pinch off flower buds as soon as they form — this keeps the plant bushy. Harvest leaves from the top, never stripping a whole branch bare. Regular harvesting encourages new growth and extends the plant's life.",
        },
        {
          heading: "Medicinal Uses",
          body: "Tulsi leaves are a home remedy for colds, coughs, fever, and stress. Tulsi tea (dried leaves in hot water with ginger and honey) boosts immunity. The essential oils in the leaves also act as a natural mosquito repellent.",
        },
      ],
      conclusion:
        "Tulsi is more than just a plant — it's a living pharmacy. Easy to grow, endlessly useful, and spiritually cherished. Every Indian home deserves at least one flourishing Tulsi plant in a place of honour.",
    },
  },
  {
    id: "7",
    slug: "bougainvillea-care-guide",
    title: "Bougainvillea: How to Grow the Queen of Climbers",
    excerpt:
      "With vibrant bracts and an easy temperament, Bougainvillea is India's most dramatic flowering climber. Here's how to grow and bloom it year-round.",
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1714101449261-0ee291f33abd?q=80&w=774&auto=format&fit=crop",
    readTime: "5 min read",
    date: "March 28, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Bougainvillea is pure drama — a riot of magenta, orange, white, or red bracts cascading over walls and pergolas. Native to South America, it thrives in warm Indian conditions and rewards with nearly year-round colour with the right care.",
      sections: [
        {
          heading: "Sunlight: Full Sun Is Non-Negotiable",
          body: "Bougainvillea needs at least 6–8 hours of direct sunlight daily to bloom. In shade, it produces leaves but very few bracts. Plant it where it will get uninterrupted morning-to-afternoon sun.",
          tips: [
            "Minimum 6 hours of direct sun for bracts",
            "South or west-facing walls are ideal",
            "Pot plants can be moved to the sunniest spot",
          ],
        },
        {
          heading: "Water Stress Triggers Blooming",
          body: "A period of dryness triggers flowering. During non-growing months, allow the soil to dry out moderately. When you want blooms, withhold water for 3–4 weeks until leaves slightly wilt, then resume regular watering — bracts appear within weeks.",
          tips: [
            "Stress with dryness before bloom season",
            "Once budding starts, water regularly",
            "Overwatering promotes green growth, not colour",
          ],
        },
        {
          heading: "Pruning for More Blooms",
          body: "Bougainvillea blooms on new growth. After each flush of colour fades, prune flowering branches back by one-third. This promotes a new flush. Hard prune once a year in February to refresh the overall structure.",
        },
        {
          heading: "Training and Support",
          body: "Bougainvillea is a natural scrambler with thorns. Train it on a trellis or pergola by loosely tying new shoots in your desired direction. Over time, it establishes a permanent framework that re-blooms each season.",
        },
        {
          heading: "Fertilising",
          body: "Feed monthly with a high-potassium fertiliser during the growing season. Banana peel compost and wood ash (rich in potash) work well organically. Avoid nitrogen-heavy feeds — they grow leaves at the expense of bracts.",
        },
      ],
      conclusion:
        "With full sun, mild water stress, and regular pruning, Bougainvillea will drench your walls in colour from winter through spring. It is one of the most spectacular plants you can grow in any Indian garden.",
    },
  },

  // ── SUCCULENTS & CACTI ───────────────────────────────────────────────────
  {
    id: "8",
    slug: "aloe-vera-care-guide",
    title: "Aloe Vera: The Multipurpose Succulent You Need at Home",
    excerpt:
      "Aloe vera is equal parts beautiful and useful — a natural skincare ingredient, a first-aid plant, and a forgiving succulent rolled into one.",
    category: "Succulents & Cacti",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&h=500&fit=crop",
    readTime: "4 min read",
    date: "March 25, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Aloe vera is perhaps the world's most well-known medicinal plant — and one of the easiest succulents to grow. Its thick, gel-filled leaves are a living first-aid kit, ready for sunburns, cuts, and skin hydration. Best of all, it asks for very little in return.",
      sections: [
        {
          heading: "Sunlight Needs",
          body: "Aloe vera loves bright light. Place it in a south or east-facing window with 6+ hours of bright light daily. Insufficient light leads to leggy, pale, floppy leaves. If growth is slow and stretched, it needs more sun.",
          tips: [
            "Bright indirect light indoors",
            "Full sun outdoors (acclimatise gradually)",
            "Brown tips = too much direct harsh sun or fluoride in water",
          ],
        },
        {
          heading: "Watering: The Soak and Dry Method",
          body: "Use the 'soak and dry' method: water thoroughly until it drains, then wait until soil is completely dry before the next watering. In summer, roughly every 2–3 weeks; in winter, once a month. Limp or mushy leaves signal overwatering.",
          tips: [
            "Allow soil to dry completely before watering",
            "Soak deeply, then ignore until dry",
            "Mushy leaves = root rot from overwatering",
          ],
        },
        {
          heading: "Soil and Drainage",
          body: "Aloe must have excellent drainage. Use a cactus & succulent mix, or create your own: 50% garden soil, 30% coarse sand, 20% perlite. Always use pots with drainage holes — terracotta is preferred.",
        },
        {
          heading: "Propagating Pups",
          body: "Aloe produces offsets (pups) around the base. When a pup has grown to one-third of the parent plant's size, gently remove it with a clean sharp knife, allow the cut to callous for 24–48 hours, then pot it in dry succulent mix. Water sparingly until established.",
        },
        {
          heading: "Harvesting the Gel",
          body: "To use the gel, cut a mature outer leaf at the base. Slice off spiny edges, then split the leaf open to reveal the clear gel. Apply directly to skin for burns, cuts, or moisturising. Refrigerate the remaining piece for up to a week.",
        },
      ],
      conclusion:
        "Aloe vera earns its place in every home — a striking succulent, a skincare essential, and a first-aid companion all in one. With bright light and infrequent watering, it will thrive for decades.",
    },
  },
  {
    id: "9",
    slug: "jade-plant-care-guide",
    title: "Jade Plant Care: Patience, Prosperity, and Longevity",
    excerpt:
      "The Jade Plant is a slow-growing succulent that can live for decades. Considered a symbol of good luck, it's perfect for homes and offices.",
    category: "Succulents & Cacti",
    image:
      "https://images.unsplash.com/photo-1643904124064-f8d11bb3d415?q=80&w=1031&auto=format&fit=crop",
    readTime: "4 min read",
    date: "March 22, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Crassula ovata — the Jade Plant — is a long-lived succulent tree with glossy oval leaves and woody stems. In Feng Shui it's the 'money plant', placed at entrances to attract prosperity. With patience, a small cutting can become a bonsai-like specimen over many years.",
      sections: [
        {
          heading: "Light: Bright Is Best",
          body: "Jade plants do best in bright indirect light with some gentle morning sun. A sunny windowsill with 4–6 hours daily is ideal. In low light the plant becomes leggy and weak. Silver and variegated varieties especially need more light to maintain colour.",
          tips: [
            "4–6 hours of bright light daily",
            "South or east-facing window preferred",
            "Low light causes leggy, stretched growth",
          ],
        },
        {
          heading: "The Key: Let It Dry",
          body: "Jade stores water in its thick leaves. Water only when soil is completely dry — especially in winter, when monthly watering is often enough. During spring and summer, water every 2–3 weeks. Slightly shriveled leaves signal true thirst.",
          tips: [
            "Dry soil between waterings is essential",
            "Monthly watering in winter",
            "Shriveled = thirsty; mushy = overwatered",
          ],
        },
        {
          heading: "Fertilising",
          body: "Apply a balanced succulent fertiliser (diluted to half-strength) once every 2–3 months during the growing season. Avoid feeding in winter when the plant is semi-dormant. Over-fertilising leads to soft, weak growth.",
        },
        {
          heading: "Pruning for Shape",
          body: "Jade can be shaped into a beautiful bonsai with patience. Prune wayward stems in early spring with clean scissors. Allow cut ends to callous before watering. New growth emerges just below the cut, creating attractive branching.",
        },
        {
          heading: "Blooming",
          body: "Mature plants (5+ years) can produce small star-shaped white or pink flowers in winter with the right triggers: reduced watering, cool nights (10–15°C), and long dark periods — mimicking their South African winter habitat.",
        },
      ],
      conclusion:
        "A thriving jade plant is a testament to patience and consistent care. They can be passed through generations — some specimens live 70–100 years. Start one today, and it may outlive all your other houseplants.",
    },
  },
  {
    id: "10",
    slug: "growing-cacti-indoors",
    title: "Growing Cacti Indoors: The Complete Care Guide",
    excerpt:
      "Cacti store their own water and thrive on neglect — but a few key tips will help them truly flourish and even bloom for you.",
    category: "Succulents & Cacti",
    image:
      "https://images.unsplash.com/photo-1757259246003-3cb77775d5c7?q=80&w=387&auto=format&fit=crop",
    readTime: "5 min read",
    date: "March 20, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Cacti evolved over millions of years to endure drought, extreme heat, and nutrient-poor soils. These qualities make them remarkably easy to care for indoors. But 'easy' doesn't mean 'zero care' — a few key principles will keep your collection healthy and blooming.",
      sections: [
        {
          heading: "Maximum Sunlight",
          body: "Most cacti need 6+ hours of direct sunlight daily. A south-facing windowsill is the prime spot. In low light, cacti etiolate (stretch toward light), becoming pale and distorted. Rotate the pot a quarter-turn every week to prevent leaning.",
          tips: [
            "6+ hours of direct sun daily is ideal",
            "Rotate weekly to prevent one-sided growth",
            "Stretching toward light = needs more sun",
          ],
        },
        {
          heading: "Watering in the Growing Season",
          body: "In spring and summer, water only when soil is completely dry — roughly every 2–3 weeks using the soak-and-dry method. In winter (dormancy), reduce to once every 6–8 weeks or stop entirely for desert species.",
          tips: [
            "Soak-and-dry method prevents rot",
            "Winter = near-zero water for desert cacti",
            "Use a moisture meter if unsure",
          ],
        },
        {
          heading: "The Right Soil Mix",
          body: "Never use regular potting soil — it retains too much moisture. Use a dedicated cactus mix, or mix your own: 50% coarse sand or perlite + 50% potting soil. Drainage is the single most critical factor in cactus care.",
        },
        {
          heading: "Getting Cacti to Bloom",
          body: "Many holiday and barrel cacti bloom with: bright summer light, proper watering cycle, and a cool dry winter rest period. When spring arrives after a dry winter, resume watering and move to maximum light — flowers often follow within weeks.",
        },
        {
          heading: "Repotting Safely",
          body: "Use folded newspapers or thick towels to grip spiny cacti during repotting. Repot every 2–3 years in spring. Choose a pot only 2–3 cm wider than the current one and ensure it has drainage holes.",
        },
      ],
      conclusion:
        "Cacti are among the most rewarding plants once you understand their simple language: maximum sun, minimal water, and excellent drainage. Master these three and your cactus collection will grow and bloom for decades.",
    },
  },

  // ── FLOWERING PLANTS ─────────────────────────────────────────────────────
  {
    id: "11",
    slug: "marigold-growing-guide",
    title: "Marigold: India's Most Beloved Flower — Complete Growing Guide",
    excerpt:
      "Marigolds are India's garden icon — used in festivals, garlands, and as natural pest repellents. Learn to grow them abundantly.",
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1661142175513-a5f0871f1ad1?q=80&w=387&auto=format&fit=crop",
    readTime: "4 min read",
    date: "March 18, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Marigolds (Tagetes) are the golden stars of Indian gardens — bright, cheerful, and gloriously easy to grow. From Diwali celebrations to temple offerings, marigold garlands are woven into Indian culture. They also repel nematodes and pest insects, making them a companion-planting champion.",
      sections: [
        {
          heading: "Growing from Seeds",
          body: "Marigolds germinate quickly from seed. Sow 5–6 mm deep in moist seed mix. In warm Indian conditions, germination occurs in just 5–7 days. Thin seedlings at 5 cm, and transplant at 15–20 cm spacing when 10 cm high.",
          tips: [
            "Germinates in 5–7 days in warm conditions",
            "Transplant seedlings at 10 cm height",
            "Best sown October–November for winter blooms",
          ],
        },
        {
          heading: "Light and Position",
          body: "Marigolds need 6+ hours of direct sunlight daily. In shade they become leggy with few flowers. Raised beds, south-facing borders, and terrace pots all work perfectly.",
          tips: [
            "Full sun is a must",
            "Shade = fewer flowers and weak growth",
            "Great for terrace and balcony growing",
          ],
        },
        {
          heading: "Watering",
          body: "Water regularly and deeply — every 1–2 days in summer, every 2–3 days in winter. Avoid wetting flower heads, which promotes grey mould. Water at the base throughout the season.",
        },
        {
          heading: "Deadheading for More Blooms",
          body: "Remove spent flower heads regularly (deadheading). This prevents seed setting and directs energy into new flowers. With regular deadheading, marigolds bloom non-stop for 4–5 months.",
          tips: [
            "Deadhead every 5–7 days",
            "Snap off spent heads at the base of the flower stem",
            "Save seeds from the last bloom of the season for next year",
          ],
        },
        {
          heading: "Companion Planting Benefits",
          body: "Marigolds release a chemical from their roots that repels soil nematodes — a pest that devastates vegetable roots. Plant them around tomatoes, peppers, and beans. Their scent also deters aphids and whiteflies from the overall garden area.",
        },
      ],
      conclusion:
        "Marigolds are a gardener's best friend — easy to grow, endlessly blooming, and naturally pest-repelling. Whether growing for beauty, for festivals, or for companion planting, they are one of the most rewarding plants in any Indian garden.",
    },
  },
  {
    id: "12",
    slug: "jasmine-plant-care-guide",
    title: "Jasmine Plant Care: Fragrance and Beauty in Your Garden",
    excerpt:
      "Jasmine's intoxicating fragrance makes it one of the most cherished plants in India. Keep the blooms coming with these easy care tips.",
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1712303064161-3ceedf76bf0e?q=80&w=435&auto=format&fit=crop",
    readTime: "4 min read",
    date: "March 15, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Jasmine (Jasminum sambac) — Mogra in India — is one of the world's most fragrant flowers. Its small star-shaped white blooms are used in hair adornment, garlands, attar oil, and religious offerings. Growing jasmine fills your space with an enchanting natural perfume, especially in the evenings.",
      sections: [
        {
          heading: "Ideal Growing Conditions",
          body: "Jasmine thrives in full sun to partial shade — 4–6 hours of direct sun promotes the best blooming. In warm Indian climates it grows vigorously and can be trained as a climber on a trellis, a sprawling shrub, or a potted balcony specimen.",
          tips: [
            "4–6 hours direct sun daily",
            "Protect from frost in North India winters",
            "Grows well in pots on balconies",
          ],
        },
        {
          heading: "Soil and Planting",
          body: "Plant in well-draining, fertile soil rich in organic matter: 60% garden soil, 30% compost, 10% coarse sand. Add a handful of bone meal to the bottom of the planting hole to encourage root establishment and future flowering.",
        },
        {
          heading: "Watering",
          body: "Water regularly with consistent moisture. Daily watering in Indian summers; reduce in winter. Good drainage is essential — Jasmine doesn't like sitting in waterlogged soil. Rainwater or stored water is preferable to chlorinated tap water.",
          tips: [
            "Consistent moisture during growing season",
            "Daily watering in Indian summers",
            "Reduce in winter dormancy",
          ],
        },
        {
          heading: "Fertilising for Fragrance",
          body: "Apply a phosphorus-rich fertiliser every fortnight during blooming season (March–September). Bone meal, superphosphate, or a flowering-plant fertiliser works well. Fermented banana peel liquid also intensifies bloom fragrance through extra potassium.",
        },
        {
          heading: "Training and Pruning",
          body: "Prune annually after the main flowering flush — cut back one-third to encourage fresh bushy growth. Train climbing varieties onto a trellis or pergola by tying stems loosely with garden twine. Light pruning throughout the season keeps the plant tidy.",
        },
      ],
      conclusion:
        "A jasmine plant is a gift that keeps giving — season after season of fragrant white blooms. With sunshine, regular feeding, and some pruning, it will be one of the most treasured plants you own.",
    },
  },
  {
    id: "13",
    slug: "rose-bush-care-tips-india",
    title: "Rose Bush Care: Growing the Queen of Flowers in India",
    excerpt:
      "Roses can thrive in Indian gardens with the right care. Learn watering, fertilising, pruning, and disease management to get stunning blooms.",
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1652513710860-61970e3e5f69?q=80&w=1032&auto=format&fit=crop",
    readTime: "5 min read",
    date: "March 12, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Roses have earned their 'Queen of Flowers' title — and they can flourish in Indian gardens too. While they have a reputation for being demanding, understanding their basic needs makes growing roses deeply rewarding. With the right care, your rose bush can bloom from October to March almost continuously.",
      sections: [
        {
          heading: "The Best Time to Plant",
          body: "In India, plant bare-root or grafted roses between October and November when the weather cools. This gives roots time to establish before the main flowering season. Container-grown roses can be planted year-round, though avoid planting in peak summer.",
          tips: [
            "October–November is the ideal planting window",
            "Container roses can be planted year-round",
            "Avoid planting in May–June heat",
          ],
        },
        {
          heading: "Sunlight and Air Circulation",
          body: "Roses need at least 6 hours of direct sunlight daily. Good air circulation between bushes prevents fungal problems — plant at least 60–90 cm apart. Avoid planting near walls on the west side that trap heat.",
        },
        {
          heading: "Watering",
          body: "Water roses at the base, never overhead. Wet foliage promotes powdery mildew and black spot. Water deeply every 2–3 days in cooler months and daily in summer. The soil should be moist but not waterlogged at all times.",
          tips: [
            "Never water overhead — wet leaves cause disease",
            "Deep watering encourages deep roots",
            "Mulch to conserve moisture",
          ],
        },
        {
          heading: "Fertilising Schedule",
          body: "Feed roses every 3–4 weeks during the growing season: a balanced fertiliser (10-10-10) in October–November to encourage establishment, then switch to a high-phosphorus formula (5-10-5) once buds begin to form. Also apply seaweed extract monthly for overall vigour.",
        },
        {
          heading: "Pruning and Disease Control",
          body: "Hard prune in September to prepare for the main bloom season. Cut back to outward-facing buds, removing dead, weak, or crossing shoots. Spray preventively with neem oil every 2 weeks for black spot and powdery mildew. Discard diseased leaves — don't compost them.",
          tips: [
            "Hard prune in September for October–November blooms",
            "Always prune to outward-facing buds",
            "Neem oil spray prevents most fungal diseases",
          ],
        },
      ],
      conclusion:
        "Roses reward patience and consistent care with some of the most magnificent flowers in the garden. Start with disease-resistant varieties suited to your region, and the learning curve shortens quickly.",
    },
  },

  // ── HANGING PLANTS ───────────────────────────────────────────────────────
  {
    id: "14",
    slug: "string-of-pearls-care-guide",
    title: "String of Pearls: The Showstopping Hanging Succulent",
    excerpt:
      "String of Pearls is one of the most unusual and beautiful trailing succulents. Learn how to keep its bead-like foliage lush and cascading.",
    category: "Hanging Plants",
    image:
      "https://images.unsplash.com/photo-1765041425888-39e09e148a80?q=80&w=387&auto=format&fit=crop",
    readTime: "4 min read",
    date: "March 10, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Curio rowleyanus — String of Pearls — is one of the most visually striking plants you can grow. Its trailing strings of spherical bead-like leaves cascade beautifully from hanging baskets. Though it has a reputation for being tricky, understanding its needs makes it surprisingly manageable.",
      sections: [
        {
          heading: "Light: Bright Is Essential",
          body: "String of Pearls needs bright light to maintain its distinctive bead shape. In low light, the 'pearls' elongate as the plant etiolates to chase light. An east or south-facing window with 4–6 hours of gentle sun is ideal.",
          tips: [
            "4–6 hours of bright indirect light",
            "Morning sun is gentler than afternoon sun",
            "Stretched pearls indicate insufficient light",
          ],
        },
        {
          heading: "Watering: The Most Critical Factor",
          body: "String of Pearls is very sensitive to overwatering. The beads are water-storing organs. Water when the top 2 inches of soil are dry, then water thoroughly until it drains. In winter, water just once a month. Mushy, translucent pearls signal overwatering.",
          tips: [
            "Plump pearls = hydrated; shriveled = thirsty; mushy = overwatered",
            "Water once every 2–3 weeks in warm months",
            "Cut watering to monthly in winter",
          ],
        },
        {
          heading: "Soil and Basket Choice",
          body: "Use very fast-draining succulent mix — 50% cactus soil + 50% coarse sand or perlite. Hanging baskets with drainage and coconut coir liners work well, as they dry quickly. Terracotta hanging pots also aid in moisture management.",
        },
        {
          heading: "Propagation",
          body: "Propagates very easily from stem cuttings. Snip a 10–15 cm healthy strand, remove the bottom 2–3 pearls to expose the stem node, and lay it on moist succulent mix. Within 2–3 weeks, roots develop at each node.",
        },
        {
          heading: "Scented Flowers",
          body: "With the right conditions (cooler temperatures and reduced winter watering), mature plants produce small white flowers with a sweet cinnamon-vanilla scent in late spring after a dry winter rest. The flowers are a bonus — the cascading strings are the real show.",
        },
      ],
      conclusion:
        "String of Pearls rewards careful attention to light and watering with one of the most theatrical trailing effects in the plant world. Get the basics right and this unusual succulent becomes an unforgettable feature of your home.",
    },
  },
  {
    id: "15",
    slug: "hanging-plants-care-tips",
    title: "Hanging Plants: 7 Tips to Keep Them Lush All Year",
    excerpt:
      "Hanging plants bring greenery to overlooked vertical spaces — but they dry out fast and have unique care needs. Here's how to nail it.",
    category: "Hanging Plants",
    image:
      "https://images.unsplash.com/photo-1550074930-5d91cddbf0cc?q=80&w=870&auto=format&fit=crop",
    readTime: "4 min read",
    date: "March 6, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Hanging plants transform dull corners, balconies, and ceilings into living green canopies. But they come with their own set of challenges — they dry out faster than pot plants, they can be tricky to water evenly, and they need to be rotated for balanced growth. These seven tips will make you a hanging-plant pro.",
      sections: [
        {
          heading: "1. Choose the Right Plant for the Spot",
          body: "Match the plant to your light conditions. Bright sun: String of Pearls, Portulacaria. Moderate indirect light: Boston Fern, Pothos, Spider Plant. Low light: Heart-leaf Philodendron, Wandering Dude. Never force a sun-lover into a dark corner.",
          tips: [
            "Boston Fern and Pothos are most forgiving",
            "Spider Plants produce trailing 'babies' that look stunning",
            "Succulents only work in full-sun hanging spots",
          ],
        },
        {
          heading: "2. Water More Frequently",
          body: "Hanging baskets lose moisture faster than pots because they have more exposed surface area and are often made of breathable materials. In summer, some hanging plants need watering daily. A good indicator: lift the basket — if it feels very light, it's water-stressed.",
          tips: [
            "Check daily in summer — hanging baskets dry out fast",
            "Water until it drains from the bottom",
            "Self-watering hanging baskets are a game-changer",
          ],
        },
        {
          heading: "3. Feed Regularly",
          body: "Nutrients wash out faster with frequent watering. Feed hanging plants every 2 weeks during the growing season with a balanced liquid fertiliser. Slow-release fertiliser pellets embedded in the soil at planting also work well for 3–4 month nutrition.",
        },
        {
          heading: "4. Rotate for Even Growth",
          body: "Plants always grow toward light. Rotate hanging baskets 90–180° weekly to ensure all sides get light exposure and the plant grows symmetrically. Without rotation, you'll get a lopsided, one-sided plant.",
        },
        {
          heading: "5. Prune and Pinch Back",
          body: "Pinch back the tips of trailing stems regularly — it promotes bushier, denser growth. Without pinching, most hanging plants become long and spindly. Prune dead or yellowing stems promptly to redirect energy to healthy growth.",
        },
        {
          heading: "6. Repot Annually",
          body: "Hanging baskets become root-bound faster because they're usually smaller. Repot into a fresh mix at the start of each growing season. Add slow-release fertiliser and perlite to the fresh mix for sustained nutrition and drainage.",
        },
        {
          heading: "7. Watch for Pests Under the Canopy",
          body: "The dense, hanging foliage creates a sheltered microclimate that spider mites and fungus gnats love. Inspect the undersides of leaves weekly. Spray with diluted neem oil monthly as a preventive measure.",
        },
      ],
      conclusion:
        "Hanging plants ask for a little more attention than floor pots — but they repay that care with greenery in spaces that would otherwise be empty. Master these seven habits and your hanging plants will be the envy of every visitor.",
    },
  },

  // ── SOIL & COMPOSTING ────────────────────────────────────────────────────
  {
    id: "16",
    slug: "understanding-soil-types-for-plants",
    title: "Understanding Soil Types: The Key to Thriving Plants",
    excerpt:
      "The right soil is the foundation of every healthy plant. Learn about sandy, clay, loam, and peaty soils — and which plants suit each.",
    category: "Soil & Composting",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop",
    readTime: "6 min read",
    date: "March 10, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Soil is a living ecosystem, not just a growing medium. Understanding your soil type is the single most impactful thing you can do for your garden. Different plants evolved for different soils — succulents for sandy fast-draining ground; ferns for moisture-retaining forest loam; vegetables for rich, well-structured loam.",
      sections: [
        {
          heading: "Sandy Soil",
          body: "Sandy soil has large particles that drain quickly. It warms up fast in spring but holds very little water or nutrients, requiring frequent irrigation and feeding. Improve by adding compost and organic matter annually.",
          tips: [
            "Best plants: aloe, cacti, lavender, carrots, rosemary",
            "Add compost to improve water retention",
            "Frequent watering and feeding needed",
          ],
        },
        {
          heading: "Clay Soil",
          body: "Clay has tiny particles that hold water and nutrients well but becomes waterlogged easily. It's slow to warm and can be hard to dig. Improve with grit, perlite, and organic matter — never sand alone, which creates concrete-like hardpan.",
          tips: [
            "Best plants: water-loving natives, asters, roses",
            "Improve with organic compost and grit",
            "Avoid walking on clay beds — compaction kills structure",
          ],
        },
        {
          heading: "Loamy Soil: The Gold Standard",
          body: "Loam is the ideal garden soil — a balanced mix of sand, silt, and clay. It holds enough moisture while draining well, is rich in nutrients, and is easy to work with. Most vegetables, fruit trees, and flowering plants thrive in well-maintained loam.",
          tips: [
            "Dark colour and crumbly texture are hallmarks of good loam",
            "Top-dress with compost annually to maintain structure",
            "Suitable for almost all plants",
          ],
        },
        {
          heading: "Peaty Soil",
          body: "Peaty soil is high in organic matter, moisture-retentive, and acidic (pH 4–5). Excellent for acid-loving plants like blueberries, rhododendrons, azaleas, and ferns. Adding lime raises the pH for vegetable growing.",
        },
        {
          heading: "How to Test Your Soil",
          body: "A simple pH test kit reveals your soil type. pH 6.0–7.0 is ideal for most plants. Observe drainage: pour water on bare soil — if it pools for 30+ minutes, drainage is poor (clay). Disappears in under 5 minutes? Sandy soil. Squeeze a fistful: loam holds shape then crumbles; clay stays firm; sand falls apart.",
          tips: [
            "pH 6.0–7.0 is the sweet spot for most plants",
            "Pooling water indicates drainage problems",
            "Test pH seasonally — it changes",
          ],
        },
      ],
      conclusion:
        "Working with your soil type rather than against it is the secret to effortless gardening. Understand what you have, improve it strategically, and choose plants naturally suited to your conditions.",
    },
  },
  {
    id: "17",
    slug: "how-to-make-organic-compost-home",
    title: "How to Make Organic Compost at Home",
    excerpt:
      "Composting turns kitchen and garden waste into 'black gold'. Follow this step-by-step guide to make rich, nutrient-dense compost for free.",
    category: "Soil & Composting",
    image:
      "https://images.unsplash.com/photo-1539902879984-7a1fa3844e48?q=80&w=870&auto=format&fit=crop",
    readTime: "6 min read",
    date: "March 7, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Compost is called 'black gold' by gardeners — and for good reason. It improves soil structure, adds nutrients, encourages beneficial soil microbes, and reduces your household waste. The best part: it's free, simple, and immensely satisfying to make.",
      sections: [
        {
          heading: "Greens and Browns",
          body: "Successful compost needs 'greens' (nitrogen-rich, moist) and 'browns' (carbon-rich, dry). Greens: vegetable and fruit scraps, coffee grounds, grass clippings. Browns: dried leaves, cardboard, newspaper, straw, twigs. Never add meat, dairy, oily food, or diseased plants.",
          tips: [
            "Aim for 3 parts browns to 1 part greens by volume",
            "Chop materials smaller for faster decomposition",
            "Never add cooked food or meat to home bins",
          ],
        },
        {
          heading: "Setting Up Your Compost Bin",
          body: "A basic bin can be a perforated plastic dustbin, wooden pallet frame, or clay pot with holes. Position it on bare soil so earthworms can enter from below. Layer the base with twigs or straw for drainage.",
          tips: [
            "Bare earth base lets beneficial worms enter",
            "At least 1 cubic metre for efficient decomposition",
            "Terracotta composters work well on apartment balconies",
          ],
        },
        {
          heading: "The Composting Process",
          body: "Layer greens and browns alternately, keeping the pile moist but not soaking (like a wrung-out sponge). Turn the pile every 10–14 days to aerate it. Oxygen is essential for decomposition. Hot-composting produces finished compost in 4–8 weeks; cold composting takes 3–6 months.",
          tips: [
            "Squeeze a handful — a few drops should come out",
            "Turning speeds up the process significantly",
            "A thermometer reading 55–65°C means hot-composting",
          ],
        },
        {
          heading: "Troubleshooting Common Problems",
          body: "Pile smells bad: too many greens, not enough air — add browns and turn. Pile is dry: too little moisture — water gently and turn. Pile attracts pests: meat or cooked food may have been added — keep covered. Fruit flies: bury fresh fruit scraps under a layer of browns.",
        },
        {
          heading: "Using Your Compost",
          body: "Finished compost is dark, crumbly, and earthy-smelling. Use to: top-dress garden beds (5 cm layer), mix into potting soil (up to 30%), make compost tea (1 part compost in 5 parts water), or mulch around trees and shrubs.",
          tips: [
            "Mature compost smells pleasant, like earth after rain",
            "Use within 6–12 months for maximum nutrition",
            "Even partially mature compost is beneficial as mulch",
          ],
        },
      ],
      conclusion:
        "Composting is one of the most impactful things a home gardener can do — for their plants, their soil ecosystem, and the environment. Start simple, be patient, and within months you'll have a steady supply of the most effective plant food on earth.",
    },
  },
  {
    id: "18",
    slug: "best-potting-mix-indoor-outdoor-plants",
    title: "Best Potting Mix for Indoor vs Outdoor Plants",
    excerpt:
      "Not all potting mixes are equal. Using the wrong soil can make or break your plant's health. Choose and mix the perfect soil for any plant.",
    category: "Soil & Composting",
    image:
      "https://images.unsplash.com/photo-1693385998902-656569d40b88?q=80&w=464&auto=format&fit=crop",
    readTime: "5 min read",
    date: "March 4, 2026",
    author: "Ambey Nursery Team",
    content: {
      intro:
        "Walk into any nursery and you'll face dozens of soil options. The right choice depends on where you're growing (indoors or outdoors), the type of plant, and the container. This guide breaks down what to look for and how to mix your own cost-effective blends.",
      sections: [
        {
          heading: "Why Regular Garden Soil Doesn't Work in Pots",
          body: "Garden soil compacts in pots, blocking drainage and oxygen to roots. It often contains weed seeds and pathogens that are harmless in open beds but devastating in containers. Always use a dedicated potting mix — or mix your own.",
          tips: [
            "Never use pure garden soil in containers",
            "Garden soil + pot = compaction + root rot",
            "Raised terrace beds also benefit from improved mixes",
          ],
        },
        {
          heading: "Universal Indoor Potting Mix",
          body: "A reliable all-purpose indoor mix: 40% coconut coir (holds moisture, prevents compaction), 30% garden compost (nutrients + microbes), 20% perlite (drainage and aeration), 10% river sand. Works well for tropical houseplants including pothos, ferns, and foliage plants.",
          tips: [
            "Coconut coir is a sustainable peat alternative",
            "Perlite is essential for container drainage",
            "Add vermicompost for extra nutrition",
          ],
        },
        {
          heading: "Mix for Succulents and Cacti",
          body: "Succulents and cacti need fast drainage above all else. Use: 50% coarse sand or perlite, 30% cactus potting mix, 20% fine gravel or grit. Never use mixes with moisture-retaining crystals for succulents — they cause root rot.",
          tips: [
            "50%+ drainage material is essential",
            "Avoid moisture-retaining crystal mixes",
            "Terracotta pots + fast-draining mix = ideal combination",
          ],
        },
        {
          heading: "Mix for Flowering Outdoor Plants",
          body: "For roses, hibiscus, and flowering container plants: 40% red loam or garden soil, 30% well-rotted farmyard manure or compost, 20% river sand, 10% bone meal. Higher organic matter provides sustained nutrition for heavy-blooming plants.",
        },
        {
          heading: "Refreshing Old Potting Mix",
          body: "Potting mix degrades after 1–2 years — it loses structure, nutrition, and drainage capacity. Rejuvenate it: remove the top 5 cm, add fresh compost and perlite, mix gently into existing soil. Apply a top-dressing of vermicompost to restore microbial activity.",
          tips: [
            "Refresh annually, fully replace every 2–3 years",
            "Signs of degraded mix: water pools, stale smell, slow growth",
            "Repot at the same time for maximum effect",
          ],
        },
      ],
      conclusion:
        "The right soil mix is like a good foundation — invisible but absolutely essential. By understanding your plant's drainage, nutrition, and aeration needs, you can tailor the perfect growing medium and see dramatically improved plant health.",
    },
  },
];
