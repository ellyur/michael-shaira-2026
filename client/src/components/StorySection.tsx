import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white text-foreground py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light italic mb-4 text-foreground" data-testid="text-story-title">
            Our Story
          </h2>
          <h3 className="text-2xl sm:text-3xl font-display font-light italic text-primary" data-testid="text-story-subtitle">
            10 Years to Forever
          </h3>
        </motion.div>

        {/* Story Content */}
        <motion.div 
          className="space-y-12 sm:space-y-16 font-satoshi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.2 }}
        >
          {/* Section 1: How We First Met */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-light italic text-foreground" data-testid="text-story-section-1">
              How We First Met
            </h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Their love story began simple lang—Michael and Shaira already knew each other back in 2011, but they never really paid attention to each other. They had their own worlds, their own circles, their own lives. Just familiar faces passing by.
              </p>
              <p>
                Pero destiny had its own sweet timing.
              </p>
              <p>
                Three years later, Michael unexpectedly messaged Shaira on Facebook with a simple yet meaningful, "Kumusta na?"
              </p>
              <p>
                What started as a casual chat soon turned into something magical. From constant conversations to kilig exchanges, from calling him "prinsipe" to "baby," a friendship slowly blossomed into a love that felt beautifully inevitable.
              </p>
            </div>
          </div>

          {/* Section 2: February 1, 2016 */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-light italic text-foreground" data-testid="text-story-section-2">
              Becoming Official: February 1, 2016
            </h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                February 1, 2016 marked the beginning of forever.
              </p>
              <p>
                High above the city lights inside the MOA Eye ferris wheel, Shaira said "yes," officially sealing their relationship.
              </p>
              <p>
                And as a symbol of that new chapter, Shaira gave Michael a special gift — something simple yet full of meaning. It carried the design and words "FOREVER STARTS NOW." Little did they know, that message would become a promise their hearts would keep for the next 10 years… and beyond.
              </p>
              <p>
                It was a night filled with warmth, laughter, and the unshakable feeling that this is where a beautiful forever truly begins.
              </p>
            </div>
            <img 
              src="https://res.cloudinary.com/dnlreax2z/image/upload/v1764386119/The_Day_I_Said_Yes_pshh1g.jpg" 
              alt="Becoming Official - February 1, 2016"
              className="w-full h-auto rounded-2xl shadow-lg mt-6"
              data-testid="img-story-section-2"
            />
          </div>

          {/* Section 3: 1st Anniversary */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-light italic text-foreground" data-testid="text-story-section-3">
              Our 1st Anniversary in Tagaytay
            </h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                A year later, their love had only grown deeper.
              </p>
              <p>
                To celebrate their 1st anniversary, Michael and Shaira traveled to Sky Ranch, Tagaytay, enjoying the cool air, bright lights, and each other's company. It became one of those simple yet unforgettable memories—full of joy, photos, rides, and quiet gratitude for the journey they had already begun.
              </p>
            </div>
          </div>

          {/* Section 4: First Taste of Distance */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-light italic text-foreground" data-testid="text-story-section-4">
              Our First Taste of Distance
            </h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Soon after, life brought its first big test. On August 27, 2016—Shaira's birthday—Michael had to leave for work as a seafarer.
              </p>
              <p>
                While Shaira continued teaching, Michael journeyed across oceans and foreign shores. What followed were five contracts of long-distance love—months apart, tearful goodbyes, heartfelt messages, late-night video calls, and days marked by longing and faith.
              </p>
              <p>
                It wasn't easy—may mga gabing umiiyak, may mga araw na sobrang miss nila ang isa't isa—but their love remained steady. The distance didn't weaken them; it deepened their trust, strengthened their patience, and proved how much they were willing to fight for each other.
              </p>
            </div>
          </div>

          {/* Section 5: The Proposal */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-light italic text-foreground" data-testid="text-story-section-5">
              A Proposal That Came Full Circle: December 12, 2023
            </h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                In God's perfect timing, after years of waiting and loving from afar, Michael knew it was time.
              </p>
              <p>
                On December 12, 2023, he brought Shaira back to the place where their journey officially began—the MOA Eye ferris wheel.
              </p>
              <p>
                With the same city lights glowing around them, he asked the most beautiful question: "Shaira, will you marry me?"
              </p>
              <p>
                The moment was filled with happy tears, kilig, and overwhelming love. A full-circle miracle—proof that everything they endured was worth it.
              </p>
            </div>
            <img 
              src="https://res.cloudinary.com/dnlreax2z/image/upload/v1764386118/The_Day_I_said_Yes_Again_inixqd.jpg" 
              alt="The Proposal - December 12, 2023"
              className="w-full h-auto rounded-2xl shadow-lg mt-6"
              data-testid="img-story-section-5"
            />
          </div>

          {/* Section 6: A Decade of Love */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-light italic text-foreground" data-testid="text-story-section-6">
              A Decade of Love Leading to Forever
            </h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                From a simple Facebook message to 10 extraordinary years—from Tagaytay anniversaries to overseas goodbyes, from a small gift that said "Forever Starts Now" to a proposal in the exact same place they began—every step of their journey has led them here.
              </p>
              <p>
                Now, after a decade of choosing each other through every season, they will finally say "I do" on February 21, 2026.
              </p>
              <p>
                Their story is living proof that true love, no matter how tested by time and distance, always finds its way home.
              </p>
            </div>
            <img 
              src="https://res.cloudinary.com/dnlreax2z/image/upload/v1764386066/A_Decade_of_Love_Leading_to_Forever_qjqysv.jpg" 
              alt="A Decade of Love Leading to Forever"
              className="w-full h-auto rounded-2xl shadow-lg mt-6"
              data-testid="img-story-section-6"
            />
          </div>

          {/* Section 7: The Promise Ahead */}
          <div className="space-y-6 border-t border-primary/20 pt-12 sm:pt-16">
            <h3 className="text-2xl sm:text-3xl font-display font-light italic text-foreground" data-testid="text-story-section-7">
              The Promise Ahead
            </h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                As they prepare to begin the rest of their lives together, Shaira and Michael carry the memories, strength, and lessons of the past 10 years. Guided by love, faith, and God's grace, they look forward to building a home filled with joy, growth, and endless laughter.
              </p>
              <p className="italic">
                Because for them, Forever didn't just start now—
              </p>
              <p className="italic">
                Forever started the moment they chose each other.
              </p>
              <p className="italic">
                And now, it continues… into a lifetime ahead.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
