import datetime
import re

from django.utils import timezone
from django.test import TestCase
from django.urls import reverse

from .models import Project

class ProjectModelTests(TestCase):

    def test_project_with_future_publish_date(self):
        """
        was_published_recently() returns False for questions whose pub_date
        is in the future.
        """
        time = timezone.now() + datetime.timedelta(days=30)
        future_project = Project(pub_date=time)
        self.assertIs(future_project.was_published_recently(), False)
