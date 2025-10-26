import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";

const skinTypeData = {
  sensitive: {
    name: '민감성 피부',
    emoji: '🟢',
    description: '저자극, 순한 성분 중심의 제품으로 피부를 보호하세요',
    color: 'bg-green-50',
    textColor: 'text-green-800',
    products: [
      {
        id: 'bringgreen',
        name: '브링그린 세트',
        price: '89,000',
        image: '/img/bringgreen.jpg',
        description: '민감성 피부를 위한 저자극 세트',
        features: ['저자극 성분', '순한 세정', '진정 효과']
      },
      {
        id: 'dokdo',
        name: '독도토너',
        price: '25,000',
        image: '/img/독도토너.jpg',
        description: '독도 해양수로 만든 순한 토너',
        features: ['해양수 성분', '수분 공급', '피부 진정']
      }
    ]
  },
  dry: {
    name: '건성 피부',
    emoji: '🟠',
    description: '수분 공급과 보습에 특화된 제품으로 촉촉한 피부를 만들어보세요',
    color: 'bg-orange-50',
    textColor: 'text-orange-800',
    products: [
      {
        id: 'carrot',
        name: '당근 보습 세트',
        price: '75,000',
        image: '/img/carrot.jpg',
        description: '당근 추출물로 만든 보습 세트',
        features: ['당근 추출물', '강력한 보습', '영양 공급']
      },
      {
        id: 'dalba',
        name: '달바 보습 크림',
        price: '45,000',
        image: '/img/달바.jpg',
        description: '달바 추출물이 함유된 보습 크림',
        features: ['달바 추출물', '24시간 보습', '피부 탄력']
      }
    ]
  },
  oily: {
    name: '지성 피부',
    emoji: '🔵',
    description: '유분 조절과 모공 관리에 특화된 제품으로 깨끗한 피부를 만들어보세요',
    color: 'bg-blue-50',
    textColor: 'text-blue-800',
    products: [
      {
        id: 'estur',
        name: '에스투르 세트',
        price: '95,000',
        image: '/img/estur.jpg',
        description: '지성 피부를 위한 유분 조절 세트',
        features: ['유분 조절', '모공 관리', '세정 효과']
      },
      {
        id: 'squalane',
        name: '스쿠알란 오일',
        price: '35,000',
        image: '/img/스쿠알란.jpg',
        description: '지성 피부에 적합한 가벼운 오일',
        features: ['가벼운 질감', '유분 조절', '영양 공급']
      }
    ]
  },
  acne: {
    name: '트러블성 피부',
    emoji: '🔴',
    description: '여드름 완화와 진정 효과에 특화된 제품으로 건강한 피부를 만들어보세요',
    color: 'bg-red-50',
    textColor: 'text-red-800',
    products: [
      {
        id: 'redblemish',
        name: '레드블레미시 세트',
        price: '65,000',
        image: '/img/redblemish.jpg',
        description: '트러블 완화를 위한 전문 세트',
        features: ['트러블 완화', '진정 효과', '여드름 예방']
      }
    ]
  },
  combination: {
    name: '복합성 피부',
    emoji: '🟡',
    description: 'T존과 U존을 균형있게 관리하는 제품으로 완벽한 피부를 만들어보세요',
    color: 'bg-yellow-50',
    textColor: 'text-yellow-800',
    products: [
      {
        id: 'torrden',
        name: '토리덴 세트',
        price: '85,000',
        image: '/img/torrden1.jpg',
        description: '복합성 피부를 위한 균형 관리 세트',
        features: ['균형잡힌 관리', 'T존 집중', 'U존 보습']
      }
    ]
  },
  nutrient: {
    name: '영양 부족 피부',
    emoji: '🟣',
    description: '영양 공급과 활성화에 특화된 제품으로 생기있는 피부를 만들어보세요',
    color: 'bg-purple-50',
    textColor: 'text-purple-800',
    products: [
      {
        id: 'vitamin',
        name: '비타민 세트',
        price: '55,000',
        image: '/img/vit.jpg',
        description: '영양 부족 피부를 위한 비타민 세트',
        features: ['비타민 함유', '영양 공급', '피부 활성화']
      }
    ]
  },
  all: {
    name: '모든 피부타입',
    emoji: '☀️',
    description: '모든 피부타입에 적합한 범용 제품으로 일상 필수 아이템을 만나보세요',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-900',
    products: [
      {
        id: 'sunscreen',
        name: '자작나무 선크림',
        price: '28,000',
        image: '/img/자작나무 선크림.jpg',
        description: '모든 피부타입에 적합한 자작나무 선크림',
        features: ['자작나무 추출물', 'SPF50+', '모든 피부타입']
      }
    ]
  }
};

export default function CategoryPage({ params }) {
  const skinType = skinTypeData[params.category];

  if (!skinType) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">페이지를 찾을 수 없습니다</h1>
          <Link href="/" className="text-pink-600 hover:text-pink-700 font-medium">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* 카테고리 헤더 */}
      <section className={`${skinType.color} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold ${skinType.textColor} mb-6`}>
            {skinType.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {skinType.description}
          </p>
        </div>
      </section>

      {/* 제품 목록 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              추천 제품
            </h2>
            <p className="text-xl text-gray-600">
              {skinType.name}에 최적화된 제품들을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skinType.products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-pink-600">
                      ₩{product.price}
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                        장바구니
                      </button>
                      <Link 
                        href={`/product/${product.id}`}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        자세히
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 피부타입 관리 팁 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {skinType.name} 관리 팁
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full ${skinType.color} flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">🧴</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">올바른 세정</h3>
              <p className="text-gray-600">
                {skinType.name === '민감성 피부' && '저자극 세정제로 부드럽게 세정하세요'}
                {skinType.name === '건성 피부' && '수분을 잃지 않도록 부드럽게 세정하세요'}
                {skinType.name === '지성 피부' && '유분을 제거하되 과도하지 않게 세정하세요'}
                {skinType.name === '트러블성 피부' && '트러블 완화 성분이 함유된 세정제를 사용하세요'}
                {skinType.name === '복합성 피부' && 'T존과 U존을 구분하여 세정하세요'}
                {skinType.name === '영양 부족 피부' && '영양 성분이 함유된 세정제를 사용하세요'}
                {skinType.name === '모든 피부타입' && '일반적인 세정제로 부드럽게 세정하세요'}
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 rounded-full ${skinType.color} flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">적절한 보습</h3>
              <p className="text-gray-600">
                {skinType.name === '민감성 피부' && '저자극 보습제로 피부를 진정시키세요'}
                {skinType.name === '건성 피부' && '강력한 보습제로 수분을 충분히 공급하세요'}
                {skinType.name === '지성 피부' && '가벼운 보습제로 유분을 조절하세요'}
                {skinType.name === '트러블성 피부' && '트러블 완화 성분이 함유된 보습제를 사용하세요'}
                {skinType.name === '복합성 피부' && '부위별로 다른 보습제를 사용하세요'}
                {skinType.name === '영양 부족 피부' && '영양 성분이 풍부한 보습제를 사용하세요'}
                {skinType.name === '모든 피부타입' && '균형잡힌 보습제로 피부를 관리하세요'}
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 rounded-full ${skinType.color} flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">자외선 차단</h3>
              <p className="text-gray-600">
                모든 피부타입에 자외선 차단은 필수입니다. SPF30 이상의 선크림을 매일 사용하세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
