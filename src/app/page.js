import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

const skinTypes = [
  { 
    id: 'sensitive', 
    name: '민감성 피부', 
    description: '저자극, 순한 성분 중심',
    image: '/img/bringgreen.jpg',
    products: ['브링그린', '독도토너']
  },
  { 
    id: 'dry', 
    name: '건성 피부', 
    description: '수분 공급, 보습 중심',
    image: '/img/달바.jpg',
    products: ['당근 보습 세트', '달바 보습 크림']
  },
  { 
    id: 'oily', 
    name: '지성 피부', 
    description: '유분 조절, 모공 관리',
    image: '/img/estur.jpg',
    products: ['에스투르 세트', '스쿠알란 오일']
  },
  { 
    id: 'acne', 
    name: '트러블성 피부', 
    description: '여드름 완화, 진정 효과',
    image: '/img/redblemish.jpg',
    products: ['레드블레미시 세트']
  },
  { 
    id: 'combination', 
    name: '복합성 피부', 
  
    description: '균형잡힌 관리, T존 집중',
    image: '/img/torriden.jpg',
    products: ['토리덴 세트']
  },
  { 
    id: 'nutrient', 
    name: '영양 부족 피부', 
    description: '영양 공급, 활성화',
    image: '/img/vit.jpg',
    products: ['비타민 세트']
  },
  { 
    id: 'all', 
    name: '모든 피부타입', 
    description: '범용성, 일상 필수',
    image: '/img/자작나무 선크림.jpg',
    products: ['자작나무 선크림']
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            당신의 피부타입에 맞는
            <br />
            <span className="text-pink-600">맞춤 화장품</span>을 찾아보세요
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            피부타입별 전문 추천으로 더 건강하고 아름다운 피부를 만들어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quiz"
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              피부타입 진단하기
            </Link>
            <Link 
              href="#categories"
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-600 hover:bg-pink-50 transition-colors"
            >
              제품 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* 피부타입별 카테고리 */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              피부타입별 추천 제품
            </h2>
            <p className="text-xl text-gray-600">
              각 피부타입에 최적화된 제품들을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skinTypes.map((type) => (
              <Link 
                key={type.id}
                href={`/category/${type.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
            <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                    <span className="text-2xl">{type.emoji}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-1">
                    {type.products.map((product, index) => (
                      <div key={index} className="text-sm text-pink-600 font-medium">
                        • {product}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              왜 우리를 선택해야 할까요?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">맞춤 추천</h3>
              <p className="text-gray-600">
                피부타입 진단을 통해 당신에게 최적화된 제품을 추천합니다
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">품질 보장</h3>
              <p className="text-gray-600">
                엄선된 고품질 화장품만을 선별하여 제공합니다
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">빠른 배송</h3>
              <p className="text-gray-600">
                주문 후 24시간 내 빠른 배송으로 받아보세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">✨ 피부타입별 화장품</div>
            <p className="text-gray-400 mb-4">
              당신의 피부타입에 맞는 맞춤 화장품을 찾아보세요
            </p>
            <div className="text-sm text-gray-500">
              © 2024 피부타입별 화장품 쇼핑몰. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
