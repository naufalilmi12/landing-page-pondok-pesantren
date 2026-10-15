export type PageId =
  | 'beranda'
  | 'profil'
  | 'program'
  | 'fasilitas'
  | 'berita'
  | 'galeri'
  | 'pendaftaran'
  | 'kontak';

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'Kegiatan Santri' | 'Pendidikan' | 'Keagamaan' | 'Pengumuman' | 'Prestasi';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ibadah & Al-Qur\'an' | 'Akademik & Kelas' | 'Ekstrakurikuler' | 'Lingkungan Asrama';
  image: string;
  description: string;
  caption: string;
}

export interface FacilityItem {
  id?: string;
  name: string;
  category: 'Ibadah' | 'Akademik' | 'Hunian Asrama' | 'Kesehatan & Olahraga' | 'Penunjang';
  description: string;
  image: string;
  highlights: string[];
}

export interface ProgramItem {
  id: string;
  name: string;
  category: 'Kepesantrenan' | 'Akademik Formal' | 'Pengembangan Karakter' | 'Keterampilan';
  subtitle: string;
  description: string;
  objectives: string[];
  activities: string[];
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface AdmissionTimeline {
  stage: string;
  date: string;
  description: string;
  badge?: string;
}
