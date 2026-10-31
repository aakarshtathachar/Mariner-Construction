import { useEffect, useState } from 'react';

function readRoute() {
  const [section = '', param = ''] = window.location.hash.replace(/^#\/?/, '').split('/');
  return { section, param };
}

export function useHashRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const handleChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', handleChange);
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  return route;
}
