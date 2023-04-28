import {
  deleteId,
  fetchDataError,
  fetchDataProcessing,
  orderDetailsSlice,
  TOrderDetailsState,
  updateId,
} from "./order-details-slice"

const initialState: TOrderDetailsState = {
  id: undefined,
  status: {
    isError: false,
    isLoading: false,
  },
}

describe("ingredients", () => {
  it("should make status.isLoading true when dataArray is fetching", () => {
    const action = { type: fetchDataProcessing.type }
    const store = orderDetailsSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when fetching was end with error", () => {
    const action = { type: fetchDataError.type }
    const store = orderDetailsSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should clear store", () => {
    const action = { type: deleteId.type }
    const store = orderDetailsSlice.reducer({ ...initialState, id: 123456 }, action)
    expect(store).toStrictEqual(initialState)
  })

  it("should update id when order was made", () => {
    const action = { type: updateId.type, payload: 123456 }
    const store = orderDetailsSlice.reducer({ ...initialState, id: 0 }, action)
    expect(store).toStrictEqual({ ...initialState, id: 123456 })
  })
})
