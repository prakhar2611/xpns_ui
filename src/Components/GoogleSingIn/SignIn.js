import React from "react";
//import styled from 'styled-components';

// const StyledDiv = styled.div`
//   background-color: red;
//   color: white;
// `;



export function SignIn() {

  const handleLoginClick = async () => {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': '64464811543-fee5m8plhj94lpv9vgcei91r15189b45.apps.googleusercontent.com',
                'redirect_uri': 'http://localhost:3000/auth/callback?provider=google',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/gmail.readonly',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
  };

  return (
    <div>
      <h1>Manage your Expenses in one go </h1>
      <h2>Continue..</h2>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

