import React from 'react'
import csesimg from "./assests/Computer-Science-Engineering-.webp"
import cseimg from "./assests/cse-img.png"
import adminimg from "./assests/admission-img-1.png"

const Cse = () => {
  return (
    <div className='container-fluid'>
        <img src={csesimg} alt="" className='w-100'/>
        <div className='row'>
            <div className='col-12 col-lg-4'>
                <h5>Computer Science Engineering</h5>
                <h5>About Department</h5>
                <h5>Vision</h5>
                <h5>Infrastructure</h5>
                <h5>Board Of Study</h5>
                <h5>AchieveMents</h5>
                <h5>Innovative Teaching and Learning</h5>
                <img src={adminimg} alt="" className='w-100'/>
                <h4>2025
Admission
Now Open</h4>

            </div>
            <div className='col-12 col-lg-8'>
                <strong>About the Department</strong>
                <p>Computer Science and Engineering (CSE) is one of the popular courses among engineering aspirants which mainly focuses on computation, analysis of algorithms, programming languages, program design, software engineering, computer hardware, computer networks and problem solving skills. This program has roots in electrical, electronics and communication engineering, mathematics, and linguistics. Students study the design, development and analysis of software and hardware used to solve problems for various business, scientific and social contexts. Since computers solve most of the complex problems in a simplified way, it provides the sophistication to the world and touches the human lives in all the aspects such as education, transportation, entertainment, banking, mass communication, social media, hospital management, businesses, supply chain management, etc. Computer Science Engineering is inherently a interdisciplinary subject, it link to the disciplines including psychology, biology, mathematics, physics, education, art and music with the subjects of bioinformatics, electronics, operations research, theory of computation, help students to understand how computer science fits in to a wide range of domains in the world.</p>
                <img src={cseimg} alt='' className='w-100'/>
                <p>computer science fits in to a wide range of domains in the world.This program prepares the students for career as Software Developers, Hardware Engineers, System Designer, System Analyst and Architect, Networking Engineers and Administrators, Database Administrator, web developers, Project Team Associate and Leaders etc. This program enable the students to acquire multidimensional approach of computing knowledge and understanding the problems to solve deep, imagination and sensitivity to a variety of concerns. The courses such as computer graphics, artificial intelligence, human computer interaction, robotics, database management, web technology, network security, grid and cloud computing and cyber security are applied to analyze and design the solutions to the real time complex problems such as development of computer models and software to improve education, 3D graphics to visualize historical artifacts, developing, understanding natural language, analyzing medical images, using computers to produce art, and developing algorithms to support advanced network technologies.</p>
                <div class="card">
                    
                    <div class="card-body">
                        <h4 class="card-title"><span className='text-primary'>The role of Computer Science Engineers falls in any one the following category</span></h4>
                        <ul>
                            <li>Design and develop software application for different industries</li>
                            <li>Manages the software, hardware & networks in any industry</li>
                            <li>Involves in the design and development of the hardware components of PCs & laptops</li>
                            <li>Develop software for peripheral computing devices such as printers, modems and scanners</li>
                            <li>Writes code and algorithms for operating systems like Windows, Linux etc.</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    
                    <div class="card-body">
                        <h4 class="card-title"><span className='text-danger'>Computer Science Engineer can work in wide range of fields from the following categories</span></h4>

                        <ul>
                            <li>In Government for Engineering services, Remote sensing, E-Governance, etc.</li>
                            <li>In PSU`s like EDP officers in Banking sectors, Railways, Airport Authorities of India, ONGC and Petroleum Corporations, etc.</li>
                            <li>In Core Sectors like Tata Consultancy Services, Infosys, Virtusa, IBM, Cognizant Technologies, Zoho Coorporation, Vodafone, Rapid-I, Revature, etc.</li>
                            <li>In Private Sectors as Business Development Associates, Content Development Manager, Financial Advisor and Consultant, etc.</li>
                            <li>It also provide the opportunities and eligibility to write UPSC – IES (Indian Engineering Services)</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <p>
                    <span className='text-primary'>The Department of Computer Science and Business System exists since the inception of the institution, in the year 2020. The department offers the following courses</span>
                </p>
                <br></br>
                <p>
                    4 year Undergraduate ProgrammeB.Tech.,</p> <p> Computer Science and Business System60 Intake The Department has excellent infrastructure in terms of laboratories, classrooms, seminar hall, Centre of Excellence, etc. The department laboratories are interconnected through a well-designed seamless network with Internet facility with the speed of 155 Mbps to facilitate the student’s access to web resources. This helps the students in meeting the demands of the regular curriculum and latest technology needs. With the co-operation and involvement of the dedicated team of well-qualified faculty members, the department constantly strives to improve its academic standards. Our students involve in developing the solutions for real time industrial problems and participate in national level and international level competitions and brought laurel to the department
                </p>
                
                

                
            </div>
        </div>
        
        
        

    </div>
  )
}

export default Cse