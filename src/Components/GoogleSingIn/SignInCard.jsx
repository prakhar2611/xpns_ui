import React, { useState } from "react";
import { Button, Drawer, theme } from "antd";
const handleLoginClick = async () => {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': '64464811543-fee5m8plhj94lpv9vgcei91r15189b45.apps.googleusercontent.com',
                'redirect_uri': 'https://teencross.dev/auth/callback?provider=google',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.email',
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

  
export function SignInCard() {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const containerStyle = {
    position: "relative",
    height: 400,
    overflow: "hidden",
    margin: "auto",
    textAlign: "center",
    background: token.colorFillAlter,
    border: `0px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={containerStyle} onMouseOver={showDrawer}onMouseLeave={onClose}>
     <img alt="Img" style={{width:750}} src="https://generation-sessions.s3.amazonaws.com/b6b6068c21198b5044d90a6ebcc3b1c8/img/54b7b13a560d5d2c4c3ea48e92f32d9a-1.png" />

      <Drawer
        title="LogIn"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        style = {{background : "#98BCDE"}}
       >
        <Button  onClick={handleLoginClick}>Google</Button>
      </Drawer>
    </div>
  );
}
