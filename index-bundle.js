// IP Adresi Al
async function ipAdresimiAl() {
  return await axios({
    method: 'get',
    url: 'https://apis.ergineer.com/ipadresim',
  }).then(function (response) {
    return response.data;
  });
}

// Veri Al
async function getData() {
  const ipAdresim = await ipAdresimiAl();

  const response = await axios.get(
    `https://apis.ergineer.com/ipgeoapi/${ipAdresim}`
  );

  return response.data;
}

// Kart Oluştur
function cardOlustur(data) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.style.opacity = "0.5";
  img.style.transition = "opacity 0.3s ease";
  img.src = `https://flaglog.com/codes/standardized-rectangle-120px/${data.ulkeKodu}.png`;
  
  // Resim yüklendikçe opacity'i artır
  img.onload = function() {
    this.style.opacity = "1";
  };
  
  // Resim yüklemezse hata mesajı göster
  img.onerror = function() {
    this.alt = "Bayrak yüklenemedi";
    this.style.opacity = "1";
  };

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

// Ana Fonksiyon
async function main() {
  try {
    const data = await getData();
    const card = cardOlustur(data);
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.appendChild(card);
  } catch (error) {
    console.error('Hata:', error);
    alert('Hata: ' + error.message);
  }
}

// Sayfayı yükle
main();
