import matplotlib.pyplot as plt
import pandas as pd

# ELECTRA model verilerini bir DataFrame olarak oluşturma
data = {
    'Model': ['ELECTRA #1', 'ELECTRA #2', 'ELECTRA #3', 'ELECTRA #4'],
    'Epoch': [3, 3, 5, 5],
    'Max Seq Length': [256, 512, 256, 512],
    'F1 Score': [58.1, 59.67, 65.1, 65.26],
    'Exact Match': [44.12, 44.81, 50.24, 49.8]
}

df = pd.DataFrame(data)

# Çizgi grafiklerini çizme
plt.figure(figsize=(10, 5))
plt.plot(df['Model'], df['F1 Score'], marker='o', label='F1 Score')
plt.plot(df['Model'], df['Exact Match'], marker='o', label='Exact Match')

# Grafik başlığı ve eksen etiketleri
plt.title('ELECTRA Model Performans Kıyaslaması')
plt.xlabel('Model')
plt.ylabel('Performance Metrikleri')

# Eksen değerlerinin daha iyi görünmesi için
plt.xticks(rotation=45)
plt.grid(True)

# Efsane ekleme
plt.legend()

# Göster
plt.tight_layout()
plt.show()
