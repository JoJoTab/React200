import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, ButtonDropdown } from "reactstrap";

class R040_ReactstrapCard extends Component{
    render(){
        return(
            <div>
                <Card>
                    <CardImg top height="200px" src="https://i.imgur.com/Apgchxx.jpg" alt="Card image"/>
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용</CardText>
                        <Button href="https://tailstar.net/index.php?mid=gallery_wallpaper&document_srl=23953552&m=0&order_type=desc">버튼</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCard;