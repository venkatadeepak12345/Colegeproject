import React from 'react'
import bioimg from "./assests/BIOMEDICAL-ENGINEERING.webp";
import adminimg from "./assests/admission-img-1.png"

const Bio = () => {
  return (
    <div className='container-fluid'>
        <img src={bioimg} alt="" className='w-100'/>
        <div className='row'>
            <div className='col-12 col-lg-4'>
                <h5>Bio Medical Engineering</h5>
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
                <strong>About The Departments</strong>
                <p>The Department of Biomedical Engineering was established in the year 2019 which offers a UG programme (B.E) in Biomedical Engineering. The department has a dedicated team of highly qualified members of faculty having expertise in broad interdisciplinary research domains. The well equipped laboratories provide a plethora of opportunities for the students to quench their scientific pursuit. Dedicated R&D faculty teams are involved in writing research proposals and techno-commercial proposals for government funding agencies and industrial firms which provides a wide exposure to the students.Biomedical Engineer integrate engineering principles with medical and biological sciences to design and create equipment, devices, computer systems, and software used in healthcare.</p>
                <div class="card">
                    
                    <div class="card-body">
                        <h4 class="card-title"><span className='text-primary'>Bio Medical Engineers Can</span></h4>
                        <ul>
                            <li>Design biomedical equipment and devices, such as artificial internal organs, replacements for body parts, and machines for diagnosing medical problems</li>
                            <li>Install, adjust, maintain, repair or provide technical support for biomedical equipment</li>
                            <li>Evaluate the safety, efficiency, and effectiveness of biomedical equipment</li>
                            <li>Train clinicians and other personnel on the proper use of biomedical equipment</li>
                            <li>Research the engineering aspects of the biological systems of humans and animals with life scientists, chemists, and medical scientists</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    
                    <div class="card-body">
                        <h4 class="card-title"><span className='text-primary'>Important Qualities For Biomedical Engineers
</span></h4>
                        <ul>
                            <li>Analytical skills: Biomedical engineers must analyse the needs of patients and customers to design appropriate solutions.</li>
                            <li>Communication skills: Biomedical engineers sometimes work with patients and frequently work on teams, they must express themselves clearly. They must seek others’ ideas and incorporate those ideas into the problem-solving process</li>
                            <li>Creativity: Biomedical engineers must be creative to come up with innovative and integrative advances in healthcare equipment and devices.</li>
                            <li>Math skills: Biomedical engineers use the principles of calculus and other advanced topics in math and statistics for analysis, design, and troubleshooting in their work.</li>
                            <li>Problem-solving skills: Biomedical engineers typically deal with and solve problems in complex biological systems</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <p>Biomedical engineers design instruments, devices, and software used in healthcare; develop new procedures using knowledge from many technical sources; or conduct research needed to solve clinical problems. They frequently work in research and development or quality assurance. Biomedical engineers design electrical circuits, software to run medical equipment, or computer simulations to test new drug therapies. In addition, they design and build artificial body parts, such as hip and knee joints. In some cases, they develop the materials needed to make the replacement body parts. They also design rehabilitative exercise equipment. The work of these engineers spans many professional fields. For example, although their expertise is based in engineering and biology, they often design computer software to run complicated instruments, such as three-dimensional x-ray machines. Alternatively, many of these engineers use their knowledge of chemistry and biology to develop new drug therapies. Others draw heavily on math and statistics to build models to understand the signals transmitted by the brain or heart. Some may be involved in sales. Biomedical engineers work in teams with scientists, healthcare workers, or other engineers. Where and how they work depends on the project. For example, a biomedical engineer who has developed a new device designed to help a person with a disability to walk again might have to spend hours in a hospital to determine whether the device works as planned. If the engineer finds a way to improve the device, he or she might have to return to the manufacturer to help alter the manufacturing process to improve the design.</p>
                
                
            </div>

    </div>
    </div>
  )
}

export default Bio