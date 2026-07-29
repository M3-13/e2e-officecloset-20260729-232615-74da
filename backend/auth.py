from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models import User

router = APIRouter(prefix="/api/auth", tags=["auth"])


def get_current_user(request: Request, db: Session = Depends(get_db)) -> User:
    raise HTTPException(status_code=501)


@router.post("/register")
def register():
    raise HTTPException(status_code=501)


@router.post("/login")
def login():
    raise HTTPException(status_code=501)


@router.post("/logout")
def logout():
    raise HTTPException(status_code=501)


@router.delete("/account")
def delete_account():
    raise HTTPException(status_code=501)


@router.get("/me")
def get_me():
    raise HTTPException(status_code=501)
