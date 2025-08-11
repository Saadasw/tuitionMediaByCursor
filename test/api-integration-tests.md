# API Integration Tests

## Test Scenarios and Cases

### 1. Authentication API

#### Test Case: API-001 - User Registration Endpoint
**Description**: Verify that user registration API works correctly
**Preconditions**: API server is running
**Test Steps**:
1. Send POST request to /api/auth/register
2. Include valid user data in request body
3. Verify response status is 201
4. Verify response contains user ID and token
5. Verify user is created in database
**Expected Result**: User registration succeeds with proper response
**Test Data**: 
```json
{
  "email": "newuser@test.com",
  "name": "New User",
  "password": "Password123!",
  "role": "student"
}
```

#### Test Case: API-002 - User Login Endpoint
**Description**: Verify that user login API works correctly
**Preconditions**: User account exists in system
**Test Steps**:
1. Send POST request to /api/auth/login
2. Include valid credentials in request body
3. Verify response status is 200
4. Verify response contains authentication token
5. Verify token is valid
**Expected Result**: User login succeeds with valid token
**Test Data**: 
```json
{
  "email": "existing@test.com",
  "password": "Password123!"
}
```

#### Test Case: API-003 - Token Validation
**Description**: Verify that authentication token validation works correctly
**Preconditions**: Valid authentication token exists
**Test Steps**:
1. Send GET request to /api/auth/verify
2. Include valid token in Authorization header
3. Verify response status is 200
4. Verify response contains user information
5. Test with invalid token
6. Verify response status is 401
**Expected Result**: Valid tokens are accepted, invalid tokens are rejected
**Test Data**: 
- Valid Token: Bearer <valid_jwt_token>
- Invalid Token: Bearer invalid_token

#### Test Case: API-004 - Password Reset Request
**Description**: Verify that password reset request API works correctly
**Preconditions**: User account exists
**Test Steps**:
1. Send POST request to /api/auth/reset-password
2. Include valid email in request body
3. Verify response status is 200
4. Verify reset email is sent
5. Test with non-existent email
6. Verify appropriate response
**Expected Result**: Password reset requests are processed correctly
**Test Data**: 
```json
{
  "email": "user@test.com"
}
```

### 2. User Management API

#### Test Case: API-005 - Get User Profile
**Description**: Verify that user profile retrieval API works correctly
**Preconditions**: User is authenticated
**Test Steps**:
1. Send GET request to /api/users/profile
2. Include valid authentication token
3. Verify response status is 200
4. Verify response contains user profile data
5. Test without authentication
6. Verify response status is 401
**Expected Result**: User profiles are retrieved correctly for authenticated users
**Test Data**: N/A

#### Test Case: API-006 - Update User Profile
**Description**: Verify that user profile update API works correctly
**Preconditions**: User is authenticated
**Test Steps**:
1. Send PUT request to /api/users/profile
2. Include valid authentication token
3. Include updated profile data in request body
4. Verify response status is 200
5. Verify profile is updated in database
6. Verify response contains updated profile
**Expected Result**: User profiles are updated successfully
**Test Data**: 
```json
{
  "name": "Updated Name",
  "email": "updated@test.com"
}
```

#### Test Case: API-007 - Change Password
**Description**: Verify that password change API works correctly
**Preconditions**: User is authenticated
**Test Steps**:
1. Send PUT request to /api/users/change-password
2. Include valid authentication token
3. Include current and new passwords
4. Verify response status is 200
5. Verify password is updated in database
6. Test with incorrect current password
7. Verify response status is 400
**Expected Result**: Passwords are changed successfully with proper validation
**Test Data**: 
```json
{
  "currentPassword": "OldPassword123!",
  "newPassword": "NewPassword456!"
}
```

### 3. Tutor Profile API

#### Test Case: API-008 - Create Tutor Profile
**Description**: Verify that tutor profile creation API works correctly
**Preconditions**: User is authenticated as tutor
**Test Steps**:
1. Send POST request to /api/tutors/profile
2. Include valid authentication token
3. Include complete profile data in request body
4. Verify response status is 201
5. Verify profile is created in database
6. Verify response contains profile ID
**Expected Result**: Tutor profiles are created successfully
**Test Data**: 
```json
{
  "subjects": ["Mathematics", "Physics"],
  "experience": 5,
  "hourlyRate": 60,
  "location": "New York, NY",
  "bio": "Experienced math and physics tutor",
  "qualifications": ["Master's in Mathematics"]
}
```

