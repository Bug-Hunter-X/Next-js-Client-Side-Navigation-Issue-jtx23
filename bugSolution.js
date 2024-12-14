```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This uses server-side rendering and is more robust
    router.replace('/some-page');
  };

  return (
    <button onClick={handleClick}>Go to Some Page</button>
  );
}

export default MyComponent;
```