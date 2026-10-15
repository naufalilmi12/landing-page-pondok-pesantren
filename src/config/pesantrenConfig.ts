import { NewsItem, GalleryItem, FacilityItem, ProgramItem, FaqItem, AdmissionTimeline } from '../types';

export const IMAGES = {
  heroCampus: '/src/assets/images/hero_pesantren_campus_1791902359909.jpg',
  santriStudyQuran: '/src/assets/images/santri_study_quran_1791902362782.jpg',
  leaderPortrait: '/src/assets/images/kh_tubagus_abdussomad_1791914615180.jpg',
  modernClassroom: '/src/assets/images/pesantren_modern_classroom_1791902365013.jpg',
  sportsCampus: '/src/assets/images/pesantren_sports_campus_1791902364014.jpg',
  logoRaudlatussalam: '/src/assets/images/logo_raudlatussalam_1791913672727.jpg',
};

export const PESANTREN_INFO = {
  // IDENTITAS UTAMA
  namaResmi: 'Pondok Pesantren Raudlatussalam',
  namaSingkat: 'Raudlatussalam',
  logo: '/src/assets/images/logo_raudlatussalam_1791913672727.jpg',
  subJudul: 'Lembaga Pendidikan Islam Semi Modern',
  tagline: 'Membentuk Generasi Qur\'ani yang Berilmu, Berakhlak, dan Siap Menghadapi Masa Depan',
  tahunBerdiri: 'Tangerang, Banten',
  nomorStatistik: 'NSPP / Akreditasi Resmi Kemenag',
  yayasanPengelola: 'Yayasan Pondok Pesantren Raudlatussalam',
  
  // PIMPINAN PONDOK
  pimpinan: {
    nama: 'Apa Drs. KH. Tubagus Abdussomad, S.Pd., M.M.',
    jabatan: 'Pimpinan & Pengasuh Pondok Pesantren Raudlatussalam',
    sambutanSingkat: 'Pondok Pesantren Raudlatussalam hadir sebagai kawah candradimuka yang memadukan kedalaman spiritualitas Al-Qur\'an, keteguhan adab dan kitab kuning, kecakapan ilmu formal, serta keterbukaan terhadap sains dan teknologi. Kami berkomitmen mendampingi putra-putri kaum muslimin bertransformasi menjadi insan beriman, mandiri, dan berwawasan luas.',
    sambutanLengkap: [
      'Alhamdulillahi Rabbil \'Alamin, segala puji bagi Allah Subhanahu wa Ta\'ala yang senantiasa melimpahkan hidayah dan taufik-Nya kepada kita semua.',
      'Dalam dinamika peradaban dunia yang bergerak begitu cepat, amanah mendidik generasi penerus menjadi tanggung jawab yang sangat mulia sekaligus menantang. Pondok Pesantren Raudlatussalam memilih jalan wasathiyah (moderat): teguh berakar pada turats (khazanah keilmuan Islam salaf) dan terbuka menyerap perkembangan kontemporer (kurikulum sains, penguasaan bahasa internasional, dan teknologi).',
      'Kami mendidik para santri bukan hanya untuk pandai menghafal Al-Qur\'an dan menguasai teks keagamaan, tetapi juga mampu mengartikulasikan nilai-nilai Islam yang rahmatan lil \'alamin dalam kehidupan bermasyarakat. Di asrama, para santri belajar kedisiplinan, kemandirian, ukhuwah islamiyah, dan kepemimpinan 24 jam.',
      'Semoga website resmi ini menjadi jembatan silaturahmi, pusat informasi yang terpercaya, serta sarana bagi bapak/ibu calon wali santri untuk mengenal lebih dekat iklim pendidikan di pesantren kami.'
    ],
    foto: IMAGES.leaderPortrait,
  },

  // KONTAK DAN LAYANAN RESMI
  kontak: {
    whatsapp: '6285899852536', // Nomor resmi: +62 858-9985-2536
    whatsappDisplay: '+62 858-9985-2536',
    telepon: '+62 858-9985-2536',
    email: 'pondokpesantrenraudlatussalam@gmail.com',
    emailPsb: 'pondokpesantrenraudlatussalam@gmail.com',
    alamat: 'WGC8+7M7, Gg. Kiladog, Kedung Dalem, Kec. Mauk, Kabupaten Tangerang, Banten 15330',
    jamPelayanan: 'Senin – Sabtu: 07.30 – 16.00 WIB | Ahad: 08.00 – 14.00 WIB',
    sosialMedia: {
      instagram: 'https://instagram.com/pesantren_raudlatussalam',
      youtube: 'https://youtube.com/@pesantren_raudlatussalam',
      facebook: 'https://facebook.com/pesantren_raudlatussalam',
      tiktok: 'https://tiktok.com/@pesantren_raudlatussalam',
    },
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Gg.+Kiladog,+Kedung+Dalem,+Kec.+Mauk,+Kabupaten+Tangerang,+Banten+15330&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // VISI, MISI & NILAI
  visi: 'Terwujudnya lembaga pendidikan Islam unggulan yang melahirkan generasi Qur\'ani yang mutafaqqih fiddin (ahli agama), berakhlak mulia, mandiri, berprestasi akademik, dan berkontribusi bagi peradaban dunia.',
  misi: [
    'Menyelenggarakan pembelajaran Al-Qur\'an secara intensif dengan target hafalan mutqin serta pemahaman maknawi yang mendalam.',
    'Menanamkan nilai-nilai adab, kesantunan, kedisiplinan, dan tradisi keilmuan Islam berbasis kajian kitab mu\'tabarah.',
    'Menerapkan kurikulum pendidikan formal nasional secara terpadu demi mempersiapkan santri melanjutkan ke perguruan tinggi unggulan nasional maupun internasional.',
    'Membiasakan komunikasi aktif dwibahasa (Bahasa Arab dan Bahasa Inggris) dalam keseharian santri di lingkungan asrama.',
    'Mengembangkan potensi kepemimpinan, kemandirian, kepedulian sosial, serta kecakapan teknologi dan literasi informasi digital.'
  ],
  nilaiBudaya: [
    {
      judul: 'Keikhlasan & Ketawadhu\'an',
      deskripsi: 'Menjadikan seluruh ikhtiar menuntut ilmu semata-mata mengharap ridha Allah SWT, diiringi rasa rendah hati kepada guru dan sesama.'
    },
    {
      judul: 'Kemandirian & Tanggung Jawab',
      deskripsi: 'Santri dilatih mengelola waktu, merawat barang pribadi, memimpin kelompok, dan menyelesaikan tugas tanpa bergantung pada orang tua.'
    },
    {
      judul: 'Ukhuwah & Kesetaraan',
      deskripsi: 'Menyatukan santri dari berbagai penjuru nusantara dalam ikatan persaudaraan sejati, tanpa sekat perbedaan suku maupun latar belakang.'
    },
    {
      judul: 'Wawasan Terbuka & Berkemajuan',
      deskripsi: 'Memadukan nilai luhur salaf dengan kesiapan menyongsong inovasi sains, teknologi, dan kecakapan era digital secara bermartabat.'
    }
  ]
};

export const PROGRAM_LIST: ProgramItem[] = [
  {
    id: 'tahfidz-quran',
    name: 'Tahfidzul Qur\'an',
    subtitle: 'Program Hafalan Qur\'an Bersanad & Mutqin',
    category: 'Kepesantrenan',
    description: 'Program menghafal Al-Qur\'an dengan metode talaqqi, tasmi\', dan muraja\'ah terstruktur. Didampingi asatidz penghafal Qur\'an yang bersanad, santri dibimbing menjaga hafalan sekaligus memperbaiki makharijul huruf dan tajwid.',
    objectives: [
      'Target hafalan bertahap (5 Juz, 15 Juz, hingga 30 Juz sesuai peminatan)',
      'Penguasaan makharijul huruf, kaidah tajwid, dan adab penghafal Qur\'an',
      'Pelaksanaan Tasmi\' berkala di hadapan penguji dan wali santri'
    ],
    activities: [
      'Halaqah Al-Qur\'an ba\'da Subuh dan ba\'da Maghrib',
      'Setoran harian (ziyadah) dan pengulangan berkala (muraja\'ah)',
      'Wisuda Tahfidz tahunan dan sertifikasi hafalan'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'kitab-kuning',
    name: 'Kajian Kitab Kuning (Dirasah Islamiyah)',
    subtitle: 'Pendalaman Khazanah Fikih, Aqidah, dan Nahwu-Shorof',
    category: 'Kepesantrenan',
    description: 'Melestarikan tradisi salafiyah melalui pembacaan dan pemaknaan literatur klasik Islam. Santri dibekali kaidah gramatika bahasa Arab (Nahwu dan Shorof) agar mampu memahami teks gundul secara kritis dan komprehensif.',
    objectives: [
      'Kecakapan membaca dan memahami literatur Islam klasik berharakat dan tanpa harakat',
      'Pemahaman fiqih ibadah dan muamalah berlandaskan dalil yang kuat',
      'Penanaman tauhid ahlussunnah wal jama\'ah yang kokoh'
    ],
    activities: [
      'Sorogan (setoran baca individual kepada guru)',
      'Bandongan/Wetonan (pengajian kitab bersama ustadz/kyai)',
      'Bahtsul Masa\'il santri untuk melatih argumentasi ilmiah'
    ],
    iconName: 'Scroll'
  },
  {
    id: 'pendidikan-formal',
    name: 'Pendidikan Formal Terpadu (SMP/MTs & SMA/MA)',
    subtitle: 'Kurikulum Nasional Terakreditasi dengan Capaian Sains & Humaniora',
    category: 'Akademik Formal',
    description: 'Penyelenggaraan sekolah formal di bawah binaan kementerian terkait dengan sarana kelas modern. Memastikan para santri memperoleh ijazah resmi negara dan siap bersaing dalam seleksi masuk perguruan tinggi negeri (PTN) maupun kampus luar negeri.',
    objectives: [
      'Kelulusan akademik dengan standar kompetensi nasional yang unggul',
      'Penguasaan mata pelajaran sains, matematika, dan ilmu sosial',
      'Bimbingan intensif persiapan UTBK, SNBT, dan beasiswa internasional'
    ],
    activities: [
      'Kegiatan belajar mengajar pukul 07.30 – 14.30 WIB',
      'Praktikum sains di laboratorium IPA dan multimedia',
      'Kelas peminatan riset, karya tulis ilmiah, dan bimbingan olimpiade'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'bilingual-language',
    name: 'Pengembangan Bahasa Asing (Arab & Inggris)',
    subtitle: 'Praktek Komunikasi Harian & Persiapan Sertifikasi Internasional',
    category: 'Keterampilan',
    description: 'Sistem lingkungan berbahasa (Bi\'ah Lughawiyyah) di asrama. Santri dibiasakan berbicara dalam Bahasa Arab dan Bahasa Inggris secara bergantian setiap dua pekan, didukung kegiatan pidato (muhadharah) dan debat bahasa.',
    objectives: [
      'Kefasihan dan rasa percaya diri berbicara bahasa Arab dan Inggris aktif',
      'Kemampuan membaca referensi internasional dan literatur Timur Tengah',
      'Pengenalan tes standar TOAFL (Arab) dan TOEFL/IELTS (Inggris)'
    ],
    activities: [
      'Muhadatsah (percakapan pagi) dan pemberian kosakata harian',
      'Muhadharah 3 bahasa (Indonesia, Arab, Inggris) setiap pekan',
      'Language Camp, Debat Bahasa, dan perlombaan antarkelas'
    ],
    iconName: 'Globe'
  },
  {
    id: 'pembinaan-akhlak',
    name: 'Pembinaan Karakter & Kedisiplinan 24 Jam',
    subtitle: 'Sistem Pengasuhan Berbasis Keteladanan & Asrama',
    category: 'Pengembangan Karakter',
    description: 'Pendidikan tidak berhenti di ruang kelas. Selama 24 jam di asrama, para santri didampingi oleh musyrif (pembina asrama) untuk mempraktikkan sunnah nabawiyah, salat berjamaah tepat waktu, puasa sunnah, kebersihan kamar, serta etika pergaulan yang santun.',
    objectives: [
      'Pembiasaan ibadah wajib dan sunnah tanpa paksaan',
      'Adab penghormatan kepada guru, orang tua, dan sesama teman',
      'Manajemen waktu yang tertib dan kebersihan lingkungan hidup'
    ],
    activities: [
      'Salat fardhu berjamaah 5 waktu di masjid kampus',
      'Qiyamul lail (tahajjud) dan zikir ma\'tsurat pagi petang',
      'Piket asrama mandiri dan evaluasi kedisiplinan mingguan'
    ],
    iconName: 'HeartHandshake'
  },
  {
    id: 'literasi-digital',
    name: 'Literasi Digital & Keterampilan Teknologi',
    subtitle: 'Menyiapkan Santri Bijak & Terampil di Era Kecerdasan Digital',
    category: 'Keterampilan',
    description: 'Ciri khas pesantren semi modern adalah menyikapi teknologi sebagai instrumen dakwah dan kemanfaatan. Santri mendapatkan akses terarah ke laboratorium komputer untuk mempelajari dasar produktivitas digital, desain media, pengenalan logika pemrograman, serta etika bermedia sosial.',
    objectives: [
      'Penguasaan aplikasi produktivitas perkantoran dan pengolahan data',
      'Keterampilan dasar desain grafis dan pembuatan konten edukatif islami',
      'Pemahaman etika digital, keamanan data pribadi, dan pencegahan hoaks'
    ],
    activities: [
      'Praktik komputer mingguan di laboratorium komputer berpendingin udara',
      'Pelatihan jurnalistik santri, fotografi dokumentasi, dan kepenulisan',
      'Workshop dasar logika pemrograman (coding) dan robotika dasar'
    ],
    iconName: 'Laptop'
  },
  {
    id: 'kepemimpinan-organisasi',
    name: 'Kepemimpinan, Kepramukaan & Ekstrakurikuler',
    subtitle: 'Wadah Pengembangan Bakat Olahraga, Seni, dan Organisasi Santri',
    category: 'Pengembangan Karakter',
    description: 'Santri diajak aktif dalam Organisasi Santri Pondok Pesantren (OSPP), mengasah jiwa kepemimpinan manajerial, kepanduan Pramuka Gugus Depan, seni bela diri (Tapak Suci/Pagar Nusa), panahan nabawi, serta cabang olahraga lainnya.',
    objectives: [
      'Kemampuan memimpin dan bekerjasama dalam tim yang solid',
      'Kebugaran fisik dan ketangkasan melalui olahraga sunnah',
      'Kematangan mental dalam menghadapi tantangan dan persaingan sehat'
    ],
    activities: [
      'Latihan kepramukaan dan kemah santri tahunan',
      'Latihan rutin panahan (archery), futsal, voli, dan bela diri',
      'Penyelenggaraan pentas seni panggung gembira santri'
    ],
    iconName: 'ShieldCheck'
  }
];

export const FACILITY_LIST: FacilityItem[] = [
  {
    name: 'Masjid Jami\' Pesantren',
    category: 'Ibadah',
    description: 'Pusat spiritualitas kampus pesantren dengan daya tampung ribuan jamaah. Dilengkapi tata suara berkualitas, sirkulasi udara alami yang sejuk, serta perpustakaan Al-Qur\'an.',
    image: IMAGES.heroCampus,
    highlights: ['Kapasitas 1.500+ Jamaah', 'Tempat Shalat Berjamaah 5 Waktu', 'Pusat Halaqah Tahfidz', 'Kubah Geometris Indah']
  },
  {
    name: 'Gedung Asrama Santri Terpisah',
    category: 'Hunian Asrama',
    description: 'Kawasan asrama putra dan asrama putri terpisah secara tegas dengan pengawasan 24 jam. Setiap kamar dilengkapi tempat tidur bertingkat kokoh, lemari individu, dan ventilasi sehat.',
    image: IMAGES.sportsCampus,
    highlights: ['Kompleks Putra & Putri Terpisah', 'Pendampingan Musyrif 24 Jam', 'Kamar Mandi Bersih & Higienis', 'Ruang Cuci & Jemur Terbuka']
  },
  {
    name: 'Ruang Kelas Modern & Ber-AC',
    category: 'Akademik',
    description: 'Ruang belajar ergonomis dengan pencahayaan optimal, papan tulis ganda, proyektor multimedia, dan meja kursi modern untuk menunjang interaksi belajar yang kondusif.',
    image: IMAGES.modernClassroom,
    highlights: ['Maksimal 28–30 Santri per Kelas', 'Fasilitas Multimedia Terintegrasi', 'Sirkulasi & Pencahayaan Alami', 'Ruang Nyaman Ber-AC']
  },
  {
    name: 'Perpustakaan & Pusat Sumber Belajar',
    category: 'Akademik',
    description: 'Koleksi ribuan judul buku meliputi kitab turats kuning, ensiklopedia tafsir dan hadits, buku pelajaran kurikulum nasional, referensi sains, sastra, hingga majalah ilmiah.',
    image: IMAGES.santriStudyQuran,
    highlights: ['Koleksi Kitab Klasik & Modern', 'Area Baca Lesehan & Meja Studi', 'Sistem Katalog Terkomputerisasi', 'Suasana Tenang & Nyaman']
  },
  {
    name: 'Laboratorium Komputer & Bahasa',
    category: 'Akademik',
    description: 'Fasilitas komputasi modern dengan koneksi internet terfilter aman, perangkat komputer berspesifikasi terkini, dan sistem audio headphone untuk latihan percakapan bahasa asing.',
    image: IMAGES.modernClassroom,
    highlights: ['Unit PC Berkecepatan Tinggi', 'Jaringan Internet Islami Terfilter', 'Audio Headphone Listening', 'Pelatihan Coding & Desain']
  },
  {
    name: 'Lapangan Olahraga & Area Panahan',
    category: 'Kesehatan & Olahraga',
    description: 'Area terbuka hijau untuk aktivitas jasmani santri, mencakup lapangan futsal bersemen halus, lapangan basket, lapangan voli, serta jalur lintasan dan sasaran panahan tradisional.',
    image: IMAGES.sportsCampus,
    highlights: ['Lapangan Futsal & Basket', 'Area Olahraga Sunnah Panahan', 'Lintasan Lari & Kebugaran', 'Pemandangan Hijau Asri']
  },
  {
    name: 'Ruang Makan Bersama & Dapur Higienis',
    category: 'Penunjang',
    description: 'Menyajikan makanan bergizi 3 kali sehari dengan menu seimbang dan pengawasan mutu kebersihan oleh tim tata boga pesantren.',
    image: IMAGES.heroCampus,
    highlights: ['Menu Halal & Gizi Seimbang 3x Sehari', 'Peralatan Makan Higienis', 'Kapasitas Luas & Teratur', 'Pelayanan Tertib Beradab']
  },
  {
    name: 'Pos Kesehatan Pesantren (Poskestren)',
    category: 'Kesehatan & Olahraga',
    description: 'Layanan pertolongan pertama dan kesehatan dasar santri yang ditangani oleh tenaga medis perawat terlatih, bekerja sama dengan Puskesmas dan Rumah Sakit terdekat.',
    image: IMAGES.modernClassroom,
    highlights: ['Ruang Rawat Inap Sementara', 'Stok Obat-Obatan Lengkap', 'Pemeriksaan Berkala Tenaga Medis', 'Rujukan Cepat ke Rumah Sakit']
  }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: 'berita-1',
    title: 'Santri Pondok Pesantren Raih Juara 1 Musabaqah Hifdzil Qur\'an Tingkat Provinsi',
    slug: 'santri-raih-juara-1-mhq-provinsi',
    category: 'Prestasi',
    date: '12 Oktober 2026',
    readTime: '3 Menit Membaca',
    summary: 'Prestasi membanggakan kembali ditorehkan santri dalam ajang Musabaqah Hifdzil Qur\'an (MHQ) 30 Juz dan Tafsir Bahasa Arab tingkat provinsi.',
    author: 'Humas & Media Pesantren',
    featured: true,
    image: IMAGES.santriStudyQuran,
    content: [
      'Alhamdulillah, santri Pondok Pesantren berhasil mengukir prestasi gemilang pada ajang Musabaqah Hifdzil Qur\'an (MHQ) tingkat provinsi yang diselenggarakan oleh Lembaga Pengembangan Tilawatil Qur\'an (LPTQ).',
      'Dalam cabang hafalan 30 Juz beserta pemahaman tafsir bahasa Arab, ananda tampil percaya diri dan memperoleh nilai tertinggi dari dewan hakim. Pembina tahfidz mengungkapkan bahwa capaian ini merupakan buah dari disiplin muraja\'ah harian dan ketekunan santri.',
      'Pimpinan pondok pesantren menyampaikan apresiasi dan rasa syukur mendalam: "Kemenangan ini adalah berkah dari kecintaan kita kepada Al-Qur\'an. Namun yang paling utama bukanlah piala di tangan, melainkan bagaimana Al-Qur\'an itu hidup dalam akhlak, ucapan, dan amalan santri sehari-hari."',
      'Dengan hasil ini, ananda berhak mewakili provinsi pada ajang MHQ tingkat nasional yang dijadwalkan berlangsung pada akhir tahun mendatang.'
    ]
  },
  {
    id: 'berita-2',
    title: 'Pembukaan Pekan Bahasa Internasional: Semarak Muhadharah dan Debat Arab-Inggris',
    slug: 'pekan-bahasa-internasional-pesantren',
    category: 'Kegiatan Santri',
    date: '08 Oktober 2026',
    readTime: '4 Menit Membaca',
    summary: 'Selama sepekan penuh, lingkungan asrama dipenuhi semarak perlombaan pidato tiga bahasa, drama edukatif, dan debat ilmiah dalam bahasa Arab dan Inggris.',
    author: 'Bagian Penggerak Bahasa (KMI)',
    featured: false,
    image: IMAGES.modernClassroom,
    content: [
      'Bagian Penggerak Bahasa resmi membuka Pekan Bahasa Internasional dengan pawai budaya dan parade pidato di panggung utama aula pertemuan.',
      'Kegiatan tahunan ini bertujuan mengasah keberanian santri berbicara bahasa asing di depan publik. Seluruh santri terlibat aktif, mulai dari tingkat pemula yang membawakan drama percakapan harian hingga santri senior yang beradu gagasan dalam debat ilmiah bahasa Arab dan Inggris.',
      'Melalui kegiatan ini, atmosfer dwibahasa di lingkungan asrama semakin hidup dan membuktikan bahwa santri pesantren mampu menguasai bahasa internasional tanpa kehilangan identitas keislamannya.'
    ]
  },
  {
    id: 'berita-3',
    title: 'Kajian Akbar Bedah Kitab Adabul \'Alim wal Muta\'allim Bersama Ulama Tamu',
    slug: 'kajian-akbar-bedah-kitab-adab',
    category: 'Keagamaan',
    date: '28 September 2026',
    readTime: '3 Menit Membaca',
    summary: 'Meneguhkan adab sebelum ilmu, pesantren menggelar kajian intensif mengupas karya monumental Hadhratussyaikh KH. Hasyim Asy\'ari bersama ulama tamu.',
    author: 'Lembaga Kajian Kitab Turats',
    featured: false,
    image: IMAGES.leaderPortrait,
    content: [
      'Ratusan santri dan asatidz memadati masjid utama untuk mengikuti kajian bedah kitab "Adabul \'Alim wal Muta\'allim" yang mengulas adab penuntut ilmu dan etika seorang pendidik.',
      'Kajian ini menekankan bahwa keberkahan ilmu terletak pada kesungguhan menjaga adab, menghormati guru, memuliakan kitab, serta mempraktikkan isi ilmu dalam kehidupan.',
      'Kajian berlangsung interaktif dengan sesi tanya jawab seputar problematika etika generasi muda di era digital, diakhiri dengan doa bersama demi keselamatan bangsa dan umat.'
    ]
  },
  {
    id: 'berita-4',
    title: 'Sosialisasi Penerimaan Santri Baru (PSB) Tahun Ajaran Baru Dibuka Resmi',
    slug: 'sosialisasi-penerimaan-santri-baru-psb',
    category: 'Pengumuman',
    date: '15 September 2026',
    readTime: '2 Menit Membaca',
    summary: 'Panitia PSB mengumumkan pembukaan pendaftaran Gelombang 1 untuk jenjang MTs/SMP Islam dan MA/SMA Islam berasrama.',
    author: 'Panitia PSB Resmi',
    featured: false,
    image: IMAGES.heroCampus,
    content: [
      'Panitia Penerimaan Santri Baru (PSB) secara resmi mengumumkan pembukaan pendaftaran santri baru untuk tahun ajaran mendatang.',
      'Pendaftaran dibuka untuk dua jenjang pendidikan, yaitu tingkat Menengah Pertama (MTs/SMP Islam) dan tingkat Menengah Atas (MA/SMA Islam) dengan kuota terbatas demi menjaga rasio pembinaan asrama yang ideal.',
      'Calon wali santri diimbau memperhatikan persyaratan administrasi, jadwal tes seleksi, serta dapat melakukan konsultasi langsung dengan panitia melalui nomor WhatsApp resmi pesantren.'
    ]
  }
];

export const GALLERY_LIST: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Halaqah Al-Qur\'an Pagi di Masjid Jami\'',
    category: 'Ibadah & Al-Qur\'an',
    image: IMAGES.santriStudyQuran,
    description: 'Suasana santri menghafal dan menyimak tilawah Al-Qur\'an secara khusyuk dengan panduan ustadz pembina.',
    caption: 'Halaqah Subuh: Mentadabburi dan menghafal ayat-ayat suci Al-Qur\'an di aula utama masjid.'
  },
  {
    id: 'gal-2',
    title: 'Suasana Kampus & Gerbang Utama Pesantren',
    category: 'Lingkungan Asrama',
    image: IMAGES.heroCampus,
    description: 'Kompleks kampus pesantren yang asri, dipadukan dengan arsitektur masjid berkubah hijau-emas nan megah.',
    caption: 'Gerbang & halaman utama pesantren: Lingkungan yang tenang, bersih, dan mendukung iklim belajar.'
  },
  {
    id: 'gal-3',
    title: 'Pembelajaran Interaktif di Laboratorium Komputer',
    category: 'Akademik & Kelas',
    image: IMAGES.modernClassroom,
    description: 'Santri mendalami teknologi informasi, bahasa asing, dan literasi digital dengan fasilitas komputer modern.',
    caption: 'Kelas Teknologi & Bahasa: Mengintegrasikan wawasan kontemporer dalam kurikulum pesantren.'
  },
  {
    id: 'gal-4',
    title: 'Latihan Olahraga Memanah (Archery) Santri',
    category: 'Ekstrakurikuler',
    image: IMAGES.sportsCampus,
    description: 'Santri melatih fokus, kedisiplinan, dan ketangkasan fisik melalui olahraga sunnah memanah di lapangan hijau.',
    caption: 'Panahan Nabawi: Melatih fokus dan kekuatan fisik di lapangan asrama yang luas.'
  },
  {
    id: 'gal-5',
    title: 'Pengajian Kitab Kuning & Halaqah Keilmuan',
    category: 'Ibadah & Al-Qur\'an',
    image: IMAGES.leaderPortrait,
    description: 'Bimbingan kitab klasik bersama jajaran pimpinan dan dewan asatidz pesantren.',
    caption: 'Sesi pengajian: Menjaga sanad keilmuan Islam dan adab berguru lintas generasi.'
  },
  {
    id: 'gal-6',
    title: 'Aktivitas Kebugaran & Kebersamaan Sore',
    category: 'Lingkungan Asrama',
    image: IMAGES.sportsCampus,
    description: 'Kegiatan sore hari santri melepas penat dengan berolahraga, bersilaturahmi, dan menjaga kebugaran jasmani.',
    caption: 'Kebugaran Santri: Menjaga tubuh yang sehat sebagai sarana beribadah dan menuntut ilmu.'
  }
];

