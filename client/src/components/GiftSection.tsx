import { motion } from 'framer-motion';
import { Gift, MapPin, Heart } from 'lucide-react';

const backgroundImage = 'https://res.cloudinary.com/dnlreax2z/image/upload/v1764386104/giftsection_r9o6ya.jpg';

const GiftSection = () => {
  return (
    <motion.section 
      id="gifts" 
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
          <h2 className="md:text-5xl font-display font-light text-primary text-[36px]" data-testid="text-gifts-header">Gifts</h2>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Background Image */}
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
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {/* Presence Message */}
                <div className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-satoshi" data-testid="text-gift-registry">
                      Your presence is our present. But if you wish to bless us with a gift, we gladly accept monetary contributions through the following options
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* QR Codes Section */}
              <motion.div 
                className="flex flex-col md:grid md:grid-cols-2 gap-8 mt-12 justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                {/* GCash QR */}
                <div className="flex flex-col items-center">
                  <img 
                    src="https://res.cloudinary.com/dnlreax2z/image/upload/v1764386103/GCASH_s5zmck.jpg"
                    alt="GCash QR Code"
                    className="w-full max-w-xs h-auto object-contain"
                    data-testid="img-gcash-qr"
                  />
                  <p className="text-sm md:text-base text-foreground/70 mt-4 text-center font-satoshi">GCash</p>
                </div>

                {/* MariBanK QR */}
                <div className="flex flex-col items-center">
                  <img 
                    src="https://res.cloudinary.com/dnlreax2z/image/upload/v1764386105/MARIBANK_w77gbf.jpg"
                    alt="MariBanK QR Code"
                    className="w-full max-w-xs h-auto object-contain"
                    data-testid="img-maribank-qr"
                  />
                  <p className="text-sm md:text-base text-foreground/70 mt-4 text-center font-satoshi">MariBanK</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GiftSection;
