import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter } from 'lucide-react';
import TutorCard from '@/components/tutors/TutorCard';
import { TutorProfile } from '@/types';

const TutorSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [maxRate, setMaxRate] = useState('');

  // Mock tutor data
  const mockTutors: TutorProfile[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'tutor',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      experience: 5,
      hourlyRate: 30,
      location: 'Downtown',
      bio: 'Experienced STEM tutor with a passion for helping students excel in math and science.',
      qualifications: ['MSc Mathematics', 'Teaching Certificate'],
      rating: 4.8,
      verified: true
    },
    {
      id: '2',
      name: 'Mike Chen',
      email: 'mike@example.com',
      role: 'tutor',
      subjects: ['English', 'History', 'Literature'],
      experience: 3,
      hourlyRate: 25,
      location: 'Suburbs',
      bio: 'English literature graduate specializing in essay writing and reading comprehension.',
      qualifications: ['BA English Literature'],
      rating: 4.6,
      verified: false
    }
  ];

  const handleContact = (tutorId: string) => {
    console.log('Contacting tutor:', tutorId);
    // In real app, would open messaging interface
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="h-5 w-5 mr-2" />
            Find Tutors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Search tutors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Max rate ($/hr)"
              type="number"
              value={maxRate}
              onChange={(e) => setMaxRate(e.target.value)}
            />
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTutors.map((tutor) => (
          <TutorCard
            key={tutor.id}
            tutor={tutor}
            onContact={handleContact}
          />
        ))}
      </div>
    </div>
  );
};

export default TutorSearch;