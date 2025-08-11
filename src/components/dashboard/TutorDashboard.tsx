import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, DollarSign, Edit } from 'lucide-react';

const TutorDashboard: React.FC = () => {
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [bio, setBio] = useState('Experienced math tutor with 5+ years helping students excel.');
  const [rate, setRate] = useState('25');
  const [subjects, setSubjects] = useState(['Mathematics', 'Physics']);

  const mockRequests = [
    {
      id: '1',
      subject: 'Mathematics',
      grade: 'Grade 10',
      description: 'Need help with algebra and geometry',
      budget: 30,
      location: 'Downtown',
      postedAgo: '2 hours ago'
    },
    {
      id: '2',
      subject: 'Physics',
      grade: 'Grade 12',
      description: 'Struggling with mechanics and waves',
      budget: 35,
      location: 'Suburbs',
      postedAgo: '1 day ago'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Tutor Dashboard</h2>
        <Button onClick={() => setShowProfileEdit(!showProfileEdit)}>
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-sm text-gray-600">Based on 23 reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 text-green-500 mr-2" />
              Hourly Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${rate}/hr</div>
            <p className="text-sm text-gray-600">Competitive rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Badge key={subject} variant="secondary">
                  {subject}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {showProfileEdit && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <Input
              placeholder="Hourly Rate ($)"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <Button onClick={() => setShowProfileEdit(false)}>
              Save Changes
            </Button>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Available Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRequests.map((request) => (
              <div key={request.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{request.subject} - {request.grade}</h4>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {request.location} • {request.postedAgo}
                    </p>
                  </div>
                  <Badge variant="outline">${request.budget}/hr</Badge>
                </div>
                <p className="text-sm mb-3">{request.description}</p>
                <Button size="sm">Apply for This Request</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TutorDashboard;