import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/projectService';
import { useTranslation } from 'react-i18next';
import ProjectsPages from '../assets/json/projectsPages.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const lang = i18n.language;
        const data = await getProjects('latest', lang);
        if (data.message) {
          console.log(data.message);
        } else {
          setProjects(data);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, [i18n.language]);

  const getProjectPage = (projectId) => {
    return ProjectsPages.find((page) => page.id === projectId);
  };

  const handleButtonClick = (pageName) => {
    window.location.href = `/projects/${pageName}`;
  };

  return (
    <div>
      <h1>{t('projects')}</h1>
      <div className='cards'>
        {projects.length === 0 ? (
          <p>{t('noProjects')}</p>
        ) : (
          projects.map((project) => {
            const projectPage = getProjectPage(project.id);
            console.log(getProjectPage(project.id))
            return (
              <div className='card' key={project.id}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>{t('technologies')} {project.technologies}</p>
                <p>{t('created')} {project.creation}</p>
                {projectPage && (
                  <button className="link-button" onClick={() => handleButtonClick(projectPage.pagename)}>{t('viewProject')}</button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Projects;
