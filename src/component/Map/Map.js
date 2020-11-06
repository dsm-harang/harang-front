/*global kakao*/
import React, { useEffect, useCallback, useState } from 'react';
import * as S from './style';

const Map = ({ searchText, clickCallback }) => {
  const [map, mapChange] = useState();
  const [location, locationChange] = useState({
    latitude: 0,
    longitude: 0,
  });
  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    setKakaoMap(kakao, location);
  }, [location]);
  useEffect(() => {
    searchAddress(kakao, searchText);
  }, [searchText]);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          locationChange(coords);
        },
        error => console.log(error),
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  };
  const setKakaoMap = useCallback(
    ({ maps }, location) => {
      const mapContainer = document.getElementById('searchMap');
      const mapOption = {
        center: new maps.LatLng(location.latitude, location.longitude),
        level: 3,
      };
      const map = new maps.Map(mapContainer, mapOption);
      mapChange(map);
    },
    [kakao],
  );
  const searchAddress = useCallback(
    ({ maps }, searchText) => {
      if (isMapLoaded(map)) {
        const searchObj = new maps.services.Places();
        searchObj.keywordSearch(searchText, searchAddressCallback);
      }
    },
    [map],
  );
  const searchAddressCallback = useCallback(
    (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        var bounds = new kakao.maps.LatLngBounds();
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
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
      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>',
        );
        infowindow.open(map, marker);
        clickCallback(`${place.address_name}${place.place_name}`);
      });
    },
    [map],
  );
  return <S.Map id="searchMap"></S.Map>;
};
export default Map;
