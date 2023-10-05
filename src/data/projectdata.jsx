export const projectdata = [
  {
    text: "Twitter Clone",
    subtitle: "Social Media Platform",
    color: "#DDD1C3",
    image: "/portfolio_1.png  ",
    github: "https://github.com/edidiesky/twitter",
    website: "",
    features: [
      {
        text: "User Authentication",
        description:
          "Implemented a secure authentication system, allowing users to register, log in, and access protected endpoints. Generate authentication tokens for secure communication.",
      },
      {
        text: "Real-time Chat system",
        description:
          "I had to integrate socket.io to see the poer behind a real time communication",
      },
      {
        text: "Tweet CRUD",
        description:
          "I had to make use of the authentication tokens in managing users tweets. In other words, users were being allowed to create tweets, update them, like and retweet tweets. and not letting out, tweet deleting were being made exclusive only to the user of the tweet",
      },
      {
        text: "Chain commenting",
        description:
          "I had to use the power of mongoDb aggregation in implementing chain comments made by users on a particular tweet",
      },
    ],
    technologies: [
      "Next.js",
      "Typescript",
      "Node.js",
      "Typescript-Express.js",
      "Socket.io",
      "MongoDb",
      "Express.js",
      "Styled-components",
      "Zoid",
    ],
    role: [
      {
        text: "Backend Development",
        subtext: [
          "Utilized Express.js and node.js to build the RESTful API backend, implementing robust endpoints for data manipulation and retrieval",
          "I Designed and integrated middleware for authentication, authorization, and error handling.",
          "I had to designed models for each of the section I will have to interact with (User models, Listing models and many more)",
        ],
      },
      {
        text: "TypeScript Integration",
        subtext: [
          "Leveraged TypeScript to add static typing to JavaScript, preventing runtime errors and enhancing code quality",
          "Utilized interfaces and type annotations to define data structures and improve code readability.",
        ],
      },
      {
        text: "Frontend Development",
        subtext: [
          "Developed dynamic user interfaces using React.js, focusing on component-based architecture for reusability and modularity.",
          "Incorporated Redux (Redux toolkit) for state management, ensuring consistent application state and efficient data flow.",
          "Implemented responsive designs and intuitive user experiences that fit into the clone of airbnb, adhering to best UI/UX practices.",
          " I developed a chatting system were users can chat with owners of the gigs at real time basis ",
        ],
      },
      {
        text: "Database Integration:",
        subtext: [
          "Designed and integrated MongoDB as the database system for storing application data.",
          "Implemented data models and schema designs, User model, listing model and may more, that aligned with the applications requirements.",
        ],
      },
    ],
    title: "Redeveloping the social platform, Twitter",
    description:
      "I am thrilled to share the highlights of my recent project - a Twitter clone built from scratch using Next.js, Typescript, Typescript-Express.js and Typescript-Node.js. Leveraging these cutting-edge technologies, I aimed to recreate the essence of Twitter's platform, providing users with a seamless and immersive social experience.",
  },
  {
    text: "Airbnb Clone",
    color: "#48494B",
    subtitle: "A Rental Platform",
    image: "/cloning_2.jpg",
    github: "https://github.com/edidiesky/airbnb",
    website: "https://airbnb-6pnd.onrender.com",
    features: [
      {
        text: "Accommodation Listings",
        description:
          "I provided users  with a comprehensive list of available accommodations. Users can narrow down results based on location, dates, price range, and amenities.",
      },
      {
        text: "User Authentication",
        description:
          "Implemented a secure authentication system, allowing users to register, log in, and access protected endpoints. Generate authentication tokens for secure communication.",
      },
      {
        text: "Payment Integration (using stripe)",
        description: "I implemented payment acceptance with the aid of stripe",
      },
      {
        text: "Admin Dashboard",
        description:
          "Admin Dashboard was being created in order for uswer to have a view of bookings and make mangament of their bookings, profile",
      },
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDb",
      "Express.js",
      "Styled-components",
    ],
    role: [
      {
        text: "Backend Development",
        subtext: [
          "Utilized Express.js and node.js to build the RESTful API backend, implementing robust endpoints for data manipulation and retrieval",
          "I Designed and integrated middleware for authentication, authorization, and error handling.",
          "I had to designed models for each of the section I will have to interact with (User models, Listing models and many more)",
        ],
      },
      {
        text: "Frontend Development",
        subtext: [
          "Developed dynamic user interfaces using React.js, focusing on component-based architecture for reusability and modularity.",
          "Incorporated Redux (Redux toolkit) for state management, ensuring consistent application state and efficient data flow.",
          "Implemented responsive designs and intuitive user experiences that fit into the clone of airbnb, adhering to best UI/UX practices.",
        ],
      },
      {
        text: "Database Integration:",
        subtext: [
          "Designed and integrated MongoDB as the database system for storing application data.",
          "Implemented data models and schema designs, User model, listing model and may more, that aligned with the applications requirements.",
        ],
      },
    ],
    title: "Redeveloping the rental platform, Airbnb",
    description:
      "I am thrilled to share the highlights of my recent project - an Airbnb clone built from scratch using React and Node.js. Leveraging these cutting-edge technologies, I aimed to recreate the essence of Airbnb's platform, providing users with a seamless and immersive booking experience.",
  },
  {
    text: "Fiverr Clone",
    color: "#E49C4A",
    subtitle: "A freelancing Platform",
    image: "/gallery_3.png",
    github: "https://github.com/edidiesky/fiverrClone_1-",
    website: "",
    features: [
      {
        text: "User Authentication",
        description:
          "Implemented a secure authentication system, allowing users to register, log in, and access protected endpoints. Generate authentication tokens for secure communication.",
      },
      {
        text: "Payment Integration (using stripe)",
        description:
          "I had to integrate stripe in recieving payment from the various gigs that were being purchased by the user",
      },
      {
        text: "Admin Dashboard",
        description:
          "Admin Dashboard was being created in order for uswer to have a view of bookings and make mangament of their bookings, profile",
      },
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDb",
      "Express.js",
      "Styled-components",
      "Zoid",
    ],
    role: [
      {
        text: "Backend Development",
        subtext: [
          "Utilized Express.js and node.js to build the RESTful API backend, implementing robust endpoints for data manipulation and retrieval",
          "I Designed and integrated middleware for authentication, authorization, and error handling.",
          "I had to designed models for each of the section I will have to interact with (User models, Listing models and many more)",
        ],
      },
      {
        text: "Frontend Development",
        subtext: [
          "Developed dynamic user interfaces using React.js, focusing on component-based architecture for reusability and modularity.",
          "Incorporated Redux (Redux toolkit) for state management, ensuring consistent application state and efficient data flow.",
          "Implemented responsive designs and intuitive user experiences that fit into the clone of airbnb, adhering to best UI/UX practices.",
          " I developed a chatting system were users can chat with owners of the gigs at real time basis ",
        ],
      },
      {
        text: "Database Integration:",
        subtext: [
          "Designed and integrated MongoDB as the database system for storing application data.",
          "Implemented data models and schema designs, User model, listing model and may more, that aligned with the applications requirements.",
        ],
      },
    ],
    title: "Redeveloping the freelancing platform, Fiverr",
    description:
      "I am thrilled to share the highlights of my recent project - a Fiverr clone built from scratch using React and Node.js. Leveraging these cutting-edge technologies, I aimed to recreate the essence of Fiverr's platform, providing users with a seamless and immersive booking experience.",
  },

  {
    text: "Car dealer",
    subtitle: "A car Rental Concept",
    color: "#E2D1D9",
    image: "/car_1.png  ",
    website: "",
    github: "https://github.com/edidiesky/cardealer",
    features: [
      {
        text: "User Authentication",
        description:
          "Implemented a secure authentication system, allowing users to register, log in, and access protected endpoints. Generate authentication tokens for secure communication.",
      },
      {
        text: "Payment Integration (using stripe)",
        description:
          "I had to integrate stripe in recieving payment from the various gigs that were being purchased by the user",
      },
      {
        text: "Admin Dashboard",
        description:
          "Admin Dashboard was being created in order for uswer to have a view of bookings and make mangament of their bookings, profile",
      },
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDb",
      "Express.js",
      "Styled-components",
      "Zoid",
    ],
    role: [
      {
        text: "Backend Development",
        subtext: [
          "Utilized Express.js and node.js to build the RESTful API backend, implementing robust endpoints for data manipulation and retrieval",
          "I Designed and integrated middleware for authentication, authorization, and error handling.",
          "I had to designed models for each of the section I will have to interact with (User models, Listing models and many more)",
        ],
      },
      {
        text: "Frontend Development",
        subtext: [
          "Developed dynamic user interfaces using React.js, focusing on component-based architecture for reusability and modularity.",
          "Incorporated Redux (Redux toolkit) for state management, ensuring consistent application state and efficient data flow.",
          "Implemented responsive designs and intuitive user experiences that fit into the clone of airbnb, adhering to best UI/UX practices.",
          " I developed a chatting system were users can chat with owners of the gigs at real time basis ",
        ],
      },
      {
        text: "Database Integration:",
        subtext: [
          "Designed and integrated MongoDB as the database system for storing application data.",
          "Implemented data models and schema designs, User model, listing model and may more, that aligned with the applications requirements.",
        ],
      },
    ],
    title: "Redeveloping the car-rental platform, Car-dealers",
    description:
      "I am thrilled to share the highlights of my recent project - a Car-dealers clone built from scratch using React and Node.js. Leveraging these cutting-edge technologies, I aimed to recreate the essence of Car-dealers's platform, providing users with a seamless and immersive renting experience.",
  },
];


export const projectdata2 = [
  {
    color: "#48494B",
    image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c4eef86f4176c2a15df6f_home-1.jpg"
  },
  {
    color: "#E2D1D9",
    image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c50c6d2e06727eda64394_home-3.jpg"
  },
  {
    color: "#E49C4A",
    image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c53efb0943f4311bbc8d7_product.jpg"
  },
  {
    color: "#48494B",
    image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c523586f4178a6f160606_shop.jpg"
  },
  {
    color: "#000",
    image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c523586f4178a6f160606_shop.jpg"
  },
  {
    color: "#E2D1D9",
    image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c523586f4178a6f160606_shop.jpg"
  },
  {
    color: "#48494B",
    image: "/cloning_2.jpg"
  },
  {
    color: "#000",
    image: "/cloning_2.jpg"
  },
  {
    color: "#E49C4A",
    image: "/cloning_2.jpg"
  }
]