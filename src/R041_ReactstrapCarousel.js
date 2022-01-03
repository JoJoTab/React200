import React, {Component} from "react";
import { UncontrolledCarousel } from "reactstrap";

const items=[
    {
        src: 'http://picsum.photos/500/500/?1',
        altText: '슬라이드 1 이미지 대체 문구',
        caption: '슬라이드 1 설명',
        header: '슬리이드 1 제목'
    },
    {
        src: 'http://picsum.photos/500/500/?2',
        altText: '슬라이드 2 이미지 대체 문구',
        caption: '슬라이드 2 설명',
        header: '슬리이드 2 제목'
    },
    {
        src: 'http://picsum.photos/500/500/?3',
        altText: '슬라이드 3 이미지 대체 문구',
        caption: '슬라이드 3 설명',
        header: '슬리이드 3 제목'
    }
];

class R041_ReactstrapCarousel extends Component{
    render(){
        return(
            <div>
                <UncontrolledCarousel items={items}/>
            </div>     
        )
    }
}

export default R041_ReactstrapCarousel;