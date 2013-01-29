class UserMailer < ActionMailer::Base
  default from: "ph.pucrio@gmail.com"
  
   def welcome_email(user)
    @user = user
    @url  = "https://salutto.herokuapp.com/signin"
    mail(:to => user.email, :subject => "Welcome to Salutto")
  end
  
end
