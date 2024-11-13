import React, { useState } from 'react';
import { Question, UserResponses, CareerRecommendation } from '../types';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Fireworks from './Fireworks';

const questions: Question[] = [
  {
    id: 1,
    text: "How do you prefer to solve problems?",
    category: "tech",
    options: [
      "By breaking them down into logical steps",
      "Through creative and innovative solutions",
      "By analyzing data and patterns",
      "Through hands-on experimentation"
    ]
  },
  {
    id: 2,
    text: "What interests you most about the world?",
    category: "science",
    options: [
      "How things work and are built",
      "The natural environment and living things",
      "Human behavior and society",
      "Numbers and abstract concepts"
    ]
  },
  {
    id: 3,
    text: "How do you prefer to express yourself?",
    category: "arts",
    options: [
      "Through visual design and creativity",
      "Through writing and communication",
      "Through technical solutions",
      "Through analytical thinking"
    ]
  },
  {
    id: 4,
    text: "What type of work environment appeals to you most?",
    category: "environment",
    options: [
      "Fast-paced and tech-focused",
      "Creative and collaborative",
      "Research-oriented and analytical",
      "Structured and organized"
    ]
  },
  {
    id: 5,
    text: "What impact do you want to make in the world?",
    category: "impact",
    options: [
      "Advancing technology and innovation",
      "Helping people and society",
      "Discovering new knowledge",
      "Creating beautiful things"
    ]
  },
  {
    id: 6,
    text: "How do you approach learning new things?",
    category: "learning",
    options: [
      "Through practical application",
      "Through theoretical understanding",
      "Through observation and analysis",
      "Through creative exploration"
    ]
  },
  {
    id: 7,
    text: "What kind of challenges excite you?",
    category: "challenges",
    options: [
      "Technical problems to solve",
      "Creative projects to design",
      "Research questions to answer",
      "Social issues to address"
    ]
  },
  {
    id: 8,
    text: "What tools do you enjoy working with?",
    category: "tools",
    options: [
      "Computers and digital technology",
      "Art supplies and design software",
      "Scientific equipment and data",
      "Books and writing materials"
    ]
  },
  {
    id: 9,
    text: "How do you prefer to work with others?",
    category: "collaboration",
    options: [
      "In small technical teams",
      "In creative group projects",
      "Independently with occasional collaboration",
      "In large diverse teams"
    ]
  },
  {
    id: 10,
    text: "What subjects interested you most in school?",
    category: "subjects",
    options: [
      "Mathematics and Computer Science",
      "Art and Design",
      "Science and Research",
      "Literature and Writing"
    ]
  },
  {
    id: 11,
    text: "How do you handle deadlines and pressure?",
    category: "pressure",
    options: [
      "Through systematic planning",
      "By adapting and being flexible",
      "With careful analysis",
      "Through creative problem-solving"
    ]
  },
  {
    id: 12,
    text: "What kind of projects do you enjoy most?",
    category: "projects",
    options: [
      "Building and creating things",
      "Solving complex problems",
      "Researching and analyzing",
      "Designing and innovating"
    ]
  },
  {
    id: 13,
    text: "How do you prefer to communicate ideas?",
    category: "communication",
    options: [
      "Through technical documentation",
      "Through visual presentations",
      "Through detailed reports",
      "Through interactive discussions"
    ]
  },
  {
    id: 14,
    text: "What motivates you to learn?",
    category: "motivation",
    options: [
      "Building practical skills",
      "Understanding complex concepts",
      "Making new discoveries",
      "Creating innovative solutions"
    ]
  },
  {
    id: 15,
    text: "How do you approach problem-solving?",
    category: "problem_solving",
    options: [
      "Through systematic analysis",
      "Through creative thinking",
      "Through research and investigation",
      "Through collaboration and discussion"
    ]
  },
  {
    id: 16,
    text: "What kind of growth opportunities interest you?",
    category: "growth",
    options: [
      "Technical skill development",
      "Creative portfolio building",
      "Research expertise",
      "Leadership and management"
    ]
  },
  {
    id: 17,
    text: "How do you prefer to receive feedback?",
    category: "feedback",
    options: [
      "Through specific technical metrics",
      "Through creative critique",
      "Through peer review",
      "Through structured evaluation"
    ]
  },
  {
    id: 18,
    text: "What type of problems do you enjoy solving?",
    category: "problem_type",
    options: [
      "Technical and logical",
      "Creative and design-oriented",
      "Research and analytical",
      "Social and organizational"
    ]
  },
  {
    id: 19,
    text: "How do you prefer to organize your work?",
    category: "organization",
    options: [
      "Using technical tools and systems",
      "Through visual organization",
      "With detailed documentation",
      "Through flexible frameworks"
    ]
  },
  {
    id: 20,
    text: "What's your ideal way to contribute to a team?",
    category: "contribution",
    options: [
      "Technical expertise and problem-solving",
      "Creative ideas and design",
      "Research and analysis",
      "Leadership and coordination"
    ]
  }
];

