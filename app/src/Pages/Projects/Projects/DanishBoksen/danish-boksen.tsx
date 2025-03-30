import React from 'react';
import ProjectNavigation, {
    ProjectListItem
} from "../../../../Components/common/navigation/project-navigation/ProjectNavigation";
import './danishboksen.css'
const dbProjectList: ProjectListItem[] = [
    {
        url: '',
        title: 'Introduction'
    },
    {
        url: '',
        title: 'About the project'
    },
    {
        url: '',
        title: 'Outcomes'
    }
]

const DanishBoksen = () => {
    return (
        <div className={'project-wrapper'}>
            <div className={'project-content'}>
                <h1>Danish boksen</h1>

                <span>Company: Seges innovation</span>
                <span>Role: UX Engineer</span>
                <h2>About the project</h2>
                <span>
                    DanishBoksen is an initiative from the Danish pig sector to avoid paperwork in connection with various certifications of pork.
                    The name Danish Box comes from the Danish Pig Standard, which is a certification that ensures that pork meets Danish legislation and industry standards.
                </span>
                <span>
                    To obtain Danish certification, pork must undergo a number of annual checks and at the same time receipts and papers that support this must be saved.
                    To make it easier for the farmer, DanishBoksen has created a digital archive and a checklist that makes it possible to ensure that the farmer meets all requirements.
                </span>

                <h2>Outcomes</h2>
                <span>Complete the task of creating a easier experience for the Danish farmer, an application was developed where the farmer could upload all relevent documents and then link them to different checklists, which would then be referenced whenever there was a control visit..</span>
                <img src={'/images/seges/Db2.png'}/>
                <img src={'/images/seges/Db3.png'}/>
                <span></span>
            </div>
        </div>
    );
};

export default DanishBoksen;