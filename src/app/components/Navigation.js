'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const skinTypes = [
  { id: 'sensitive', name: '민감성 피부', color: 'bg-green-100 text-green-800', emoji: '🟢', iconStyle: 'leaf' },
  { id: 'dry', name: '건성 피부', color: 'bg-orange-100 text-orange-800', emoji: '🟠', iconStyle: 'droplet' },
  { id: 'oily', name: '지성 피부', color: 'bg-blue-100 text-blue-800', emoji: '🔵', iconStyle: 'wave' },
  { id: 'acne', name: '트러블성 피부', color: 'bg-red-100 text-red-800', emoji: '🔴', iconStyle: 'shield' },
  { id: 'combination', name: '복합성 피부', color: 'bg-yellow-100 text-yellow-800', emoji: '🟡', iconStyle: 'balance' },
  { id: 'nutrient', name: '영양 부족 피부', color: 'bg-purple-100 text-purple-800', emoji: '🟣', iconStyle: 'gem' },
  { id: 'all', name: '모든 피부타입', color: 'bg-yellow-200 text-yellow-900', emoji: '☀️', iconStyle: 'sunburst' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-pink-600">✨</div>
            <span className="text-xl font-bold text-gray-800">피부타입별 화장품</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              홈
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-pink-600 font-medium flex items-center transition-colors"
              >
                피부타입별 제품
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* 드롭다운 메뉴 */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-sm">
                  {/* 헤더 */}
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-4 text-white">
                    <h3 className="text-lg font-bold flex items-center">
                      <span className="mr-2">🧴</span>
                      피부타입별 추천 제품
                    </h3>
                    <p className="text-sm text-pink-100 mt-1">당신의 피부타입에 맞는 제품을 찾아보세요</p>
                  </div>
                  
                  {/* 메뉴 아이템들 */}
                  <div className="p-2">
                    {skinTypes.map((type, index) => (
                      <Link
                        key={type.id}
                        href={`/category/${type.id}`}
                        className={`flex items-center px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 group mb-1 ${
                          index === skinTypes.length - 1 ? 'mb-0' : ''
                        }`}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        
                        
                        {/* 텍스트 정보 */}
                        <div className="flex-1 ml-2">
                          <div className="font-bold text-gray-800 group-hover:text-pink-700 transition-colors duration-300 text-base">
                            {type.name}
                          </div>
                          <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 mt-1">
                            {type.id === 'sensitive' && '저자극 성분으로 안전한 케어'}
                            {type.id === 'dry' && '수분 공급과 보습에 특화'}
                            {type.id === 'oily' && '유분 조절과 모공 관리'}
                            {type.id === 'acne' && '여드름 완화와 진정 효과'}
                            {type.id === 'combination' && 'T존과 U존 균형 관리'}
                            {type.id === 'nutrient' && '영양 공급과 활성화'}
                            {type.id === 'all' && '모든 피부타입에 적합'}
                          </div>
                        </div>
                        
                        {/* 화살표 아이콘 */}
                        <div className="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                          <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* 푸터 */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200">
                    <Link 
                      href="/quiz"
                      className="flex items-center justify-center text-sm text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-300 bg-white rounded-lg py-2 px-4 hover:bg-pink-50"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="mr-2">🎯</span>
                      피부타입 진단하기
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/quiz" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              피부타입 진단
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              장바구니
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl mt-2 shadow-lg">
              <Link 
                href="/" 
                className="flex items-center px-4 py-3 text-gray-700 hover:text-pink-600 font-medium rounded-lg hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">🏠</span>
                홈
              </Link>
              
              <div className="px-4 py-3">
                <div className="flex items-center text-sm font-medium text-gray-500 mb-3">
                  <span className="mr-2">🧴</span>
                  피부타입별 제품
                </div>
                <div className="space-y-2">
                  {skinTypes.map((type) => (
                    <Link
                      key={type.id}
                      href={`/category/${type.id}`}
                      className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-pink-600 rounded-lg hover:bg-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div>
                        <div className="font-medium">{type.name}</div>
                        <div className="text-xs text-gray-400">
                          {type.id === 'sensitive' && '저자극, 순한 성분'}
                          {type.id === 'dry' && '수분 공급, 보습 중심'}
                          {type.id === 'oily' && '유분 조절, 모공 관리'}
                          {type.id === 'acne' && '여드름 완화, 진정 효과'}
                          {type.id === 'combination' && '균형잡힌 관리, T존 집중'}
                          {type.id === 'nutrient' && '영양 공급, 활성화'}
                          {type.id === 'all' && '범용성, 일상 필수'}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/quiz" 
                className="flex items-center px-4 py-3 text-gray-700 hover:text-pink-600 font-medium rounded-lg hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">🎯</span>
                피부타입 진단
              </Link>
              
              <Link 
                href="/cart" 
                className="flex items-center px-4 py-3 text-gray-700 hover:text-pink-600 font-medium rounded-lg hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">🛒</span>
                장바구니
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
