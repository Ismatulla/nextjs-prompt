import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

// task to do more
// Implement search(by tag ,by username,by description )  //? DONE ,WELL DONE !!
// implement click on tag   (when you click on tag ,it should only show posts that has same tag (click tag it will go input and attached function will filter basedon input ,it is easy!))   //? DONE WELL DONE !

// implement View other profiles(little hard , when you click one profile it should redirect to that profile page and show all his posts (like we did with url unique id )) when i click any profile it should push that prof id in url of browser so that it gets rendered

// URL of finished app with all features implemented
// https://promptopia.vercel.app
