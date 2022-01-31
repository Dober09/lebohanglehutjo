from django.http.response import HttpResponse
from django.shortcuts import render
import smtplib



def email_mess(sender,subject,mess):
    me = 'js0565351@gmail.com'
    password = 'space to'
    smptObj = smtplib.SMTP('smtp.gmail.com')
    smptObj.starttls()
    smptObj.login(user=me,password=password)
    smptObj.sendmail(from_addr=sender,to_addrs=me,msg=f"subject:{subject}\n\n{sender}\n\n{mess}")
    smptObj.close()

def index(request):
    if request.method == 'POST':
        email_mess(request.POST['email'],request.POST['subject'], request.POST['message'])
        return HttpResponse('message sent')

    
    return render(request ,'accounts/message.html')



