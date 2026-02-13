import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-tdwnikokrs";
import imgHero from "figma:asset/e4d3057f40572bfad973946661a36c1256735730.png";
import imgImage from "figma:asset/541f42dde10bd43117eb6c2e33fc24b24c798992.png";
import imgOverlay from "figma:asset/f8ceb3eacd10a5d1b09d33dd2b33641a0b356ce3.png";
import imgBlogPostImage from "figma:asset/c10e0c108d875f7eed54546913cca223146e0931.png";
import imgBlogPostImage1 from "figma:asset/dd5673a362d4cd5636cff1776a1c31c49ca7758a.png";
import imgBlogPostImage2 from "figma:asset/9cb1752eb75934652a05ca9e7b5d88d111030af2.png";
import imgBlogPostImage3 from "figma:asset/77bf963af2ce30cfe418568fb2991e00f09b11d1.png";
import imgBlogPostImage4 from "figma:asset/2125b09a94d1023a0c33fe9b83d76e2ff3666a91.png";
import imgBlogPostImage5 from "figma:asset/01b316dfa7182fdc5c7489ab64bf42abffe95099.png";
import imgBlogPostImage6 from "figma:asset/8ccfc7b18a9b121d7f2076a39eb052599a426f73.png";
import imgBlogPostImage7 from "figma:asset/0f867ec6e46fa7f81f494a3eb973f7a9631ba25d.png";
import { imgGroup } from "./imports/svg-hbvk8";

