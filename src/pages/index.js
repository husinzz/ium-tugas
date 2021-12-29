import React from "react";
import {Link} from "gatsby"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";

const list = [
  {
    image: "image/info/airterjunpengantin.jpg",
    title: "Air Terjun Pengantin",
    info: "Wisata Air Terjun Pengantin Ngawi adalah salah satu tempat wisata yang berada di desa hargo mulyo , kecamatan ngrambe . kabupaten ngawi . provinsi jawa timur . negara. indonesia . Wisata Air Terjun Pengantin Ngawi adalah tempat wisata yang ramai dengan wisatawan pada hari biasa maupun hari liburan. Tempat ini sangat indah dan bisa memberikan sensasi yangberbeda dengan aktivitas kita sehari hari. Wisata Air Terjun Pengantin Ngawi memiliki pesona keindahan yang sangat menarik untuk dikunjungi. Sangat di sayangkan jika anda berada di kota ngawi tidak mengunjungi wisata alam yang mempunyai keindahanyang tiada duanya tersebut.",
    link: "https://www.google.com/maps/place/Air+Terjun+Pengantin/@-7.5459961,111.2072979,17z/data=!4m5!3m4!1s0x2e79f39ef7ad1045:0x512d0080024d1009!8m2!3d-7.5459961!4d111.2094866",
  },
  {
    image: "image/info/airterjunsowono.jpg",
    title: "Suwono Waterfall",
    info: "Bukan menjadi hal asing lagi bahwa daerah Ngawi terdapat pesona alam yang menakjubkan. Salah satu pesona wisata alam yang tidak banyak diketahui adalah Air Terjun Suwono. Air terjun yang elok ini berasal dari gunung lawu, sebab berada di lereng gunung tersebut. Meskipun air terjun ini terpencil dan berada tersembunyi, namun wisata ini sudah dikelola secara pribadi oleh warga setempat. Karena masih dikelola oleh warga setempat, fasilitas yang disediakan pun belum terlalu lengkap. Namun tetap saja tidak akan mengurangi keindahan dan keasrian air terjun ini",
    link: "https://www.google.com/maps/place/Suwono+Waterfall/@-7.5526524,111.1989466,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79f37700000001:0x5a039109d2f2a7a2!8m2!3d-7.5526524!4d111.2011353",
  },
  {
    image: "image/info/airterjunsw.jpg",
    title: "Air Terjun Srambang Park Ngawi",
    info: "Srambang Park merupakan sebuah lokasi wisata yang menghadirkan panorama alam yang menyejukkan juga menenangkan jiwa dan raga. Banyak sekali deretan pohon pinus yang menjulang tinggi di sekitar lokasi, dihiasi dengan bunga-bunga cantik yang ikut meramaikan Srambang Park Ngawi ini. Lokasi wisata yang indah ini berada di Kabupaten Ngawi, tepatnya di Desa Girimulyo. Kabupaten Ngawi berada di bagian barat Provinsi Jawa Timur dan berbatasan langsung dengan Provinsi Jawa Tengah. Yang menjadi tujuan utama pengunjung ketika berada di Srambang Park ini ialah menuju Air Terjun Srambang Ngawi yang berada sekitar 500 meter dari area taman. Meskipun lokasi wisata ini sempat ditutup dalam rangka mencegah penyebaran Covid-19, namun saat ini sudah dibuka kembali. Namun pengunjung harus senantiasa memperhatikan 3M (Memakai masker, Mencuci tangan, serta Menjaga jarak).",
    link: "https://www.google.com/maps/place/Air+Terjun+Srambang+Park+Ngawi/@-7.5688195,111.2260396,17z/data=!4m9!1m2!2m1!1sair+terjun+srambang+ngawi!3m5!1s0x2e79f318cd3d556d:0xa248a81317431797!8m2!3d-7.5662607!4d111.2307539!15sChlhaXIgdGVyanVuIHNyYW1iYW5nIG5nYXdpkgESdG91cmlzdF9hdHRyYWN0aW9u",
  },
  {
    image: "image/info/labir.jpg",
    title: "Taman Labirin",
    info: "Labirin Ngawi merupakan tema desain wisata taman baru yang lagi ngetrend di kalangan wisatawan, seperti halnya taman labirin Coban Rondo di Malang atau labirin wasata bunga nusantara Cianjur yang mendesain tanamannya sehingga  menjadi dinding memanjang berbelok-belok yang menarik sebagai permainan petak umpet dan area spot foto yang unik",
    link: "https://www.google.com/maps/place/Taman+Labirin/@-7.3908613,111.4517321,17z/data=!4m9!1m2!2m1!1staman+labirin+ngawi!3m5!1s0x2e79e76835840f0f:0x3fbe9c8dfda87bfa!8m2!3d-7.3914919!4d111.4531446!15sChN0YW1hbiBsYWJpcmluIG5nYXdpkgEJY2l0eV9wYXJr?hl=id",
  },
  {
    image: "image/info/watujonggol.jpg",
    title: "Wisata Watu Jonggol",
    info: "Salah satu wisata di kaki Gunung Lawu yang tak boleh kamu lewatkan adalah Watu Jonggol Ngawi. Destinasi yang menawarkan wisata alam yang terletak di area pemukiman namun memberikan pesona yang instagramable. Bahkan ada yang menyebutkan pemandangan alam disana tak tertandingi dengan wisata lain. Setibanya disana, pengunjung bakal disuguhkan dengan ikon utama berupa batu yang tertata di tebing. Ketika memasuki area dalam, maka juga akan dijumpai sejumlah patung yang cocok untuk foto – foto. Bahkan Ada pula air terjun hingga kolam renang baik untuk anak-anak maupun untuk dewasa. Tempat wisata Ngawi ini sudah dikelola dengan baik, berbagai fasilitas pun telah dihadirkan untuk pengunjung. Dengan demikian, sangat tepat apabila obyek ini di sambangi oleh keluarga atau rombongan",
    link: "https://www.google.com/maps/place/Wisata+Watu+Jonggol/@-7.554306,111.1659785,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79f48b09f4fee3:0x1ad7ded3d8c5a76c!8m2!3d-7.554306!4d111.1681672",
  },
  {
    image: "image/info/kebuntehjamus.jpg",
    title: "Jamus Tea Plantation",
    info: "Kebun Teh Jamus merupakan unit perkebunan terbesar di Ngawi. Agrowisata berwawasan lingkungan hidup ini sudah mulai terkonsep sejak tahun 1993 dan meraih penghargaan tingkat nasional nominasi Kalpataru tahun 2004 kategori Pembina Lingkungan Hidup pada peringatan hari Lingkungan Hidup sedunia pada tanggal 5 Juni 2004 di Istana Negara Jakarta. Sebagai daya tarik lainnya, di sekitar obyek wisata ini terdapat air terjun Grojogan Songo Tuk Pakel. Ada pula makam tua pendiri Kebun Teh Jamus Van Der Rappart (1826-1910) asal Belanda. Daya tarik lain adalah Jamus Borobudur Hill (bukit Borobudur), yaitu bukit setinggi 35,4 meter yang terlihat seperti lahan teh biasa, namun jika dipandang dari kejauhan, nampak sebuah bukit mirip berbentuk candi borobudur.",
    link: "https://www.google.com/maps/place/Jamus+Tea+Plantation/@-7.554306,111.1681672,17z/data=!4m5!3m4!1s0x2e79f49c9725f88d:0xb7fcda939cb0eab5!8m2!3d-7.5617675!4d111.1840596",
  },
  {
    image: "image/info/monumensoerjo.jpg",
    title: "Monumen Soerjo",
    info: "Monumen Suryo adalah tempat yang menarik untuk dikunjungi, terutama karena gambaran sosoknya yang sangat berjasa pada bangsa ini. Monumen ini adalah terkenal dengan sejarah perjuangan mengangkat senjata melawan pasukan asing. Untuk mengingat dan menghargai darah yang tertumpah dalam perjuangan ini dibangunlah monumen ini. Monumen ini didirikan untuk menghormati gubernur pertama Jawa Timur, yang menjadi korban saat terjadi pemberontakan PKI Madiun 1948. Sebagai seorang Raden Mas Tumenggung, Gubernur Suryo ini berasal dari Magetan dan meninggal di Ngawi pada usia 50 tahun. Gubernur Suryo pernah mewakili pihak Indonesia dalam gencatan senjata dengan Jendral Inggris, Mallaby, meskipun tetap saja terjadi perang tiga hari di Surabaya setelah gencatan itu. Tewasnya Mallaby kemudian menyulut perang yang lebih besar, dan bahkan sang Gubernur berorasi di radio untuk membangkitkan semangat melawan pasukan Inggris. Hingga tiga minggu kemudian setelah 10 November, Gubernur Suryo turut berperang dan termasuk pasukan terakhir yang mundur dari Surabaya menuju Mojokerto.",
    link: "https://www.google.com/maps/place/Monumen+Soerjo/@-7.3783587,111.2821323,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79fb2b40273b99:0x3fc8427a2125a460!8m2!3d-7.3783587!4d111.284321",
  },
  {
    image: "image/info/museumtrinil.jpg",
    title: "Museum Trinil Ngawi",
    info: "Museum tempat penyimpanan fosil  manusia kera berjalan tegak atau yang dikenal dengan Phitecantropus Erectus yang ditemukan oleh Dubois pada tahun 1981 sampai dengan tahun 1892. Selain itu disitus ini juga ditemukan fosil banteng dan gajah purba yang sangat berguna bagi penelitian dan pendidikan khususnya dibidang sejarah kepurbakalaan. Museum Trinil terletak di Desa Kawu Kecamatan Kedunggalar + 13 km kearah kota Ngawi dan dapat dicapai dengan segala jenis kendaraan bermotor. Fasilitas yang ada adalah Museum dan Pendopo peristirahatan, Tempat cenderamata (souvenir), Diorama fosil purbakala lengkap dengan identitas dan dekskripsinya, Mushola dan arena bermain anak, Bumi perkemahan, Toilet dan kamar mandi.",
    link: "https://www.google.com/maps/place/Museum+Trinil+Ngawi/@-7.3743888,111.3553198,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79ef8555713345:0x4c3ad0c658d23c53!8m2!3d-7.3743855!4d111.3575086",
  },
  {
    image: "image/info/ngawiagotechnopark.jpg",
    title: "Ngawi Agro Techno Park",
    info: "Ngawi punya tempat wisata baru nhi namanya Agro Techo Park di Ngrambe atau singkat ATP. Destinasi yang lagi hits ini menawarkan wisata alam yang sebenarnya berupa tebing alias lereng. Berkat kejelian akan potensi yang ada, akhirnya jadilah tempat piknik yang kekinian dengan ciri khas tangga yang begitu panjang. Saat memasuki areal ini pengunjung bisa langsung menuruni tangga. Gak tangung-tanggung areal jalur menyerupai jembatan ini menjalar begitu panjang dari atas hingga ke bawah. Selain asik buat foto-foto, wisata Agro Techno Park Mangkleng Ngawi juga asik buat bermain air.",
    link: "https://www.google.com/maps/place/Ngawi+Agro+Techno+Park/@-7.5106435,111.209887,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79f3e088d27765:0x64221636b0164378!8m2!3d-7.5106435!4d111.2120757",
  },
  {
    image: "image/info/srambangpark.jpg",
    title: "Air Terjun Srambang Park Ngawi",
    info: "Srambang Park Ngawi menghadirkan suasana yang sangat nyaman. Suhu udaranya sejuk, serta banyak pepohonan yang rindang, semakin menambah asri. Srabang Park ini bretemakan wisata air terjun dan juga hutan. Maka, wajar sekali bila kawasan wisata ini dikelilingi banyak pepohonan tinggi nan rindang. Wisata Srambang Park menjadi objek wisata favorit bagi warga sekitar. Memang tempatnya sangat nyaman, sangat pas untuk dijadikan sebagai tempat untuk menghabiskan moment liburan. Bila kamu merasa penat dengan aktiftas sehari-hari di kota, maka tempat liburan untuk refreshing yang paling tepat adalah Srambang Park Ngawi.Di sana kamu bisa jalan-jalan merasakan suasana yang asyik dan nyaman. Belum lagi dengan menikmati kesegaran guyura air terjun Srambang yang dingin dan menyegarkan. Sensasi kesegarannya bikin perasaan dan badan menjadi lebih fresh.",
    link: "https://www.google.com/maps/place/Air+Terjun+Srambang+Park+Ngawi/@-7.5662607,111.2285652,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79f318cd3d556d:0xa248a81317431797!8m2!3d-7.5662607!4d111.2307539",
  },
  {
    image: "image/info/tamanhutansegawen.jpg",
    title: "Taman Hutan Segawen Ngrayudan",
    info: "Salah satu destinasi wisata yang berada di Desa Ngrayudan Kec. Jogorogo Kab. Ngawi yaitu ‘Hutan Segawen’. Pepohonan yang begitu rindang dan lebat kebayakan didominasi oleh pohon pinus yang menjulang begitu tinggi dan bunga-bunga yang mengelilingi taman wisata hutan segawen. Keberadaannya sendiri berada di atas Taman Wisata Selondo, di Dusun Gagar Desa Ngrayudan. Pada tanggal 14 September 2020 pukul 13.00 WIB saya berkesempatan untuk datang berkunjung hanya sekedar menikmati hawa/suasana hutan segawen, disana juga terdapat banyak spot foto dengan background pepohonan. Beberapa tempat seperti gubuk, lincak, tempat duduk di atas pohon sekarang kian tidak terawat dan banyak yang hancur kemungkinan besar disebabkan oleh terjangan angin kencang. Dulu saat peresmian hutan segawen juga dihadiri oleh bupati ngawi sebagai tanda bahwa hutan wisata segawen resmi dibuka untuk para pengunjung yang ingin datang kesana. Mungkin kurangnya pengunjung dan kurang diperhatikan oleh pemerintah kota hutan segawen seperti kembali pada hutan belantara yang tidak terurus dengan layak.",
    link: "https://www.google.com/maps/place/Taman+Hutan+Segawen+Ngrayudan/@-7.5539613,111.2562151,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79f2d5937fdfab:0xf64e6e57aa0ebd6a!8m2!3d-7.5539613!4d111.2584038",
  },
  {
    image: "image/info/twtawun.jpg",
    title: "Taman Wisata Tawun",
    info: "Taman Wisata Tawun adalah salah satu tempat wisata yang ada di Kabupaten Ngawi bagian timur (Ngatim). Tepatnya di Desa Tawun Kecamatan Kasreman Kabupaten Ngawi.Taman wisata yang memiliki kelas nasional ini, selain menyajikan wahana kolam renang yang menjadi unggulan, ada juga taman bermain anak, kolam bulus dan ikan, perahu bebek, dan yang terbaru Taman Bunga Tumpah yang menyajikan pemandangan indah dan beberapa spot photo yang menarik. Tradisi yang terkenal disana “Keduk Beji” yang diselenggarakan satu tahun sekali, juga tidak kalah menarik, dan yang sangat dinanti pembukaannya lagi yaitu “Pasar Jadoel Tawun” yang diadakan setiap Minggu Legi pagi. Kini semua wahana yang ada disana bisa dinikmati lagi untuk umum, dikarenakan Dinas Pariwisata Pemuda dan Olahraga Kabupaten Ngawi telah benar-benar membuka kembali Taman Wisata Tawun.",
    link: "https://www.google.com/maps/place/Taman+Wisata+Tawun/@-7.39696,111.4887351,17z/data=!3m1!4b1!4m5!3m4!1s0x2e79c2b2d0119445:0xa91b3f1c8a15d780!8m2!3d-7.3969676!4d111.4908858",
  },
  {
    image: "image/info/wadukpondok.jpg",
    title: "Waduk Pondok",
    info: "Waduk Pondok adalah sebuah obyek wisata yang bisa anda kunjungi di Desa Dero, Kecamatan Bringin, Kabupaten Ngawi, Jawa Timur. Selain dikenal dengan hutannya atau Alas Ketonggo, di Ngawi anda bisa menemukan beberapa wisata alam yang lainnya yang patut untuk anda kunjungi seperti Waduk Pondok yang pesonanya tidak kalah dari waduk-waduk lain di Jawa Timur. Waduk Pondok ini mulai dibangun dari sekitar tahun 1992 sampai 1997. Saat menginjakan kaki di sana, dulu anda bisa melihat banyak pepohonan kelapa walaupun sudah tidak banyak lagi sekarang, mungkin karena faktor dari air waduk atau dari kontur tanah sendiri. Tujuan dari pembangunan Waduk Pondok sendiri adalah untuk mengairi tiga kecamatan yaitu Bringin, Padas dan Pangkur. Namun ternyata waduk ini juga ramai dikunjungi wisatawan dan juga dijadikan sebagai salah satu spot mancing favorite di Ngawi plus sebagai tempat wisata kuliner. Di area waduk anda bisa merasakan masakan Gurami bakar di salah satu warung dengan harga yang terjangkau.",
    link: "https://www.google.com/maps/place/Waduk+Pd.,+Bringin,+Kabupaten+Ngawi,+Jawa+Timur/@-7.3960551,111.5475533,14z/data=!3m1!4b1!4m5!3m4!1s0x2e79dca67e84a4c9:0xab38f61752dff735!8m2!3d-7.4099234!4d111.5632259",
  },
];

