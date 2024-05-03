const programmingLanguages = [
    "C",
    "C++",
    "Java",
    "JavaScript",
    "ActionScript",
    "AppleScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Go",
];

$(function () {
    $("#birthday").datepicker();
    $("#prog-lang").autocomplete({
        source: programmingLanguages,
    });
});
