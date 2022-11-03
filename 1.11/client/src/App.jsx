import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailItem from "./components/DetailItem";
import { ErrorBoundary } from "react-error-boundary";

import MyList from "./components/MyList";
import { useState } from "react";
import Err from "./components/Err";
import ErrorFallback from "./components/ErrorFallback";
import { useDispatch } from "react-redux";
import { getData } from "./redux/actions/servisesActions";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [userName, setUserName] = useState("");
  const [loader, setLoader] = useState(false);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();

  function getDataHandler() {
    setReload(true);

    setUserName("");
  }

  useEffect(() => {
    setLoader(true);

    dispatch(getData());

    setLoader(false);

    setReload(false);
  }, [reload]);

  return (
    <>
      <ErrorBoundary
        onReset={() => getDataHandler()}
        FallbackComponent={ErrorFallback}
      >
        {loader ? (
          <Loader />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<MyList />} />

              <Route path=":id/details" element={<DetailItem />} />
            </Routes>

            <div className="blockTestError">
              <Err userName={userName} />
              <input
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <button>click</button>
            </div>
          </>
        )}
      </ErrorBoundary>
    </>
  );
}

export default App;
