import svgPaths from "./svg-tdwnikokrs";
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
import imgBlogPostImage8 from "figma:asset/e533bcdd845d122a9bba7b662c80a2c65a609265.png";
import { imgGroup } from "./svg-hbvk8";

function Group7() {
  return (
    <div className="absolute left-[983px] size-[407px] top-[280px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 407 407">
        <g id="Group 7" opacity="0.74">
          <path d={svgPaths.p30805c20} fill="var(--fill-0, #008BF6)" id="Ellipse 7" />
          <circle cx="203.499" cy="203.499" fill="var(--fill-0, #008BF6)" id="Ellipse 8" r="77.1897" />
        </g>
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[604px] left-0 overflow-clip top-0 w-[1440px]" data-name="hero">
      <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.71%] left-0 max-w-none top-[-28.28%] w-full" src={imgHero} />
      </div>
      <Group7 />
      <div className="absolute left-[829px] size-[715px] top-[157px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-60 pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute bottom-0 h-[121px] left-0 w-[1440px]" data-name="Overlay">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOverlay} />
      </div>
    </div>
  );
}

function FictionalCompanyLogo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0" data-name="Fictional company logo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#00345c] text-[20px]">CYBER AI FOUNDATION</p>
    </div>
  );
}

function AboutLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="About Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#00345c] text-[14px] tracking-[-0.14px]">ABOUT</p>
    </div>
  );
}

function PropertiesLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Properties Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#00345c] text-[14px] tracking-[-0.14px]">PROPERTIES</p>
    </div>
  );
}

function BlogLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Blog Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#00345c] text-[14px] tracking-[-0.14px]">BLOG</p>
    </div>
  );
}

function AgentsLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Agents Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#00345c] text-[14px] tracking-[-0.14px]">AGENTS</p>
    </div>
  );
}

function AgentsLink1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Agents Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#00345c] text-[14px] tracking-[-0.14px]">SUBMIT PROPERTY</p>
    </div>
  );
}

function FictionalCompanyLogo1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-name="Fictional company logo">
      <AboutLink />
      <PropertiesLink />
      <BlogLink />
      <AgentsLink />
      <AgentsLink1 />
    </div>
  );
}

function NavbarLinks() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Navbar Links">
      <FictionalCompanyLogo />
      <div className="bg-[#00345c] h-[16px] shrink-0 w-px" data-name="Navbar Logo Background" />
      <FictionalCompanyLogo1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#008bf6] content-stretch flex h-full items-center justify-center px-[14px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-white uppercase">Get in touch</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heroicons-solid/arrow-long-right">
          <path clipRule="evenodd" d={svgPaths.p83a6400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <div className="bg-[#008bf6] content-stretch flex h-full items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 w-[42px]" data-name="Arrow">
      <ArrowIcon />
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="content-stretch flex gap-[2px] h-[42px] items-center relative shrink-0" data-name="Primary button">
      <Button />
      <Arrow />
    </div>
  );
}

function Navbar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[60px] items-center justify-between left-[calc(50%+35px)] min-w-[1440px] pb-[5px] pt-[20px] px-[60px] top-0 w-[1440px]" data-name="Navbar">
      <NavbarLinks />
      <PrimaryButton />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute left-[60px] size-[29px] top-[23px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="Group 7">
          <path d={svgPaths.p3228f800} fill="var(--fill-0, #00345C)" id="Ellipse 7" />
          <circle cx="14.5" cy="14.5" fill="var(--fill-0, #00345C)" id="Ellipse 8" r="5.5" />
        </g>
      </svg>
    </div>
  );
}

function Pill() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[50px] shrink-0" data-name="Pill">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-20 pointer-events-none rounded-[50px] size-full" src={imgHero} />
      <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#00345c] text-[12px] text-center uppercase">ABOUT US</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#00345c] text-[60px] tracking-[-2.4px] w-full">Building Open Infrastructure for Secure and Ethical AI</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[24px] text-[rgba(0,52,92,0.8)] tracking-[-0.48px] w-full">The Cyber AI Foundation empowers a global collective of researchers, engineers, and defenders to build AI systems that are secure and ethical by design and to advance AI driven defense and adversarial resilience.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#008bf6] content-stretch flex h-[56px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-white uppercase">Explore Our Projects</p>
    </div>
  );
}

