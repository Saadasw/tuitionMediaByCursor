# Tutor Functionality Tests

## Test Scenarios and Cases

### 1. Tutor Dashboard

#### Test Case: TUTOR-001 - Dashboard Loading
**Description**: Verify that tutor dashboard loads correctly with user information
**Preconditions**: Tutor is logged in
**Test Steps**:
1. Login as tutor
2. Navigate to tutor dashboard
3. Verify dashboard header displays tutor name
4. Verify all dashboard sections are visible
**Expected Result**: Dashboard loads with correct tutor information and all sections visible
**Test Data**: 
- Tutor: tutor@test.com
- Name: Jane Smith

#### Test Case: TUTOR-002 - Dashboard Navigation
**Description**: Verify that all dashboard navigation elements are functional
**Preconditions**: Tutor is on dashboard
**Test Steps**:
1. Click on "My Profile" section
2. Click on "Browse Requests" section
3. Click on "My Bids" section
4. Click on "Messages" section
5. Click on "Earnings" section
**Expected Result**: All navigation elements respond correctly and show appropriate content
**Test Data**: N/A

#### Test Case: TUTOR-003 - Dashboard Statistics Display
**Description**: Verify that dashboard displays correct statistics
**Preconditions**: Tutor has completed sessions and active bids
**Test Steps**:
1. View dashboard statistics section
2. Verify total earnings display
3. Verify completed sessions count
4. Verify active bids count
5. Verify average rating display
**Expected Result**: All statistics are displayed correctly with accurate data
**Test Data**: N/A

### 2. Profile Management

#### Test Case: TUTOR-004 - Create Tutor Profile
**Description**: Verify that new tutor can create complete profile
**Preconditions**: Tutor is registered but profile not yet created
**Test Steps**:
1. Navigate to profile creation
2. Enter subjects: ["Mathematics", "Physics"]
3. Enter experience: "5 years"
4. Enter hourly rate: "60"
5. Enter location: "New York, NY"
6. Enter bio: "Experienced math and physics tutor"
7. Enter qualifications: ["Master's in Mathematics", "Teaching Certificate"]
8. Click "Save Profile" button
**Expected Result**: Profile is created successfully, all information saved
**Test Data**: 
- Subjects: Mathematics, Physics
- Experience: 5 years
- Hourly Rate: $60/hour
- Location: New York, NY
- Bio: Experienced math and physics tutor
- Qualifications: Master's in Mathematics, Teaching Certificate

#### Test Case: TUTOR-005 - Edit Tutor Profile
**Description**: Verify that tutor can edit their profile information
**Preconditions**: Tutor has existing profile
**Test Steps**:
1. Navigate to profile settings
2. Update hourly rate: "70"
3. Update bio: "Updated: Experienced math and physics tutor with 5+ years"
4. Add new subject: "Chemistry"
5. Click "Save Changes" button
**Expected Result**: Profile is updated successfully, changes are reflected
**Test Data**: 
- Original Rate: $60/hour
- Updated Rate: $70/hour
- Original Bio: Experienced math and physics tutor
- Updated Bio: Updated: Experienced math and physics tutor with 5+ years
- New Subject: Chemistry

#### Test Case: TUTOR-006 - Profile Validation - Required Fields
**Description**: Verify that profile form validates required fields
**Preconditions**: Tutor is editing profile
**Test Steps**:
1. Clear subjects field
2. Clear experience field
3. Clear hourly rate field
4. Clear location field
5. Click "Save Changes" button
**Expected Result**: Error messages displayed for all required fields
**Test Data**: 
- Subjects: (empty)
- Experience: (empty)
- Hourly Rate: (empty)
- Location: (empty)

#### Test Case: TUTOR-007 - Profile Validation - Hourly Rate Range
**Description**: Verify that hourly rate accepts valid price ranges
**Preconditions**: Tutor is editing profile
**Test Steps**:
1. Enter hourly rate: "0"
2. Click "Save Changes" button
3. Enter hourly rate: "500"
4. Click "Save Changes" button
**Expected Result**: Error message for rate too low, success for reasonable rate
**Test Data**: 
- Hourly Rate: $0, then $500

#### Test Case: TUTOR-008 - Upload Profile Picture
**Description**: Verify that tutor can upload profile picture
**Preconditions**: Tutor is editing profile
**Test Steps**:
1. Navigate to profile picture section
2. Click "Upload Photo" button
3. Select image file (JPG, PNG)
4. Click "Save" button
**Expected Result**: Profile picture is uploaded and displayed
**Test Data**: 
- Image Format: JPG, PNG
- Max Size: 5MB

### 3. Student Request Browsing

#### Test Case: TUTOR-009 - Browse Available Requests
**Description**: Verify that tutor can view available student requests
**Preconditions**: Tutor is logged in, student requests exist
**Test Steps**:
1. Navigate to "Browse Requests" section
2. Verify requests list is displayed
3. Check request details: subject, grade, description, budget
4. Verify pagination if multiple requests
**Expected Result**: All available requests are displayed with correct information
**Test Data**: N/A

