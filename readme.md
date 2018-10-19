Setup Dev Environment
1. Install MongoDB (Ref: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
2. Add bin folder (C:\Program Files\MongoDB\Server\3.4\bin) to Environmental Path
3. Run Windows Command Window in the working folder. Please note data\db folder will be created in the root of the current drive.
~~~
md \data\db
mongod
~~~
4. Edit C:\Windows\System32\drivers\etc\hosts file, add line:
~~~
127.0.0.1  mongodb
~~~


Create Project
~~~
npm install -g generator-keystone
npm install -g yo
yo keystone
~~~

* Name: AspectDemo
* Template: Jade
* CSS pre-processor: sass
* Blog: y
* Image Gallery: y
* Contact Form: y
* Call the User model: User
* Email for the first Admin user: webmaster@aspectgaming.com 
* Temporary password: aspect
* gulp or grunt: gulp
* Create a new directory for project: n
* KeystoneJS integrates with Mandriss (from Mailchimp) for email sending. Would you like to include Email configuration: n
* Include extra code comments: y


docker build -t dev.aspectgaming.com/lobby:demo.2017.01.23 .