function HeroiconsSolidPlay() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="heroicons-solid/play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heroicons-solid/play">
          <path clipRule="evenodd" d={svgPaths.p295ed780} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle 511 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="bg-[#008bf6] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 size-[56px]" data-name="Arrow">
      <HeroiconsSolidPlay />
    </div>
  );
}

function PrimaryButton1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Primary button">
      <Button1 />
      <Arrow1 />
    </div>
  );
}

function BlogHeaderContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start justify-center left-[calc(50%-244px)] top-[197px] w-[832px]" data-name="Blog Header Container">
      <Pill />
      <Container />
      <PrimaryButton1 />
    </div>
  );
}

function Pill1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] shrink-0" data-name="Pill">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgHero} />
      <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#00345c] text-[12px] text-center uppercase">Our Story</p>
    </div>
  );
}

function BlogHeaderContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0" data-name="Blog Header Container">
      <Pill1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.04] not-italic relative shrink-0 text-[#00345c] text-[48px] tracking-[-1.44px]">Why the Cyber AI Foundation exists</p>
    </div>
  );
}

function BlogPostImage() {
  return (
    <div className="h-[536px] relative rounded-[14px] shrink-0 w-[471px]" data-name="Blog Post Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgBlogPostImage} />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="font-['Inter:Light',sans-serif] font-light leading-[1.4] not-italic relative shrink-0 text-[#00345c] text-[24px] tracking-[-0.48px] w-full whitespace-pre-wrap">
        <p className="mb-0">AI systems are becoming autonomous. Their security models are not evolving at the same pace.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Agentic AI is increasingly embedded in enterprise systems, cloud infrastructure, and critical environments. Traditional safeguards rely on static rules and reactive controls. These approaches are not sufficient for adaptive and self directed systems.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">The Cyber AI Foundation was created to address this challenge.</p>
        <p className="mb-0">Inspired by open infrastructure models, we focus on engineering first, vendor neutral, and community driven development. We build foundational systems that enable AI to be secure, controllable, and accountable by design.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Security must be part of architecture, not an afterthought.</p>
        <p>Today the Foundation brings together contributors from academia, industry, and cyber defense to build open infrastructure for trustworthy AI systems.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[46px] items-start relative shrink-0 w-full" data-name="Container">
      <BlogPostImage />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[50px] items-start left-1/2 top-[786px] w-[1320px]" data-name="Container">
      <BlogHeaderContainer1 />
      <Container2 />
    </div>
  );
}

function Pill2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] shrink-0" data-name="Pill">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgHero} />
      <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00345c] text-[14px] text-center uppercase">Our Mission</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[1086px]" data-name="Container">
      <Pill2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#00345c] text-[36px] text-center tracking-[-1.08px] w-[1096px] whitespace-pre-wrap">Empowering a global collective of researchers, engineers, and defenders to build AI systems that are secure and ethical by design and leverage AI in defensive innovation and adversarial resilience.</p>
    </div>
  );
}

