const exampleQuestions = [
  {
    context:
      "Mustafa Kemal Atatürk[d] (1881,[e] Selanik, Osmanlı İmparatorluğu - 10 Kasım 1938, İstanbul, Türkiye), Türk mareşal, devlet adamı, yazar, Türk Kurtuluş Savaşı'nın başkomutanı, Türkiye Cumhuriyeti'nin kurucusu ve ilk cumhurbaşkanıdır. Türkiye'yi laik, sanayileşen bir ulusa dönüştüren kapsamlı ilerici reformlar üstlenmiştir. İdeolojik olarak sekülarist ve milliyetçi politikaları ve sosyo-politik teorileri Kemalizm olarak tanınmıştır.",
    qas: [
      {
        id: "00001",
        question: "Mustafa Kemal Atatürk ne zaman doğmuştur?",
        answers: [
          {
            text: "1881",
            answer_start: 26,
          },
        ],
      },
      {
        id: "00002",
        question: "Atatürk hangi yılda doğmuştur?",
        answers: [
          {
            text: "1881",
            answer_start: 26,
          },
        ],
      },
      {
        id: "00003",
        question: "Atatürk'ün doğum yeri neresidir?",
        answers: [
          {
            text: "Selanik, Osmanlı İmparatorluğu",
            answer_start: 35,
          },
        ],
      },
      {
        id: "00004",
        question: "Atatürk ne zaman ve nerede vefat etmiştir?",
        answers: [
          {
            text: "10 Kasım 1938, İstanbul, Türkiye",
            answer_start: 68,
          },
        ],
      },
      {
        id: "00005",
        question: "Atatürk hangi savaşın başkomutanıdır?",
        answers: [
          {
            text: "Türk Kurtuluş Savaşı'nın",
            answer_start: 138,
          },
        ],
      },
      {
        id: "00006",
        question: "Atatürk'ün sosyo-politik teorileri ne olarak tanınmıştır?",
        answers: [
          {
            text: "Kemalizm",
            answer_start: 407,
          },
        ],
      },
      {
        id: "00007",
        question: "Atatürk kimdir?",
        answers: [
          {
            text: "Türkiye Cumhuriyeti'nin kurucusu ve ilk cumhurbaşkanıdır",
            answer_start: 176,
          },
        ],
      },
    ],
  },
  {
    context:
      "I. Dünya Savaşı sırasında Osmanlı ordusunda görev yapan Atatürk, Çanakkale Cephesi'nde miralaylığa, Sina ve Filistin Cephesi'nde ise Yıldırım Ordular Grubu komutanlığına atandı. Savaşın sonunda, Osmanlı İmparatorluğu'nun yenilgisini izleyen Kurtuluş Savaşı ile simgelenen Anadolu Hareketi'ne öncülük ve önderlik etti. Türk Kurtuluş Savaşı sürecinde Ankara Hükûmeti'ni kurdu, Türk Orduları Başkomutanı olarak Sakarya Meydan Muharebesi'ndeki başarısından dolayı 19 Eylül 1921 tarihinde \"gazi\" sanını aldı ve mareşallik rütbesine yükseldi. Askerî ve siyasal eylemleriyle İtilaf Devletleri ve destekçilerine karşı yengi kazandı. Savaşın ardından Cumhuriyet Halk Partisini \"Halk Fırkası\" adıyla kurdu ve ilk genel başkanı oldu. 29 Ekim 1923'te Cumhuriyetin İlanı ardından cumhurbaşkanı seçildi. 1938'deki ölümüne dek dört dönem bu görevi yürütmüş olup günümüze değin Türkiye'de en uzun süre cumhurbaşkanlığı yapmış kişidir.",
    qas: [
      {
        id: "00008",
        question: "Atatürk hangi tarihte 'gazi' sanını almıştır?",
        answers: [
          {
            text: "19 Eylül 1921",
            answer_start: 460,
          },
        ],
      },
      {
        id: "00009",
        question:
          "Hangi muharebedeki başarısından dolayı Atatürk 'gazi' sanını almıştır?",
        answers: [
          {
            text: "Sakarya Meydan Muharebesi",
            answer_start: 408,
          },
        ],
      },
      {
        id: "00010",
        question:
          "Atatürk hangi tarihte Türkiye Cumhuriyeti'nin ilanını gerçekleştirmiştir?",
        answers: [
          {
            text: "29 Ekim 1923",
            answer_start: 723,
          },
        ],
      },
      {
        id: "00011",
        question: "Atatürk hangi siyasi partiyi kurmuştur?",
        answers: [
          {
            text: "Cumhuriyet Halk Partisi",
            answer_start: 642,
          },
        ],
      },
      {
        id: "00012",
        question:
          "Atatürk'ün görev aldığı muharebelerden biri olan Sakarya Meydan Muharebesi hangi yıl gerçekleşmiştir?",
        answers: [
          {
            text: "1921",
            answer_start: 469,
          },
        ],
      },
      {
        id: "00013",
        question: "Atatürk hangi orduya komutanlık yapmıştır?",
        answers: [
          {
            text: "Yıldırım Ordular Grubu",
            answer_start: 133,
          },
        ],
      },
      {
        id: "00014",
        question:
          "Atatürk hangi tarihte Türkiye Cumhuriyeti'nin ilk cumhurbaşkanı olmuştur?",
        answers: [
          {
            text: "29 Ekim 1923",
            answer_start: 723,
          },
        ],
      },
      {
        id: "00015",
        question: "Atatürk hangi siyasi partinin ilk genel başkanı olmuştur?",
        answers: [
          {
            text: "Cumhuriyet Halk Partisi",
            answer_start: 642,
          },
        ],
      },
    ],
  },
  {
    context:
      "Marmara Üniversitesi, ülkemizin en köklü eğitim kurumlarının başında gelmektedir. Marmara Üniversitesi’nin çekirdeğini oluşturan Hamidiye Ticaret Mektebi, 1883 yılında Kanlıfırın’daki İzzet Efendi Konağında faaliyete geçmiş, 1890’da Beyazıt’taki Hakkı Bey Konağı’na taşınmıştır. Cumhuriyet’in ilânı ile birlikte adı Ticaret Mekteb-i Âlisi olarak değişmiştir. İlk mezunlarını (13 kişi olarak) 1887’de vermiş olan Kurumumuz, 1924-1925 eğitim ve öğretim yılı başında Yüksek İktisat ve Ticaret Mektebi’ne dönüşmüş olup ülkemizde kadın ve erkek öğrencilerin bir arada eğitim aldığı (karma eğitim) ilk eğitim kurumu olma özelliğini taşımaktadır. 1959 yılında İstanbul İktisadi ve Ticari İlimler Akademisi (İİTİA) adını almıştır. Akademi tarafından kullanılan Sultanahmet semtinde ki bina, yapıldığı tarihten 1970’lere kadar geçen sürede bazı değişiklikler geçirmiştir. İstanbul İktisadî ve Ticarî İlimler Akademisi 20 Temmuz 1982 tarih ve 17760 sayılı Resmî Gazetede yayımlanan “Yüksek Öğretim Kurumları Teşkilatı Hakkında Kanun Hükmünde Kararname” ile Marmara Üniversitesi'ne dönüştürülmüştür. 1982 - 1983 eğitim ve öğretim yılında 9 fakülte, 1 yüksekokul, 1 enstitü ile yola çıkan üniversitemiz, bugün 21 fakülte, 1 yüksekokul, 4 meslek yüksekokulu ve 12 enstitü ile faaliyetlerini sürdürmektedir.",
    qas: [
      {
        id: "00016",
        question:
          "Marmara Üniversitesi'nin çekirdeğini oluşturan kurum hangisidir?",
        answers: [
          {
            text: "Hamidiye Ticaret Mektebi",
            answer_start: 129,
          },
        ],
      },
      {
        id: "00017",
        question:
          "Marmara Üniversitesi'nin ilk mezunlarını kaç yılında vermiştir?",
        answers: [
          {
            text: "1887",
            answer_start: 294,
          },
        ],
      },
      {
        id: "00018",
        question:
          "Marmara Üniversitesi hangi yılda Yüksek İktisat ve Ticaret Mektebi'ne dönüşmüştür?",
        answers: [
          {
            text: "1924-1925",
            answer_start: 222,
          },
        ],
      },
      {
        id: "00019",
        question:
          "Marmara Üniversitesi hangi yılda İstanbul İktisadi ve Ticari İlimler Akademisi adını almıştır?",
        answers: [
          {
            text: "1959",
            answer_start: 384,
          },
        ],
      },
      {
        id: "00020",
        question:
          "Marmara Üniversitesi hangi yılda Marmara Üniversitesi'ne dönüştürülmüştür?",
        answers: [
          {
            text: "20 Temmuz 1982",
            answer_start: 532,
          },
        ],
      },
      {
        id: "00021",
        question:
          "Marmara Üniversitesi'nin kaç fakültesi, kaç yüksekokulu ve kaç enstitüsü vardır?",
        answers: [
          {
            text: "21 fakülte, 1 yüksekokul, 12 enstitü",
            answer_start: 688,
          },
        ],
      },
    ],
  },
  {
    context:
      "Üniversitemizde halen aktif olan ön lisans ve lisans program sayısı 153’tür. Marmara Üniversitesi, Türkiye’nin bilimsel birikimine 3000’i aşan öğretim elemanı ve 70.000 i aşan öğrencisiyle katkıda bulunmaya çalışan önemli yükseköğretim kurumlarından biridir. İktisat, İşletme, Siyasal Bilgiler, Mühendislik, Tıp, Diş Hekimliği, Eczacılık, Güzel Sanatlar ve İlahiyat Fakülteleri başta olmak üzere akademik birimlerde Türkçe, İngilizce, Fransızca, Almanca ve Arapça’dan oluşan 5 dilde eğitimi bünyesinde toplayan Marmara Üniversitesi, bu özelliği ile Türkiye’deki, çok dilli üniversitelerden biridir. Marmara Üniversitesi, 1982’den sonra hızla büyümüş, enstitü, fakülte, yüksekokul, meslek yüksekokulu ve araştırma uygulama merkezleri ile eğitimöğretim ve araştırma faaliyetlerini devam ettirmektedir.",
    qas: [
      {
        id: "00022",
        question:
          "Marmara Üniversitesi'nin halen aktif olan ön lisans ve lisans program sayısı kaçtır?",
        answers: [
          {
            text: "153",
            answer_start: 68,
          },
        ],
      },
      {
        id: "00023",
        question:
          "Marmara Üniversitesi'nin öğretim elemanı ve öğrenci sayısı kaçtır?",
        answers: [
          {
            text: "3000 öğretim elemanı, 70.000 öğrenci",
            answer_start: 69,
          },
        ],
      },
      {
        id: "00024",
        question:
          "Marmara Üniversitesi'nin akademik birimlerinde kaç dilde eğitim verilmektedir?",
        answers: [
          {
            text: "5 dil",
            answer_start: 233,
          },
        ],
      },
      {
        id: "00025",
        question:
          "Marmara Üniversitesi'nin hangi fakülteleri akademik birimlerinde yer almaktadır?",
        answers: [
          {
            text: "İktisat, İşletme, Siyasal Bilgiler, Mühendislik, Tıp, Diş Hekimliği, Eczacılık, Güzel Sanatlar ve İlahiyat Fakülteleri",
            answer_start: 233,
          },
        ],
      },
      {
        id: "00026",
        question:
          "Marmara Üniversitesi'nin hangi yılda Türkiye'deki çok dilli üniversitelerden biri olduğu belirtilmiştir?",
        answers: [
          {
            text: "1982",
            answer_start: 233,
          },
        ],
      },
    ],
  },
];

export default exampleQuestions;
