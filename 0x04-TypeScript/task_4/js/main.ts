// Constants for different subjects
export const CPP_SUBJECT = "Cpp";
export const JAVA_SUBJECT = "Java";
export const REACT_SUBJECT = "React";

// Define the Teacher interface
interface Teacher {
 experienceTeachingC: number;
 getRequirements(): string;
 getAvailableTeacher(): string;
}

// Create and export a Teacher object
export const cTeacher: Teacher = {
 experienceTeachingC: 10,
 getRequirements: function(): string {
    return "Requirements for the subject";
 },
 getAvailableTeacher: function(): string {
    return "Available teacher information";
 }
};

// Function to log subject information
function logSubjectInfo(subject: string, teacher: Teacher) {
 console.log(subject);
 console.log(teacher.getRequirements());
 console.log(teacher.getAvailableTeacher());
}

// Use the constants and Teacher object to log information
logSubjectInfo(CPP_SUBJECT, cTeacher);
logSubjectInfo(JAVA_SUBJECT, cTeacher);
logSubjectInfo(REACT_SUBJECT, cTeacher);

