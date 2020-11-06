/*global kakao*/
import React, { useEffect, useCallback, useState } from 'react';
import * as S from './style';

const Map = searchText => {
  const [map, mapChange] = useState();
  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  useEffect(() => {
    setKakaoMap(kakao);
  }, []);
  useEffect(() => {
    searchAddress(kakao, '구미 신평동 영무예다음');
  }, [map]);
  const setKakaoMap = useCallback(
    ({ maps }) => {
      const mapContainer = document.getElementById('searchMap');
      const mapOption = {
        center: new maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new maps.Map(mapContainer, mapOption);
      mapChange(map);
    },
    [kakao],
  );
  const searchAddress = useCallback(
    ({ maps }, searchText) => {
      const searchObj = new maps.services.Places();
      searchObj.keywordSearch(searchText, searchAddressCallback);
    },
    [map],
  );
  const searchAddressCallback = useCallback(
    (data, status, pagination) => {
      console.log(map);
      if (isMapLoaded(map)) {
        if (status === kakao.maps.services.Status.OK) {
          var bounds = new kakao.maps.LatLngBounds();

          for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          map.setBounds(bounds);
        }
      }
    },
    [map],
  );
  const isMapLoaded = useCallback(map => {
    return map !== undefined;
  }, []);
  const displayMarker = useCallback(
    place => {
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      console.log(map, marker);
      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>',
        );
        infowindow.open(map, marker);
      });
    },
    [map],
  );
  return <S.Map id="searchMap"></S.Map>;
};
export default Map;
