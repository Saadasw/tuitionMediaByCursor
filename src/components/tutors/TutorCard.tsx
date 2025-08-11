import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, MapPin, DollarSign, MessageCircle } from 'lucide-react';
import { TutorProfile } from '@/types';

interface TutorCardProps {
  tutor: TutorProfile;
  onContact: (tutorId: string) => void;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor, onContact }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback>
                {tutor.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{tutor.name}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                {tutor.rating} ({tutor.experience}+ years)
                {tutor.verified && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    Verified
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-lg font-semibold text-green-600">
              <DollarSign className="h-4 w-4" />
              {tutor.hourlyRate}/hr
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-3 w-3 mr-1" />
            {tutor.location}
          </div>
          
          <div className="flex flex-wrap gap-1">
            {tutor.subjects.slice(0, 3).map((subject) => (
              <Badge key={subject} variant="outline" className="text-xs">
                {subject}
              </Badge>
            ))}
            {tutor.subjects.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tutor.subjects.length - 3} more
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-gray-700 line-clamp-2">
            {tutor.bio}
          </p>
          
          <Button 
            onClick={() => onContact(tutor.id)} 
            className="w-full"
            size="sm"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Tutor
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorCard;