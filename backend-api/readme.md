# FullStack Backend Assignment

# Updates
* 1.	Write a node.js express middleware
that only allows request to proceed if req has session and it's applicable only to all URLs that start with pub/proxy  and api/proxy (for example pub/proxy/bpm/start or api/proxy/adu-ms/get).  -- complete



* 2.	Write an endpoint post and get express handler
that is using middleware from previous question. For post /save/:id writes contents of request body that is JSON to file named id.json and on get reads file Id and serves back as JSON. -- complete


### Installation

Install the dependencies and start the server.  When you clonse the respository, cd into it and cd into one of the directories to start.  Whichever one you pick is where you will run the following commands below.  <project_directory> is the directory you've chosen.

```sh
$ cd <project_directory>
$ npm install
```

### verification

### Write a node.js express middlewar
Step 1:
Login with any of 3 test user 
{
        username: "john"
    },
    {
        username: "tony"
    },
    {
        username: "sans"
    }
];

open http://localhost:3000
will show login screen

![Alt login](./verification/login.png?raw=true "Title")

Step 2:
After login will session created and navigate to Welcome.html
Where user can access to protected route 


1./pub/proxy/bpm/start using link proxy pub
2./api/proxy/adu-ms/get using link proxy api.


These routes send html response . Thought these are not expected to return json response
If Requuirement is to return json response , then can be modifed using the code
res.status(200).json({jsonData}) 
in proxy.ts controller .


![Alt welcome](./verification/welcome.png?raw=true "Title")

clicking on 
link proxy api
![Alt Proxy](./verification/proxy.png?raw=true "Title")


Step: 3
Without login will see error response data while
navigating to any of the route /welcome /pub/proxy/bpm/star /pub/proxy/ /api/proxy/adu-ms/get /api/proxy


![Alt Proxy](./verification/withoutlogin.png?raw=true "Title")

### Write an endpoint post and get express handler

Use postman collection in Docs folder
Use login endpoint to create session
Post / Login

![Alt read](./verification/login_api.png?raw=true "Title")

Get / Save/1

![Alt read](./verification/read.png?raw=true "Title")

Post / Save/1

![Alt read](./verification/write.png?raw=true "Title")