#### Test Case: API-009 - Update Tutor Profile
**Description**: Verify that tutor profile update API works correctly
**Preconditions**: Tutor profile exists
**Test Steps**:
1. Send PUT request to /api/tutors/profile
2. Include valid authentication token
3. Include updated profile data
4. Verify response status is 200
5. Verify profile is updated in database
6. Verify response contains updated profile
**Expected Result**: Tutor profiles are updated successfully
**Test Data**: 
```json
{
  "hourlyRate": 70,
  "subjects": ["Mathematics", "Physics", "Chemistry"]
}
```

#### Test Case: API-010 - Get Tutor Profile
**Description**: Verify that tutor profile retrieval API works correctly
**Preconditions**: Tutor profile exists
**Test Steps**:
1. Send GET request to /api/tutors/{tutorId}
2. Verify response status is 200
3. Verify response contains complete profile data
4. Test with non-existent tutor ID
5. Verify response status is 404
**Expected Result**: Tutor profiles are retrieved correctly
**Test Data**: 
- Valid Tutor ID: 123
- Invalid Tutor ID: 999

### 4. Student Request API

#### Test Case: API-011 - Create Student Request
**Description**: Verify that student request creation API works correctly
**Preconditions**: Student is authenticated
**Test Steps**:
1. Send POST request to /api/requests
2. Include valid authentication token
3. Include complete request data in request body
4. Verify response status is 201
5. Verify request is created in database
6. Verify response contains request ID
**Expected Result**: Student requests are created successfully
**Test Data**: 
```json
{
  "subject": "Mathematics",
  "grade": "10th Grade",
  "description": "Need help with algebra and geometry",
  "budget": 50,
  "location": "New York, NY"
}
```

#### Test Case: API-012 - Get Student Requests
**Description**: Verify that student request retrieval API works correctly
**Preconditions**: Student requests exist
**Test Steps**:
1. Send GET request to /api/requests
2. Include valid authentication token
3. Verify response status is 200
4. Verify response contains requests list
5. Test with filters (subject, location, budget)
6. Verify filtered results are correct
**Expected Result**: Student requests are retrieved correctly with filtering
**Test Data**: 
- Filter: subject=Mathematics&location=New York&maxBudget=60

#### Test Case: API-013 - Update Student Request
**Description**: Verify that student request update API works correctly
**Preconditions**: Student request exists
**Test Steps**:
1. Send PUT request to /api/requests/{requestId}
2. Include valid authentication token
3. Include updated request data
4. Verify response status is 200
5. Verify request is updated in database
6. Verify response contains updated request
**Expected Result**: Student requests are updated successfully
**Test Data**: 
```json
{
  "description": "Updated: Need help with advanced algebra",
  "budget": 60
}
```

#### Test Case: API-014 - Delete Student Request
**Description**: Verify that student request deletion API works correctly
**Preconditions**: Student request exists
**Test Steps**:
1. Send DELETE request to /api/requests/{requestId}
2. Include valid authentication token
3. Verify response status is 200
4. Verify request is deleted from database
5. Test with non-existent request ID
6. Verify response status is 404
**Expected Result**: Student requests are deleted successfully
**Test Data**: 
- Valid Request ID: 123
- Invalid Request ID: 999

### 5. Bidding API

#### Test Case: API-015 - Place Tutor Bid
**Description**: Verify that tutor bidding API works correctly
**Preconditions**: Tutor is authenticated, student request exists
**Test Steps**:
1. Send POST request to /api/bids
2. Include valid authentication token
3. Include bid data in request body
4. Verify response status is 201
5. Verify bid is created in database
6. Verify response contains bid ID
**Expected Result**: Tutor bids are created successfully
**Test Data**: 
```json
{
  "requestId": 123,
  "proposedRate": 55,
  "message": "I can help with this subject. Available evenings and weekends."
}
```

