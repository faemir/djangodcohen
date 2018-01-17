from django.contrib import admin
from django.contrib.admin import ModelAdmin
from tinymce.widgets import TinyMCE
from django.db import models

from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE(attrs={'cols': 80, 'rows': 20,}, )},
    }
    fieldsets = [
        ('Project title',    {'fields': ['title']}),
        ('Description', {'fields': ['description']}),
        ('Date information', {'fields': ['pub_date']}),
    ]
    list_display = ('title', 'pub_date', 'was_published_recently')
    list_filter = ['pub_date']
    search_fields = ['title', 'description']

admin.site.register(Project, ProjectAdmin)
