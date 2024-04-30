import { Col } from "react-bootstrap"
import './project-card.styles.css'

const ProjectCard = ({title, description, imgUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt='img'/>
                <div className="proj-info">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )

}

export default ProjectCard