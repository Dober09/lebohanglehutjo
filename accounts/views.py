from django.shortcuts import render
from django.core.mail import send_mail





def index(request):
    if request.method == 'POST':
        message_username = request.POST['name']
        message_useremail = request.POST['email']
        message_subject = request.POST['subject']
        message_mail= request.POST['message']

        send_mail(subject=message_subject ,message=f'{message_useremail}\n{message_mail}',
from_email=message_useremail, recipient_list=['js0565351@gmail.com'],)
      
        return render(request ,'accounts/message.html',{'message_username':message_username})

    
    return render(request ,'accounts/message.html')



