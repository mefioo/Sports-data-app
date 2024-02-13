To properly run the project:

1. Download the repository
2. Under folder, when you store the project, run "npm install" and "npm start" to run your local server on port 3001.
3. Under /sports-data-frontend, run 'npm install' and 'npm start' to run the React application on port 3000.

Notes from the author:
I was able to cover all mandatory steps. App is created with usage of React + TS, and the functionalities are covered with UTs.
From the additional steps, I managed to add e2e tests using Playwright, use express to setup the server, and partially setup Websocket as well as use TDD.
In case of Websockets: due to the lack of time, I was able to implement only establishing connection part. That's why in SimulationContent component there are two useEffects (one to esablish connection, second to simulate receiving messages and to remove in the final solution).
I was not able to include MobX - I have never worked with this library, so I used redux instead. In case of need - I am sure I would successfuly use it.
I was not able to cover services and sagas with UTs - no time left. I would definitelly write some UTs normally.
I did not put focus to styling - I used reactstrap to do the job for me, so the styling in my opinion is close enough.
