import { motion } from 'framer-motion';
import flower9 from '@assets/flower9_1759741371017.png';
import flower3 from '@assets/flower3_1759741371015.png';
import dressCodeImage from '@assets/dresscode_1762266869903.png';

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-display font-light italic mb-8 text-[48px] text-[#3d668f]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Attire Guide Images */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principal Sponsors */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 8.3 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://res.cloudinary.com/dnlreax2z/image/upload/v1764386114/Principal_sponsors_wgvjay.jpg" 
                alt="Principal Sponsors Attire Guide" 
                className="w-full h-full object-cover"
                data-testid="img-principal-sponsors-attire"
              />
            </motion.div>

            {/* Guest Attire */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 8.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://res.cloudinary.com/dnlreax2z/image/upload/v1764386103/Guest_kmdyq9.jpg" 
                alt="Guest Attire Guide" 
                className="w-full h-full object-cover"
                data-testid="img-guest-attire"
              />
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
