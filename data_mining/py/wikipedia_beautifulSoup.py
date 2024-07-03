from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

print('calismaya basladim!')

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

url = "https://tr.wikipedia.org/wiki/Mustafa_Kemal_Atatürk"
driver.get(url)

html = driver.page_source

soup = BeautifulSoup(html, 'html.parser')

# Paragrafların bulunduğu bölümü seçme
paragraphs = soup.select("#bodyContent > #mw-content-text > div > p")

# Paragrafları temizleyip 'sup' etiketlerini filtreleyerek contexts array'ini oluşturma
contexts = []
for para in paragraphs:
    for sup in para.find_all('sup'):
        sup.decompose()
    text = para.get_text().strip()
    if text:
        contexts.append(f'`{text}`')

driver.quit()

# contexts array'ini istenilen formatta bir dosyaya yazdırma
with open("contexts.txt", "w", encoding="utf-8") as file:
    file.write("[")
    file.write(",\n".join(contexts))
    file.write("]")

print("contexts.txt dosyası oluşturuldu.")