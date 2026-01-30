<img width="687" height="738" alt="image" src="https://github.com/user-attachments/assets/c93392ac-4c3c-4806-bd21-a242f10ad8f7" />

IP Konum Bilgisi Uygulaması

Bu proje, kullanıcının IP adresini otomatik olarak tespit eden ve bu IP bilgilerine bağlı departmanın konumsal, saat diliminde ve kullanıcının kullanabileceği görsel bir kart yapısı içerisinde sunan bir web uygulamasıdır. Uygulama, JavaScript kullanılarak geliştirilmiş olup harici REST API servislerinden gerçek zamanlı veri çekmektedir.

Projenin Amacı ve Kapsamı

Bu uyumlu temel amaç, modern JavaScript geliştirme yaklaşımlarını kullanarak gerçek bir API ile alma bilgilerini ve API'den gelen verileri anlamlı, okunabilir ve kullanıcı dostu bir sürüm haline getirmektir.

Proje kapsamında özellikle aşağıdaki konular üzerinde durulmuştur:

Asenkron programlama mantığı (asenkron / beklemede)

Axios yüklemesi ile HTTP GET işlemlerini gönderme

Harici API servisleriyle veri alışverişi

JavaScript ile dinamik DOM öğeleri oluşturma

API'den dönen verilere uygun HTML yapısını yapılandırma

Kullanılan Teknolojiler ve Araçlar

JavaScript (ES6 ve üzeri)

Axios (HTTP istekleri için)

HTML5 DOM API

RESTful API servisleri

Kullandığımız API Servisleri

Uygulama, aşağıdaki servisleri kullanarak veri elde etmektedir:

Kullanıcının IP adresini almak için:
https://apis.ergineer.com/ipadresim

IP bilgilerine bağlı olarak konum ve ağ bilgilerini almak için:
https://apis.ergineer.com/ipgeoapi/{ipAdresiniz}

Uygulamanın Çalışma Mantığı

ipAdresimiAl()bölümü, kullanıcının aktif IP adresini API üzerinden alır.

getData()bölümü, alınan IP adresini kullanarak konum ve ağ birleştirme içeren ayrıntılı veriyi API'den çeker.

API'den dönen veri nesnesi cardOlustur(data)fonksiyonuna parametre olarak gönderilir.

Bu fonksiyon, DOM metotlarını kullanarak bir bilgi kartı (kart) oluşturur.

Oluşturulan kart, sayfa üzerinde kişisel olarak görsel olarak sunulur.

Kart İçeriğinde Gösterilen Bilgiler

Oluşturulan kart bileşeni aşağıdaki bilgileri içermektedir:

Kullanıcının IP adresi

Ülke adı ve ülke kodu

Coğrafi bilgi ve boylam bilgileri

Şehirler

Bulunulan bölge saat dilimi

Bizim para birimi

İnternet servis sağlayıcısı (İSS)

İlgili bilgilere ait bayrak görseli

Kurulum ve çalışma

Projeyi çalıştırmak için dosyaları bir yerel web sunucusu üzerinden çalıştırmanız yeterlidir.
(Örneğin VS Code Live Server eklentisi mevcuttur.)

Not: Harici API servisleri internet bağlantısı gerektirir.

