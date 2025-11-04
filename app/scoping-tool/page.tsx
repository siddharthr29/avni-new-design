'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Calendar } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "What is the primary sector of your organization?",
    options: [
      { value: "health", label: "Health & Wellness", score: 10 },
      { value: "education", label: "Education", score: 10 },
      { value: "agriculture", label: "Agriculture & Livelihood", score: 9 },
      { value: "water", label: "Water & Sanitation", score: 9 },
      { value: "other", label: "Other", score: 7 },
    ],
  },
  {
    id: 2,
    question: "How many field workers do you have?",
    options: [
      { value: "1-10", label: "1-10 workers", score: 8 },
      { value: "11-50", label: "11-50 workers", score: 10 },
      { value: "51-200", label: "51-200 workers", score: 10 },
      { value: "200+", label: "More than 200", score: 9 },
    ],
  },
  {
    id: 3,
    question: "Do your field workers operate in areas with limited internet connectivity?",
    options: [
      { value: "always", label: "Yes, always", score: 10 },
      { value: "sometimes", label: "Sometimes", score: 9 },
      { value: "rarely", label: "Rarely", score: 6 },
      { value: "never", label: "Never", score: 4 },
    ],
  },
  {
    id: 4,
    question: "What type of data do you collect?",
    options: [
      { value: "beneficiary", label: "Beneficiary/case tracking", score: 10 },
      { value: "surveys", label: "Surveys & assessments", score: 9 },
      { value: "monitoring", label: "Program monitoring", score: 9 },
      { value: "mixed", label: "Mix of all above", score: 10 },
    ],
  },
  {
    id: 5,
    question: "How do you currently collect field data?",
    options: [
      { value: "paper", label: "Paper-based forms", score: 10 },
      { value: "excel", label: "Excel/Google Sheets", score: 9 },
      { value: "other-app", label: "Another mobile app", score: 7 },
      { value: "custom", label: "Custom system", score: 6 },
    ],
  },
  {
    id: 6,
    question: "Do you need to track beneficiaries over time (longitudinal data)?",
    options: [
      { value: "yes-critical", label: "Yes, it's critical", score: 10 },
      { value: "yes-helpful", label: "Yes, would be helpful", score: 8 },
      { value: "no", label: "No, one-time surveys only", score: 5 },
    ],
  },
  {
    id: 7,
    question: "How important is real-time data visibility for your program managers?",
    options: [
      { value: "critical", label: "Critical - need instant insights", score: 10 },
      { value: "important", label: "Important but not urgent", score: 8 },
      { value: "nice-to-have", label: "Nice to have", score: 6 },
      { value: "not-needed", label: "Not needed", score: 3 },
    ],
  },
  {
    id: 8,
    question: "Do you need custom workflows or business rules in your data collection?",
    options: [
      { value: "yes-complex", label: "Yes, complex rules", score: 10 },
      { value: "yes-simple", label: "Yes, simple validations", score: 9 },
      { value: "no", label: "No, straightforward forms", score: 7 },
    ],
  },
  {
    id: 9,
    question: "What is your technical capacity?",
    options: [
      { value: "high", label: "We have a tech team", score: 8 },
      { value: "medium", label: "Some technical staff", score: 9 },
      { value: "low", label: "Limited technical capacity", score: 10 },
      { value: "none", label: "No technical staff", score: 9 },
    ],
  },
  {
    id: 10,
    question: "What is your budget for a field data collection solution?",
    options: [
      { value: "minimal", label: "Minimal/Free preferred", score: 10 },
      { value: "moderate", label: "₹10,000-50,000/month", score: 9 },
      { value: "flexible", label: "Flexible budget", score: 8 },
    ],
  },
];

export default function ScopingToolPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer) {
        const option = q.options.find((opt) => opt.value === answer);
        if (option) {
          totalScore += option.score;
        }
      }
    });
    return totalScore;
  };

  const getRecommendation = (score: number) => {
    const percentage = (score / 100) * 100;
    
    if (percentage >= 85) {
      return {
        level: "Excellent Fit",
        color: "text-green-600",
        bgColor: "bg-green-50",
        message: "Avni is an excellent match for your organization! Your requirements align perfectly with Avni's capabilities.",
        details: [
          "Strong offline capabilities for field work",
          "Robust beneficiary tracking over time",
          "Real-time dashboards and analytics",
          "Flexible enough for your technical capacity",
        ],
        nextSteps: "We recommend starting with a demo to see Avni in action.",
      };
    } else if (percentage >= 70) {
      return {
        level: "Great Fit",
        color: "text-primary-600",
        bgColor: "bg-primary-50",
        message: "Avni is a great fit for your organization. Most of your needs can be met effectively.",
        details: [
          "Good match for your field operations",
          "Suitable for your data collection needs",
          "Can be configured to your workflows",
          "Cost-effective for your budget",
        ],
        nextSteps: "Schedule a consultation to discuss your specific requirements.",
      };
    } else if (percentage >= 50) {
      return {
        level: "Good Fit",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        message: "Avni can work for your organization with some considerations.",
        details: [
          "Some features align well with your needs",
          "May require customization for optimal use",
          "Consider your technical capacity",
          "Evaluate against your specific workflows",
        ],
        nextSteps: "Let's discuss your requirements in detail to see if Avni is the right choice.",
      };
    } else {
      return {
        level: "Needs Discussion",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        message: "Let's have a conversation to understand your needs better.",
        details: [
          "Your requirements may need special consideration",
          "We can explore customization options",
          "Alternative approaches might be suitable",
          "A detailed consultation would be valuable",
        ],
        nextSteps: "We recommend scheduling a call to explore if Avni can be adapted to your needs.",
      };
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[currentQ?.id] !== undefined;

  if (showResults) {
    const score = calculateScore();
    const recommendation = getRecommendation(score);

    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                Your Avni Fit Score
              </h1>
              <div className="text-6xl font-bold text-primary-600 mb-2">
                {score}%
              </div>
              <div className={`text-2xl font-semibold ${recommendation.color}`}>
                {recommendation.level}
              </div>
            </div>

            {/* Recommendation Card */}
            <div className={`${recommendation.bgColor} rounded-2xl p-8 mb-8`}>
              <p className="text-xl text-neutral-900 mb-6 font-medium">
                {recommendation.message}
              </p>

              <div className="space-y-3 mb-6">
                {recommendation.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-5 w-5 ${recommendation.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-neutral-700">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-2">Recommended Next Step:</h3>
                <p className="text-neutral-700">{recommendation.nextSteps}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/avni-project/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </a>
              <Link
                href="/demo"
                className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Try Demo
              </Link>
            </div>

            {/* Retake Button */}
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers({});
              }}
              className="w-full mt-4 text-neutral-600 hover:text-neutral-900 font-semibold py-3"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Avni Scoping Tool
            </h1>
            <p className="text-xl text-neutral-600">
              Answer 10 quick questions to see if Avni is right for your organization
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-neutral-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {currentQ.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    answers[currentQ.id] === option.value
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQ.id] === option.value
                          ? 'border-primary-600 bg-primary-600'
                          : 'border-neutral-300'
                      }`}
                    >
                      {answers[currentQ.id] === option.value && (
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <span className="text-lg font-medium text-neutral-900">
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-300 rounded-lg font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Previous
              </button>
            )}
            
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
