import { getData } from "../helpers/getData";
import { BASE_URL } from "../Url/URL";

const initialState: {} | any = {};

export const getDataThunk = () => (dispatch: any) => {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => dispatch({ type: "getApi", payload: data }))
    .catch((err) => console.log(err));
};

export function movieReducer(
  state = initialState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "getApi":
      return (state = action.payload);
    default:
      return state;
  }
}
