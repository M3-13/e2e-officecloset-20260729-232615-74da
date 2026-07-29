from fastapi import APIRouter, Depends, HTTPException

from backend.auth import get_current_user
from backend.models import User

router = APIRouter(prefix="/api", tags=["wardrobe"])


@router.get("/clothing")
def get_clothing(category_id: int | None = None, current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)


@router.post("/clothing")
def create_clothing(current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)


@router.put("/clothing/{item_id}")
def update_clothing(item_id: int, current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)


@router.delete("/clothing/{item_id}")
def delete_clothing(item_id: int, current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)


@router.get("/images/{filename}")
def get_image(filename: str, current_user: User = Depends(get_current_user)):
    raise HTTPException(status_code=501)