// markup
const IndexPage = () => {
  return (
    <>
      <section
        class="w-100"
        style={{ boxSizing: "border-box", backgroundColor: "#141432" }}>
        <div
          class="container-xxl mx-auto p-0  position-relative header-2-3 py-5"
          style={{ fontFamily: "'Poppins', sans-serif;" }}>
          <div>
            <Carousel />
          </div>
        </div>
      </section>
      <section
        class="w-100 py-5"
        id="info"
        style={{ boxSizing: "border-box", backgroundColor: "#141432" }}>
        <h2 class="title-text text-white p-3 text-center">Infomasi tempat wisata</h2>
        <div className="container mx-auto">
          <div className="row justify-content-evenly">
            {list.map((current, index) => {
              return (
                <Card
                  image={current.image}
                  title={current.title}
                  info={current.info}
                  link={current.link}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

function Card(props) {
  return (
    <div
      className="card col m-2"
      style={{ minWidth: "20rem",maxWidth: "30rem", maxHeight: "500px" }}>
      <img
        src={"https://placeholder.pics/svg/200x100" || props.image}
        className="card-img-top"
        alt="card picture"
      />
      <div className="card-body">
        <div className="overflow-auto" style={{ maxHeight: "150px" }}>
          <h5 className="card-title py-1">
            <strong>{props.title}</strong>
          </h5>
          <p className="card-text">{props.info}</p>
        </div>
        <a href={props.link} className="btn btn-primary my-3">
          Google Maps
        </a>
      </div>
    </div>
  );
}

export default IndexPage;
