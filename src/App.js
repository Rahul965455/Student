import Student from "./Component/Student/StudentTable";
import StudentForm from "./Component/Student/StudentForm";
import StudentTable from "./Component/Student/StudentTable";
import Header from "./Component/Header/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/table" element={<StudentTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
