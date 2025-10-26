'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const skinTypes = [
  { id: 'sensitive', name: '민감성 피부', color: 'bg-green-100 text-green-800', emoji: '🟢' },
  { id: 'dry', name: '건성 피부', color: 'bg-orange-100 text-orange-800', emoji: '🟠' },
  { id: 'oily', name: '지성 피부', color: 'bg-blue-100 text-blue-800', emoji: '🔵' },
  { id: 'acne', name: '트러블성 피부', color: 'bg-red-100 text-red-800', emoji: '🔴' },
  { id: 'combination', name: '복합성 피부', color: 'bg-yellow-100 text-yellow-800', emoji: '🟡' },
  { id: 'nutrient', name: '영양 부족 피부', color: 'bg-purple-100 text-purple-800', emoji: '🟣' },
  { id: 'all', name: '모든 피부타입', color: 'bg-yellow-200 text-yellow-900', emoji: '☀️' }
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
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="py-2">
                    {skinTypes.map((type) => (
                      <Link
                        key={type.id}
                        href={`/category/${type.id}`}
                        className="flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <span className="text-xl mr-3 group-hover:scale-110 transition-transform">{type.emoji}</span>
                        <div>
                          <div className="font-medium text-gray-800">{type.name}</div>
                          <div className="text-xs text-gray-500">
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
                      <span className="text-lg mr-3">{type.emoji}</span>
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