const calculateCareer = (responses: UserResponses): CareerRecommendation => {
  // Count the frequency of each category in the first position
  const categoryScores: { [key: string]: number } = {};
  
  Object.entries(responses).forEach(([category, count]) => {
    categoryScores[category] = (categoryScores[category] || 0) + count;
  });

  // Find the highest scoring category
  const topCategory = Object.entries(categoryScores).reduce((a, b) => 
    (b[1] > a[1] ? b : a)
  )[0];

  // Career recommendations based on top category
  const recommendations: { [key: string]: CareerRecommendation } = {
    tech: {
      field: "Computer Science & Software Engineering",
      description: "Your responses indicate a strong aptitude for logical thinking and problem-solving, making you well-suited for a career in technology and software development.",
      courses: [
        {
          title: "Computer Science Fundamentals",
          provider: "MIT OpenCourseWare",
          url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00sc-introduction-to-computer-science-and-programming-spring-2011/",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          title: "Full-Stack Web Development",
          provider: "The Odin Project",
          url: "https://www.theodinproject.com/",
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      ]
    },
    arts: {
      field: "Digital Design & Creative Technology",
      description: "Your creative inclinations and visual thinking style suggest you would excel in fields combining artistry with technology.",
      courses: [
        {
          title: "UI/UX Design Specialization",
          provider: "Coursera",
          url: "https://www.coursera.org/specializations/ui-ux-design",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          title: "Digital Media Design",
          provider: "CalArts",
          url: "https://www.coursera.org/learn/design",
          image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      ]
    },
    science: {
      field: "Data Science & Analytics",
      description: "Your analytical mindset and interest in discovering patterns makes you an excellent candidate for data-driven fields.",
      courses: [
        {
          title: "Data Science Specialization",
          provider: "Johns Hopkins University",
          url: "https://www.coursera.org/specializations/jhu-data-science",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          title: "Machine Learning",
          provider: "Stanford Online",
          url: "https://www.coursera.org/learn/machine-learning",
          image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      ]
    },
    impact: {
      field: "Technology for Social Impact",
      description: "Your desire to make a difference combined with technical interests suggests a career in social impact technology.",
      courses: [
        {
          title: "Social Innovation",
          provider: "edX",
          url: "https://www.edx.org/course/social-innovation",
          image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          title: "Tech for Good",
          provider: "FutureLearn",
          url: "https://www.futurelearn.com/courses/tech-for-good",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      ]
    }
  };

  // Default to tech if category not found
  return recommendations[topCategory] || recommendations.tech;
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<UserResponses>({});
  const [result, setResult] = useState<CareerRecommendation | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleAnswer = (answer: string) => {
    const question = questions[currentQuestion];
    setResponses(prev => ({
      ...prev,
      [question.category]: (prev[question.category] || 0) + 1
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setResult(calculateCareer(responses));
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 3000);
    }
  };

  if (result) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        {showFireworks && <Fireworks />}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">{result.field}</h2>
            <p className="text-gray-600 mb-6">{result.description}</p>
          </div>

          <h3 className="text-2xl font-semibold mb-6">Recommended Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.courses.map((course, index) => (
              <a
                key={index}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600">
                      {course.title}
                    </h4>
                    <p className="text-gray-600">{course.provider}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-right mt-2 text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            <button
              onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentQuestion === questions.length - 1}
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 disabled:opacity-50"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}