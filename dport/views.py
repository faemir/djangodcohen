from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'dport/index.html')

# Create your views here.
def work(request):
    return render(request, 'dport/work.html')

# Create your views here.
def contact(request):
    return render(request, 'dport/contact.html')