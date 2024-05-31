import { IQuestion } from "./App";

export const mockData: IQuestion[] = [
  {
    id: 1,
    type: "single",
    question: "What is the capital city of Japan?",
    answers: [
      {
        id: 1,
        answer: "Tokyo",
      },
      {
        id: 2,
        answer: "Osaka",
      },
      {
        id: 3,
        answer: "Kyoto",
      },
      {
        id: 4,
        answer: "Hiroshima",
      },
    ],
  },
  {
    id: 2,
    type: "multiple",
    question:
      "Which of the following programming languages is statically typed?",
    answers: [
      {
        id: 1,
        answer: "Java",
      },
      {
        id: 2,
        answer: "Python",
      },
      {
        id: 3,
        answer: "JavaScript",
      },
      {
        id: 4,
        answer: "Ruby",
      },
    ],
  },
  {
    id: 3,
    type: "short",
    question: "What does CSS stand for?",
  },
  {
    id: 4,
    type: "long",
    question:
      "Explain the concept of Object-Oriented Programming (OOP) and its advantages in software development.",
  },
  {
    id: 5,
    type: "single",
    question: "Who is the CEO of Tesla?",
    answers: [
      {
        id: 1,
        answer: "Elon Musk",
      },
      {
        id: 2,
        answer: "Jeff Bezos",
      },
      {
        id: 3,
        answer: "Bill Gates",
      },
      {
        id: 4,
        answer: "Mark Zuckerberg",
      },
    ],
  },
  {
    id: 6,
    type: "multiple",
    question: "Which of the following databases is a NoSQL database?",
    answers: [
      {
        id: 1,
        answer: "MySQL",
      },
      {
        id: 2,
        answer: "PostgreSQL",
      },
      {
        id: 3,
        answer: "MongoDB",
      },
      {
        id: 4,
        answer: "SQLite",
      },
    ],
  },
  {
    id: 7,
    type: "short",
    question: "What is the purpose of a VPN?",
  },
  {
    id: 8,
    type: "long",
    question:
      "Discuss the differences between HTTP and HTTPS protocols and why HTTPS is considered more secure.",
  },
  {
    id: 9,
    type: "single",
    question: "Who created the World Wide Web (WWW)?",
    answers: [
      {
        id: 1,
        answer: "Tim Berners-Lee",
      },
      {
        id: 2,
        answer: "Bill Gates",
      },
      {
        id: 3,
        answer: "Steve Jobs",
      },
      {
        id: 4,
        answer: "Mark Zuckerberg",
      },
    ],
  },
  {
    id: 10,
    type: "multiple",
    question: "Which of the following is an example of a front-end framework?",
    answers: [
      {
        id: 1,
        answer: "React",
      },
      {
        id: 2,
        answer: "Node.js",
      },
      {
        id: 3,
        answer: "Express",
      },
      {
        id: 4,
        answer: "Django",
      },
    ],
  },
  {
    id: 11,
    type: "short",
    question: "What is the purpose of the 'alt' attribute in HTML?",
  },
  {
    id: 12,
    type: "long",
    question:
      "Explain the concept of responsive web design and why it is important in modern web development.",
  },
  {
    id: 13,
    type: "single",
    question: "Which company developed the Windows operating system?",
    answers: [
      {
        id: 1,
        answer: "Microsoft",
      },
      {
        id: 2,
        answer: "Apple",
      },
      {
        id: 3,
        answer: "Google",
      },
      {
        id: 4,
        answer: "IBM",
      },
    ],
  },
  {
    id: 14,
    type: "multiple",
    question:
      "Which of the following cloud computing services is offered by Amazon?",
    answers: [
      {
        id: 1,
        answer: "Azure",
      },
      {
        id: 2,
        answer: "Google Cloud Platform",
      },
      {
        id: 3,
        answer: "AWS (Amazon Web Services)",
      },
      {
        id: 4,
        answer: "IBM Cloud",
      },
    ],
  },
];
