export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  category: "Programming" | "Computer Science" | "Tools";
  clusterId?: "dsa-flow" | "swe-flow" | "db-flow" | "tools-flow";
  connections?: string[];
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Software Development" | "Web Application" | "Embedded & IoT" | "Systems Engineering";
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string; // Only when a real URL exists
}

export interface PlatformStat {
  platform: string;
  handle: string;
  profileUrl: string;
  rating?: number | string;
  maxRating?: number | string;
  badge?: string;
  solvedCount?: string;
  rankInfo: string;
  accent: "purple" | "cyan" | "amber";
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  organization: string;
  term: string;
  award: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  status: string;
  field: string;
  coursework: string[];
}

export const portfolioData = {
  personal: {
    name: "Mim Mozahid",
    shortName: "Mozahid",
    title: "Software Engineering Student & Competitive Programmer",
    summary:
      "I am a Software Engineering student with a strong interest in competitive programming, algorithms, problem solving, and software development. I enjoy understanding how things work, solving challenging problems, and turning ideas into software.",
    status: "Current Student • Open to Engineering Opportunities",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    email: "mimmozahid.m@gmail.com",
    github: "https://github.com/mimmozahid",
    linkedin: "https://linkedin.com",
    cpRepo: "https://github.com/mimmozahid",
    motto: "From solving problems to building software.",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mimmozahid",
      handle: "@mimmozahid",
      icon: "github",
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/mim_mozahid",
      handle: "mim_mozahid",
      icon: "codeforces",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/mim_mozahid",
      handle: "mim_mozahid",
      icon: "codechef",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/mim_mozahid",
      handle: "mim_mozahid",
      icon: "leetcode",
    },
  ],

  // 2. Dual Identity (Two Sides of My Journey)
  dualIdentity: {
    cp: {
      title: "COMPETITIVE PROGRAMMER",
      subtitle: "The Algorithmic Mindset",
      accent: "purple",
      coreAspects: [
        { name: "Algorithms", detail: "Complexity bounds, graph theory, greedy paradigms, dynamic states" },
        { name: "Data Structures", detail: "Trees, graphs, heaps, custom hash tables, segment trees" },
        { name: "Problem Solving", detail: "Decomposing intricate constraints into verifiable logic under pressure" },
        { name: "Contest Practice", detail: "Regular participation in timed rounds on CodeChef, Codeforces, and LeetCode" },
      ],
      visualNodes: ["Arrays", "Graph Nodes", "Algorithmic Lines", "Code Fragments"],
    },
    swe: {
      title: "SOFTWARE ENGINEERING",
      subtitle: "The Systems Builder",
      accent: "cyan",
      coreAspects: [
        { name: "OOP", detail: "Encapsulation, inheritance, modular polymorphism, clean design patterns" },
        { name: "Software Development", detail: "Full lifecycle engineering from specifications to testable software" },
        { name: "Databases", detail: "Relational modeling, SQL transactions, schema normalisation, querying" },
        { name: "Projects", detail: "Practical implementations bridging hardware, backend logic, and user interfaces" },
        { name: "System Thinking", detail: "Modular component boundaries, API contracts, deterministic data flows" },
      ],
      visualNodes: ["Modules", "Connected Components", "API Flow", "Database Nodes"],
    },
  },

  // 3. Skills: Exactly as requested
  skills: {
    programming: ["C++", "Java", "C"],
    computerScience: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Problem Solving",
      "DBMS",
      "SQL",
    ],
    tools: ["Git", "GitHub", "Linux", "VS Code"],
    // Connections / Clusters requested
    clusters: [
      {
        id: "cpp-dsa",
        title: "Algorithmic Pipeline",
        accent: "purple",
        nodes: ["C++", "DSA", "Algorithms", "Problem Solving"],
        flowText: "C++ ↕ DSA ↕ Algorithms ↕ Problem Solving",
        description: "High-performance algorithmic computation and competitive problem solving.",
      },
      {
        id: "java-oop",
        title: "Software Engineering Pipeline",
        accent: "cyan",
        nodes: ["Java", "OOP", "Software Development"],
        flowText: "Java ↕ OOP ↕ Software Development",
        description: "Object-oriented modeling, robust architecture, and maintainable software construction.",
      },
      {
        id: "dbms-sql",
        title: "Data Persistence Pipeline",
        accent: "amber",
        nodes: ["SQL", "DBMS", "Database Management"],
        flowText: "SQL ↕ DBMS ↕ Database Systems",
        description: "Relational data structures, schema normalization, and transactional consistency.",
      },
      {
        id: "dev-tools",
        title: "Engineering & Tooling Pipeline",
        accent: "emerald",
        nodes: ["Git", "GitHub", "Linux", "VS Code"],
        flowText: "Git ↕ GitHub ↕ Linux ↕ VS Code",
        description: "Deterministic version control, UNIX command line workflows, and efficient development environments.",
      },
    ],
  },

  // 4. Projects: The 4 known projects with no invented URLs
  projects: [
    {
      id: "employee-management-system",
      title: "Employee Management System",
      category: "Software Development",
      description:
        "Desktop and backend system developed in Python integrated with a SQL database for managing employee records, organizational role allocations, department indexing, and secure data persistence.",
      tagline: "Structured corporate record management with relational persistence.",
      techStack: ["Python", "SQL", "DBMS", "OOP"],
      highlights: [
        "Relational database schemas with SQL persistence",
        "Employee records, role assignments & department management",
        "CRUD operational workflows with structured query verification",
      ],
      githubUrl: "https://github.com/mimmozahid",
    },
    {
      id: "ecommerce-web-app",
      title: "E-commerce Web Application",
      category: "Web Application",
      description:
        "Mobile-focused web application designed with dedicated product management workflows and robust administrative capabilities for managing catalog items and system configurations.",
      tagline: "Mobile-first e-commerce system with admin management controls.",
      techStack: ["Web Development", "Mobile-Focused UI", "Product Management", "Admin Dashboard"],
      highlights: [
        "Mobile-first responsive interface for catalog browsing",
        "Product catalog creation, editing, and inventory management",
        "Dedicated administrator portal for store operation management",
      ],
      githubUrl: "https://github.com/mimmozahid",
    },
    {
      id: "esp32-parking-system",
      title: "ESP32 Automated Parking System",
      category: "Embedded & IoT",
      description:
        "Hardware-software IoT automated parking management system built around an ESP32 microcontroller with RFID access validation, proximity sensors, servo-actuated gate barrier, and live LCD slot tracking.",
      tagline: "IoT parking automation with real-time slot telemetry & barrier control.",
      techStack: ["ESP32", "RFID", "Sensors", "Servo", "LCD", "Parking-Slot Management", "C/C++"],
      highlights: [
        "RFID authentication for vehicle check-in and checkout",
        "Ultrasonic / infrared sensors for real-time slot vacancy detection",
        "Servo motor barrier gate control synchronized with sensor telemetry",
        "LCD display unit rendering live slot availability count",
      ],
      githubUrl: "https://github.com/mimmozahid",
    },
    {
      id: "investigation-management-system",
      title: "Investigation Management System",
      category: "Systems Engineering",
      description:
        "Structured software platform tailored for managing investigators, creating specialized investigation teams/groups, and delegating case assignments with clear tracking and accountability.",
      tagline: "Role-based investigator coordination and case assignment platform.",
      techStack: ["Software Architecture", "Database Management", "Officer Grouping", "Assignment Workflows"],
      highlights: [
        "Officer and investigator profile management",
        "Dynamic group formation and unit specialization",
        "Investigation assignment delegation and lifecycle tracking",
      ],
      githubUrl: "https://github.com/mimmozahid",
    },
  ] as ProjectItem[],

  // 5. Competitive Programming: Exact ratings & statistics
  competitiveProgramming: {
    title: "MY ALGORITHMIC JOURNEY",
    subtitle: "Precision under time and memory constraints.",
    platforms: [
      {
        platform: "CodeChef",
        handle: "mim_mozahid",
        profileUrl: "https://www.codechef.com/users/mim_mozahid",
        badge: "2 Star",
        rating: 1442,
        rankInfo: "2 Star (Rating: 1442)",
        accent: "purple",
      },
      {
        platform: "Codeforces",
        handle: "mim_mozahid",
        profileUrl: "https://codeforces.com/profile/mim_mozahid",
        maxRating: 1299,
        rating: 1299,
        rankInfo: "Max Rating: 1299",
        accent: "purple",
      },
      {
        platform: "LeetCode",
        handle: "mim_mozahid",
        profileUrl: "https://leetcode.com/u/mim_mozahid",
        solvedCount: "70+ Problems Solved",
        rankInfo: "70+ Problems Solved",
        accent: "cyan",
      },
    ] as PlatformStat[],
    focusAreas: [
      {
        title: "Contest Practice",
        description: "Consistent participation in live timed rounds, tackling problem statements under asymptotic time constraints.",
      },
      {
        title: "Problem Solving",
        description: "Decomposing mathematical edge-cases, dynamic transitions, and graph connectivity.",
      },
      {
        title: "Contest Repository",
        description: "Centralized GitHub repository organizing contest submissions, algorithmic templates, and clean modular solutions.",
        repoUrl: "https://github.com/mimmozahid",
      },
    ],
  },

  // 6. Achievements: Only the verified achievement
  achievements: [
    {
      id: "codetrap-2026",
      title: "1st Runner-Up",
      event: "CodeTrap Problem Solving Competition",
      term: "Spring 2026",
      organization: "Software Engineering Club, Daffodil International University",
      award: "1st Runner-Up",
      description:
        "Secured the 1st Runner-Up position in the CodeTrap Problem Solving Competition organized by the Software Engineering Club at Daffodil International University.",
    },
  ] as AchievementItem[],

  // 7. Education: Exactly as requested, no fake CGPA or dates
  education: {
    institution: "Daffodil International University",
    degree: "Software Engineering",
    status: "Current student",
    field: "Software Engineering",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Software Development Fundamentals",
      "Structured Programming",
    ],
  } as EducationItem,

  // 8. Terminal element data
  terminal: {
    path: "~/portfolio",
    commands: [
      { cmd: "whoami", output: "competitive_programmer" },
      { cmd: "focus", output: "problem_solving" },
      { cmd: "build", output: "software" },
      { cmd: "status", output: "learning..." },
    ],
  },

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Two Sides", href: "#dual-identity" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "CP Journey", href: "#cp" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};
