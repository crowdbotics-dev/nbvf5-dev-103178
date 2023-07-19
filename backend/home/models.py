from django.conf import settings
from django.db import models
class Sderr(models.Model):
    'Generated Model'
    bdbdh = models.BigIntegerField()
    oerrur = models.BigIntegerField()
    def test_method(self):
        import requests
        response = requests.get("https://hello.com")
        data = response.json()
        print(data)
        return data
