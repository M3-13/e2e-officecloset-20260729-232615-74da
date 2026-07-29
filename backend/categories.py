from fastapi import APIRouter, Depends, HTTPException

from backend.auth import get_current_user
from backend.models import User

router = APIRouter(prefix="/api/categories", tags=["categories"])


@router.get("")
def get_categories(current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)


@router.post("")
def create_category(current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)


@router.put("/{category_id}")
def update_category(category_id: int, current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)


@router.delete("/{category_id}")
def delete_category(category_id: int, current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)
