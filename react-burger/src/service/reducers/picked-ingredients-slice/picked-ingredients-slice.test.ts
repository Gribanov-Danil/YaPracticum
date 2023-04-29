import {
  deleteDraggableIngredient,
  initialState,
  pickedIngredientSlice,
  setFirstIngredient,
  setPickedBun,
  setPickedIngredient,
  updatePickedIngredient,
} from "./picked-ingredients-slice"
import { testBun, testIngredient } from "../../../utils/constants/test-constants"

describe("pickedIngredient", () => {
  it("should set first ingredient", () => {
    const action = {
      type: setFirstIngredient.type,
      payload: { id: "abc", ingredient: testIngredient },
    }
    const store = pickedIngredientSlice.reducer(initialState, action)
    expect(store.pickedIngredient).toStrictEqual([{ id: "abc", ingredient: testIngredient }])
  })

  it("should set ingredient, when first ingredient was initialized", () => {
    const action = {
      type: setPickedIngredient.type,
      payload: { id: "abc", ingredient: testIngredient },
    }
    const testState = {
      pickedIngredient: [{ id: "132", ingredient: testIngredient }],
      pickedBun: testBun,
    }
    const store = pickedIngredientSlice.reducer(testState, action)
    expect(store).toStrictEqual({
      ...testState,
      pickedIngredient: [...testState.pickedIngredient, { id: "abc", ingredient: testIngredient }],
    })
  })

  it("should set bun", () => {
    const action = { type: setPickedBun.type, payload: testBun }
    const store = pickedIngredientSlice.reducer(initialState, action)
    expect(store.pickedBun).toStrictEqual(testBun)
  })

  it("should delete picket ingredient", () => {
    const action = {
      type: deleteDraggableIngredient.type,
      payload: { id: "abc", ingredient: testIngredient },
    }
    const testState = {
      pickedIngredient: [
        { id: "132", ingredient: testIngredient },
        { id: "abc", ingredient: testIngredient },
      ],
      pickedBun: testBun,
    }
    const store = pickedIngredientSlice.reducer(testState, action)
    expect(store).toStrictEqual({
      pickedIngredient: [{ id: "132", ingredient: testIngredient }],
      pickedBun: testBun,
    })
  })

  it("should update pickedIngredient array when ingredient was dragged", () => {
    const [firstIngredient, secondIngredient] = [
      { id: "132", ingredient: testIngredient },
      { id: "abc", ingredient: testIngredient },
    ]
    const action = {
      type: updatePickedIngredient.type,
      payload: [secondIngredient, firstIngredient],
    }
    const store = pickedIngredientSlice.reducer(
      { ...initialState, pickedIngredient: [firstIngredient, secondIngredient] },
      action,
    )
    expect(store.pickedIngredient).toStrictEqual([secondIngredient, firstIngredient])
  })
})
