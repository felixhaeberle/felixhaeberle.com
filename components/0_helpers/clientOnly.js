import React from 'react'

export default function clientOnly ({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false);
  
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }
  
  return (
    <div {...delegated}>
      {children}
    </div>
  );
}