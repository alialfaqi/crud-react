// export function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div>
//       <h2>Something went wrong:</h2>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

import { FallbackProps } from "react-error-boundary";

interface ErrorFallbackProps extends FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
