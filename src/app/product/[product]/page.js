import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";

const productData = {
  bringgreen: {
    name: '브링그린 세트',
    price: 89000,
    originalPrice: 120000,
    discount: 26,
    images: ['/img/bringgreen.jpg', '/img/bringgreelnjpg.jpg'],
    skinType: '민감성 피부',
    description: '민감성 피부를 위한 저자극 세트로, 순한 성분으로 피부를 부드럽게 케어합니다.',
    features: [
      '저자극 성분으로 안전한 사용',
      '순한 세정으로 피부 보호',
      '진정 효과로 피부 안정화',
      '민감성 피부 전용 개발'
    ],
    ingredients: [
      '브링그린 추출물',
      '알란토인',
      '판테놀',
      '히알루론산'
    ],
    usage: [
      '세정: 브링그린 폼 클렌저로 부드럽게 세정',
      '토너: 브링그린 토너로 수분 공급',
      '세럼: 브링그린 세럼으로 진정 케어',
      '크림: 브링그린 크림으로 마무리'
    ],
    reviews: [
      { name: '김민지', rating: 5, comment: '민감성 피부인데 정말 순해서 좋아요!' },
      { name: '이서연', rating: 5, comment: '자극 없이 부드럽게 케어됩니다.' },
      { name: '박지은', rating: 4, comment: '가격 대비 품질이 만족스러워요.' }
    ]
  },
  dokdo: {
    name: '독도토너',
    price: 25000,
    originalPrice: 30000,
    discount: 17,
    images: ['/img/독도토너.jpg'],
    skinType: '민감성 피부',
    description: '독도 해양수로 만든 순한 토너로, 민감성 피부에도 안전하게 사용할 수 있습니다.',
    features: [
      '독도 해양수 성분',
      '수분 공급과 피부 진정',
      '저자극 순한 성분',
      '민감성 피부 적합'
    ],
    ingredients: [
      '독도 해양수',
      '히알루론산',
      '세라마이드',
      '판테놀'
    ],
    usage: [
      '세정 후 토너를 손바닥에 덜어 얼굴에 부드럽게 톡톡',
      '화장솜에 적셔서 닦아내기 방식으로도 사용 가능',
      '하루 2-3회 사용 권장'
    ],
    reviews: [
      { name: '최수진', rating: 5, comment: '독도 해양수 성분이 신기해요!' },
      { name: '정미영', rating: 4, comment: '순해서 좋지만 보습력은 보통이에요.' },
      { name: '한소영', rating: 5, comment: '민감성 피부에 딱 맞는 토너입니다.' }
    ]
  },
  carrot: {
    name: '당근 보습 세트',
    price: 75000,
    originalPrice: 95000,
    discount: 21,
    images: ['/img/carrot.jpg'],
    skinType: '건성 피부',
    description: '당근 추출물이 함유된 보습 세트로, 건성 피부의 수분 부족을 해결해줍니다.',
    features: [
      '당근 추출물로 영양 공급',
      '강력한 보습 효과',
      '건성 피부 전용 개발',
      '24시간 지속 보습'
    ],
    ingredients: [
      '당근 추출물',
      '히알루론산',
      '세라마이드',
      '스쿠알란'
    ],
    usage: [
      '세정: 당근 폼 클렌저로 부드럽게 세정',
      '토너: 당근 토너로 수분 공급',
      '세럼: 당근 보습 세럼으로 집중 케어',
      '크림: 당근 보습 크림으로 마무리'
    ],
    reviews: [
      { name: '김건희', rating: 5, comment: '건성 피부에 정말 효과적이에요!' },
      { name: '이보습', rating: 4, comment: '보습력이 오래 지속됩니다.' },
      { name: '박수분', rating: 5, comment: '당근 향이 은은해서 좋아요.' }
    ]
  },
  estur: {
    name: '에스투르 세트',
    price: 95000,
    originalPrice: 120000,
    discount: 21,
    images: ['/img/estur.jpg'],
    skinType: '지성 피부',
    description: '지성 피부를 위한 유분 조절 세트로, 모공 관리와 세정에 특화되었습니다.',
    features: [
      '유분 조절로 번들거림 방지',
      '모공 관리 효과',
      '세정력 강화',
      '지성 피부 전용 개발'
    ],
    ingredients: [
      '살리실릭 애씨드',
      '티트리 추출물',
      '니아신아마이드',
      '하마멜리스 추출물'
    ],
    usage: [
      '세정: 에스투르 폼 클렌저로 유분 제거',
      '토너: 에스투르 토너로 모공 수축',
      '세럼: 에스투르 세럼으로 유분 조절',
      '크림: 에스투르 크림으로 가벼운 보습'
    ],
    reviews: [
      { name: '김지성', rating: 5, comment: '지성 피부에 딱 맞는 세트예요!' },
      { name: '이유분', rating: 4, comment: '유분 조절 효과가 확실해요.' },
      { name: '박모공', rating: 5, comment: '모공이 좁아지는 게 느껴져요.' }
    ]
  },
  squalane: {
    name: '스쿠알란 오일',
    price: 35000,
    originalPrice: 42000,
    discount: 17,
    images: ['/img/스쿠알란.jpg'],
    skinType: '지성 피부',
    description: '지성 피부에 적합한 가벼운 오일로, 유분 조절과 영양 공급을 동시에 제공합니다.',
    features: [
      '가벼운 질감으로 부담 없음',
      '유분 조절 효과',
      '영양 공급과 보습',
      '지성 피부 적합'
    ],
    ingredients: [
      '스쿠알란',
      '비타민 E',
      '로즈힙 오일',
      '아르간 오일'
    ],
    usage: [
      '세럼 후 2-3방울을 손바닥에 덜어 얼굴에 부드럽게 펴 발라주세요',
      '저녁 스킨케어 마지막 단계에서 사용',
      '하루 1회 사용 권장'
    ],
    reviews: [
      { name: '김가벼움', rating: 5, comment: '오일치고는 정말 가벼워요!' },
      { name: '이유분조절', rating: 4, comment: '유분 조절에 도움이 됩니다.' },
      { name: '박영양', rating: 5, comment: '영양 공급이 확실해요.' }
    ]
  },
  redblemish: {
    name: '레드블레미시 세트',
    price: 65000,
    originalPrice: 85000,
    discount: 24,
    images: ['/img/redblemish.jpg'],
    skinType: '트러블성 피부',
    description: '트러블 완화를 위한 전문 세트로, 여드름과 염증을 진정시켜줍니다.',
    features: [
      '트러블 완화 효과',
      '진정과 소염 작용',
      '여드름 예방',
      '트러블성 피부 전용 개발'
    ],
    ingredients: [
      '센텔라 아시아티카',
      '티트리 오일',
      '살리실릭 애씨드',
      '니아신아마이드'
    ],
    usage: [
      '세정: 레드블레미시 폼 클렌저로 부드럽게 세정',
      '토너: 레드블레미시 토너로 진정 케어',
      '세럼: 레드블레미시 세럼으로 트러블 집중 관리',
      '크림: 레드블레미시 크림으로 마무리'
    ],
    reviews: [
      { name: '김트러블', rating: 5, comment: '트러블이 많이 줄었어요!' },
      { name: '이진정', rating: 4, comment: '진정 효과가 확실해요.' },
      { name: '박여드름', rating: 5, comment: '여드름 예방에 도움이 됩니다.' }
    ]
  },
  torrden: {
    name: '토리덴 세트',
    price: 85000,
    originalPrice: 110000,
    discount: 23,
    images: ['/img/torrden1.jpg'],
    skinType: '복합성 피부',
    description: '복합성 피부를 위한 균형 관리 세트로, T존과 U존을 구분하여 케어합니다.',
    features: [
      '균형잡힌 피부 관리',
      'T존 집중 케어',
      'U존 보습 강화',
      '복합성 피부 전용 개발'
    ],
    ingredients: [
      '토리덴 추출물',
      '히알루론산',
      '살리실릭 애씨드',
      '세라마이드'
    ],
    usage: [
      '세정: 토리덴 폼 클렌저로 부드럽게 세정',
      '토너: 토리덴 토너로 균형 잡기',
      '세럼: 토리덴 세럼으로 집중 케어',
      '크림: 토리덴 크림으로 마무리'
    ],
    reviews: [
      { name: '김복합', rating: 5, comment: '복합성 피부에 딱 맞아요!' },
      { name: '이균형', rating: 4, comment: 'T존과 U존이 균형잡혀요.' },
      { name: '박토리덴', rating: 5, comment: '토리덴 성분이 신기해요.' }
    ]
  },
  vitamin: {
    name: '비타민 세트',
    price: 55000,
    originalPrice: 70000,
    discount: 21,
    images: ['/img/vit.jpg'],
    skinType: '영양 부족 피부',
    description: '영양 부족 피부를 위한 비타민 세트로, 피부에 활력을 불어넣어줍니다.',
    features: [
      '비타민 함유로 영양 공급',
      '피부 활성화 효과',
      '탄력과 윤기 개선',
      '영양 부족 피부 전용 개발'
    ],
    ingredients: [
      '비타민 C',
      '비타민 E',
      '레티놀',
      '콜라겐'
    ],
    usage: [
      '세정: 비타민 폼 클렌저로 부드럽게 세정',
      '토너: 비타민 토너로 활성화',
      '세럼: 비타민 세럼으로 집중 영양 공급',
      '크림: 비타민 크림으로 마무리'
    ],
    reviews: [
      { name: '김비타민', rating: 5, comment: '비타민 효과가 확실해요!' },
      { name: '이영양', rating: 4, comment: '영양 공급이 잘 됩니다.' },
      { name: '박활력', rating: 5, comment: '피부가 생기있어졌어요.' }
    ]
  },
  sunscreen: {
    name: '자작나무 선크림',
    price: 28000,
    originalPrice: 35000,
    discount: 20,
    images: ['/img/자작나무 선크림.jpg'],
    skinType: '모든 피부타입',
    description: '모든 피부타입에 적합한 자작나무 선크림으로, 강력한 자외선 차단을 제공합니다.',
    features: [
      '자작나무 추출물 함유',
      'SPF50+ PA+++',
      '모든 피부타입 적합',
      '자연 성분 중심'
    ],
    ingredients: [
      '자작나무 추출물',
      '티타늄 디옥사이드',
      '징크 옥사이드',
      '비타민 E'
    ],
    usage: [
      '스킨케어 마지막 단계에서 사용',
      '얼굴과 목에 충분히 발라주세요',
      '2-3시간마다 재발라주세요',
      '외출 전 30분 전에 발라주세요'
    ],
    reviews: [
      { name: '김자작', rating: 5, comment: '자작나무 향이 좋아요!' },
      { name: '이선크림', rating: 4, comment: '발림성이 좋아요.' },
      { name: '박자외선', rating: 5, comment: '자외선 차단 효과가 확실해요.' }
    ]
  }
};

export default function ProductPage({ params }) {
  const product = productData[params.product];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">제품을 찾을 수 없습니다</h1>
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 제품 이미지 */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 제품 정보 */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.skinType}</p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-pink-600">₩{product.price.toLocaleString()}</span>
                <span className="text-xl text-gray-400 line-through">₩{product.originalPrice.toLocaleString()}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                  {product.discount}% 할인
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">제품 설명</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">주요 특징</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">주요 성분</h2>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-pink-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors">
                장바구니 담기
              </button>
              <button className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors">
                바로 구매
              </button>
            </div>
          </div>
        </div>

        {/* 상세 정보 탭 */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button className="py-4 px-2 border-b-2 border-pink-500 text-pink-600 font-medium">
                  사용법
                </button>
                <button className="py-4 px-2 text-gray-500 hover:text-gray-700 font-medium">
                  성분 정보
                </button>
                <button className="py-4 px-2 text-gray-500 hover:text-gray-700 font-medium">
                  리뷰
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">사용법</h3>
              <div className="space-y-3">
                {product.usage.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 리뷰 섹션 */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">고객 리뷰</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-pink-600 font-medium">{review.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{review.name}</div>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
