import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../Redux/actionCreate";

const StudentForm = () => {
  const [id, setId] = useState(1);
  const [rollNo, setRollNo] = useState("");
  const [studentName, setStudentName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    if (storedStudents) {
      setId(storedStudents[storedStudents.length - 1].id + 1);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { rollNo: rollNo, studentName: studentName };
    dispatch(addStudent(student));
    setRollNo("");
    setStudentName("");
  };

  return (
    <div className="mx-auto max-w-md p-6 bg-white rounded-md shadow-md mt-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="rollNo"
            className="block text-gray-700 font-bold mb-2"
          >
            Roll No:
          </label>
          <input
            type="number"
            name="rollNo"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="studentName"
            className="block text-gray-700 font-bold mb-2"
          >
            Student Name:
          </label>
          <input
            type="text"
            name="studentName"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
