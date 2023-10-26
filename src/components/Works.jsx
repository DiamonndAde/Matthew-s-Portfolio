import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'
import { styles } from "../style"
import { github, viewbutton } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({index, name, description, tags, image, source_code_link, source_code_demo}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              onClick={() => window.open(source_code_demo, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1"
            >
              <img 
                src={viewbutton}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            
            <div 
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <> 
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As a dedicated and passionate individual in the field of web development and design, I have had the privilege of working on a diverse range of projects. My portfolio showcases my commitment to crafting innovative, user-centric solutions that not only meet but exceed the expectations of clients. With each project, I've honed my skills in areas such as responsive design, user experience optimization, backend functionalities, and efficient coding practices. I invite you to explore my work and witness the creative journey that has shaped my skills and expertise in the world of digital design and development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')