# Data Vault Model Tables with Sample Data

## Hub Employee Table

| employee_hkey | employee_id | source_system | load_date     | record_source |
|--------------|-------------|---------------|---------------|---------------|
| MD5_EMP001   | EMP001      | HR_SYSTEM     | 2024-03-28    | HR_IMPORT     |
| MD5_EMP002   | EMP002      | HR_SYSTEM     | 2024-03-28    | HR_IMPORT     |
| MD5_EMP005   | EMP005      | HR_SYSTEM     | 2024-03-28    | HR_IMPORT     |

## Satellite Employee Personal Table

| employee_hkey | load_date   | load_end_date | hash_diff     | first_name | last_name | hire_date   |
|--------------|-------------|---------------|---------------|------------|-----------|-------------|
| MD5_EMP001   | 2024-03-28  | 9999-12-31    | HASH_MICHAEL  | Michael    | Chen      | 2018-03-15  |
| MD5_EMP002   | 2024-03-28  | 9999-12-31    | HASH_SARAH    | Sarah      | Rodriguez | 2016-07-22  |
| MD5_EMP005   | 2024-03-28  | 9999-12-31    | HASH_DAVID    | David      | Kim       | 2015-01-10  |

## Satellite Employee HR Table

| employee_hkey | load_date   | load_end_date | hash_diff     | job_title            | department    | salary | performance_rating | manager_hkey | valid_from  | valid_to    |
|--------------|-------------|---------------|---------------|---------------------|---------------|--------|--------------------|--------------|-----------  |-------------|
| MD5_EMP001   | 2024-03-28  | 9999-12-31    | HASH_EMP001_1 | Data Science Lead   | Data Science  | 125000 | 4.5                | MD5_EMP005   | 2022-11-15  | 9999-12-31  |
| MD5_EMP002   | 2024-03-28  | 9999-12-31    | HASH_EMP002_1 | Marketing Manager   | Marketing     | 110000 | 4.2                | MD5_EMP010   | 2023-02-01  | 9999-12-31  |
| MD5_EMP005   | 2024-03-28  | 9999-12-31    | HASH_EMP005_2 | Engineering Director| Operations   | 185000 | 4.8                | MD5_EMP007   | 2020-01-01  | 9999-12-31  |

## Satellite Employee Payroll Table

| employee_hkey | load_date   | load_end_date | hash_diff     | pay_grade | base_salary | bonus_eligible | tax_jurisdiction |
|--------------|-------------|---------------|---------------|-----------|-------------|----------------|------------------|
| MD5_EMP001   | 2024-03-28  | 9999-12-31    | HASH_PAY_001  | SG7       | 125000      | true           | CA               |
| MD5_EMP002   | 2024-03-28  | 9999-12-31    | HASH_PAY_002  | MG4       | 110000      | true           | NY               |
| MD5_EMP005   | 2024-03-28  | 9999-12-31    | HASH_PAY_005  | DG2       | 185000      | true           | CA               |

## Satellite Employee Performance Table

| employee_hkey | load_date   | load_end_date | hash_diff     | performance_score | career_level                    | competency_json |
|--------------|-------------|---------------|---------------|-------------------|--------------------------------|-----------------|
| MD5_EMP001   | 2024-03-28  | 9999-12-31    | HASH_PERF_001 | 87.5              | Senior Individual Contributor  | {"technical_skills": 4.6, "leadership": 3.9, "collaboration": 4.2} |
| MD5_EMP002   | 2024-03-28  | 9999-12-31    | HASH_PERF_002 | 85.3              | Manager                        | {"strategic_thinking": 4.5, "leadership": 4.3, "communication": 4.7} |
| MD5_EMP005   | 2024-03-28  | 9999-12-31    | HASH_PERF_005 | 92.1              | Director                       | {"strategic_thinking": 4.8, "leadership": 4.6, "technical_oversight": 4.5} |

## Link Employee to Manager Table

| employee_manager_hkey | employee_hkey | manager_hkey | valid_from  | valid_to    | load_date   | record_source |
|----------------------|---------------|--------------|-------------|-------------|-------------|---------------|
| LINK_EMP001_MGR      | MD5_EMP001    | MD5_EMP005   | 2018-03-15  | 2022-11-14  | 2024-03-28  | HR_SYSTEM     |
| LINK_EMP001_MGR_CURR | MD5_EMP001    | MD5_EMP005   | 2022-11-15  | 9999-12-31  | 2024-03-28  | HR_SYSTEM     |
| LINK_EMP002_MGR      | MD5_EMP002    | MD5_EMP010   | 2023-02-01  | 9999-12-31  | 2024-03-28  | HR_SYSTEM     |

## Hub Manager Table

| manager_hkey | manager_id | source_system | load_date   | record_source |
|-------------|------------|---------------|-------------|---------------|
| MD5_EMP007  | EMP007     | HR_SYSTEM     | 2024-03-28  | HR_IMPORT     |
| MD5_EMP010  | EMP010     | HR_SYSTEM     | 2024-03-28  | HR_IMPORT     |

## Additional Notes

1. `MD5_` prefix represents MD5 hash of the business key
2. `HASH_` prefix represents hash differential for change tracking
3. `9999-12-31` represents an active, ongoing record
4. Sample data maintains the relationships from previous examples
5. Competency data stored as JSON in performance satellite