#### Test Case: TUTOR-010 - Filter Requests by Subject
**Description**: Verify that tutor can filter requests by subject
**Preconditions**: Tutor is browsing requests
**Test Steps**:
1. Set subject filter: "Mathematics"
2. Click "Apply Filter" button
3. Verify only math requests are displayed
4. Clear filter and verify all requests shown
**Expected Result**: Filter works correctly, showing only relevant requests
**Test Data**: 
- Subject Filter: Mathematics

#### Test Case: TUTOR-011 - Filter Requests by Location
**Description**: Verify that tutor can filter requests by location
**Preconditions**: Tutor is browsing requests
**Test Steps**:
1. Set location filter: "New York"
2. Click "Apply Filter" button
3. Verify only local requests are displayed
4. Clear filter and verify all requests shown
**Expected Result**: Filter works correctly, showing only local requests
**Test Data**: 
- Location Filter: New York

#### Test Case: TUTOR-012 - Filter Requests by Budget Range
**Description**: Verify that tutor can filter requests by budget range
**Preconditions**: Tutor is browsing requests
**Test Steps**:
1. Set budget range: $40-$80
2. Click "Apply Filter" button
3. Verify only requests within budget range are displayed
4. Clear filter and verify all requests shown
**Expected Result**: Filter works correctly, showing only requests within budget range
**Test Data**: 
- Budget Range: $40-$80

### 4. Bidding System

#### Test Case: TUTOR-013 - Place Bid on Request
**Description**: Verify that tutor can place bid on student request
**Preconditions**: Tutor is viewing available request
**Test Steps**:
1. View student request details
2. Click "Place Bid" button
3. Enter proposed rate: "55"
4. Enter message: "I can help with this subject. Available evenings and weekends."
5. Click "Submit Bid" button
**Expected Result**: Bid is placed successfully, confirmation displayed
**Test Data**: 
- Proposed Rate: $55/hour
- Message: I can help with this subject. Available evenings and weekends.

#### Test Case: TUTOR-014 - Bid Validation - Rate Range
**Description**: Verify that bid rate validation works correctly
**Preconditions**: Tutor is placing bid
**Test Steps**:
1. Enter rate below student's budget: "20"
2. Click "Submit Bid" button
3. Enter rate above reasonable limit: "200"
4. Click "Submit Bid" button
**Expected Result**: Error messages for invalid rates, success for reasonable rates
**Test Data**: 
- Low Rate: $20/hour
- High Rate: $200/hour

#### Test Case: TUTOR-015 - Bid Validation - Message Length
**Description**: Verify that bid message validation works correctly
**Preconditions**: Tutor is placing bid
**Test Steps**:
1. Leave message field empty
2. Click "Submit Bid" button
3. Enter very long message (500+ characters)
4. Click "Submit Bid" button
**Expected Result**: Error message for empty message, success for reasonable length
**Test Data**: 
- Empty Message: (empty)
- Long Message: 500+ characters

#### Test Case: TUTOR-016 - Edit Existing Bid
**Description**: Verify that tutor can edit their existing bid
**Preconditions**: Tutor has placed bid on request
**Test Steps**:
1. Navigate to "My Bids" section
2. Find existing bid
3. Click "Edit Bid" button
4. Update rate: "60"
5. Update message: "Updated: Available weekdays and weekends"
6. Click "Save Changes" button
**Expected Result**: Bid is updated successfully, changes are reflected
**Test Data**: 
- Original Rate: $55/hour
- Updated Rate: $60/hour
- Original Message: I can help with this subject. Available evenings and weekends.
- Updated Message: Updated: Available weekdays and weekends

#### Test Case: TUTOR-017 - Withdraw Bid
**Description**: Verify that tutor can withdraw their bid
**Preconditions**: Tutor has active bid on request
**Test Steps**:
1. Navigate to "My Bids" section
2. Find active bid
3. Click "Withdraw Bid" button
4. Confirm withdrawal in dialog
**Expected Result**: Bid is withdrawn successfully, removed from active bids
**Test Data**: N/A

### 5. Communication and Messaging

#### Test Case: TUTOR-018 - Send Message to Student
**Description**: Verify that tutor can send messages to students
**Preconditions**: Tutor is viewing student request or profile
**Test Steps**:
1. View student request/profile
2. Click "Send Message" button
3. Enter message: "Hi, I'm interested in helping you with this subject"
4. Click "Send" button
**Expected Result**: Message is sent successfully, confirmation displayed
**Test Data**: 
- Message: Hi, I'm interested in helping you with this subject

#### Test Case: TUTOR-019 - View Message Thread
**Description**: Verify that tutor can view conversation history with student
**Preconditions**: Tutor has exchanged messages with student
**Test Steps**:
1. Navigate to "Messages" section
2. Click on student conversation
3. Verify message thread is displayed
4. Check message timestamps and content
**Expected Result**: Complete message thread is displayed with correct information
**Test Data**: N/A

