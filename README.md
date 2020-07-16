IN Mountain Biking Trails

We have created an app for local mountain-bikers to be able to keep track of the trails they ride, input their times, and find near-by bike shops for quick repair if needed. 

Motivation

We saw a purpose for this because self improvement on beating ones own time is a must on the trails. We provide a quick way to track, recall, and input every time logged. The other problem that does arise is a bike that brokes down on the trail and we solved this by linking each park with the nearest bike shop so the biker can get back on the trail in the same day. 

Build status

Endpoints (19):

User Register /register (User can register)

User Login /login (User can login)
User Get (for DB) / (User ID attaches to Times table upon create)
Admin Register new user /adminregister (Admin can register new user through admin portal with userRole)
Admin Get Users /adminget (Fetches are currently registered users)
Admin Edit User /adminput (Admins can edit users username, password and userRole)
Admin Delete User /admindelete (Admins can delete any user including other admins)
Time Create (Create a time for a trail while attaching users ID to table)
Time Edit (Edit any time in DB)
Time Delete (Delete any time in DB)
Time Get (Fetch all logged times)
Trails Create (Create a trail log)
Trails Edit (Edit any trail in DB)
Trails Delete (Delete any time in DB)
Trails Get (Fetch all logged trails)
Shops Create (Create a bike shop log)
Shops Edit (Edit any bike shop in DB)
Shops Delete (Delete any bike shop in DB)
Shops Get (Fetch all bike shops)

Client API Fetch Endpoints:
Taco (Hustin)
Bored (Justin)
Jeopardy (Michelle)


Code Style

codestyle - Standard


Tech/ Framework 
React Legacy / Typescript

How to use:
- Create a new user account
- Along the left side you will be able to access the trails, times, and bike shops.
- Add a new mountain biking trail.
- After you have completed a trail, input your completed time.

Credit
Contributors: 
Hustin Jeffers : github.com/hustin-paul
Justin Brummett : github.com/Justinbrummett1121
Michelle Meighen :github.com/michmeig11
Design: 
Antd Design : https://ant.design/docs/react
