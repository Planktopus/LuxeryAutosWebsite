# 🏎️ Luxury Autos - Premium Vehicle Dealership Website

A lightweight, frontend-focused web application featuring a luxury car dealership website that loads vehicle inventory directly from an Excel file and displays high-quality car images.

## 📋 Features

- **Premium Landing Page**: Sleek, modern hero section with "Join our Discord" button
- **Dynamic Vehicle Inventory**: Displays vehicles in a responsive CSS Grid layout
- **Excel Integration**: Reads inventory data directly from `Spring 2026 Inventory Guide.xlsx` using SheetJS
- **Image Gallery**: Displays high-quality car images from the `pictures/Italian/` folder
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Lightweight Architecture**: Pure JavaScript frontend with minimal static server dependency
- **Professional Styling**: Luxurious color palette (deep charcoal, brushed silver, gold accents)

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher) - for serving static files
- Modern web browser

### Setup Steps

1. **Clone/Download the project**
   ```bash
   cd path/to/luxury-autos
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Prepare Your Files**
   - Ensure `Spring 2026 Inventory Guide.xlsx` is in the root directory
   - Ensure car images are in the `pictures/Italian/` folder
   - Images should be `.png` or `.jpg` format

4. **(Optional) Create .env file**
   ```bash
   cp .env.example .env
   ```
   - You can customize the PORT if needed (defaults to 3000)

## 🚀 Running the Application

### Start the Server
```bash
npm start
```

The application will start on `http://localhost:3000`

### Development Mode (with auto-restart)
```bash
npm run dev
```

## 📁 Project Structure

```
luxury-autos/
├── index.html                      # Main HTML page
├── style.css                       # Styling (luxurious palette)
├── script.js                       # Frontend JavaScript - loads Excel & images
├── backend.js                      # Simple Express static server
├── package.json                    # Dependencies
├── .env.example                    # Environment variables template
├── Spring 2026 Inventory Guide.xlsx # Your inventory data
├── pictures/                       # Car images directory
│   └── Italian/                    # Italian luxury cars
│       ├── grotti 181.png
│       ├── Grotti Deimos.png
│       ├── Grotti Turismo Roadster.png
│       ├── Lampadati Pigalle Custom.png
│       ├── Lampadati Pigalle MILORD Cabrio.png
│       ├── Overflod Entity XXR-11.png
│       ├── Pegassi Moonroe SOTW.png
│       ├── Pegassi Tempesta Evo.png
│       ├── Pegassi Tempesta Spyder.png
│       └── Pegassi Torerod Retro.png
└── README.md                       # This file
```

## 📊 Excel File Format

Your `Spring 2026 Inventory Guide.xlsx` should have the following column headers:

| Column | Description | Required |
|--------|-------------|----------|
| Vehicle Name | Full name of the vehicle | ✅ |
| Price | Price in USD or text | ✅ |
| Image | Image path (optional, defaults to `pictures/Italian/{Vehicle Name}.png`) | ❌ |
| Year | Year of manufacture | ❌ |
| Model | Vehicle model | ❌ |
| Condition | Condition status | ❌ |

**Example:**
```
Vehicle Name              | Price    | Year | Model         | Condition
Grotti 181                | $250,000 | 2024 | 181           | Excellent
Grotti Deimos             | $425,000 | 2023 | Deimos        | Excellent
Pegassi Tempesta Evo      | $185,000 | 2025 | Tempesta Evo  | Like New
```

## 🖼️ Image Naming Convention

Image filenames should match the vehicle names in your Excel file:
- Excel: `Grotti 181` → Image: `pictures/Italian/grotti 181.png`
- Excel: `Pegassi Tempesta Evo` → Image: `pictures/Italian/Pegassi Tempesta Evo.png`

If an image is not found, a fallback placeholder will be displayed.

## 🎨 Customization

### Discord Invite Link
Update the Discord invite link in `script.js`:
```javascript
discordButton.href = 'https://discord.gg/yourinvitelink';
```

### Color Scheme
Modify the luxury color palette in `style.css`:
- Primary Gold: `#d4af37`
- Background: `#0f0f0f` or `#1a1a1a`
- Accent: `#2d2d2d` or `#3a3a3a`

### Port Configuration
Change the port in `.env`:
```
PORT=8080
```

## 🔄 How It Works

1. **On Page Load**: The browser downloads the `Spring 2026 Inventory Guide.xlsx` file
2. **SheetJS Processing**: The xlsx library parses the Excel file and extracts vehicle data
3. **Dynamic Rendering**: JavaScript creates HTML cards for each vehicle
4. **Image Loading**: Images are loaded from `pictures/Italian/` folder
5. **Auto-Refresh**: Inventory refreshes every 5 minutes automatically

## ⚠️ Troubleshooting

### Excel File Not Loading
- Ensure the file is named exactly `Spring 2026 Inventory Guide.xlsx`
- Check that it's in the root directory (same level as `index.html`)
- Verify the Excel file has the correct column headers

### Images Not Displaying
- Ensure images are in `pictures/Italian/` folder
- Verify filenames match the vehicle names in your Excel file exactly (case-sensitive for paths)
- Check that image format is `.png` or `.jpg`
- Browser console (F12) will show which images failed to load

### Port Already in Use
- Change the `PORT` in `.env` to an available port (e.g., 8080, 5000)
- Or kill the process using the current port

### Server Won't Start
- Ensure Node.js is installed: `node --version`
- Ensure dependencies are installed: `npm install`
- Check that port 3000 is available

## 📝 Notes

- The website auto-refreshes vehicle inventory every 5 minutes
- All vehicle information is read directly from your Excel file
- Images are served locally from the `pictures/Italian/` directory
- No backend API calls needed - everything works in the browser
- SheetJS library is loaded from CDN for Excel file reading

## 🚀 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Requires JavaScript enabled

---

Made with ❤️ for Luxury Autos
