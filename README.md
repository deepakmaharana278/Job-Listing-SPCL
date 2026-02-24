# Job Listing SPCL

A full-stack job listing application built with React and Django. This platform allows users to browse, search, and filter job listings with a modern, responsive interface.

🔗 **Live Demo:** [joblisting-website](https://job-listing-spcl.vercel.app/) <br/>
👉 **Admin**: [admin-panel](https://job-listing-spcl.onrender.com/admin/)

## 🚀 Tech Stack

### Frontend
- **Framework:** React.js with Vite
- **UI Library:** Bootstrap for responsive design
- **Icons:** Font Awesome
- **HTTP Client:** Axios for API requests
- **Deployment:** Vercel

### Backend
- **Framework:** Django REST Framework
- **Database:** SQLite  
- **WSGI Server:** Gunicorn
- **Deployment:** Render

## 📁 Project Structure
```
Job-Listing-SPCL/
├── frontend/ # React + Vite application
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vercel.json
├── backend/
| ├── job/ # Django app
│ ├── joblist/ # Django project
│ ├── manage.py
│ └── requirements.txt
└── README.md

```



## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- Python (3.8+)
- npm or yarn
- pip (Python package manager)

### Frontend Setup

1. Navigate to the frontend directory:
```
   cd frontend
```
2. Install dependencies:
```
npm install
```
3. Create a .env file for environment variables:
```
env
VITE_API_URL=http://localhost:8000/api
```
4. Start the development server:
```
npm run dev
The frontend will run at http://localhost:5173
```

### Backend Setup
1. Navigate to the backend directory:
```
cd backend
```
2. Create and activate a virtual environment:
```
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```
3. Install dependencies:
```
pip install -r requirements.txt
```
4. Run migrations:
```
python manage.py migrate
```

5. Create a superuser (optional):
```
python manage.py createsuperuser
```

6. Start the development server:
```
python manage.py runserver
The backend API will run at http://localhost:8000
```

#### 🔧 Configuration
```
Environment Variables
Frontend (.env)

.env
VITE_API_URL=your_backend_api_url
```

#### 👤 Author
- Deepak Maharana
- GitHub: @deepakmaharana278
- deepakmaharana3500@gmail.com
