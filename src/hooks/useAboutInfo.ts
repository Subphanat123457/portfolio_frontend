import { useState, useEffect } from 'react';
import { aboutUser, skillUser, experienceUser, educationUser, certificateUser } from '@/services/api';

export const usePreloadData = () => {
  const [data, setData] = useState({
    aboutInfo: null,
    skills: [],
    experiences: [],
    educations: [],
    certificates: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const aboutData = await aboutUser();
      const skillsData = await skillUser();
      const experiencesData = await experienceUser();
      const educationsData = await educationUser();
      const certificatesData = await certificateUser();

      setData({
        aboutInfo: aboutData[0],
        skills: skillsData,
        experiences: experiencesData,
        educations: educationsData,
        certificates: certificatesData,
      });
    };

    fetchData();
  }, []);

  return data;
};
