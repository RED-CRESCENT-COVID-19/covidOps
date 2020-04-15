const initialState = {
  message: "",
  error: false,
  loading: false,
  response: false,
  data: [],
  house: {
    address: "",
    houseId: "",
    is_contacted: false,
    lat: "",
    lan: ""
  },
  memeber: {
    id: "",
    houseID: "",
    age: "",
    temperature: "",
    unit: "",
    fever: "",
    cough: "",
    sputum: "",
    fatigue: "",
    sob: "",
    headache: "",
    congestion: "",
    meralgia: "",
    hemoptysis: "",
    conjuctivitis: "",
    notes: "",
    cnic: "",
    phone: "",
    gender: "",
    uniqueID: ""
  }
};

export default initialState;
