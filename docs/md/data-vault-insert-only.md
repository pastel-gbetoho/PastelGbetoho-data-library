# Data Vault 2.0 Insert-Only Model

## Hub Employee Table (Insert-Only)

| employee_hkey | employee_id | source_system | load_date     | record_source | load_timestamp | etl_batch_id |
|--------------|-------------|---------------|---------------|---------------|----------------|--------------|
| MD5_EMP001_V1| EMP001      | HR_SYSTEM     | 2018-03-15    | HR_IMPORT     | 2024-03-28 10:00:00.001 | BATCH_2024_001 |
| MD5_EMP001_V2| EMP001      | HR_SYSTEM     | 2021-06-01    | HR_IMPORT     | 2024-03-28 10:00:00.002 | BATCH_2024_001 |
| MD5_EMP001_V3| EMP001      | HR_SYSTEM     | 2022-11-15    | HR_IMPORT     | 2024-03-28 10:00:00.003 | BATCH_2024_001 |
| MD5_EMP002_V1| EMP002      | HR_SYSTEM     | 2016-07-22    | HR_IMPORT     | 2024-03-28 10:00:00.004 | BATCH_2024_001 |
| MD5_EMP002_V2| EMP002      | HR_SYSTEM     | 2023-02-01    | HR_IMPORT     | 2024-03-28 10:00:00.005 | BATCH_2024_001 |
| MD5_EMP005_V1| EMP005      | HR_SYSTEM     | 2015-01-10    | HR_IMPORT     | 2024-03-28 10:00:00.006 | BATCH_2024_001 |
| MD5_EMP005_V2| EMP005      | HR_SYSTEM     | 2019-08-01    | HR_IMPORT     | 2024-03-28 10:00:00.007 | BATCH_2024_001 |

## Satellite Employee Personal (Insert-Only)

| employee_hkey | load_date   | load_timestamp         | hash_diff     | first_name | last_name | hire_date   | etl_batch_id   |
|--------------|-------------|------------------------|---------------|------------|-----------|-------------|----------------|
| MD5_EMP001_V1| 2018-03-15  | 2024-03-28 10:00:00.001| HASH_MICHAEL_V1 | Michael  | Chen      | 2018-03-15  | BATCH_2024_001 |
| MD5_EMP001_V2| 2022-11-15  | 2024-03-28 10:00:00.002| HASH_MICHAEL_V2 | Michael  | Chen      | 2018-03-15  | BATCH_2024_001 |
| MD5_EMP002_V1| 2016-07-22  | 2024-03-28 10:00:00.003| HASH_SARAH_V1   | Sarah    | Rodriguez | 2016-07-22  | BATCH_2024_001 |
| MD5_EMP002_V2| 2023-02-01  | 2024-03-28 10:00:00.004| HASH_SARAH_V2   | Sarah    | Rodriguez | 2016-07-22  | BATCH_2024_001 |
| MD5_EMP005_V1| 2015-01-10  | 2024-03-28 10:00:00.005| HASH_DAVID_V1   | David    | Kim       | 2015-01-10  | BATCH_2024_001 |
| MD5_EMP005_V2| 2019-08-01  | 2024-03-28 10:00:00.006| HASH_DAVID_V2   | David    | Kim       | 2015-01-10  | BATCH_2024_001 |

## Satellite Employee HR (Insert-Only)

| employee_hkey | load_date   | load_timestamp         | hash_diff     | job_title            | department    | salary | performance_rating | manager_hkey | valid_from  | valid_to    | etl_batch_id   |
|--------------|-------------|------------------------|---------------|---------------------|---------------|--------|--------------------|--------------|-----------  |-------------|----------------|
| MD5_EMP001_V1| 2021-06-01  | 2024-03-28 10:00:00.001| HASH_EMP001_HR1| Product Manager     | Product       | 125000 | 4.5                | MD5_EMP005   | 2021-06-01  | 2021-11-14  | BATCH_2024_001 |
| MD5_EMP001_V2| 2021-11-15  | 2024-03-28 10:00:00.002| HASH_EMP001_HR2| Senior Software Eng | Engineering   | 125000 | 4.5                | MD5_EMP005   | 2021-11-15  | 2022-11-14  | BATCH_2024_001 |
| MD5_EMP001_V3| 2022-11-15  | 2024-03-28 10:00:00.003| HASH_EMP001_HR3| Data Science Lead   | Data Science  | 125000 | 4.5                | MD5_EMP005   | 2022-11-15  | 9999-12-31  | BATCH_2024_001 |
| MD5_EMP002_V1| 2016-07-22  | 2024-03-28 10:00:00.004| HASH_EMP002_HR1| Marketing Manager   | Marketing     | 110000 | 4.2                | MD5_EMP007   | 2016-07-22  | 2023-01-31  | BATCH_2024_001 |
| MD5_EMP002_V2| 2023-02-01  | 2024-03-28 10:00:00.005| HASH_E