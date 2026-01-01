import type { Note } from "../types/note.ts";

const notes: Note[] = [
  {
    id: 1,
    title: "React Performance Optimization",
    tags: ["Dev", "React"],
    content:
      "Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks",
    lastEdited: "2024-10-29T10:15:00Z",
    isArchived: false,
  },
  {
    id: 2,
    title: "Japan Travel Planning",
    tags: ["Travel", "Personal"],
    content:
      "Japan Trip Planning - Spring 2025\n\nItinerary Draft:\nWeek 1: Tokyo\n- Shibuya and Harajuku\n- TeamLab Digital Art Museum\n- Day trip to Mount Fuji\n\nWeek 2: Kyoto & Osaka\n- Traditional temples\n- Cherry blossom viewing\n- Food tour in Osaka\n\nBudget: $3000\nAccommodation: Mix of hotels and traditional ryokans\nJR Pass: 14 days\n\nTODO: Book flights 6 months in advance",
    lastEdited: "2024-10-28T16:45:00Z",
    isArchived: false,
  },
  {
    id: 3,
    title: "Favorite Pasta Recipes",
    tags: ["Cooking", "Recipes"],
    content:
      "Classic Italian Recipes:\n\n1. Carbonara\n- Eggs, pecorino, guanciale\n- No cream ever!\n- Save pasta water\n\n2. Cacio e Pepe\n- Pecorino Romano\n- Fresh black pepper\n- Technique is crucial\n\n3. Arrabbiata\n- San Marzano tomatoes\n- Fresh garlic\n- Red pepper flakes\n\nNote: Always use high-quality ingredients",
    lastEdited: "2024-10-27T14:30:00Z",
    isArchived: false,
  },
  {
    id: 4,
    title: "TypeScript Migration Guide",
    tags: ["Dev", "React", "TypeScript"],
    content:
      "Project migration steps:\n\n1. Initial Setup\n- Install TypeScript dependencies\n- Configure tsconfig.json\n- Set up build pipeline\n\n2. Migration Strategy\n- Start with newer modules\n- Add type definitions gradually\n- Use 'any' temporarily for complex cases\n\n3. Testing Approach\n- Update test configuration\n- Add type testing\n- Validate build process\n\nDeadline: End of Q4 2024",
    lastEdited: "2024-10-26T09:20:00Z",
    isArchived: true,
  },
  {
    id: 5,
    title: "Weekly Workout Plan",
    tags: ["Fitness", "Health"],
    content:
      "Monday: Upper Body\n- Bench Press 4x8\n- Rows 4x10\n- Shoulder Press 3x12\n- Pull-ups 3 sets\n\nWednesday: Lower Body\n- Squats 4x8\n- Romanian Deadlifts 3x10\n- Lunges 3x12 each\n- Calf Raises 4x15\n\nFriday: Full Body\n- Deadlifts 3x5\n- Push-ups 3x12\n- Leg Press 3x12\n- Core Work\n\nCardio: Tuesday/Thursday - 30 min run",
    lastEdited: "2024-10-25T18:10:00Z",
    isArchived: false,
  },
  {
    id: 6,
    title: "Gift Ideas",
    tags: ["Personal", "Shopping"],
    content:
      "Birthday and Holiday Gift List:\n\nMom:\n- Cooking class subscription\n- Kindle Paperwhite\n- Spa day package\n\nDad:\n- Golf lessons\n- Wireless earbuds\n- BBQ accessories\n\nSister:\n- Art supplies set\n- Yoga mat kit\n- Coffee subscription\n\nBudget per person: $150-200",
    lastEdited: "2024-10-20T11:30:15Z",
    isArchived: true,
  },
  {
    id: 7,
    title: "React Component Library",
    tags: ["Dev", "React"],
    content:
      "Custom Component Library Structure:\n\n1. Basic Components\n- Button\n- Input\n- Card\n- Modal\n\n2. Form Components\n- FormField\n- Select\n- Checkbox\n- RadioGroup\n\n3. Layout Components\n- Container\n- Grid\n- Flex\n\nAll components need:\n- TypeScript definitions\n- Unit tests\n- Storybook documentation\n- Accessibility support",
    lastEdited: "2024-10-15T14:23:45Z",
    isArchived: true,
  },
  {
    id: 8,
    title: "Meal Prep Ideas",
    tags: ["Cooking", "Health", "Recipes"],
    content:
      "Weekly Meal Prep Plan:\n\nBreakfast Options:\n- Overnight oats\n- Egg muffins\n- Smoothie packs\n\nLunch Containers:\n- Greek chicken bowl\n- Buddha bowls\n- Tuna pasta salad\n\nSnacks:\n- Cut vegetables\n- Mixed nuts\n- Greek yogurt parfait\n\nPrep Time: Sunday 2-4pm\nStorage: Glass containers\nLasts: 4-5 days",
    lastEdited: "2024-10-12T09:45:15Z",
    isArchived: false,
  },
  {
    id: 9,
    title: "Reading List",
    tags: ["Personal", "Dev"],
    content:
      "Current Reading Queue:\n\n1. Technical Books\n- Clean Architecture by Robert Martin\n- Designing Data-Intensive Applications\n- TypeScript Design Patterns\n\n2. Personal Development\n- Deep Work by Cal Newport\n- Atomic Habits\n- The Psychology of Money\n\nCurrently Reading: Clean Architecture\nNext Up: Deep Work\n\nGoal: One book per month",
    lastEdited: "2024-10-05T12:20:30Z",
    isArchived: false,
  },
  {
    id: 10,
    title: "Fitness Goals 2025",
    tags: ["Fitness", "Health", "Personal"],
    content:
      "2025 Fitness Objectives:\n\n1. Strength Goals\n- Bench press: 225 lbs\n- Squat: 315 lbs\n- Deadlift: 405 lbs\n\n2. Cardio Goals\n- Run half marathon\n- 5k under 25 minutes\n\n3. Habits\n- Gym 4x per week\n- Daily 10k steps\n- Sleep 7+ hours\n\nTrack all workouts in Strong app",
    lastEdited: "2024-09-22T07:30:00Z",
    isArchived: false,
  },
  {
    id: 11,
    title: "Next.js 15 Features",
    tags: ["Dev", "React"],
    content:
      "Exploring Next.js 15 updates:\n- React 19 Support\n- Async Request APIs\n- Enhanced Caching semantics\n- Turbopack improvements",
    lastEdited: "2024-11-05T14:20:00Z",
    isArchived: false,
  },
  {
    id: 12,
    title: "Home Renovation Ideas",
    tags: ["Personal", "Home"],
    content:
      "Kitchen Remodel:\n- Quartz countertops\n- Subway tile backsplash\n- Smart lighting system\n- New island with seating",
    lastEdited: "2024-08-15T09:12:00Z",
    isArchived: false,
  },
  {
    id: 13,
    title: "SQL Query Optimization",
    tags: ["Dev", "Database"],
    content:
      "Checklist for slow queries:\n- Analyze execution plan\n- Verify index usage\n- Avoid SELECT *\n- Minimize JOINs in large datasets",
    lastEdited: "2024-07-20T11:45:00Z",
    isArchived: true,
  },
  {
    id: 14,
    title: "Morning Routine",
    tags: ["Health", "Personal"],
    content:
      "06:30 - Wake up\n06:45 - Meditation\n07:00 - Light stretching\n07:15 - Healthy breakfast\n07:45 - Deep work session",
    lastEdited: "2024-11-12T07:00:00Z",
    isArchived: false,
  },
  {
    id: 15,
    title: "Photography Gear List",
    tags: ["Hobbies", "Shopping"],
    content:
      "Need to buy:\n- 35mm f/1.8 Prime lens\n- Variable ND filter\n- Carbon fiber tripod\n- Peak Design strap",
    lastEdited: "2024-05-30T16:22:00Z",
    isArchived: true,
  },
  {
    id: 16,
    title: "Docker Cheat Sheet",
    tags: ["Dev", "DevOps"],
    content:
      "Common commands:\n- docker ps (list containers)\n- docker-compose up -d\n- docker system prune\n- docker logs -f [container]",
    lastEdited: "2024-10-02T13:10:00Z",
    isArchived: false,
  },
  {
    id: 17,
    title: "Investment Strategy",
    tags: ["Finance", "Personal"],
    content:
      "Portfolio allocation:\n- 70% Low cost index funds\n- 15% Tech stocks\n- 10% Bonds\n- 5% Crypto (BTC/ETH)",
    lastEdited: "2024-12-01T10:00:00Z",
    isArchived: false,
  },
  {
    id: 18,
    title: "Gardening Log - Summer",
    tags: ["Hobbies", "Home"],
    content:
      "Tomato plants are thriving. Need more nitrogen for the peppers. Remember to water the succulents only once a week.",
    lastEdited: "2024-06-15T18:30:00Z",
    isArchived: true,
  },
  {
    id: 19,
    title: "CSS Grid vs Flexbox",
    tags: ["Dev", "Design"],
    content:
      "Use Grid for: Overall page layout, 2D structures.\nUse Flexbox for: Content alignment, 1D navigation bars.",
    lastEdited: "2024-09-10T15:40:00Z",
    isArchived: false,
  },
  {
    id: 20,
    title: "Coffee Brewing Ratios",
    tags: ["Hobbies", "Cooking"],
    content:
      "V60: 1:15 (20g coffee, 300g water)\nFrench Press: 1:12 (30g coffee, 360g water)\nAeropress: 1:13\nWater temp: 94C",
    lastEdited: "2024-11-20T08:15:00Z",
    isArchived: false,
  },
  {
    id: 21,
    title: "Project Management Tools",
    tags: ["Dev", "Work"],
    content:
      "Evaluation of tools:\n- Jira: Great for Agile but complex\n- Linear: Fast and streamlined\n- Trello: Good for simple boards",
    lastEdited: "2024-03-12T11:00:00Z",
    isArchived: true,
  },
  {
    id: 22,
    title: "Language Learning: Spanish",
    tags: ["Personal", "Education"],
    content:
      "Vocabulary to learn:\n- Travel phrases\n- Food ordering\n- Directions\nGoal: Reach B1 level by next year",
    lastEdited: "2024-12-10T20:45:00Z",
    isArchived: false,
  },
  {
    id: 23,
    title: "Winter Skincare Routine",
    tags: ["Health", "Personal"],
    content:
      "Hydration focus:\n- Hyaluronic acid serum\n- Ceramide cream\n- Sunscreen even when cloudy!",
    lastEdited: "2024-12-28T09:30:00Z",
    isArchived: false,
  },
  {
    id: 24,
    title: "Tailwind CSS Tips",
    tags: ["Dev", "Design"],
    content:
      "- Use @apply for repetitive patterns\n- Group hover and focus states\n- Use JIT engine for custom values [top-[117px]]",
    lastEdited: "2024-08-22T14:15:00Z",
    isArchived: true,
  },
  {
    id: 25,
    title: "Weekend Hiking Trails",
    tags: ["Travel", "Fitness"],
    content:
      "Local trails to try:\n- Eagle Rock Loop\n- Pine Ridge Path\n- Sunset Valley Trail\nPack: 2L water, snacks, map",
    lastEdited: "2024-07-05T12:00:00Z",
    isArchived: false,
  },
  {
    id: 26,
    title: "Microservices Architecture",
    tags: ["Dev", "Architecture"],
    content:
      "Patterns:\n- API Gateway\n- Service Discovery\n- Circuit Breaker\n- Event-driven communication (Kafka)",
    lastEdited: "2024-04-18T10:30:00Z",
    isArchived: true,
  },
  {
    id: 27,
    title: "Houseplants Care",
    tags: ["Home", "Hobbies"],
    content:
      "Monstera: Bright indirect light.\nSnake Plant: Low light ok, water monthly.\nPothos: Very hardy, vine pruning.",
    lastEdited: "2024-11-30T17:40:00Z",
    isArchived: false,
  },
  {
    id: 28,
    title: "GraphQL vs REST",
    tags: ["Dev"],
    content:
      "GraphQL: Client specifies data shape, single endpoint.\nREST: Fixed data shape, multiple endpoints, easy caching.",
    lastEdited: "2024-02-14T16:00:00Z",
    isArchived: true,
  },
  {
    id: 29,
    title: "Meditation Techniques",
    tags: ["Health", "Personal"],
    content:
      "- Box Breathing (4-4-4-4)\n- Body Scan (Toe to Head)\n- Focused Attention (On breath)",
    lastEdited: "2024-12-15T06:45:00Z",
    isArchived: false,
  },
  {
    id: 30,
    title: "Holiday Baking List",
    tags: ["Cooking", "Recipes"],
    content:
      "- Gingerbread cookies\n- Peppermint bark\n- Pumpkin bread\n- Cranberry tart",
    lastEdited: "2024-12-20T11:20:00Z",
    isArchived: false,
  },
  {
    id: 31,
    title: "Unit Testing Best Practices",
    tags: ["Dev"],
    content:
      "- Test behavior, not implementation\n- Mock external dependencies\n- Keep tests fast and isolated",
    lastEdited: "2024-01-10T09:00:00Z",
    isArchived: true,
  },
  {
    id: 32,
    title: "Smart Home Setup",
    tags: ["Home", "Tech"],
    content:
      "- Hub: Home Assistant\n- Lights: Hue Bulbs\n- Sensors: Zigbee motion detectors\n- Scripts for morning and night",
    lastEdited: "2024-11-08T22:15:00Z",
    isArchived: false,
  },
  {
    id: 33,
    title: "UX Research Methods",
    tags: ["Design", "Work"],
    content:
      "- User Interviews\n- Card Sorting\n- A/B Testing\n- Usability Heatmaps",
    lastEdited: "2024-03-25T14:50:00Z",
    isArchived: true,
  },
  {
    id: 34,
    title: "Car Maintenance Schedule",
    tags: ["Personal", "Life"],
    content:
      "- Oil change: Every 5k miles\n- Tire rotation: Every 10k miles\n- Brake check: Once a year",
    lastEdited: "2024-10-15T08:30:00Z",
    isArchived: false,
  },
  {
    id: 35,
    title: "Podcast Recommendation",
    tags: ["Education", "Personal"],
    content:
      "- Syntax.fm (Web Dev)\n- The Daily (News)\n- Huberman Lab (Health)\n- Darknet Diaries (Cybersecurity)",
    lastEdited: "2024-11-25T19:00:00Z",
    isArchived: false,
  },
  {
    id: 36,
    title: "Git Workflow",
    tags: ["Dev"],
    content:
      "Feature Branching:\n1. git checkout -b feature/name\n2. Commit changes\n3. Push and Open PR\n4. Rebase main into branch",
    lastEdited: "2024-05-12T10:15:00Z",
    isArchived: true,
  },
  {
    id: 37,
    title: "Photography Workshop",
    tags: ["Hobbies", "Education"],
    content:
      "Mastering Manual Mode:\n- Aperture (Depth of field)\n- Shutter Speed (Motion blur)\n- ISO (Sensor sensitivity)",
    lastEdited: "2024-09-05T14:00:00Z",
    isArchived: false,
  },
  {
    id: 38,
    title: "Cleaning Checklist",
    tags: ["Home"],
    content:
      "Weekly: Dusting, Vacuuming, Laundry.\nMonthly: Windows, Fridge deep clean, Air filters.",
    lastEdited: "2024-12-29T13:40:00Z",
    isArchived: false,
  },
  {
    id: 39,
    title: "Node.js Security",
    tags: ["Dev", "Security"],
    content:
      "- Use Helmet.js\n- Rate limiting\n- Validate all inputs\n- Keep npm packages updated (npm audit)",
    lastEdited: "2024-06-20T11:10:00Z",
    isArchived: true,
  },
  {
    id: 40,
    title: "Vision Board 2025",
    tags: ["Personal", "Health"],
    content:
      "Focus areas:\n- Consistency in exercise\n- Building passive income\n- Traveling to Southeast Asia",
    lastEdited: "2024-12-30T15:00:00Z",
    isArchived: false,
  },
];

export { notes };
