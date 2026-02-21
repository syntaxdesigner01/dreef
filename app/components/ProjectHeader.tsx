"use client";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import StatCard from "./StatCard";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectHeader = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <section className="flex w-full justify-end items-center gap-4 font-medium text-[#111111D6]">
        <div className="flex items-center gap-2">
          <Image
            src={"/download.svg"}
            alt="download"
            width={20}
            height={20}
            className="object-contain sm:h-5 sm:w-5"
            quality={100}
            priority={true}
          />

          <span>Download Page</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/share.svg"}
            alt="share"
            width={20}
            height={20}
            className="object-contain sm:h-5 sm:w-5"
            quality={100}
            priority={true}
          />

          <span>share</span>
        </div>
      </section>

      {/* Navigation & Logo */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-white rounded-md p-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4"
      >
        <button className="hidden md:flex items-center gap-2 text-sm font-medium text-[#111111CC] hover:text-primary transition-colors">
          <Image
            src={"/arrowRight.svg"}
            alt="arrowLeft"
            width={20}
            height={20}
            className="object-contain"
            quality={100}
            priority={true}
          />{" "}
          Previous Project
        </button>

        <Image
          src={"/logo.svg"}
          alt="logo"
          width={200}
          height={90}
          className="object-contain"
          quality={100}
          priority={true}
        />

        <button className="hidden md:flex items-center gap-2 text-sm font-medium text-[#111111CC] hover:text-primary transition-colors">
          Next Project{" "}
          <Image
            src={"/arrowLeft.svg"}
            alt="arrowLeft"
            width={20}
            height={20}
            className="object-contain"
            quality={100}
            priority={true}
          />{" "}
        </button>

        {/* mobile nav */}
        <section className="md:hidden flex justify-between items-center w-full">
          <button className="flex items-center gap-2 text-sm font-medium text-[#111111CC] hover:text-primary transition-colors">
            <Image
              src={"/arrowRight.svg"}
              alt="arrowLeft"
              width={20}
              height={20}
              className="object-contain"
              quality={100}
              priority={true}
            />{" "}
            Previous Project
          </button>

          <button className="flex items-center gap-2 text-sm font-medium text-[#111111CC] hover:text-primary transition-colors">
            Next Project{" "}
            <Image
              src={"/arrowLeft.svg"}
              alt="arrowLeft"
              width={20}
              height={20}
              className="object-contain"
              quality={100}
              priority={true}
            />{" "}
          </button>
        </section>
      </motion.div>

      {/* Project Title & Pipeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        variants={fadeIn}
        className="bg-white border border-[#47BAEB] rounded-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <h1 className="text-xl md:text-2xl font-semibold text-subPrimaryText">
          Anergy Solar Ltd
        </h1>

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-[#4ABF61] flex items-center justify-center text-white ">
            {/* <LuBriefcase size={20} /> */}
            <Image
              src={"/briefcaseWhite.svg"}
              alt="logo"
              width={20}
              height={20}
              className="object-contain"
              quality={100}
              priority={true}
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-xs  font-normal text-[#0E4B81] uppercase tracking-wider">
              Deal Pipeline
            </span>
            <span className="md:text-2xl text-xl font-semibold text-[#0E4B81EB]">
              84.2Bn
            </span>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        variants={fadeIn}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <StatCard
          label="Energy"
          value="7,500Kwp"
          icon={"/briefcase.svg"}
          colorClass="bg-[#6ADFF166]"
          iconColorClass="text-blue-900"
        />
        <StatCard
          label="Connections"
          value="59,115"
          icon={"/briefcase.svg"}
          colorClass="bg-[#6A9CDC66]"
          iconColorClass="text-gray-800"
        />
        <StatCard
          label="Communities"
          value="100"
          icon={"/briefcase.svg"}
          colorClass="bg-[#6AC8F166]"
          iconColorClass="text-green-900"
        />
      </motion.div>
    </div>
  );
};

export default ProjectHeader;
