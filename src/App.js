import { Fragment } from "react";
import TextEditor from "./components/TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { v4 as uuidV4} from 'uuid'

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" exact element={<Navigate to={`/documents/${uuidV4()}`} />} />
          <Route path="documents/:id" exact element={<TextEditor />} />

        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