export const PSB_TIMELINE: AdmissionTimeline[] = [
  {
    stage: 'Gelombang I — Jalur Prestasi & Reguler Awal',
    date: '[Placeholder: 1 Oktober – 15 Desember 2026]',
    description: 'Pendaftaran berkas online / offline, verifikasi berkas, dan prioritas penempatan asrama.',
    badge: 'Gelombang 1'
  },
  {
    stage: 'Tes Seleksi & Wawancara Gelombang I',
    date: '[Placeholder: 20 Desember 2026]',
    description: 'Tes baca Al-Qur\'an, tes kemampuan akademik dasar, serta wawancara komitmen calon santri dan wali santri.',
    badge: 'Ujian Masuk'
  },
  {
    stage: 'Pengumuman Kelulusan Gelombang I',
    date: '[Placeholder: 27 Desember 2026]',
    description: 'Pengumuman resmi melalui website dan surat pemberitahuan via WhatsApp Panitia.',
    badge: 'Pengumuman'
  },
  {
    stage: 'Gelombang II — Jalur Reguler Umum',
    date: '[Placeholder: 5 Januari – 28 Februari 2027]',
    description: 'Pendaftaran gelombang lanjutan apabila kuota kamar asrama masih tersedia.',
    badge: 'Gelombang 2'
  },
  {
    stage: 'Daftar Ulang & Pengukuran Seragam',
    date: '[Placeholder: Maret – April 2027]',
    description: 'Penyelesaian administrasi daftar ulang, pengambilan bahan seragam, dan buku pegangan santri.',
    badge: 'Daftar Ulang'
  },
  {
    stage: 'Kedatangan Santri Baru & Khutbah Ta\'aruf',
    date: '[Placeholder: Juli 2027]',
    description: 'Santri resmi masuk asrama, serah terima dengan orang tua, dan pembukaan masa orientasi santri (Khutbah Ta\'aruf).',
    badge: 'Masuk Asrama'
  }
];

