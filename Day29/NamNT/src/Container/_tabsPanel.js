import React, { useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListStudents from "./_listStudent";
import ListTeam from "./_listTeam";



const TabsPanel = () => {
    
    const [key, setKey] = useState('studentlist');
    return(
        <div className="tabsPanel">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="tabsPanel__item"
            >
                <Tab eventKey="studentlist" title="StudentList">
                   <ListStudents/>
                </Tab>
                <Tab eventKey="teams" title="Teams">
                    <ListTeam/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabsPanel;