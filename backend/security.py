from fastapi import Request


def rate_limit():
    async def _rate_limit(request: Request) -> None:
        return

    return _rate_limit


class TokenBlacklist:
    def __init__(self) -> None:
        self._blacklist: set[str] = set()

    def add(self, token: str) -> None:
        self._blacklist.add(token)

    def is_blacklisted(self, token: str) -> bool:
        return token in self._blacklist


def strip_exif(image_bytes: bytes) -> bytes:
    return image_bytes
