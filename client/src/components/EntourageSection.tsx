import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    bestManBestWoman: [
      "Arnulfo Cabillan Verian, Jr.",
      "Ivan Cabillan Verian"
    ],
    parents: [
      { label: "Parents of the Groom", names: ["Leonila Cabillan Verian", "Jovito Say Cabillan (proxy)", "Arnulfo Manguiat Verian (deceased)"] },
      { label: "Parents of the Bride", names: ["Albert Baba Malicana", "Maria Christina Shappit Malicana"] }
    ],
    principalSponsors: {
      title: "Principal Sponsors",
      men: [
        "Ret. PBGen Domingo Say Cabillan",
        "Engr. Alexander Dy",
        "Almario D. Mallari",
        "Gil Magadia",
        "Capt. Al-Nair Calderon",
        "Pantaleon V. Giangan, Jr.",
        "Engr. Danila Verba",
        "Engr. Roel Christian Agustero",
        "Sonny Boy Regencia",
        "Patrick Quinn",
        "Capt. Alvin Zuñiga",
        "Leonardo Jalova"
      ],
      women: [
        "Marites Cabillan",
        "Engr. Myrna Cabillan Dy",
        "Leonora B. Mallari",
        "Elizabeth Magadia",
        "Helen Verian McLeod",
        "Marissa G. Laida",
        "Marlene Cabillan Verba",
        "Mary Benpah Agustero",
        "Myrna Agapay Regencia",
        "Abby Quinn",
        "Eleonor Bacani Zuñiga",
        "Lee Gonzales"
      ]
    },
    groomsmen: [
      "John Michael Rodriguez",
      "Patrick Mallari",
      "Jovie James Cabillan",
      "Mark Lester Mi-ot",
      "Jhone Khimber J. Cachola",
      "Roque D. Butlig"
    ],
    soloGroomsmen: [
      "Chester A. Javier",
      "Emmanuel Palermo",
      "Leoj Carl Paragsa",
      "Patrick Louis Cruzado"
    ],
    bridesmaids: [
      "Ma. Angelica N. Capuz-Amoranto",
      "Mary May De Guzman-Dalmacio",
      "Charlene Logmao",
      "Kereen Ria C. Genteroy",
      "Angel Grace F. Pendilla",
      "Samantha Loise S. Malicana"
    ],
    candleSponsors: [
      "Dario Tambalo",
      "Giselle Anne S. Malicana"
    ],
    cordSponsors: [
      "Jude Butlig",
      "Fatima Butlig-Jamora"
    ],
    veilSponsors: [
      "Sverre Huru",
      "Liezel V. Huru"
    ],
    flowerGirls: [
      "Brianne Daenerys M. Tambalo",
      "Dhonne Margaurette Mangune",
      "Mariam Agustero",
      "Jilliane Karishma M. Barnachea",
      "Rian Vrielle B. Pascual"
    ],
    coinBearer: ["Rob Isaac B. Jamora"],
    bibleBearer: ["Enzo Gabriel R. Colis"],
    ringBearer: ["Cloud V. Shimizu"],
    maidsOfHonor: [
      "Vanesa Joy C. Bautista",
      "Giselle Anne S. Malicana"
    ],
    heralds: ["Bran Aerys M. Tambalo"]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-accent/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-accent/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-primary mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Man / Best Woman */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <div className="text-center" data-testid="best-man-best-woman-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Best Man / Best Woman
            </h3>
            {entourageData.bestManBestWoman.map((name, index) => (
              <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`best-man-best-woman-${index}`}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <div className="text-center" data-testid="principal-sponsors-section">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary" data-testid="principal-sponsors-title">
              {entourageData.principalSponsors.title}
            </h3>
            <div className="max-w-3xl mx-auto">
              {/* Paired Principal Sponsors */}
              {entourageData.principalSponsors.men.map((sponsor, index) => (
                <div key={index} className="mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-right" data-testid={`principal-sponsor-man-${index}`}>
                      <p className="text-xs md:text-base lg:text-lg font-telma text-foreground">
                        {sponsor}
                      </p>
                    </div>
                    <div className="text-left" data-testid={`principal-sponsor-woman-${index}`}>
                      <p className="text-xs md:text-base lg:text-lg font-telma text-foreground">
                        {entourageData.principalSponsors.women[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids with Partners */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <div className="text-center" data-testid="groomsmen-bridesmaids-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Groomsmen & Bridesmaids
            </h3>
            <div className="max-w-3xl mx-auto">
              {/* Paired Groomsmen and Bridesmaids */}
              {entourageData.groomsmen.map((groomsman, index) => (
                <div key={index} className="mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-right" data-testid={`groomsman-${index}`}>
                      <p className="text-xs md:text-base lg:text-lg font-telma text-foreground">
                        {groomsman}
                      </p>
                    </div>
                    <div className="text-left" data-testid={`bridesmaid-${index}`}>
                      <p className="text-xs md:text-base lg:text-lg font-telma text-foreground">
                        {entourageData.bridesmaids[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Solo Groomsmen Centered */}
              <div className="mt-6">
                {entourageData.soloGroomsmen.map((name, index) => (
                  <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`solo-groomsman-${index}`}>
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Candle Sponsors & Cord Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="candle-sponsors-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Candle Sponsors
              </h3>
              {entourageData.candleSponsors.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`candle-sponsor-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="cord-sponsors-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Cord Sponsors
              </h3>
              {entourageData.cordSponsors.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`cord-sponsor-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Veil Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="text-center" data-testid="veil-sponsors-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Veil Sponsors
            </h3>
            {entourageData.veilSponsors.map((name, index) => (
              <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`veil-sponsor-${index}`}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Flower Girls */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.0 }}
        >
          <div className="text-center" data-testid="flower-girls-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Girls
            </h3>
            {entourageData.flowerGirls.map((name, index) => (
              <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`flower-girl-${index}`}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Coin Bearer, Bible Bearer, Ring Bearer */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.2 }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center" data-testid="coin-bearer-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Coin Bearer
              </h3>
              {entourageData.coinBearer.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`coin-bearer-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="bible-bearer-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Bible Bearer
              </h3>
              {entourageData.bibleBearer.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`bible-bearer-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="ring-bearer-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Ring Bearer
              </h3>
              {entourageData.ringBearer.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`ring-bearer-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Maids of Honor & Heralds */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.4 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="maids-of-honor-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Maids of Honor
              </h3>
              {entourageData.maidsOfHonor.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`maid-of-honor-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="heralds-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Heralds
              </h3>
              {entourageData.heralds.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`herald-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
