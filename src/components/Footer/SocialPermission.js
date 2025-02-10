import React from 'react';

const SocialPermission = () => {
  return (
    <div className="social-permission">
      <div className="container">
        <div className="permission">
          <img 
            className="img-fluid bg-image" 
            id="rfthxlaorfthdshwjyoeuiwk" 
            onClick={() => window.open("https://logo.samandehi.ir/Verify.aspx?id=131572&p=rfthxlaorfthdshwjyoeuiwk", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")}
            alt="ساماندهی" 
            src="/assets/site/default/img/permission/samandehi.png"
            width="93" 
            height="130"
          />
          <img 
            className="img-fluid bg-image"
            id="rfthxlaorfthdshwjyoeuiwa"
            onClick={() => window.open("https://trustseal.enamad.ir/?id=111564&Code=u9Vwf8tLzFcR46jEN7Mt", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")}
            alt="اینماد"
            src="/assets/site/default/img/permission/enamad.png"
            width="93"
            height="130"
          />
          {/* Add other permission images similarly */}
        </div>
      </div>
    </div>
  );
};

export default SocialPermission;