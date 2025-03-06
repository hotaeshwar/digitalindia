# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from database import database
from auth import router as contact_router

app = FastAPI(
    title="Building India Digital Backend",
    description="Backend for contact form submissions"
)

# Specific CORS configuration for Vite React frontend
origins = [
    # Local development
    "http://localhost:5173",
    "https://localhost:5173",
    
    # Add any additional development or production domains
    "http://localhost:3001",  # Another common React dev server
    "http://127.0.0.1:5173",
    
    # Production domains (replace with your actual domain)
    "https://yourdomain.com",
    "https://www.yourdomain.com"
]

# Comprehensive CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Explicitly defined allowed origins
    allow_credentials=True,  # Allow credentials (cookies, authorization headers)
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include routers
app.include_router(contact_router, prefix="/api/contact", tags=["Contact"])

@app.on_event("startup")
async def startup_event():
    # Connect to database on startup
    await database.connect()

@app.on_event("shutdown")
async def shutdown_event():
    # Close database connection on shutdown
    await database.close()

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Allow running the app directly
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)