export const PSB_REQUIREMENTS = [
  'Lulusan SD/MI untuk pendaftar tingkat SMP/MTs, atau lulusan SMP/MTs untuk pendaftar tingkat SMA/MA.',
  'Memiliki kesiapan dan kemauan pribadi untuk tinggal di asrama pesantren (bukan atas paksaan).',
  'Mampu membaca Al-Qur\'an (akan diuji sesuai tingkat kemampuannya pada saat tes seleksi).',
  'Sehat jasmani dan rohani serta bebas dari penyakit menular yang membutuhkan perawatan intensif khusus.',
  'Bersedia mematuhi seluruh tata tertib dan disiplin kehidupan pesantren selama masa pendidikan.',
  'Orang tua / wali santri bersedia menandatangani surat komitmen kemitraan pendidikan pesantren.'
];

export const PSB_DOCUMENTS = [
  'Fotokopi Akta Kelahiran calon santri (3 lembar)',
  'Fotokopi Kartu Keluarga (KK) yang masih berlaku (3 lembar)',
  'Fotokopi Ijazah / Surat Keterangan Lulus (SKL) yang dilegalisir (jika sudah terbit)',
  'Pas foto berwarna terbaru ukuran 3x4 (5 lembar, latar biru/merah, berbusana muslim rapi)',
  'Surat Keterangan Sehat dari dokter / Puskesmas',
  'Fotokopi piagam sertifikat prestasi (akademik, tahfidz, olahraga) jika ada'
];

