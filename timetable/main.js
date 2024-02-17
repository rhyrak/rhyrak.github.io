import CreateTimeTable, { Course } from "./timetable.js";

document.getElementById("file-in").addEventListener("input", (e) => {
  const reader = new FileReader();
  reader.readAsText(e.target.files[0]);
  reader.onloadend = () => {
    const courses = readCourses(reader.result);
    const tableController = CreateTimeTable(courses, 15);
    renderTable(tableController);
  };
});

/**
 *
 * @param {string} data
 * @returns {Array<Course>}
 */
function readCourses(data) {
  data = data.replace(/[\r]/g, "");
  data = data.trim();
  const courses = [];
  data.split("\n").forEach((row) => {
    const val = row.split(",");
    const classrooms = [];
    for (let i = 4; i < val.length; i++) {
      classrooms.push(val[i]);
    }
    courses.push(
      new Course(val[0], parseInt(val[1]), parseInt(val[2]), val[3], classrooms)
    );
  });

  return courses;
}

function renderTable(tableController) {
  document.getElementById("tt").appendChild(tableController.table);
  tableController.courses.sort((c1, c2) => c1.code.localeCompare(c2.code));
  for (let i = 0; i < tableController.courses.length; i++) {
    const course = tableController.courses[i];
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", course.code);
    checkbox.addEventListener("change", (e) => {
      tableController.changeVisibility(course.code);
    });
    const label = document.createElement("label");
    label.setAttribute("for", course.code);
    label.innerText = course.code;
    const row = document.createElement("span");
    row.appendChild(checkbox);
    row.appendChild(label);
    document.getElementById("tt-controls").appendChild(row);
  }
  tableController.updateBody();
}

document.getElementById("load-ex").addEventListener("click", () => {
  const courses = readCourses(`IE304,0,0,60,A111,C553
  ESE201,0,60,45,A111,C553
  EE107,0,105,60,A111,B545
  MSE302,0,165,105,A111,C553
  GEOE253,0,270,45,B545
  CE401,0,315,45,A111,C507
  CE103,0,360,105,A111,A121,C507
  MCE252,0,465,60,B545
  GEOE402,1,0,75,A111,C507
  EE202,1,75,90,A111,B545
  GEOE452,1,165,45,C553
  MCE108,1,210,75,A111,A121,C507
  SENG452,1,285,90,C553
  GEOE108,1,375,90,A111,A121,C507
  MATH301,1,465,45,A111,C553
  SENG105,2,0,105,A111,C553
  CENG104,2,105,90,A111,A121,C507
  SENG453,2,195,90,C553
  CENG251,2,285,90,B545
  GEOE302,2,375,45,A111,C553
  MSE104,2,420,90,A111,C121
  MATH108,3,0,75,A111,B545
  MCE451,3,75,75,C553
  MATH105,3,150,60,A111,C553
  EE201,3,210,90,A111,C553
  ESE107,3,300,60,A111,A121,C507
  SENG353,3,360,45,B545
  MCE251,3,405,90,B545
  EE455,3,495,45,C553
  EE101,4,0,60,A111,C553
  CENG304,4,60,60,A111,C553
  IE203,4,120,90,A111,B545
  MSE252,4,210,75,B545
  MATH456,4,285,75,C553
  IE355,4,360,90,B545
  EE203,4,450,45,A111,B545
  EE302,4,495,45,A111,C553
  ESE355,5,0,60,B545
  IE354,5,60,75,B545
  ESE302,5,135,60,A111,C553
  ESE106,5,195,45,A111,C121
  GEOE351,5,240,90,B545
  SENG108,5,330,105,A111,A121,C507
  SENG202,5,435,105,A111,B545`);
  const tableController = CreateTimeTable(courses, 15);
  renderTable(tableController);
});
