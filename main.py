from application import app

def test_shorten(client):
   response = client.get('/')
   assert b'sorten' in response.data