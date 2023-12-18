import React, {useEffect} from "react";
import PageContainer from "../component/page-container.jsx";

const Calendly = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, []);
  return <div
    className="calendly-inline-widget"
    data-url="https://calendly.com/dearducky?hide_landing_page_details=1&background_color=fec538&text_color=060c2c&primary_color=00b7ff"
    style={{
      minWidth: '320px',
      height: '700px',
    }}
  ></div>
};

/**
 * BasicPage renders "connect_page" resources.
 *
 * @param fields
 *   The basic page fields.
 */
const ConnectPage = ({ fields }) => {
  const { mainMenu } = fields;
  return (
    <PageContainer mainMenu={ mainMenu }>
      <main>
        <Calendly />
      </main>
    </PageContainer>
  );
};

export default ConnectPage;
