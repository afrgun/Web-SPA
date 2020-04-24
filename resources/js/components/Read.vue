<template>
  <div class="row">
    <section class="top-header">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <span>Gratis Ebook 9 Cara Cerdas Menggunakan Domain [x]</span>
          </div>
          <div class="col-sm-6">
            <ul class="top-header__list">
              <li><a> 0274 - 530005505 </a></li>
              <li><a> Live Chat </a></li>
              <li><a> Member Area </a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            
            <div id="logo">
              <a href="#">
                <img :src="logo" />
              </a>
            </div>

            <nav>
              <ul id="mainmenu" class="main-nav js--main-nav">
                <li><a href="#">Hosting</a></li>
                <li><a href="#">Domain</a></li>
                <li><a href="#">Server</a></li>
                <li><a href="#">Website</a> </li>
                <li><a href="#">Afiliasi</a> </li>
                <li><a href="#">Promo </a></li>
                <li><a href="#">Pembayaran</a></li>
                <li><a href="#">Review</a></li>
                <li><a href="#">Kontak</a></li>
                <li><a href="#">Blog</a></li>
              </ul>

              <a class="mobile-nav-icon js--nav-icon">
                <span id="menu-btn"></span>
              </a>
            </nav>

          </div>

        </div>
      </div>  
    </header>

    <section id="banner-php">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
              <h1>PHP HOSTING</h1>
              <h2>Cepat, handal, penuh dengan modul PHP yang Anda Butuhkan</h2>
              <ul>
                <li> <img :src="checklist" /> Solusi PHP untuk performa query yang lebih cepat/</li>
                <li> <img :src="checklist" /> Konsumsi memori yang lebih rendah.</li>
                <li> <img :src="checklist" /> Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 7</li>
                <li> <img :src="checklist" /> Fitur enkripsi IonCube dan Zen Guard Loaders</li>
              </ul>
          </div>
          <div class="col-md-6">
            <img :src="banner_php" />
          </div>
        </div>
      </div>
     
    </section>
    
    <div class="line"></div>

    <section id="logo-enkripsi">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-enkripsi">
            <img :src="icon_zenguard" alt="zendguard"/>
            <a href="#" style="color: black;">PHP Zend Guard Loader</a>
          </div>
          <div class="col-md-4 col-enkripsi">
            <img :src="icon_composer" alt="composer"/>
            <a href="#" style="color: black;">PHP Composer</a>
          </div>
          <div class="col-md-4 col-enkripsi">
            <img :src="icon_icecube" alt="ioncube"/>
            <a href="#" style="color: black;">PHP IonCube Loader</a>
          </div>
        </div>
      </div>
    </section>

    <div class="line"></div>

    <section id="pricing">
      <div class="container">
        <div class="row">
          <div class="col-md-12 pricing-title">
            <h3>Paket Hosting Singapura yang Tepat</h3>
            <h3> Diskon 40% + Domain dan SSL Gratis untuk Anda </h3>
          </div>

          <div class="col-sm-3" v-for="price in prices" :key="price.id">
            <div class="pricing-s1 mb30">
              <div v-if="price.title==='Personal'" class="ribbon">BEST SELLER</div>
              <div class="top" v-bind:class="{ 'top-blue': price.title==='Personal' }">
                <h2>{{price.title}}</h2>
                <p class="price-normal">Rp. {{Number(price.price_normal).toLocaleString()}}</p>
                <p class="price">
                  <span class="currency">Rp</span> <b>{{Number(price.price_discount).toLocaleString()}}</b> <span class="currency">/bln</span>
                </p>
              </div>
              <div class="bottom">
                <ul>
                  <li>938 Pengguna Terdaftar</li>
                  <li>Conceptual Overview</li>
                  <li>Styling Layout</li>
                  <li> Color Pallete </li>
                  <li>Budget Planning</li>
                  <li>1 Hour Consultation</li>
                </ul>
                <a href="" class="btn btn-choose">Pilih Sekarang</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <div class="line"></div>

    <section id="powerfull">
      <div class="container">
        <div class="row">
          <div class="col-md-12 head-title">
            <h3>Powerful dengan Limit PHP yang Lebih Besar</h3>
          </div>

          <div class="col-sm-6">
            <table class="table-left">
              <tr>
                <td><img :src="checklist" /></td><td>max execution time 300s</td>
              </tr>
              <tr>
                <td><img :src="checklist" /></td><td>max execution time 300s</td>
              </tr>
              <tr>
                <td><img :src="checklist" /></td><td>php memory limit 1024 MB</td>
              </tr>
						</table>
          </div>
          <div class="col-sm-6">
            <table class="table-right">
              <tr>
                <td><img :src="checklist" /></td><td>post max size 128 MB</td>
              </tr>
              <tr>
                <td><img :src="checklist" /></td><td>upload max filesize 128 MB</td>
              </tr>
              <tr>
                <td><img :src="checklist" /></td><td>max input vars 2500</td>
              </tr>
						</table>
          </div>
        </div>
      </div>
    </section>

    <div class="line"></div>

    <section id="allin">
      <div class="container">
        <div class="row">
          <div class="col-md-12 head-title">
            <h3>Semua Paket Hosting Sudah Termasuk</h3>
          </div>

          <div class="col-sm-4 box-allin">
            <img :src="icon_allin1" />
            <p class="box-allin__title">PHP Semua Versi</p>
            <p>Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah Sesuka Anda!</p>
          </div>

          <div class="col-sm-4 box-allin">
            <img :src="icon_allin2" />
            <p class="box-allin__title">PHP Semua Versi</p>
            <p>Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah Sesuka Anda!</p>
          </div>

          <div class="col-sm-4 box-allin">
            <img :src="icon_allin3" />
            <p class="box-allin__title">PHP Semua Versi</p>
            <p>Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah Sesuka Anda!</p>
          </div>

          <div class="col-sm-4 box-allin">
            <img :src="icon_allin4" />
            <p class="box-allin__title">PHP Semua Versi</p>
            <p>Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah Sesuka Anda!</p>
          </div>

          <div class="col-sm-4 box-allin">
            <img :src="icon_allin5" />
            <p class="box-allin__title">PHP Semua Versi</p>
            <p>Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah Sesuka Anda!</p>
          </div>

          <div class="col-sm-4 box-allin">
            <img :src="icon_allin6" />
            <p class="box-allin__title">PHP Semua Versi</p>
            <p>Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah Sesuka Anda!</p>
          </div>

        </div>
      </div>
    </section>

    <div class="line"></div>

    <section id="full-support">
      <div class="container">
        <div class="row">
          <div class="col-md-12 head-title">
            <h3>Mendukung Penuh Framework Laravel</h3>
          </div>

           <div class="col-md-6">
              <p>Tak perlu menggunakan dedicated server ataupun VPS yang mahal. 
                Layanan PHP hosting murah kami mendukung penuh framework favorit Anda</p>
              <ul>
                <li> <img :src="checklist" /><p> Install Laravel <b>1 klik</b> dengan Softaculous installer.</p></li>
                <li> <img :src="checklist" /><p> Mendukung ekstensi <b>PHP Mcrypt, phar, mbstring, json,</b> dan <b>fileinfo</b>.</p></li>
                <li> <img :src="checklist" /><p> Tersedia <b>Composer</b> dan <b>SSH</b> untuk menginstal packages pilihan Anda.</p></li>
              </ul>
              <span>Nb, Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</span>

              <a href="#" class="btn btn-fullsupport">Pilih Hosting Anda</a>
          </div>
          <div class="col-md-6">
            <img :src="fullsupport" />
          </div>

        </div>
      </div>
    </section>

    <div class="line"></div>

    <section id="modul">
      <div class="container">
        <div class="row">
          <div class="col-md-12 head-title">
            <h3>Modul Lengkap untuk Menjalankan Aplikasi PHP Anda.</h3>
          </div>

          <div class="col-sm-3">
            <p>IcePHP<br/>apc<br/>apcu<br/>apm<br/>ares<br/>bcmath<br/>bcompiler<br/>big_int<br/>bitset<br/>bloomy<br/>bz2_filter<br/>clamav<br/>coin_acceptor<br/>crack<br/>dba<br/></p>
          </div>
          <div class="col-sm-3">
            <p>http<br/>huffman<br/>idn<br/>igbinary<br/>imagick<br/>imap<br/>inclued<br/>inotify<br/>interbase<br/>intl<br/>ioncube_loader<br/>ioncube_loader_4<br/>jsmin<br/>json<br/>Idap<br/></p>
          </div>
          <div class="col-sm-3">
            <p>nd_pdo_mysql<br/>oath<br/>oci8<br/>odbc<br/>opcache<br/>pdf<br/>pdo<br/>pdo_dblib<br/>pdo_firebird<br/>pdo_mysql<br/>pdo_odbc<br/>pdo_pgsql<br/>pdo_sqlite<br/>pgsql<br/>phalcon<br/></p>
          </div>
          <div class="col-sm-3">
            <p>stats<br/>stem<br/>stomp<br/>suhosin<br/>sybase_ct<br/>sysvmsg<br/>sysvem<br/>sysvshm<br/>tidy<br/>timezonedb<br/>trader<br/>translit<br/>uploadprogress<br/>uri_template<br/>uuid<br/></p>
          </div>
          
          <div class="col-sm-12 text-center">
            <a href="#" class="btn btn-full">Selengkapnya</a>
          </div>

        </div>
      </div>
    </section>

    <div class="line"></div>

    <section id="stable">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p style="color: black;"><h4>Linux Hosting yang Stabil dengan teknologi LVE</h4></p>
            <p style="color: black;">SuperMicro <b>Intel Xeon 24-Cores</b> server dengan RAM <b>128 GB</b> dan teknologi <b>LVE CloudLinux</b> untuk stabilitas server Anda. Dilengkapi dengan <b>SSD</b> untuk kecepatan <b>MySQL</b> dan caching. Apache load balancer berbasis LiteSpeed Technologies. <b>CageFS</b> security. <b>Raid-10</b> protection dan auto backup untuk keamanan website PHP Anda</p><br/>
            <a href="#" class="btn btn-fullsupport">Pilih Hosting Anda</a>
          </div>
          <div class="col-md-6">
            <img :src="img_support" />
          </div>
        </div>
      </div>
    </section>
    <section id="how">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p>Bagikan jika Anda menyukai halaman ini</p>
          </div>
          <div class="col-sm-6">
            <a class="social-link facebook" href="" id="fb-share" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i> Share</a>  
            <a class="social-link twitter" href="" id="tweet" rel="nofollow" target="_blank" title="Tweet this Page"><i class="fa fa-twitter"></i> Tweet</a> 
            <a class="social-link gplus" href="" id="gplus-share" title="Plus 1 on Google+"><i class="fa fa-google-plus"></i>Google+</a>
                            
          </div>
        </div>
      </div>
    </section>

    <section id="help">
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <p>Perlu <b>BANTUAN?</b> Hubungi Kami : 0274-5305505</p>
          </div>
          <div class="col-sm-3"> 
            <button class="btn btn-livechat"> Live Chat </button>
          </div>
        </div>
      </div>
    </section>

    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 card-footer">
             <h4>HUBUNGI KAMI</h4>
              <ul>
                <li><a href="">0274-5305505</a></li>
                <li><a href="">Senin - Minggu</a></li>
                <li><a href="">24 Jam Nonstop</a></li><br/>
                <li><a href="">Jl. Selokan Mataram</a></li>
                <li><a href="">Karangjati MT I/304</a></li>
                <li><a href="">Sinduadi, Mlati, Sleman</a></li>
                <li><a href="">Yogyakarta 55284</a></li>
              </ul>
          </div>
          <div class="col-sm-3 card-footer">
            <h4>LAYANAN</h4>
              <ul>
                  <li><a href="">Domain</a></li>
                  <li><a href="">Shared Hosting</a></li>
                  <li><a href="">Cloud VPS Hosting</a></li>
                  <li><a href="">Managed VPS Hosting</a></li>
                  <li><a href="">Web Builder</a></li>
                  <li><a href="">Keamanan SSL/HTTPS</a></li>
                  <li><a href="">Jasa Pembuatan Website</a></li>
                  <li><a href="">Program Afiliasi</a></li>
              </ul>
          </div>
          <div class="col-sm-3 card-footer">
            <h4>SERVICE HOSTING</h4>
            <ul>
                <li><a href="">Hosting Murah</a></li>
                <li><a href="">Hosting Indonesia</a></li>
                <li><a href="">Hosting Singapura SG</a></li>
                <li><a href="">Hosting PHP</a></li>
                <li><a href="">Hosting Wordpress</a></li>
                <li><a href="">Hosting Laravel</a></li>
            </ul>
          </div>
          <div class="col-sm-3 card-footer">
            <h4>TUTORIAL</h4>
            <ul>
                <li><a href="">Knowledgebase</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Cara Pembayaran</a></li>
            </ul>

          </div>
        </div>

        <div class="row">
          <div class="col-sm-3 card-footer">
             <h4>TENTANG KAMI</h4>
              <ul>
                <li><a href="">Tim Niagahoster</a></li>
                <li><a href="">Karir</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Penawaran & Promo Spesial</a></li>
                <li><a href="">Kontak Kami</a></li>
              </ul>

          </div>
          <div class="col-sm-3 card-footer">
            <h4>KENAPA PILIH NIAGAHOSTER?</h4>
            <ul>
                <li><a href="">Support Terbaik</a></li>
                <li><a href="">Garansi Harga Murah</a></li>
                <li><a href="">Domain Gratis Selamanya</a></li>
                <li><a href="">Datacenter Hosting Terbaik</a></li>
                <li><a href="">Review Pelanggan</a></li>
            </ul>

          </div>
          <div class="col-sm-3 card-footer">
            <h4>NEWSLETTER</h4>
            <ul>
              <li><a href="">Dapatkan promo dan konten menarik dari penyedia hosting terbaik Anda</a></li>
            </ul>

          </div>
          <div class="col-sm-3 card-footer">
           <ul class="oneline">
              <li><a class="social-link facebook" href="" id="fb-share" rel="nofollow" target="_blank"><img :src="fb_round" /></a></li>
              <li><a class="social-link twitter" href="" id="tweet" rel="nofollow" target="_blank" title="Tweet this Page"><img :src="twitter_round" /></a></li>
              <li><a class="social-link gplus" href="" id="gplus-share" title="Plus 1 on Google+"><img :src="g_round" /></a></li>
          </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 card-footer">
             <h4>PEMBAYARAN</h4>
            <ul class="oneline">
              <li><img :src="pay_bca" /></li>
              <li><img :src="pay_alto" /></li>
              <li><img :src="pay_bni" /></li>
              <li><img :src="pay_atmbersama" /></li>
              <li><img :src="pay_mandiri" /></li>
              <li><img :src="pay_master" /></li>
              <li><img :src="pay_permata" /></li>
              <li><img :src="pay_prima" /></li>
              <li><img :src="pay_visa" /></li>
            </ul>
          </div>

          <span>Aktivasi instan dengan e-Payment. Hosting dan domain langsung aktif!</span>
        </div>
        
      </div>
    </section>

    <hr>

    <section id="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <p>Copyright @2016 Niagahoster | Hosting powered by PHP7, CloudLinux, CloudFlare, 
              Bitninja and DC Biznet Technovillage Jakarta <br/>
              Cloud VPS Murah powered by Webuzo Softculou, 
              Intel SSD and cloud computing technology</p>

          </div>
          <div class="col-sm-4">
            <p>Syarat dan Ketentuan | Kebijakan Privasi</p>
          </div>
        </div>
      </div>
    </section>
  
  <a href="#" id="back-to-top"></a>
  </div>
