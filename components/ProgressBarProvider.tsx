// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProvidersProgress = ({ children }:{children: React.ReactNode}) => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#4CAF50"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default ProvidersProgress;