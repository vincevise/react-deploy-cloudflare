import React from 'react'
import { useQuery } from 'react-query';
import { getProjectType } from '../api/api';
import Loading from '../pages/Loading';
import Loading2 from '../pages/Loading2';
import ProjectCard from './ProjectCard';
import ProjectCard1 from './ProjectCard1';
import ProjectCard2 from './ProjectCard2';

const ProjectResidence = () => {
  let {data,isLoading,isError,isFetching,isFetched,refetch} = useQuery('projectResidence',()=>getProjectType('residence'))
  let content; 

    if(isLoading || isFetching){
        content = <Loading2/>
    }

    if(isFetched){
        console.log(data.projects.Items[0])
        content = <>
            {/* <ProjectCard /> */}
            {data.projects.Items.map((x)=>(            
            <ProjectCard data={x} key={x.id} />))}
            {data.projects.Items.map((x)=>(            
            <ProjectCard1 data={x} key={x.id*x.id} />))}
            {data.projects.Items.map((x)=>(            
            <ProjectCard2 data={x} key={x.id*x.id*x.id} />))}
        </>
    }
    
    return (
        <div className='relative'> 
            {content}
            {/* {aliasContent} */}
        </div>
    )
}

export default ProjectResidence