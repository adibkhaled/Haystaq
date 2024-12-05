**Test Plan**

**1. Introduction**

The purpose of this test plan is to validate the functionality, reliability, and usability of the timesheet application as per the requirements. The goal is to ensure that all user registration, login, timesheet entry, submission, and manager review processes work as intended.

-----
**2. Scope**

The testing covers:

- User registration and login.
- Timesheet entry for the past week, including all required fields.
- Viewing and editing of timesheets by users.
- Timesheet submission for approval by users.
- Viewing, approving, or editing of timesheets by managers.
-----
**3. Objectives**

1. Verify that all functional requirements are met.
1. Ensure the system handles invalid data gracefully with appropriate error messages.
1. Validate integration between user and manager workflows.
1. Confirm system usability and performance under typical load scenarios.
-----
**4. Test Strategy**

- **Functional Testing:** Validate individual functionalities (e.g., login, timesheet entry).
- **Integration Testing:** Ensure seamless data flow between modules (e.g., timesheet submission and manager approval).
- **User Interface Testing:** Verify usability and responsiveness of the UI.
- **Performance Testing:** Ensure the system performs well under concurrent users.
- **Security Testing:** Validate user authentication and data protection (e.g., encryption of passwords).
-----
**5. Test Environment**

**Software**:

- Web Browser: Chrome, Firefox, Safari, Edge.
- Backend: Application server, database (SQL-based).

**Hardware**:

- Test devices: Desktop, laptop, and mobile devices.
- Server: Staging environment mimicking production.
-----
**6. Test Cases**

**Module: User Registration and Login**

|**Test Case ID**|**Test Description**|**Precondition**|**Steps**|**Expected Result**|
| :-: | :-: | :-: | :-: | :-: |
|TC01|Verify user registration with valid inputs|None|1\. Open registration form.<br>2\. Enter valid email and password.<br>3\. Click "Register".|Registration is successful, user is redirected to login page.|
|TC02|Verify user registration with invalid email|None|1\. Open registration form.<br>2\. Enter invalid email.<br>3\. Click "Register".|Error message is displayed: "Invalid email format."|
|TC03|Verify user login with valid credentials|User is registered.|1\. Open login page.<br>2\. Enter correct credentials.<br>3\. Click "Login".|User is logged in and redirected to dashboard.|
|TC04|Verify login fails with incorrect password|User is registered.|1\. Open login page.<br>2\. Enter correct email and incorrect password.<br>3\. Click "Login".|Error message is displayed: "Invalid credentials."|

**Module: Timesheet Entry**

|**Test Case ID**|**Test Description**|**Precondition**|**Steps**|**Expected Result**|
| :-: | :-: | :-: | :-: | :-: |
|TC05|Verify user can enter a timesheet for past week|User is logged in.|1\. Navigate to "Enter Timesheet".<br>2\. Select a date within the past week.<br>3\. Fill all fields.<br>4\. Save.|Timesheet is saved successfully.|
|TC06|Verify timesheet cannot be entered for future dates|User is logged in.|1\. Navigate to "Enter Timesheet".<br>2\. Select a future date.<br>3\. Fill all fields.<br>4\. Save.|Error message is displayed: "Invalid date."|
|TC07|Verify user can enter a timesheet for current date|User is logged in.|1\. Navigate to "Enter Timesheet".<br>2\. Select a date within the current date.<br>3\. Fill all fields.<br>4\. Save.|Timesheet is saved successfully.|
|TC08|Verify timesheet cannot be entered for invalid dates|User is logged in.|1\. Navigate to "Enter Timesheet".<br>2\. Select a invalid date (like: 30-02-2024).<br>3\. Fill all fields.<br>4\. Save.|Error message is displayed: "Invalid date."|


**Module: View and Edit Timesheets**

|**Test Case ID**|**Test Description**|**Precondition**|**Steps**|**Expected Result**|
| :-: | :-: | :-: | :-: | :-: |
|TC09|Verify user can view all timesheets|Timesheets exist.|1\. Navigate to "View Timesheets".|List of timesheets is displayed.|
|TC10|Verify user can edit a timesheet|Timesheet exists.|1\. Navigate to "View Timesheets".<br>2\. Select "Edit".<br>3\. Update fields.<br>4\. Save.|Changes are saved successfully.|

**Module: Timesheet Submission**

|**Test Case ID**|**Test Description**|**Precondition**|**Steps**|**Expected Result**|
| :-: | :-: | :-: | :-: | :-: |
|TC11|Verify user can submit timesheet|Valid timesheet exists.|1\. Navigate to "Submit Timesheets".<br>2\. Select timesheet.<br>3\. Click "Submit".|Timesheet status changes to "Pending Approval".|

**Module: Manager Actions**

|**Test Case ID**|**Test Description**|**Precondition**|**Steps**|**Expected Result**|
| :-: | :-: | :-: | :-: | :-: |
|TC12|Verify manager can approve timesheet|Timesheet is submitted.|1\. Log in as manager.<br>2\. Navigate to "Approve Timesheets".<br>3\. Select timesheet.<br>4\. Click "Approve".|Timesheet status changes to "Approved".|
|TC12|Verify no one update after approve timesheet|Timesheet is approved.|1\. Log in as user.<br>2\. Navigate to "Approve Timesheets".<br>3\. Select timesheet.<br>4\. Click "Approve".|Timesheet status changes to "Approved".|

-----
**7. Risks and Assumptions**

- **Risks:** Limited time for testing all browsers/devices.
- **Assumptions:** Test environment mimics production, and test data is representative.
-----
**10. Deliverables**

1. Test Execution Report.
1. Bug Report with priority and severity.
1. Final Test Summary.