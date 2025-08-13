import requests
import os

# Unsplash API settings
ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"  # Replace with your Unsplash API access key
SEARCH_QUERY = "chemical engineering"
NUM_IMAGES = 5
DOWNLOAD_DIR = "downloaded_images"

# Create download directory if it doesn't exist
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

# Search Unsplash for images
url = f"https://api.unsplash.com/search/photos"
params = {
    "query": SEARCH_QUERY,
    "per_page": NUM_IMAGES,
    "client_id": ACCESS_KEY
}
response = requests.get(url, params=params)
data = response.json()

# Download images
for i, result in enumerate(data.get("results", [])):
    img_url = result["urls"]["regular"]
    img_response = requests.get(img_url)
    img_path = os.path.join(DOWNLOAD_DIR, f"image_{i+1}.jpg")
    with open(img_path, "wb") as f:
        f.write(img_response.content)
    print(f"Downloaded {img_path}")

print("Download complete.")



