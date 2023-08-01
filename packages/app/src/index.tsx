import '@aws-amplify/ui-react/styles.css';
import React from "react";
import ReactDOM from "react-dom";
import { AmplifyProvider, Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from '@aws-amplify/core';

import App from "./App";
import { QuickstartProvider } from "./Context";
import reportWebVitals from "./reportWebVitals";
import { awsConfig } from './const';

Amplify.configure(awsConfig);

ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
      <QuickstartProvider>
        <Authenticator
          loginMechanisms={['email']}
          components={{
            Header: () => <div style={{
              textAlign: 'center', padding: '20px'
            }}>Plaid Demo</div>,
          }}
        >
          <App />
        </Authenticator>
      </QuickstartProvider>
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