export const PSB_FAQS: FaqItem[] = [
  {
    category: 'Sistem Pembelajaran',
    question: 'Apakah santri diperbolehkan membawa telepon pintar (handphone / gadget)?',
    answer: 'Demi menjaga konsentrasi ibadah, hafalan Al-Qur\'an, dan interaksi sosial yang sehat, santri tidak diperkenankan membawa gadget pribadi ke asrama. Untuk keperluan pembelajaran komputasi, pesantren menyediakan laboratorium komputer lengkap. Komunikasi antara santri dan orang tua difasilitasi melalui telepon asrama atau jadwal panggilan video yang diatur oleh pembina kamar secara berkala.'
  },
  {
    category: 'Kunjungan & Perizinan',
    question: 'Kapan orang tua atau wali santri boleh menjenguk santri di pondok?',
    answer: 'Waktu kunjungan wali santri dijadwalkan pada hari Ahad kedua dan keempat setiap bulannya pada pukul 08.00 – 16.30 WIB. Kunjungan di luar jadwal hanya diperkenankan untuk keperluan mendesak dengan konfirmasi terlebih dahulu kepada pihak pengasuhan/kesantrian.'
  },
  {
    category: 'Penerimaan Santri',
    question: 'Jika calon santri belum lancar membaca Al-Qur\'an, apakah tetap bisa diterima?',
    answer: 'Tes baca Al-Qur\'an pada saat seleksi berfungsi sebagai pemetaan (placement test) awal kemampuan santri. Bagi santri yang belum lancar, pesantren memiliki program matrikulasi dan bimbingan tahsin intensif pada bulan-bulan pertama agar dapat mengejar target pembelajaran.'
  },
  {
    category: 'Kurikulum & Kelulusan',
    question: 'Apakah lulusan pesantren ini bisa melanjutkan ke Perguruan Tinggi Negeri (PTN) atau luar negeri?',
    answer: 'Insya Allah sangat bisa. Karena pesantren kami memadukan kurikulum keagamaan dan kurikulum formal nasional resmi (SMP/MTs dan SMA/MA terakreditasi), santri memiliki ijazah resmi negara. Pesantren juga menyediakan bimbingan peminatan kuliah ke PTN ternama, kampus kedinasan, maupun universitas di Timur Tengah (seperti Al-Azhar Mesir) dan negara lainnya.'
  },
  {
    category: 'Biaya Pendidikan',
    question: 'Berapa rincian biaya pendaftaran dan SPP bulanan?',
    answer: 'Rincian biaya pendidikan resmi (termasuk biaya pendaftaran, uang sarana/pangkal, dan iuran bulanan makan serta asrama) mengikuti edaran resmi yayasan tahun berjalan. Mengingat kebijakan subsidi dan estimasi biaya diperbarui berkala, bapak/ibu calon wali santri dapat mengunduh surat rincian biaya resmi atau menghubungi langsung Panitia PSB via WhatsApp resmi.'
  }
];
