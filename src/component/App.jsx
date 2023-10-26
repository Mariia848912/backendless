import { Navigate, Route, Routes } from "react-router-dom";
import tabs from "../tabs.json";
import { LazyRouteLoader } from "./LazyRouteLoader";
import { Tab } from "./Tab";
import { Navigation } from "./Navigation";
import { sortTabs } from "../utils/sortTabs";

function App() {
  const sortedTabs = sortTabs(tabs);

  return (
    <>
      <Navigation tabs={sortedTabs} />

      <Routes>
        {sortedTabs.map((tab) => {
          return (
            <Route
              key={tab.id}
              path={`/${tab.id}`}
              element={
                <Tab
                  title={tab.title}
                  data={<LazyRouteLoader path={tab.path} />}
                />
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <Tab
              title="Not Found"
              data={<LazyRouteLoader path="tabs/notFound.js" />}
            />
          }
        />
        <Route index element={<Navigate to={`/${sortedTabs[0].id}`} />} />
      </Routes>
    </>
  );
}

export default App;
