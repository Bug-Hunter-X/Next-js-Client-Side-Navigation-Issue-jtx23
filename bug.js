```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause a client-side navigation, potentially leading to issues
    router.push('/some-page');
  };

  return (
    <button onClick={handleClick}>Go to Some Page</button>
  );
}

export default MyComponent;
```