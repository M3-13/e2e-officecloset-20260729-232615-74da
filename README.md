# Glamouröser Kleiderschrank-Manager

Ein glamouröser Kleiderschrank-Manager mit Web-GUI in eleganter Red-Carpet-Optik.
Benutzer registrieren sich, legen Kleidungsstücke mit Bildern und Kategorien an
und durchstöbern ihre Garderobe.

## Tech Stack

- **Backend**: Python FastAPI
- **Frontend**: Vite + React + TypeScript
- **Database**: SQLite
- **Auth**: JWT-Tokens
- **Image Storage**: Lokales Dateisystem (uploads/)

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
```

### Frontend

```bash
cd frontend
npm ci
```

## Start (Entwicklung)

### Backend

```bash
cd backend
PYTHONPATH=. uvicorn backend.main:app --port 3000
```

### Frontend

```bash
cd frontend
npm run dev
```

Der Vite-Dev-Server läuft standardmäßig auf http://localhost:5173 und leitet
`/api`- und `/uploads`-Anfragen an den Backend-Server auf Port 3000 weiter.

## Umgebungsvariablen

| Variable | Beschreibung | Standard |
|----------|-------------|----------|
| `JWT_SECRET` | Signing-Secret für JWT-Tokens | — (erforderlich) |
| `DATABASE_URL` | SQLAlchemy-Datenbank-URL | `sqlite:///./wardrobe.db` |
| `UPLOAD_DIR` | Verzeichnis für hochgeladene Bilder | `./uploads` |
| `CORS_ORIGINS` | Komma-getrennte erlaubte Origins | `http://localhost:5173` |

## API-Endpunkte

| Methode | Pfad | Beschreibung |
|---------|------|-------------|
| `GET` | `/api/health` | Health-Check → `{"status": "ok"}` |
| `POST` | `/api/auth/register` | Benutzerregistrierung |
| `POST` | `/api/auth/login` | Login |
| `POST` | `/api/auth/logout` | Logout |
| `DELETE` | `/api/auth/account` | Konto löschen |
| `GET` | `/api/auth/me` | Eigenes Profil |
| `GET` | `/api/categories` | Kategorien abrufen |
| `POST` | `/api/categories` | Kategorie erstellen `{"name"}` |
| `PUT` | `/api/categories/{id}` | Kategorie umbenennen |
| `DELETE` | `/api/categories/{id}` | Kategorie löschen |
| `GET` | `/api/clothing` | Kleidungsstücke abrufen (`?category_id`) |
| `POST` | `/api/clothing` | Kleidungsstück anlegen (multipart) |
| `PUT` | `/api/clothing/{id}` | Kleidungsstück bearbeiten |
| `DELETE` | `/api/clothing/{id}` | Kleidungsstück löschen |
| `GET` | `/api/images/{filename}` | Bild abrufen |

## Features

- Benutzerregistrierung und -login mit E-Mail und Passwort
- JWT-basierte Authentifizierung mit Token-Blacklist
- Kategorien-CRUD (erstellen, umbenennen, löschen)
- Kleidungsstücke mit Bild-Upload, Kategorie-Zuordnung und Beschreibung
- Bildergalerie mit Kategoriefilter
- EXIF-Metadaten-Entfernung bei Bild-Upload
- Rate Limiting für Login- und Registrierungs-Endpunkte
