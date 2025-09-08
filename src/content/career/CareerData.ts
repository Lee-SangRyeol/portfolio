export interface CareerItem {
  id: string;
  date: string;
  companyName: string;
  position: string;
  iconPath: string;
  companyIntro: string[];
  responsibilities: {
    title: string;
    items: string[];
  }[];
}

export const careerData: CareerItem[] = [
  {
    id: 'alock',
    date: '2022.05 - 2023.07',
    companyName: '(주) 에이락',
    position: '[ 개발팀 - 선임 ]',
    iconPath: '/images/icon/alock.png',
    companyIntro: [
      '에이락 월렛 : 블록체인 기반의 핀테크 회사로 핀테크협회 부회장사를 역임.',
      "지갑 서비스 '에이락월렛'으로 제휴사를 통해 지급되는 리워드를 가상자산으로 지급 및 관리.",
      '마이메타갤러리 : 그림에 NFT를 발행하여 작품에 디지털 자산을 더하는 서비스. 웹 사생대회를 통해 작품 등록 및 전시를 진행하였으며, 오프라인으로 국내 작가와의 콜라보를 진행.',
    ],
    responsibilities: [
      {
        title: '백오피스 개발(1인)',
        items: [
          '에이락 월렛과 마이메타갤러리 두 서비스의 백오피스 개발 및 유지보수',
          '대시보드, 리워드 지급 관리 기능, 마켓의 상품관리 기능등 권한에 따른 백오피스 기능 개발 및 유지보수',
        ],
      },
      {
        title: '백엔드 개발 및 유지보수(4인)',
        items: [
          '내부용 GraphQl쿼리 개발 및 유지보수',
          '외부용 REST API 개발 및 유지보수',
          'DB 구조 변경 및 마이그레이션 진행',
        ],
      },
      {
        title: '제휴사 및 CS 대행업체 관리 및 커뮤니케이션',
        items: [
          '제휴사와 협업시 각종 요구사항 정리 및 문제점 조율',
          'CS대행업체의 관리 및 월렛 서비스 이슈 관리',
        ],
      },
    ],
  },
  {
    id: 'example-company',
    date: '2025.02 - 2025.05',
    companyName: '(주) 가이드미',
    position: '[ 개발팀 - 사원 ]',
    iconPath: '/images/icon/guideme.png',
    companyIntro: [
      '축제와 여행 분야에 특화된 플랫폼 기업.',
      '현지 서포터의 가이드 지원을 통해 트래블러가 차별화된 여행 경험을 할 수 있도록 돕는 1대1 매칭 서비스를 개발 및 운영',
    ],
    responsibilities: [
      {
        title: '백오피스 개발(1인)',
        items: [
          '대시보드 페이지 개발',
          '정보 조회용 페이지 개발',
          '푸시알림 작성 및 게시판 관리 페이지 개발',
          '백오피스 API 개발',
          '푸시알림 전송 관련 메시지큐 API 개발',
          '데이터베이스 수정 및 설계',
        ],
      },
    ],
  },
];
