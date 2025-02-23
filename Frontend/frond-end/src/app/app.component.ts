import { Component } from '@angular/core';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  imports: [StudentFormComponent, StudentTableComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Student Management System (CRUD)';
  students: any[] = [];
  selectedStudent: any = { name: '', email: '', phoneNumber: '' };

  constructor(private studentService: StudentService) {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data?.length ? data : [];
    });
  }

  setSelectedStudent(student: any) {
    this.selectedStudent = { ...student };
  }

  onFormSubmit() {
    this.fetchStudents();
    this.selectedStudent = { name: '', email: '', phoneNumber: '' };
  }

  onDeleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.fetchStudents();
    });
  }
}
