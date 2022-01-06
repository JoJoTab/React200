import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "../component/BoardList";
import BoardNew from "../component/BoardNew";
import { boardRemove, boardSave, boardSelectRow } from "../module/boardReducer";

function Container() {

    // State
    let [inputData, setInputData] = useState({
        boardId: '',
        boardTitle: '',
        boardContent: ''
    });

    // 함수형 컴포넌트에서 dispatch 를 사용할 수 있게 해줌
    const dispatch = useDispatch();

    // onRemove 와 onSave 는 Action 을 dispatch 하는 함수
    const onRemove = (boardId) => dispatch(boardRemove(boardId));
    const onSave = (boardId) => dispatch(boardSave(saveData));

    // reducer state 의 selectRowData filed 를 가져온 뒤 subscribe (구독)  
    const {selectRowData} = useSelector(state => state.boardReducer);

    // User Function
    const onRowClick = (boardId) => {

        // dispatch 를 하고,
        dispatch(boardSelectRow(boardId));

        // inputData 에 selectRowData 의 값을 반영
        if(JSON.stringify(selectRowData) !== '{}') {
            setInputData({
                boardId: selectRowData.boardId,
                boardTitle: selectRowData.boardTitle,
                boardContent: selectRowData.boardContent
            })
        }
    }
}