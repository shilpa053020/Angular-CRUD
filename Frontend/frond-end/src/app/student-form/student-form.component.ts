import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
})
export class StudentFormComponent implements OnChanges {
  @Input() student: any = { name: '', email: '', phoneNumber: '' }; // Accept data from parent
  @Output() formSubmit = new EventEmitter<void>();

  constructor(private studentService: StudentService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['student'] && this.student) {
      this.student = { ...this.student }; // Ensure we have a fresh copy
    }
  }

  submitForm() {
    if (this.student._id) {
      this.studentService.updateStudent(this.student._id, this.student).subscribe(() => {
      this.formSubmit.emit(); // Notify parent to refresh table
      });
    } else {
      this.studentService.createStudent(this.student).subscribe(() => {
      this.formSubmit.emit(); // Notify parent to refresh table
      });
    }
  }
}