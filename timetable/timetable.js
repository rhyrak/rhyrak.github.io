export class Course {
  /**
   *
   * @param {string} code Course code
   * @param {int} day Day index, starts from 0
   * @param {int} slotOffset Timeslot index, starts from 0
   * @param {int} duration Course/Exam duration
   * @param {Array<string>} classrooms List of classroom codes
   */
  constructor(code, day, slotOffset, duration, classrooms) {
    this.code = code;
    this.duration = duration;
    this.classrooms = classrooms;
    this.day = day;
    this.slotOffset = slotOffset;
  }
}

/**
 *
 * @param {Array<Course>} data List of courses
 * @param {int} timeSlotDuration Length of each slot in minutes
 */
export default function CreateTimeTable(data, timeSlotDuration) {
  data.filter((c) => !(c.day != NaN));
  data.sort((c1, c2) => c1.day - c2.day);
  const totalDays = data[data.length - 1].day + 1;
  const timeSlotCount = (9 * 60) / timeSlotDuration;

  const _courses = [];

  data.forEach((c) => {
    c.visible = false;
    c.slotOffset /= timeSlotDuration;
    c.position = c.day * 1000 + c.slotOffset;
    _courses.push(c);
  });

  const _table = document.createElement("table");
  _table.setAttribute("border", "");

  const tableController = {
    courses: _courses,
    table: _table,
    changeVisibility(course) {
      const c = this.courses.find((c) => c.code == course);
      console.log(c);
      if (c) {
        c.visible = !c.visible;
      }
      this.updateBody();
    },
    updateBody() {
      const placed = [];
      for (let day = 0; day < totalDays; day++) {
        const slots = [];
        for (let s = 0; s < timeSlotCount; s++) {
          slots.push(false);
        }
        placed.push(slots);
      }
      let body = "";
      body = "<tr><th></th>";
      for (let i = 0; i < totalDays; i++) {
        body += "<th>" + days[i % 7] + "</th>";
      }
      body += "</tr>";

      for (let s = 0; s < timeSlotCount; s++) {
        body +=
          "<tr><th>" +
          Math.floor(9 + (s * timeSlotDuration) / 60) +
          ":" +
          ((s * timeSlotDuration) % 60) +
          "</th>";
        for (let day = 0; day < totalDays; day++) {
          if (placed[day][s] == false) {
            const candidates = this.courses.filter(
              (c) => c.visible && c.position == day * 1000 + s
            );
            if (candidates.length == 0) {
              body += "<td></td>";
            } else {
              const course = candidates[0];
              let spans = course.duration / timeSlotDuration;
              body +=
                '<td rowspan="' +
                spans +
                '">' +
                course.code +
                "<br/>" +
                course.classrooms.join(" ") +
                "</td>";
              for (let i = 0; i < spans; i++) {
                placed[day][s + i] = true;
              }
            }
          }
        }
        body += "</tr>";
      }

      this.table.innerHTML = body;
    },
  };

  return tableController;
}

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