function Pill3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] shrink-0" data-name="Pill">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgHero} />
      <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00345c] text-[14px] text-center uppercase">Our Mission</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[40px] items-start ml-0 mt-0 relative row-1 w-[530px]" data-name="Container">
      <Pill3 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.04] min-w-full not-italic relative shrink-0 text-[#00345c] text-[48px] tracking-[-1.44px] w-[min-content] whitespace-pre-wrap">The principles that guide everything we do</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icon">
          <g id="Union">
            <path d={svgPaths.p22797f00} fill="var(--fill-0, #008BF6)" />
            <path clipRule="evenodd" d={svgPaths.p22081980} fill="var(--fill-0, #008BF6)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eff4fb] content-stretch flex items-center justify-center p-[16px] relative rounded-[1440px] shrink-0 size-[56px]" data-name="Background">
      <Icon />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#00345c] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Engineering First</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-[rgba(0,52,92,0.8)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Infrastructure precedes events. Code precedes visibility. We build real systems that address concrete security challenges in AI.</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[321px]" data-name="Border">
      <Background />
      <Container9 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p148cd0f0} fill="var(--fill-0, #008BF6)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#eff4fb] content-stretch flex items-center justify-center p-[16px] relative rounded-[1440px] shrink-0 size-[56px]" data-name="Background">
      <Icon1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#00345c] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Secure and Ethical by Design</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-[rgba(0,52,92,0.8)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Security and ethics are architectural decisions embedded at the foundation of every AI system.</p>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[321px]" data-name="Border">
      <Background1 />
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[46px] items-center relative shrink-0 w-full" data-name="Container">
      <Border />
      <Border1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pd60e9f0} fill="var(--fill-0, #008BF6)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#eff4fb] content-stretch flex items-center justify-center p-[16px] relative rounded-[1440px] shrink-0 size-[56px]" data-name="Background">
      <Icon2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#00345c] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Defensive Innovation</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-[rgba(0,52,92,0.8)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">We leverage AI to strengthen cyber defense, automate detection, and enhance resilience against emerging threats.</p>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[321px]" data-name="Border">
      <Background2 />
      <Container12 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icon">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2830e580} fill="var(--fill-0, #008BF6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1e74fc00} fill="var(--fill-0, #008BF6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p23968100} fill="var(--fill-0, #008BF6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2bb0f400} fill="var(--fill-0, #008BF6)" fillRule="evenodd" />
            <path d={svgPaths.p1ea96f80} fill="var(--fill-0, #008BF6)" />
            <path d={svgPaths.p1c020900} fill="var(--fill-0, #008BF6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#eff4fb] content-stretch flex items-center justify-center p-[16px] relative rounded-[1440px] shrink-0 size-[56px]" data-name="Background">
      <Icon3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#00345c] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Adversarial Resilience</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-[rgba(0,52,92,0.8)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">We design systems that anticipate misuse, model behavioral deviation, and implement adaptive safeguards for agentic AI environments.</p>
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[321px]" data-name="Border">
      <Background3 />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[46px] items-center relative shrink-0 w-full" data-name="Container">
      <Border2 />
      <Border3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start ml-[632px] mt-0 relative row-1 w-[688px]" data-name="Container">
      <Container8 />
      <Container11 />
    </div>
  );
}

function Pill4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] shrink-0" data-name="Pill">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgHero} />
      <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00345c] text-[14px] text-center uppercase">Our PILLARS</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[530px]" data-name="Container">
      <Pill4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container6 />
      <Container7 />
      <Container14 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[102px] items-center left-[60px] top-[1819px] w-[1320px]" data-name="Container">
      <Container5 />
      <Group6 />
    </div>
  );
}

function Pill5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] shrink-0" data-name="Pill">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgHero} />
      <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00345c] text-[14px] text-center uppercase">Meet our team</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Pill5 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.04] min-w-full not-italic relative shrink-0 text-[#00345c] text-[48px] tracking-[-1.44px] w-[min-content] whitespace-pre-wrap">People behind</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[261px] max-w-[216px] top-[15px]" data-name="Link">
      <Container20 />
    </div>
  );
}

function BlogPostImage1() {
  return (
    <div className="h-[316px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Blog Post Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
        <img alt="" className="absolute h-[171.17%] left-0 max-w-none top-[-1.94%] w-full" src={imgBlogPostImage1} />
      </div>
      <Link />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[8px] h-[49px] items-start relative shrink-0 text-[#00345c] w-[244px] whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] w-full">Emerson Schleifer</p>
      <p className="font-['JetBrains_Mono:Medium',sans-serif] leading-[normal] relative shrink-0 text-[12px] uppercase w-full">{`Co-founder & CEO`}</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup3 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[216px] relative shrink-0" data-name="Link">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Link1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#eff4fb] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[16px] relative w-full">
          <Container22 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px] w-full whitespace-pre-wrap">Leads vision and growth with over a decade of experience in real estate and digital innovation.</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <BlogPostImage1 />
      <Container21 />
    </div>
  );
}

