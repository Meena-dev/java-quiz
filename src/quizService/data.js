const qBank = [
  {
    question: "java.util.Collections is a: ",
    answers: ["Class", "Interface", "Object", "None of the above"],
    correct: "Class",
    questionId: "099099",
  },
  {
    question: "Methods such as reverse, shuffle are offered in:",
    answers: [
      "Object",
      "Collection",
      "Collections",
      "Apache Commons Collections",
    ],
    correct: "Collections",
    questionId: "183452",
  },
  {
    question: "Which of those allows duplicate elements?",
    answers: ["Set", "List", "All", "None of the above"],
    correct: "List",
    questionId: "267908",
  },
  {
    question: "What guarantees type-safety in a collection?",
    answers: ["Generics", "Abstract classes", "Interfaces", "Collection"],
    correct: "Generics",
    questionId: "333247",
  },
  {
    question: "HashSet internally uses?",
    answers: ["Set", "HashMap", "List", "Collection"],
    correct: "Set",
    questionId: "496293",
  },
  {
    question: "The root interface of Java collection framework hierarchy is -",
    answers: ["Collection", "Root", "Collections", "List"],
    correct: "Collection",
    questionId: "588909",
  },
  {
    question: "Vector extends that of these?",
    answers: ["ArrayList", "LinkedList", "AbstractList", "None"],
    correct: "AbstractList",
    questionId: "648452",
  },
  {
    question: "Which doesn't permit to store a null value?",
    answers: ["TreeSet", "LinkedHashSet", "HashSet", "None"],
    correct: "TreeSet",
    questionId: "786649",
  },
  {
    question: "Which of these is sorted by default",
    answers: ["LinkedHashSet", "TreeSet", "HashSet", "None of the above"],
    correct: "TreeSet",
    questionId: "839754",
  },
  {
    question: "An attempt to add the null key to a TreeSet will result in:",
    answers: [
      "Will compile",
      "Compile time Exception",
      "Error",
      "Runtime - NullPointerException",
    ],
    correct: "Runtime - NullPointerException",
    questionId: "98390",
  },
  {
    question:
      "The efficiency and accuracy of a HashMap are often warranted with:",
    answers: [
      "Override equals method",
      "Override hashCode method",
      "None of these",
      "Both a and b",
    ],
    correct: "Both a and b",
    questionId: "1071006",
  },
  {
    question: "A HashMap permits the existence of:",
    answers: ["null values", "one null key", "None of these", "Both of these"],
    correct: "Both of these",
    questionId: "1174154",
  },
  {
    question:
      "In an Iterator what implementation will traverse a collection in each direction?",
    answers: ["Iterator", "ListIterator", "SetIterator", "MapIterator"],
    correct: "SetIterator",
    questionId: "1226535",
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
