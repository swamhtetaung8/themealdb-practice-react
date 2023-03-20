import React from "react";
import Member from "../components/Member";
import about from "/about.jpg";
import member1 from "/member1.jpg";
import member2 from "/member2.jpg";
import member3 from "/member3.jpg";
import member4 from "/member4.jpg";
import { motion } from "framer-motion";
const About = () => {
  const members = [
    {
      name: "Jackson",
      image: member1,
    },
    {
      name: "Amy",
      image: member2,
    },
    {
      name: "Natalia",
      image: member3,
    },
    {
      name: "Henry",
      image: member4,
    },
  ];
  return (
    <motion.section
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
      className=" min-h-screen w-full lg:pt-0 pb-10 md:pb-0">
      <img src={about} className=" w-full h-[500px] object-cover" alt="" />
      <div className=" lg:px-20 px-5 py-10 space-y-20">
        <div>
          <h1 className=" text-5xl font-bold text-blue-500 tracking-wide">
            Who
          </h1>
          <h1 className=" text-5xl font-bold text-blue-500 tracking-wide">
            We Are
          </h1>
          <p className=" mt-10">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            eligendi in pariatur veritatis vero molestias consequatur eum
            eveniet corrupti amet incidunt officia ex dolore, tempore, optio
            nulla beatae aut voluptates rem aspernatur nostrum est! Ab voluptate
            et nemo accusamus recusandae sapiente totam enim doloribus
            doloremque tempore, rem veniam, voluptatem voluptas praesentium
            beatae sit possimus obcaecati! Magnam, quae! Rem magni atque
            voluptas commodi, iure similique soluta corrupti laborum illum
            adipisci ex dolores eum beatae rerum voluptatum? Deserunt, fugiat.
            Ex rem nulla quod neque vero. Temporibus aliquid quas nulla, vel
            voluptates unde est assumenda commodi cum dolorem facilis saepe
            dicta ratione inventore. Dolor reiciendis ducimus sint consectetur.
            Tempora deleniti ex voluptatem quae! Tempora ipsa ipsum repellendus.
          </p>
        </div>
        <div>
          <h1 className=" text-4xl text-blue-500 font-bold tracking-wide">
            Our Team
          </h1>
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-10">
            {members.map((member) => (
              <Member key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
