import {
  fetchDataError,
  fetchingData,
  ingredientsSlice,
  initialState,
  setFetchDataSuccess,
} from "./ingredients-slice"
import { testBun } from "../../../utils/constants/test-constants"

describe("ingredients", () => {
  it("should make status.isLoading true when dataArray is fetching", () => {
    const action = { type: fetchingData.type }
    const store = ingredientsSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when fetching was end with error", () => {
    const action = { type: fetchDataError.type }
    const store = ingredientsSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should update state when fetching was end with success", () => {
    const action = {
      type: setFetchDataSuccess.type,
      payload: [testBun],
    }
    const store = ingredientsSlice.reducer(
      { ...initialState, status: { ...initialState.status, isLoading: true } },
      action,
    )
    expect(store).toEqual({ ...initialState, dataArray: [testBun] })
  })
})
