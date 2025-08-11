# Authentication Tests

## Test Scenarios and Cases

### 1. User Registration

#### Test Case: AUTH-001 - Student Registration Success
**Description**: Verify that a new student can successfully register with valid information
**Preconditions**: User is on the signup page, no existing user with the email
**Test Steps**:
1. Navigate to signup form
2. Select "Student" role
3. Enter valid email: "student@test.com"
4. Enter valid name: "John Doe"
5. Enter valid password: "Password123!"
6. Click "Sign Up" button
**Expected Result**: User is registered successfully, redirected to student dashboard
**Test Data**: 
- Email: student@test.com
- Name: John Doe
- Password: Password123!
- Role: Student

#### Test Case: AUTH-002 - Tutor Registration Success
**Description**: Verify that a new tutor can successfully register with valid information
**Preconditions**: User is on the signup page, no existing user with the email
**Test Steps**:
1. Navigate to signup form
2. Select "Tutor" role
3. Enter valid email: "tutor@test.com"
4. Enter valid name: "Jane Smith"
5. Enter valid password: "Password123!"
6. Click "Sign Up" button
**Expected Result**: User is registered successfully, redirected to tutor profile setup
**Test Data**: 
- Email: tutor@test.com
- Name: Jane Smith
- Password: Password123!
- Role: Tutor

#### Test Case: AUTH-003 - Registration Validation - Invalid Email
**Description**: Verify that registration fails with invalid email format
**Preconditions**: User is on the signup page
**Test Steps**:
1. Enter invalid email: "invalid-email"
2. Enter valid name and password
3. Click "Sign Up" button
**Expected Result**: Error message displayed: "Please enter a valid email address"
**Test Data**: 
- Email: invalid-email
- Name: Test User
- Password: Password123!

#### Test Case: AUTH-004 - Registration Validation - Weak Password
**Description**: Verify that registration fails with weak password
**Preconditions**: User is on the signup page
**Test Steps**:
1. Enter valid email and name
2. Enter weak password: "123"
3. Click "Sign Up" button
**Expected Result**: Error message displayed: "Password must be at least 8 characters long"
**Test Data**: 
- Email: test@example.com
- Name: Test User
- Password: 123

#### Test Case: AUTH-005 - Registration Validation - Duplicate Email
**Description**: Verify that registration fails with existing email
**Preconditions**: User with email "existing@test.com" already exists
**Test Steps**:
1. Enter existing email: "existing@test.com"
2. Enter valid name and password
3. Click "Sign Up" button
**Expected Result**: Error message displayed: "Email already registered"
**Test Data**: 
- Email: existing@test.com
- Name: Test User
- Password: Password123!

### 2. User Login

#### Test Case: AUTH-006 - Student Login Success
**Description**: Verify that existing student can login successfully
**Preconditions**: Student account exists with email "student@test.com"
**Test Steps**:
1. Navigate to login form
2. Enter email: "student@test.com"
3. Enter password: "Password123!"
4. Click "Login" button
**Expected Result**: User is logged in successfully, redirected to student dashboard
**Test Data**: 
- Email: student@test.com
- Password: Password123!

#### Test Case: AUTH-007 - Tutor Login Success
**Description**: Verify that existing tutor can login successfully
**Preconditions**: Tutor account exists with email "tutor@test.com"
**Test Steps**:
1. Navigate to login form
2. Enter email: "tutor@test.com"
3. Enter password: "Password123!"
4. Click "Login" button
**Expected Result**: User is logged in successfully, redirected to tutor dashboard
**Test Data**: 
- Email: tutor@test.com
- Password: Password123!

#### Test Case: AUTH-008 - Login Validation - Invalid Credentials
**Description**: Verify that login fails with invalid credentials
**Preconditions**: User is on the login page
**Test Steps**:
1. Enter invalid email: "nonexistent@test.com"
2. Enter invalid password: "WrongPassword"
3. Click "Login" button
**Expected Result**: Error message displayed: "Invalid email or password"
**Test Data**: 
- Email: nonexistent@test.com
- Password: WrongPassword

#### Test Case: AUTH-009 - Login Validation - Empty Fields
**Description**: Verify that login fails with empty fields
**Preconditions**: User is on the login page
**Test Steps**:
1. Leave email field empty
2. Leave password field empty
3. Click "Login" button
**Expected Result**: Error message displayed: "Please fill in all fields"
**Test Data**: 
- Email: (empty)
- Password: (empty)

### 3. Role Management

#### Test Case: AUTH-010 - Role-Based Access Control
**Description**: Verify that users can only access features appropriate for their role
**Preconditions**: Student and tutor accounts exist
**Test Steps**:
1. Login as student
2. Verify student dashboard is accessible
3. Verify tutor dashboard is not accessible
4. Login as tutor
5. Verify tutor dashboard is accessible
6. Verify student dashboard is not accessible
**Expected Result**: Users can only access role-appropriate features
**Test Data**: 
- Student: student@test.com
- Tutor: tutor@test.com

#### Test Case: AUTH-011 - Admin Role Access
**Description**: Verify that admin users have access to all features
**Preconditions**: Admin account exists
**Test Steps**:
1. Login as admin
2. Verify access to student dashboard
3. Verify access to tutor dashboard
4. Verify access to admin panel
**Expected Result**: Admin has access to all system features
**Test Data**: 
- Admin: admin@test.com

### 4. Security Tests

#### Test Case: AUTH-012 - Password Security
**Description**: Verify that passwords are properly hashed and stored securely
**Preconditions**: User registration is functional
**Test Steps**:
1. Register new user with password "SecurePass123!"
2. Check database storage
3. Verify password is hashed, not plain text
**Expected Result**: Password is stored as secure hash, not plain text
**Test Data**: 
- Password: SecurePass123!

#### Test Case: AUTH-013 - Session Management
**Description**: Verify that user sessions are properly managed
**Preconditions**: User is logged in
**Test Steps**:
1. Login as user
2. Close browser tab
3. Reopen application
4. Verify session state
**Expected Result**: Session is maintained or properly cleared based on configuration
**Test Data**: 
- User: test@example.com

#### Test Case: AUTH-014 - Logout Functionality
**Description**: Verify that logout properly clears user session
**Preconditions**: User is logged in
**Test Steps**:
1. Login as user
2. Click logout button
3. Verify redirect to login page
4. Verify session is cleared
**Expected Result**: User is logged out and session is cleared
**Test Data**: 
- User: test@example.com

### 5. Form Switching

#### Test Case: AUTH-015 - Login to Signup Switch
**Description**: Verify that users can switch from login to signup form
**Preconditions**: User is on login page
**Test Steps**:
1. On login page, click "Don't have an account? Sign up"
2. Verify form switches to signup
3. Verify all fields are empty
**Expected Result**: Form switches to signup with empty fields
**Test Data**: N/A

#### Test Case: AUTH-016 - Signup to Login Switch
**Description**: Verify that users can switch from signup to login form
**Preconditions**: User is on signup page
**Test Steps**:
1. On signup page, click "Already have an account? Login"
2. Verify form switches to login
3. Verify all fields are empty
**Expected Result**: Form switches to login with empty fields
**Test Data**: N/A

## Test Environment Setup

### Required Test Data
- Test student account: student@test.com / Password123!
- Test tutor account: tutor@test.com / Password123!
- Test admin account: admin@test.com / AdminPass123!

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667) 