</template>



<script>
export default {
  data() {
    return {
      prices: [],
      logo: "assets/images/logo.png",
      banner_php: "assets/images/illustration banner PHP hosting-01.svg",
      checklist: "assets/images/checklist.png",
      icon_zenguard: "assets/images/zen.png",
      icon_composer: "assets/images/composer.png",
      icon_icecube: "assets/images/ion.png",
      icon_allin1: "assets/images/icon PHP Hosting_PHP Semua Versi.svg",
      icon_allin2: "assets/images/icon PHP Hosting_My SQL.svg",
      icon_allin3: "assets/images/icon PHP Hosting_CPanel.svg",
      icon_allin4: "assets/images/icon PHP Hosting_garansi uptime.svg",
      icon_allin5: "assets/images/icon PHP Hosting_InnoDB.svg",
      icon_allin6: "assets/images/icon PHP Hosting_My SQL remote.svg",
      fullsupport: "assets/images/illustration banner support laravel hosting.svg",
      img_support: "assets/images/Image support.png",
      fb_round: "assets/images/fb_round.png",
      twitter_round: "assets/images/twitter_round.png",
      g_round: "assets/images/g_round.png",
      pay_bca: "assets/images/bca.png",
      pay_alto: "assets/images/alto.png",
      pay_atmbersama: "assets/images/atmbersama.png",
      pay_bni: "assets/images/bni.png",
      pay_mandiri: "assets/images/mandiri.png",
      pay_master: "assets/images/mastercard.png",
      pay_permata: "assets/images/permatabank.png",
      pay_prima: "assets/images/prima.png",
      pay_visa: "assets/images/visa.png"
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      const URL = 'http://localhost:8000/api/price';

      return new Promise((resolve, reject) =>{
        axios.get(URL).then(response => {
          resolve(response);
          this.prices = JSON.parse(JSON.stringify(response.data));
          console.log(response.data);
        }).catch(error =>{
          reject('ERROR');
        });
      });
      
    },

  }
};
</script>