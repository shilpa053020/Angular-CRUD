import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-table',
  imports: [CommonModule],
  templateUrl: './student-table.component.html'
})
export class StudentTableComponent {
  @Input() students: any[] = [];
  @Output() editStudentEvent = new EventEmitter<any>();
  @Output() deleteStudentEvent = new EventEmitter<string>();

  editStudent(student: any) {
    this.editStudentEvent.emit(student);
  }

  // 🔴 Delete student
  deleteStudent(id: string) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.deleteStudentEvent.emit(id);
    }
  }
}