function App() {
  const { scrollY } = useScroll();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Parallax effects
  const heroImageY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const circleRotate = useTransform(scrollY, [0, 1000], [0, 360]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const teamMembers = [
    {
      name: "Emerson Schleifer",
      role: "Co-founder & CEO",
      description: "Leads vision and growth with over a decade of experience in real estate and digital innovation.",
      image: imgBlogPostImage1,
    },
    {
      name: "Madelyn Vetrovs",
      role: "Co-founder & COO",
      description: "Oversees global operations and strategy, building seamless systems that empower agents and clients.",
      image: imgBlogPostImage2,
    },
    {
      name: "Omar Dorwart",
      role: "Chief Technology Officer",
      description: "Builds global alliances with real estate agencies, investors, and proptech innovators.",
      image: imgBlogPostImage3,
    },
    {
      name: "Sophia Nguyen",
      role: "Head of Marketing",
      description: "Crafts compelling stories and campaigns that position Kizuna as a market innovator.",
      image: imgBlogPostImage4,
    },
    {
      name: "Alex Petersen",
      role: "Head of Product",
      description: "Designs user experiences that make complex transactions feel effortless and intuitive.",
      image: imgBlogPostImage5,
    },
    {
      name: "Madelyn Vetrovs",
      role: "Lead Software Engineer",
      description: "Architects reliable systems that keep Kizuna fast, secure, and scalable across markets.",
      image: imgBlogPostImage6,
    },
    {
      name: "Nadia Petrova",
      role: "Head of Communications",
      description: "Manages media relations and ensures Kizuna's messaging resonates globally.",
      image: imgBlogPostImage7,
    },
  ];

  const principles = [
    {
      title: "Engineering First",
      description: "Infrastructure precedes events. Code precedes visibility. We build real systems that address concrete security challenges in AI.",
      icon: (
        <svg className="block size-full" fill="none" viewBox="0 0 30 30">
          <g>
            <path d={svgPaths.p22797f00} fill="#008BF6" />
            <path clipRule="evenodd" d={svgPaths.p22081980} fill="#008BF6" fillRule="evenodd" />
          </g>
        </svg>
      ),
    },
    {
      title: "Secure and Ethical by Design",
      description: "Security and ethics are architectural decisions embedded at the foundation of every AI system.",
      icon: (
        <svg className="block size-full" fill="none" viewBox="0 0 30 30">
          <g>
            <path clipRule="evenodd" d={svgPaths.p148cd0f0} fill="#008BF6" fillRule="evenodd" />
          </g>
        </svg>
      ),
    },
    {
      title: "Defensive Innovation",
      description: "We leverage AI to strengthen cyber defense, automate detection, and enhance resilience against emerging threats.",
      icon: (
        <svg className="block size-full" fill="none" viewBox="0 0 30 30">
          <g>
            <path clipRule="evenodd" d={svgPaths.pd60e9f0} fill="#008BF6" fillRule="evenodd" />
          </g>
        </svg>
      ),
    },
    {
      title: "Adversarial Resilience",
      description: "We design systems that anticipate misuse, model behavioral deviation, and implement adaptive safeguards for agentic AI environments.",
      icon: (
        <svg className="block size-full" fill="none" viewBox="0 0 30 30">
          <g>
            <path clipRule="evenodd" d={svgPaths.p2830e580} fill="#008BF6" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1e74fc00} fill="#008BF6" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p23968100} fill="#008BF6" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2bb0f400} fill="#008BF6" fillRule="evenodd" />
            <path d={svgPaths.p1ea96f80} fill="#008BF6" />
            <path d={svgPaths.p1c020900} fill="#008BF6" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isNavbarVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="max-w-[1440px] mx-auto px-[60px] py-[20px] flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-[20px]"
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#00345c] cursor-pointer hover:text-[#008bf6] transition-colors duration-200"
            >
              CYBER AI FOUNDATION
            </button>
            <div className="bg-[#00345c] h-[16px] w-px" />
            <div className="flex gap-[20px] items-center">
              {[
                { label: "ABOUT", id: "hero" },
                { label: "OUR STORY", id: "story" },
                { label: "MISSION", id: "mission" },
                { label: "PRINCIPLES", id: "principles" },
                { label: "TEAM", id: "team" },
              ].map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#00345c] tracking-[-0.14px] hover:text-[#008bf6] transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="bg-[#008bf6] px-[20px] py-[12px] rounded-[8px] font-['JetBrains_Mono:Medium',sans-serif] font-medium text-[14px] text-white uppercase flex items-center gap-[2px] group"
          >
            <span>Get in touch</span>
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-[#008bf6] p-[8px] rounded-[8px]"
            >
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p83a6400}
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[604px] overflow-hidden mt-[80px]" id="hero">
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none"
        >
          <motion.img
            style={{ y: heroImageY }}
            src={imgHero}
            alt=""
            className="absolute h-[133.71%] left-0 top-[-28.28%] w-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{ rotate: circleRotate }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.74, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-[983px] size-[407px] top-[280px]"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 407 407">
            <g opacity="0.74">
              <path d={svgPaths.p30805c20} fill="#008BF6" />
              <circle cx="203.499" cy="203.499" fill="#008BF6" r="77.1897" />
            </g>
          </svg>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute left-[829px] size-[715px] top-[157px]"
        >
          <img
            src={imgImage}
            alt=""
            className="absolute inset-0 object-cover pointer-events-none size-full"
          />
        </motion.div>

        <div className="absolute bottom-0 h-[121px] left-0 w-full">
          <img
            src={imgOverlay}
            alt=""
            className="absolute inset-0 object-cover pointer-events-none size-full"
          />
        </div>

        <div className="relative max-w-[832px] mx-auto pt-[117px] px-[60px] z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block"
          >
            <div className="flex items-center justify-center px-[12px] py-[5px] rounded-[50px] mb-[56px] bg-white/20 backdrop-blur-sm">
              <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium text-[12px] text-[#00345c] uppercase">
                ABOUT US
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] text-[#00345c] text-[60px] tracking-[-2.4px] mb-[16px]"
          >
            Building Open Infrastructure for Secure and Ethical AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] text-[24px] text-[rgba(0,52,92,0.8)] tracking-[-0.48px] mb-[56px]"
          >
            The Cyber AI Foundation empowers a global collective of researchers, engineers, and defenders to build AI systems that are secure and ethical by design and to advance AI driven defense and adversarial resilience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-[2px]"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#008bf6] px-[20px] py-[12px] h-[56px] rounded-[8px] font-['JetBrains_Mono:Medium',sans-serif] font-medium text-[14px] text-white uppercase"
            >
              Explore Our Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
              transition={{ rotate: { duration: 0.6 } }}
              className="bg-[#008bf6] p-[16px] size-[56px] rounded-[8px] flex items-center justify-center"
            >
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p295ed780}
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-[1320px] mx-auto px-[60px] py-[120px]" id="story">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-[50px]"
        >
          <div className="inline-block px-[12px] py-[5px] rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] mb-[40px] bg-gradient-to-r from-white to-[#eff4fb] relative">
            <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium text-[12px] text-[#00345c] uppercase relative">
              Our Story
            </p>
          </div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.04] text-[#00345c] text-[48px] tracking-[-1.44px]">
            Why the Cyber AI Foundation exists
          </h2>
        </motion.div>

        <div className="flex gap-[46px] items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="w-[471px] h-[536px] rounded-[14px] overflow-hidden cursor-pointer bg-gradient-to-br from-[#eff4fb] to-[#d0e7f9] flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-[80px] h-[80px] mx-auto mb-4 rounded-full bg-[#008bf6]/20 flex items-center justify-center">
                <svg className="w-[40px] h-[40px]" fill="none" viewBox="0 0 24 24" stroke="#008bf6" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <p className="text-[#00345c]/60 text-sm font-medium">Story Image</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 font-['Inter:Light',sans-serif] font-light leading-[1.4] text-[#00345c] text-[24px] tracking-[-0.48px]"
          >
            <p className="mb-4">AI systems are becoming autonomous. Their security models are not evolving at the same pace.</p>
            <p className="mb-4">Agentic AI is increasingly embedded in enterprise systems, cloud infrastructure, and critical environments. Traditional safeguards rely on static rules and reactive controls. These approaches are not sufficient for adaptive and self directed systems.</p>
            <p className="mb-4">The Cyber AI Foundation was created to address this challenge.</p>
            <p className="mb-4">Inspired by open infrastructure models, we focus on engineering first, vendor neutral, and community driven development. We build foundational systems that enable AI to be secure, controllable, and accountable by design.</p>
            <p className="mb-4">Security must be part of architecture, not an afterthought.</p>
            <p>Today the Foundation brings together contributors from academia, industry, and cyber defense to build open infrastructure for trustworthy AI systems.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-[1320px] mx-auto px-[60px] py-[80px]" id="mission">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-[40px]"
        >
          <div className="inline-block px-[12px] py-[5px] rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] bg-gradient-to-r from-white to-[#eff4fb] relative">
            <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold text-[14px] text-[#00345c] uppercase relative">
              Our Mission
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] text-[#00345c] text-[36px] text-center tracking-[-1.08px] max-w-[1096px]"
          >
            Empowering a global collective of researchers, engineers, and defenders to build AI systems that are secure and ethical by design and leverage AI in defensive innovation and adversarial resilience.
          </motion.p>
        </motion.div>
      </section>

      {/* Principles Section */}
      <section className="max-w-[1320px] mx-auto px-[60px] py-[120px]" id="principles">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[102px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-[12px] py-[5px] rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] mb-[40px] bg-gradient-to-r from-white to-[#eff4fb] relative">
              <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold text-[14px] text-[#00345c] uppercase relative">
                Our PILLARS
              </p>
            </div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.04] text-[#00345c] text-[48px] tracking-[-1.44px] max-w-[530px]">
              The principles that guide everything we do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex flex-col gap-[16px] p-[20px] rounded-[16px] bg-white hover:bg-[#eff4fb] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#eff4fb] flex items-center justify-center p-[16px] rounded-full size-[56px]"
                >
                  <div className="size-[30px]">{principle.icon}</div>
                </motion.div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] text-[#00345c] text-[24px] tracking-[-0.48px]">
                    {principle.title}
                  </h3>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[16px] text-[rgba(0,52,92,0.8)]">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-[1320px] mx-auto px-[60px] py-[120px]" id="team">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-[60px]"
        >
          <div className="inline-block px-[12px] py-[5px] rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] mb-[40px] bg-gradient-to-r from-white to-[#eff4fb] relative">
            <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold text-[14px] text-[#00345c] uppercase relative">
              Meet our team
            </p>
          </div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.04] text-[#00345c] text-[48px] tracking-[-1.44px]">
            People behind
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-[24px] group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-[316px] rounded-[6px] overflow-hidden relative cursor-pointer bg-gradient-to-br from-[#eff4fb] to-[#d0e7f9] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-[60px] h-[60px] mx-auto mb-3 rounded-full bg-[#008bf6]/20 flex items-center justify-center">
                    <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#008bf6" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-[#00345c]/60 text-sm font-medium">{member.name}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4 bg-white/90 p-[8px] rounded-full"
                >
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p2883f480} fill="#00345C" />
                  </svg>
                </motion.div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#eff4fb] rounded-[14px] p-[16px] flex flex-col gap-[20px]"
              >
                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] text-[18px] text-[#00345c]">
                      {member.name}
                    </p>
                    <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[normal] text-[12px] text-[#00345c] uppercase">
                      {member.role}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="size-[24px] cursor-pointer"
                  >
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p2883f480} fill="#00345C" />
                    </svg>
                  </motion.div>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px]">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1320px] mx-auto px-[60px] py-[120px] text-center"
        id="contact"
      >
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] text-[#00345c] text-[60px] tracking-[-2.4px] mb-[40px]">
          Contribute to secure AI infrastructure
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#008bf6] px-[32px] py-[16px] rounded-[8px] font-['JetBrains_Mono:Medium',sans-serif] font-medium text-[16px] text-white uppercase inline-flex items-center gap-[8px]"
        >
          <span>Join Us</span>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p83a6400} fill="white" fillRule="evenodd" />
            </svg>
          </motion.div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-[16px] mt-[40px]"
        >
          {[
            { icon: svgPaths.p2883f480, label: "LinkedIn" },
            { icon: svgPaths.p38deab00, label: "X" },
            { icon: svgPaths.discord, label: "Discord" },
            { icon: svgPaths.p35ef6100, label: "YouTube" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="size-[40px] flex items-center justify-center bg-[#eff4fb] rounded-full hover:bg-[#008bf6] transition-colors duration-300 group"
            >
              <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
                <path d={social.icon} fill="#00345C" className="group-hover:fill-white transition-colors duration-300" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#00345c] text-white py-[40px]">
        <div className="max-w-[1320px] mx-auto px-[60px] text-center">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] opacity-80">
            © 2026 Cyber AI Foundation. Building secure infrastructure for ethical AI.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;