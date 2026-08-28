export interface Video {
  id: number;
  thumbnail: string;
  channelImage: string;
  title: string;
  channel: string;
  views: number;
  createdAt: string;
  likes: number;
}

export const videos: Video[] = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/400/225?random=1",
    channelImage: "https://i.pravatar.cc/40?img=1",
    title: "React 기초부터 프로젝트까지",
    channel: "코딩채널",
    views: 120000,
    createdAt: "3일 전",
    likes: 5200,
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/400/225?random=2",
    channelImage: "https://i.pravatar.cc/40?img=2",
    title: "TypeScript 입문 강의",
    channel: "프론트엔드 연구소",
    views: 87000,
    createdAt: "1주 전",
    likes: 3400,
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/400/225?random=3",
    channelImage: "https://i.pravatar.cc/40?img=3",
    title: "CSS Flexbox 완벽 정리",
    channel: "웹디자인",
    views: 51000,
    createdAt: "2일 전",
    likes: 2100,
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/400/225?random=4",
    channelImage: "https://i.pravatar.cc/40?img=4",
    title: "JavaScript 비동기 쉽게 이해하기",
    channel: "JS Master",
    views: 150000,
    createdAt: "5일 전",
    likes: 6800,
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/400/225?random=5",
    channelImage: "https://i.pravatar.cc/40?img=5",
    title: "Git & GitHub 협업 방법",
    channel: "개발일지",
    views: 98000,
    createdAt: "2주 전",
    likes: 4100,
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/400/225?random=6",
    channelImage: "https://i.pravatar.cc/40?img=6",
    title: "React Router 실전 예제",
    channel: "React Lab",
    views: 63000,
    createdAt: "4일 전",
    likes: 2900,
  },
];
