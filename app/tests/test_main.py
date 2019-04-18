from flaskr import create_app


def test_index(client):
    response = client.get('/')
    assert b"Home" in response.data

def test_about(client):
    response = client.get('/about')
    assert b"About" in response.data

def test_portfolio(client):
    response = client.get('/portfolio')
    assert b"Portfolio" in response.data

def test_contact(client):
    response = client.get('/contact')
    assert b"Contact" in response.data