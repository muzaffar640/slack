import React from 'react';
import Header from './components/Header';
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from "react-spinkit";
import slack from "./images/slack.jpg"


function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={slack} alt=""/>
          <Spinner 
            name="three-bounce"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
        <Header />
        <AppBody>
        <Sidebar />
        <Chat />
        </AppBody>        
      </>
      )}      
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 30px;
  }
`;
