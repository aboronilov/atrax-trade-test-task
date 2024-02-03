from django.db import models


class PhoneInfo(models.Model):
    operator_code = models.IntegerField(verbose_name='Operator code', db_index=True)
    bottom_limit = models.IntegerField(verbose_name='Bottom limit', db_index=True)
    top_limit = models.IntegerField(verbose_name='Bottom limit', db_index=True)
    operator_name = models.CharField(verbose_name='Operator name', max_length=255)
    region = models.CharField(verbose_name='Region', max_length=255)

    class Meta:
        verbose_name = 'PhoneInfo'
        verbose_name_plural = 'PhoneInfo'
