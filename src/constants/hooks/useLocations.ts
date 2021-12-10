import axios from 'axios';
import { useEffect, useState } from 'react';
import { PATHS } from '../paths';

enum selectLocation {
  CITIES = 'CITIES',
  DISTRICTS = 'PROVINCES',
  WARDS = 'WARDS'
}

async function fetchLocationOptions(
  type: selectLocation,
  id?: string | undefined
) {
  let url: any;
  switch (type) {
    case selectLocation.CITIES:
      url = `${PATHS.CITIES}`;
      break;
    case selectLocation.DISTRICTS:
      url = `${PATHS.DISTRICTS}/${id}.json`;
      break;
    case selectLocation.WARDS:
      url = `${PATHS.WARDS}/${id}.json`;
      break;
    default:
      break;
  }
  const data = (await axios.get(url)).data['data'];
  return data.map(({ id, name }: any) => ({ value: id, label: name }));
}

const useLocations = (initLocation?: any) => {
  const [state, setState] = useState<any>({
    cityOptions: [],
    districtOptions: [],
    wardOptions: [],
    selectedCity: null,
    selectedDistrict: null,
    selectedWard: null
  });
  const { selectedCity, selectedDistrict } = state;

  //GET CITIES
  useEffect(() => {
    if (initLocation) {
    } else {
      const options = fetchLocationOptions(selectLocation.CITIES);
      options.then((option) => {
        setState({ ...state, cityOptions: option });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //GET DISTRICTS
  useEffect(() => {
    if (!selectedCity) return;
    const options = fetchLocationOptions(
      selectLocation.DISTRICTS,
      selectedCity
    );
    options.then((option) => {
      setState({
        ...state,
        districtOptions: option,
        selectedDistrict: null,
        selectedWard: null
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  //GET WARDS
  useEffect(() => {
    if (!selectedDistrict) return;
    const options = fetchLocationOptions(
      selectLocation.WARDS,
      selectedDistrict
    );
    options.then((option) => {
      setState({ ...state, wardOptions: option, selectedWard: null });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDistrict]);

  const setSelectedCity = (value: number) => {
    setState({ ...state, selectedCity: value });
  };

  const setSelectedDistrict = (value: number) => {
    setState({ ...state, selectedDistrict: value });
  };

  const setSelectedWard = (value: number) => {
    setState({ ...state, setSelectedWard: value });
  };

  return [state, setSelectedCity, setSelectedDistrict, setSelectedWard];
};

export default useLocations;
