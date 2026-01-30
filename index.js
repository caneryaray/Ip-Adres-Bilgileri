import axios from 'axios';

// Aşağıdaki Fonksiyonu değiştirmeyin

export async function ipAdresimiAl() {
  return await axios({
    method: 'get',
    url: 'https://apis.ergineer.com/ipadresim',
  }).then(function (response) {
    return response.data;
  });
}

/*

	ADIM 1: Aşağdıdaki getData() fonskiyonunda axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız:
  https://apis.ergineer.com/ipgeoapi/{ipAdresiniz}

  Fonksiyon gelen data'yı(obje) geri dönmeli
	
	NOT: ipAdresinizi ipAdresimiAl fonksiyonu ile alabilirsiniz.

  NOT2: gelen datayı browser'da network tab'ından inceleyin. 
  (network tab'ından inceleyemezseniz get isteklerinin URL'ini browser'dan açıp da kontrol edebilirsiniz. 😉)

  Bu data Adım 2'de oluşturacağınız component'de argüman olarak kullanılıyor, önden içindeki verilere(key-Value ikililerine) bakmanız iyi olur).
*/
export async function getData() {
  const ipAdresim = await ipAdresimiAl();

  const response = await axios.get(
    `https://apis.ergineer.com/ipgeoapi/${ipAdresim}`
  );

  return response.data;
}

/*
	ADIM 2: Aşağıdaki cardOlustur fonskiyonunu argüman olarak sadece 1 nesne alacak şekilde tanımlayın.

  Bu fonksiyonda DOM metotlarını ve özelliklerini kullanarak, aşağıdaki element'i oluşturup dönün.

  Not: Ülke Bayrağını bu linkten alabilirsiniz:
  'https://flaglog.com/codes/standardized-rectangle-120px/{ülkeKodu}.png';
	
	<div class="card">
    <img src={ülke bayrağı url} />
    <div class="card-info">
      <h3 class="ip">{ip adresi}</h3>
      <p class="ulke">{ülke bilgisi (ülke kodu)}</p>
      <p>Enlem: {enlem} Boylam: {boylam}</p>
      <p>Şehir: {şehir}</p>
      <p>Saat dilimi: {saat dilimi}</p>
      <p>Para birimi: {para birimi}</p>
      <p>ISP: {isp}</p>
    </div>
  </div>
*/

export function cardOlustur(data) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = `https://flaglog.com/codes/standardized-rectangle-120px/${data.ulkeKodu}.png
  `;

  const info = document.createElement("div");
  info.className = "card-info";

  const ip = document.createElement("h3");
  ip.className = "ip";
  ip.textContent = data.sorgu;

  const ulke = document.createElement("p");
  ulke.className = "ulke";
  ulke.textContent = `${data.ulke} (${data.ulkeKodu})`;

  const konum = document.createElement("p");
  konum.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;

  const sehir = document.createElement("p");
  sehir.textContent = `Şehir: ${data.sehir}`;

  const saat = document.createElement("p");
  saat.textContent = `Saat dilimi: ${data.saatdilimi}`;

  const para = document.createElement("p");
  para.textContent = `Para birimi: ${data.parabirimi}`;

  const isp = document.createElement("p");
  isp.textContent = `ISP: ${data.isp}`;

  info.append(ip, ulke, konum, sehir, saat, para, isp);
  card.append(img, info);

  return card;
}

// ADIM 3: Ana Fonksiyon - Verileri çek ve kartları oluştur
async function main() {
  try {
    const data = await getData();
    const card = cardOlustur(data);
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.appendChild(card);
  } catch (error) {
    console.error('Hata:', error);
  }
}

// Sayfayı yükle
main();