'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const questions = [
  {
    id: 1,
    question: '세안 후 피부 상태는 어떤가요?',
    options: [
      { text: '바로 당기고 건조함', value: 'dry' },
      { text: '적당히 촉촉함', value: 'normal' },
      { text: '유분이 많고 번들거림', value: 'oily' },
      { text: 'T존은 번들거리고 볼은 건조함', value: 'combination' }
    ]
  },
  {
    id: 2,
    question: '화장품 사용 시 반응은 어떤가요?',
    options: [
      { text: '자주 알레르기나 자극을 받음', value: 'sensitive' },
      { text: '대부분의 제품에 문제없음', value: 'normal' },
      { text: '트러블이 자주 생김', value: 'acne' },
      { text: '가끔 자극을 받음', value: 'combination' }
    ]
  },
  {
    id: 3,
    question: '피부의 모공 상태는 어떤가요?',
    options: [
      { text: '모공이 거의 보이지 않음', value: 'dry' },
      { text: '적당한 크기의 모공', value: 'normal' },
      { text: '모공이 크고 번들거림', value: 'oily' },
      { text: 'T존 모공이 크고 볼은 작음', value: 'combination' }
    ]
  },
  {
    id: 4,
    question: '피부의 탄력과 윤기는 어떤가요?',
    options: [
      { text: '탄력이 부족하고 칙칙함', value: 'nutrient' },
      { text: '적당한 탄력과 윤기', value: 'normal' },
      { text: '과도한 윤기', value: 'oily' },
      { text: '부분적으로 탄력이 부족함', value: 'combination' }
    ]
  },
  {
    id: 5,
    question: '환경 변화에 대한 피부 반응은?',
    options: [
      { text: '매우 민감하게 반응함', value: 'sensitive' },
      { text: '적당히 적응함', value: 'normal' },
      { text: '트러블이 생기기 쉬움', value: 'acne' },
      { text: '부분적으로 반응함', value: 'combination' }
    ]
  }
];

const skinTypeResults = {
  sensitive: {
    name: '민감성 피부',
    emoji: '🟢',
    description: '저자극 성분의 제품을 사용하여 피부를 보호하세요',
    color: 'bg-green-100',
    textColor: 'text-green-800',
    category: 'sensitive'
  },
  dry: {
    name: '건성 피부',
    emoji: '🟠',
    description: '수분과 보습에 집중하여 촉촉한 피부를 만들어보세요',
    color: 'bg-orange-100',
    textColor: 'text-orange-800',
    category: 'dry'
  },
  oily: {
    name: '지성 피부',
    emoji: '🔵',
    description: '유분 조절과 모공 관리에 집중하세요',
    color: 'bg-blue-100',
    textColor: 'text-blue-800',
    category: 'oily'
  },
  combination: {
    name: '복합성 피부',
    emoji: '🟡',
    description: 'T존과 U존을 구분하여 관리하세요',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    category: 'combination'
  },
  acne: {
    name: '트러블성 피부',
    emoji: '🔴',
    description: '트러블 완화와 진정에 집중하세요',
    color: 'bg-red-100',
    textColor: 'text-red-800',
    category: 'acne'
  },
  nutrient: {
    name: '영양 부족 피부',
    emoji: '🟣',
    description: '영양 공급과 활성화에 집중하세요',
    color: 'bg-purple-100',
    textColor: 'text-purple-800',
    category: 'nutrient'
  },
  normal: {
    name: '모든 피부타입',
    emoji: '☀️',
    description: '균형잡힌 관리로 건강한 피부를 유지하세요',
    color: 'bg-yellow-200',
    textColor: 'text-yellow-900',
    category: 'all'
  }
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const answerCounts = {};
    
    Object.values(answers).forEach(answer => {
      answerCounts[answer] = (answerCounts[answer] || 0) + 1;
    });

    const mostCommonAnswer = Object.keys(answerCounts).reduce((a, b) => 
      answerCounts[a] > answerCounts[b] ? a : b
    );

    setResult(skinTypeResults[mostCommonAnswer]);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`${result.color} rounded-3xl p-12 text-center`}>
            <div className="text-8xl mb-6">{result.emoji}</div>
            <h1 className={`text-4xl md:text-5xl font-bold ${result.textColor} mb-6`}>
              당신의 피부타입은<br />
              {result.name}입니다!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {result.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/category/${result.category}`}
                className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                추천 제품 보기
              </Link>
              <button 
                onClick={resetQuiz}
                className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-600 hover:bg-pink-50 transition-colors"
              >
                다시 진단하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            피부타입 진단
          </h1>
          <p className="text-xl text-gray-600">
            간단한 질문으로 당신의 피부타입을 알아보세요
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          {/* 진행률 표시 */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>진행률</span>
              <span>{currentQuestion + 1} / {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-pink-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* 질문 */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    answers[questions[currentQuestion].id] === option.value
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-200 hover:border-pink-300 hover:bg-pink-25'
                  }`}
                >
                  <span className="text-lg font-medium">{option.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              이전
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!answers[questions[currentQuestion].id]}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                !answers[questions[currentQuestion].id]
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-pink-600 text-white hover:bg-pink-700'
              }`}
            >
              {currentQuestion === questions.length - 1 ? '결과 보기' : '다음'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
