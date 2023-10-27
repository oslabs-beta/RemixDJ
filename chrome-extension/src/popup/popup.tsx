import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <div>Open DeveloperTools and navigate to RemixDJ tab</div>;
};

const rootContainer: any = document.getElementById('root') as HTMLElement;
const root: any = createRoot(rootContainer);
root.render(<App />);
