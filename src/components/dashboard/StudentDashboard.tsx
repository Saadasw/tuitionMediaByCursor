import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search } from 'lucide-react';
import TutorSearch from '@/components/search/TutorSearch';


const StudentDashboard: React.FC = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmitRequest = () => {
    // Mock submit - in real app would call API
    console.log('Submitting request:', { subject, grade, description, budget });
    setShowRequestForm(false);
    // Reset form
    setSubject('');
    setGrade('');
    setDescription('');
    setBudget('');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Student Dashboard</h2>
        <Button onClick={() => setShowRequestForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Post Tutor Request
        </Button>
      </div>

      {showRequestForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Post a Tutor Request</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Grade/Level"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            <Textarea
              placeholder="Describe what you need help with..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              placeholder="Budget per hour ($)"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={handleSubmitRequest}>Submit Request</Button>
              <Button variant="outline" onClick={() => setShowRequestForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Find Tutors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input placeholder="Search tutors..." />
                <Button size="sm">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Browse available tutors or post a request to have them come to you.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              No active requests. Post your first tutor request to get started!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;