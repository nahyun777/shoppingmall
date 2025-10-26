'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';

// 샘플 장바구니 데이터
const sampleCartItems = [
  {
    id: 'bringgreen',
    name: '브링그린 세트',
    price: 89000,
    image: '/img/bringgreen.jpg',
    quantity: 1,
    skinType: '민감성 피부'
  },
  {
    id: 'dokdo',
    name: '독도토너',
    price: 25000,
    image: '/img/독도토너.jpg',
    quantity: 2,
    skinType: '민감성 피부'
  },
  {
    id: 'carrot',
    name: '당근 보습 세트',
    price: 75000,
    image: '/img/carrot.jpg',
    quantity: 1,
    skinType: '건성 피부'
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(sampleCartItems);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">장바구니가 비어있습니다</h1>
            <p className="text-xl text-gray-600 mb-8">
              마음에 드는 제품을 장바구니에 담아보세요
            </p>
            <Link 
              href="/"
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              쇼핑하러 가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">장바구니</h1>
          <p className="text-xl text-gray-600">
            총 {getTotalItems()}개의 상품이 담겨있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 장바구니 아이템 목록 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">상품 목록</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.skinType}
                        </p>
                        <div className="text-xl font-bold text-pink-600">
                          ₩{item.price.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 주문 요약 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">주문 요약</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">상품 금액</span>
                  <span className="font-medium">₩{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">배송비</span>
                  <span className="font-medium text-green-600">무료</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">총 결제금액</span>
                    <span className="text-lg font-bold text-pink-600">₩{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-pink-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors mb-4">
                주문하기
              </button>
              
              <Link 
                href="/"
                className="w-full bg-gray-200 text-gray-800 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors block text-center"
              >
                쇼핑 계속하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
