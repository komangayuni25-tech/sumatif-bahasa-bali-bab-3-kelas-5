import { Question } from '../types';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran BAHASA BALI
 * Kelas 5 SD - SD Negeri 3 Loloan Timur
 * Materi: Ngelimbakang Kawagedan Melarapan Kesenengan
 *
 * Komposisi Soal:
 * - 40 Butir Pilihan Ganda (PG) [Nomor 1 - 40] (Bobot: 2 poin/butir = 80 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 41 - 45] (Bobot: 4 poin/butir = 20 poin)
 * Total: 45 Butir Soal = 100 Poin (KKTP: 65)
 *
 * Elemen Capaian Pembelajaran:
 * 1. (Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor
 * 2. (Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara
 * 3. (Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita
 * 4. (Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan
 */

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN I: 40 SOAL PILIHAN GANDA (PG)
  // ==========================================

  // --- ELEMEN 1: (NGEWACEN) MEMAHAMI ISI TEKS WACANA BASA BALI LAN SAURIN PITAKEN RING SOR (1 - 10) ---
  {
    id: 1,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Kesenengan Melajah Ngigel',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan tokoh utama dan kesenangannya berdasarkan kutipan teks wacana bacaan.',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="baliGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b45309"/>
          <stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
      </defs>
      <rect width="400" height="130" rx="12" fill="url(#baliGrad1)"/>
      <rect x="15" y="15" width="370" height="100" rx="8" fill="#ffffff" opacity="0.95"/>
      <text x="25" y="38" font-family="sans-serif" font-size="14" font-weight="bold" fill="#78350f">WACANA: Melajah Ngigel ring Sanggar Tari</text>
      <line x1="25" y1="46" x2="375" y2="46" stroke="#fbbf24" stroke-width="2"/>
      <text x="25" y="65" font-family="sans-serif" font-size="11" fill="#1e293b">Ni Putu Ayu madue kesenengan sane becik pisan, inggih punika</text>
      <text x="25" y="82" font-family="sans-serif" font-size="11" fill="#1e293b">seneng melajah ngigel Bali. Nyabran rahina Redite, dane lunga</text>
      <text x="25" y="99" font-family="sans-serif" font-size="11" fill="#1e293b">ka Sanggar Tari Manik Kencana kasarengin antuk ibunnyane.</text>
    </svg>`,
    text: 'Wacen wacana ring ajeng! Sira sane kasuratang madue kesenengan melajah ngigel ring Sanggar Tari Manik Kencana?',
    options: [
      { id: 'A', text: 'Ni Putu Ayu' },
      { id: 'B', text: 'I Made Danu' },
      { id: 'C', text: 'I Ketut Rai' },
      { id: 'D', text: 'Ni Kadek Sintya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ring wacana ring ajeng kasuratang tatas pisan: "Ni Putu Ayu madue kesenengan sane becik pisan, inggih punika seneng melajah ngigel Bali." Dadosne tokoh sane kasuratang inggih punika Ni Putu Ayu.',
  },
  {
    id: 2,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Kesenengan Melajah Ngigel',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan waktu (galah/rahina) pelaksanaan kegiatan pada teks wacana.',
    text: 'Pidan Ni Putu Ayu biasane lunga melajah ngigel kasarengin antuk ibunnyane?',
    options: [
      { id: 'A', text: 'Nyabran rahina Sukra' },
      { id: 'B', text: 'Nyabran rahina Saniscara' },
      { id: 'C', text: 'Nyabran rahina Redite (Minggu)' },
      { id: 'D', text: 'Nyabran rahina Soma' },
    ],
    correctAnswer: 'C',
    explanation:
      'Manut wacana ring ajeng, Ni Putu Ayu lunga melajah ngigel nyabran rahina Redite (hari Minggu) kasarengin antuk ibunnyane.',
  },
  {
    id: 3,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Kesenengan Melajah Ngigel',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis tujuan/tetujon tokoh melatih kesenangannya.',
    text: 'Napi tetujon Ni Putu Ayu jemet melajah ngigel Bali ngawit saking alit?',
    options: [
      { id: 'A', text: 'Mangda prasida nglestariang seni budaya Bali tur dadi pragina sane wikan' },
      { id: 'B', text: 'Mangda polih jinah sane akeh saking timpal-timpalne' },
      { id: 'C', text: 'Mangda nenten naenin nglaksanayang tugas sekolah' },
      { id: 'D', text: 'Mangda prasida meplalianan game ring handphone nyabran rahina' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tetujon sane becik melajah ngigel Bali inggih punika anggen nglestariang adat lan seni budaya Bali, mawinan prasida dados pragina (penari) sane waget tur mawiguna.',
  },
  {
    id: 4,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Gotong Royong ring Sekolah',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menemukan tempat (genah) terjadinya peristiwa dalam teks bacaan.',
    text: '"Para sisia kelas V SD Negeri 3 Loloan Timur sami mareresik ring wewidangan genah paplajahan." Ring kija para sisia nglaksanayang parikrama mabersih-bersih punika?',
    options: [
      { id: 'A', text: 'Ring wewidangan sekolah SD Negeri 3 Loloan Timur' },
      { id: 'B', text: 'Ring pasisi pantai Candikusuma' },
      { id: 'C', text: 'Ring Pura Jagatnatha Negara' },
      { id: 'D', text: 'Ring peken agung Jembrana' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna "ring wewidangan genah paplajahan SD Negeri 3 Loloan Timur" negesang genah parikrama mabersih-bersih punika kamargiang ring sekolah SD Negeri 3 Loloan Timur.',
  },
  {
    id: 5,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Gotong Royong ring Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan makna kruna (arti kosakata) bahasa Bali dalam wacana.',
    text: 'Ring wacana kasurat: "Sisia sami magotong-royong mangda pekarangane asri lan kedas." Kruna "kedas" nungkalik (lawan kata) ring kruna ...',
    options: [
      { id: 'A', text: 'Daki (kumuh/kotor)' },
      { id: 'B', text: 'Becik' },
      { id: 'C', text: 'Galang' },
      { id: 'D', text: 'Lega' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna "kedas" madue arti resik/bersih. Tungkalik (lawan kata) saking kedas inggih punika daki (kotor/kumuh).',
  },
  {
    id: 6,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Gotong Royong ring Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyimpulkan piranti (alat) yang digunakan untuk menyapu pekarangan sekolah.',
    text: 'Ritatkala mabersih-bersih ring bencingah sekolah, para sisia ngrereh mis nganggen sarana piranti marupa ...',
    options: [
      { id: 'A', text: 'Sampi sampat lidi lan keranjang mis' },
      { id: 'B', text: 'Koran bekas lan gunting' },
      { id: 'C', text: 'Pancing lan ember' },
      { id: 'D', text: 'Tali plastik lan kayu bakar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Piranti sane kaanggen nyampat luu/mis ring pakarangan inggih punika sampat lidi (sapu lidi) kasarengin keranjang luu utawi serokan mis.',
  },
  {
    id: 7,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Pemahaman 5W+1H',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan kruna pitaken (kata tanya) yang tepat untuk menanyakan alasan.',
    text: 'Yening iraga meled uning ring "santukan napi" utawi "alasan" parilaksana kalaksanayang, kruna pitaken sane patut kaanggen inggih punika ...',
    options: [
      { id: 'A', text: 'Nguda / Kenken dadi (Kenapa/Mengapa)' },
      { id: 'B', text: 'Sira (Siapa)' },
      { id: 'C', text: 'Ring kija (Di mana)' },
      { id: 'D', text: 'Kuda (Berapa)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna pitaken "Nguda" utawi "Kenken dadi" kaanggen nyantenang santukan/alasan (mengapa/kenapa). "Sira" kaanggen nyantenang jadma (siapa), "Ring kija" nyantenang genah (di mana).',
  },
  {
    id: 8,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Pemahaman Nilai Budi Pekerti',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan piteket (amanat/pesan moral) dari wacana gotong royong.',
    text: 'Piteket (amanat) sane prasida kapolihang saking parikrama magotong-royong mareresik ring sekolah inggih punika ...',
    options: [
      { id: 'A', text: 'Pakaryan sane baat yening kagarap sareng-sareng dados ingan tur gelis puput' },
      { id: 'B', text: 'Tugas sekolah dados kaengsapang yening sampun ngresikin kelas' },
      { id: 'C', text: 'Siswa sane pinih sering maresik patut polih upah jinah' },
      { id: 'D', text: 'Pakaryan patut kaserahang ring tukang kebon manten' },
    ],
    correctAnswer: 'A',
    explanation:
      'Suksman parikrama gotong-royong inggih punika ngawinang karya sane abot dados dangan/ingan tur gelis puput mawinan sami masikian lan sagilik-saguluk.',
  },
  {
    id: 9,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Kesenengan Melajah Madagang',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi watak tokoh berdasarkan sikap yang ditunjukkan dalam teks wacana.',
    text: 'I Made Danu anteng ngwantu bapannyane madagang canang tur setata masuryuk manis ring sang sane matumbasan. Indike puniki nyihnayang watek I Made Danu sane ...',
    options: [
      { id: 'A', text: 'Jemet, baktin ring rerama, tur sombeh' },
      { id: 'B', text: 'Demang-deming tur brangsan' },
      { id: 'C', text: 'Kenyas tur mapi-mapi sugih' },
      { id: 'D', text: 'Uluk-uluk tur sengit ring timpal' },
    ],
    correctAnswer: 'A',
    explanation:
      'Anteng ngwantu rerama tur setata masuryuk manis nyihnayang watek sane jemet (rajin), bakti ring rerama, tur sombeh (ramah melayani).',
  },
  {
    id: 10,
    type: 'pg',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Wacana Indik Kesenengan Olahraga',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menemukan manfaat melakukan kesenangan berolahraga pada bacaan wacana.',
    text: 'Kesenengan meplalianan bal-balan (sepak bola) lan mlancaran nyepeda ngicenin pikenoh ring angga, inggih punika ngawinang deweke ...',
    options: [
      { id: 'A', text: 'Kebugaran angga seger oger lan bayune bayuh' },
      { id: 'B', text: 'Gelis lesu tur sering sungkan batis' },
      { id: 'C', text: 'Nenten nyidaang tangi semengan' },
      { id: 'D', text: 'Sering suud ngeranjing ring sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Olahraga marupa mabal-balan lan masepeda ngawinang raga dados seger oger, bayu dados bayuh, tur nenten gampang keni pinakit.',
  },

  // --- ELEMEN 2: (NYURAT) MENGANALISIS KRUNA KRIYA LUMAKSANA LAN LINAKSANA RING LENGKARA (11 - 22) ---
  {
    id: 11,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Konsep Kruna Kriya Lumaksana & Linaksana',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan konsep dasar kata kerja aktif (lumaksana) dan kata kerja pasif (linaksana).',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="kriyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e3a8a"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <rect width="400" height="130" rx="12" fill="url(#kriyaGrad)"/>
      <rect x="20" y="25" width="165" height="80" rx="10" fill="#ffffff"/>
      <text x="102" y="48" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">KRUNA LUMAKSANA</text>
      <text x="102" y="66" font-family="sans-serif" font-size="10" fill="#0f172a" text-anchor="middle">Kata Kerja Aktif</text>
      <text x="102" y="82" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">Polih Anusuara (ny-, m-, n-, ng-)</text>
      <text x="102" y="96" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Conto: tulis -> nulis</text>

      <rect x="215" y="25" width="165" height="80" rx="10" fill="#ffffff"/>
      <text x="297" y="48" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">KRUNA LINAKSANA</text>
      <text x="297" y="66" font-family="sans-serif" font-size="10" fill="#0f172a" text-anchor="middle">Kata Kerja Pasif</text>
      <text x="297" y="82" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">Seselan -in- / Kapisara ka-</text>
      <text x="297" y="96" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Conto: tulis -> tinulis / katulis</text>
    </svg>`,
    text: 'Cingak bagan ring ajeng! Kruna kriya sane jejernyane nglaksanayang pakaryan (kata kerja aktif) kawastanin kruna ...',
    options: [
      { id: 'A', text: 'Kruna kriya lumaksana' },
      { id: 'B', text: 'Kruna kriya linaksana' },
      { id: 'C', text: 'Kruna kahanan' },
      { id: 'D', text: 'Kruna aran sujati' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna kriya lumaksana inggih punika kruna kriya sané nyihnayang jejer nglaksanayang pakaryan (kata kerja aktif), ketahnyane polih anusuara.',
  },
  {
    id: 12,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Anusuara Kruna Kriya Lumaksana',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan perubahan anusuara pada kruna lingga berawalan huruf tertentu.',
    text: 'Kruna lingga "tulis" yening polih pengater anusuara (n-) jagi maobah dados kruna kriya lumaksana ...',
    options: [
      { id: 'A', text: 'Nulis' },
      { id: 'B', text: 'Tinulis' },
      { id: 'C', text: 'Katulis' },
      { id: 'D', text: 'Tulisa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna lingga "tulis" mawit aksara /t/, polih anusuara n- dados "nulis" (lumaksana / kata kerja aktif).',
  },
  {
    id: 13,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Perubahan Kruna Kriya Lumaksana',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis anusuara pada kruna berawalan konsonan j-.',
    text: 'Kruna lingga "jemak" yening kabaosang lumaksana (aktif), krunannyane maobah dados ...',
    options: [
      { id: 'A', text: 'Nyemak' },
      { id: 'B', text: 'Jinemak' },
      { id: 'C', text: 'Kajemak' },
      { id: 'D', text: 'Majemak' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna lingga "jemak" sane mawit aksara /j/ polih anusuara ny- dados "nyemak" (lumaksana). "Jinemak" lan "kajemak" wantah linaksana (pasif).',
  },
  {
    id: 14,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Identifikasi Kruna Kriya Linaksana',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi kruna kriya linaksana yang mendapatkan seselan -in-.',
    text: 'Sane encen ring sor puniki kabaos kruna kriya linaksana sane polih seselan -in-?',
    options: [
      { id: 'A', text: 'Sinurat (saking kruna surat + in)' },
      { id: 'B', text: 'Nyurat' },
      { id: 'C', text: 'Masurat' },
      { id: 'D', text: 'Pasurat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna "sinurat" mawit saking kruna lingga "surat" kaselipang seselan "-in-" (s-in-urat), nyihnayang kruna kriya linaksana (pasif/ditulis).',
  },
  {
    id: 15,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Analisis Lengkara Lumaksana',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilih kalimat yang berpredikat kruna kriya lumaksana.',
    text: 'Cingak lengkara ring sor! Lengkara sane nganggen kruna kriya lumaksana inggih punika ...',
    options: [
      { id: 'A', text: 'I Putu maca buku cerita ring perpustakaan' },
      { id: 'B', text: 'Buku cerita kabaca olih I Putu' },
      { id: 'C', text: 'Buku punika binaca olih I Made' },
      { id: 'D', text: 'Surat punika tinulis olih Ni Wayan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Lengkara "I Putu maca buku cerita" nganggen kruna "maca" (baca + m-), inggih punika kruna kriya lumaksana (kalimat aktif). Opsi B, C, lan D wantah lengkara linaksana (pasif).',
  },
  {
    id: 16,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Analisis Lengkara Linaksana',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan kalimat pasif (lengkara linaksana) dalam konteks kehidupan sehari-hari.',
    text: 'Lengkara: "Baju seragam sekolah kaumbah olih Memek." Lengkara punika kabaos lengkara ...',
    options: [
      { id: 'A', text: 'Linaksana (kalimat pasif santukan caritannyane polih pengater ka-)' },
      { id: 'B', text: 'Lumaksana (kalimat aktif)' },
      { id: 'C', text: 'Pitaken (kalimat tanya)' },
      { id: 'D', text: 'Pituduh (kalimat perintah)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Lengkara punika linaksana (pasif) santukan jejer ("baju seragam") keni pakaryan, tur kruna kriyannyane "kaumbah" polih pengater ka- (kria kapisara).',
  },
  {
    id: 17,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Anusuara Kruna Lingga Berawalan Vokal',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan anusuara ng- pada kruna lingga berawalan vokal a-.',
    text: 'Kruna lingga "adep" (jual) yening kadadosang kruna kriya lumaksana maobah dados ...',
    options: [
      { id: 'A', text: 'Ngadep' },
      { id: 'B', text: 'Madep' },
      { id: 'C', text: 'Nyadep' },
      { id: 'D', text: 'Kinadep' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna lingga sane mawit aksara vokal /a/ yening polih pengater anusuara jagi polih ng-, dados "ngadep" (menjual).',
  },
  {
    id: 18,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Transformasi Lengkara Lumaksana ka Linaksana',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengubah bentuk kalimat aktif (lumaksana) menjadi kalimat pasif (linaksana).',
    text: 'Uwah lengkara lumaksana puniki dados linaksana: "Ni Kadek nyampat bancingah pura." Sane patut dados ...',
    options: [
      { id: 'A', text: 'Bancingah pura kasampat olih Ni Kadek' },
      { id: 'B', text: 'Ni Kadek kasampat ring bancingah pura' },
      { id: 'C', text: 'Bancingah pura nyampat Ni Kadek' },
      { id: 'D', text: 'Sampat bancingah pura Ni Kadek' },
    ],
    correctAnswer: 'A',
    explanation:
      'Panandang "bancingah pura" magingsir dados jejer, kruna kriya lumaksana "nyampat" maobah dados linaksana "kasampat", katambahin "olih Ni Kadek".',
  },
  {
    id: 19,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Pola Lengkara Bahasa Bali',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bagian Jejer (Subjek) dan Carita (Predikat) dalam lengkara.',
    text: 'Ring lengkara: "I Gede nulis aksara Bali ring buku", kruna sane magenah dados Carita (Predikat) inggih punika ...',
    options: [
      { id: 'A', text: 'Nulis' },
      { id: 'B', text: 'I Gede' },
      { id: 'C', text: 'Aksara Bali' },
      { id: 'D', text: 'Ring buku' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola lengkara: "I Gede" = Jejer (Subjek), "Nulis" = Carita (Predikat), "Aksara Bali" = Panandang (Objek), "Ring buku" = Paneges (Keterangan).',
  },
  {
    id: 20,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Seselan -in- pada Konsonan J',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis hasil seselan -in- pada kruna lingga jait.',
    text: 'Kruna lingga "jait" polih seselan "-in-" maobah dados kruna linaksana marupa ...',
    options: [
      { id: 'A', text: 'Jinait' },
      { id: 'B', text: 'Nyait' },
      { id: 'C', text: 'Majait' },
      { id: 'D', text: 'Pajait' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna "jait" polih seselan -in- magenah ring pungkuran konsonan kapertama (j + in + ait) dados "jinait" (dijahit).',
  },
  {
    id: 21,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Kruna Kriya Pengater Anusuara M-',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan kruna kriya lumaksana yang berawalan m- dari kata pancing.',
    text: 'I Bapa nglaksanayang kesenengannyane inggih punika ... be ring tukade. (Kruna lingga: pancing)',
    options: [
      { id: 'A', text: 'Mancing' },
      { id: 'B', text: 'Pinancing' },
      { id: 'C', text: 'Kapancing' },
      { id: 'D', text: 'Pancingang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna lingga "pancing" sane mawit aksara /p/ polih anusuara m- dados "mancing" (lumaksana / menangkap ikan dengan kail).',
  },
  {
    id: 22,
    type: 'pg',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Kruna Tiron Linaksana Ring Cerita',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat melengkapi kalimat rumpang dengan kruna linaksana yang tepat.',
    text: 'Papan tulis sane daki punika sampun ... olih Ida Bagus ngantos resik.',
    options: [
      { id: 'A', text: 'Kausap (diusap/dibersihkan)' },
      { id: 'B', text: 'Ngusap' },
      { id: 'C', text: 'Mangusap' },
      { id: 'D', text: 'Pangusap' },
    ],
    correctAnswer: 'A',
    explanation:
      'Lengkara punika mabentuk pasif (linaksana): papan tulis (jejer sane keni pakaryan) sampun "kausap" (ka- + usap) olih Ida Bagus.',
  },

  // --- ELEMEN 3: (MEBEBAOSAN) LAKSANAANG PABLIGBAGAN TEKS DIALOG INDIK TETUJON / CITA-CITA (23 - 32) ---
  {
    id: 23,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Teks Pabligbagan Cita-cita',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan profesi/tetujon yang dibahas dalam kutipan dialog berbahasa Bali.',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#047857"/>
          <stop offset="100%" stop-color="#10b981"/>
        </linearGradient>
      </defs>
      <rect width="400" height="130" rx="12" fill="url(#chatGrad)"/>
      <rect x="20" y="15" width="360" height="100" rx="10" fill="#ffffff"/>
      <circle cx="50" cy="45" r="16" fill="#fef3c7"/>
      <text x="50" y="50" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">Putu</text>
      <rect x="75" y="32" width="285" height="26" rx="6" fill="#f1f5f9"/>
      <text x="85" y="49" font-family="sans-serif" font-size="10" fill="#1e293b">"Kadek, riwekasan yening sampun kelih, napi tetujon / cita-citane?"</text>

      <circle cx="50" cy="85" r="16" fill="#dbeafe"/>
      <text x="50" y="90" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">Kadek</text>
      <rect x="75" y="72" width="285" height="26" rx="6" fill="#eff6ff"/>
      <text x="85" y="89" font-family="sans-serif" font-size="10" fill="#1e293b">"Tiang meled dados Dokter, mangda prasida ngubadin anak sungkan."</text>
    </svg>`,
    text: 'Wacen dialog pabligbagan ring ajeng! Napi tetujon utawi cita-cita I Kadek riwekasan?',
    options: [
      { id: 'A', text: 'Dados Dokter sane ngubadin anak sungkan' },
      { id: 'B', text: 'Dados Guru sane ngajahin murid' },
      { id: 'C', text: 'Dados Polisi sane nyaga keamanan' },
      { id: 'D', text: 'Dados Pilot sane ngemudiyang kapal terbang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ring dialog kabaosang: "Tiang meled dados Dokter, mangda prasida ngubadin anak sungkan."',
  },
  {
    id: 24,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Kruna Basa Bali Indik Pakaryan Guru',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan tugas utama seorang guru dalam bahasa Bali.',
    text: 'Ni Made Ayu madue tetujon meled dados Guru. Swadarma utawi tugas utama sang sane dados guru inggih punika ...',
    options: [
      { id: 'A', text: 'Ngicenin kaweruhan lan ngajahin para sisia mangda pradnyan' },
      { id: 'B', text: 'Ngemudiyang kapal terbang ring ambarane' },
      { id: 'C', text: 'Nandur padi ring carike' },
      { id: 'D', text: 'Nampenin barang ring peken' },
    ],
    correctAnswer: 'A',
    explanation:
      'Swadarma (tugas utama) guru inggih punika ngajahin para sisia (mengajar murid) mangda wikan lan pradnyan (pandai tur madue budi pekerti luhur).',
  },
  {
    id: 25,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Istilah Profesi Tradisional Bali (Undagi)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi istilah ahli bangunan tradisional Bali (Undagi).',
    text: 'I Wayan seneng ngambar bale wantilan lan wangunan khas Bali. Cita-citannyane meled dados tukang wangunan tradisional Bali sane kawastanin ...',
    options: [
      { id: 'A', text: 'Undagi' },
      { id: 'B', text: 'Pande' },
      { id: 'C', text: 'Pragina' },
      { id: 'D', text: 'Bendega' },
    ],
    correctAnswer: 'A',
    explanation:
      'Undagi inggih punika anak sane madue kewagedan ring sajeroning ngwangun wangunan tradisional Bali (arsitek tradisional Bali). Pande = tukang besi, Pragina = penari, Bendega = nelayan.',
  },
  {
    id: 26,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Istilah Pragina ring Bali',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan arti istilah Pragina dalam seni budaya Bali.',
    text: 'Sisia sane seneng ngigel tur madue tetujon nyolahang sasolahan tari Bali kabaos meled dados ...',
    options: [
      { id: 'A', text: 'Pragina' },
      { id: 'B', text: 'Dalang' },
      { id: 'C', text: 'Penyurat' },
      { id: 'D', text: 'Sastrawan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pragina wantah kruna ring basa Bali sane mateges penari utawi juru igel sane nyolahang tari-tarian tradisional.',
  },
  {
    id: 27,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Tata Krama Mebebaosan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan etika dan tata krama berbicara dengan guru di sekolah.',
    text: 'Ritatkala mebaosan sareng Bapak utawi Ibu Guru ring sekolah, basa sane patut kaanggen inggih punika ...',
    options: [
      { id: 'A', text: 'Basa Bali Alus (Alus Singgih / Alus Sor)' },
      { id: 'B', text: 'Basa Bali Kasar / Ketah' },
      { id: 'C', text: 'Basa campur-campur tanpa tata krama' },
      { id: 'D', text: 'Mabaos sambilanga majeritan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ritatkala mabebaosan sareng guru utawi anak sane patut kasumbungang, iraga patut nganggen Basa Bali Alus anggen nyihnayang rasa hormat lan subasita.',
  },
  {
    id: 28,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Pabligbagan Nyawis Pitaken Timpal',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilih respons percakapan yang santun saat ditanya cita-cita.',
    text: 'Putu: "Nyoman, napi kesenengan Nyomane rikala libur sekolah?" Nyawis pitaken Putu, pasaur Nyoman sane santun inggih punika ...',
    options: [
      { id: 'A', text: '"Kesenengan tiange melajah ngambar pemandangan lan masesuratan."' },
      { id: 'B', text: '"Sing urusan cai, ngudiang matakon!"' },
      { id: 'C', text: '"Tiang tusing taen meplalianan apa-apa."' },
      { id: 'D', text: '"Keneh tiange pedidi, tusing dadi tau."' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pasaur sane santun tur ngajiang timpal ritatkala pabligbagan inggih punika nyawis pitaken antuk tutur sane alus lan prasida katerima becik.',
  },
  {
    id: 29,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Profesi Pilot ring Basa Bali',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi sebutan dan tugas pilot dalam kalimat bahasa Bali.',
    text: 'Anak sane pakaryannyane ngemudiyang kapal terbang utawi pesawat mabur ring ambarane kawastanin ...',
    options: [
      { id: 'A', text: 'Pilot' },
      { id: 'B', text: 'Nahkoda' },
      { id: 'C', text: 'Masinis' },
      { id: 'D', text: 'Sopir' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pilot inggih punika anak sane ngemudiyang pesawat mabur. Nahkoda ngemudiyang kapal laut, masinis ngemudiyang sepur (kereta api).',
  },
  {
    id: 30,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Profesi Bendega / Nelayan',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan profesi pencari ikan di laut dalam istilah bahasa Bali.',
    text: 'Krama sane madue pakaryan ngrereh be ring pasisi utawi segara kawastanin ...',
    options: [
      { id: 'A', text: 'Bendega (Nelayan)' },
      { id: 'B', text: 'Undagi' },
      { id: 'C', text: 'Pande' },
      { id: 'D', text: 'Kusir' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bendega inggih punika para janma utawi krama sane pakaryannyane ngelangi tur ngrereh be ring pasih/segara (nelayan).',
  },
  {
    id: 31,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Sikap Berdiskusi / Mebligbagan',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan sikap yang baik dalam bermusyawarah (mabligbagan).',
    text: 'Ritatkala nglaksanayang mabligbagan (diskusi kelompok) indik cita-cita ring kelas, parilaksana sane patut kalaksanayang inggih punika ...',
    options: [
      { id: 'A', text: 'Ngajinin pamineh timpal tur nenten megat baos anak tiosan' },
      { id: 'B', text: 'Mapi-mapi tusing mirengang baos ketua kelompok' },
      { id: 'C', text: 'Paksaang kenehe mangda paminehe pedidi sane kasarengin' },
      { id: 'D', text: 'Makedekan banter tur ngulgul timpal sane sedek mabaos' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tata titi pabligbagan sane patut inggih punika saling ngajinin pamineh, nenten keneh pedidi kabawosang paling bener, tur nenten megat baos anak tios.',
  },
  {
    id: 32,
    type: 'pg',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Cita-cita dados Polisi',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan swadarma dari profesi Polisi.',
    text: 'I Ketut meled dados Polisi. Swadarmaning polisi ring kauripan masarakat inggih punika ...',
    options: [
      { id: 'A', text: 'Nyaga katentreman, keamanan, lan katertiban krama' },
      { id: 'B', text: 'Ngaryanin jaja ring paon' },
      { id: 'C', text: 'Nulis tembang rare' },
      { id: 'D', text: 'Ngaryanin togog saking batu padas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Swadarmaning polisi inggih punika ngupapira lan nyaga keamanan, katentreman, miwah katertiban krama ring jagate.',
  },

  // --- ELEMEN 4: (SASTRA & PARIBASA) MELANTUNKAN TEMBANG BIBI RANDA LAN NGIDENTIFIKASI BLADBADAN (33 - 40) ---
  {
    id: 33,
    type: 'pg',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Lirik Tembang Rare Bibi Randa',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat melengkapi baris bait tembang rare Bibi Randa.',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="tembangGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12"/>
          <stop offset="100%" stop-color="#c2410c"/>
        </linearGradient>
      </defs>
      <rect width="400" height="130" rx="12" fill="url(#tembangGrad)"/>
      <rect x="20" y="15" width="360" height="100" rx="10" fill="#fffbeb"/>
      <text x="200" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">TEMBANG RARE: BIBI RANDA</text>
      <line x1="50" y1="45" x2="350" y2="45" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="50" y="66" font-family="sans-serif" font-size="11" font-style="italic" fill="#1c1917">"Bibi bibi randa,</text>
      <text x="50" y="84" font-family="sans-serif" font-size="11" font-style="italic" fill="#1c1917">Apang durus kaja kangin,</text>
      <text x="50" y="102" font-family="sans-serif" font-size="11" font-style="italic" fill="#b45309" font-weight="bold">Senggoting panji ameng-ameng..."</text>
    </svg>`,
    text: 'Tembang Bibi Randa kawastanin tembang rare. Lengkara pungkuran: "Bibi bibi randa, apang durus kaja kangin, ..."',
    options: [
      { id: 'A', text: 'Senggoting panji ameng-ameng' },
      { id: 'B', text: 'Don kencung don kayu manis' },
      { id: 'C', text: 'Katak-katak mekuak-kuak' },
      { id: 'D', text: 'Curik-curik sengkawa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Lirik tembang rare Bibi Randa: "Bibi bibi randa, apang durus kaja kangin, senggoting panji ameng-ameng, mebaju sarwa petak..."',
  },
  {
    id: 34,
    type: 'pg',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Karakteristik Tembang Rare Bali',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan ciri khas dan situasi dinyanyikannya tembang rare.',
    text: 'Tembang Rare marupa Bibi Randa, Meong-meong, lan Dadong Dauh ketahnyane katembangang ritatkala ...',
    options: [
      { id: 'A', text: 'Alit-alite sedek meplalianan kasarengin timpal-timpalne antuk liang' },
      { id: 'B', text: 'Upacara pitra yadnya / pengabenan' },
      { id: 'C', text: 'Sedek ujian tertulis ring kelas' },
      { id: 'D', text: 'Sedek mirengang baos pidarta bupati' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tembang rare inggih punika sekar alit sane katembangang olih alit-alit ritatkala meplalianan anggen ngawinang manah liang tur madaging piteket becik.',
  },
  {
    id: 35,
    type: 'pg',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Pengertian Bladbadan Bali',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan struktur bladbadan (arti sujati lan arti parikrama).',
    text: 'Paribasa Bali sane madue arti sujati (arti sujatine/giing) lan arti parikrama (makna kiasan/suksma) kawastanin ...',
    options: [
      { id: 'A', text: 'Bladbadan' },
      { id: 'B', text: 'Sasonggan' },
      { id: 'C', text: 'Wewangsalan' },
      { id: 'D', text: 'Cecimpedan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bladbadan inggih punika basa basita (paribasa Bali) sane kadagingin kruna giing (arti sujati) lan suksmanipun (arti parikrama).',
  },
  {
    id: 36,
    type: 'pg',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Bladbadan Panak Jaran',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi arti parikrama dari bladbadan panak jaran.',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="bladGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4338ca"/>
          <stop offset="100%" stop-color="#6366f1"/>
        </linearGradient>
      </defs>
      <rect width="400" height="130" rx="12" fill="url(#bladGrad)"/>
      <rect x="25" y="20" width="350" height="90" rx="10" fill="#ffffff"/>
      <text x="40" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#312e81">PARIBASA BALI: BLADBADAN</text>
      <line x1="40" y1="52" x2="360" y2="52" stroke="#e0e7ff" stroke-width="2"/>
      <text x="40" y="72" font-family="sans-serif" font-size="11" fill="#1e293b">Lengkara: "Panak jaran, da pati ..."</text>
      <text x="40" y="92" font-family="sans-serif" font-size="10" fill="#4f46e5" font-weight="bold">Arti Sujati: be bunter / bapang -> Arti Parikrama: Gancang / Prapat</text>
    </svg>`,
    text: 'Cingak ilustrasi ring ajeng! Bladbadan "Panak jaran" arti sujatine be bunter / bapang, suksmanipun (arti parikrama) inggih punika ...',
    options: [
      { id: 'A', text: 'Bapang (Gancang / Prapat)' },
      { id: 'B', text: 'Lambat / Koh' },
      { id: 'C', text: 'Sungkan batis' },
      { id: 'D', text: 'Malaib kadoh' },
    ],
    correctAnswer: 'A',
    explanation:
      'Panak jaran arti sujatine "bapang". Suksman utawi arti parikramannyane inggih punika "bapang" sane maartos prapat / gancang (cepat/tangkas).',
  },
  {
    id: 37,
    type: 'pg',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Bladbadan Matimpal Batad',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan suksma dari bladbadan matimpal batad.',
    text: 'Bladbadan "Matimpal batad", arti sujatine inggih punika "kepet". Suksma utawi arti parikramannyane inggih punika ...',
    options: [
      { id: 'A', text: 'Ngepet / Kancing' },
      { id: 'B', text: 'Ngedeng' },
      { id: 'C', text: 'Ngesir' },
      { id: 'D', text: 'Ngigel' },
    ],
    correctAnswer: 'A',
    explanation:
      'Matimpal batad giingnyane kepet, suksmanipun inggih punika ngepet utawi kancing.',
  },
  {
    id: 38,
    type: 'pg',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Bladbadan Ngulat Klangsah',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan arti parikrama dari bladbadan ngulat klangsah.',
    text: '"Eda ja ngulat klangsah, nyemak gawe sing suud-suud." Ngulat klangsah arti sujatine "ngalap", suksmanipun ...',
    options: [
      { id: 'A', text: 'Ngalap kasihan / nyemak pakaryan tiosan' },
      { id: 'B', text: 'Mempen bunga' },
      { id: 'C', text: 'Ngrayunin ajengan' },
      { id: 'D', text: 'Numbas don busung' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ngulat klangsah arti sujatine ngalap, suksmanipun ngalap kasihan / nyemak pakaryan tiosan.',
  },
  {
    id: 39,
    type: 'pg',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Bladbadan Don Sentul',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi arti parikrama dari bladbadan don sentul.',
    text: 'Bladbadan: "Don sentul, ... dewek tiange tusing nyidaang ngalahang musuhe." Kruna sane patut anggen ngisi titik-titik manut suksma don sentul inggih punika ...',
    options: [
      { id: 'A', text: 'Kalah (santukan don sentul arti sujatine lumah)' },
      { id: 'B', text: 'Menang' },
      { id: 'C', text: 'Lega' },
      { id: 'D', text: 'Sugih' },
    ],
    correctAnswer: 'A',
    explanation:
      'Don sentul arti sujatine "lumah", suksman utawi arti parikramannyane "kalah".',
  },
  {
    id: 40,
    type: 'pg',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Bladbadan Nyepih Don',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan suksma dari bladbadan nyepih don (ngancan/sayan).',
    text: '"Nyepih don", arti sujatine "ngancan", suksman kruna punika inggih punika ...',
    options: [
      { id: 'A', text: 'Sayan / Nyangsan (semakin)' },
      { id: 'B', text: 'Kured / Kidik' },
      { id: 'C', text: 'Pidan / Ilu' },
      { id: 'D', text: 'Suud / Tusing' },
    ],
    correctAnswer: 'A',
    explanation:
      'Nyepih don arti sujatine ngancan, suksmanipun sayan / nyangsan (semakin hari semakin bertambah).',
  },

  // ==========================================
  // BAGIAN II: 5 PILIHAN GANDA KOMPLEKS KATEGORI (PGK)
  // (Tiap nomor madue 3 pernyataan Benar / Salah)
  // ==========================================

  // --- SOAL 41: KATEGORI WACANA NGEWACEN & NYAURIN PITAKEN ---
  {
    id: 41,
    type: 'pgk_kategori',
    element: '(Ngewacen) Memahami isi teks wacana basa Bali lan saurin pitaken ring sor',
    topic: 'Analisis Pamahaman Wacana Kesenengan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 4,
    indicator: 'Siswa dapat menilai kebenaran pernyataan terkait pemahaman isi teks wacana kesenengan berbahasa Bali.',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="pgkGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f766e"/>
          <stop offset="100%" stop-color="#14b8a6"/>
        </linearGradient>
      </defs>
      <rect width="400" height="130" rx="12" fill="url(#pgkGrad1)"/>
      <rect x="20" y="18" width="360" height="94" rx="8" fill="#ffffff"/>
      <text x="35" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f766e">PGK KATEGORI: Indik Ngewacen Wacana Kesenengan</text>
      <line x1="35" y1="48" x2="365" y2="48" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="35" y="68" font-family="sans-serif" font-size="10.5" fill="#334155">Cingak tigang (3) pranyatan ring sor. Tengerin BENAR yening</text>
      <text x="35" y="86" font-family="sans-serif" font-size="10.5" fill="#334155">manut ring isi wacana lan tata basa Bali, utawi SALAH yening nenten patut.</text>
    </svg>`,
    text: 'Wacen wacana indik kesenengan lan pikenohnyane! Tengerin Benar utawi Salah ring nyabran pranyatan puniki!',
    statements: [
      {
        id: 's1',
        text: 'Kesenengan melajah ngigel Bali ngicenin pikenoh anggen nglestariang seni budaya tradisional Bali.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Kruna pitaken "Sira" kaanggen nakonin genah utawi tongos kamargiang parikrama.',
        correctAnswer: false, // Salah (Sira kaanggen nakonin jadma/orang, ring kija kaanggen genah)
      },
      {
        id: 's3',
        text: 'Ngelimbakang kawagedan melarapan kesenengan prasida ngwerdiang angga dados pradnyan tur mawiguna ring masarakat.',
        correctAnswer: true, // Benar
      },
    ],
    explanation:
      'Pranyatan 1 BENAR (melajah ngigel nglestariang seni). Pranyatan 2 SALAH (Kruna pitaken "Sira" kaanggen nakonin jadma/orang, yening nakonin genah nganggen "ring kija"). Pranyatan 3 BENAR (ngelimbakang kesenengan ngawinang sisia waged tur mawiguna).',
  },

  // --- SOAL 42: KATEGORI KRUNA KRIYA LUMAKSANA LAN LINAKSANA ---
  {
    id: 42,
    type: 'pgk_kategori',
    element: '(Nyurat) Menganalisis kruna kriya lumaksana lan linaksana ring lengkara',
    topic: 'Kruna Kriya Lumaksana vs Linaksana',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 4,
    indicator: 'Siswa dapat mengevaluasi ketepatan klasifikasi kruna kriya lumaksana dan linaksana dalam kalimat.',
    text: 'Titik raos ring sor maosang indik kruna kriya lumaksana lan linaksana. Tengerin Benar utawi Salah ring soang-soang pranyatan!',
    statements: [
      {
        id: 's1',
        text: 'Kruna "nulis", "nyemak", lan "maca" kabaos kruna kriya lumaksana santukan polih pengater anusuara.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Lengkara "Buku punika kasurat olih I Wayan" inggih punika conto lengkara lumaksana (aktif).',
        correctAnswer: false, // Salah (kasurat punika linaksana / pasif)
      },
      {
        id: 's3',
        text: 'Kruna lingga "jait" polih seselan "-in-" maobah dados kruna linaksana "jinait".',
        correctAnswer: true, // Benar
      },
    ],
    explanation:
      'Pranyatan 1 BENAR (nulis, nyemak, maca wantah kriya lumaksana/aktif). Pranyatan 2 SALAH (lengkara kasurat olih I Wayan inggih punika linaksana/pasif santukan polih pengater ka-). Pranyatan 3 BENAR (jait + in dados jinait linaksana).',
  },

  // --- SOAL 43: KATEGORI PABLIGBAGAN DIALOG CITA-CITA ---
  {
    id: 43,
    type: 'pgk_kategori',
    element: '(Mebebaosan) Laksanaang pabligbagan teks dialog indik tetujon / cita-cita',
    topic: 'Tata Krama Pabligbagan & Profesi',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 4,
    indicator: 'Siswa dapat menentukan kebenaran pernyataan terkait tata krama percakapan dan istilah profesi cita-cita.',
    text: 'Cingak pranyatan indik pabligbagan dialog tetujon/cita-cita puniki! Tengerin Benar utawi Salah!',
    statements: [
      {
        id: 's1',
        text: 'Undagi inggih punika sebutan profesi tradisional Bali katur sang sane madue kewagedan ngwangun wangunan adat Bali.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Ritatkala pabligbagan sareng timpal ring kelas, iraga kadadosang megat baos timpal sane sedek mabaos mangda gelis puput.',
        correctAnswer: false, // Salah (nenten kadadosang megat baos)
      },
      {
        id: 's3',
        text: 'Pragina wantah anak sane madue kewagedan tur pakaryan nyolahang sesolahan sasana tari Bali.',
        correctAnswer: true, // Benar
      },
    ],
    explanation:
      'Pranyatan 1 BENAR (undagi wantah arsitek tradisional Bali). Pranyatan 2 SALAH (megat baos timpal nenten patut santukan nglanggar tata krama subasita). Pranyatan 3 BENAR (pragina inggih punika penari tari Bali).',
  },

  // --- SOAL 44: KATEGORI MELANTUNKAN TEMBANG BIBI RANDA ---
  {
    id: 44,
    type: 'pgk_kategori',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Tembang Rare Bibi Randa',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 4,
    indicator: 'Siswa dapat menganalisis karakteristik, lirik, dan tujuan tembang rare Bibi Randa.',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="tembangGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#831843"/>
          <stop offset="100%" stop-color="#be185d"/>
        </linearGradient>
      </defs>
      <rect width="400" height="130" rx="12" fill="url(#tembangGrad2)"/>
      <rect x="20" y="18" width="360" height="94" rx="8" fill="#ffffff"/>
      <text x="35" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#831843">ANALISIS: Tembang Rare Bibi Randa</text>
      <line x1="35" y1="48" x2="365" y2="48" stroke="#f472b6" stroke-width="1.5"/>
      <text x="35" y="68" font-family="sans-serif" font-size="10.5" fill="#334155">Tembang Rare katembangang antuk liang manah rikala meplalianan.</text>
      <text x="35" y="86" font-family="sans-serif" font-size="10.5" fill="#334155">Pilihin BENAR utawi SALAH ring nyabran deskripsi puniki!</text>
    </svg>`,
    text: 'Tembang Bibi Randa rumasuk Sekar Alit (Tembang Rare). Tengerin Benar utawi Salah nyabran deskripsi ring sor!',
    statements: [
      {
        id: 's1',
        text: 'Tembang Bibi Randa katembangang antuk nada sane sedih tur kaanggen ring upacara atiwa-tiwa (ngaben).',
        correctAnswer: false, // Salah (tembang rare katembangang antuk liang rikala meplalian)
      },
      {
        id: 's2',
        text: 'Lirik tembang Bibi Randa madaging kruna "mebaju sarwa petak".',
        correctAnswer: true, // Benar
      },
      {
        id: 's3',
        text: 'Nembangang tembang rare prasida ngawinang alit-alite seneng tur nguningayang basa Bali sane luwih.',
        correctAnswer: true, // Benar
      },
    ],
    explanation:
      'Pranyatan 1 SALAH (tembang rare katembangang rikala meplalian antuk liang, boya ja rikala sedih ring ngaben). Pranyatan 2 BENAR (liriknyane: "mebaju sarwa petak..."). Pranyatan 3 BENAR (nembangang tembang rare ngawinang alit-alit seneng tur waged basa Bali).',
  },

  // --- SOAL 45: KATEGORI IDENTIFIKASI PARIBASA BLADBADAN BALI ---
  {
    id: 45,
    type: 'pgk_kategori',
    element: '(Sastra & Paribasa) Melantunkan tembang Bibi Randa lan ngidentifikasi bladbadan',
    topic: 'Identifikasi Bladbadan Arti Sujati & Parikrama',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 4,
    indicator: 'Siswa dapat menentukan kebenaran pasangan arti sujati dan arti parikrama pada paribasa bladbadan Bali.',
    text: 'Cingak tigang pasang arti bladbadan puniki! Tengerin Benar utawi Salah ring nyabran pranyatan!',
    statements: [
      {
        id: 's1',
        text: 'Bladbadan "Matimpal batad" arti sujatine "kepet", suksmanipun inggih punika "ngepet / kancing".',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Bladbadan "Don sentul" arti sujatine "lumah", suksmanipun inggih punika "menang sayembara".',
        correctAnswer: false, // Salah (suksman lumah inggih punika kalah, boya ja menang)
      },
      {
        id: 's3',
        text: 'Bladbadan "Panak jaran" arti sujatine "bapang", suksmanipun inggih punika "gancang / prapat".',
        correctAnswer: true, // Benar
      },
    ],
    explanation:
      'Pranyatan 1 BENAR (matimpal batad = kepet -> ngepet/kancing). Pranyatan 2 SALAH (don sentul arti sujatine lumah, suksmanipun wantah "kalah", boya ja menang). Pranyatan 3 BENAR (panak jaran = bapang -> gancang/prapat).',
  },
];
