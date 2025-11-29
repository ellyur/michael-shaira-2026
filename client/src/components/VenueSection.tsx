"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { LinkPreview } from '@/components/ui/link-preview';

const ceremonyImage = 'https://res.cloudinary.com/dnlreax2z/image/upload/v1764386084/ceremony_asdxeg.jpg';
const receptionImage = 'https://res.cloudinary.com/dnlreax2z/image/upload/v1764386114/reception_tzrafe.jpg';

const VenueSection = () => {
  const venues = [
    {
      title: 'Ceremony',
      name: 'Minor Basilica and Parish of St. John the Baptist',
      address: 'Tayabas City, Quezon',
      image: ceremonyImage,
      mapUrl: 'https://maps.app.goo.gl/VGzPxW7kFftwXbYM8',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15445.974039610248!2d121.13235499999999!3d14.570932000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c773bce84a39%3A0x5f601b4140fb52e1!2sMinor%20Basilica%20and%20Parish%20of%20St.%20John%20the%20Baptist-%20Taytay%2C%20Rizal%20(Diocese%20of%20Antipolo)!5e0!3m2!1sen!2sus!4v1764391493423!5m2!1sen!2sus',
      description: 'Join us as we exchange our vows of eternal love at Minor Basilica and Parish of St. John the Baptist. This sacred place will witness the beginning of Michael and Shaira\'s journey together as husband and wife.',
      details: 'The ceremony begins at 3:00 PM. Please arrive early to be seated. Dress code: Formal to Semi-Formal attire.',
      startTime: '3:00 PM',
      locationGuide: 'View on Maps →'
    },
    {
      title: 'Reception',
      name: 'Delle Sorelle',
      address: 'Taytay, Rizal',
      image: receptionImage,
      mapUrl: 'https://maps.app.goo.gl/Zbewg2aFUycZQGfm6',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15446.817752989822!2d121.125162!3d14.558887000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c75beac98537%3A0x7071162575623a3d!2sDelle%20Sorelle%20Taytay%20Rizal!5e0!3m2!1sen!2sus!4v1764391533331!5m2!1sen!2sus',
      description: 'Celebrate with us at Delle Sorelle. Following the ceremony, we invite you to join us for an evening of dining, dancing, and joyful celebration as we begin our new life together.',
      details: 'Reception begins at 6:00 PM. Dinner will be served at 7:00 PM, followed by dancing and entertainment.',
      startTime: '6:00 PM',
      locationGuide: 'View on Maps →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue bg-background py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 6.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 6.8 }}
        >
          <h1 className="text-4xl font-display font-light mb-2 text-primary" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) }}
            >
              {/* Modern Creative Container */}
              <div className="relative max-w-5xl mx-auto">
                {/* Decorative background layers */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-60" />
                <div className="absolute -inset-2 bg-card/30 backdrop-blur-sm rounded-xl" />
                
                {/* Main Content Card */}
                <div className="relative bg-card rounded-xl overflow-hidden border border-border" style={{ boxShadow: '0 10px 40px rgba(100, 150, 200, 0.3), 0 0 20px rgba(100, 150, 200, 0.2)' }}>
                  {/* Header with decorative elements */}
                  <div className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8">
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-16 h-16" style={{ boxShadow: 'inset 2px 2px 8px rgba(100, 150, 200, 0.4)' }} />
                    <div className="absolute top-0 right-0 w-16 h-16" style={{ boxShadow: 'inset -2px 2px 8px rgba(100, 150, 200, 0.4)' }} />
                    
                    <div className="text-center relative z-10">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) }}
                      >
                        <h2 className="font-display text-foreground mb-2 text-2xl md:text-3xl" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                          {venue.title}
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-8 h-px bg-primary/40" />
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <div className="w-8 h-px bg-primary/40" />
                        </div>
                        <h3 className="font-body text-primary font-semibold text-lg md:text-xl" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                          {venue.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <p className="text-sm font-body text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                            {venue.address}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Image Section with Modern Frame */}
                  <div className="relative p-6 md:p-8">
                    <div className="relative overflow-hidden rounded-lg">
                      {/* Image frame decoration */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
                      <img
                        src={venue.image}
                        alt={venue.name}
                        className="relative w-full h-72 md:h-96 object-cover rounded-lg shadow-xl"
                        loading="lazy"
                        data-testid={`img-${venue.title.toLowerCase()}-venue`}
                      />
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 px-6 md:px-8 pb-6">
                    {/* Left Column - Description */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">About the Venue</h4>
                      </div>
                      <p className="text-base font-body leading-relaxed text-foreground/90 font-satoshi" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                        {venue.description}
                      </p>
                      <p className="text-sm font-body text-foreground/80 italic font-satoshi" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                        {venue.details}
                      </p>
                    </div>

                    {/* Right Column - Map */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Location Map</h4>
                      </div>
                      <div className="relative w-full h-64 rounded-lg overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(100, 150, 200, 0.25), 0 0 16px rgba(100, 150, 200, 0.15)' }}>
                        <iframe
                          src={venue.mapEmbed}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          data-testid={`map-${venue.title.toLowerCase()}-embed`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer with Time and Directions */}
                  <div className="relative bg-gradient-to-r from-primary/5 via-transparent to-primary/5 px-6 md:px-8 py-6 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-primary/20">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Start Time</p>
                          <p className="text-base font-semibold text-foreground" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                            {venue.startTime}
                          </p>
                        </div>
                      </div>
                      <a
                        href={venue.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                        data-testid={`button-${venue.title.toLowerCase()}-location`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Get Directions</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VenueSection;