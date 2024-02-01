from django.db import models


class PhoneInfo(models.Model):
    operator_code = models.CharField(verbose_name='Operator code', max_length=3, db_index=True)
    bottom_limit = models.CharField(verbose_name='Bottom limit', max_length=7, db_index=True)
    top_limit = models.CharField(verbose_name='Bottom limit', max_length=7, db_index=True)
    operator_name = models.CharField(verbose_name='Operator name', max_length=255)
    region = models.CharField(verbose_name='Region', max_length=255)

    class Meta:
        verbose_name = 'PhoneInfo'
        verbose_name_plural = 'PhoneInfo'