#### Test Case: API-016 - Get Request Bids
**Description**: Verify that bid retrieval API works correctly
**Preconditions**: Request has multiple bids
**Test Steps**:
1. Send GET request to /api/requests/{requestId}/bids
2. Include valid authentication token
3. Verify response status is 200
4. Verify response contains bids list
5. Verify bid data is complete
**Expected Result**: Bids are retrieved correctly for requests
**Test Data**: 
- Request ID: 123

#### Test Case: API-017 - Accept/Reject Bid
**Description**: Verify that bid acceptance/rejection API works correctly
**Preconditions**: Bid exists on request
**Test Steps**:
1. Send PUT request to /api/bids/{bidId}
2. Include valid authentication token
3. Include action (accept/reject) in request body
4. Verify response status is 200
5. Verify bid status is updated in database
6. Verify request status is updated accordingly
**Expected Result**: Bids are accepted/rejected successfully
**Test Data**: 
```json
{
  "action": "accept"
}
```

### 6. Messaging API

#### Test Case: API-018 - Send Message
**Description**: Verify that message sending API works correctly
**Preconditions**: User is authenticated
**Test Steps**:
1. Send POST request to /api/messages
2. Include valid authentication token
3. Include message data in request body
4. Verify response status is 201
5. Verify message is created in database
6. Verify response contains message ID
**Expected Result**: Messages are sent successfully
**Test Data**: 
```json
{
  "receiverId": 456,
  "content": "Hi, I'm interested in your tutoring services"
}
```

#### Test Case: API-019 - Get Conversation
**Description**: Verify that conversation retrieval API works correctly
**Preconditions**: Messages exist between users
**Test Steps**:
1. Send GET request to /api/conversations/{userId}
2. Include valid authentication token
3. Verify response status is 200
4. Verify response contains conversation list
5. Verify conversation data is complete
**Expected Result**: Conversations are retrieved correctly
**Test Data**: 
- User ID: 456

#### Test Case: API-020 - Mark Message as Read
**Description**: Verify that message read status API works correctly
**Preconditions**: Unread messages exist
**Test Steps**:
1. Send PUT request to /api/messages/{messageId}/read
2. Include valid authentication token
3. Verify response status is 200
4. Verify message is marked as read in database
5. Verify response contains updated message
**Expected Result**: Message read status is updated successfully
**Test Data**: N/A

### 7. Search and Filtering API

#### Test Case: API-021 - Tutor Search
**Description**: Verify that tutor search API works correctly
**Preconditions**: Tutor profiles exist in system
**Test Steps**:
1. Send GET request to /api/tutors/search
2. Include search parameters in query string
3. Verify response status is 200
4. Verify response contains search results
5. Test with different search criteria
6. Verify results are relevant
**Expected Result**: Tutor search returns relevant results
**Test Data**: 
- Search: ?subject=Mathematics&location=New York&maxRate=80

#### Test Case: API-022 - Request Filtering
**Description**: Verify that request filtering API works correctly
**Preconditions**: Student requests exist in system
**Test Steps**:
1. Send GET request to /api/requests
2. Include filter parameters in query string
3. Verify response status is 200
4. Verify response contains filtered results
5. Test with different filter combinations
6. Verify filters work correctly
**Expected Result**: Request filtering returns correct results
**Test Data**: 
- Filters: ?subject=Science&minBudget=30&maxBudget=100

### 8. Error Handling and Validation

#### Test Case: API-023 - Invalid Request Data
**Description**: Verify that API handles invalid request data correctly
**Preconditions**: API endpoints are accessible
**Test Steps**:
1. Send requests with missing required fields
2. Send requests with invalid data types
3. Send requests with malformed JSON
4. Verify response status is 400
5. Verify response contains error details
**Expected Result**: Invalid requests are rejected with proper error messages
**Test Data**: 
```json
{
  "email": "invalid-email",
  "password": "123"
}
```

#### Test Case: API-024 - Rate Limiting
**Description**: Verify that API implements rate limiting correctly
**Preconditions**: API has rate limiting enabled
**Test Steps**:
1. Send multiple requests rapidly
2. Verify initial requests succeed
3. Verify rate limit is reached
4. Verify response status is 429
5. Wait for rate limit reset
6. Verify requests succeed again
**Expected Result**: Rate limiting prevents abuse while allowing normal usage
**Test Data**: N/A

