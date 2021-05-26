from django.db import models

class Book(models.Model):
	name = models.CharField(max_length=50)
	image = models.ImageField(upload_to='bookIMG', blank=True, null=True)
	categoryName = models.CharField(max_length=50, blank=True, null=True)
	price = models.IntegerField()

	def __str__(self):
		return self.name
		
