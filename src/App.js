import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import logo from "./logo.svg";

import "./App.css";
import Ccomponent from "./components/Ccomponent";
import Funtional from "./components/Funtional";
import Parent from "./components/Parent";
import Lists from "./components/Lists";
import Toggle from "./components/Toggle";
import Styles from "./components/Styles";
import Form from "./components/Form";
import MountingA from "./components/Lifecycle/MountingA";
import ErrorBoundary from "./components/Lifecycle/ErrorBoundary";
import RandomUser from "./components/Data/RandomUser";
import FetchData from "./components/Axios/FetchData";
import SnapShot from "./components/Lifecycle/SnapShot";
import PostReq from "./components/Axios/PostReq";
import PropsTypeCheck from "./components/PropsTypeCheck";
import RefOne from "./components/RefOne";
import RefOneParent from "./components/RefOneParent";
import ClickCounter from "./components/HighOrderComponent/ClickCounter";
import HoverCounter from "./components/HighOrderComponent/HoverCounter";
import Counter from "./components/RenderProps/Counter";

import ClickCounterProps from "./components/RenderProps/ClickCounterProps";
import HoverCounterProps from "./components/RenderProps/HoverCounterProps";
import A from "./components/Context/A";
import UseState from "./components/Hooks/UseState";
import UseEffect from "./components/Hooks/UseEffect";
import UseReducer from "./components/Hooks/UseReducer";
import UseMemo from "./components/Hooks/UseMemo";
import UseCallBack from "./components/Hooks/UseCallBack";
import UseRef from "./components/Hooks/UseRef";
import UseLayout from "./components/Hooks/UseLayout";
import UseCustomHook from "./components/Hooks/UseCustomHook";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import Home from "./components/Router/Home";
import About from "./components/Router/About";
import Navbar from "./components/Router/Navbar";
import Error from "./components/Router/Error";
import Contact from "./components/Router/Contact";
import Auth from "./components/Router/Auth";
import Dashboard from "./components/Router/Dashboard";
import Frontend from "./components/Router/FrontEnd/Frontend";
import Backend from "./components/Router/BackEnd/Backend";
import Admin from "./components/Router/Admin";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const user1 = localStorage.getItem("login", user);
    user1 ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("login", user);
  }, [user]);
  return (
    <div className="App">
      {/* <Ccomponent name="Class Component" age="100"></Ccomponent>
      <Funtional name="Function Component" age="100"></Funtional> */}
      {/* How to transfer data and call function from child to parent */}
      {/* <Parent></Parent> */}
      {/* Use Map function  */}
      {/* <Lists></Lists> */}
      {/* <Toggle></Toggle> */}
      {/* StyleSheet Working */}
      {/* <Styles></Styles> */}
      {/* Form Handling */}
      {/* <Form></Form> */}
      {/* Life Cycle */}
      {/* <MountingA name="Mohan"></MountingA>
      <ErrorBoundary>
        <MountingA name="Himanshu"></MountingA>
      </ErrorBoundary> */}
      {/* Working with data */}
      {/* <RandomUser></RandomUser> */}
      {/* <FetchData></FetchData> */}
      {/* <SnapShot></SnapShot> */}
      {/* <PostReq></PostReq> */}
      {/* <PropsTypeCheck age={10}></PropsTypeCheck> */}
      {/* <RefOneParent></RefOneParent> */}

      {/* //High Order Component 
     <HoverCounter name="Ram"></HoverCounter>
      <ClickCounter name="Shyam"></ClickCounter> */}

      {/* // Render Props */}
      {/* <Counter
        render={(count, increament) => (
          <HoverCounterProps
            count={count}
            increament={increament}
          ></HoverCounterProps>
        )}
      ></Counter>

      <Counter
        render={(count, increament) => (
          <ClickCounterProps
            count={count}
            increament={increament}
          ></ClickCounterProps>
        )}
      ></Counter> */}

      {/* //Context API
      <A></A> */}

      {/* //HOOKS */}
      {/* <UseState></UseState> */}
      {/* <UseEffect></UseEffect> */}
      {/* <UseReducer></UseReducer> */}
      {/* <UseMemo></UseMemo> */}
      {/* <UseCallBack></UseCallBack> */}
      {/* <UseRef></UseRef> */}
      {/* <UseLayout></UseLayout> */}
      {/* <UseCustomHook></UseCustomHook> */}

      {/* //LazyLoading */}
      {/* <LazyLoading></LazyLoading> */}

      {/* //Routing */}
      <Routes>
        {!user && (
          <Route path="/auth" element={<Auth auth={() => setUser(true)} />} />
        )}
        {user && (
          <Route
            path="/Dashboard"
            element={<Dashboard logoutx={() => setUser(false)} />}
          />
        )}

        <Route path="/frontend" element={<Frontend />}>
          {/* //For Outlet */}
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="/backend" element={<Backend />}>
          <Route index element={<Admin />}></Route>
        </Route>

        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/about/:id" element={<About></About>} />

          {/* //IF WE WANT TO ROUTE UNDER CHILD COMPONENT THEN USE /contact/* 
          <Route path="/contact/*" element={<Contact></Contact>} /> */}
        </Route>

        {/* Trying nested routing */}
        <Route path="/admin" element={<Navbar></Navbar>}>
          <Route path="/admin" element={<Home></Home>} />
          <Route path="/admin/about" element={<About></About>} />
          <Route path="/admin/contact" element={<Contact></Contact>} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={user ? "dashboard" : "auth"} />}
        />

        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
