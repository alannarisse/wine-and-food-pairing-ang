# Wine and Food Pairing App

## What This App Does
A wine pairing recommendation tool that helps users find the perfect wine to match their food. Users select a food category (fish, chicken, beef, pork, lamb, vegetarian, cheese, dessert, sauce) and a preparation style, then receive wine style recommendations and specific wine suggestions.

## Tech Stack
- **Frontend**: Angular 19 with Angular Material UI
- **Backend**: NestJS with TypeScript
- **Database**: PostgreSQL (Railway)
- **Hosting**: Vercel (frontend) / Railway (backend + database)
- **Styling**: SCSS with Angular Material theming

## Project Structure
```
wine-and-food-pairing-ang/
├── .claude/
│   ├── CLAUDE.md
│   └── skills/
│       └── frontend-design -> (design system skill)
├── wine-finder-app/              # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   ├── wine-finder/
│   │   │   │   ├── results/
│   │   │   │   └── footer/
│   │   │   ├── services/
│   │   │   │   └── pairing.service.ts
│   │   │   ├── models/
│   │   │   │   └── pairing.model.ts
│   │   │   └── app.component.ts
│   │   ├── styles/
│   │   │   └── _variables.scss
│   │   └── assets/
│   │       └── images/
│   └── angular.json
├── wine-finder-api/              # NestJS backend
│   ├── src/
│   │   ├── pairings/
│   │   ├── database/
│   │   └── main.ts
│   └── package.json
└── wine-and-food-pairing-static/ # Original static reference
```

## Design System (Current)
Always utilize the frontend-design skill

### Colors
- **Primary**: `#0a7373` (teal)
- **Secondary**: `#c43302` (burnt orange)
- **Tertiary**: `#edaa25` (gold)
- **Background**: `#ffffff`
- **Background Gradient**: none
- **Text Dark**: `#010221`
- **Text Medium**: `#315D5D`
- **Text Light**: `#9DC1C1`
- **Card Background**: `rgba(255, 255, 255, 0.85)`
- **Error**: `#f87171` (borders), `#dc2626` (text)
- **Footer Background**: `#666666`
- **Disabled Button**: `#9DC1C1`

### Typography
- **Headings**: `Iosevka+Charon-Bold` (serif) - fallback to system serif
- **Body**: `QuattrocentoSans-Regular` - fallback to system sans-serif
- **Labels/Buttons**: `QuattrocentoSans-Bold`
- **Section Labels**: 11px uppercase with letter-spacing

### Component Patterns
- **Cards**: White semi-transparent (`rgba(255,255,255,0.85)`), 16px border-radius, subtle shadow
- **Inputs/Selects**: White background, 1px `#e5e7eb` border, 10px border-radius, full-width max 420px
- **Buttons**: Solid fill with primary color, 12-14px border-radius, shadow
- **Selection**: Primary color highlight on focus
- **Header**: Fixed position with background image, white text with drop shadow
- **Main Content**: White background, 20px border-radius top, overlaps header

### Responsive Breakpoints
- **Mobile**: < 768px (mobile.jpg background)
- **Desktop**: >= 768px (desktop.jpg background)

## Key Components

### WineFinderComponent
Main interactive component with:
- Category dropdown (fish, chicken, beef, pork, lamb, vegetarian, cheese, dessert, sauce)
- Sub-category dropdown (preparation style) - appears after category selection
- Results display with pairing style and wine suggestions

### HeaderComponent
- Fixed position hero with background image
- App title "Wine Finder" and tagline "Pair like a pro!"

### FooterComponent
- Copyright notice
- Ko-Fi tip link

## API Endpoints

### Pairings
- `GET /api/pairings` - Get all pairings
- `GET /api/pairings/categories` - Get unique categories
- `GET /api/pairings/category/:category` - Get pairings by category
- `GET /api/pairings/:id` - Get single pairing

## Database Schema

### pairings table
```sql
CREATE TABLE pairings (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  sub_category VARCHAR(100) NOT NULL,
  food_array TEXT[] DEFAULT '{}',
  pairing_style TEXT,
  pairing_suggestions TEXT[] NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Environment Variables

### Frontend (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3000
```

## Running the App

### Development
```bash
# Frontend (from wine-finder-app/)
npm install
ng serve

# Backend (from wine-finder-api/)
npm install
npm run start:dev
```

### Production Build
```bash
# Frontend
ng build --configuration production

# Backend
npm run build
npm run start:prod
```

## Deployment

### Frontend (Vercel - FREE)
1. Connect GitHub repo to Vercel
2. Set root directory to `wine-finder-app`
3. Build command: `ng build --configuration production`
4. Output directory: `dist/wine-finder-app/browser`

### Backend + Database (Railway)
1. Create new Railway project
2. Add PostgreSQL plugin
3. Deploy NestJS app from `wine-finder-api` directory
4. Set DATABASE_URL environment variable

## Hosting Options (Free/Cheap)

### Free Tier Options for Angular
1. **Vercel** - Best for Angular frontend, free SSL, CDN, CI/CD (RECOMMENDED)
2. **Firebase Hosting** - Google's CDN, free tier generous
3. **Netlify** - 100GB bandwidth/month free
4. **Cloudflare Pages** - Unlimited bandwidth, fast CDN
5. **GitHub Pages** - Static only, good for demos

### Database (Free Tier)
- **Railway** - $5 free credit/month, PostgreSQL included (RECOMMENDED)
- **Supabase** - 500MB free, PostgreSQL with API
- **Neon** - PostgreSQL, 3GB free
- **PlanetScale** - MySQL, 5GB free

### Recommended Stack (Free/Cheap)
- Frontend: **Vercel** (unlimited static hosting, free)
- Backend + DB: **Railway** (API + PostgreSQL, ~$5/month after free tier)

## Recent Changes
- Initial Angular 19 + Material UI setup
- Migrating from static HTML site
- Adding PostgreSQL database for wine pairing data
- Setting up NestJS backend API
