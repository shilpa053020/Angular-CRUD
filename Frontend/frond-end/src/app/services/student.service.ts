import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
//make this class as service
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5001/employee/';
  private refreshNeeded$ = new Subject<void>();
  constructor(private http:HttpClient) { }

  get refreshNeeded() {
    return this.refreshNeeded$;
  }

  getStudents():Observable<any[]>{return this.http.get<any[]>(this.apiUrl)}

  createStudent(student:any):Observable<any>{return this.http.post<any>(`${this.apiUrl}/create`,student)
  .pipe(
      tap(() => this.refreshNeeded$.next())
    );
}

  updateStudent(id:string,student:any):Observable<any>{return this.http.put<any>(`${this.apiUrl}update/${id}`,student)}

  deleteStudent(id:string):Observable<any>{return this.http.delete<any>(`${this.apiUrl}/delete/${id}`)}

}
