import React, { useEffect } from "react";
import data from '../data/위험운전행동_GPS.json'

const { kakao } = window;

const DrawingMap = () => {

    let suddenAcc = data.filter((i) => i.급가속 === "1")
    let suddenDrop = data.filter((i) => i.급감속 === "1")
    let suddenDeparture = data.filter((i) => i.급출발 === "1")
    let suddenStop = data.filter((i) => i.급정지 === "1")

    // console.log(suddenAcc)
    // console.log(suddenDrop)
    // console.log(suddenDeparture)
    console.log(suddenStop)

    useEffect(() => {

        // 지도를 표시할 div 
        const container = document.getElementById('map');

        // 지도 그리기
        const options = {
            center: new kakao.maps.LatLng(35.204771, 129.166241), // 지도의 중심좌표
            level: 7 // 지도의 확대 레벨
        }

        // 지도 생성
        const map = new kakao.maps.Map(container, options)

        // 마커 이미지
        let imgSuddenAcc = "https://github.com/beeguriri/beeguriri/blob/main/dot_image/SuddenAcc.png?raw=true";
        let imgSuddenDrop = "https://github.com/beeguriri/beeguriri/blob/main/dot_image/SuddenDrop.png?raw=true";
        let imgSuddenDeparture = "https://github.com/beeguriri/beeguriri/blob/main/dot_image/SuddenDeparture.png?raw=true";
        let imgSuddenStop = "https://github.com/beeguriri/beeguriri/blob/main/dot_image/SuddenStop.png?raw=true";
        let imageSize = new kakao.maps.Size(40, 40);

        // 마커 이미지 생성
        let SuddenAccmarker = new kakao.maps.MarkerImage(imgSuddenAcc, imageSize);
        let SuddenDropmarker = new kakao.maps.MarkerImage(imgSuddenDrop, imageSize);
        let SuddenDeparturemarker = new kakao.maps.MarkerImage(imgSuddenDeparture, imageSize);
        let SuddenStopmarker = new kakao.maps.MarkerImage(imgSuddenStop, imageSize);

        // 마커를 생성
        let Accmarker = suddenAcc.map((i) =>
            new kakao.maps.Marker({
                // map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(i.GPS_Y, i.GPS_X), // 마커를 표시할 위치
                title: "급가속", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: SuddenAccmarker // 마커 이미지 
            })
        );

        let Dropmarker = suddenDrop.map((i) =>
            new kakao.maps.Marker({
                // map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(i.GPS_Y, i.GPS_X), // 마커를 표시할 위치
                title: "급감속", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: SuddenDropmarker // 마커 이미지 
            })
        );

        let Depmarker = suddenDeparture.map((i) =>
            new kakao.maps.Marker({
                // map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(i.GPS_Y, i.GPS_X), // 마커를 표시할 위치
                title: "급출발", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: SuddenDeparturemarker // 마커 이미지 
            })
        );

        let Stopmarker = suddenStop.map((i) =>
            new kakao.maps.Marker({
                // map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(i.GPS_Y, i.GPS_X), // 마커를 표시할 위치
                title: "급정지", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: SuddenStopmarker // 마커 이미지 
            })
        );

        // 마커 클러스터러 생성
        let clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
            minLevel: 5 // 클러스터 할 최소 지도 레벨 
        })

        clusterer.addMarkers(Accmarker)
        clusterer.addMarkers(Dropmarker)
        clusterer.addMarkers(Depmarker)
        clusterer.addMarkers(Stopmarker)

        // 마커 클러스터러에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(clusterer, 'clusterclick', function(cluster) {

            // 현재 지도 레벨에서 1레벨 확대한 레벨
            var level = map.getLevel()-1;
    
            // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
            map.setLevel(level, {anchor: cluster.getCenter()});
        });


    }, []);

    return (

        <div id="map"
            style={{ width: "80vw", height: "80vh", border: "solid black 1px", margin: "10px 10px 10px 10px" }}>
 
        </div>

    );

}

export default DrawingMap;