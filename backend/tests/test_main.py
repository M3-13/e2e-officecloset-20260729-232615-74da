from fastapi.testclient import TestClient

from backend.main import app


def test_health_endpoint():
    with TestClient(app) as client:
        response = client.get("/api/health")
        assert response.status_code == 200
        assert response.json() == {"status": "ok"}


def test_auth_stubs_return_501():
    with TestClient(app) as client:
        endpoints = [
            ("POST", "/api/auth/register"),
            ("POST", "/api/auth/login"),
            ("POST", "/api/auth/logout"),
            ("DELETE", "/api/auth/account"),
            ("GET", "/api/auth/me"),
        ]
        for method, path in endpoints:
            response = client.request(method, path)
            assert response.status_code == 501


def test_categories_stubs_return_501():
    with TestClient(app) as client:
        endpoints = [
            ("POST", "/api/categories"),
            ("PUT", "/api/categories/1"),
            ("DELETE", "/api/categories/1"),
        ]
        for method, path in endpoints:
            response = client.request(method, path)
            assert response.status_code == 501


def test_wardrobe_stubs_return_501():
    with TestClient(app) as client:
        endpoints = [
            ("POST", "/api/clothing"),
            ("PUT", "/api/clothing/1"),
            ("DELETE", "/api/clothing/1"),
        ]
        for method, path in endpoints:
            response = client.request(method, path)
            assert response.status_code == 501
