import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout.js";
import Start from "./pages/Start/Start"
import Main from "./pages/Search/Search";
import Main2 from "./pages/Search/Search2.js";
import Sub from "./pages/Sub/Sub";
import Sub2 from "./pages/Sub/Sub2"
import Tab01 from "./pages/Tab/Tab01";
import Tab02 from "./pages/Tab/Tab02";
import Tab03 from "./pages/Tab/Tab03";
import Res from "./pages/Res/Res";
import Res2 from "./pages/Res/Res2";


function App() {
  return (
    <>
      <Router>
        <CookiesProvider>
          <AppLayout>
            <Switch>
            <Route path="/res">
                <Res />
              </Route>
              <Route path="/res2">
                <Res2 />
              </Route>
              <Route path="/tab01">
                <Tab01 />
              </Route>
              <Route path="/tab02">
                <Tab02 />
              </Route>
              <Route path="/tab03">
                <Tab03 />
              </Route>
              <Route path="/sub">
                <Sub />
              </Route>
              <Route path="/sub2">
                <Sub2 />
              </Route>
              <Route path="/search">
                <Main />
              </Route>
              <Route path="/search2">
                <Main2 />
              </Route>
              <Route path="/kis-26-2team/res">
                <Res />
              </Route>
              <Route path="/kis-26-2team/res2">
                <Res2 />
              </Route>
              <Route path="/kis-26-2team/tab01">
                <Tab01 />
              </Route>
              <Route path="/kis-26-2team/tab02">
                <Tab02 />
              </Route>
              <Route path="/kis-26-2team/tab03">
                <Tab03 />
              </Route>
              <Route path="/kis-26-2team/sub">
                <Sub />
              </Route>
              <Route path="/kis-26-2team/sub2">
                <Sub2 />
              </Route>
              <Route path="/kis-26-2team/search">
                <Main />
              </Route>
              <Route path="/kis-26-2team/search2">
                <Main2 />
              </Route>
              <Route path="/">
                <Start/>
              </Route>
            </Switch>
          </AppLayout>
        </CookiesProvider>
      </Router>
    </>
  );
}

export default App;
