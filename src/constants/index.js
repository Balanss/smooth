
import im1 from "../assets/image/im1.png";
import im2 from "../assets/image/im2.png";
import im3 from "../assets/image/im3.png";
import im4 from "../assets/image/im4.png";
import im5 from "../assets/image/im5.png";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: 'Bike',
    title: 'Bike',
  }

];



const experiences = [
  {
    title: " online marketplace for paintings",
    company_name: "AGE 10",
    icon: im1,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Shreyaan Daga initiated his entrepreneurial journey at the age of 10 by creating an online marketplace for paintings, gradually expanding it to involve his friends."
    ],
  },
  {
    title: "life-changing journey",
    company_name: "AGE 15",
    icon: im2,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Inspired by a Buddha story, at 15, Shreyaan embarked on a life-changing journey of giving away his possessions(the bicycle was the most important one to him), ",
    ],
  },
  {
    title: "Online Live Learning ",
    company_name: "February 15, 2022",
    icon: im3,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "On February 15, 2022, Shreyaan conceived the idea for Online Live Learning (OLL), an edTech startup, after drawing inspiration from his charitable experiences, "
    ],
  },
  {
    title: "youngest entrepreneur ",
    company_name: "Shark Tank India",
    icon: im4,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Shreyaan Daga became the youngest entrepreneur to secure funding on Shark Tank India Season 2",
      "Successfully pitching OLL and securing a deal with investors Vineeta Singh and Piyush Bansal",

    ],
  },
  {
    title: "30 lakhs for 5% equity with Vineeta and Piyush",
    company_name: "to impact 1 billion learners",
    icon: im5,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Shreyaan's commitment to OLL's mission was highlighted on Shark Tank as he aimed to impact 1 billion learners,ultimately securing a deal of 30 lakhs for 5% equity with Vineeta and Piyush"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",

  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",

  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",

  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/",
  },
];

export { experiences, testimonials, projects };