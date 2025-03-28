# HR System Employees Table

| employee_id | first_name | last_name | department   | job_title                  | hire_date   | manager_id | salary | performance_rating |
|------------|------------|-----------|--------------|----------------------------|-------------|------------|--------|-------------------|
| EMP001     | Michael    | Chen      | Engineering  | Senior Software Engineer   | 2018-03-15  | EMP005     | 125000 | 4.5               |
| EMP002     | Sarah      | Rodriguez | Marketing    | Marketing Manager          | 2016-07-22  | EMP007     | 110000 | 4.2               |
| EMP005     | David      | Kim       | Engineering  | Engineering Director       | 2015-01-10  | EMP007     | 185000 | 4.8               |

# Payroll System Employee Records Table

| system_id | employee_number | full_name        | pay_grade | base_salary | bonus_eligible | tax_jurisdiction | reporting_manager_id |
|-----------|-----------------|------------------|-----------|-------------|----------------|------------------|----------------------|
| PRL001    | EMP001          | Michael Chen     | SG7       | 125000      | Yes            | CA               | PRL005               |
| PRL002    | EMP002          | Sarah Rodriguez  | MG4       | 110000      | Yes            | NY               | PRL007               |
| PRL005    | EMP005          | David Kim        | DG2       | 185000      | Yes            | CA               | PRL007               |

# Performance Management System Performance Profiles Table

| profile_id | employee_code | full_name        | department_code | performance_score | career_level                    | reporting_manager_profile_id | Competency Levels                                           |
|------------|---------------|------------------|-----------------|-------------------|--------------------------------|------------------------------|-------------------------------------------------------------|
| PERF001    | EMP001        | Michael Chen     | ENG             | 87.5              | Senior Individual Contributor  | PERF005                      | Technical Skills: 4.6<br>Leadership: 3.9<br>Collaboration: 4.2 |
| PERF002    | EMP002        | Sarah Rodriguez  | MKT             | 85.3              | Manager                        | PERF007                      | Strategic Thinking: 4.5<br>Leadership: 4.3<br>Communication: 4.7 |
| PERF005    | EMP005        | David Kim        | ENG             | 92.1              | Director                       | PERF007                      | Strategic Thinking: 4.8<br>Leadership: 4.6<br>Technical Oversight: 4.5 |

## Hierarchical Relationship Mapping

| Employee    | Manager       | Management Level |
|-------------|---------------|-----------------|
| Michael Chen| David Kim     | Direct Report   |
| Sarah Rodriguez | David Kim  | Indirect Report |
| David Kim   | (Implied) CEO | Senior Director |