#### Test Case: API-025 - Server Errors
**Description**: Verify that API handles server errors gracefully
**Preconditions**: API server is running
**Test Steps**:
1. Simulate database connection failure
2. Send request to API endpoint
3. Verify response status is 500
4. Verify response contains generic error message
5. Verify no sensitive information is exposed
**Expected Result**: Server errors are handled gracefully without exposing internals
**Test Data**: N/A

### 9. Performance and Load Testing

#### Test Case: API-026 - Response Time Performance
**Description**: Verify that API response times are acceptable
**Preconditions**: API server is running normally
**Test Steps**:
1. Send multiple requests to various endpoints
2. Measure response times
3. Verify average response time is under threshold
4. Verify 95th percentile response time is acceptable
5. Test under different load conditions
**Expected Result**: API response times meet performance requirements
**Test Data**: 
- Average Response Time: <200ms
- 95th Percentile: <500ms

#### Test Case: API-027 - Concurrent User Load
**Description**: Verify that API handles concurrent users correctly
**Preconditions**: API server is running
**Test Steps**:
1. Simulate 100 concurrent users
2. Send requests from all users simultaneously
3. Verify all requests are processed
4. Verify response times remain acceptable
5. Verify no data corruption occurs
**Expected Result**: API handles concurrent load without issues
**Test Data**: 
- Concurrent Users: 100
- Response Time Threshold: <2 seconds

#### Test Case: API-028 - Database Query Performance
**Description**: Verify that database queries perform well
**Preconditions**: Database has significant data
**Test Steps**:
1. Execute complex search queries
2. Execute filtered requests
3. Execute paginated results
4. Measure query execution time
5. Verify queries use proper indexing
**Expected Result**: Database queries complete within acceptable time limits
**Test Data**: 
- Query Time Threshold: <100ms for simple queries
- Query Time Threshold: <500ms for complex queries

### 10. Security Testing

#### Test Case: API-029 - SQL Injection Prevention
**Description**: Verify that API prevents SQL injection attacks
**Preconditions**: API endpoints are accessible
**Test Steps**:
1. Send requests with SQL injection payloads
2. Verify requests are rejected
3. Verify no SQL errors are exposed
4. Verify database remains secure
5. Test various injection techniques
**Expected Result**: SQL injection attacks are prevented
**Test Data**: 
- Payload: ' OR 1=1 --
- Payload: '; DROP TABLE users; --

#### Test Case: API-030 - XSS Prevention
**Description**: Verify that API prevents XSS attacks
**Preconditions**: API endpoints are accessible
**Test Steps**:
1. Send requests with XSS payloads
2. Verify payloads are sanitized
3. Verify no script execution occurs
4. Verify stored data is safe
5. Test various XSS techniques
**Expected Result**: XSS attacks are prevented
**Test Data**: 
- Payload: <script>alert('xss')</script>
- Payload: javascript:alert('xss')

#### Test Case: API-031 - Authentication Bypass
**Description**: Verify that API cannot be bypassed without authentication
**Preconditions**: API endpoints require authentication
**Test Steps**:
1. Send requests without authentication tokens
2. Send requests with invalid tokens
3. Send requests with expired tokens
4. Verify all requests are rejected
5. Verify proper error responses
**Expected Result**: Authentication cannot be bypassed
**Test Data**: 
- No Token: (missing Authorization header)
- Invalid Token: Bearer invalid_token
- Expired Token: Bearer expired_token

## Test Environment Setup

### Required Tools
- API testing tools (Postman, Insomnia)
- Load testing tools (JMeter, K6)
- Database monitoring tools
- Network monitoring tools
- Security testing tools (OWASP ZAP)

### Test Data Requirements
- Test user accounts with various roles
- Sample data covering all entity types
- Edge case data for validation testing
- Large datasets for performance testing

### Success Criteria
- All API endpoints respond correctly
- Authentication and authorization work properly
- Error handling is graceful and secure
- Performance meets requirements
- Security measures are effective 