#### Test Case: TUTOR-020 - Reply to Student Message
**Description**: Verify that tutor can reply to student messages
**Preconditions**: Tutor has received message from student
**Test Steps**:
1. Open message thread with student
2. Type reply: "I'm available this weekend. What time works for you?"
3. Click "Send" button
**Expected Result**: Reply is sent successfully, appears in conversation
**Test Data**: 
- Reply: I'm available this weekend. What time works for you?

### 6. Session Management

#### Test Case: TUTOR-021 - Accept Session Request
**Description**: Verify that tutor can accept session requests from students
**Preconditions**: Student has accepted tutor's bid
**Test Steps**:
1. Receive session request notification
2. View session details
3. Click "Accept Session" button
4. Confirm acceptance
**Expected Result**: Session is accepted, status changes to "Confirmed"
**Test Data**: N/A

#### Test Case: TUTOR-022 - Schedule Session
**Description**: Verify that tutor can schedule session with student
**Preconditions**: Session is accepted by both parties
**Test Steps**:
1. Navigate to session details
2. Click "Schedule Session" button
3. Select date: "2024-02-15"
4. Select time: "2:00 PM"
5. Select duration: "2 hours"
6. Click "Confirm Schedule" button
**Expected Result**: Session is scheduled successfully, confirmation displayed
**Test Data**: 
- Date: 2024-02-15
- Time: 2:00 PM
- Duration: 2 hours

#### Test Case: TUTOR-023 - Complete Session
**Description**: Verify that tutor can mark session as completed
**Preconditions**: Scheduled session has occurred
**Test Steps**:
1. Navigate to session details
2. Click "Complete Session" button
3. Enter session notes: "Covered algebra basics and geometry concepts"
4. Click "Mark Complete" button
**Expected Result**: Session is marked complete, available for payment
**Test Data**: 
- Session Notes: Covered algebra basics and geometry concepts

### 7. Earnings and Payments

#### Test Case: TUTOR-024 - View Earnings Summary
**Description**: Verify that tutor can view earnings summary
**Preconditions**: Tutor has completed sessions
**Test Steps**:
1. Navigate to "Earnings" section
2. Verify total earnings display
3. Verify completed sessions list
4. Verify pending payments
5. Verify payment history
**Expected Result**: All earnings information is displayed correctly
**Test Data**: N/A

#### Test Case: TUTOR-025 - Request Payment
**Description**: Verify that tutor can request payment for completed sessions
**Preconditions**: Tutor has completed session pending payment
**Test Steps**:
1. Navigate to completed session
2. Click "Request Payment" button
3. Verify payment amount
4. Click "Confirm Request" button
**Expected Result**: Payment request is submitted successfully
**Test Data**: N/A

### 8. Reviews and Ratings

#### Test Case: TUTOR-026 - View Student Reviews
**Description**: Verify that tutor can view reviews from students
**Preconditions**: Tutor has received reviews from students
**Test Steps**:
1. Navigate to profile section
2. View reviews and ratings
3. Check review content and ratings
4. Verify average rating calculation
**Expected Result**: All reviews and ratings are displayed correctly
**Test Data**: N/A

#### Test Case: TUTOR-027 - Respond to Review
**Description**: Verify that tutor can respond to student reviews
**Preconditions**: Tutor has received review from student
**Test Steps**:
1. View student review
2. Click "Respond" button
3. Enter response: "Thank you for the feedback. I'm glad I could help!"
4. Click "Submit Response" button
**Expected Result**: Response is posted successfully, visible below review
**Test Data**: 
- Response: Thank you for the feedback. I'm glad I could help!

### 9. Notifications and Alerts

#### Test Case: TUTOR-028 - New Request Notification
**Description**: Verify that tutor receives notification for new relevant requests
**Preconditions**: Tutor has profile with specific subjects
**Test Steps**:
1. Have student create request matching tutor's subjects
2. Check tutor dashboard for notification
3. Verify notification content and link
**Expected Result**: Notification appears for new relevant request
**Test Data**: N/A

#### Test Case: TUTOR-029 - Bid Response Notification
**Description**: Verify that tutor receives notification for bid responses
**Preconditions**: Tutor has placed bid on student request
**Test Steps**:
1. Have student accept/reject tutor's bid
2. Check tutor dashboard for notification
3. Verify notification content and link
**Expected Result**: Notification appears for bid response
**Test Data**: N/A

#### Test Case: TUTOR-030 - Message Notification
**Description**: Verify that tutor receives notification for new messages
**Preconditions**: Tutor has ongoing conversation with student
**Test Steps**:
1. Have student send new message
2. Check tutor dashboard for notification
3. Verify notification content and link
**Expected Result**: Notification appears for new message
**Test Data**: N/A

## Test Environment Setup

### Required Test Data
- Test tutor account: tutor@test.com / Password123!
- Test student accounts with various requests
- Sample completed sessions and reviews
- Sample messages and conversations

### Test Scenarios
- New tutor with no profile
- Experienced tutor with active sessions
- Tutor with multiple bids and requests
- Tutor with completed sessions and earnings

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667) 