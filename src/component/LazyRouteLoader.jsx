import { Suspense, lazy } from "react";

export const LazyRouteLoader = ({ path }) => {

    const Component = lazy(() => import(`./../${path}`));
 
    return (
          <Suspense fallback={<div>Loading...</div>}> 
            <Component />
            </Suspense>)
}



