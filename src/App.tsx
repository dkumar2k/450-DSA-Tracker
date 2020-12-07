import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { QuestionData } from "./Backend/db-store/data";
import Home from "./components/Home/Home";
import QStatCard from "./components/QStatCard";
import { QuestionDataContext } from "./context/QuestionDataContext";
import { useQuestionData } from "./hooks/useQuestionData";
import { IRoute, routes } from "./routes/routes";

function App() {
  const [questionData, _, updateData] = useQuestionData();

  return (
    <QuestionDataContext.Provider value={questionData}>
      <div className="App bg-white mx-auto mt-10 p-8 max-w-4xl m-auto ">
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home questionData={questionData} updateData={updateData} />
            )}
          />
          {/* mapping all app routes */}
          {routes.map((route: IRoute, index: number) => (
            <Route
              key={index}
              exact
              path={route.path}
              component={() => (
                <QStatCard
                  key={index}
                  questionData={questionData[index]}
                  updateData={updateData}
                />
              )}
            />
          ))}
        </Switch>
      </div>
    </QuestionDataContext.Provider>
  );
}

export default App;
