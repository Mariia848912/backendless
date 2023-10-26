import { Suspense, lazy } from "react";

export const LazyRouteLoader = ({ path }) => {

    const Component = lazy(() => import(`./../${path}`));
 
    return (
          <Suspense fallback={<div>Loading...</div>}> 
            <Component />
            </Suspense>)
}

/**
 * 
 *    console.log(path);
    // const Component = lazy(() => import(`../${path}`));
    const DummyChart = lazy(() => import('../tabs/dummyChart.js'));
    return <DummyChart />



        console.log(path);
    // const Component = lazy(() => import(`../${path}`));
    const DummyChart = import('../tabs/dummyChart.js');
console.log(<DummyChart />);
    return <DummyChart />
 */