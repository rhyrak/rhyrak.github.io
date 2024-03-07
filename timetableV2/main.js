import {
    createEmptyTableData,
    mergeTableCells,
    renderTable,
} from "./timetable.js";

document.getElementById("file-in").addEventListener("input", (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onloadend = () => {
        const data = createEmptyTableData();

        const courses = readCourses(reader.result);
        for (let i = 0; i < courses.length; i++) {
            const c = courses[i];
            if (c.department != "CENG") continue;
            data[c.day][c.time / 60][c.grade - 1] = {
                span: c.duration / 60,
                name: c.code,
                room: c.classroom,
            };
        }

        mergeTableCells(data);
        renderTable(data);
    };
});

export class Course {
    /**
     *
     * @param {string} code Course code
     * @param {int} day Day index, starts from 0
     * @param {int} time Timeslot index, starts from 0
     * @param {int} duration Course duration
     * @param {string} classroom Classroom code
     * @param {int} grade Course grade
     * @param {string} department Course department
     * @param {string} name Course name
     */
    constructor(code, day, time, duration, classroom, grade, department, name) {
        this.code = code;
        this.duration = duration;
        this.classroom = classroom;
        this.day = day;
        this.time = time;
        this.grade = grade;
        this.department = department;
        this.name = name;
    }
}

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
        courses.push(
            new Course(
                val[0],
                parseInt(val[1]),
                parseInt(val[2]),
                val[3],
                val[4],
                parseInt(val[5]),
                val[6],
                val[7]
            )
        );
    });

    return courses;
}
