from flaskr import create_app


def test_index(client):
    response = client.get('/')
    assert b"Home" in response.data