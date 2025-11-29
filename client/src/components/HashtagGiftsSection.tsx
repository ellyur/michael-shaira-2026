import { motion } from 'framer-motion';
import { Clock, Shirt, Mail, Camera } from 'lucide-react';
const backgroundImage = 'https://res.cloudinary.com/dnlreax2z/image/upload/v1764386118/reminders_lati4r.jpg';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 mt-[-34px] mb-[-34px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="md:text-5xl font-display font-light text-primary text-[36px]" data-testid="text-reminders-header">Reminders</h2>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Black and White Background Image */}
          <div className="relative h-96 md:h-[500px]">
            <img 
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover grayscale"
              data-testid="img-gifts-background"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
          </div>

          {/* Text Card - Half on image, half outside */}
          <div className="relative -mt-32 md:-mt-40 px-4 md:px-8 pb-8">
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="font-script italic text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                data-testid="text-reminders-title"
              >
                Reminders
              </motion.h2>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {/* Be on Time */}
                <div className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-satoshi" data-testid="text-reminder-timing">
                      Please arrive 30 minutes before the ceremony begins. This ensures we can begin on time and you won't miss the special moments we've planned
                    </p>
                  </div>
                </div>

                {/* Dress Code */}
                <div className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shirt className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-satoshi" data-testid="text-reminder-attire">
                      Please refer to our Attire Guide for dress code details. Guests are requested to wear formal or semi-formal attire
                    </p>
                  </div>
                </div>

                {/* RSVP Reminder */}
                <div className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-satoshi" data-testid="text-reminder-rsvp">
                      Do not forget to RSVP to count you in
                    </p>
                  </div>
                </div>

                {/* Hashtags for Sharing */}
                <div className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-satoshi" data-testid="text-reminder-hashtags">
                      Share our joy! Use our hashtags: <span className="font-semibold text-accent">#OffiSHAIllymeantforMIKE</span> or <span className="font-semibold text-accent">#letsMIKEitforeverwithSHAI</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
