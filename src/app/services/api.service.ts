import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://51.20.35.31:3000/api'

  constructor(private http: HttpClient) { }


  getUsers(): Observable < any > {
    return this.http.get(`${this.baseUrl}/users`, { withCredentials: true });
  }

  getUserById(id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/users/${id}`, { withCredentials: true });
  }

  getUserByName(name:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/users/name${name}`, { withCredentials: true });
  }

  getUserByEmail(email:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/users/email${email}`, { withCredentials: true });
  }

  updateUser(id: string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/users/${id}`, data, { withCredentials: true });
  }

  deleteUser(id: string): Observable < any > {
    return this.http.put(`${this.baseUrl}/users/${id}`, { withCredentials: true });
  }


  // ######################################################

  upsertEmployerProfile(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/profiles/employer`, data, { withCredentials: true });
  }

  upsertJobseekerProfile(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/profiles/jobseeker`, data, { withCredentials: true });
  }

  getEmployerProfile(user_id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/profiles/employer/${user_id}`, { withCredentials: true });
  }

  getJobSeekerProfile(user_id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/profiles/jobseeker/${user_id}`, { withCredentials: true });
  }

  deleteEmployerProfile(user_id:string): Observable < any > {
    return this.http.delete(`${this.baseUrl}/profiles/jobseeker/${user_id}`, { withCredentials: true });
  }

  deleteJobSeekerProfile(user_id:string): Observable < any > {
    return this.http.delete(`${this.baseUrl}/profiles/jobseeker/${user_id}`, { withCredentials: true });
  }


  // ##########################################################


  getSkills(): Observable < any > {
    return this.http.get(`${this.baseUrl}/skills`, { withCredentials: true });
  }

  addSkill(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/skills`, data, { withCredentials: true });
  }

  updateSkill(id: string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/skills/${id}`, data, { withCredentials: true });
  }

  deleteSkill(id: string): Observable < any > {
    return this.http.delete(`${this.baseUrl}/skills/${id}`, { withCredentials: true });
  }


  // ###########################################################


  getUserSkills(user_id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/user-skills/${user_id}`, { withCredentials: true });
  }

  addUserSkill(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/user-skills`, data, { withCredentials: true });
  }

  updateUserSkill(id:string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/user-skills${id}`, data, { withCredentials: true });
  }

  deleteUserSkill(id:string): Observable < any > {
    return this.http.delete(`${this.baseUrl}/user-skills${id}`, { withCredentials: true });
  }


  // ###########################################################


  createJob(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/jobs`, data, { withCredentials: true });
  }

  getAllJobs(): Observable < any > {
    return this.http.get(`${this.baseUrl}/jobs`);
  }

  getJobById(job_id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/jobs/${job_id}`, { withCredentials: true });
  }

  getJobByTitle(title:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/jobs/title/${title}`, { withCredentials: true });
  }

  updateJob(job_id:string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/jobs${job_id}`, data, { withCredentials: true });
  }

  deleeteJob(job_id:string): Observable < any > {
    return this.http.put(`${this.baseUrl}/jobs${job_id}`, { withCredentials: true });
  }


  // ###########################################################


  addJobSkill(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/job-skills`, data, { withCredentials: true });
  }

  getJobSkillsByJobName(job_name:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/job-skills/job-skills/${job_name}`, { withCredentials: true });
  }

  getJobsBySkillName(skill_name:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/job-skills/skill-jobs/${skill_name}`, { withCredentials: true });
  }

  updateJobSkill(id:string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/job-skills${id}`, data, { withCredentials: true });
  }

  deleteJobSkill(id:string): Observable < any > {
    return this.http.put(`${this.baseUrl}/job-skills${id}`, { withCredentials: true });
  }


  // ##########################################################


  addApplication(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/applications`, data, { withCredentials: true });
  }

  getApplicationsByJobTitle(title:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/applications/title/${title}`, { withCredentials: true });
  }

  getAllApplications(): Observable < any > {
    return this.http.get(`${this.baseUrl}/applications`, { withCredentials: true });
  }

  updateApplicationStatus(id:string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/applications${id}`, data, { withCredentials: true });
  }

  deleteApplication(id:string): Observable < any > {
    return this.http.put(`${this.baseUrl}/applications${id}`, { withCredentials: true });
  }


  // ################################################


  scheduleInterview(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/interviews`, data, { withCredentials: true });
  }

  getInterviewsByUserId(user_id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/interviews/${user_id}`, { withCredentials: true });
  }

  getApplicationsByCompanyId(company_id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/interviews/company-applications/${company_id}`, { withCredentials: true });
  }

  updateInterview(id:string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/interviews${id}`, data, { withCredentials: true });
  }

  deleteInterview(id:string): Observable < any > {
    return this.http.delete(`${this.baseUrl}/interviews${id}`, { withCredentials: true });
  }


  // ##################################################


  addCV(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/cvs`, data, { withCredentials: true });
  }

  getCVsByUserId(user_id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/cvs/${user_id}`, { withCredentials: true });
  }

  updateCV(id:string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/cvs${id}`, data, { withCredentials: true });
  }

  deleteCV(id:string): Observable < any > {
    return this.http.delete(`${this.baseUrl}/cvs${id}`, { withCredentials: true });
  }


  // #################################################


  addPortfolio(data: any): Observable < any > {
    return this.http.post(`${this.baseUrl}/portfolios`, data, { withCredentials: true });
  }

  getPortfoliosByUserId(user_id:string): Observable < any > {
    return this.http.get(`${this.baseUrl}/portfolios/${user_id}`, { withCredentials: true });
  }

  updatePortfolio(id:string, data: any): Observable < any > {
    return this.http.put(`${this.baseUrl}/portfolios${id}`, data, { withCredentials: true });
  }

  deletePortfolio(id:string): Observable < any > {
    return this.http.delete(`${this.baseUrl}/portfolios${id}`, { withCredentials: true });
  }

}
