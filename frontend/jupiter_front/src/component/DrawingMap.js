import React, {useEffect} from "react";

const {kakao} = window;

const DrawingMap = () => {

    // var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    // mapOption = { 
    //     center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    //     level: 3 // 지도의 확대 레벨
    // };

    // // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    // var map = new kakao.maps.Map(mapContainer, mapOption); 

    useEffect(() => {

        // 지도를 표시할 div 
        const container = document.getElementById('map');

        // 지도 그리기
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        }

        // 지도 생성
        const map = new kakao.maps.Map(container, options)
    }, []);

    return(

        <div id="map" 
            style={{width:"80vw", height:"80vh", border:"solid black 1px", margin:"10px 10px 10px 10px"}}>
            hello!
        </div>
        
    );

}

export default DrawingMap;