import { EventDetails } from './types';

export const EVENT_DATA: EventDetails = {
  title: "Christmas Cantata",
  subtitle: "만왕의 왕, 예수 그리스도",
  description: "크리스마스의 참된 의미를 담은 이야기 속으로 여러분을 초대합니다.",
  date: "2025년 12월 25일 (목) 오후 1시 30분",
  location: "믿음의교회 본당 (지하 1층)",
  contact: "055-238-4200",
  program: [
    "1. 오프닝 공연",
    "2. 성경 봉독",
    "3. 칸타타 공연 (1부, 2부)",
    "4. 말씀",
    "5. 축복 기도",
    "- 다윗성가대",
    "- 주일학교",
    "- 2남선교회"
  ]
};

// 메인 이미지 변경 방법:
// public/assets 폴더에 이미지 파일을 넣고 파일명을 아래에 맞춰주세요
// 예: invitation-image.png, invitation-image.jpg 등
// 또는 외부 이미지 URL을 사용하세요 (예: "https://example.com/image.jpg")
// 팁: 이미지 비율은 3:4 (세로형)가 가장 보기 좋습니다.
export const HEADER_IMAGE_URL = "/assets/invitation-image.png";

// 배경 음악 변경 방법:
// 방법 1: public/assets 폴더에 음악 파일을 넣고 아래 경로를 변경하세요 (예: "/assets/music.mp3")
// 방법 2: 외부 음악 URL을 사용하세요 (예: "https://example.com/music.mp3")
// 지원 형식: MP3, OGG, WAV 등
export const BACKGROUND_MUSIC_URL = "/assets/christmas-music.mp3";