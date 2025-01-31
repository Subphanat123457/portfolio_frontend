import { useState, useEffect } from 'react';
import { Code2, Briefcase, GraduationCap, Award, Loader } from 'lucide-react'; // เพิ่ม Loader
import { usePreloadData } from '@/hooks/useAboutInfo';

const About = () => {
  const { aboutInfo, skills, experiences, educations, certificates } = usePreloadData();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!aboutInfo || skills.length === 0 || experiences.length === 0 || educations.length === 0 || certificates.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex justify-center items-center">
        <Loader className="animate-spin text-primary" size={48} /> {/* ไอคอนโหลด */}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">
          {/* About Me Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground">{aboutInfo.content}</p>
          </section>

          {/* Skills Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="text-primary" size={24} />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill: { name: string }) => (
                <div key={skill.name} className="glass p-4 rounded-lg text-center hover:scale-105 transition-transform">
                  {skill.name}
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="text-primary" size={24} />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.company} className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{experience.position}</h3>
                  <p className="text-muted-foreground mb-4">
                    {experience.company} • {new Date(experience.start_date).getFullYear()} - {new Date(experience.end_date).getFullYear()}
                  </p>
                  <p>{experience.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-primary" size={24} />
              <h2 className="text-3xl font-bold">Certificates</h2>
            </div>
            <div className="space-y-8">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="glass p-6 rounded-lg flex items-center gap-4">
                  {certificate.image && (
                    <img
                      src={`data:image/jpeg;base64,${certificate.image}`}
                      alt={certificate.title}
                      className="w-60 h-48 rounded-md object-cover cursor-pointer"
                      onClick={() => handleImageClick(`data:image/jpeg;base64,${certificate.image}`)}
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                    <p className="text-muted-foreground">{certificate.issued_by}</p>
                    <p className="text-muted-foreground">{new Date(certificate.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" size={24} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-8">
              {educations.map((education) => (
                <div key={education.school} className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{education.degree} in {education.field_of_study}</h3>
                  <p className="text-muted-foreground">
                    {education.school} • {new Date(education.start_date).getFullYear()} - {education.end_date.includes("T") ? new Date(education.end_date).getFullYear() : education.end_date}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Modal for Image Display */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="bg-white p-4 rounded-lg">
            <img src={selectedImage} alt="Certificate" className="max-w-full max-h-screen" />
            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-md" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
