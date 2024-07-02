# OTOMATIK SORU CEVAP SISTEMLERI VE ORNEK BIR UYGULAMASI

## Hazırlayanlar

170420012 Can Özfuttu

170420041 Ahmed Burhaneddin Çoban

## Klasör Yapısı

### Client

Next.js ile hazırlanmış frontend dosyalarını barındırmaktadır. Kullanıcıların, eğitilmiş model ile kolayca etkileşime geçebilmelerini sağlayan bir arayüzdür. Çalıştırmak için:

```bash
yarn
yarn dev
```

---

### Server

Flask ile hazırlanmış backend dosyalarını barındırmaktadır. Eğitilmiş model ile etkileşime geçip modelden gelen cevabı döndürmektedir.Çalıştırmak için:

```bash
python main.py
```

---

### Model

Eğitilmiş model ve düzenlenmiş veri seti dosyalarını barındırmaktadır.

---

### Data Mining

Modelin eğitimi için kullanılacak veri setinin toplandığı script dosyalarını barındırmaktadır. Bir Python kütüphanesi olan BeautifulSoup ile Selenium kullanılarak web scraping ile Vikipedi üzerinden veriler toplanmıştır. Daha sonra toplanan veriler üzerinden GPT-3.5 kullanılarak soru-cevap çiftleri oluşturulmuştur.

- js: Javascript diliyle GPT-3.5'ye prompt gönderen ve prompt'tan alınan cevabı JSON formatında kaydeden bir script hazırlanmıştır. Çalıştırmak için `.env` dosyası içinde `OPENAI_API_KEY` değeri girilmesi gerekmektedir.

- py: Python diliyle Vikipedi üzerinden BeautifulSoup ve Selenium ile web scraping yapan bir script hazırlanmıştır.

---

### NLP

NLP (Natural Language Processing) için oluşturulmuş dosyaları barındırmaktadır. Data Mining ile oluşturulan veri seti üzerinde modifikasyonlar yapılarak verilerin model tarafından kullanılmaya hazır hale getirilmesi amaçlanmıştır.

- correct_answer_start: GPT-3.5'ten dönen soru cevap çiftleri içerisindeki cevapların, metin içinde kaçıncı karakterden başladığını belirten sayı değeri bazen yanlış gelebilmektedir. Bu, GPT-3.5 modelinin matematiksel hesaplamalar konusunda başarısız olması yüzündendir. Bu yüzden, bu sayıların düzeltilmesi için bir script hazırlanmıştır.
- dataset_duplicate: veri setinin içinde aynı verinin birden fazla bulunması durumunda bu veriyi çıkartıp veri setinin üzerine kaydeden script'tir.
- filter_context_answers.js: GPT-3.5'ten dönen soru cevap çiftleri içerisindeki cevabın, metnin içerisinde bulunmadığı durumda bu soru cevap çiftini veri setinden çıkaran script'tir.