function BlogPostImage2() {
  return (
    <div className="h-[316px] relative rounded-[6px] shrink-0 w-full" data-name="Blog Post Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBlogPostImage2} />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-medium gap-[8px] items-start min-h-px min-w-px relative text-[#00345c] whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] w-full">Madelyn Vetrovs</p>
      <p className="font-['JetBrains_Mono:Medium',sans-serif] leading-[normal] relative shrink-0 text-[12px] uppercase w-full">{`Co-founder & COO`}</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup5 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup4 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[216px] relative shrink-0" data-name="Link">
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Link2 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#eff4fb] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[16px] relative w-full">
          <Container27 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px] w-full whitespace-pre-wrap">Oversees global operations and strategy, building seamless systems that empower agents and clients.</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <BlogPostImage2 />
      <Container26 />
    </div>
  );
}

function BlogPostImage3() {
  return (
    <div className="h-[316px] relative rounded-[6px] shrink-0 w-full" data-name="Blog Post Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
        <img alt="" className="absolute h-[142.39%] left-0 max-w-none top-[-6.34%] w-full" src={imgBlogPostImage3} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-medium gap-[8px] items-start min-h-px min-w-px relative text-[#00345c] whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] w-full">Omar Dorwart</p>
      <p className="font-['JetBrains_Mono:Medium',sans-serif] leading-[normal] relative shrink-0 text-[12px] uppercase w-full">Chief Technology Officer</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup7 />
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup6 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[216px] relative shrink-0" data-name="Link">
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Link3 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#eff4fb] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[16px] relative w-full">
          <Container32 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px] w-full whitespace-pre-wrap">Builds global alliances with real estate agencies, investors, and proptech innovators.</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <BlogPostImage3 />
      <Container31 />
    </div>
  );
}

function BlogPostImage4() {
  return (
    <div className="h-[316px] relative rounded-[6px] shrink-0 w-full" data-name="Blog Post Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
        <img alt="" className="absolute h-[142.34%] left-0 max-w-none top-[-5.94%] w-full" src={imgBlogPostImage4} />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-medium gap-[8px] items-start min-h-px min-w-px relative text-[#00345c] whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] w-full">Sophia Nguyen</p>
      <p className="font-['JetBrains_Mono:Medium',sans-serif] leading-[normal] relative shrink-0 text-[12px] uppercase w-full">Head of Marketing</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group12 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup9 />
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup8 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[216px] relative shrink-0" data-name="Link">
      <Container39 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Link4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#eff4fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
        <Container37 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px] w-full whitespace-pre-wrap">Leads brand storytelling and growth campaigns that connect users worldwide.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <BlogPostImage4 />
      <Container36 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container25 />
      <Container30 />
      <Container35 />
    </div>
  );
}

function BlogPostImage5() {
  return (
    <div className="h-[316px] relative rounded-[6px] shrink-0 w-full" data-name="Blog Post Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
        <img alt="" className="absolute h-full left-[-45.48%] max-w-none top-0 w-[157.81%]" src={imgBlogPostImage5} />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-medium gap-[8px] items-start min-h-px min-w-px relative text-[#00345c] whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] w-full">Emma Clarke</p>
      <p className="font-['JetBrains_Mono:Medium',sans-serif] leading-[normal] relative shrink-0 text-[12px] uppercase w-full">Head of Customer Success</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group14 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup11 />
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup10 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[216px] relative shrink-0" data-name="Link">
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Link5 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#eff4fb] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[16px] relative w-full">
          <Container43 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px] w-full whitespace-pre-wrap">Dedicated to client satisfaction, guiding users through every step of their Kizuna journey.</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <BlogPostImage5 />
      <Container42 />
    </div>
  );
}

