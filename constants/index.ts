export type DescBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type QuoteBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface ServiceData {
  title: string;
  heroImage: string;
  visionaryTag: string;
  desc1: DescBlock[];
  sideImage: string;
  quote: QuoteBlock[];   
  carouselTitle: string;
  projects: { image: string }[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "bellodesain": {
    title: "BELLO DESAIN",
    heroImage: "https://www.bellodesainstudio.com/asset/images/bello%20desain%200.jpg",
    visionaryTag: "Visionary Architecture",
    desc1: [
      {
        type: "paragraph",
        text: "Bidang usaha desain bangunan memberikan layanan dalam mempersepsikan konsep rumah anda dalam rancangan layout untuk menghasilkan rumah hunian yang akan dibangun memastikan dari segi konsep desain tetapi tidak menutup kemungkinan desain tersebut akan dibuat dengan menyesuaikan konsep serta keinginan dari klien itu sendiri."
      }
    ],
    sideImage: "https://www.bellodesainstudio.com/asset/images/home1.png",
    quote: [
      {
        type: "paragraph",
        text: "Dalam unit Bello desain akan memberikan beberapa kategoti layanan mulai dari lingkup minimal, sedang dan penuh. Umumnya jasa dalam ketegori minimal mencangkup peta lokasi, dan situasi, block dan site plan, denah, dan perencaan seperti kusen, plafond, pondasi dan detail septictank. Adapun beberapa tambahan layanan pada jasa dalam ketegori sedang yaitu perencanaan titik lampu dan hasil render 3d exterior. Sedangkan untuk jasa dalam kategori penuh meliputi jasa pada lingkup sedang dan beberapa tambahan seperti tampak rumah, rancangan detail ruangan, dan hasil render 3D interior dan 3D ekterior."
      },
      
    ],
    carouselTitle: "Our Excellence",
    projects: [
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20desain%202.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20desain%207.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20desain%204.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20desain%203.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20desain%206.jpg" },
    ]
  },

  "bellokonstruksi": {
    title: "BELLO KONSTRUKSI",
    heroImage: "https://www.bellodesainstudio.com/asset/images/bello%20konst%200.jpg",
    visionaryTag: "Solid Build",
    desc1: [
      {
        type: "paragraph",
        text: "Dalam pelaksanaan pembangunan, baik itu perumahan, perkantoran, hingga fasilitas umum, dibutuhkan jasa bangunan. Merekalah yang membantu mewujudkan bangunan yang diinginkan bahkan sejak dari perencanaannya."
      },
      {
        type: "paragraph",
        text: "Pada usaha kami menyediakan pelayanan jasa konstruksi hingga jasa konsultasi. Kami sebagai Konsultan Konstruksi, akan terlibat dalam pekerjaan pengkajian studi kelayakan, perencanaan, desain interior, engineering desain, perancangan, pengawasan proyek, manajemen konstruksi, termasuk survei, pengujian teknik dan analisis."
      },
    ],
    sideImage: "https://www.bellodesainstudio.com/asset/images/bello%20konst%201.jpg",
    quote: [
      {
        type: "paragraph",
        text: "Jasa ini sangat diperlukan dari skala mikro hingga makro karena konsultan CV. Bello Desain akan memberikan pertimbangan dan masukan yang memungkinkan proyek berjalan efektif. Kami juga sudah mengantongi sejumlah sertifikasi:"
      },
      {
        type: "list",
        items: [
          "Sertifikat Keahlian Kerja (SKA) — bukti kompetensi profesi di bidang Elektrik, Arsitek, Mekanik, Sipil, dan Tata Lingkungan.",
          "Sertifikat Keahlian (SKA) — bukti kompetensi berdasarkan keterampilan kerja bidang konstruksi.",
          "Sertifikat Badan Usaha (SBU) — pengakuan formal sebagai Jasa Konstruksi dan/atau konsultan pengawas.",
          "Surat Izin Usaha Jasa Konstruksi (SIUJK) — izin resmi dari Pemerintah Daerah untuk melaksanakan pembangunan di lingkungan pemerintah maupun non-pemerintah.",
        ]
      },
      {
        type: "paragraph",
        text: "Kami telah memiliki pengalaman yang matang sejak usaha ini dibangun hingga kini. Kegiatan kami bisa dicek melalui sosial media kami @bello_konstruksi."
      }
    ],
    carouselTitle: "Construction Portfolio",
    projects: [
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20konst%202.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20konst%203.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20konst%204.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20konst%205.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20konst%206.jpg" },
    ]
  },

  "bellocustom": {
    title: "BELLO CUSTOM",
    heroImage: "https://www.bellodesainstudio.com/asset/images/home1.png",
    visionaryTag: "Bespoke Craftsmanship",
    desc1: [
      {
        type: "paragraph",
        text: "Pasar properti menuntut pengembangan untuk menerapkan strategi penjualan. Salah satunya dengan mengusung konsep unik yang tidak banyak dilakukan pengembang lain. CV Bello Desain sebagai jasa perancangan dan pembangunan rumah menawarkan hunian berkonsep custom layout. Konsep ini memberikan kebebasan kepada pemilik untuk memilih sendiri desain interior rumah yang akan di bangun atau di renovasi"
      },
      {
        type: "paragraph",
        text: "Tujuan dari adanya Bello Custom adalah membuat setiap area terasa nyaman, sehingga klien bisa merasa betah bila berlama-lama di dalamnya. Layanan ini difungsikan untuk memadukan gaya desain yang disukai, furniture-furniture nyaman yang sesuai dengan kebutuhan, hingga sentuhan tertentu agar visual hunian lebih menawan"
      },
    ],
    sideImage: "https://www.bellodesainstudio.com/asset/images/bello%20custom%201.jpg",
    quote: [
      {
        type: "paragraph",
        text: "Untuk karya yang lain bisa dilihat pada instagram kami: @bello_custom"
      },
    ],
    carouselTitle: "Custom Portfolio",
    projects: [
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20custom%202.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20custom%203.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20custom%204.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20custom%206.jpg" },
      { image: "https://www.bellodesainstudio.com/asset/images/bello%20custom%205.jpg" },

    ]
  },

  "belloestimator": {
    title: "BELLO ESTIMATOR",
    heroImage: "https://www.bellodesainstudio.com/asset/images/home1.png",
    visionaryTag: "Precise Budgeting",
    desc1: [
      {
        type: "paragraph",
        text: "Layanan estimasi biaya kami memberikan kalkulasi yang akurat dan transparan untuk setiap proyek, memastikan anggaran Anda terencana dengan baik sejak awal sehingga tidak ada kejutan di tengah jalan."
      },
      {
        type: "paragraph",
        text: "Tim estimator kami berpengalaman dalam menghitung kebutuhan material, biaya tenaga kerja, hingga overhead proyek secara menyeluruh dan terstruktur."
      },
    ],
    sideImage: "https://www.bellodesainstudio.com/asset/images/home1.png",
    quote: [
      {
        type: "paragraph",
        text: "Perencanaan anggaran yang tepat adalah fondasi dari setiap proyek yang sukses. Layanan estimasi kami meliputi:"
      },
      {
        type: "list",
        items: [
          "Estimasi material — perhitungan kebutuhan bahan bangunan secara rinci dan akurat.",
          "Estimasi tenaga kerja — kalkulasi biaya SDM sesuai scope pekerjaan.",
          "Laporan RAB (Rencana Anggaran Biaya) — dokumen resmi yang bisa langsung digunakan untuk tender.",
          "Konsultasi anggaran — diskusi langsung dengan tim estimator untuk optimasi biaya proyek.",
        ]
      },
      {
        type: "paragraph",
        text: "Dengan layanan ini, Anda bisa memulai proyek dengan keyakinan penuh bahwa setiap rupiah direncanakan dengan cermat."
      }
    ],
    carouselTitle: "Estimation Services",
    projects: [
      { image: "https://www.bellodesainstudio.com/asset/images/home1.png" },
      { image: "https://www.bellodesainstudio.com/asset/images/home1.png" },
      { image: "https://www.bellodesainstudio.com/asset/images/home1.png" },
    ]
  },
};

export type ServiceId = keyof typeof SERVICES_DATA;