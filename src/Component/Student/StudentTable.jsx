import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkIn, checkOut } from "../Redux/actionCreate";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const student = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const numCheckedIn = useSelector((state) => state.numCheckedIn);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, [student]);

  const handleCheckIn = (id) => {
    dispatch(checkIn(id));
  };

  const handleCheckOut = (id) => {
    dispatch(checkOut(id));
  };

  const renderCheckButton = (student) => {
    if (!student.checkIn) {
      return (
        <button
          onClick={() => handleCheckIn(student.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
        >
          Check-In
        </button>
      );
    } else if (student.checkIn && !student.checkOut) {
      return (
        <button
          onClick={() => handleCheckOut(student.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
        >
          Check-Out
        </button>
      );
    } else {
      return "Please Come after 24hours";
    }
  };
  

  return (
    <>
    <div className=" mt-2 mx-auto bg-white rounded-md shadow-md">
  <table className="w-full table-auto">
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">Roll No</th>
        <th className="py-3 px-6 text-left">Student Name</th>
        <th className="py-3 px-6 text-left">Check-In</th>
        <th className="py-3 px-6 text-left">Check-Out</th>
        <th className="py-3 px-6 text-left">Actions</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm font-light">
      {Array.isArray(students) &&
        students.map((student) => (
          <tr
            key={student.id}
            className="border-b border-gray-200 hover:bg-gray-100"
          >
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {student.rollNo}
            </td>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {student.studentName}
            </td>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {student.checkIn || "-"}
            </td>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {student.checkOut || "-"}
            </td>
            <td className="py-3 px-6 text-left">
              {renderCheckButton(student)}
            </td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
 <div className="mt-4 text-center">
        <h1>
          Total Checked-In Students:
          <span className="font-bold"> {numCheckedIn}</span>
        </h1>
      </div>
    </>
  );
};

export default StudentTable;
