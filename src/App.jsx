import { RouterProvider , createBrowserRouter   } from "react-router-dom"
import Home from "./home"
import Event from "./pages/event"
import College from "./pages/college"
import CreateEvent from "./pages/createEvent"
import RootLayout from "./layouts/rootLayout"

function App() {
  const router = createBrowserRouter ([
    {
            path: "/",
            element: <RootLayout/>,
            children:[
                {
                    index: true,
                    element: <Home/>
                  },
                  {
                    path: "event",
                    element: <Event/>
                  },
                  {
                    path: "college",
                    element: <College/>
                  },
                  {
                    path: "create-event",
                    element: <CreateEvent/>
                  },
            ]
          },
          
    ]);
  
  return < RouterProvider  router={router} />;

}

export default App
