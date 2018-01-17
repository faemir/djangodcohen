from django.shortcuts import render

from .models import Project

# Create your views here.
def index(request):
    return render(request, 'dport/index.html')

# Create your views here.
def work(request):
    # super dynamic content here!
    return render(request, 'dport/work.html')

# Create your views here.
def contact(request):
    return render(request, 'dport/contact.html')