function BlogPostImage6() {
  return (
    <div className="h-[316px] relative rounded-[6px] shrink-0 w-full" data-name="Blog Post Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
        <img alt="" className="absolute h-full left-[-40.71%] max-w-none top-0 w-[157.81%]" src={imgBlogPostImage6} />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-medium gap-[8px] items-start min-h-px min-w-px relative text-[#00345c] whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] w-full">Madelyn Vetrovs</p>
      <p className="font-['JetBrains_Mono:Medium',sans-serif] leading-[normal] relative shrink-0 text-[12px] uppercase w-full">Lead Software Engineer</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup13() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group16 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup13 />
    </div>
  );
}

function ClipPathGroup12() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group15 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup12 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[216px] relative shrink-0" data-name="Link">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Link6 />
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#eff4fb] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[16px] relative w-full">
          <Container48 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px] w-full whitespace-pre-wrap">Architects reliable systems that keep Kizuna fast, secure, and scalable across markets.</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <BlogPostImage6 />
      <Container47 />
    </div>
  );
}

function BlogPostImage7() {
  return (
    <div className="h-[316px] relative rounded-[6px] shrink-0 w-full" data-name="Blog Post Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBlogPostImage7} />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-medium gap-[8px] items-start min-h-px min-w-px relative text-[#00345c] whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] w-full">Nadia Petrova</p>
      <p className="font-['JetBrains_Mono:Medium',sans-serif] leading-[normal] relative shrink-0 text-[12px] uppercase w-full">Head of Communications</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup15() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group18 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup15 />
    </div>
  );
}

function ClipPathGroup14() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group17 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup14 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[216px] relative shrink-0" data-name="Link">
      <Container55 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Link7 />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#eff4fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
        <Container53 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px] w-full whitespace-pre-wrap">Manages PR and media strategy, shaping Kizuna’s voice across global platforms.</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <BlogPostImage7 />
      <Container52 />
    </div>
  );
}

function BlogPostImage8() {
  return (
    <div className="h-[316px] relative rounded-[6px] shrink-0 w-full" data-name="Blog Post Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBlogPostImage8} />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-medium gap-[8px] items-start min-h-px min-w-px relative text-[#00345c] whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] w-full">Lina Zhao</p>
      <p className="font-['JetBrains_Mono:Medium',sans-serif] leading-[normal] relative shrink-0 text-[12px] uppercase w-full">UX Research Lead</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2883f480} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup17() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group20 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup17 />
    </div>
  );
}

function ClipPathGroup16() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group19 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <ClipPathGroup16 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[216px] relative shrink-0" data-name="Link">
      <Container60 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Link8 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#eff4fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
        <Container58 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(0,52,92,0.8)] tracking-[-0.14px] w-full whitespace-pre-wrap">Brings user empathy into every design decision through research and testing.</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <BlogPostImage8 />
      <Container57 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container46 />
      <Container51 />
      <Container56 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container40 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[50px] items-start left-[60px] top-[2789px] w-[1320px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Pill6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[50px] shadow-[0px_3px_0.1px_0px_rgba(0,139,246,0.15)] shrink-0" data-name="Pill">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgHero} />
      <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#00345c] text-[12px] text-center uppercase">Talk to us today</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#008bf6] content-stretch flex h-[56px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-white uppercase">CONTACT US</p>
    </div>
  );
}

function ArrowIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heroicons-solid/arrow-long-right">
          <path clipRule="evenodd" d={svgPaths.p83a6400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="bg-[#008bf6] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 size-[56px]" data-name="Arrow">
      <ArrowIcon1 />
    </div>
  );
}

function PrimaryButton2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Primary button">
      <Button2 />
      <Arrow2 />
    </div>
  );
}

function SubscribeContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative rounded-[8px] shrink-0 w-[492px]" data-name="Subscribe Container">
      <Pill6 />
      <PrimaryButton2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between relative shrink-0 w-full">
      <SubscribeContainer />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social Icons">
          <path d={svgPaths.p35ef6100} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="bg-[#eff4fb] content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[100px] shrink-0" data-name="Arrow">
      <SocialIcons />
    </div>
  );
}

function SocialIcons1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social Icons">
          <path d={svgPaths.p38deab00} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow4() {
  return (
    <div className="bg-[#eff4fb] content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[100px] shrink-0" data-name="Arrow">
      <SocialIcons1 />
    </div>
  );
}

function SocialIcons2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_825)" id="Social Icons">
          <path d={svgPaths.p3fb91680} fill="var(--fill-0, #00345C)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_825">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Arrow5() {
  return (
    <div className="bg-[#eff4fb] content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[100px] shrink-0" data-name="Arrow">
      <SocialIcons2 />
    </div>
  );
}

function SocialIcons3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_837)" id="Social Icons">
          <path d={svgPaths.pa42b330} fill="var(--fill-0, #00345C)" id="Vector" />
          <path d={svgPaths.p28ca0900} fill="var(--fill-0, #00345C)" id="Vector_2" />
          <path d={svgPaths.p170b0700} fill="var(--fill-0, #00345C)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_837">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Arrow6() {
  return (
    <div className="bg-[#eff4fb] content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[100px] shrink-0" data-name="Arrow">
      <SocialIcons3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Arrow3 />
      <Arrow4 />
      <Arrow5 />
      <Arrow6 />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]" data-name="Footer Container">
      <Frame />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="bg-[#fafcfe] relative shrink-0 w-full" data-name="Footer Links">
      <div className="content-stretch flex flex-col gap-[80px] items-start p-[60px] relative w-full">
        <Frame1 />
        <FooterContainer />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fafcfe] content-stretch flex flex-col items-start left-1/2 top-[4209px] w-[1440px]" data-name="Footer">
      <FooterLinks />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute left-[1110px] size-[29px] top-[4460px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="Group 8">
          <path d={svgPaths.p3228f800} fill="var(--fill-0, #008BF6)" id="Ellipse 7" />
          <circle cx="14.5" cy="14.5" fill="var(--fill-0, #008BF6)" id="Ellipse 8" r="5.5" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[1110px] top-[4460px]">
      <Group24 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[1110px] top-[4460px]">
      <Group23 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[1150px] top-[4463px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1150px] not-italic text-[#008bf6] text-[20px] top-[4463px]">CYBER AI FOUNDATION</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[1150px] top-[4463px]">
      <Group26 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[1110px] top-[4460px]">
      <Group22 />
      <Group25 />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#fafcfe] relative size-full" data-name="About">
      <Hero />
      <Navbar />
      <Group8 />
      <div className="absolute flex items-center justify-center left-[-253px] size-[505.156px] top-[952px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-68.71deg]">
          <div className="relative size-[390.139px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390.139 390.139">
              <circle cx="195.069" cy="195.069" id="Ellipse 1069" r="194.569" stroke="var(--stroke-0, #A8D9FF)" />
            </svg>
          </div>
        </div>
      </div>
      <BlogHeaderContainer />
      <div className="absolute flex items-center justify-center left-[1220px] size-[364.426px] top-[1663px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-68.71deg]">
          <div className="relative size-[281.451px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 281.451 281.451">
              <circle cx="140.726" cy="140.726" id="Ellipse 1068" r="140.226" stroke="var(--stroke-0, #A8D9FF)" />
            </svg>
          </div>
        </div>
      </div>
      <Container1 />
      <Container4 />
      <Container15 />
      <Footer />
      <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.04] left-[1364px] not-italic text-[#00345c] text-[62px] text-right top-[4254px] tracking-[-1.86px] w-[611px] whitespace-pre-wrap">Contribute to secure AI infrastructure</p>
      <Group21 />
    </div>
  );
}