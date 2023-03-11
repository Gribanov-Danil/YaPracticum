import {useDispatch} from "react-redux";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Modal} from "../modal/Modal";
import {ingredientDetailsSlice} from "../../service/reducers/ingredientDetailsSlice";
import {IngredientsDetails} from "../ingredientDetails/IngredientsDetails";


export const ModalSwitch = ({ background }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {deleteModalData} = ingredientDetailsSlice.actions
    const handleCloseModal = () => {
        dispatch(deleteModalData({}))
        navigate(-1)
    }

    return (
        <>
            {background && (
                <Routes>
                    <Route
                        path='/ingredients/:ingredientId'
                        element={
                            <Modal
                                title={'Детали ингредиента'}
                                onClick={handleCloseModal}
                            >
                                <IngredientsDetails/>
                            </Modal>
                        }
                    />
                </Routes>
            )}
        </>
    );
};





