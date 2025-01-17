<https://docs.nestjs.com/>

<https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb>

Here's the **final enhanced version** of your document with all fields refined and updated, including the added section for academics and interns. Additionally, I've reviewed relationships and ensured consistency across the schema:

---

### 1. **Admin**

- **Parameters**:
  - `admin_id` (UUID) - Unique identifier for the admin.
  - `first_name` (string) - Admin's first name.
  - `last_name` (string) - Admin's last name.
  - `email` (string) - Official email address.
  - `phone_number` (string) - Contact number.
  - `role` (string) - Role of the admin (e.g., "Super Admin," "HR Admin").
  - `password` (hashed string) - Encrypted password for authentication.
  - `profile_picture` (string) - URL or path of the profile picture.
  - `status` (enum) - Active, Inactive, Suspended.
  - `created_at` (timestamp) - Record creation date.
  - `updated_at` (timestamp) - Record update date.

---

### 2. **Staff**

- **Parameters**:
  - `staff_id` (UUID) - Unique identifier for the staff.
  - `first_name` (string) - Staff's first name.
  - `last_name` (string) - Staff's last name.
  - `email` (string) - Work email address.
  - `phone_number` (string) - Personal or work contact number.
  - `gender` (string) - Gender of the staff (Male/Female/Other).
  - `date_of_birth` (date) - Staff's birth date.
  - `address` (object) - Nested object: { street, city, state, country, zip_code }.
  - `role` (string) - Job title or position.
  - `department` (string) - Department name (e.g., IT, HR, Sales).
  - `employment_type` (string) - Permanent, Contract, Intern, etc.
  - `employee_id` (string) - Employee code or number.
  - `salary_details` (object):
    - `base_salary` (number)
    - `bonuses` (number)
    - `deductions` (number)
    - `tax_id` (string)
  - `date_of_joining` (date) - Date the staff joined the organization.
  - `reporting_manager_id` (UUID) - ID of the reporting manager.
  - `status` (enum) - Active, Inactive, On Leave, Retired, Resigned.
  - `profile_picture` (string) - URL or path of the profile picture.
  - `documents` (array) - Array of objects: { document_type, document_url, expiry_date }.
  - `created_at` (timestamp)
  - `updated_at` (timestamp)

---

### 3. **Department**

- **Parameters**:
  - `department_id` (UUID) - Unique identifier for the department.
  - `name` (string) - Name of the department (e.g., IT, HR).
  - `description` (string) - Brief description of the department.
    - `head_id` (UUID) - ID of the department head.
  - `number_of_employees` (integer) - Total employees in the department.
  - `created_at` (timestamp)
  - `updated_at` (timestamp)

---

### 4. **Role**

- **Parameters**:
  - `role_id` (UUID) - Unique identifier for the role.
  - `name` (string) - Name of the role (e.g., "Software Engineer," "HR Manager").
  - `permissions` (array) - List of permissions (e.g., Create, Read, Update, Delete).
  - `description` (string) - Description of the role.
  - `salary_range` (object):
    - `min_salary` (number)
    - `max_salary` (number)
  - `created_at` (timestamp)
  - `updated_at` (timestamp)

---

### 5. **Attendance**

- **Parameters**:
  - `attendance_id` (UUID) - Unique identifier for attendance.
  - `staff_id` (UUID) - ID of the staff member.
  - `date` (date) - Date of attendance.
  - `check_in_time` (timestamp) - Time the staff checked in.
  - `check_out_time` (timestamp) - Time the staff checked out.
  - `hours_worked` (float) - Total hours worked.
  - `status` (enum) - Present, Absent, Half-Day, Work From Home.
  - `remarks` (string) - Additional remarks if any.

---

### 6. **Leave Management**

- **Parameters**:
  - `leave_id` (UUID) - Unique identifier for leave.
  - `staff_id` (UUID) - ID of the staff requesting leave.
  - `leave_type` (string) - Casual Leave, Sick Leave, Paid Leave, etc.
  - `start_date` (date) - Leave start date.
  - `end_date` (date) - Leave end date.
  - `total_days` (integer) - Total leave days requested.
  - `status` (enum) - Pending, Approved, Rejected.
  - `reason` (string) - Reason for the leave request.
  - `approver_id` (UUID) - ID of the person approving/rejecting the leave.
  - `created_at` (timestamp)
  - `updated_at` (timestamp)

---

### 7. **Payroll**

- **Parameters**:
  - `payroll_id` (UUID) - Unique identifier for payroll.
  - `staff_id` (UUID) - ID of the staff member.
  - `pay_month` (string) - Month for which payroll is generated.
  - `base_salary` (number)
  - `bonuses` (number)
  - `deductions` (number)
  - `net_salary` (number)
  - `status` (enum) - Processed, Pending, Failed.
  - `payment_date` (timestamp) - Date of payment.
  - `remarks` (string) - Additional notes.
  - `created_at` (timestamp)
  - `updated_at` (timestamp)

---

### 8. **Performance Review**

- **Parameters**:
  - `review_id` (UUID) - Unique identifier for the review.
  - `staff_id` (UUID) - ID of the staff being reviewed.
  - `review_period` (string) - e.g., "Q1 2024."
  - `reviewer_id` (UUID) - ID of the person conducting the review.
  - `ratings` (object):
    - `technical_skills` (integer)
    - `communication_skills` (integer)
    - `teamwork` (integer)
    - `punctuality` (integer)
    - `leadership` (integer)
  - `comments` (string) - Additional feedback.
  - `recommendations` (string) - Suggestions for improvement or promotion.
  - `created_at` (timestamp)
  - `updated_at` (timestamp)  

---

### 9. **Academics in the Company (Interns & Evaluation)**

- **Parameters**:
  - `intern_id` (UUID) - Unique identifier for the intern.
  - `intern_name` (string) - Name of the intern.
  - `internship_title` (string) - Title or focus of the internship.
  - `duration` (integer) - Duration of the internship in weeks/months.
  - `performance_metrics` (object):
    - `marks` (integer) - Evaluation score out of 100.
    - `feedback` (string) - Supervisor comments on performance.
  - `tasks_assigned` (array) - List of tasks or projects worked on.
  - `workload` (string) - Light, Moderate, or Heavy.
  - `reporting_manager_id` (UUID) - ID of the supervisor.

---

### Relationships

- **Admin → Staff**: One-to-Many
- **Staff → Department**: Many-to-One
- **Staff → Role**: Many-to-One
- **Attendance → Staff**: Many-to-One
- **Leave → Staff**: Many-to-One
- **Payroll → Staff**: Many-to-One
- **Performance Review → Staff**: Many-to-One
- **Academics (Interns) → Staff**: Many-to-One

---

This version has all fields and relationships clarified for efficient usage! Let me know if there's any more refinement needed. 😊
