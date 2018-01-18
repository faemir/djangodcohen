from django.shortcuts import render
from django.utils import timezone

from .models import Project

# Create your views here.
def index(request):
    return render(request, 'dport/index.html')

# Create your views here.
def work(request):
    # super dynamic content here!
    feat_proj = Project.objects.filter(pub_date__lte=timezone.now()).order_by('-pub_date')[0]
    projects = Project.objects.filter(pub_date__lte=timezone.now()).order_by('-pub_date')[1:]
    return render(request, 'dport/work.html', {'feat_proj': feat_proj, 'projects': projects, 'gridcount': range(projects.count() - 1)})

# Create your views here.
def contact(request):
    return render(request, 'dport/contact.html')